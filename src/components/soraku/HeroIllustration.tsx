"use client";

import { motion } from "framer-motion";
import { WebDevelopment } from "undraw-react";

export function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      <div className="from-primary/10 absolute inset-0 rounded-3xl bg-gradient-to-tr to-transparent blur-3xl" />
      <div className="animate-float relative">
        <WebDevelopment color="#4FA3D1" size={400} />
      </div>
    </motion.div>
  );
}
