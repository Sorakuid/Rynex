"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Check,
  Code,
  Layout,
  Monitor,
  Workflow,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Layout className="text-primary h-8 w-8" />,
    title: "Landing Page",
    description:
      "Landing page konversi tinggi yang dirancang untuk menangkap prospek, menampilkan produk, dan mendorong pertumbuhan bisnis yang terukur.",
    features: [
      "Desain & branding kustom",
      "Siap A/B testing",
      "Optimasi SEO",
      "Waktu muat sub-detik",
      "Integrasi analitik",
    ],
    price: "Mulai Rp 2.500.000",
  },
  {
    icon: <Building2 className="text-primary h-8 w-8" />,
    title: "Website Perusahaan",
    description:
      "Website korporat multi-halaman profesional yang membangun otoritas merek dan mengomunikasikan proposisi nilai Anda.",
    features: [
      "Arsitektur multi-halaman",
      "Integrasi CMS",
      "Sistem blog & berita",
      "Halaman tim & karir",
      "Formulir kontak & inquiry",
    ],
    price: "Mulai Rp 5.000.000",
  },
  {
    icon: <Monitor className="text-primary h-8 w-8" />,
    title: "Dashboard",
    description:
      "Antarmuka dashboard kaya data dengan visualisasi real-time, navigasi intuitif, dan arsitektur skalabel untuk tim yang berkembang.",
    features: [
      "Tampilan data real-time",
      "Grafik interaktif",
      "Manajemen pengguna",
      "Akses berbasis peran",
      "Siap integrasi API",
    ],
    price: "Mulai Rp 8.000.000",
  },
  {
    icon: <Code className="text-primary h-8 w-8" />,
    title: "Antarmuka Produk",
    description:
      "UI produk berpusat pada pengguna dengan mikro-interaksi mulus, sistem desain yang dipikirkan, dan implementasi presisi piksel.",
    features: [
      "Pembuatan design system",
      "Library komponen",
      "Mikro-animasi",
      "Responsif secara default",
      "Aksesibilitas (WCAG)",
    ],
    price: "Mulai Rp 6.000.000",
  },
  {
    icon: <Workflow className="text-primary h-8 w-8" />,
    title: "Sistem Kustom",
    description:
      "Aplikasi web kustom end-to-end dibangun dengan framework modern, dioptimalkan untuk performa, keamanan, dan skala.",
    features: [
      "Pengembangan full-stack",
      "Arsitektur database",
      "Sistem autentikasi",
      "Deployment cloud",
      "Dukungan berkelanjutan",
    ],
    price: "Konsultasi harga",
  },
];

export default function ServicesPage() {
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
              Keahlian Kami
            </span>
            <h1 className="mt-4 mb-4 text-5xl font-bold md:text-6xl">
              Layanan
            </h1>
            <p className="text-muted-foreground text-lg">
              Dari landing page hingga platform kompleks, kami menghadirkan
              pengalaman digital kelas produksi.
            </p>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 md:p-10"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <div className="bg-primary/10 mb-5 flex h-14 w-14 items-center justify-center rounded-xl">
                      {service.icon}
                    </div>
                    <h2 className="mb-3 text-2xl font-bold">{service.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="text-muted-foreground flex items-center gap-2 text-sm"
                        >
                          <Check className="text-primary h-4 w-4 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-between lg:items-end">
                    <div>
                      <p className="text-muted-foreground mb-1 font-mono text-xs">
                        Investasi
                      </p>
                      <p className="text-primary text-xl font-bold">
                        {service.price}
                      </p>
                    </div>
                    <Link href="/contact" className="mt-6 lg:mt-0">
                      <Button className="font-mono text-xs tracking-wider uppercase">
                        Mulai Proyek
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
