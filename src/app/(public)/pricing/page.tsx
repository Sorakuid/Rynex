"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Cpu,
  Globe,
  Headphones,
  Layers,
  Smartphone,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { ComparisonTable } from "@/components/shared/comparison";
import { Button } from "@/components/ui/button";
import { comparison } from "@/config";
import pricingData from "@/config/pricing.json";
import { cn } from "@/lib/utils";
import type { PricingPackage } from "@/types/pricing";

const packages = pricingData as PricingPackage[];

const whyItems = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Fast Delivery",
    desc: "Proyek selesai tepat waktu sesuai timeline yang disepakati.",
  },
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Modern Technology",
    desc: "Stack teknologi terbaru: Next.js, TypeScript, Tailwind CSS.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "SEO Friendly",
    desc: "Struktur kode dioptimasi untuk peringkat mesin pencari.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Scalable Architecture",
    desc: "Arsitektur modular yang siap tumbuh bersama bisnis Anda.",
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Mobile First",
    desc: "Semua proyek dibangun dengan pendekatan mobile-first.",
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Long-Term Support",
    desc: "Dukungan teknis berkelanjutan bahkan setelah proyek selesai.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: "Konsultasi",
    subtitle: "Diskusi kebutuhan dan tujuan proyek",
    desc: "Kami memulai dengan sesi konsultasi untuk memahami visi, target bisnis, dan ruang lingkup proyek Anda secara menyeluruh.",
    details: [
      "analisis kebutuhan",
      "diskusi konsep",
      "objective mapping",
      "estimasi awal",
    ],
  },
  {
    number: "02",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
    title: "Requirement",
    subtitle: "Pengumpulan data dan spesifikasi teknis",
    desc: "Semua kebutuhan dikumpulkan dan didokumentasikan menjadi spesifikasi teknis yang jelas.",
    details: ["data gathering", "technical spec", "sitemap", "feature list"],
  },
  {
    number: "03",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Wireframe",
    subtitle: "Kerangka layout dan alur pengguna",
    desc: "Wireframe dan user flow dirancang untuk memvalidasi struktur navigasi dan pengalaman pengguna sebelum masuk ke desain visual.",
    details: [
      "user flow",
      "layout structure",
      "navigation map",
      "content planning",
    ],
  },
  {
    number: "04",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 3h.01" />
        <path d="M12 9h.01" />
        <path d="M12 15h.01" />
        <path d="M12 21h.01" />
      </svg>
    ),
    title: "UI/UX Design",
    subtitle: "Desain antarmuka modern dan fungsional",
    desc: "Antarmuka dirancang dengan pendekatan mobile-first, fokus pada hierarki visual, interaksi intuitif, dan konsistensi brand.",
    details: [
      "interface design",
      "responsive layout",
      "interaction design",
      "design system",
    ],
  },
  {
    number: "05",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Development",
    subtitle: "Pengembangan frontend & backend",
    desc: "Desain diterjemahkan menjadi kode production-ready menggunakan teknologi modern dengan arsitektur yang scalable.",
    details: [
      "frontend engineering",
      "backend integration",
      "API development",
      "database setup",
    ],
  },
  {
    number: "06",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Testing",
    subtitle: "Quality assurance dan bug fixing",
    desc: "Pengujian menyeluruh dilakukan untuk memastikan kualitas, performa, dan kompatibilitas di berbagai perangkat dan browser.",
    details: [
      "unit testing",
      "integration test",
      "cross-browser",
      "performance test",
    ],
  },
  {
    number: "07",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    title: "Deployment",
    subtitle: "Peluncuran ke production server",
    desc: "Proyek diluncurkan ke server production dengan konfigurasi optimal, domain setup, dan aktivasi lisensi.",
    details: ["server setup", "domain config", "SSL certificate", "launch"],
  },
  {
    number: "08",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: "Maintenance",
    subtitle: "Perawatan dan dukungan berkelanjutan",
    desc: "Layanan maintenance opsional untuk update konten, monitoring keamanan, backup rutin, dan dukungan teknis.",
    details: [
      "content updates",
      "security monitoring",
      "backup routine",
      "tech support",
    ],
  },
];

