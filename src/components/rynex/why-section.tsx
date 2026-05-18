"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, Gauge, Layout, Shield, Workflow } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const easeOut = [0.22, 1, 0.36, 1] as [number, number, number, number];

const statementWords = [
  { text: "PRECISION", size: "lg" },
  { text: "PERFORMANCE", size: "lg" },
  { text: "CLARITY", size: "lg" },
  { text: "CRAFT", size: "xl" },
];

const cards = [
  {
    icon: <Layout className="text-primary h-5 w-5" />,
    title: "Product-Grade Architecture",
    desc: "Every build follows scalable engineering principles with clean code architecture, modular components, and future-ready infrastructure.",
    size: "square",
  },
  {
    icon: <Gauge className="text-primary h-5 w-5" />,
    title: "Performance First",
    desc: "Optimized for speed, responsiveness, and efficiency. Sub-second load times, smooth interactions, and Lighthouse 90+ scores out of the box.",
    size: "wide",
  },
  {
    icon: <Eye className="text-primary h-5 w-5" />,
    title: "Premium Experience",
    desc: "Refined interface with intentional interaction design. Every micro-animation, every transition, every pixel serves a purpose.",
    size: "square",
  },
  {
    icon: <Workflow className="text-primary h-5 w-5" />,
    title: "Structured Workflow",
    desc: "Clear process from planning to launch. Transparent milestones, regular updates, and collaborative feedback loops keep you in control.",
    size: "square",
  },
  {
    icon: <Shield className="text-primary h-5 w-5" />,
    title: "Licensing & Ownership",
    desc: "Secure deployment with modern license control. Full source code ownership, verified licensing system, and no vendor lock-in.",
    size: "wide",
  },
];

const wordVariants = {
  hidden: { opacity: 0, x: -30, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: easeOut,
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3 + i * 0.08,
      ease: easeOut,
    },
  }),
};

export function WhySection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="from-primary/[0.02] absolute inset-0 bg-gradient-to-b via-transparent to-transparent" />
      <div className="bg-primary/[0.015] absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full blur-[180px]" />
      <div className="bg-primary/[0.01] absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Kenapa Rynex
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-3xl leading-[1.1] font-bold md:text-4xl lg:text-5xl"
            >
              Kenapa Rynex
              <br />
              <span className="gradient-text">Dibangun Berbeda</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground mb-12 max-w-sm text-base leading-relaxed"
            >
              Kami merancang setiap pengalaman digital dengan presisi, performa,
              dan standar engineering modern.
            </motion.p>

            <div className="space-y-1">
              {statementWords.map((word, i) => (
                <motion.div
                  key={word.text}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={wordVariants}
                  className="overflow-hidden"
                >
                  <span
                    className={`block leading-[0.95] font-bold tracking-tight ${
                      word.size === "xl"
                        ? "gradient-text text-5xl md:text-6xl lg:text-7xl"
                        : "text-foreground/90 text-4xl md:text-5xl lg:text-6xl"
                    }`}
                    style={{
                      textShadow:
                        word.size === "xl"
                          ? "0 0 40px rgba(79,163,209,0.15)"
                          : "none",
                    }}
                  >
                    {word.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Link href="/contact">
                <Button className="soft-shadow font-mono text-xs tracking-wider uppercase">
                  Mulai Proyek
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="font-mono text-xs tracking-wider uppercase"
                >
                  Lihat Portfolio
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={cardVariants}
                  className={`group hover:border-primary/20 relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(79,163,209,0.08)] ${
                    card.size === "wide" ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="from-primary/[0.02] pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="bg-primary/5 group-hover:bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-colors">
                      {card.icon}
                    </div>
                    <h3 className="group-hover:text-primary mb-2 text-base font-semibold transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
