"use client";

import { useAppConfigStore } from "@/src/store/appConfigStore";

export default function Footer() {
  const iconUrl = useAppConfigStore((state) => state.iconUrl);

  return (
    <footer className="relative z-10 border-t border-border/60 bg-linear-to-r from-violet-500/5 via-transparent to-rose-500/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-linear-to-br from-purple-500 via-pink-500 to-rose-500 p-0.5">
            <img
              src={iconUrl}
              alt=""
              className="h-7 w-7 rounded-[7px]"
              width={28}
              height={28}
            />
          </div>
          <span>SoulSync — Together. Always.</span>
        </div>

        <span>© {new Date().getFullYear()} Avinash Shrivastav</span>
      </div>
    </footer>
  );
}
