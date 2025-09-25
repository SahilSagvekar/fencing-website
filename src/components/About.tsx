import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Clock, Users, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { number: "500+", label: "Satisfied Customers", icon: Users },
  { number: "25+", label: "Years Experience", icon: Clock },
  { number: "100%", label: "Licensed & Insured", icon: Shield },
  { number: "5★", label: "Average Rating", icon: Star }
];

const achievements = [
  "Better Business Bureau A+ Rating",
  "Fully Licensed & Insured",
  "Local Family-Owned Business",
  "Professional Installation Crew",
  "Premium Material Suppliers",
  "Comprehensive Warranty Coverage"
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-accent text-accent-foreground px-4 py-1">
                About TopRail Fence Columbia
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Columbia's Most Trusted{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Fence Professionals
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over 25 years, TopRail Fence Columbia has been the area's premier choice for 
                quality fence installation and service. Our commitment to excellence, combined with 
                superior craftsmanship and premium materials, has earned us the trust of hundreds 
                of satisfied customers throughout Columbia and the surrounding areas.
              </p>
              
              <p className="text-muted-foreground">
                As a locally-owned and operated business, we understand the unique needs of our 
                community. From protecting your family's privacy to securing your commercial property, 
                we deliver solutions that combine functionality with lasting beauty.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose TopRail Fence?</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((achievement) => (
                  <div key={achievement} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-hero-gradient hover:shadow-accent text-lg px-8 py-6"
                >
                  Request Free Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-card p-6 rounded-xl soft-shadow text-center hover:shadow-elegant smooth-transition animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-hero-gradient p-3 rounded-full w-fit mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12">
            <Award className="w-12 h-12 text-accent mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "To provide Columbia families and businesses with exceptional fencing solutions that 
              enhance security, privacy, and property value while delivering unmatched customer service 
              and craftsmanship that stands the test of time."
            </p>
            <div className="mt-6 text-sm text-muted-foreground font-medium">
              — The TopRail Fence Columbia Team
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};