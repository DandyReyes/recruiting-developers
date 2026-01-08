import { ImageWithFallback } from "./images/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Award, BookOpen, Globe, Heart } from "lucide-react";

export function About() {
  const achievements = [
    {
      icon: Award,
      title: "Developer Background",
      description:
        "8 years building software - I know what good code looks like",
    },
    {
      icon: BookOpen,
      title: "Industry Insider",
      description:
        "Deep understanding of tech stacks, team dynamics, and project challenges",
    },
    {
      icon: Globe,
      title: "Quality Focus",
      description:
        "Small business approach means personal attention to every placement",
    },
    {
      icon: Heart,
      title: "Honest Approach",
      description:
        "No overselling - just honest assessment of fit and potential",
    },
  ];

  const industries = [
    "Web Development",
    "Mobile Applications",
    "Cloud & DevOps",
    "Data Engineering",
    "AI & Machine Learning",
    "Startups & Scale-ups",
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              A Developer Who Understands
              <span className="text-secondary"> Your Hiring Challenges</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Hi, I'm Dandy Reyes, founder of Reyes Recruiting. After 8 years as
              a software developer, I've experienced firsthand the challenges of
              technical hiring - from both sides of the table. I've seen great
              developers overlooked because of poor interviewing, and I've
              watched companies struggle to find talent that actually fits their
              needs.
            </p>

            <p className="text-base text-muted-foreground mb-8">
              That's why I started Reyes Recruiting. I understand the technical
              skills that matter, the team dynamics that work, and the cultural
              fit that leads to long-term success. I'm not just matching
              keywords on resumes - I'm leveraging my deep understanding of
              software development to connect companies with developers who will
              actually thrive in their environment.
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Technical Specializations
              </h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-secondary/10 text-secondary"
                  >
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={index} className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <IconComponent className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-foreground">
                            {achievement.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="images/coding_man.jpg"
                alt="Diverse team collaboration"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -top-6 -left-6 bg-card text-foreground p-6 rounded-xl shadow-lg border border-border/50">
              <div className="text-2xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">
                Years as Developer
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg sm:block hidden">
              <div className="text-2xl font-bold">New</div>
              <div className="text-sm">Fresh Perspective</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
