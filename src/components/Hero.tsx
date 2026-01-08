import { Button } from "./ui/button";
import { ImageWithFallback } from "./images/ImageWithFallback";
import { ArrowRight, Users, Target, Trophy } from "lucide-react";

export function Hero() {
  const handleScrollToSection = () => {
    const targetElement = document.getElementById("contact");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
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
              <a
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-10 rounded-md px-6 has-[>svg]:px-4 w-12 bg-secondary hover:bg-secondary/90"
                href={"#contact"}
              >
                Start Your Search
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
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
                src="images/signing_docs.jpg"
                alt="Professional business meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg sm:block hidden">
              <div className="text-sm font-medium">Now Accepting</div>
              <div className="text-lg font-bold">New Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
