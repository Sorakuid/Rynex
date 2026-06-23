"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: 750000,
    originalPrice: 1070000,
    description: "Cocok untuk UMKM, personal brand, atau portfolio.",
    popular: false,
    features: [
      "5 Halaman",
      "Custom UI/UX",
      "Desain Responsif",
      "SEO Dasar",
      "Form Kontak & WhatsApp",
      "Domain .com (1 Tahun)",
      "1x Konsultasi",
    ],
  },
  {
    name: "Business",
    price: 1500000,
    originalPrice: 2140000,
    description: "Ideal untuk UKM yang ingin berkembang pesat secara online.",
    popular: true,
    features: [
      "10 Halaman",
      "Custom UI/UX",
      "Blog CMS",
      "SEO Optimization",
      "Google Analytics",
      "Domain .com (1 Tahun)",
      "Hosting 1 Tahun",
      "3x Konsultasi",
    ],
  },
  {
    name: "Enterprise",
    price: 2500000,
    originalPrice: 3570000,
    description: "Solusi lengkap untuk perusahaan dengan kebutuhan kompleks.",
    popular: false,
    features: [
      "Unlimited Halaman",
      "Custom UI/UX",
      "Dashboard Admin",
      "Unlimited Konsultasi",
      "Database & API",
      "Maintenance 1 Bulan",
    ],
  },
];

const formatPrice = (amount: number) => `Rp ${amount.toLocaleString("id-ID")}`;

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof plans)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex"
    >
      <div
        className={cn(
          "hover:border-primary/40 bg-card flex w-full flex-col overflow-hidden rounded-2xl border p-5 transition-[border-color,transform] duration-300 md:p-6",
          plan.popular
            ? "border-primary/50 shadow-[0_0_30px_rgba(79,163,209,0.12)] lg:scale-105"
            : "border-border hover:scale-[1.02]",
        )}
      >
        {plan.popular && (
          <div className="bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 font-mono text-[10px] font-semibold tracking-widest whitespace-nowrap uppercase">
            Paling Populer
          </div>
        )}

        <div className={cn("mb-4", plan.popular && "mt-2")}>
          <h3 className="mb-1 text-lg font-semibold">{plan.name}</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold md:text-3xl">
              {formatPrice(plan.price)}
            </span>
          </div>
          <div className="text-muted-foreground/50 flex items-center gap-2 text-xs">
            <span className="line-through">
              {formatPrice(plan.originalPrice)}
            </span>
            <span className="font-mono text-green-500">-30%</span>
          </div>
          <p className="text-muted-foreground mt-1 text-xs">
            {plan.description}
          </p>
        </div>

        {/* Mobile: collapsible features */}
        <div className="md:hidden">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-muted-foreground hover:text-foreground mb-3 flex w-full items-center justify-between font-mono text-xs tracking-wider uppercase transition-colors"
          >
            <span>{expanded ? "Sembunyikan" : "Lihat"} Fitur</span>
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-300",
                expanded && "rotate-180",
              )}
            />
          </button>
          <AnimatePresence>
            {expanded && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-2 overflow-hidden"
              >
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-muted-foreground flex items-start gap-2 text-sm"
                  >
                    <Check
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        plan.popular ? "text-primary" : "text-green-500",
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop: always show features */}
        <ul className="mb-6 hidden flex-1 space-y-3 md:block">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="text-muted-foreground flex items-start gap-2 text-sm"
            >
              <Check
                className={cn(
                  "mt-0.5 h-4 w-4 shrink-0",
                  plan.popular ? "text-primary" : "text-green-500",
                )}
              />
              {feature}
            </li>
          ))}
        </ul>

        <Link href="/contact">
          <Button
            className={cn(
              "w-full font-mono text-xs tracking-wider uppercase",
              plan.popular ? "soft-shadow" : "",
            )}
            variant={plan.popular ? "default" : "outline"}
          >
            Pilih Paket
            <ArrowRight className="ml-2 h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export function PricingTeaserSection() {
  return (
    <section className="spacious-section" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:mb-16"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Harga
          </span>
          <h2 className="mt-4 mb-4 text-2xl font-bold md:text-4xl md:text-5xl">
            Paket & Harga
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Harga transparan tanpa biaya tersembunyi. Setiap paket dapat
            disesuaikan dengan kebutuhan Anda.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-sm grid-cols-1 gap-4 md:max-w-5xl md:grid-cols-3 md:gap-6">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
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
