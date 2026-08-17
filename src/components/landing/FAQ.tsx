"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/src/data/landing";


export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 mx-auto max-w-3xl bg-linear-to-b from-transparent via-violet-500/5 to-transparent px-5 pb-24">
      <h2 className="text-center font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        Questions, <span className="text-gradient">answered</span>
      </h2>

      <div className="mt-10 space-y-3">
        {faqs?.map((f, i) => {
          const isOpen = open === i;

          return (
            <div key={f.q} className="glass overflow-hidden rounded-2xl">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium"
              >
                {f.q}

                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
