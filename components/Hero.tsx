import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="
  py-32
  text-center
  bg-gradient-to-b
  from-background
  via-background
  to-muted/40
"
    >
      <div className="container mx-auto px-6">

        <h1 className="text-6xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight">
          Master Technical Interviews
          with AI-Powered Practice
        </h1>
        <p className="mt-8 text-xl text-muted-foreground max-w-3xl mx-auto">
          Practice DSA interviews, answer using
          text or voice, and receive detailed
          AI-powered feedback instantly.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/setup">
            <Button 
            size="lg"
            variant="outline">
              Start Interview
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
          >
            Learn More
          </Button>
        </div>

      </div>
    </section>
  );
}