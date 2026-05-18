"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Headphones, Shield } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Landing Page",
    price: "Rp 2.500.000",
    timeline: "3-7 Hari",
    features: [
      "1 Halaman Utama",
      "Desain Responsif",
      "Optimasi SEO",
      "Form Kontak",
      "Hosting 1 Tahun",
    ],
  },
  {
    name: "Website Perusahaan",
    price: "Rp 5.000.000",
    timeline: "1-2 Minggu",
    features: [
      "5 Halaman",
      "CMS Terintegrasi",
      "Blog System",
      "Integrasi Sosmed",
      "SEO Lanjutan",
      "Hosting 1 Tahun",
    ],
    popular: true,
  },
  {
    name: "Dashboard System",
    price: "Rp 8.000.000",
    timeline: "2-4 Minggu",
    features: [
      "Dashboard Kustom",
      "Analitik Real-time",
      "Manajemen User",
      "API Integration",
      "Database Design",
      "Dukungan Prioritas",
    ],
  },
];

const steps = [
  { icon: Clock, label: "Konsultasi", desc: "Diskusi kebutuhan & visi" },
  { icon: Shield, label: "Kesepakatan", desc: "Kontrak & pembayaran" },
  { icon: Headphones, label: "Pengerjaan", desc: "Desain hingga peluncuran" },
];

export default function CheckoutPage() {
  return (
    <div className="pt-28">
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Pesan Sekarang
            </span>
            <h1 className="mt-4 mb-4 text-5xl font-bold md:text-6xl">
              Checkout <span className="gradient-text">Proyek</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Pilih paket yang sesuai dengan kebutuhan Anda. Tim kami akan
              menghubungi Anda dalam 24 jam.
            </p>
          </motion.div>

          <div className="mx-auto mb-20 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card relative rounded-2xl p-8 ${
                  pkg.popular ? "border-primary/30 ring-primary/20 ring-1" : ""
                }`}
              >
                {pkg.popular && (
                  <span className="bg-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 font-mono text-[10px] tracking-wider text-white uppercase">
                    Populer
                  </span>
                )}
                <h3 className="mb-2 text-lg font-semibold">{pkg.name}</h3>
                <div className="gradient-text mb-1 text-3xl font-bold">
                  {pkg.price}
                </div>
                <div className="text-muted-foreground mb-6 flex items-center gap-1.5 font-mono text-xs">
                  <Clock className="h-3 w-3" />
                  {pkg.timeline}
                </div>
                <ul className="mb-8 space-y-3">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="text-muted-foreground flex items-start gap-2 text-sm"
                    >
                      <Check className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    className="w-full font-mono text-xs tracking-wider uppercase"
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Pesan Sekarang
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-8 text-center text-2xl font-bold">Cara Pesan</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {steps.map((step, i) => (
                <div key={step.label} className="text-center">
                  <div className="bg-primary/10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
                    <step.icon className="text-primary h-6 w-6" />
                  </div>
                  <div className="text-primary mb-1 font-mono text-xs">
                    0{i + 1}
                  </div>
                  <h3 className="mb-1 text-sm font-semibold">{step.label}</h3>
                  <p className="text-muted-foreground text-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-6 text-sm">
              Butuh solusi kustom?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Hubungi kami untuk penawaran khusus
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
