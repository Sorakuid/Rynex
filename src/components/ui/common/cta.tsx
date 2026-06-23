"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <Link href="/contact">
        <Button
          size="lg"
          className="soft-shadow w-full px-8 py-5 font-mono text-sm tracking-wider uppercase sm:w-auto"
        >
          Mulai Proyek
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
      <Link href="/portfolio">
        <Button
          size="lg"
          variant="outline"
          className="w-full px-8 py-5 font-mono text-sm tracking-wider uppercase sm:w-auto"
        >
          Lihat Karya
        </Button>
      </Link>
    </motion.div>
  );
}
