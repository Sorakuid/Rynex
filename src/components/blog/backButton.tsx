"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  title: string;
}

export function BackButton({ title }: BackButtonProps) {
  return (
    <Link
      href="/blog"
      className="group text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 transition-colors"
    >
      <ArrowLeft className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />
      <span className="font-mono text-xs tracking-wider uppercase">Blog</span>
      <span className="text-muted-foreground/30 hidden truncate md:inline">
        <span className="mr-2">/</span>
        <span className="font-mono text-[11px] tracking-normal normal-case">
          {title.length > 60 ? `${title.slice(0, 60)}...` : title}
        </span>
      </span>
    </Link>
  );
}
