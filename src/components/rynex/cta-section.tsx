"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="spacious-section relative overflow-hidden">
      <div className="from-primary/10 to-primary/5 absolute inset-0 bg-gradient-to-r via-transparent" />
      <div className="bg-primary/5 absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass text-primary mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs tracking-wider uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Mari Bangun Bersama</span>
          </motion.div>

          <h2 className="mb-6 text-4xl leading-tight font-bold md:text-6xl">
            Siap Membangun
            <br />
            <span className="gradient-text">Masa Depan Digital</span>?
          </h2>

          <p className="text-muted-foreground mx-auto mb-10 max-w-xl text-lg">
            Ceritakan tentang proyek Anda dan kami akan menciptakan solusi yang
            melampaui ekspektasi.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="soft-shadow px-8 py-6 font-mono text-base tracking-wider uppercase"
              >
                Mulai Proyek Anda
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/templates">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 font-mono text-base tracking-wider uppercase"
              >
                Lihat Template
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
