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

export default function SignupPage() {
    const router = useRouter();

    useEffect(() => {
        const token =
            localStorage.getItem("token");

        if (token) {
            router.push("/");
        }
    }, [router]);

    const [name, setName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    async function handleSignup() {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                "/api/auth/signup",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify({
                        name,
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
                    "Signup failed"
                );
            }

            alert(
                "Account created successfully!"
            );

            router.push("/login");
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
            title="Create Account"
            subtitle="Start your AI interview preparation journey"
        >
            <Card>
                <CardContent className="space-y-5 pt-6">

                    <Input
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) =>
                            setName(
                                e.target.value
                            )
                        }
                    />

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
                        onClick={handleSignup}
                        disabled={loading}
                    >
                        {loading
                            ? "Creating Account..."
                            : "Create Account"}
                    </Button>
                </CardContent>
            </Card>

            <p className="text-center text-sm text-slate-600 mt-5">
                Already have an account?
                <Link
                    href="/login"
                    className="text-blue-600 font-medium ml-1 hover:underline"
                >
                    Sign In
                </Link>
            </p>
        </AuthLayout>
    );
}