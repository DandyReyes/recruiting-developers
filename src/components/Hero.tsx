import { Button } from "./ui/button";
import { ImageWithFallback } from "./images/ImageWithFallback";
import { ArrowRight, Users, Target, Trophy } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-background py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Find the Perfect{" "}
              <span className="text-secondary">Tech Talent</span> for Your Team
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Hi, I'm Dandy Reyes. With 8 years as a software developer, I
              understand the tech industry from the inside out. Now I'm
              leveraging that experience to help companies find exceptional
              technical talent who actually fit their needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Start Your Search
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View My Track Record
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">
                  Years as Developer
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Tech Industry Focus
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-primary">Fresh</div>
                <div className="text-sm text-muted-foreground">Perspective</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzU5NjEzMjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional business meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
              <div className="text-sm font-medium">Now Accepting</div>
              <div className="text-lg font-bold">New Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
