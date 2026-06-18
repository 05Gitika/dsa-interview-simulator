import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(
  request: Request
) {
  try {
    await connectDB();

    const {
      name,
      email,
      password,
    } = await request.json();

    const existingUser =
      await User.findOne({
        email,
      });

    if (existingUser) {
      return NextResponse.json(
        {
          error:
            "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const user =
      await User.create({
        name,
        email,
        password:
          hashedPassword,
      });

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
  console.error(
    "SIGNUP ERROR:",
    error
  );

  return NextResponse.json(
    {
      error: error.message,
    },
    {
      status: 500,
    }
  );
}
}