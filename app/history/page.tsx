"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoutes";
import ProtectedRoutes from "@/components/ProtectedRoutes";

interface Interview {
  _id: string;
  topic: string;
  averageScore: number;
  highestScore: number;
  lowestScore: number;
  createdAt: string;
}

export default function HistoryPage() {
  const [interviews, setInterviews] =
    useState<Interview[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const response =
          await fetch(
            "/api/interviews/history"
          );

        const data =
          await response.json();

        setInterviews(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, []);

  const totalInterviews =
    interviews.length;

  const averageScore =
    interviews.length > 0
      ? (
          interviews.reduce(
            (sum, interview) =>
              sum +
              interview.averageScore,
            0
          ) / interviews.length
        ).toFixed(1)
      : 0;

  const bestScore =
    interviews.length > 0
      ? Math.max(
          ...interviews.map(
            (i) =>
              i.highestScore
          )
        )
      : 0;

  const worstScore =
    interviews.length > 0
      ? Math.min(
          ...interviews.map(
            (i) =>
              i.lowestScore
          )
        )
      : 0;

  return (
    <ProtectedRoutes>
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Interview History
          </h1>

          <p className="text-slate-500 mt-2">
            Track your interview
            performance and growth.
          </p>
        </div>

        {/* Stats Cards */}

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="border rounded-xl p-6 shadow-sm">
            <p className="text-slate-500">
              Total Interviews
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {totalInterviews}
            </h2>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <p className="text-slate-500">
              Average Score
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {averageScore}
            </h2>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <p className="text-slate-500">
              Best Score
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {bestScore}
            </h2>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <p className="text-slate-500">
              Worst Score
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {worstScore}
            </h2>
          </div>

        </div>

        {/* Recent Interviews */}

        <div className="border rounded-xl p-6 shadow-sm">

          <h2 className="text-2xl font-semibold mb-6">
            Recent Interviews
          </h2>

          {loading ? (
            <p>
              Loading...
            </p>
          ) : interviews.length ===
            0 ? (
            <p className="text-slate-500">
              No interviews found.
            </p>
          ) : (
            <div className="space-y-4">

              {interviews.map(
                (interview) => (
                  <div
                    key={
                      interview._id
                    }
                    className="
                      flex
                      items-center
                      justify-between
                      border
                      rounded-lg
                      p-4
                    "
                  >
                    <div>
                      <h3 className="font-semibold">
                        {
                          interview.topic
                        }
                      </h3>

                      <p className="text-sm text-slate-500">
                        {new Date(
                          interview.createdAt
                        ).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="text-right">

                      <p className="font-semibold">
                        Avg:
                        {" "}
                        {
                          interview.averageScore
                        }
                        /10
                      </p>

                      <p className="text-sm text-slate-500">
                        High:
                        {" "}
                        {
                          interview.highestScore
                        }
                        /10
                      </p>

                    </div>
                  </div>
                )
              )}

            </div>
          )}
        </div>

      </div>
    </ProtectedRoutes>
  );
}