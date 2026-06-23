import { Dribbble, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com", icon: Twitter, label: "X / Twitter" },
  { href: "https://dribbble.com", icon: Dribbble, label: "Dribbble" },
];

const footerLinks = {
  Layanan: ["Landing Page", "Website", "Dashboard", "Sistem Kustom"],
  Perusahaan: ["Tentang", "Portofolio", "Blog", "Kontak"],
};

export function Footer() {
  return (
    <footer className="border-border bg-background/80 border-t backdrop-blur-xl">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/Rynex.png"
                alt="RYNEX"
                width={110}
                height={38}
                className="h-5 w-auto object-contain brightness-110 md:h-6"
                priority
              />
            </Link>
            <p className="text-muted-foreground mt-3 max-w-sm text-xs leading-relaxed">
              Premium digital engineering by Soraku Studio. Kami membangun
              pengalaman web skalabel yang mendorong pertumbuhan bisnis Anda.
            </p>

            <div className="mt-4 flex items-center gap-2.5 md:mt-6">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 border-border flex h-8 w-8 items-center justify-center rounded-full border transition-[color,background-color,border-color] duration-300"
                >
                  <Icon className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-foreground mb-2 font-mono text-[11px] font-semibold tracking-wider uppercase">
                {category}
              </h4>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary text-xs transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-border/50 mb-6 border-t pt-6 md:mb-8 md:pt-8">
          <div className="mx-auto flex max-w-md flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <p className="text-xs font-medium">Dapatkan update terbaru</p>
              <p className="text-muted-foreground text-[10px]">
                Tips, promo, dan wawasan langsung ke email Anda.
              </p>
            </div>
            <div className="flex w-full gap-2 sm:w-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className="bg-muted border-border focus:border-primary min-w-0 flex-1 rounded-xl border px-3 py-2 text-xs transition-colors outline-none sm:w-48"
              />
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0 rounded-xl px-4 py-2 text-xs font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-border/50 flex flex-col items-center justify-between gap-2 border-t pt-6 text-center md:flex-row md:pt-8">
          <p className="text-muted-foreground font-mono text-xs">
            &copy; {new Date().getFullYear()} Rynex by Soraku Studio.
          </p>
          <p className="text-muted-foreground font-mono text-xs">
            Diciptakan dengan presisi.
          </p>
        </div>
      </div>
    </footer>
  );
}
