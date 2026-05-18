import Image from "next/image";
import Link from "next/link";

import { techPartners } from "@/config";

export function LogoMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 py-8">
      <div className="mb-4 text-center">
        <span className="text-muted-foreground/50 font-mono text-[10px] tracking-[0.2em] uppercase">
          — Powered by —
        </span>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex gap-16 px-8">
          {[...techPartners, ...techPartners].map((tech, i) => (
            <Link
              key={`${tech.id}-${i}`}
              href={tech.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <div className="relative h-6 w-6">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  fill
                  className="object-contain brightness-110"
                />
              </div>
              <span className="text-muted-foreground text-sm font-medium whitespace-nowrap">
                {tech.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
