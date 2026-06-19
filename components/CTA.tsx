import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function CTA() {
  const router = useRouter();
  
    const handleStartPractise = () => {
      const token = localStorage.getItem("token");
      if (token) {
        router.push("/setup");
      } else {
        router.push("/signup");
      }
    };
  return (
    <section className="py-24 text-center">

      <h2 className="text-4xl font-bold mb-6">
        Ready to Crack Your
        Next Interview?
      </h2>

      <Link href="/signup">
        <Button size="lg" onClick={handleStartPractise}>
          Start Practicing
        </Button>
      </Link>

    </section>
  );
}