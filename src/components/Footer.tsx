import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  "Residential Fencing",
  "Commercial Fencing", 
  "Privacy Fences",
  "Chain Link Fencing",
  "Vinyl Fencing",
  "Wood Fencing",
  "Fence Repairs",
  "Gate Installation"
];

const serviceAreas = [
  "Columbia, SC",
  "Lexington, SC",
  "Irmo, SC",
  "West Columbia, SC",
  "Cayce, SC",
  "Forest Acres, SC",
  "Springdale, SC",
  "Pine Ridge, SC"
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">TopRail Fence</h3>
              <p className="text-primary-foreground/80 mb-4">
                Columbia's premier fence installation company, serving the community 
                with quality craftsmanship for over 25 years.
              </p>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-primary-foreground/80">5.0 Rating</span>
              </div>
              
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <span className="text-primary-foreground/80 text-sm">
                    {area}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-primary-foreground/60 mt-4">
              *Free estimates within 25 miles
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <a 
                    href="tel:8037697747" 
                    className="text-primary-foreground font-semibold hover:text-accent smooth-transition"
                  >
                    (803) 769-7747
                  </a>
                  <p className="text-xs text-primary-foreground/80">Available 24/7</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:info@toprailfence-columbia.com" 
                    className="text-primary-foreground hover:text-accent smooth-transition text-sm"
                  >
                    info@toprailfence-columbia.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground text-sm">
                    Serving Columbia & 
                    <br />Surrounding Areas
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-primary-glow/20 rounded-lg">
              <h5 className="font-semibold text-sm mb-2">Business Hours</h5>
              <div className="text-xs text-primary-foreground/80 space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2024 TopRail Fence Columbia. All rights reserved. Licensed & Insured.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">
                Terms of Service
              </a>
              <div className="text-primary-foreground/60">
                License #ABC123456
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};