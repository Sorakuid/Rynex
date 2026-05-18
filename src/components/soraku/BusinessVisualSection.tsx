"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BusinessVisualSectionProps {
  title: string;
  subtitle: string;
  description: string;
  illustration: ReactNode;
  reversed?: boolean;
  features?: string[];
}

export function BusinessVisualSection({
  title,
  subtitle,
  description,
  illustration,
  reversed = false,
  features,
}: BusinessVisualSectionProps) {
  return (
    <div
      className={`grid grid-cols-1 items-center gap-16 lg:grid-cols-2 ${reversed ? "lg:direction-rtl" : ""}`}
    >
      <motion.div
        initial={{ opacity: 0, x: reversed ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className={reversed ? "lg:order-2" : ""}
      >
        <span className="text-primary text-sm font-semibold tracking-widest uppercase">
          {subtitle}
        </span>
        <h2 className="text-foreground mt-3 mb-6 text-3xl font-bold md:text-4xl">
          {title}
        </h2>
        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
          {description}
        </p>
        {features && (
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="text-foreground flex items-center gap-3"
              >
                <div className="bg-primary h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                {feature}
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reversed ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`flex justify-center ${reversed ? "lg:order-1" : ""}`}
      >
        {illustration}
      </motion.div>
    </div>
  );
}
