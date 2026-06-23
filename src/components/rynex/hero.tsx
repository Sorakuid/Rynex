"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24 pb-16 md:min-h-screen md:pt-32 md:pb-20">
      <div className="from-background via-background to-background/95 absolute inset-0 bg-gradient-to-b" />
      <div className="border-primary/20 absolute top-1/2 left-1/2 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-20 md:block" />
      <div className="border-primary/10 absolute top-1/2 left-1/2 hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-10 md:block" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="border-border mx-auto mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs tracking-wider uppercase transition-colors hover:bg-black/5 md:mb-8 dark:hover:bg-white/5"
          >
            <Sparkles className="text-primary h-3.5 w-3.5" />
            <span className="text-muted-foreground">
              Premium Digital Engineering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-[clamp(2.5rem,8vw,5rem)] leading-[1] font-bold tracking-tight md:mb-6"
          >
            Kami Bangun
            <br />
            <span className="gradient-text">Digital</span>
            <br />
            Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-muted-foreground mx-auto mb-8 max-w-xl text-sm leading-relaxed md:mb-10 md:text-lg"
          >
            RYNEX menghadirkan website premium, landing page, dashboard, dan
            produk digital skalabel yang mendorong pertumbuhan bisnis Anda.
            Ditenagai oleh Soraku Studio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="soft-shadow w-full px-8 py-5 font-mono text-sm tracking-wider uppercase sm:w-auto"
              >
                Mulai Proyek
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full px-8 py-5 font-mono text-sm tracking-wider uppercase sm:w-auto"
              >
                Lihat Karya
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
