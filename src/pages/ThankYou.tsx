import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsHeader } from "@/components/news/NewsHeader";
import { NewsFooter } from "@/components/news/NewsFooter";

// Extend Window interface for Taboola
declare global {
  interface Window {
    _tfa?: Array<any>;
  }
}

const ThankYou = () => {
  const navigate = useNavigate();

  // Fire Taboola conversion event when component mounts (in case of direct navigation or refresh)
  useEffect(() => {
    // Initialize Taboola array if it doesn't exist
    if (typeof window !== 'undefined') {
      window._tfa = window._tfa || [];
    }

    // Small delay to ensure Taboola script is loaded
    const fireTaboolaEvent = () => {
      if (typeof window !== 'undefined' && window._tfa) {
        try {
          window._tfa.push({
            notify: 'event',
            name: 'Submit_Application-A_(Codeless)',
            id: 1963480
          });
          console.log('✅ Taboola conversion event fired on thank you page: Submit_Application-A_(Codeless)');
        } catch (error) {
          console.warn('Taboola event error:', error);
        }
      } else {
        // Retry after a short delay if Taboola isn't loaded yet (max 3 retries)
        let retries = 0;
        const maxRetries = 3;
        const retryInterval = setInterval(() => {
          retries++;
          if (typeof window !== 'undefined' && window._tfa) {
            try {
              window._tfa.push({
                notify: 'event',
                name: 'Submit_Application-A_(Codeless)',
                id: 1963480
              });
              console.log('✅ Taboola conversion event fired on thank you page (retry): Submit_Application-A_(Codeless)');
              clearInterval(retryInterval);
            } catch (error) {
              console.warn('Taboola event error:', error);
            }
          }
          if (retries >= maxRetries) {
            clearInterval(retryInterval);
          }
        }, 500);
      }
    };

    fireTaboolaEvent();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NewsHeader />
      
      <main className="container py-12 md:py-16 max-w-2xl flex-1 flex items-center">
        <div className="w-full">
          <div className="text-center space-y-6">
            {/* Success Icon */}
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                <div className="relative bg-primary/10 rounded-full p-6">
                  <CheckCircle2 className="w-16 h-16 md:w-20 md:h-20 text-primary" strokeWidth={2} />
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Thank You!
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Your registration has been successfully submitted.
            </p>

            {/* Description */}
            <div className="mt-8 p-6 md:p-8 bg-card border border-border rounded-lg shadow-sm">
              <p className="text-base md:text-lg text-foreground mb-4 leading-relaxed">
                An official program consultant will contact you shortly to discuss your eligibility and next steps.
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                Please check your email for a confirmation message and keep your phone nearby for our call.
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <Button
                onClick={() => navigate("/")}
                size="lg"
                className="h-14 text-lg font-semibold px-8"
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <NewsFooter />
    </div>
  );
};

export default ThankYou;




