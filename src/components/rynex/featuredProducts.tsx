"use client";

import { motion } from "framer-motion";
import { Monitor, Palette, ShoppingBag, Smartphone } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    icon: <Monitor className="text-primary h-6 w-6" />,
    title: "Company Profile Pro",
    description:
      "Website perusahaan premium dengan CMS terintegrasi, multi-bahasa, dan performa optimal.",
    price: "Mulai Rp 5.000.000",
    href: "/templates",
  },
  {
    icon: <Smartphone className="text-primary h-6 w-6" />,
    title: "Landing Page Konversi",
    description:
      "Landing page siap-pakai dengan desain teruji A/B, optimasi SEO, dan analitik bawaan.",
    price: "Mulai Rp 2.500.000",
    href: "/templates",
  },
  {
    icon: <Palette className="text-primary h-6 w-6" />,
    title: "Dashboard Analytics",
    description:
      "Dashboard analitik real-time dengan visualisasi data interaktif dan laporan otomatis.",
    price: "Mulai Rp 8.000.000",
    href: "/templates",
  },
  {
    icon: <ShoppingBag className="text-primary h-6 w-6" />,
    title: "E-Commerce Starter",
    description:
      "Toko online siap-pakai dengan manajemen produk, pembayaran, dan dashboard penjualan.",
    price: "Mulai Rp 7.500.000",
    href: "/templates",
  },
];

export function FeaturedProductsSection() {
  return (
    <section className="spacious-section" id="featured">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:mb-16"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Produk Unggulan
          </span>
          <h2 className="mt-4 mb-4 text-2xl font-bold md:text-4xl md:text-5xl">
            Solusi Siap Pakai
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Produk digital premium yang siap membantu bisnis Anda berkembang
            lebih cepat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group flex flex-col rounded-2xl p-6"
            >
              <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
                {product.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>
              <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                {product.description}
              </p>
              <div className="text-primary mb-4 font-mono text-xs">
                {product.price}
              </div>
              <Link href={product.href}>
                <span className="text-primary hover:text-primary/80 inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase transition-colors">
                  Detail Produk <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
