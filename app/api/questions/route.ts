import { NextResponse } from "next/server";
import { generateQuestions } from "@/lib/questionService";

export async function POST(
  request: Request
) {
  try {
    const {
      topic,
      difficulty,
      count,
      analysis,
    } = await request.json();
    
    const result = await generateQuestions(
      topic,
      difficulty,
      Number(count),
      analysis
    );

    return NextResponse.json(
      result
    );
  } catch (error: any) {

    console.error(
      "Question Generation Error:",
      error
    );

    if (error?.status === 503) {

      return Response.json(
        {
          success: false,
          error:
            "AI service is currently busy. Please try again in a few moments."
        },
        { status: 503 }
      );
    }

    return Response.json(
      {
        success: false,
        error:
          "Unable to generate interview questions."
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      error:
        "Failed to generate questions",
    },
    { status: 500 }
  );
}