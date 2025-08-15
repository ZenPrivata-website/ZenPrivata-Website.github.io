import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Zap, Users, ArrowRight, Star, Activity, BarChart3, Target } from "lucide-react";
import { Link } from "wouter";

export default function Product() {
  const features = [
    "Real-time cybersecurity progress tracking",
    "Visual framework implementation status", 
    "Risk-based task prioritization"
  ];

  const taskFeatures = [
    "Automated task generation from framework controls",
    "Team collaboration tools",
    "Progress tracking and notifications"
  ];

  const aiFeatures = [
    "Contextual implementation guidance",
    "Best practice recommendations",
    "24/7 intelligent support"
  ];

  return (
    <div>
      {/* Creative Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zen-light via-white to-blue-50 py-24 lg:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zen-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-zen-orange/5 to-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Main Heading */}
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-zen-dark leading-tight">CDFI Security Platform</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-zen-muted mb-8 leading-relaxed max-w-2xl">
                Build, manage, and simplify your cybersecurity program using our platform that was specifically designed for CDFIs.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button 
                    className="bg-zen-orange text-white hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    size="lg"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-2 border-zen-orange text-zen-orange hover:bg-zen-orange hover:text-white transition-all duration-300" 
                  size="lg"
                  onClick={() => {
                    const element = document.getElementById('comprehensive-dashboard');
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
                  View Platform Features
                </Button>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10">
                <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <img 
                      src="/Screenshot1.webp" 
                      alt="CDFI Security Platform Dashboard"
                      className="w-full rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Features Grid - Centered at Bottom */}
          <div className="mt-16 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="flex items-center space-x-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-zen-light">
                <Shield className="w-5 h-5 text-zen-orange" />
                <span className="text-sm font-medium text-zen-dark">CDFI-Focused</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-zen-light">
                <Zap className="w-5 h-5 text-zen-orange" />
                <span className="text-sm font-medium text-zen-dark">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-zen-light">
                <Users className="w-5 h-5 text-zen-orange" />
                <span className="text-sm font-medium text-zen-dark">Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Security Intelligence Overview */}
            <div id="comprehensive-dashboard" className="text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-zen-dark mb-6">
                  Intelligence-Driven Security Management
                </h2>
                <p className="text-lg text-zen-muted mb-12 leading-relaxed">
                  Monitor your cybersecurity program progress across all framework controls with real-time visibility into your security posture. Track implementation status, identify gaps, and prioritize actions with intelligence designed for CDFIs.
                </p>
                
                {/* Key Capabilities Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="p-6 bg-gradient-to-br from-zen-light to-white rounded-xl border border-zen-light shadow-sm">
                    <div className="w-12 h-12 bg-zen-orange/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Activity className="w-6 h-6 text-zen-orange" />
                    </div>
                    <h3 className="text-lg font-semibold text-zen-dark mb-2">Real-time Progress Tracking</h3>
                    <p className="text-zen-muted text-sm">Monitor implementation progress across all cybersecurity framework controls with live status updates and completion metrics.</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-zen-light to-white rounded-xl border border-zen-light shadow-sm">
                    <div className="w-12 h-12 bg-zen-orange/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <BarChart3 className="w-6 h-6 text-zen-orange" />
                    </div>
                    <h3 className="text-lg font-semibold text-zen-dark mb-2">Visual Framework Status</h3>
                    <p className="text-zen-muted text-sm">Clear visual indicators show which controls are complete, in progress, or need attention across your security framework.</p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-zen-light to-white rounded-xl border border-zen-light shadow-sm">
                    <div className="w-12 h-12 bg-zen-orange/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <Target className="w-6 h-6 text-zen-orange" />
                    </div>
                    <h3 className="text-lg font-semibold text-zen-dark mb-2">Risk-based Prioritization</h3>
                    <p className="text-zen-muted text-sm">Intelligent task prioritization helps you focus on the most critical security gaps first, optimizing your limited resources.</p>
                  </div>
                </div>

                {/* Enhanced Features List */}
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-zen-light">
                      <CheckCircle className="text-zen-success mt-0.5 h-5 w-5 flex-shrink-0" />
                      <span className="text-zen-muted font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Task Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <img 
                      src="/Screenshot3_1754619995939.webp" 
                      alt="Tasks & Approvals Hub"
                      className="w-full rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-semibold text-zen-dark mb-4">
                  Collaborative Task Management
                </h2>
                <p className="text-zen-muted mb-6 leading-relaxed">
                  Enables collaboration among CDFI team and consultants or outsourced IT team. Transform security implementations into manageable tasks with clear ownership, deadlines, and progress tracking designed for resource-constrained organizations.
                </p>
                <ul className="space-y-2 text-zen-muted">
                  {taskFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Control Implementation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-zen-dark mb-4">
                  Simplified Cybersecurity Framework Implementation
                </h2>
                <p className="text-zen-muted mb-6 leading-relaxed">
                  Simplifies complex cybersecurity processes with a structured approach to implementing security controls. Each control provides clear guidance, task breakdown, and evidence collection to ensure comprehensive security coverage.
                </p>
                <ul className="space-y-2 text-zen-muted">
                  <li className="flex items-center">
                    <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                    Step-by-step control implementation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                    Evidence collection and documentation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                    Progress tracking and status updates
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <img 
                      src="/Screenshot2.webp" 
                      alt="Control Implementation Interface"
                      className="w-full rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <img 
                      src="/Screenshot5.webp" 
                      alt="AI Assistant for Control Implementation"
                      className="w-full rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl font-semibold text-zen-dark mb-4">
                  AI-Powered Cybersecurity Assistant
                </h2>
                <p className="text-zen-muted mb-6 leading-relaxed">
                  Provides expert AI guidance for resource-constrained organizations. Get intelligent guidance on implementing security controls with our AI assistant. Access contextual help, best practices, and step-by-step implementation guidance tailored to your specific CDFI needs.
                </p>
                <ul className="space-y-2 text-zen-muted">
                  {aiFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Professional Reporting */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-zen-dark mb-4">
                  Professional Reporting & Documentation
                </h2>
                <p className="text-zen-muted mb-6 leading-relaxed">
                  Generates professional reports for board presentations and auditors. Create comprehensive documentation that demonstrates your cybersecurity program progress and framework adherence with automated reporting capabilities.
                </p>
                <ul className="space-y-2 text-zen-muted">
                  <li className="flex items-center">
                    <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                    Board-ready progress reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                    Auditor documentation packages
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-zen-success mr-2 h-4 w-4" />
                    Executive summary dashboards
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <img 
                      src="/Screenshot6.webp" 
                      alt="Task Management and Progress Tracking"
                      className="w-full rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <Link href="/contact">
                <Button 
                  className="bg-zen-orange text-white hover:bg-orange-600 transition-colors" 
                  size="lg"
                >
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}