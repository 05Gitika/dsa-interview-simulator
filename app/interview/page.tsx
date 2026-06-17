"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { QuestionList } from "@/components/QuestionList";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Home() {
  const searchParams =
    useSearchParams();

  const topic =
    searchParams.get("topic");

  const difficulty =
    searchParams.get("difficulty");

  const count =
    searchParams.get("count");

  const [questions, setQuestions] =
    useState<string[]>([]);

  const [isLoading, setIsLoading] =
    useState(false);

  const [showQuestions, setShowQuestions] =
    useState(false);

  async function handleSubmit() {
    if (!topic) return;

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
            topic,
            difficulty,
            count,
          }),
        }
      );

      const data =
        await response.json();

      console.log(data);

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
  useEffect(() => {
    console.log(
      "USE EFFECT RUNNING"
    );

    if (topic) {
      handleSubmit();
    }
  }, [topic]);
  return (
  <main className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden bg-background">
    {/* Background Glow */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
    </div>

    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="w-full max-w-2xl"
    >
      <Card className="border-0 shadow-2xl backdrop-blur">
        <CardHeader className="space-y-3">
          <CardTitle className="text-3xl font-bold text-center">
            AI-Powered DSA Interview Simulator
          </CardTitle>

          <div className="text-center text-sm text-muted-foreground">
            Topic: {topic} |
            Difficulty: {difficulty} |
            Questions: {count}
          </div>
          <p className="text-center text-muted-foreground">
            Practice real interview-style
            conceptual DSA questions with
            AI-generated feedback.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">

          {isLoading && (
            <div className="text-center py-8">
              <p className="text-lg font-medium">
                Generating Interview Questions...
              </p>
            </div>
          )}

          {showQuestions && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <QuestionList
                questions={questions}
              />
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  </main>
);
}