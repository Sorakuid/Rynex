"use client";

import { motion } from "framer-motion";
import { Building2, Code, Layout, Palette, Target } from "lucide-react";

const services = [
  {
    icon: <Code className="text-primary h-6 w-6" />,
    title: "Pengembangan Website",
    description:
      "Website dan aplikasi web kustom dengan framework modern. Dari landing page hingga platform kompleks.",
  },
  {
    icon: <Palette className="text-primary h-6 w-6" />,
    title: "Desain UI/UX",
    description:
      "Pengalaman desain yang berpusat pada manusia. Antarmuka intuitif yang menyeimbangkan estetika dan kegunaan.",
  },
  {
    icon: <Layout className="text-primary h-6 w-6" />,
    title: "Desain Produk",
    description:
      "Desain produk digital menyeluruh. Dari konsep hingga purwarupa yang siap pasar.",
  },
  {
    icon: <Target className="text-primary h-6 w-6" />,
    title: "Strategi Merek",
    description:
      "Identitas merek yang kohesif dan berkesan. Sistem visual, panduan merek, dan positioning strategis.",
  },
  {
    icon: <Building2 className="text-primary h-6 w-6" />,
    title: "Solusi Bisnis",
    description:
      "Transformasi digital untuk bisnis modern. Platform skalabel, sistem otomatisasi, dan konsultasi teknologi.",
  },
];

export function ServicesSection() {
  return (
    <section
      className="spacious-section section-divider scroll-mt-24"
      id="layanan"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Layanan Kami
          </span>
          <h2 className="text-foreground mt-3 mb-4 text-3xl font-bold md:text-5xl">
            Layanan <span className="gradient-text">Kami</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Solusi teknologi kreatif komprehensif yang dikirim dengan presisi
            dan tujuan.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group rounded-2xl p-8"
            >
              <div className="bg-primary/10 group-hover:bg-primary/20 mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-foreground group-hover:text-primary mb-3 text-xl font-semibold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
