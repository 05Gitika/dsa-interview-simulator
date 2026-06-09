import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  evaluateAnswer,
} from "@/lib/evaluationService";

export async function POST(
  request: NextRequest
) {
  try {
    const {
      question,
      answer,
    } =
      await request.json();

    const result =
      await evaluateAnswer(
        question,
        answer
      );

    return NextResponse.json(
      result
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Evaluation failed",
      },
      {
        status: 500,
      }
    );
  }
}