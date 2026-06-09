import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 text-center">

      <h2 className="text-4xl font-bold mb-6">
        Ready to Crack Your
        Next Interview?
      </h2>

      <Link href="/interview">
        <Button size="lg">
          Start Practicing
        </Button>
      </Link>

    </section>
  );
}