const faqs = [
  {
    q: "Apakah harga sudah termasuk domain?",
    a: "Domain tidak termasuk dalam paket. Namun kami bisa membantu pengurusan domain dengan biaya terpisah sesuai harga registrar.",
  },
  {
    q: "Apakah harga sudah termasuk hosting?",
    a: "Hosting tidak termasuk. Kami akan merekomendasikan hosting yang sesuai dengan kebutuhan dan membantu proses setup.",
  },
  {
    q: "Berapa lama pengerjaan website?",
    a: "Estimasi pengerjaan 7-30 hari kerja tergantung kompleksitas proyek. Landing page lebih cepat, sistem custom lebih lama.",
  },
  {
    q: "Apakah bisa cicilan?",
    a: "Bisa. Kami menyediakan opsi cicilan 2-3 kali pembayaran dengan termin yang disepakati di awal.",
  },
  {
    q: "Apakah tersedia maintenance?",
    a: "Ya. Tersedia paket maintenance bulanan untuk update konten, backup, dan monitoring keamanan.",
  },
  {
    q: "Apakah bisa custom fitur?",
    a: "Tentu. Untuk fitur di luar paket, kami akan melakukan analisis kebutuhan dan memberikan penawaran harga khusus.",
  },
  {
    q: "Apakah mendapat source code?",
    a: "Source code diserahkan penuh setelah proyek selesai dan pelunasan. Tidak ada lock-in vendor.",
  },
  {
    q: "Apakah website bisa dikembangkan lagi?",
    a: "Sangat bisa. Arsitektur kami dirancang modular sehingga pengembangan ke depannya lebih mudah.",
  },
  {
    q: "Bagaimana sistem pembayaran?",
    a: "Pembayaran via transfer bank (BCA/Mandiri/BNI). Pembayaran bertahap 50% di awal, 50% setelah selesai.",
  },
  {
    q: "Apakah ada garansi?",
    a: "Kami memberikan garansi revisi sesuai paket dan garansi bug-free selama 30 hari setelah peluncuran.",
  },
];

const websiteTypes = [
  { id: "landing", label: "Landing Page", price: 3000000, days: 7 },
  { id: "company", label: "Company Profile", price: 5000000, days: 12 },
  { id: "ecommerce", label: "E-Commerce", price: 12000000, days: 21 },
  { id: "dashboard", label: "Dashboard", price: 8000000, days: 18 },
  { id: "custom", label: "Custom System", price: 15000000, days: 30 },
] as const;

const addonFeatures = [
  { id: "auth", label: "Authentication", price: 1500000, days: 2 },
  { id: "cms", label: "CMS", price: 3000000, days: 4 },
  { id: "dashboard", label: "Admin Dashboard", price: 4000000, days: 5 },
  { id: "api", label: "API Integration", price: 2000000, days: 3 },
  { id: "payment", label: "Payment Gateway", price: 3000000, days: 4 },
  { id: "multilang", label: "Multi Language", price: 2000000, days: 3 },
  { id: "ai", label: "AI Features", price: 8000000, days: 7 },
] as const;

