import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      // Show consent banner after 2 seconds
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowConsent(false);
    // TODO: Initialize analytics and tracking
  };

  const declineCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zen-dark text-white p-4 shadow-lg z-50 transform transition-transform duration-300">
      <Card className="max-w-7xl mx-auto bg-zen-dark border-gray-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4">
          <div className="text-sm">
            <p className="text-white">
              We use cookies to enhance your experience and analyze site usage. By continuing, you consent to our use of cookies.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={acceptCookies}
              className="bg-zen-orange text-white hover:bg-orange-600 transition-colors"
              size="sm"
            >
              Accept All
            </Button>
            <Button
              onClick={declineCookies}
              variant="outline"
              className="border-gray-300 bg-transparent text-gray-300 hover:bg-gray-300 hover:text-zen-dark transition-colors"
              size="sm"
            >
              Decline
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
