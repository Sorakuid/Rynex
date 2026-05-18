import { Code, FileText, ImageIcon, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContentPage() {
  return (
    <main className="bg-background flex-1 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold">Kelola Konten</h1>
            <p className="text-muted-foreground">
              Dokumentasi, blog, dan konten edukasi
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Konten
          </Button>
        </div>

        {/* Content Sections */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="glass border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <FileText className="text-primary mb-2 h-8 w-8" />
              <CardTitle>Dokumentasi</CardTitle>
              <CardDescription>Panduan penggunaan produk</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">12</p>
              <p className="text-muted-foreground text-xs">Artikel</p>
            </CardContent>
          </Card>

          <Card className="glass border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <Code className="text-primary mb-2 h-8 w-8" />
              <CardTitle>API Reference</CardTitle>
              <CardDescription>Dokumentasi API endpoint</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">8</p>
              <p className="text-muted-foreground text-xs">Endpoint</p>
            </CardContent>
          </Card>

          <Card className="glass border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <ImageIcon
                className="text-primary mb-2 h-8 w-8"
                aria-hidden="true"
              />
              <CardTitle>Media</CardTitle>
              <CardDescription>Gambar dan aset</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">45</p>
              <p className="text-muted-foreground text-xs">File</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Content */}
        <Card className="glass border-border">
          <CardHeader>
            <CardTitle>Konten Terbaru</CardTitle>
            <CardDescription>Daftar artikel dan dokumentasi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="border-border hover:bg-accent/50 flex items-center justify-between rounded-lg border p-4 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <FileText className="text-primary h-5 w-5" />
                    <div>
                      <p className="font-medium">
                        Cara Mengaktifkan Lisensi {i}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Dokumentasi • 2{i} Apr 2026
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      Hapus
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
