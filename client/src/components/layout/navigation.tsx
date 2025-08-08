import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-zen-orange rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
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
            <Button className="bg-zen-orange text-white hover:bg-orange-600 transition-colors">
              Request Free Demo
            </Button>
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
                  onClick={() => setIsMobileMenuOpen(false)}
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
              <Button className="bg-zen-orange text-white hover:bg-orange-600 transition-colors w-full text-left">
                Request Free Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
