import {
  Brain,
  Mic,
  BarChart3,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Features() {
  const features = [
    {
      title: "AI Question Generation",
      description:
        "Generate topic-specific DSA interview questions instantly.",
      icon: Brain,
    },
    {
      title: "Voice Answers",
      description:
        "Answer naturally using speech recognition.",
      icon: Mic,
    },
    {
      title: "AI Evaluation",
      description:
        "Receive detailed feedback and improvement suggestions.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map(
            (feature) => {
              const Icon =
                feature.icon;

              return (
                <Card
                  key={feature.title}
                >
                  <CardHeader>
                    <Icon className="h-8 w-8 mb-4" />

                    <CardTitle>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    {
                      feature.description
                    }
                  </CardContent>
                </Card>
              );
            }
          )}

        </div>
      </div>
    </section>
  );
}