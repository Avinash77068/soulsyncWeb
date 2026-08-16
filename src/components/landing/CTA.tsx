"use client";

import { Download, Heart } from "lucide-react";
import Button from "../ui/Button";
import { useAppConfigStore } from "@/src/store/appConfigStore";

export default function CTA() {
  const apkUrl = useAppConfigStore((state) => state.apkUrl);

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 pb-24">
      <div className="glass-strong glow-soul relative overflow-hidden rounded-[2rem] px-6 py-16 text-center">
        <div className="bg-soul-soft absolute inset-0 -z-10" />

        <Heart className="mx-auto h-8 w-8 animate-soul-pulse fill-blush text-blush" />

        <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
          Two phones. <span className="text-gradient">One heartbeat.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          Free on Android. Install it tonight and start your streak together.
        </p>

        <Button asChild variant="soul" size="xl" className="mt-8">
          <a href={apkUrl} target="_blank" rel="noreferrer">
            <Download className="h-5 w-5" />
            Download SoulSync 3.1
          </a>
        </Button>
      </div>
    </section>
  );
}
