import { Download, ShieldCheck, Smartphone, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import poster from "@/assets/soulsync-screen-0.webp";
import Button from "@/components/ui/Button";
import { APK_URL } from "@/data/landing";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="top" className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-8 md:pt-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-blush" />
            Version 3.1 — call minimizer is here
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Together.
            <br />
            <span className="text-gradient">Always.</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            SoulSync is the private space for two — chat, watch, listen and call
            in perfect sync, no matter how many miles are in between.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="soul" size="lg">
              <a href={APK_URL} target="_blank" rel="noreferrer">
                <Download className="h-5 w-5" />
                Download APK
              </a>
            </Button>

            <Button asChild variant="outline" size="lg">
              <a href="#screens">
                <Smartphone className="h-5 w-5" />
                See it in action
              </a>
            </Button>
          </div>

          <div className="mt-7 flex items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-blush text-blush" />
              10.0 rating
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-azure" />
              Private by design
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="animate-soul-float"
        >
          <div className="glass-strong overflow-hidden rounded-3xl p-2">
            <img
              src={poster}
              alt="SoulSync app showing the couple home dashboard and Watch Together video call"
              className="w-full rounded-2xl"
              width={1774}
              height={887}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
