import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Interview from "@/models/Interview";

export async function POST(
  request: Request
) {
  try {
    await connectDB();

    const body =
      await request.json();

    const interview =
      await Interview.create(body);

    return NextResponse.json(
      interview
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Failed to save interview",
      },
      {
        status: 500,
      }
    );
  }
}