"use client";

import { motion } from "framer-motion";
import { Building2, Code, Layout, Monitor, Workflow } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Layout className="text-primary h-6 w-6" />,
    title: "Landing Page",
    description:
      "Landing page konversi tinggi yang dirancang untuk menangkap prospek dan mendorong pertumbuhan dengan desain premium dan performa cepat.",
  },
  {
    icon: <Building2 className="text-primary h-6 w-6" />,
    title: "Website Perusahaan",
    description:
      "Website korporat multi-halaman profesional yang membangun otoritas merek dan menampilkan cerita bisnis Anda.",
  },
  {
    icon: <Monitor className="text-primary h-6 w-6" />,
    title: "Dashboard",
    description:
      "Antarmuka dashboard kaya data dengan analitik real-time, navigasi intuitif, dan arsitektur skalabel.",
  },
  {
    icon: <Code className="text-primary h-6 w-6" />,
    title: "Antarmuka Produk",
    description:
      "UI produk berpusat pada pengguna dengan interaksi mulus, mikro-animasi yang dipikirkan, dan eksekusi presisi piksel.",
  },
  {
    icon: <Workflow className="text-primary h-6 w-6" />,
    title: "Sistem Kustom",
    description:
      "Aplikasi web kustom end-to-end dibangun dengan framework modern, dioptimalkan untuk performa dan skala.",
  },
];

export function ServicesSection() {
  return (
    <section className="spacious-section" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Yang Kami Bangun
          </span>
          <h2 className="mt-4 mb-4 text-4xl font-bold md:text-5xl">
            Layanan Digital
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Dari landing page hingga platform kompleks, kami menghadirkan
            pengalaman web kelas produksi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group cursor-default rounded-2xl p-8"
            >
              <div className="bg-primary/10 group-hover:bg-primary/20 mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors">
                {service.icon}
              </div>
              <h3 className="mb-3 text-lg font-semibold">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
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
          <Link href="/services">
            <span className="text-primary hover:text-primary/80 inline-flex items-center gap-2 font-mono text-sm tracking-wider uppercase transition-colors">
              Lihat Semua Layanan
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
