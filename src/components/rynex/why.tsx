"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Gauge,
  Search,
  Shield,
  Timer,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: <Gauge className="text-primary h-4 w-4" />,
    title: "Performa Cepat",
    desc: "Sub-second load times dan Lighthouse 90+",
  },
  {
    icon: <Search className="text-primary h-4 w-4" />,
    title: "SEO Friendly",
    desc: "Optimasi mesin pencari dan struktur data",
  },
  {
    icon: <Zap className="text-primary h-4 w-4" />,
    title: "Scalable",
    desc: "Arsitektur siap berkembang kapan pun",
  },
  {
    icon: <Shield className="text-primary h-4 w-4" />,
    title: "Secure",
    desc: "Standar keamanan dan enkripsi data",
  },
  {
    icon: <Timer className="text-primary h-4 w-4" />,
    title: "Fast Delivery",
    desc: "Tepat waktu dengan quality assurance",
  },
  {
    icon: <Users className="text-primary h-4 w-4" />,
    title: "Long-Term Support",
    desc: "Dukungan berkelanjutan setelah launch",
  },
];

export function WhySection() {
  return (
    <section className="spacious-section relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-10 max-w-2xl md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-primary mb-4 block font-mono text-xs font-semibold tracking-widest uppercase"
          >
            Keunggulan
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl leading-tight font-bold md:text-5xl"
          >
            Kenapa Rynex <span className="gradient-text">Dibangun Berbeda</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-sm leading-relaxed md:text-base"
          >
            Bukan sekadar website yang terlihat bagus. Kami membangun produk
            digital yang cepat, stabil, mudah dikembangkan, dan siap mendukung
            pertumbuhan bisnis Anda dalam jangka panjang.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {benefits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group hover:border-primary/20 border-border bg-card hover:bg-card/80 rounded-2xl border p-4 transition-[background-color,border-color] duration-300 md:p-6"
            >
              <div className="bg-primary/5 group-hover:bg-primary/10 mb-3 flex h-9 w-9 items-center justify-center rounded-xl transition-colors md:h-10 md:w-10">
                {item.icon}
              </div>
              <h3 className="group-hover:text-primary mb-1 text-sm font-semibold transition-colors md:text-base">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed md:text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-3 md:mt-14"
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
    </section>
  );
}
