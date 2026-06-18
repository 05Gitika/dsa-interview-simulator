"use client";
import ProtectedRoute from "@/components/ProtectedRoutes";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProtectedRoutes from "@/components/ProtectedRoutes";

export default function ResultPage() {
  const [report, setReport] =
    useState<any>(null);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "interviewReport"
      );

    if (saved) {
      setReport(
        JSON.parse(saved)
      );
    }
  }, []);

  if (!report) {
    return (
      <p className="p-6">
        Loading report...
      </p>
    );
  }

  return (
    <ProtectedRoutes>
    <div className="max-w-4xl mx-auto p-6 space-y-6">

      <h1 className="text-4xl font-bold">
        Interview Report
      </h1>

      <div className="border rounded-lg p-4">
        <h2 className="text-2xl font-semibold">
          Overall Score
        </h2>

        <p className="text-5xl font-bold mt-3">
          {report.averageScore}/10
        </p>
      </div>

      <div className="border rounded-lg p-4">
        <h2 className="font-semibold text-xl">
          Statistics
        </h2>

        <p>
          Total Score:
          {" "}
          {report.totalScore}
        </p>

        <p>
          Highest Score:
          {" "}
          {report.highestScore}
        </p>

        <p>
          Lowest Score:
          {" "}
          {report.lowestScore}
        </p>
      </div>

      <div className="border rounded-lg p-4">
        <h2 className="font-semibold text-xl">
          Strengths
        </h2>

        <ul className="list-disc ml-6">
          {report.strengths.map(
            (
              item: string,
              index: number
            ) => (
              <li key={index}>
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      <div className="border rounded-lg p-4">
        <h2 className="font-semibold text-xl">
          Weaknesses
        </h2>

        <ul className="list-disc ml-6">
          {report.weaknesses.map(
            (
              item: string,
              index: number
            ) => (
              <li key={index}>
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      <div className="border rounded-lg p-4">
        <h2 className="font-semibold text-xl">
          Improvement Suggestions
        </h2>

        <ul className="list-disc ml-6">
          {report.improvements.map(
            (
              item: string,
              index: number
            ) => (
              <li key={index}>
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      <Link href="/setup">
        <Button>
          Take Another Interview
        </Button>
      </Link>

    </div>
    </ProtectedRoutes>
  );
}