"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Check,
  Database,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <BarChart3 className="text-primary h-6 w-6" />,
    title: "Visualisasi Real-Time",
    desc: "Grafik dan metrik interaktif yang diperbarui secara real-time untuk pengambilan keputusan cepat.",
  },
  {
    icon: <Database className="text-primary h-6 w-6" />,
    title: "Manajemen Data",
    desc: "Import, ekspor, dan kelola data dengan antarmuka yang intuitif dan sistem filter canggih.",
  },
  {
    icon: <Users className="text-primary h-6 w-6" />,
    title: "Manajemen Pengguna",
    desc: "Akses berbasis peran (RBAC) dengan kontrol penuh atas izin dan auditable logs.",
  },
  {
    icon: <Shield className="text-primary h-6 w-6" />,
    title: "Keamanan & Enkripsi",
    desc: "Enkripsi end-to-end, autentikasi multi-faktor, dan audit trail untuk kepatuhan.",
  },
];

const benefits = [
  "Autentikasi & otorisasi user",
  "Roles & permissions management",
  "Export data (CSV, PDF, Excel)",
  "Sistem notifikasi real-time",
  "API endpoint untuk integrasi",
  "Riwayat aktivitas & audit log",
];

export default function DashboardSystemPage() {
  return (
    <div className="pt-28">
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Dashboard System
            </span>
            <h1 className="mt-4 mb-4 text-3xl font-bold md:text-5xl md:text-6xl">
              Dashboard
              <br />
              <span className="gradient-text">& Analitik</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Dashboard kaya data dengan visualisasi real-time dan arsitektur
              skalabel untuk mengelola bisnis Anda.
            </p>
          </motion.div>

          <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group hover:border-primary/20 rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-[background-color,border-color] duration-300 hover:bg-white/[0.04]"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mx-auto mb-20 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 text-center"
            >
              <h2 className="text-3xl font-bold md:text-4xl">Fitur Unggulan</h2>
            </motion.div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="text-muted-foreground flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-sm"
                >
                  <Check className="text-primary h-4 w-4 shrink-0" />
                  {b}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card mx-auto max-w-2xl rounded-2xl p-8 text-center md:p-12"
          >
            <Activity className="text-primary mx-auto mb-4 h-10 w-10" />
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              Kelola Data dengan Mudah
            </h2>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              Dashboard sistem mulai dari Rp 8.000.000. Konsultasi kebutuhan
              Anda gratis.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button className="soft-shadow w-full font-mono text-xs tracking-wider uppercase sm:w-auto">
                  Mulai Proyek
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="w-full font-mono text-xs tracking-wider uppercase sm:w-auto"
                >
                  Lihat Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
