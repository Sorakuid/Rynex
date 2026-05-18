"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Layanan: [
    "Pengembangan Web",
    "Desain UI/UX",
    "Desain Produk",
    "Strategi Merek",
    "Solusi Bisnis",
  ],
  Perusahaan: ["Tentang", "Portofolio", "Blog", "Karir", "Kontak"],
  Bantuan: [
    "Pusat Bantuan",
    "Dokumentasi",
    "Status API",
    "Komunitas",
    "Kebijakan Privasi",
  ],
};

export function Footer() {
  return (
    <footer className="border-border/50 bg-card/30 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-foreground text-lg font-bold tracking-[0.2em]">
                SORAKU STUDIO
              </span>
            </Link>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              Studio teknologi kreatif independen. Membangun solusi digital
              premium dengan keahlian modern.
            </p>
            <div className="mt-6 flex gap-4">
              {["Twitter", "GitHub", "Dribbble"].map((s) => (
                <Link
                  key={s}
                  href="#"
                  className="text-muted-foreground hover:text-primary flex items-center gap-1 text-xs transition-colors"
                >
                  {s}
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-foreground mb-4 text-sm font-semibold tracking-wider uppercase">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary text-sm transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-border/50 mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} Soraku Studio. Hak cipta
            dilindungi.
          </p>
          <p className="text-muted-foreground text-xs">
            Inisiatif independen dalam ekosistem Komunitas Soraku.
          </p>
        </div>
      </div>
    </footer>
  );
}
