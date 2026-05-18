"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Code,
  Layout,
  Monitor,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Layout className="text-primary h-6 w-6" />,
    title: "Landing Page",
    description:
      "Landing page konversi tinggi yang dirancang untuk menangkap prospek dan mendorong pertumbuhan dengan desain premium dan performa cepat.",
    size: "large",
  },
  {
    icon: <Building2 className="text-primary h-6 w-6" />,
    title: "Website Perusahaan",
    description:
      "Website korporat multi-halaman profesional yang membangun otoritas merek dan menampilkan cerita bisnis Anda.",
    size: "medium",
  },
  {
    icon: <Monitor className="text-primary h-6 w-6" />,
    title: "Dashboard",
    description:
      "Antarmuka dashboard kaya data dengan analitik real-time, navigasi intuitif, dan arsitektur skalabel.",
    size: "medium",
  },
  {
    icon: <Code className="text-primary h-6 w-6" />,
    title: "Antarmuka Produk",
    description:
      "UI produk berpusat pada pengguna dengan interaksi mulus, mikro-animasi yang dipikirkan, dan eksekusi presisi piksel.",
    size: "small",
  },
  {
    icon: <Workflow className="text-primary h-6 w-6" />,
    title: "Sistem Kustom",
    description:
      "Aplikasi web kustom end-to-end dibangun dengan framework modern, dioptimalkan untuk performa dan skala.",
    size: "small",
  },
];

const sizeClasses: Record<string, string> = {
  large: "md:col-span-2 md:row-span-1",
  medium: "md:col-span-1 md:row-span-1",
  small: "md:col-span-1 md:row-span-1",
};

const sizePadding: Record<string, string> = {
  large: "p-10 md:p-12",
  medium: "p-8 md:p-10",
  small: "p-6 md:p-8",
};

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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
          {services.map((service, i) => {
            const isLarge = service.size === "large";
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group hover:border-primary/20 relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-500 hover:bg-white/[0.04] hover:shadow-[0_8px_40px_rgba(79,163,209,0.08)] ${sizeClasses[service.size]}`}
              >
                <div
                  className={`relative z-10 flex h-full flex-col ${sizePadding[service.size]}`}
                >
                  <div
                    className={`bg-primary/5 group-hover:bg-primary/10 mb-4 flex items-center justify-center rounded-xl transition-colors ${
                      isLarge ? "h-14 w-14" : "h-11 w-11"
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`group-hover:text-primary mb-3 font-bold tracking-tight transition-colors ${
                      isLarge ? "text-2xl md:text-3xl" : "text-lg"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-muted-foreground leading-relaxed transition-colors ${
                      isLarge ? "max-w-lg text-base" : "text-sm"
                    }`}
                  >
                    {service.description}
                  </p>

                  {isLarge && (
                    <div className="mt-auto pt-6">
                      <span className="text-primary/50 group-hover:text-primary inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase transition-colors">
                        Selengkapnya
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  )}
                </div>

                <div className="from-primary/[0.02] pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
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
