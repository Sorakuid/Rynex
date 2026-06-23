"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Check,
  Globe,
  Layers,
  MessageSquare,
  Shield,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Layers className="text-primary h-6 w-6" />,
    title: "Multi-Halaman",
    desc: "Arsitektur halaman tak terbatas dengan navigasi yang terstruktur dan hierarki konten yang jelas.",
  },
  {
    icon: <Globe className="text-primary h-6 w-6" />,
    title: "Multi-Bahasa",
    desc: "Dukungan bahasa internasional dengan manajemen konten yang terpisah per bahasa.",
  },
  {
    icon: <Shield className="text-primary h-6 w-6" />,
    title: "Keamanan Enterprise",
    desc: "SSL, enkripsi data, proteksi DDoS, dan backup otomatis untuk ketenangan pikiran.",
  },
  {
    icon: <MessageSquare className="text-primary h-6 w-6" />,
    title: "CMS Terintegrasi",
    desc: "Kelola konten website secara mandiri tanpa perlu keahlian teknis. Update kapan saja.",
  },
];

const benefits = [
  "Desain corporate premium & profesional",
  "Halaman: Beranda, Tentang, Layanan, Blog, Kontak, Karir",
  "Integrasi formulir inquiry & booking",
  "Sistem manajemen konten (CMS)",
  "Optimasi SEO enterprise",
  "Dashboard analitik terintegrasi",
];

export default function CompanyWebsitePage() {
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
              Website Perusahaan
            </span>
            <h1 className="mt-4 mb-4 text-3xl font-bold md:text-5xl md:text-6xl">
              Website
              <br />
              <span className="gradient-text">Perusahaan Profesional</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Website korporat multi-halaman yang membangun otoritas merek, dan
              mengomunikasikan nilai bisnis Anda.
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
              <h2 className="text-3xl font-bold md:text-4xl">
                Yang Termasuk dalam Paket
              </h2>
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
            <Building2 className="text-primary mx-auto mb-4 h-10 w-10" />
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">
              Bangun Kehadiran Digital Anda
            </h2>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              Website perusahaan premium mulai dari Rp 5.000.000. Dapatkan
              konsultasi gratis.
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
