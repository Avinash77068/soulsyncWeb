"use client";

import { Download } from "lucide-react";
import { useAppConfigStore } from "@/src/store/appConfigStore";
import Button from "../ui/Button";

export default function Navbar() {
  const apkUrl = useAppConfigStore((state) => state.apkUrl);
  const iconUrl = useAppConfigStore((state) => state.iconUrl);

  return (
    <header className="relative z-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <a href="#top" className="flex items-center gap-3">
          <div className="rounded-xl bg-linear-to-br from-purple-500 via-pink-500 to-rose-500 p-0.5">
            <img
              src={iconUrl}
              alt="SoulSync app icon"
              className="h-10 w-10 rounded-[10px]"
              width={40}
              height={40}
            />
          </div>
          <span className="font-display text-lg font-extrabold tracking-tight">
            Soul<span className="text-gradient">Sync</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#screens" className="transition-colors hover:text-foreground">
            Screens
          </a>
          <a href="#faq" className="transition-colors hover:text-foreground">
            FAQ
          </a>
        </div>

        <Button asChild variant="ghost" size="sm">
          <a href={apkUrl} target="_blank" rel="noreferrer">
            <Download className="h-4 w-4" />
            Get the app
          </a>
        </Button>
      </nav>
    </header>
  );
}
