import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Download, Star } from "lucide-react";
import dashboardTeamImage from "@assets/image_1755043696494.png";

export default function HeroSection() {
  const handleRequestDemo = () => {
    window.location.href = "/contact";
  };

  const handleDownloadFramework = () => {
    // Scroll to lead magnet form
    document.getElementById('lead-magnet')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Trust badge */}
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span className="text-sm font-medium text-orange-700">Trusted by CDFIs Nationwide</span>
            </div>

            {/* Main headline */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Secure Your{" "}
                </span>
                <span className="text-gray-900">
                  CDFI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                ZenPrivata is the preferred cybersecurity provider for Community Development Financial Institutions. We know the unique needs that CDFIs have.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.location.href = "/contact"}
                className="bg-zen-orange text-white hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                size="lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Request Free Consultation
              </Button>
              <Button
                onClick={handleDownloadFramework}
                variant="outline"
                className="border-2 border-zen-orange text-zen-orange hover:bg-zen-orange hover:text-white transition-all duration-300"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Framework
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative lg:pl-8">
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <img 
                  src={dashboardTeamImage} 
                  alt="Team collaborating on cybersecurity dashboard"
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
