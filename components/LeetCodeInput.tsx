"use client";

import { useState } from "react";
import { analyzeProfile } from "@/lib/profileAnalyzer";
import RecommendedTopics from "./RecommendedTopics";

interface TopicCount {
    tagName: string;
    problemsSolved: number;
}

interface LeetCodeProfile {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;

    tagProblemCounts: {
        advanced: TopicCount[];
        intermediate: TopicCount[];
        fundamental: TopicCount[];
    };
}

export default function LeetCodeInput() {
    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState<LeetCodeProfile | null>(null);
    const [analysis, setAnalysis] =
        useState<any>(null);
    const [loading, setLoading] = useState(false);

    const fetchProfile = async () => {
        if (!username.trim()) return;

        try {
            setLoading(true);

            const response = await fetch("/api/leetcode", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                }),
            });

            const data = await response.json();

            console.log("FULL API RESPONSE");
            console.log(JSON.stringify(data, null, 2));

            console.log("DATA", data);

            setProfile(data);

            if (data.tagProblemCounts) {
                const result =
                    analyzeProfile(data);

                setAnalysis(result);

                localStorage.setItem(
                    "profileAnalysis",
                    JSON.stringify(result)
                );
            }
        } catch (error) {
            console.error("Failed to fetch profile:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <input
                type="text"
                placeholder="Enter LeetCode Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="
      w-full
      border
      rounded-xl
      px-4
      py-3
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
    "
            />

            <button
                onClick={fetchProfile}
                disabled={loading}
                className="
      bg-blue-600
      hover:bg-blue-700
      text-white
      px-6
      py-3
      rounded-xl
      transition
      font-medium
    "
            >
                {loading ? "Analyzing..." : "Analyze Profile"}
            </button>

            {profile && (
                <div className="
                w-full
      max-w-4xl
      mx-auto
      mt-6
      border
      rounded-xl
      p-6
      bg-slate-50
    ">
                    <h3 className="font-bold text-xl mb-4">
                        Profile Analysis
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <div>
                            <p className="text-gray-500">Total</p>
                            <p className="font-bold text-2xl">
                                {profile.totalSolved}
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-500">Easy</p>
                            <p className="font-bold text-2xl">
                                {profile.easySolved}
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-500">Medium</p>
                            <p className="font-bold text-2xl">
                                {profile.mediumSolved}
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-500">Hard</p>
                            <p className="font-bold text-2xl">
                                {profile.hardSolved}
                            </p>
                        </div>
                        </div>
                        {analysis && (
                            <div className="mt-6">

                                <h3 className="font-bold text-lg mb-2">
                                    Strengths
                                </h3>
                                <div className="flex gap-2 flex-wrap">
                                    {analysis.strengths.map((topic: TopicCount) => (
                                        <span
                                            key={topic.tagName}
                                            className="
bg-green-100
text-green-700
px-3
py-1
rounded-full
"
                                        >
                                            {topic.tagName}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="font-bold text-lg mt-6 mb-2">
                                    Weaknesses
                                </h3>
                                <div className="flex gap-2 flex-wrap">
                                    {analysis.weaknesses.map((topic: TopicCount) => (
                                        <span
                                            key={topic.tagName}
                                            className="
bg-red-100
text-red-700
px-3
py-1
rounded-full
"
                                        >
                                            {topic.tagName}
                                        </span>
                                    ))}
                                </div>
                                <RecommendedTopics
                                    strengths={analysis.strengths}
                                    weaknesses={analysis.weaknesses}
                                />
                            </div>
                        )}
                </div>
            )}
        </div>
    );
}

