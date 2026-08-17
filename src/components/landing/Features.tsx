"use client";

import { motion } from "framer-motion";

import { features } from "@/src/data/landing";


const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-6xl px-5 pb-24 pt-12">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Everything you do together,{" "}
          <span className="text-gradient">in one place</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Built for couples, not crowds. No feeds, no strangers — only the two
          of you.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features?.map((f, i) => {
          const Icon = f.icon;

          return (
            <motion.article
              key={f.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass group rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="bg-soul-soft inline-flex h-11 w-11 items-center justify-center rounded-2xl">
                <Icon className="h-5 w-5 text-blush" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
