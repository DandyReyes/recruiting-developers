import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import {
  Search,
  UserCheck,
  Building,
  Handshake,
  Clock,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Full-Stack Developer Recruitment",
    description:
      "Find developers who can handle both frontend and backend with real depth, not just buzzword knowledge.",
    features: [
      "React/Node.js Specialists",
      "Python/Django Experts",
      "Modern DevOps Practices",
      "Architecture Assessment",
    ],
  },
  {
    icon: UserCheck,
    title: "Technical Leadership Hiring",
    description:
      "Source engineering managers and tech leads who can actually code AND manage teams effectively.",
    features: [
      "Engineering Managers",
      "Tech Leads",
      "Principal Engineers",
      "Hands-on CTOs",
    ],
  },
  {
    icon: Building,
    title: "Startup Technical Teams",
    description:
      "Help early-stage companies build their core technical team with versatile, growth-minded developers.",
    features: [
      "Founding Engineers",
      "MVP Development Teams",
      "Scaling Specialists",
      "Equity-Motivated Talent",
    ],
  },
  {
    icon: Handshake,
    title: "Technical Consulting",
    description:
      "Leverage my development background to advise on hiring strategy, interview processes, and team structure.",
    features: [
      "Interview Process Design",
      "Technical Assessment Review",
      "Team Structure Advice",
      "Hiring Timeline Planning",
    ],
  },
  {
    icon: Clock,
    title: "Contract & Freelance Placement",
    description:
      "Connect with skilled contractors for specific projects or temporary team augmentation needs.",
    features: [
      "Project-Based Teams",
      "Skill-Specific Contractors",
      "Remote Specialists",
      "Contract-to-Hire Options",
    ],
  },
  {
    icon: Shield,
    title: "Quality-First Placement",
    description:
      "Small business approach means every candidate is personally vetted and every match is carefully considered.",
    features: [
      "Personal Code Review",
      "Culture Fit Assessment",
      "Reference Verification",
      "30-Day Follow-up",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tech-Focused Recruiting Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Specialized recruiting services designed specifically for technology
            companies and technical roles. Every service is backed by real
            development experience and industry insight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-border/50"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    className="text-sm text-secondary font-medium hover:underline"
                    href="#contact"
                  >
                    Learn More
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
