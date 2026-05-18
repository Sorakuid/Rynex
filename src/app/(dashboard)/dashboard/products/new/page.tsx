"use client";

import { ArrowLeft, Loader2, Save } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function NewProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    image: "",
    type: "template",
    version: "1.0.0",
    price: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.slug) {
      toast.error("Nama dan slug wajib diisi");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          price: form.price ? Number(form.price) : 0,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Gagal membuat produk");
        return;
      }

      toast.success(`Produk ${data.product.name} berhasil dibuat`);
      router.push("/dashboard/products");
    } catch {
      toast.error("Gagal terhubung ke server");
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const handleNameChange = (name: string) => {
    setForm((prev) => ({
      ...prev,
      name,
      slug:
        prev.slug === generateSlug(prev.name) ? generateSlug(name) : prev.slug,
    }));
  };

  return (
    <div className="flex-1 p-6 lg:p-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <Link
            href="/dashboard/products"
            className="text-muted-foreground hover:text-foreground mb-4 flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke produk
          </Link>
          <h1 className="gradient-text mb-2 text-3xl font-bold">
            Tambah Produk Baru
          </h1>
          <p className="text-muted-foreground">
            Buat template atau produk digital baru
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="glass border-border">
            <CardHeader>
              <CardTitle>Informasi Produk</CardTitle>
              <CardDescription>
                Isi detail produk yang akan dijual
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Produk</Label>
                <Input
                  id="name"
                  placeholder="Portfolio Template"
                  value={form.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  placeholder="portfolio-template"
                  value={form.slug}
                  onChange={(e) =>
                    setForm({ ...form, slug: generateSlug(e.target.value) })
                  }
                />
                <p className="text-muted-foreground text-xs">
                  URL unik untuk produk ini
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Deskripsi</Label>
                <Textarea
                  id="description"
                  placeholder="Deskripsikan produk Anda..."
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">URL Gambar (Opsional)</Label>
                <Input
                  id="image"
                  placeholder="https://example.com/image.png"
                  value={form.image}
                  onChange={(e) => setForm({ ...form, image: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Tipe</Label>
                  <Select
                    id="type"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    <option value="template">Template</option>
                    <option value="plugin">Plugin</option>
                    <option value="theme">Theme</option>
                    <option value="service">Service</option>
                    <option value="other">Lainnya</option>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="version">Versi</Label>
                  <Input
                    id="version"
                    placeholder="1.0.0"
                    value={form.version}
                    onChange={(e) =>
                      setForm({ ...form, version: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Harga (IDR)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="450000"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
                <p className="text-muted-foreground text-xs">
                  Harga dalam Rupiah tanpa titik atau koma
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex justify-end gap-3">
            <Link href="/dashboard/products">
              <Button type="button" variant="outline">
                Batal
              </Button>
            </Link>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              Simpan Produk
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
