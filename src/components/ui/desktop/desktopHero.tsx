"use client";

import { motion } from "framer-motion";

import { HeroBadge } from "@/components/ui/common/badge";
import { HeroCTA } from "@/components/ui/common/cta";
export function DesktopHero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-start overflow-hidden pt-32 pb-8">
      <div className="from-background via-background to-background/95 absolute inset-0 bg-gradient-to-b" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroBadge />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl leading-[1.05] font-bold tracking-tight xl:text-6xl"
          >
            Your Digital Presence
            <br />
            <span className="gradient-text">Elevated</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-muted-foreground mt-5 max-w-md text-base leading-relaxed"
          >
            Website, dashboard, CRM, and custom systems built with modern
            technologies and long-term scalability in mind.
          </motion.p>

          <div className="mt-8">
            <HeroCTA />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
