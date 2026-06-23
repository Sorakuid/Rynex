import { Code } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductsPage() {
  return (
    <main className="bg-background min-h-screen">
      <section className="spacious-section section-divider">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-5xl md:text-6xl">
              Template <span className="gradient-text">Premium</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Pilih template portfolio dan dashboard siap pakai dengan lisensi
              terintegrasi.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="glass border-border hover:border-primary/50 overflow-hidden rounded-2xl transition-colors"
              >
                <div className="bg-muted flex aspect-video items-center justify-center">
                  <Code className="text-muted-foreground h-16 w-16" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Portfolio Template {i}</CardTitle>
                    <Badge variant="secondary">Baru</Badge>
                  </div>
                  <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="gradient-text text-2xl font-bold">
                      Rp 450.000
                    </span>
                    <span className="text-muted-foreground text-sm">
                      Kategori: Portfolio
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" asChild>
                      <Link href="/pricing">Lihat Harga</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/demo">Demo</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
