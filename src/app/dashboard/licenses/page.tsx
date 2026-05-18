"use client";

import { Download, Key, Plus, RefreshCw, Trash2 } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
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

export default function LicensesPage() {
  const [showGenerate, setShowGenerate] = useState(false);

  return (
    <main className="bg-background flex-1 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold">Kelola Lisensi</h1>
            <p className="text-muted-foreground">
              Generate dan kelola kunci lisensi
            </p>
          </div>
          <Button onClick={() => setShowGenerate(!showGenerate)}>
            <Plus className="mr-2 h-4 w-4" />
            Generate Baru
          </Button>
        </div>

        {/* Generate Form */}
        {showGenerate && (
          <Card className="glass border-border mb-8">
            <CardHeader>
              <CardTitle>Generate Lisensi Baru</CardTitle>
              <CardDescription>Buat kunci lisensi untuk klien</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="type">Tipe Lisensi</Label>
                  <Input
                    id="type"
                    placeholder="Free / Pro / Agency / Lifetime"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product">Produk</Label>
                  <Input id="product" placeholder="Pilih produk" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Klien</label>
                  <Input placeholder="user@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-optional">Produk (Opsional)</Label>
                  <Input
                    id="product-optional"
                    placeholder="Portfolio Anime / Dashboard SaaS"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Button>
                  <Key className="mr-2 h-4 w-4" />
                  Generate Lisensi
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowGenerate(false)}
                >
                  Batal
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Licenses Table */}
        <Card className="glass border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Daftar Lisensi</CardTitle>
                <CardDescription>
                  Semua kunci lisensi yang di-generate
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr className="border-border border-b">
                  <th className="p-3 text-left">Kunci</th>
                  <th className="p-3 text-left">Tipe</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    key: "SRK-PRO-ABCD-2026",
                    type: "Pro",
                    email: "john@example.com",
                    status: "active",
                  },
                  {
                    key: "SRK-FREE-1234-2026",
                    type: "Free",
                    email: "budi@example.com",
                    status: "active",
                  },
                  {
                    key: "SRK-AGENCY-5678-2026",
                    type: "Agency",
                    email: "agency@example.com",
                    status: "pending",
                  },
                ].map((license) => (
                  <tr key={license.key} className="border-border border-b">
                    <td className="p-3 font-mono text-sm">{license.key}</td>
                    <td className="p-3">
                      <Badge variant="outline">{license.type}</Badge>
                    </td>
                    <td className="p-3 text-sm">{license.email}</td>
                    <td className="p-3">
                      <Badge
                        className={
                          license.status === "active"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-yellow-500/20 text-yellow-500"
                        }
                      >
                        {license.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Revoke
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
