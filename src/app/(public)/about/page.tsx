"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Globe, Heart, Users } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const stats = [
  { value: "50+", label: "Proyek Selesai" },
  { value: "30+", label: "Klien Puas" },
  { value: "4+", label: "Tahun Pengalaman" },
  { value: "98%", label: "Kepuasan Klien" },
];

const values = [
  {
    icon: <Code className="text-primary h-5 w-5" />,
    title: "Keunggulan Teknis",
    description:
      "Kami menulis kode bersih dan mudah dipelihara menggunakan framework modern dan praktik terbaik.",
  },
  {
    icon: <Users className="text-primary h-5 w-5" />,
    title: "Kemitraan Klien",
    description:
      "Kami bekerja sebagai perpanjangan tim Anda, berkomunikasi dengan jelas dan memberikan hasil secara konsisten.",
  },
  {
    icon: <Globe className="text-primary h-5 w-5" />,
    title: "Pola Pikir Global",
    description:
      "Kami membangun untuk audiens internasional dengan dukungan multi-bahasa dan kesadaran budaya.",
  },
  {
    icon: <Heart className="text-primary h-5 w-5" />,
    title: "Didorong Gairah",
    description:
      "Setiap proyek mendapatkan energi kreatif penuh dan perhatian terhadap detail.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28">
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-3xl"
          >
            <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Tentang Rynex
            </span>
            <h1 className="mt-4 mb-6 text-3xl font-bold md:text-5xl md:text-6xl">
              Kami Bangun
              <br />
              <span className="gradient-text">Keunggulan Digital</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              RYNEX adalah layanan digital engineering premium yang dioperasikan
              oleh Soraku Studio. Kami bermitra dengan bisnis untuk menciptakan
              pengalaman web yang mendorong hasil nyata.
            </p>
          </motion.div>

          <div className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <p className="text-primary font-mono text-3xl font-bold md:text-4xl">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-2 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 text-center"
            >
              <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
                Nilai Kami
              </span>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Yang Memotivasi Kami
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-base font-semibold">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6 font-mono text-sm">
              Dikelola oleh Soraku Studio
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="soft-shadow font-mono text-xs tracking-wider uppercase"
              >
                Mari Bekerja Sama
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
