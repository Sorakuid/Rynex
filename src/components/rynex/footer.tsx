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
  Layanan: [
    "Landing Page",
    "Website Perusahaan",
    "Dashboard",
    "Antarmuka Produk",
    "Sistem Kustom",
  ],
  Perusahaan: ["Tentang", "Portofolio", "Template", "Blog", "Kontak"],
  Sumber: ["FAQ", "Harga", "Alur Kerja", "Testimoni", "Privasi"],
};

export function Footer() {
  return (
    <footer className="border-border/10 border-t bg-[#1C1E22]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/Rynex.png"
                alt="RYNEX"
                width={160}
                height={55}
                className="h-8 w-auto object-contain brightness-110"
                priority
              />
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
              Premium digital engineering by Soraku Studio. Kami membangun
              pengalaman web skalabel yang mendorong pertumbuhan bisnis Anda.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-foreground mb-4 font-mono text-xs font-semibold tracking-wider uppercase">
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

        <div className="border-border/10 mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground font-mono text-xs">
            &copy; {new Date().getFullYear()} Rynex by Soraku Studio. Hak cipta
            dilindungi.
          </p>
          <p className="text-muted-foreground font-mono text-xs">
            Diciptakan dengan presisi.
          </p>
        </div>
      </div>
    </footer>
  );
}
