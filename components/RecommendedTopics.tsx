"use client";

import { useRouter } from "next/navigation";
import { TopicAnalysis } from "@/types/profileAnalysis";
import { recommendDifficulty } from "@/lib/recommendDifficulty";

interface RecommendedTopicsProps {
  strengths: TopicAnalysis[];
  weaknesses: TopicAnalysis[];
}

export default function RecommendedTopics({
  strengths,
  weaknesses,
}: RecommendedTopicsProps) {

  const router = useRouter();

  const startInterview = (
    topic: string,
    solved: number
  ) => {

    const difficulty =
      recommendDifficulty(solved);

    router.push(
      `/interview?mode=personalized&topic=${encodeURIComponent(
        topic
      )}&difficulty=${difficulty}&count=5`
    );
  };

   return (
  <div
    className="
      mt-8
      w-full
      max-w-none
      border
      rounded-xl
      p-6
      bg-white
      shadow-sm
    "
  >

      <h2 className="text-2xl font-bold mb-6">
        Recommended Practice
      </h2>

      {/* Weak Topics */}

      <div className="mb-8 w-full">
        <h3 className="text-red-600 font-semibold text-lg mb-4">
          Weak Topics
        </h3>

        <div className="grid gap-4">
          {weaknesses.map((topic) => (
           <div
  key={topic.tagName}
  className="
    w-full
    border
    rounded-xl
    p-5
    flex
    justify-between
    items-center
  "
>
  <div>
    <h4 className="font-semibold text-lg">
      {topic.tagName}
    </h4>

    <p className="text-sm text-gray-500 mt-1">
      Solved: {topic.solved}
    </p>
  </div>

  <button
    onClick={() =>
      startInterview(
        topic.tagName,
        topic.solved
      )
    }
    className="
      bg-red-500
      text-white
      px-4
      py-2
      rounded-lg
      hover:bg-red-600
      shrink-0
    "
  >
    Practice Interview
  </button>
</div>
          ))}
        </div>
      </div>

      {/* Strong Topics */}

      <div>
        <h3 className="text-green-600 font-semibold text-lg mb-4">
          Strong Topics
        </h3>

        <div className="grid gap-4">
          {strengths.map((topic) => (
            <div
              key={topic.tagName}
              className="
          border
          rounded-xl
          p-4
          flex
          flex-col
          gap-3
          md:flex-row
          md:items-center
          md:justify-between
        "
            >
              <div>
                <h4 className="font-semibold text-lg">
                  {topic.tagName}
                </h4>

                <p className="text-sm text-gray-500">
                  Solved: {topic.solved}
                </p>
              </div>

              <button
                onClick={() =>
                  startInterview(
                    topic.tagName,
                    topic.solved
                  )
                }
                className="
            bg-green-500
            text-white
            px-4
            py-2
            rounded-lg
            hover:bg-green-600
            whitespace-nowrap
            self-start
            md:self-auto
          "
              >
                Challenge Me
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}