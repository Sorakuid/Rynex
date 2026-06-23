"use client";

import { format } from "date-fns";
import { id } from "date-fns/locale";
import { ExternalLink, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { ConfirmationDialog } from "./confirmDialog";
import { LicenseStatusBadge } from "./statusBadge";

interface License {
  id: number;
  licenseKey: string;
  plan: string;
  customerEmail: string;
  status: string;
  domain: string | null;
  currentActivations: number;
  maxActivations: number;
  createdAt: Date | null;
}

export function LicenseTable({
  licenses,
  onRefresh,
}: {
  licenses: License[];
  onRefresh?: () => void;
}) {
  const [search, setSearch] = useState("");
  const [actionTarget, setActionTarget] = useState<License | null>(null);
  const [actionType, setActionType] = useState<
    "revoke" | "suspend" | "reactivate" | null
  >(null);

  const filtered = licenses.filter(
    (l) =>
      l.licenseKey.toLowerCase().includes(search.toLowerCase()) ||
      l.customerEmail.toLowerCase().includes(search.toLowerCase()),
  );

  const handleAction = async () => {
    if (!actionTarget || !actionType) return;

    const endpoint =
      actionType === "revoke"
        ? "/api/license/revoke"
        : actionType === "suspend"
          ? "/api/license/suspend"
          : "/api/license/reactivate";

    await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ licenseKey: actionTarget.licenseKey }),
    });

    setActionTarget(null);
    setActionType(null);
    onRefresh?.();
  };

  return (
    <>
      <Card className="glass border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Daftar Lisensi</CardTitle>
              <CardDescription>{licenses.length} total lisensi</CardDescription>
            </div>
            <Input
              placeholder="Cari kunci atau email..."
              className="max-w-xs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-border border-b text-left">
                  <th className="text-muted-foreground p-3 font-mono text-xs tracking-wider uppercase">
                    Kunci
                  </th>
                  <th className="text-muted-foreground p-3 font-mono text-xs tracking-wider uppercase">
                    Paket
                  </th>
                  <th className="text-muted-foreground p-3 font-mono text-xs tracking-wider uppercase">
                    Email
                  </th>
                  <th className="text-muted-foreground p-3 font-mono text-xs tracking-wider uppercase">
                    Status
                  </th>
                  <th className="text-muted-foreground p-3 font-mono text-xs tracking-wider uppercase">
                    Aktivasi
                  </th>
                  <th className="text-muted-foreground p-3 font-mono text-xs tracking-wider uppercase">
                    Tanggal
                  </th>
                  <th className="text-muted-foreground p-3 font-mono text-xs tracking-wider uppercase">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((license) => (
                  <tr
                    key={license.id}
                    className="border-border/50 border-b transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="p-3">
                      <Link
                        href={`/dashboard/licenses/${license.licenseKey}`}
                        className="text-primary flex items-center gap-1 font-mono text-sm hover:underline"
                      >
                        {license.licenseKey}
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </td>
                    <td className="p-3">
                      <span className="font-mono text-xs tracking-wider uppercase">
                        {license.plan}
                      </span>
                    </td>
                    <td className="text-muted-foreground p-3 text-sm">
                      {license.customerEmail}
                    </td>
                    <td className="p-3">
                      <LicenseStatusBadge status={license.status} />
                    </td>
                    <td className="p-3">
                      <span className="font-mono text-sm">
                        {license.currentActivations}/{license.maxActivations}
                      </span>
                    </td>
                    <td className="text-muted-foreground p-3 text-sm">
                      {license.createdAt
                        ? format(new Date(license.createdAt), "dd MMM yyyy", {
                            locale: id,
                          })
                        : "-"}
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-1">
                        {license.status === "active" && (
                          <>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs text-amber-400 hover:text-amber-300"
                              onClick={() => {
                                setActionTarget(license);
                                setActionType("suspend");
                              }}
                            >
                              Suspend
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs text-red-400 hover:text-red-300"
                              onClick={() => {
                                setActionTarget(license);
                                setActionType("revoke");
                              }}
                            >
                              Revoke
                            </Button>
                          </>
                        )}
                        {(license.status === "suspended" ||
                          license.status === "inactive") && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-xs text-emerald-400 hover:text-emerald-300"
                            onClick={() => {
                              setActionTarget(license);
                              setActionType("reactivate");
                            }}
                          >
                            Aktifkan
                          </Button>
                        )}
                        <Link
                          href={`/dashboard/licenses/${license.licenseKey}`}
                        >
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="text-muted-foreground p-8 text-center"
                    >
                      Tidak ada lisensi ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <ConfirmationDialog
        open={!!actionTarget && !!actionType}
        onOpenChange={() => {
          setActionTarget(null);
          setActionType(null);
        }}
        title={
          actionType === "revoke"
            ? "Revoke Lisensi"
            : actionType === "suspend"
              ? "Suspend Lisensi"
              : "Aktifkan Lisensi"
        }
        description={
          actionType === "revoke"
            ? `Yakin ingin revoke lisensi ${actionTarget?.licenseKey}? Tindakan ini tidak bisa dibatalkan.`
            : actionType === "suspend"
              ? `Yakin ingin suspend lisensi ${actionTarget?.licenseKey}? Lisensi akan dinonaktifkan sementara.`
              : `Aktifkan kembali lisensi ${actionTarget?.licenseKey}?`
        }
        onConfirm={handleAction}
        confirmLabel={
          actionType === "revoke"
            ? "Revoke"
            : actionType === "suspend"
              ? "Suspend"
              : "Aktifkan"
        }
        variant={actionType === "revoke" ? "destructive" : "default"}
      />
    </>
  );
}
