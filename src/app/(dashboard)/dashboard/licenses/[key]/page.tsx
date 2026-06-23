import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { eq } from "drizzle-orm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { DomainList } from "@/components/license/domains";
import { LicenseStatusBadge } from "@/components/license/statusBadge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { activations, licenses } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

export default async function LicenseDetailPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;

  const license = await db
    .select()
    .from(licenses)
    .where(eq(licenses.licenseKey, key))
    .limit(1);

  if (!license[0]) notFound();

  const l = license[0];

  const activationList = await db
    .select()
    .from(activations)
    .where(eq(activations.licenseId, l.id))
    .orderBy(activations.activatedAt);

  return (
    <main className="bg-background flex-1 p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <Link
            href="/dashboard/licenses"
            className="text-muted-foreground hover:text-foreground mb-4 inline-flex items-center gap-1 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke daftar lisensi
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-primary mb-1 font-mono text-3xl font-bold">
                {l.licenseKey}
              </h1>
              <p className="text-muted-foreground">
                Detail lisensi dan aktivasi
              </p>
            </div>
            <LicenseStatusBadge status={l.status} />
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="glass border-border">
            <CardHeader>
              <CardTitle className="text-sm">Informasi Lisensi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-muted-foreground mb-1 font-mono text-xs tracking-wider uppercase">
                  Paket
                </p>
                <p className="font-semibold tracking-wider uppercase">
                  {l.plan}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 font-mono text-xs tracking-wider uppercase">
                  Pelanggan
                </p>
                <p className="text-sm">{l.customerEmail}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 font-mono text-xs tracking-wider uppercase">
                  Diterbitkan
                </p>
                <p className="text-sm">
                  {l.issuedAt
                    ? format(new Date(l.issuedAt), "dd MMM yyyy", {
                        locale: idLocale,
                      })
                    : "-"}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 font-mono text-xs tracking-wider uppercase">
                  Diaktifkan
                </p>
                <p className="text-sm">
                  {l.activatedAt
                    ? format(new Date(l.activatedAt), "dd MMM yyyy HH:mm", {
                        locale: idLocale,
                      })
                    : "Belum diaktifkan"}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 font-mono text-xs tracking-wider uppercase">
                  Kedaluwarsa
                </p>
                <p className="text-sm">
                  {l.expiresAt
                    ? format(new Date(l.expiresAt), "dd MMM yyyy", {
                        locale: idLocale,
                      })
                    : "Tidak terbatas"}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border">
            <CardHeader>
              <CardTitle className="text-sm">Aktivasi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="gradient-text text-4xl font-bold">
                  {l.currentActivations}
                </span>
                <span className="text-muted-foreground">
                  / {l.maxActivations}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className="bg-primary h-full rounded-full transition-all"
                  style={{
                    width: `${Math.min((l.currentActivations / l.maxActivations) * 100, 100)}%`,
                  }}
                />
              </div>
              <p className="text-muted-foreground text-xs">
                {l.maxActivations - l.currentActivations} aktivasi tersisa
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-border">
            <CardHeader>
              <CardTitle className="text-sm">Domain</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {l.domain ? (
                <div className="space-y-2">
                  {l.domain.split(",").map((d) => (
                    <div
                      key={d}
                      className="text-primary bg-primary/5 flex items-center gap-2 rounded-lg px-3 py-2 font-mono text-sm"
                    >
                      {d}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  Belum ada domain terdaftar
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="glass border-border">
          <CardHeader>
            <CardTitle>Riwayat Aktivasi</CardTitle>
            <CardDescription>
              {activationList.length} domain terdaftar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DomainList activations={activationList} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
