
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import LeetCodeInput from "@/components/LeetCodeInput";
import { analyzeProfile }
from "@/lib/profileAnalyzer";

export default function SetupPage() {

    const [selectedTopic, setSelectedTopic] =
        useState("");
    const [difficulty, setDifficulty] =
        useState("Medium");
    const [questionCount, setQuestionCount] =
        useState("5");
    const router = useRouter();
    const handleGenerateInterview = () => {
        if (!selectedTopic) {
            alert("Please select a topic");
            return;
        }

        router.push(
            `/interview?topic=${encodeURIComponent(
                selectedTopic
            )}&difficulty=${difficulty}&count=${questionCount}`
        );
    };

    return (
        <main className="min-h-screen bg-slate-50 py-16">
            <div className="max-w-4xl mx-auto px-6">

                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold">
                        Interview Setup
                    </h1>

                    <p className="text-gray-600 mt-4 text-lg">
                        Create a personalized DSA interview
                        based on your LeetCode profile or
                        choose a topic manually.
                    </p>
                </div>

                {/* LeetCode Card */}

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
                    <h2 className="text-2xl font-semibold mb-2">
                        Personalized Interview
                    </h2>

                    <p className="text-gray-500 mb-6">
                        Optional: Enter your LeetCode username
                        to generate questions focused on your
                        weak areas.
                    </p>

                    <LeetCodeInput />
                </div>

                <div className="text-center my-8">
                    <span className="bg-gray-200 px-4 py-2 rounded-full">
                        OR
                    </span>
                </div>

                {/* Topic Card */}

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-semibold mb-6">
                        Topic Based Interview
                    </h2>

                    <p className="text-gray-500 mb-6">
                        Skip LeetCode and select a topic
                        directly.
                    </p>

                    <div className="space-y-4">

                        <label className="block font-medium">
                            Select Topic
                        </label>

                        <select
                            value={selectedTopic}
                            onChange={(e) =>
                                setSelectedTopic(e.target.value)
                            }
                            className="
      w-full
      border
      rounded-xl
      p-3
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
    "
                        >
                            <option value="">
                                Select a Topic
                            </option>

                            <option value="Arrays">
                                Arrays
                            </option>

                            <option value="Strings">
                                Strings
                            </option>

                            <option value="Linked Lists">
                                Linked Lists
                            </option>

                            <option value="Stacks">
                                Stacks
                            </option>

                            <option value="Queues">
                                Queues
                            </option>

                            <option value="Trees">
                                Trees
                            </option>

                            <option value="Graphs">
                                Graphs
                            </option>

                            <option value="Dynamic Programming">
                                Dynamic Programming
                            </option>

                            <option value="Backtracking">
                                Backtracking
                            </option>

                        </select>
                        <div className="space-y-4 mt-6">

                            <label className="block font-medium">
                                Difficulty
                            </label>

                            <select
                                value={difficulty}
                                onChange={(e) =>
                                    setDifficulty(e.target.value)
                                }
                                className="
      w-full
      border
      rounded-xl
      p-3
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
    "
                            >
                                <option value="Easy">
                                    Easy
                                </option>

                                <option value="Medium">
                                    Medium
                                </option>

                                <option value="Hard">
                                    Hard
                                </option>
                            </select>
                            <div className="space-y-4 mt-6">

                                <label className="block font-medium">
                                    Number of Questions
                                </label>

                                <select
                                    value={questionCount}
                                    onChange={(e) =>
                                        setQuestionCount(e.target.value)
                                    }
                                    className="
      w-full
      border
      rounded-xl
      p-3
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
    "
                                >
                                    <option value="3">3 Questions</option>

                                    <option value="5">5 Questions</option>

                                    <option value="10">10 Questions</option>

                                    <option value="15">15 Questions</option>
                                </select>

                            </div>

                        </div>

                    </div>
                </div>
                <button
                    onClick={handleGenerateInterview}
                    className="
    mt-8
    w-full
    bg-blue-600
    hover:bg-blue-700
    text-white
    py-3
    rounded-xl
    font-semibold
    transition
  "
                >
                    Generate Interview
                </button>

            </div>
        </main>
    );
}