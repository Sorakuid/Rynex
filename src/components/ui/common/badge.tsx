"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="border-border mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs tracking-wider uppercase transition-colors hover:bg-black/5 dark:hover:bg-white/5"
    >
      <Sparkles className="text-primary h-3.5 w-3.5" />
      <span className="text-muted-foreground">Premium Digital Engineering</span>
    </motion.div>
  );
}
