"use client";

import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [interviews, setInterviews] =
    useState<any[]>([]);

  useEffect(() => {
    fetch(
      "/api/interviews/history"
    )
      .then((res) => res.json())
      .then((data) =>
        setInterviews(data)
      );
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Interview History
      </h1>

      <div className="space-y-4">
        {interviews.map(
          (item) => (
            <div
              key={item._id}
              className="border rounded-lg p-4"
            >
              <h2 className="font-semibold">
                {item.topic}
              </h2>

              <p>
                Average Score:
                {" "}
                {item.averageScore}
              </p>

              <p>
                Highest Score:
                {" "}
                {item.highestScore}
              </p>

              <p>
                Date:
                {" "}
                {new Date(
                  item.createdAt
                ).toLocaleDateString()}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}