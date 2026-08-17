import CTA from "@/src/components/landing/CTA";
import FAQ from "@/src/components/landing/FAQ";
import Features from "@/src/components/landing/Features";
import Hero from "@/src/components/landing/Hero";
import Screens from "@/src/components/landing/Screens";
import Stats from "@/src/components/landing/Stats";
import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-linear-to-b from-violet-500/5 via-background to-rose-500/5 font-sans">
      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <Screens />

      <FAQ />

      <CTA />

      <Footer />
    </div>
  );
}
