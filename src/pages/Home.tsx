import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home as HomeIcon, Building, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const quickServices = [
  {
    icon: HomeIcon,
    title: "Residential Fencing",
    description: "Beautiful and functional fencing solutions for your home.",
    link: "/services"
  },
  {
    icon: Building,
    title: "Commercial Fencing",
    description: "Professional-grade security and boundary solutions.",
    link: "/services"
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "High-quality wood, vinyl, aluminum, and chain link options.",
    link: "/services"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        
        {/* Quick Services Overview */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Fencing{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional fence installation and repair services for residential and commercial properties.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {quickServices.map((service, index) => (
                <Card 
                  key={service.title}
                  className="group hover:shadow-elegant smooth-transition cursor-pointer animate-scale-in border-0 soft-shadow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-hero-gradient p-3 rounded-full w-fit mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary smooth-transition">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Link to={service.link}>
                      <Button 
                        variant="outline" 
                        className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary smooth-transition"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/services">
                <Button 
                  size="lg" 
                  className="bg-hero-gradient hover:shadow-accent text-lg px-8 py-6"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Why Columbia Trusts{" "}
                  <span className="bg-hero-gradient bg-clip-text text-transparent">
                    TopRail Fence
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  With over 25 years of experience serving Columbia and surrounding areas, 
                  we've built our reputation on quality craftsmanship and exceptional customer service.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Licensed & Insured Professional Team",
                    "Premium Materials & Craftsmanship", 
                    "Free Estimates & Competitive Pricing",
                    "24/7 Emergency Repair Services"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/about">
                    <Button 
                      size="lg" 
                      className="bg-hero-gradient hover:shadow-accent text-lg px-8 py-6"
                    >
                      Learn About Us
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
                    >
                      Get Free Estimate
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
                {[
                  { number: "500+", label: "Happy Customers" },
                  { number: "25+", label: "Years Experience" },
                  { number: "100%", label: "Licensed & Insured" },
                  { number: "5★", label: "Average Rating" }
                ].map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="bg-card p-6 rounded-xl soft-shadow text-center hover:shadow-elegant smooth-transition animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;