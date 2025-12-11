import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countryCodes = [
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+33", country: "FR" },
  { code: "+49", country: "DE" },
  { code: "+39", country: "IT" },
  { code: "+34", country: "ES" },
  { code: "+31", country: "NL" },
  { code: "+32", country: "BE" },
  { code: "+41", country: "CH" },
  { code: "+43", country: "AT" },
  { code: "+351", country: "PT" },
  { code: "+353", country: "IE" },
  { code: "+46", country: "SE" },
  { code: "+47", country: "NO" },
  { code: "+45", country: "DK" },
  { code: "+358", country: "FI" },
  { code: "+48", country: "PL" },
  { code: "+61", country: "AU" },
  { code: "+64", country: "NZ" },
  { code: "+81", country: "JP" },
  { code: "+82", country: "KR" },
  { code: "+86", country: "CN" },
  { code: "+91", country: "IN" },
  { code: "+55", country: "BR" },
  { code: "+52", country: "MX" },
  { code: "+971", country: "AE" },
];

export function OptInForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+33");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ fullName, email, phone: `${countryCode}${phoneNumber}` });
  };

  return (
    <section className="mt-12 border-t-4 border-primary bg-background p-6 md:p-10 rounded-sm shadow-sm">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-3">
          Check Your Eligibility to Join the Program
        </h2>
        <p className="text-muted-foreground mb-8">
          Register below to be contacted by an official program consultant.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-foreground font-medium">
              Full Name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground font-medium">
              Phone Number
            </Label>
            <div className="flex gap-2">
              <Select value={countryCode} onValueChange={setCountryCode}>
                <SelectTrigger className="w-28 h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countryCodes.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      {c.country} {c.code}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="flex-1 h-12"
              />
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full h-14 text-lg font-semibold mt-4"
          >
            Get Started
          </Button>
        </form>
      </div>
    </section>
  );
}