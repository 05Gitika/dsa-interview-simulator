import { NextResponse } from "next/server";
import { generateQuestions } from "@/lib/questionService";

export async function POST(
  request: Request
) {
  try {
    const { topic } =
      await request.json();

    const result =
      await generateQuestions(
        topic
      );

    return NextResponse.json(
      result
    );
  } catch (error) {
    console.error(
      "API ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Failed to generate questions",
      },
      { status: 500 }
    );
  }
}