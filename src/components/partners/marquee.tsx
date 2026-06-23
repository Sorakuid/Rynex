import Image from "next/image";
import Link from "next/link";

import { businessPartners } from "@/config";

export function LogoMarquee() {
  return (
    <section className="border-border/40 relative overflow-hidden border-y py-3">
      <div className="mb-3 text-center">
        <span className="text-muted-foreground/50 font-mono text-[9px] tracking-[0.2em] uppercase">
          — Partners —
        </span>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex gap-4 px-4 md:gap-8 md:px-6">
          {[...businessPartners, ...businessPartners].map((item, i) => (
            <Link
              key={`${item.id}-${i}`}
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center opacity-40 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0"
            >
              <div className="relative h-6 w-auto md:h-7">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={80}
                  height={24}
                  className="h-6 w-auto object-contain brightness-110 md:h-7"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
