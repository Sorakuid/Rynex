"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ecosystem } from "@/config";

const typeLabels: Record<string, string> = {
  platform: "Platform",
  studio: "Studio",
  product: "Product",
  community: "Community",
  tool: "Tool",
};

export function EcosystemSection({ featured = false }: { featured?: boolean }) {
  const items = featured ? ecosystem.filter((e) => e.featured) : ecosystem;

  return (
    <section className="spacious-section relative">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            Ecosystem
          </span>
          <h2 className="mt-4 mb-4 text-4xl font-bold md:text-5xl">
            Soraku <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Connected products and services within the Soraku universe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={item.website}
                target={item.website.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.website.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group block h-full"
              >
                <Card className="glass border-border hover:border-primary/30 flex h-full flex-col rounded-2xl transition-all duration-300 hover:shadow-[0_8px_32px_rgba(79,163,209,0.1)]">
                  <CardHeader>
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                      <div className="relative h-8 w-8">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          fill
                          className="object-contain brightness-110"
                        />
                      </div>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="group-hover:text-primary text-lg transition-colors">
                        {item.name}
                      </CardTitle>
                      <ExternalLink className="text-muted-foreground/50 group-hover:text-primary mt-1 h-4 w-4 shrink-0 transition-colors" />
                    </div>
                    <Badge
                      variant="outline"
                      className="font-mono text-[10px] tracking-wider"
                    >
                      {typeLabels[item.type] || item.type}
                    </Badge>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-sm leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
