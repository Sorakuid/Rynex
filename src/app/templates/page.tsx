"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Eye, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const categories = ["All", "Landing Page", "Dashboard", "Portfolio", "SaaS"];

const templates = [
  {
    title: "Stellar Launch",
    category: "Landing Page",
    description:
      "High-impact product launch page with immersive hero sections and smooth scroll storytelling.",
    price: "$149",
    popular: true,
  },
  {
    title: "Nexus Admin",
    category: "Dashboard",
    description:
      "Professional admin dashboard with analytics widgets, data tables, and team management.",
    price: "$249",
    popular: false,
  },
  {
    title: "Portfolio Pro",
    category: "Portfolio",
    description:
      "Creative portfolio for designers and agencies with project showcase and case study layouts.",
    price: "$99",
    popular: false,
  },
  {
    title: "SaaS Flow",
    category: "SaaS",
    description:
      "Landing page for SaaS products with feature sections, pricing tables, and conversion optimized CTAs.",
    price: "$179",
    popular: true,
  },
  {
    title: "Apex Dashboard",
    category: "Dashboard",
    description:
      "Enterprise dashboard with real-time data, team collaboration, and advanced filtering.",
    price: "$299",
    popular: false,
  },
  {
    title: "Agency Hub",
    category: "Portfolio",
    description:
      "Full-featured agency website with services showcase, team profiles, and client testimonials.",
    price: "$129",
    popular: false,
  },
];

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <div className="pt-28">
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Ready to Deploy
            </span>
            <h1 className="mt-4 mb-4 text-5xl font-bold md:text-6xl">
              Templates
            </h1>
            <p className="text-muted-foreground text-lg">
              Premium, production-ready templates. Customize and launch in days,
              not months.
            </p>
          </motion.div>

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((template, i) => (
                <motion.div
                  key={template.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass-card group overflow-hidden rounded-2xl"
                >
                  <div className="from-primary/20 to-primary/5 relative flex h-48 items-center justify-center bg-gradient-to-br">
                    <span className="text-primary/30 font-mono text-4xl font-bold">
                      RYNEX
                    </span>
                    {template.popular && (
                      <span className="bg-primary text-primary-foreground absolute top-3 right-3 rounded-full px-3 py-1 font-mono text-xs tracking-wider uppercase">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-primary font-mono text-xs tracking-wider uppercase">
                      {template.category}
                    </span>
                    <h3 className="mt-2 mb-2 text-lg font-semibold">
                      {template.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {template.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-mono text-xl font-bold">
                        {template.price}
                      </span>
                      <div className="flex gap-2">
                        <button className="glass text-muted-foreground hover:text-foreground rounded-lg p-2 transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="glass text-muted-foreground hover:text-primary rounded-lg p-2 transition-colors">
                          <ShoppingCart className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4 text-sm">
              Need a custom solution?
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                className="font-mono text-xs tracking-wider uppercase"
              >
                Request Custom Template
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
