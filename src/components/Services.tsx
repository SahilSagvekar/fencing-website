import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, Shield, Hammer, Wrench, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import privacyFence from "@/assets/privacy-fence.jpg";
import commercialFence from "@/assets/commercial-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";

const services = [
  {
    icon: Home,
    title: "Residential Fencing",
    description: "Beautiful and functional fencing solutions for your home, from privacy fences to decorative borders.",
    image: privacyFence,
    features: ["Privacy Fences", "Picket Fences", "Pool Fencing", "Garden Borders"]
  },
  {
    icon: Building,
    title: "Commercial Fencing",
    description: "Professional-grade security and boundary solutions for businesses and industrial properties.",
    image: commercialFence,
    features: ["Chain Link", "Security Fencing", "Access Gates", "Perimeter Control"]
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "High-quality wood, vinyl, aluminum, and chain link options to match any style and budget.",
    image: vinylFence,
    features: ["Wood Fencing", "Vinyl Fencing", "Aluminum Rails", "Chain Link"]
  }
];

const additionalServices = [
  { icon: Hammer, title: "Custom Design", description: "Tailored solutions for unique requirements" },
  { icon: Wrench, title: "Repairs & Maintenance", description: "Keep your fence looking and working like new" },
  { icon: CheckCircle, title: "Quality Guarantee", description: "Satisfaction guaranteed on all installations" }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-accent font-semibold text-sm tracking-wide uppercase mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Fencing Solutions for{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Every Need
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From residential privacy fences to commercial security solutions, we provide 
            expert installation and premium materials for lasting results.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-elegant smooth-transition cursor-pointer animate-scale-in border-0 soft-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground p-2 rounded-lg">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary smooth-transition"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {additionalServices.map((service, index) => (
            <div 
              key={service.title}
              className="text-center p-6 rounded-xl hover:bg-muted smooth-transition animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="bg-hero-gradient p-3 rounded-full w-fit mx-auto mb-4">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-hero-gradient hover:shadow-accent text-lg px-8 py-6"
            >
              Get Your Free Quote Today
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            No obligation • Professional consultation • Fast response
          </p>
        </div>
      </div>
    </section>
  );
};