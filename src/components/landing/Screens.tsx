"use client";

import { Flame } from "lucide-react";
import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Screens() {
  return (
    <section id="screens" className="relative z-10 mx-auto max-w-6xl px-5 pb-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="glass-strong overflow-hidden rounded-[2rem] p-6 sm:p-10"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              A look inside <span className="text-gradient">SoulSync</span>
            </h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              Home, chat, watch together and memories — designed dark, warm and
              effortless.
            </p>
          </div>

          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <Flame className="h-4 w-4 text-blush" />
            12-day streaks and counting
          </span>
        </div>

        <img
          src="/soulsync-screen-1.jpg"
          alt="SoulSync screens: home dashboard, private chat, watch together and memories gallery"
          className="mt-8 w-full rounded-2xl"
          loading="lazy"
          width={1536}
          height={1024}
        />
      </motion.div>
    </section>
  );
}
