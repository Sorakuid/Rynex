"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  Group,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getActiveCollaborations } from "@/config";

const typeIcons: Record<string, React.ElementType> = {
  development: ArrowRight,
  research: FlaskConical,
  community: Group,
  design: Users,
  strategic: Users,
};

const typeColors: Record<string, string> = {
  development: "text-blue-400 bg-blue-500/10",
  research: "text-violet-400 bg-violet-500/10",
  community: "text-emerald-400 bg-emerald-500/10",
  design: "text-amber-400 bg-amber-500/10",
  strategic: "text-rose-400 bg-rose-500/10",
};

export function CollaborationSection() {
  const items = getActiveCollaborations();

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
            Collaborations
          </span>
          <h2 className="mt-4 mb-4 text-2xl font-bold md:text-4xl md:text-5xl">
            Active <span className="gradient-text">Collaborations</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Ongoing projects and partnerships driving the Soraku ecosystem
            forward.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="from-primary/40 via-primary/20 absolute top-0 bottom-0 left-8 w-px bg-gradient-to-b to-transparent" />

          <div className="space-y-8">
            {items.map((item, i) => {
              const Icon = typeIcons[item.type] || ArrowRight;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative pl-12 md:pl-16"
                >
                  <div
                    className={`absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full ${
                      typeColors[item.type] ||
                      "text-muted-foreground bg-white/5"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  <Card className="glass border-border hover:border-primary/30 rounded-2xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <CardTitle className="text-base">
                            {item.project}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            with{" "}
                            <span className="text-primary font-medium">
                              {item.partner}
                            </span>
                          </CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="shrink-0 border-emerald-500/30 font-mono text-[10px] text-emerald-400"
                        >
                          <CheckCircle2 className="mr-1 h-3 w-3" />
                          {item.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/partners"
            className="text-primary hover:text-primary/80 font-mono text-xs tracking-wider uppercase transition-colors"
          >
            Lihat Semua Partners →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