function PricingCard({ pkg, index }: { pkg: PricingPackage; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex"
    >
      <div
        className={cn(
          "hover:border-primary/40 flex w-full flex-col rounded-2xl border bg-white/[0.02] p-6 transition-[border-color,transform] duration-300",
          pkg.popular
            ? "border-primary/50 shadow-[0_0_30px_rgba(79,163,209,0.12)] lg:scale-105"
            : "border-white/5 hover:scale-[1.02]",
        )}
      >
        {pkg.badge && (
          <div className="bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 font-mono text-[10px] font-semibold tracking-widest whitespace-nowrap uppercase">
            {pkg.badge}
          </div>
        )}

        <div className={cn("mb-6", pkg.popular && "mt-2")}>
          <h3 className="mb-1 text-lg font-semibold">{pkg.name}</h3>
          <div className="mb-1">
            <span className="text-3xl font-bold md:text-4xl">{pkg.price}</span>
          </div>
          <p className="text-muted-foreground text-xs">{pkg.description}</p>
        </div>

        <ul className="mb-8 flex-1 space-y-3">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <Check
                className={cn(
                  "mt-0.5 h-4 w-4 shrink-0",
                  pkg.popular ? "text-primary" : "text-green-500",
                )}
              />
              <span
                className={cn(
                  "text-sm",
                  pkg.popular ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        <Link href={pkg.href}>
          <Button
            className={cn(
              "w-full font-mono text-xs tracking-wider uppercase",
              pkg.popular ? "soft-shadow" : "",
            )}
            variant={pkg.popular ? "default" : "outline"}
          >
            {pkg.cta}
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

const stepCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

function ProcessTimeline() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:sticky lg:top-32 lg:col-span-2 lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Alur Proyek
            </span>
            <h2 className="mt-4 mb-6 text-3xl leading-[1.05] font-bold md:text-5xl">
              How Rynex
              <br />
              <span className="gradient-text">Builds</span>
            </h2>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Setiap proyek dibangun melalui 8 tahapan terstruktur untuk
              memastikan hasil yang presisi, scalable, dan siap berkembang.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <div className="text-muted-foreground flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase">
                <span className="bg-primary h-2 w-2 rounded-full" />8 Tahapan
              </div>
              <div className="text-muted-foreground flex items-center gap-2 font-mono text-[10px] tracking-wider uppercase">
                <span className="bg-border/40 h-2 w-2 rounded-full" />
                Siap Launch
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative lg:col-span-3">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stepCardVariants}
              className="group relative pb-10 last:pb-0"
            >
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/10 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border bg-white/[0.03] transition-[background-color,border-color] duration-500">
                    <span className="text-primary">{step.icon}</span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="from-primary/20 via-primary/10 mt-2 w-px flex-1 bg-gradient-to-b to-transparent" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="text-muted-foreground/20 group-hover:text-primary/20 font-mono text-4xl leading-none font-black tracking-tighter transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <div className="hover:border-primary/20 relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-[background-color,border-color,box-shadow] duration-500 hover:bg-white/[0.04] sm:p-6">
                    <div className="from-primary/[0.015] pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <h3 className="group-hover:text-primary text-lg font-bold transition-colors sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mt-0.5 text-sm">
                        {step.subtitle}
                      </p>
                      <p className="text-muted-foreground/60 mt-3 text-xs leading-relaxed">
                        {step.desc}
                      </p>
                      <div className="bg-border/20 mt-4 h-px" />
                      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5">
                        {step.details.map((detail) => (
                          <div
                            key={detail}
                            className="text-muted-foreground/60 flex items-center gap-2 font-mono text-[10px]"
                          >
                            <span className="bg-primary/30 h-1 w-1 rounded-full" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Calculator() {
  const [type, setType] = useState<string>("landing");
  const [addons, setAddons] = useState<Set<string>>(new Set());

  const selectedType = websiteTypes.find((t) => t.id === type);

  const estimation = useMemo(() => {
    const base = selectedType?.price ?? 3000000;
    const baseDays = selectedType?.days ?? 7;
    const addonTotal = [...addons].reduce((sum, id) => {
      const feat = addonFeatures.find((f) => f.id === id);
      return sum + (feat?.price ?? 0);
    }, 0);
    const addonDays = [...addons].reduce((sum, id) => {
      const feat = addonFeatures.find((f) => f.id === id);
      return sum + (feat?.days ?? 0);
    }, 0);
    const total = base + addonTotal;
    const days = baseDays + addonDays;
    return { total, days, base, addonTotal };
  }, [selectedType, addons]);

  const toggleAddon = (id: string) => {
    setAddons((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const formatPrice = (amount: number) =>
    `Rp ${amount.toLocaleString("id-ID")}`;

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid gap-8 md:grid-cols-5">
        <div className="space-y-6 md:col-span-3">
          <div>
            <label className="mb-3 block font-mono text-[10px] font-semibold tracking-widest uppercase">
              Tipe Website
            </label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {websiteTypes.map((wt) => (
                <button
                  key={wt.id}
                  onClick={() => setType(wt.id)}
                  className={cn(
                    "rounded-xl border px-3 py-2.5 text-center text-xs font-medium transition-[border-color,background-color] duration-200",
                    type === wt.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground border-white/5 hover:border-white/20",
                  )}
                >
                  {wt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-3 block font-mono text-[10px] font-semibold tracking-widest uppercase">
              Fitur Tambahan
            </label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {addonFeatures.map((af) => (
                <button
                  key={af.id}
                  onClick={() => toggleAddon(af.id)}
                  className={cn(
                    "flex items-center justify-between rounded-xl border px-3 py-2.5 text-xs transition-[border-color,background-color] duration-200",
                    addons.has(af.id)
                      ? "border-primary bg-primary/10"
                      : "border-white/5 hover:border-white/20",
                  )}
                >
                  <span
                    className={
                      addons.has(af.id)
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    }
                  >
                    {af.label}
                  </span>
                  <span className="text-muted-foreground font-mono">
                    +{formatPrice(af.price)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          key={`${estimation.total}-${estimation.days}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="border-primary/20 bg-primary/[0.03] flex flex-col justify-center rounded-2xl border p-6 text-center md:col-span-2"
        >
          <span className="text-muted-foreground mb-1 font-mono text-[10px] tracking-widest uppercase">
            Estimasi Harga
          </span>
          <span className="gradient-text mb-3 text-3xl font-bold md:text-4xl">
            {formatPrice(estimation.total)}
          </span>
          <div className="text-muted-foreground/60 mb-4 space-y-1 text-[10px]">
            <p>
              Base {selectedType?.label}: {formatPrice(estimation.base)}
            </p>
            {estimation.addonTotal > 0 && (
              <p>Fitur tambahan: +{formatPrice(estimation.addonTotal)}</p>
            )}
          </div>
          <div className="text-muted-foreground mb-6 flex items-center justify-center gap-2 text-xs">
            <Clock className="h-3.5 w-3.5" />
            Estimasi pengerjaan {estimation.days} hari
          </div>
          <Link href="/contact">
            <Button className="w-full font-mono text-xs tracking-wider uppercase">
              Konsultasi Gratis
              <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>
          </Link>
          <p className="text-muted-foreground/60 mt-3 text-[10px]">
            *Harga dapat berubah sesuai kebutuhan spesifik
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((faq) => {
          const isOpen = openFaq === faq.q;
          return (
            <div
              key={faq.q}
              className="rounded-xl border border-white/5 bg-white/[0.02]"
            >
              <button
                onClick={() => setOpenFaq(isOpen ? null : faq.q)}
                className="flex w-full items-start justify-between gap-4 p-4 text-left text-sm font-medium"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "mt-0.5 h-4 w-4 shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground border-t border-white/5 px-4 py-3 text-xs leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <div className="relative min-h-screen pt-28">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="bg-primary/10 absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />
          <div className="bg-primary/5 absolute top-3/4 right-1/4 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full blur-[100px]" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.015]">
            <pattern
              id="grid"
              x="0"
              y="0"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Hero */}
        <section className="relative pb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
                Pricing
              </span>
              <h1 className="mt-4 mb-4 text-2xl leading-tight font-bold md:text-4xl md:text-6xl">
                Harga Transparan untuk
                <br />
                <span className="gradient-text">Kebutuhan Digital Anda</span>
              </h1>
              <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-base leading-relaxed md:text-lg">
                Pilih paket website yang sesuai dengan kebutuhan bisnis Anda,
                mulai dari landing page profesional hingga sistem web custom
                berskala besar.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="soft-shadow font-mono text-xs tracking-wider uppercase"
                  >
                    Konsultasi Gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-mono text-xs tracking-wider uppercase"
                  >
                    Lihat Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {packages.map((pkg, i) => (
                <PricingCard key={pkg.slug} pkg={pkg} index={i} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Comparison */}
      <ComparisonTable data={comparison} />

      {/* Why RYNEX */}
      <section className="spacious-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Kenapa <span className="gradient-text">RYNEX</span>?
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-sm">
              Kami menggabungkan teknologi modern dengan standar kualitas tinggi
              untuk setiap proyek.
            </p>
          </motion.div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group hover:border-primary/20 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-[background-color,border-color] duration-300 hover:bg-white/[0.04]"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-colors">
                  <span className="text-primary">{item.icon}</span>
                </div>
                <h3 className="mb-1.5 text-sm font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="spacious-section border-t border-white/5">
        <div className="container mx-auto px-4">
          <ProcessTimeline />
        </div>
      </section>

      {/* Calculator */}
      <section className="spacious-section border-t border-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Estimasi <span className="gradient-text">Proyek</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-sm">
              Hitung perkiraan biaya dan durasi proyek sesuai kebutuhan Anda.
            </p>
          </motion.div>
          <Calculator />
        </div>
      </section>

      {/* FAQ */}
      <section className="spacious-section border-t border-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Pertanyaan <span className="gradient-text">Umum</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-sm">
              Jawaban atas pertanyaan yang sering diajukan tentang layanan kami.
            </p>
          </motion.div>
          <FaqAccordion />
        </div>
      </section>

      {/* Final CTA */}
      <section className="spacious-section">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-primary/20 bg-primary/[0.03] relative mx-auto max-w-2xl overflow-hidden rounded-2xl border p-8 text-center md:p-12"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="bg-primary/10 absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]" />
            </div>
            <div className="relative">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Siap Memulai Proyek Anda?
              </h2>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                Konsultasikan kebutuhan website, aplikasi, atau sistem digital
                Anda bersama tim RYNEX.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="soft-shadow font-mono text-xs tracking-wider uppercase"
                  >
                    Konsultasi Sekarang
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-mono text-xs tracking-wider uppercase"
                  >
                    Lihat Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
