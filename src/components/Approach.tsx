import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, Code, Users, Target, MessageSquare, Lightbulb } from "lucide-react";

const approaches = [
  {
    icon: Code,
    title: "Technical Deep Dive",
    description: "I personally review code samples and assess technical skills because I understand what good development looks like.",
    points: [
      "Code quality assessment",
      "Architecture discussions",
      "Problem-solving approach",
      "Technical culture fit"
    ]
  },
  {
    icon: Users,
    title: "Team Dynamics Focus",
    description: "Having worked on development teams, I know that technical skills alone don't guarantee success.",
    points: [
      "Communication style assessment",
      "Collaboration preferences", 
      "Mentoring capabilities",
      "Leadership potential"
    ]
  },
  {
    icon: Target,
    title: "Honest Expectations",
    description: "No overselling candidates or positions. I set realistic expectations based on actual project needs and career goals.",
    points: [
      "Transparent skill assessment",
      "Realistic timeline discussions",
      "Clear role expectations",
      "Growth opportunity mapping"
    ]
  },
  {
    icon: MessageSquare,
    title: "Developer-to-Developer Communication",
    description: "I speak your language - from sprint planning to technical debt, I understand the day-to-day reality of development work.",
    points: [
      "Technical terminology fluency",
      "Understanding of dev processes",
      "Awareness of industry challenges",
      "Realistic project assessment"
    ]
  }
];

const differentiators = [
  "I've actually written production code, not just read resumes",
  "I understand the difference between knowing a framework and mastering it",
  "I can spot red flags in technical interviews that others miss",
  "I focus on long-term fit, not just filling positions quickly",
  "Small business means you work directly with me, not a junior recruiter",
  "I'm building my reputation one quality placement at a time"
];

export function Approach() {
  return (
    <section id="approach" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why a Developer-Turned-Recruiter 
            <span className="text-secondary"> Makes the Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Most recruiters learn about technology from the outside. I learned it from 8 years of writing code, debugging systems, and working on development teams. That inside knowledge changes everything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {approaches.map((approach, index) => {
            const IconComponent = approach.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{approach.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {approach.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {approach.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-accent/5 border-accent/20">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Lightbulb className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="text-2xl">What Sets Reyes Recruiting Apart</CardTitle>
            <CardDescription>
              Here's what you get when you work with someone who's actually been in your shoes:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {differentiators.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}