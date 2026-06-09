"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { QuestionList } from "@/components/QuestionList";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [problem, setProblem] =
    useState("");

  const [questions, setQuestions] =
    useState<string[]>([]);

  const [isLoading, setIsLoading] =
    useState(false);

  const [showQuestions, setShowQuestions] =
    useState(false);

  async function handleSubmit() {
    if (!problem.trim()) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        "/api/questions",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            topic: problem,
          }),
        }
      );

      const data =
        await response.json();

      setQuestions(
        data.questions
      );

      setShowQuestions(true);
    } catch (error) {
      console.error(
        "Failed to generate questions:",
        error
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>
            DSA Interview Simulator
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Textarea
            value={problem}
            onChange={(e) =>
              setProblem(
                e.target.value
              )
            }
            placeholder="Enter DSA problem name..."
          />

          <Button
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading
              ? "Generating..."
              : "Submit"}
          </Button>

          {showQuestions && (
            <QuestionList
              questions={questions}
            />
          )}
        </CardContent>
      </Card>
    </main>
  );
}