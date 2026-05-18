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
import { techPartners } from "@/config";
import { cn } from "@/lib/utils";

const categoryLabels: Record<string, string> = {
  framework: "Framework",
  deployment: "Deployment",
  database: "Database",
  security: "Security",
  development: "Development",
  payment: "Payment",
  analytics: "Analytics",
};

export function TechnologyPartnersSection({
  featured = false,
}: {
  featured?: boolean;
}) {
  const items = featured
    ? techPartners.filter((t) => t.featured)
    : techPartners;

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
            Infrastructure
          </span>
          <h2 className="mt-4 mb-4 text-4xl font-bold md:text-5xl">
            Built on Trusted{" "}
            <span className="gradient-text">Infrastructure</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Rynex builds on top of globally trusted modern technologies to
            deliver scalable, secure, and performant digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((tech, i) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={tech.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="glass border-border hover:border-primary/30 overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-[0_8px_32px_rgba(79,163,209,0.1)]">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                        <div className="relative h-7 w-7">
                          <Image
                            src={tech.logo}
                            alt={tech.name}
                            fill
                            className="object-contain brightness-110"
                          />
                        </div>
                      </div>
                      <ExternalLink className="text-muted-foreground/50 group-hover:text-primary h-4 w-4 transition-colors" />
                    </div>
                    <CardTitle className="group-hover:text-primary mt-3 text-base transition-colors">
                      {tech.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">
                      {tech.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge
                      variant="outline"
                      className={cn(
                        "font-mono text-[10px] tracking-wider",
                        tech.category === "framework" &&
                          "border-blue-500/30 text-blue-400",
                        tech.category === "deployment" &&
                          "border-emerald-500/30 text-emerald-400",
                        tech.category === "database" &&
                          "border-violet-500/30 text-violet-400",
                        tech.category === "security" &&
                          "border-amber-500/30 text-amber-400",
                        tech.category === "development" &&
                          "border-sky-500/30 text-sky-400",
                      )}
                    >
                      {categoryLabels[tech.category] || tech.category}
                    </Badge>
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
