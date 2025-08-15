import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Settings, 
  Search, 
  ShieldQuestion, 
  GraduationCap, 
  AlertTriangle, 
  Headphones,
  CheckCircle,
  Users,
  Target,
  Wrench,
  ArrowRight,
  Star,
  Shield,
  TrendingUp,
  Award
} from "lucide-react";
import { Link } from "wouter";
import cdfiServicesImage from "@assets/cdfi services_1755044034761.webp";

export default function Services() {
  const approach = [
    {
      icon: Users,
      title: "Meet & Learn",
      description: "Meet with the CDFI to learn their particular circumstances"
    },
    {
      icon: Target,
      title: "Customized Strategy",
      description: "Combine our experience with CDFIs along with the specifics of the CDFI to create a customized approach, focusing first on cybersecurity controls that will bring the most improvement for the least expenditure and effort"
    },
    {
      icon: Wrench,
      title: "Implementation Support",
      description: "Help the CDFI implement the cybersecurity controls"
    }
  ];

  const services = [
    {
      icon: ShieldQuestion,
      title: "Expert Guidance",
      description: "Expert guidance for resource-constrained organizations"
    },
    {
      icon: Search,
      title: "Risk Assessment",
      description: "Risk assessment and determining what cybersecurity controls to prioritize"
    },
    {
      icon: Settings,
      title: "Implementation Assistance",
      description: "Hands-on support to implement cybersecurity controls effectively"
    },
    {
      icon: GraduationCap,
      title: "Staff Training",
      description: "Comprehensive training programs for your team"
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Continuous support to maintain your security posture"
    }
  ];

  return (
    <div>
      {/* Consulting-Style Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zen-light via-white to-slate-50 py-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zen-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Professional Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4 mr-2" />
                Trusted CDFI Security Experts
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-zen-dark leading-tight">CDFI Cybersecurity Services</span>
              </h1>

              {/* Description */}
              <p className="text-xl text-zen-muted mb-8 leading-relaxed max-w-2xl">
                We offer comprehensive cybersecurity services tailored specifically for Community Development Financial Institutions.
              </p>



              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button 
                    className="bg-zen-orange text-white hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl group" 
                    size="lg"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-2 border-zen-orange text-zen-orange hover:bg-zen-orange hover:text-white transition-all duration-300" 
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById('why-choose');
                    if (element) {
                      const elementPosition = element.offsetTop;
                      const offsetPosition = elementPosition - 100; // Adjust scroll offset
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  View Our Approach
                </Button>
              </div>
            </div>

            {/* Right Visual - Professional Consulting Image */}
            <div className="relative">
              <div className="relative z-10">
                <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <img 
                      src={cdfiServicesImage} 
                      alt="Professional cybersecurity consulting services"
                      className="w-full rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Professional Stats - Centered at Bottom */}
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-zen-light">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-zen-dark">CDFI Specialized</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-zen-light">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-zen-dark">Proven Results</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-zen-light">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-zen-dark">Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          <div id="why-choose" className="bg-zen-light rounded-2xl p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-semibold text-zen-dark mb-6">
                Why Choose ZenPrivata?
              </h2>
              <p className="text-lg text-zen-muted leading-relaxed">
                ZenPrivata is the preferred security and privacy provider for CDFIs. We've worked with both CDFI associations and individual CDFIs and know the unique needs that CDFIs have.
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-24 mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-zen-dark mb-4">Our Approach</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {approach.map((step, index) => (
                <Card key={index} className="border hover:shadow-lg transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-zen-orange bg-opacity-10 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <step.icon className="text-zen-orange h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-zen-dark mb-4">{step.title}</h3>
                    <p className="text-zen-muted">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* What We Provide */}
          <div className="mb-24 mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-zen-dark mb-4">What We Provide</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border hover:shadow-lg transition-all">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-zen-orange bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="text-zen-orange h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-zen-dark mb-4">{service.title}</h3>
                    <p className="text-zen-muted">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-32 mb-24">
            <h2 className="text-2xl font-semibold text-zen-dark mb-4">Ready to Secure Your CDFI?</h2>
            <p className="text-zen-muted mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your specific needs and learn how our services can help protect your organization.
            </p>
            <Link href="/contact">
              <Button 
                className="bg-zen-orange text-white hover:bg-orange-600 transition-colors" 
                size="lg"
              >
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-zen-dark text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 ZenPrivata. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}