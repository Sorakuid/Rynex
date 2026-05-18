"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { WebDevelopment } from "undraw-react";

import { VantaBackground } from "@/components/soraku/vanta-background";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden" id="beranda">
      <VantaBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1E22]/60 via-[#1C1E22]/30 to-[#1C1E22]" />
      <div className="bg-primary/10 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-[128px]" />
      <div className="bg-primary/5 absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full blur-[96px]" />

      <div className="relative z-10 container mx-auto flex min-h-screen items-center px-4 pt-28 pb-20">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="glass text-primary mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
            >
              <Sparkles className="h-4 w-4" />
              <span>Studio Kreatif Teknologi Independen</span>
            </motion.div>

            <h1 className="text-foreground mb-8 text-5xl leading-[1.1] font-bold tracking-tight md:text-7xl">
              Wujudkan
              <br />
              <span className="gradient-text">Keunggulan Digital</span>
              <br />
              <span className="text-muted-foreground/80 text-4xl font-medium md:text-6xl">
                yang Menggerakkan Bisnis Modern Anda
              </span>
            </h1>

            <p className="text-muted-foreground mb-10 max-w-xl text-lg leading-relaxed md:text-xl">
              Soraku Studio menghadirkan website premium, antarmuka intuitif,
              dan produk digital skalabel yang memperkuat merek Anda di lanskap
              modern.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/custom-project">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button size="lg" className="soft-shadow px-8 py-6 text-base">
                    Mulai Proyek
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/services">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-base"
                  >
                    Jelajahi Layanan
                  </Button>
                </motion.div>
              </Link>
            </div>

            <div className="border-border/50 mt-12 flex items-center gap-8 border-t pt-8">
              {["50+ Proyek", "30+ Klien", "98% Kepuasan"].map((stat) => (
                <div key={stat} className="text-muted-foreground text-sm">
                  <span className="text-foreground block font-semibold">
                    {stat.split(" ")[0]}
                  </span>
                  {stat.split(" ").slice(1).join(" ")}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="from-primary/20 absolute inset-0 rounded-3xl bg-gradient-to-tr to-transparent blur-3xl" />
              <div className="animate-float relative">
                <WebDevelopment color="#4FA3D1" size={450} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
