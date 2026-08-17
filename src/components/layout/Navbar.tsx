"use client";

import { Download } from "lucide-react";
import { useAppConfigStore } from "@/src/store/appConfigStore";
import Button from "../ui/Button";

export default function Navbar() {
  const apkUrl = useAppConfigStore((state) => state.apkUrl);
  const iconUrl = useAppConfigStore((state) => state.iconUrl);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-linear-to-r from-violet-500/10 via-background/75 to-rose-500/10 bg-background/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5">
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="SoulSync home"
        >
          <div className="rounded-[13px] bg-linear-to-br from-violet-500 via-fuchsia-500 to-rose-500 p-[2px] shadow-md shadow-violet-500/15 transition-transform duration-300 group-hover:scale-105">
            <div className="rounded-[11px] bg-background p-[1px]">
              <img
                src={iconUrl}
                alt="SoulSync app icon"
                className="h-9 w-9 rounded-[9px] object-cover"
                width={36}
                height={36}
              />
            </div>
          </div>

          <span className="font-display text-lg font-extrabold tracking-tight">
            Soul
            <span className="bg-linear-to-r from-violet-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              Sync
            </span>
          </span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a
            href="#features"
            className="text-muted-foreground transition-colors duration-200 hover:text-violet-600"
          >
            Features
          </a>

          <a
            href="#screens"
            className="text-muted-foreground transition-colors duration-200 hover:text-fuchsia-500"
          >
            Screens
          </a>

          <a
            href="#faq"
            className="text-muted-foreground transition-colors duration-200 hover:text-rose-500"
          >
            FAQ
          </a>
        </div>

        {/* CTA */}
        <Button
          asChild
          size="sm"
          className="gap-2 border-0 bg-linear-to-r from-violet-600 via-fuchsia-500 to-rose-500 text-white shadow-lg shadow-fuchsia-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fuchsia-500/30"
        >
          <a href={apkUrl} target="_blank" rel="noreferrer">
            <Download className="h-4 w-4" />
            <span>Get the app</span>
          </a>
        </Button>
      </nav>
    </header>
  );
}