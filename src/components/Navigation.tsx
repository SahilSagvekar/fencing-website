import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 smooth-transition">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              TopRail Fence
            </div>
            <div className="ml-2 text-sm text-muted-foreground hidden sm:block">
              Columbia
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary smooth-transition">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary smooth-transition">
              About
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary smooth-transition">
              Gallery
            </a>
            <a href="#contact" className="text-foreground hover:text-primary smooth-transition">
              Contact
            </a>
          </div>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:8037697747"
              className="flex items-center text-primary hover:text-primary-glow smooth-transition"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">(803) 769-7747</span>
            </a>
            <Button variant="default" className="bg-hero-gradient hover:shadow-accent smooth-transition">
              Free Estimate
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#services"
                className="block px-3 py-2 text-foreground hover:text-primary smooth-transition"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-primary smooth-transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-foreground hover:text-primary smooth-transition"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-primary smooth-transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2 border-t border-border">
                <a
                  href="tel:8037697747"
                  className="flex items-center text-primary font-semibold mb-3"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (803) 769-7747
                </a>
                <Button className="w-full bg-hero-gradient">
                  Free Estimate
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};