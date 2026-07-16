import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Philosophy } from "@/components/site/Philosophy";
import { Ecosystem } from "@/components/site/Ecosystem";
import { Services } from "@/components/site/Services";
import { Industries } from "@/components/site/Industries";
import { WhyUs } from "@/components/site/WhyUs";
import { Insights } from "@/components/site/Insights";
import { CtaBand } from "@/components/site/CtaBand";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Dipto Communication — Creative Communication Ecosystem",
  description:
    "A digital ecosystem for business, creativity, innovation and social impact. AI, strategy, film, brand and growth — under one roof.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dipto Communication — Creative Communication Ecosystem",
    description: "Innovation. Creativity. Sustainable growth. Connect · Create · Empower.",
    url: "/",
  },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Ecosystem />
        <Services />
        <Industries />
        <WhyUs />
        <Insights />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
