"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [user, setUser] =
    useState<any>(null);

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      setUser(
        JSON.parse(storedUser)
      );
    }
  }, []);

  function logout() {
    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    window.location.href =
      "/login";
  }
  return (
    <nav
  className="
    fixed top-0 left-0 right-0 z-50
    bg-white/10
    backdrop-blur-md
    border-b border-white/20
    shadow-lg
  "
>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold"
        >
          DSA Interview AI
        </Link>

        <div className="hidden md:flex gap-8">
          <nav className="flex items-center gap-6">
            <a href="/#features" className="transition-transform duration-300 hover:scale-105">
              Features
            </a>

            <a href="/#how-it-works" className="transition-transform duration-300 hover:scale-105">
              How It Works
            </a>

            <a href="/#about" className="transition-transform duration-300 hover:scale-105">
              About
            </a>
          </nav>
        </div>

        {user ? (
          <div className="flex items-center gap-3">

            <span className="text-sm font-medium">
              Hello, {user.name}
            </span>

            <Button
              variant="outline"
              onClick={logout}
            >
              Logout
            </Button>

          </div>
        ) : (
          <div className="flex gap-3">

            <Link href="/login">
              <Button variant="outline">
                Login
              </Button>
            </Link>

            <Link href="/signup">
              <Button>
                Sign Up
              </Button>
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
}