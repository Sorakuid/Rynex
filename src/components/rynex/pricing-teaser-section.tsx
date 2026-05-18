"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "Rp 2.500.000",
    description: "Cocok untuk landing page atau website personal.",
    features: [
      "1 Halaman Utama",
      "Desain Responsif",
      "Optimasi SEO Dasar",
      "Hosting 1 Tahun",
    ],
  },
  {
    name: "Professional",
    price: "Rp 5.000.000",
    description: "Ideal untuk UKM yang ingin tampil profesional online.",
    features: [
      "5 Halaman",
      "CMS Terintegrasi",
      "Optimasi SEO Lanjutan",
      "Integrasi Media Sosial",
      "Form Kontak",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Rp 10.000.000+",
    description: "Solusi lengkap untuk perusahaan dengan kebutuhan kompleks.",
    features: [
      "Halaman Tak Terbatas",
      "Sistem Kustom",
      "Multi-bahasa",
      "Dashboard Analitik",
      "Dukungan Prioritas",
    ],
  },
];

export function PricingTeaserSection() {
  return (
    <section className="spacious-section" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Harga
          </span>
          <h2 className="mt-4 mb-4 text-4xl font-bold md:text-5xl">
            Paket & Harga
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Harga transparan tanpa biaya tersembunyi. Setiap paket dapat
            disesuaikan dengan kebutuhan Anda.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card relative rounded-2xl p-8 ${
                plan.popular ? "border-primary/30 ring-primary/20 ring-1" : ""
              }`}
            >
              {plan.popular && (
                <span className="bg-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 font-mono text-[10px] tracking-wider text-white uppercase">
                  Populer
                </span>
              )}
              <div className="mb-6">
                <h3 className="mb-1 text-lg font-semibold">{plan.name}</h3>
                <div className="gradient-text text-2xl font-bold">
                  {plan.price}
                </div>
                <p className="text-muted-foreground mt-1 text-xs">
                  {plan.description}
                </p>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-muted-foreground flex items-start gap-2 text-sm"
                  >
                    <Check className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button
                  className="w-full font-mono text-xs tracking-wider uppercase"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Pilih Paket
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/pricing">
            <span className="text-primary hover:text-primary/80 inline-flex items-center gap-2 font-mono text-sm tracking-wider uppercase transition-colors">
              Lihat Semua Paket
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
