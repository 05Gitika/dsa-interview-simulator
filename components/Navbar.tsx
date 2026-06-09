import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold"
        >
          DSA Interview AI
        </Link>
        
        <div className="hidden md:flex gap-8">
  <a href="#features">
    Features
  </a>

  <a href="#how-it-works">
    How It Works
  </a>

  <a href="#about">
    About
  </a>
</div>

        <div className="flex gap-3">
          <Button
            variant="outline"
          >
            Login
          </Button>

          <Button>
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}