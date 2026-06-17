import { ProfileAnalysis } from "@/types/profileAnalysis";

type TopicProblemCount = {
  tagName: string;
  problemsSolved: number;
};

type LeetCodeProfile = {
  tagProblemCounts: {
    fundamental: TopicProblemCount[];
    intermediate: TopicProblemCount[];
    advanced: TopicProblemCount[];
  };
};

export function analyzeProfile(
  profile: LeetCodeProfile
): ProfileAnalysis {

  const allTopics = [
    ...profile.tagProblemCounts.fundamental,
    ...profile.tagProblemCounts.intermediate,
    ...profile.tagProblemCounts.advanced,
  ];

  const sorted = [...allTopics].sort(
    (a, b) =>
      b.problemsSolved - a.problemsSolved
  );

  const strengths = sorted
    .slice(0, 3)
    .map((topic) => ({
      tagName: topic.tagName,
      solved: topic.problemsSolved,
    }));

  const weaknesses = [...sorted]
    .reverse()
    .slice(0, 3)
    .map((topic) => ({
      tagName: topic.tagName,
      solved: topic.problemsSolved,
    }));

  return {
    strengths,
    weaknesses,

    strongestTopic:
      strengths[0]?.tagName || "",

    weakestTopic:
      weaknesses[0]?.tagName || "",
  };
}