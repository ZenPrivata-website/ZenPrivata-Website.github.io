import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/Small Logo_1754618963157.jpg";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/product", label: "Product" },
    { path: "/services", label: "Services" },
    { path: "/team", label: "Team" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="ZenPrivata Logo" className="w-8 h-8 object-contain" />
              <div>
                <span className="text-zen-muted font-light text-xl">ZEN</span>
                <span className="text-zen-dark font-bold text-xl">PRIVATA</span>
                <sup className="text-xs">®</sup>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`transition-colors font-medium ${
                  isActive(item.path)
                    ? "text-zen-dark"
                    : "text-zen-muted hover:text-zen-orange"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://blog.zenprivata.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zen-muted hover:text-zen-orange transition-colors font-medium"
            >
              Blog
            </a>
            <Link href="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Button 
                variant="no-hover"
                className="bg-zen-orange text-white hover:bg-orange-600 transition-colors"
              >
                Request Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zen-dark p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`transition-colors font-medium ${
                    isActive(item.path)
                      ? "text-zen-dark"
                      : "text-zen-muted hover:text-zen-orange"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://blog.zenprivata.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zen-muted hover:text-zen-orange transition-colors font-medium"
              >
                Blog
              </a>
              <Link href="/contact">
                <Button 
                  variant="no-hover"
                  className="bg-zen-orange text-white hover:bg-orange-600 transition-colors w-full text-left"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Request Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
