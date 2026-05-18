"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  LayoutDashboard,
  Monitor,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

const works = [
  {
    title: "Sistem Dashboard Modern",
    category: "Pengembangan Web",
    icon: <LayoutDashboard className="text-primary/40 h-12 w-12" />,
  },
  {
    title: "Identitas Merek Kreatif",
    category: "Desain Merek",
    icon: <Monitor className="text-primary/40 h-12 w-12" />,
  },
  {
    title: "Platform E-Commerce",
    category: "Desain Produk",
    icon: <ShoppingBag className="text-primary/40 h-12 w-12" />,
  },
];

export function StudioShowcase() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {works.map((work, i) => (
        <motion.div
          key={work.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="glass-card group cursor-pointer overflow-hidden rounded-2xl"
        >
          <div className="bg-primary/5 group-hover:bg-primary/10 flex aspect-[4/3] items-center justify-center transition-all duration-500">
            <div className="transition-transform duration-500 group-hover:scale-110">
              {work.icon}
            </div>
          </div>
          <div className="p-6">
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">
              {work.category}
            </span>
            <h3 className="text-foreground group-hover:text-primary mt-2 text-lg font-semibold transition-colors">
              {work.title}
            </h3>
            <div className="text-muted-foreground group-hover:text-primary mt-3 flex items-center gap-1 text-sm transition-colors">
              <span>Lihat Proyek</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
