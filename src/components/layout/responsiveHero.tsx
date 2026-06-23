"use client";

import { useEffect, useState } from "react";

import { DesktopHero } from "@/components/ui/desktop/desktopHero";
import { MobileHero } from "@/components/ui/mobile/mobileHero";

export function ResponsiveHero() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {
    return (
      <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="from-background via-background to-background/95 absolute inset-0 bg-gradient-to-b" />
        <div className="container mx-auto px-4" />
      </section>
    );
  }

  return isMobile ? <MobileHero /> : <DesktopHero />;
}
