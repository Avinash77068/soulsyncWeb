import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import Features from "@/components/landing/Features";
import Screens from "@/components/landing/Screens";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="blob left-[-10%] top-[-8%] h-[420px] w-[420px] bg-violet" />
        <div className="blob right-[-12%] top-[18%] h-[380px] w-[380px] bg-blush" />
        <div className="blob bottom-[-10%] left-[30%] h-[420px] w-[420px] bg-azure opacity-25" />
      </div>

      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Screens />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
