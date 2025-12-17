import type { VercelRequest, VercelResponse } from '@vercel/node';

interface CountryDetectionResult {
  ip: string;
  countryCode: string;
  country: string | null;
  city: string | null;
  region: string | null;
  accuracy: 'high' | 'medium' | 'low';
  source: string;
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Enable CORS
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  try {
    // Method 1: Use Vercel's geolocation headers (most accurate on Vercel)
    const vercelCountry = request.headers['x-vercel-ip-country'] as string;
    const vercelCountryRegion = request.headers['x-vercel-ip-country-region'] as string;
    const vercelCity = request.headers['x-vercel-ip-city'] as string;
    const vercelIp = request.headers['x-vercel-ip'] as string || 
                     request.headers['x-forwarded-for']?.toString().split(',')[0] ||
                     request.headers['x-real-ip'] as string ||
                     '';

    if (vercelCountry) {
      return response.status(200).json({
        ip: vercelIp,
        countryCode: vercelCountry.toUpperCase(),
        country: vercelCountry.toUpperCase(),
        city: vercelCity || null,
        region: vercelCountryRegion || null,
        accuracy: 'high',
        source: 'vercel-headers',
      } as CountryDetectionResult);
    }

    // Method 2: Try Cloudflare headers (if behind Cloudflare)
    const cfCountry = request.headers['cf-ipcountry'] as string;
    const cfIp = request.headers['cf-connecting-ip'] as string;

    if (cfCountry && cfCountry !== 'XX') {
      return response.status(200).json({
        ip: cfIp || vercelIp,
        countryCode: cfCountry.toUpperCase(),
        country: cfCountry.toUpperCase(),
        city: null,
        region: null,
        accuracy: 'high',
        source: 'cloudflare-headers',
      } as CountryDetectionResult);
    }

    // Method 3: Fallback to IP geolocation API (ipapi.co)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const ipapiResponse = await fetch('https://ipapi.co/json/', {
        headers: {
          'User-Agent': 'Mozilla/5.0',
        },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (ipapiResponse.ok) {
        const ipapiData = await ipapiResponse.json();
        if (ipapiData.country_code) {
          return response.status(200).json({
            ip: ipapiData.ip || vercelIp,
            countryCode: ipapiData.country_code.toUpperCase(),
            country: ipapiData.country_name || null,
            city: ipapiData.city || null,
            region: ipapiData.region || null,
            accuracy: 'medium',
            source: 'ipapi.co',
          } as CountryDetectionResult);
        }
      }
    } catch (error) {
      console.warn('ipapi.co failed:', error);
    }

    // Method 4: Try ipinfo.io as backup
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const ipinfoResponse = await fetch('https://ipinfo.io/json', {
        headers: {
          'User-Agent': 'Mozilla/5.0',
        },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (ipinfoResponse.ok) {
        const ipinfoData = await ipinfoResponse.json();
        if (ipinfoData.country) {
          return response.status(200).json({
            ip: ipinfoData.ip || vercelIp,
            countryCode: ipinfoData.country.toUpperCase(),
            country: ipinfoData.country.toUpperCase(),
            city: ipinfoData.city || null,
            region: ipinfoData.region || null,
            accuracy: 'medium',
            source: 'ipinfo.io',
          } as CountryDetectionResult);
        }
      }
    } catch (error) {
      console.warn('ipinfo.io failed:', error);
    }

    // Method 5: Try ip-api.com as last resort
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      const ipApiResponse = await fetch('http://ip-api.com/json/?fields=status,message,country,countryCode,city,regionName,query', {
        headers: {
          'User-Agent': 'Mozilla/5.0',
        },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (ipApiResponse.ok) {
        const ipApiData = await ipApiResponse.json();
        if (ipApiData.status === 'success' && ipApiData.countryCode) {
          return response.status(200).json({
            ip: ipApiData.query || vercelIp,
            countryCode: ipApiData.countryCode.toUpperCase(),
            country: ipApiData.country || null,
            city: ipApiData.city || null,
            region: ipApiData.regionName || null,
            accuracy: 'low',
            source: 'ip-api.com',
          } as CountryDetectionResult);
        }
      }
    } catch (error) {
      console.warn('ip-api.com failed:', error);
    }

    // Final fallback: Default to France
    return response.status(200).json({
      ip: vercelIp || 'unknown',
      countryCode: 'FR',
      country: 'FR',
      city: null,
      region: null,
      accuracy: 'low',
      source: 'fallback',
    } as CountryDetectionResult);

  } catch (error) {
    console.error('Country detection error:', error);
    return response.status(500).json({
      error: 'Failed to detect country',
      ip: '',
      countryCode: 'FR',
      country: 'FR',
      city: null,
      region: null,
      accuracy: 'low',
      source: 'error-fallback',
    } as CountryDetectionResult);
  }
}

