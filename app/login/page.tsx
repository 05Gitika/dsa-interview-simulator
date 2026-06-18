"use client";
import {
  useState,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import AuthLayout from "@/components/AuthLayout";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => {
  const token =
    localStorage.getItem("token");

  if (token) {
    router.push("/");
  }
}, [router]);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleLogin() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Login failed"
        );
      }

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          data.user
        )
      );

      window.location.href = "/";
    } catch (err: any) {
      setError(
        err.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue your AI interview preparation"
    >
      <Card>
        <CardContent className="space-y-5 pt-6">

          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <Button
            className="w-full"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </Button>

        </CardContent>
      </Card>

      <p className="text-center text-sm text-slate-600 mt-5">
        Don't have an account?
        <Link
          href="/signup"
          className="text-blue-600 font-medium ml-1 hover:underline"
        >
          Create Account
        </Link>
      </p>
    </AuthLayout>
  );
}