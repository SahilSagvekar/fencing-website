import { Button } from "@/components/ui/button";
import { Phone, Shield, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-fence-installation.jpg";
import { QuoteForm } from "./QuoteForm";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-subtle-gradient pt-7">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent">
                <Award className="w-5 h-5" />
                <span className="font-semibold text-sm tracking-wide uppercase">
                  Columbia's Premier Fence Company
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
         
                Professional{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Fence Installation
                </span>{" "}
                You Can Trust
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Transform your property with premium fencing solutions. Our experienced team delivers 
                exceptional craftsmanship for residential, commercial, and agricultural projects 
                throughout Columbia and surrounding areas.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Shield className="w-4 h-4 mr-2 text-primary" />
                Licensed & Insured
              </div>
              <div className="flex items-center text-muted-foreground">
                <Users className="w-4 h-4 mr-2 text-primary" />
                500+ Happy Customers
              </div>
              <div className="flex items-center text-muted-foreground">
                <Award className="w-4 h-4 mr-2 text-primary" />
                25+ Years Experience
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-hero-gradient hover:shadow-accent text-lg px-8 py-6 animate-glow"
                >
                  Get Free Estimate
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
                asChild
              >
                <a href="tel:8037697747" className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (803) 769-7747
                </a>
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              Available 24/7 • Free Estimates • Same-Day Response
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden elegant-shadow">
             
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
         {/* Right Form */}
          <div className="relative animate-slide-in-right">
            <QuoteForm />   {/* 👈 reusable form */}
          </div>
            
            
            {/*<div className="absolute -top-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl accent-shadow animate-scale-in">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">★★★★★</div>
                <div className="text-xs">Top Rated</div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};