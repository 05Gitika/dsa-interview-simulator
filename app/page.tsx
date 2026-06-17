
"use client"
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ProductPreview } from "@/components/ProductPreview";
import LeetCodeInput from "@/components/LeetCodeInput";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductPreview />
      <Stats />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}