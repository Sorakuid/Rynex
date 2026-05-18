"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const floatingShapes = [
  { size: 60, x: 20, y: 10, delay: 0, duration: 6, color: "bg-primary/20" },
  { size: 40, x: 70, y: 30, delay: 1, duration: 8, color: "bg-primary/15" },
  { size: 80, x: 50, y: 60, delay: 2, duration: 7, color: "bg-primary/10" },
  { size: 30, x: 85, y: 70, delay: 0.5, duration: 9, color: "bg-white/10" },
  { size: 50, x: 10, y: 75, delay: 1.5, duration: 7.5, color: "bg-primary/15" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
      <div className="from-primary/5 absolute inset-0 bg-gradient-to-b via-transparent to-[#1C1E22]" />
      <div className="bg-primary/5 absolute top-1/4 right-1/4 h-[800px] w-[800px] animate-pulse rounded-full blur-[180px]" />
      <div className="bg-primary/3 absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass text-primary mb-10 inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs tracking-wider uppercase"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Premium Digital Engineering</span>
            </motion.div>

            <h1 className="mb-8 text-5xl leading-[0.92] font-bold tracking-tight md:text-7xl lg:text-8xl">
              Kami Bangun
              <br />
              <span className="gradient-text">Digital</span>
              <br />
              Experience
            </h1>

            <p className="text-muted-foreground mb-12 max-w-xl text-lg leading-relaxed md:text-xl">
              RYNEX menghadirkan website premium, landing page, dashboard, dan
              produk digital skalabel yang mendorong pertumbuhan bisnis Anda.
              Ditenagai oleh Soraku Studio.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="soft-shadow px-8 py-6 font-mono text-base tracking-wider uppercase"
                  >
                    Mulai Proyek
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link href="/portfolio">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 font-mono text-base tracking-wider uppercase"
                  >
                    Lihat Karya
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-[500px]">
              <div className="from-primary/20 via-primary/5 absolute inset-0 rounded-3xl bg-gradient-to-tr to-transparent blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-72 w-72 md:h-80 md:w-80">
                  {floatingShapes.map((shape, i) => (
                    <motion.div
                      key={i}
                      className={`absolute rounded-2xl ${shape.color} border border-white/5 backdrop-blur-sm`}
                      style={{
                        width: shape.size,
                        height: shape.size,
                        left: `${shape.x}%`,
                        top: `${shape.y}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: shape.duration,
                        delay: shape.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="from-primary/30 to-primary/5 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br blur-sm md:h-40 md:w-40">
                      <div className="from-primary/40 to-primary/10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br md:h-24 md:w-24">
                        <span className="gradient-text text-4xl font-bold md:text-5xl">
                          R
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-muted-foreground/50 font-mono text-[10px] tracking-[0.2em] uppercase">
            Scroll
          </span>
          <div className="bg-border/50 h-8 w-px" />
        </div>
      </motion.div>
    </section>
  );
}
