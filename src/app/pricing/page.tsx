import { ArrowRight, Check, Crown, Star, Zap } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Free",
    type: "free" as const,
    price: "Rp 0",
    description: "Untuk proyek pribadi dan pembelajaran",
    features: [
      "1 proyek",
      "Footer branding wajib",
      "Dukungan komunitas",
      "Pembaruan terbatas",
    ],
    cta: "Claim Free",
    popular: false,
  },
  {
    name: "Pro",
    type: "pro" as const,
    price: "Rp 299.000",
    description: "Untuk bisnis dan proyek komersial",
    features: [
      "1 domain komersial",
      "Hapus branding",
      "Pembaruan penuh",
      "Dukungan prioritas",
      "Aktivasi otomatis",
    ],
    cta: "Buy Pro",
    popular: true,
  },
  {
    name: "Agency",
    type: "agency" as const,
    price: "Rp 999.000",
    description: "Untuk agensi dan penggunaan multi-klien",
    features: [
      "Multi-klien",
      "Aktivasi unlimited",
      "White-label siap",
      "Lisensi tim",
      "Dukungan dedikasi",
    ],
    cta: "Buy Agency",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <main className="bg-background min-h-screen">
      <section className="spacious-section section-divider">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">
              Pilihan <span className="gradient-text">Lisensi</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Pilih paket yang tepat untuk kebutuhan Anda. Semua lisensi sudah
              termasuk template premium.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`glass border-border rounded-2xl ${
                  plan.popular ? "border-primary scale-105 shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground py-1 text-center text-sm font-medium">
                    Paling Populer
                  </div>
                )}
                <CardHeader className={plan.popular ? "" : "pt-6"}>
                  <div className="mb-2 flex items-center gap-2">
                    {plan.type === "free" && (
                      <Zap className="text-muted-foreground h-5 w-5" />
                    )}
                    {plan.type === "pro" && (
                      <Star className="text-primary h-5 w-5" />
                    )}
                    {plan.type === "agency" && (
                      <Crown className="text-accent h-5 w-5" />
                    )}
                    <CardTitle>{plan.name}</CardTitle>
                  </div>
                  <div className="gradient-text text-4xl font-bold">
                    {plan.price}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                        <span className="text-muted-foreground text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.type === "free" ? "/verify-license" : "/contact"}
                  >
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Butuh Lisensi Lifetime?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Hubungi kami untuk penawaran khusus
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="spacious-section section-divider bg-card/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Perbandingan <span className="gradient-text">Fitur</span>
            </h2>
          </div>

          <Card className="glass border-border mx-auto max-w-4xl overflow-hidden rounded-2xl">
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-border border-b">
                    <th className="p-4 text-left">Fitur</th>
                    <th className="p-4 text-center">Free</th>
                    <th className="p-4 text-center">Pro</th>
                    <th className="p-4 text-center">Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Jumlah Proyek",
                      free: "1",
                      pro: "1",
                      agency: "Unlimited",
                    },
                    {
                      feature: "Domain Komersial",
                      free: "✗",
                      pro: "✓",
                      agency: "✓",
                    },
                    {
                      feature: "Hapus Branding",
                      free: "✗",
                      pro: "✓",
                      agency: "✓",
                    },
                    {
                      feature: "White Label",
                      free: "✗",
                      pro: "✗",
                      agency: "✓",
                    },
                    {
                      feature: "Dukungan",
                      free: "Komunitas",
                      pro: "Prioritas",
                      agency: "Dedikasi",
                    },
                  ].map((row) => (
                    <tr
                      key={row.feature}
                      className="border-border border-b last:border-0"
                    >
                      <td className="p-4 text-sm">{row.feature}</td>
                      <td className="p-4 text-center text-sm">{row.free}</td>
                      <td className="p-4 text-center text-sm">{row.pro}</td>
                      <td className="p-4 text-center text-sm">{row.agency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="spacious-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Siap Memulai <span className="gradient-text">Proyek</span> Anda?
          </h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/verify-license">
              <Button size="lg" className="soft-shadow">
                Klaim Lisensi Free
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Pesan Proyek Kustom
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
