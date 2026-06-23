"use client";

import { Key, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LicenseGenerateDialog({
  open,
  onOpenChange,
  onSuccess,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    plan: "",
    email: "",
    productId: "",
    domain: "",
    expiresInDays: "",
  });

  const handleGenerate = async () => {
    if (!form.plan || !form.email) {
      toast.error("Paket dan email wajib diisi");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/license/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: form.plan,
          email: form.email,
          productId: form.productId ? Number(form.productId) : undefined,
          domain: form.domain || undefined,
          expiresInDays: form.expiresInDays
            ? Number(form.expiresInDays)
            : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Gagal generate lisensi");
        return;
      }

      toast.success(`Lisensi ${data.licenseKey} berhasil dibuat`);
      setForm({
        plan: "",
        email: "",
        productId: "",
        domain: "",
        expiresInDays: "",
      });
      onSuccess?.();
      onOpenChange(false);
    } catch {
      toast.error("Gagal terhubung ke server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Generate Lisensi Baru</DialogTitle>
          <DialogDescription>
            Buat kunci lisensi untuk klien atau pelanggan
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="plan">Paket Lisensi</Label>
            <select
              id="plan"
              value={form.plan}
              onChange={(e) => setForm({ ...form, plan: e.target.value })}
              className="border-input bg-background ring-offset-background focus-visible:ring-ring flex h-10 w-full rounded-2xl border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <option value="">Pilih paket...</option>
              <option value="basic">Basic (1 domain)</option>
              <option value="pro">Pro (3 domain)</option>
              <option value="agency">Agency (10 domain)</option>
              <option value="lifetime">Lifetime (unlimited)</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Pelanggan</Label>
            <Input
              id="email"
              type="email"
              placeholder="user@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="productId">ID Produk (Opsional)</Label>
            <Input
              id="productId"
              type="number"
              placeholder="1"
              value={form.productId}
              onChange={(e) => setForm({ ...form, productId: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="domain">Domain (Opsional)</Label>
            <Input
              id="domain"
              placeholder="example.com"
              value={form.domain}
              onChange={(e) => setForm({ ...form, domain: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="expiresInDays">Masa Berlaku (Hari, Opsional)</Label>
            <Input
              id="expiresInDays"
              type="number"
              placeholder="365"
              value={form.expiresInDays}
              onChange={(e) =>
                setForm({ ...form, expiresInDays: e.target.value })
              }
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Batal
          </Button>
          <Button onClick={handleGenerate} disabled={loading}>
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Key className="mr-2 h-4 w-4" />
            )}
            Generate Lisensi
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
