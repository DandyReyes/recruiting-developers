import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Sarah found us the perfect CTO in just 3 weeks. Her understanding of both technical skills and cultural fit was exceptional. The candidate she placed has been instrumental in scaling our engineering team.",
    author: "Michael Chen",
    title: "CEO",
    company: "TechFlow Solutions",
    rating: 5
  },
  {
    quote: "Working with Sarah was a game-changer for our hiring process. She doesn't just send resumes – she provides strategic insights and truly partners with us to find the right talent. Highly recommended!",
    author: "Jennifer Rodriguez",
    title: "VP of Human Resources",
    company: "Global Financial Partners",
    rating: 5
  },
  {
    quote: "Sarah helped me transition from a startup environment to a Fortune 500 company. Her guidance throughout the process was invaluable, and she made sure it was the right cultural and career fit.",
    author: "David Park",
    title: "Senior Product Manager",
    company: "InnovateCorp",
    rating: 5
  },
  {
    quote: "The quality of candidates Sarah presents is consistently outstanding. She saves us time by pre-screening thoroughly and only presenting candidates who truly match our requirements.",
    author: "Lisa Thompson",
    title: "Head of Talent Acquisition",
    company: "MedTech Innovations",
    rating: 5
  },
  {
    quote: "Sarah's network and industry knowledge are impressive. She connected us with a VP of Sales who exceeded all expectations and drove 40% revenue growth in their first year.",
    author: "Robert Kim",
    title: "Founder & CEO",
    company: "GrowthLabs",
    rating: 5
  },
  {
    quote: "Professional, responsive, and results-driven. Sarah understands the urgency of hiring needs while maintaining high standards. She's become our go-to recruiter for all senior-level positions.",
    author: "Amanda Foster",
    title: "Chief Operating Officer",
    company: "Strategic Consulting Group",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Clients & Candidates Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what hiring managers and candidates have to say about their experience working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  <div className="text-sm text-secondary font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">4.9</div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <div>Average Rating</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">200+</div>
              <div>Client Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div>Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}