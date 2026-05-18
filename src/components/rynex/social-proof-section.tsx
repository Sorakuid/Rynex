"use client";

import { motion } from "framer-motion";
import { Award, Building2, Globe, Users } from "lucide-react";

const stats = [
  {
    icon: <Award className="text-primary h-5 w-5" />,
    value: "50+",
    label: "Proyek Selesai",
  },
  {
    icon: <Building2 className="text-primary h-5 w-5" />,
    value: "30+",
    label: "Klien Bisnis",
  },
  {
    icon: <Globe className="text-primary h-5 w-5" />,
    value: "12+",
    label: "Negara",
  },
  {
    icon: <Users className="text-primary h-5 w-5" />,
    value: "98%",
    label: "Kepuasan Klien",
  },
];

export function SocialProofSection() {
  return (
    <section className="border-y border-white/5 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="bg-primary/10 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl">
                {stat.icon}
              </div>
              <span className="gradient-text mb-1 block text-3xl font-bold md:text-4xl">
                {stat.value}
              </span>
              <span className="text-muted-foreground font-mono text-xs tracking-wider uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
