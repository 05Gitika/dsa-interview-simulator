"use client";

import { useEffect, useState } from "react";
import { QuestionCard } from "./QuestionCard";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Evaluation } from "@/types/evaluation";
import { useRouter } from "next/navigation";


declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface QuestionListProps {
  questions: string[];
}

export function QuestionList({
  questions,
}: QuestionListProps) {
  if (!questions || questions.length === 0) {
    return (
      <p>Loading questions...</p>
    );
  }

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [answer, setAnswer] =
    useState("");
  const [answers, setAnswers] =
    useState<string[]>([]);
  const [evaluations, setEvaluations] =
    useState<Evaluation[]>([]);

  const [isEvaluating, setIsEvaluating] =
    useState(false);
  const [totalScore, setTotalScore] =
    useState(0);

  const [averageScore, setAverageScore] =
    useState(0);

  const [highestScore, setHighestScore] =
    useState(0);

  const [lowestScore, setLowestScore] =
    useState(0);

  const router = useRouter();

  useEffect(() => {
    setAnswers(
      Array(questions.length).fill("")
    );
  }, [questions]);

  const [isComplete, setIsComplete] =
    useState(false);

  const [isRecording, setIsRecording] =
    useState(false);

  const isLastQuestion =
    currentIndex ===
    questions.length - 1;

  const currentQuestionNumber =
    currentIndex + 1;

  const progress =
    (currentQuestionNumber /
      questions.length) *
    100;

  function saveAnswer() {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [
        ...prevAnswers,
      ];

      updatedAnswers[currentIndex] =
        answer;

      return updatedAnswers;
    });
  }

  useEffect(() => {
    setAnswer(
      answers[currentIndex]
    );
  }, [currentIndex, answers]);

  function startRecording() {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech Recognition is not supported in this browser."
      );
      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.interimResults =
      false;

    recognition.start();

    setIsRecording(true);

    recognition.onresult = (
      event: any
    ) => {
      const transcript =
        event.results[0][0]
          .transcript;

      setAnswer((prev) =>
        prev
          ? prev +
          " " +
          transcript
          : transcript
      );
    };

    recognition.onend = () => {
      setIsRecording(false);
    };
  }

  async function handleEvaluate() {
    saveAnswer();

    setIsEvaluating(true);

    try {
      const response = await fetch(
        "/api/evaluate",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            question:
              questions[currentIndex],
            answer,
          }),
        }
      );

      const evaluation =
        await response.json();

      setEvaluations((prev) => {
        const updated = [...prev];

        updated[currentIndex] =
          evaluation;

        return updated;
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsEvaluating(false);
    }
  }
  async function handleFinishInterview() {
    setIsEvaluating(true);

    try {
      const updatedAnswers = [...answers];

      updatedAnswers[currentIndex] =
        answer;

      setAnswers(updatedAnswers);

      const allEvaluations: Evaluation[] =
        [];

      for (
        let i = 0;
        i < questions.length;
        i++
      ) {
        const response =
          await fetch(
            "/api/evaluate",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify({
                question:
                  questions[i],
                answer:
                  updatedAnswers[
                  i
                  ] || "",
              }),
            }
          );

        const evaluation =
          await response.json();

        allEvaluations.push(
          evaluation
        );
      }

      setEvaluations(
        allEvaluations
      );

      const total =
        allEvaluations.reduce(
          (sum, item) =>
            sum + item.score,
          0
        );

      const average =
        total /
        allEvaluations.length;

      const highest =
        Math.max(
          ...allEvaluations.map(
            (item) =>
              item.score
          )
        );

      const lowest =
        Math.min(
          ...allEvaluations.map(
            (item) =>
              item.score
          )
        );

      setTotalScore(total);

      setAverageScore(
        Number(
          average.toFixed(1)
        )
      );

      setHighestScore(
        highest
      );

      setLowestScore(
        lowest
      );

      const strengths = allEvaluations.flatMap(
        (item) => item.strengths || []
      );

      const weaknesses = allEvaluations.flatMap(
        (item) => item.weaknesses || []
      );

      const report = {
        totalScore: total,
        averageScore: Number(
          average.toFixed(1)
        ),
        highestScore: highest,
        lowestScore: lowest,

        strengths,

        weaknesses,

        feedbacks: allEvaluations.map(
          (item) => item.feedback
        ),

        improvements:
          allEvaluations.map(
            (item) => item.improvement
          ),
      };

      await fetch(
        "/api/interviews",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            topic:
              localStorage.getItem(
                "selectedTopic"
              ) || "Unknown",

            ...report,
          }),
        }
      );

      localStorage.setItem(
        "interviewReport",
        JSON.stringify(report)
      );

      router.push(
        "/interview/result"
      );

    } catch (error) {
      console.error(error);
    } finally {
      setIsEvaluating(false);
    }
  }

  if (isComplete) {
    return (
      <div className="space-y-4 mt-6">
        <h2 className="text-2xl font-bold">
          Interview Complete!!
        </h2>

        <div className="border rounded-lg p-4 space-y-2">
          <p>
            <strong>
              Total Score:
            </strong>{" "}
            {totalScore}/
            {questions.length * 10}
          </p>

          <p>
            <strong>
              Average Score:
            </strong>{" "}
            {averageScore}/10
          </p>

          <p>
            <strong>
              Highest Score:
            </strong>{" "}
            {highestScore}/10
          </p>

          <p>
            <strong>
              Lowest Score:
            </strong>{" "}
            {lowestScore}/10
          </p>
        </div>

        <p className="text-muted-foreground">
          Here are all your answers:
        </p>

        {questions.map(
          (question, index) => (
            <div
              key={index}
              className="border rounded-lg p-4"
            >
              <p className="font-semibold">
                {question}
              </p>

              <p className="mt-2 whitespace-pre-wrap">
                {answers[index] ||
                  "No answer provided"}
              </p>
              {evaluations[index] && (
                <div className="mt-3 space-y-1">
                  <p>
                    <strong>Score:</strong>{" "}
                    {evaluations[index].score}/10
                  </p>

                  <p>
                    <strong>Feedback:</strong>{" "}
                    {evaluations[index].feedback}
                  </p>

                  <p>
                    <strong>Improvement:</strong>{" "}
                    {
                      evaluations[index]
                        .improvement
                    }
                  </p>
                </div>
              )}
            </div>
          )
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-6">
      <p className="font-medium">
        Question{" "}
        {currentQuestionNumber} of{" "}
        {questions.length}
      </p>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p>
        {Math.round(progress)}%
        Complete
      </p>

      <QuestionCard
        question={
          questions[currentIndex]
        }
      />

      <Button
        type="button"
        variant="outline"
        onClick={startRecording}
        disabled={isRecording}
      >
        {isRecording
          ? "Recording..."
          : "🎤 Start Recording"}
      </Button>

      <Textarea
        value={answer}
        onChange={(e) =>
          setAnswer(
            e.target.value
          )
        }
        placeholder="Speak or type your answer..."
        rows={6}
      />
      <Button
        onClick={handleEvaluate}
        disabled={isEvaluating}
      >
        {isEvaluating
          ? "Evaluating..."
          : "Evaluate Answer"}
      </Button>

      {evaluations[currentIndex] && (
        <div className="border rounded-lg p-4 space-y-2">
          <h3 className="font-semibold">
            AI Feedback
          </h3>

          <p>
            <strong>Score:</strong>{" "}
            {
              evaluations[currentIndex]
                .score
            }
            /10
          </p>

          <p>
            <strong>Feedback:</strong>{" "}
            {
              evaluations[currentIndex]
                .feedback
            }
          </p>

          <p>
            <strong>Improvement:</strong>{" "}
            {
              evaluations[currentIndex]
                .improvement
            }
          </p>
        </div>
      )}

      <div className="flex gap-4">
        <Button
          variant="outline"
          disabled={
            currentIndex === 0
          }
          onClick={() => {
            saveAnswer();

            setCurrentIndex(
              (prevIndex) =>
                prevIndex - 1
            );
          }}
        >
          Previous
        </Button>

        {isLastQuestion ? (
          <Button
            onClick={
              handleFinishInterview
            }
            disabled={
              isEvaluating
            }
          >
            {isEvaluating
              ? "Generating Report..."
              : "Finish Interview"}
          </Button>
        ) : (
          <Button
            onClick={() => {
              saveAnswer();

              setCurrentIndex(
                (
                  prevIndex
                ) =>
                  prevIndex + 1
              );
            }}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}