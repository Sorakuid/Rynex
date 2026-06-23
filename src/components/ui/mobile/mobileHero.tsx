"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { HeroBadge } from "@/components/ui/common/badge";

export function MobileHero() {
  return (
    <section className="relative flex min-h-[60vh] flex-col justify-start overflow-hidden pt-28 pb-6">
      <div className="from-background via-background to-background/95 absolute inset-0 bg-gradient-to-b" />

      <div className="relative z-10 container mx-auto px-4">
        <HeroBadge />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-[2.5rem] leading-[1.05] font-bold tracking-tight"
        >
          Your Digital
          <br />
          <span className="gradient-text">Presence</span>
          <br />
          Elevated
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted-foreground mt-3 max-w-sm text-sm leading-relaxed"
        >
          Website, dashboard, CRM, and custom systems built with modern
          technologies and long-term scalability in mind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 flex gap-3"
        >
          <Link href="/contact" className="flex-1">
            <Button
              size="lg"
              className="soft-shadow w-full px-4 py-3 font-mono text-xs tracking-wider uppercase md:px-8 md:py-5 md:text-sm"
            >
              Mulai Proyek
              <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
            </Button>
          </Link>
          <Link href="/portfolio" className="flex-1">
            <Button
              size="lg"
              variant="outline"
              className="w-full px-4 py-3 font-mono text-xs tracking-wider uppercase md:px-8 md:py-5 md:text-sm"
            >
              Lihat Karya
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
