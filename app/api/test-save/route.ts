import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Interview from "@/models/Interview";

export async function GET() {
  try {
    await connectDB();

    const doc =
      await Interview.create({
        topic: "Arrays",

        totalScore: 40,

        averageScore: 8,

        highestScore: 10,

        lowestScore: 6,

        strengths: [
          "Good Arrays",
        ],

        weaknesses: [
          "Weak Graphs",
        ],

        feedbacks: [
          "Good performance",
        ],

        improvements: [
          "Practice DP",
        ],
      });

    return NextResponse.json(
      doc
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to save",
      },
      {
        status: 500,
      }
    );
  }
}