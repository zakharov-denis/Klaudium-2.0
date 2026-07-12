import type { Metadata, Viewport } from "next";
import { Hero } from "@/components/home/Hero";
import { Solutions } from "@/components/home/Solutions";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Product } from "@/components/home/Product";
import { Credibility } from "@/components/home/Credibility";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";
import { Footer } from "@/components/home/Footer";
import { ScrollReveals } from "@/components/home/ScrollReveals";

export const dynamic = "force-static";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf8f4"
};

export const metadata: Metadata = {
  title: "Brillas Labs — AI infrastructure for real business workflows",
  description:
    "Brillas Labs builds production-ready voice and operational AI agents connected to real business systems and workflows."
};

export default function HomePage() {
  return (
    <div className="home-page">
      <main>
        <Hero />
        <Solutions />
        <HowItWorks />
        <Product />
        <Credibility />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <ScrollReveals />
    </div>
  );
}
