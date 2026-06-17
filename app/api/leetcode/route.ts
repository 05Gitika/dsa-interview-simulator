import { NextResponse } from "next/server";
import { getLeetCodeProfile } from "@/lib/leetcodeService";

export async function POST(
  request: Request
) {
  try {
    const { username } =
      await request.json();

    const profile =
      await getLeetCodeProfile(
        username
      );

    return NextResponse.json(
      profile
    );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      },
      { status: 500 }
    );
  }
}