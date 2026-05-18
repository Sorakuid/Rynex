import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { Code, PackagePlus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { products } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const allProducts = await db
    .select()
    .from(products)
    .orderBy(products.createdAt);

  return (
    <div className="flex-1 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="gradient-text mb-2 text-3xl font-bold">Produk</h1>
            <p className="text-muted-foreground">
              Daftar template dan produk yang dijual
            </p>
          </div>
          <Link href="/dashboard/products/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Tambah Produk
            </Button>
          </Link>
        </div>

        {allProducts.length === 0 ? (
          <Card className="glass border-border">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                <PackagePlus className="text-muted-foreground/50 h-10 w-10" />
              </div>
              <p className="text-muted-foreground mb-2 text-lg font-medium">
                Belum ada produk
              </p>
              <p className="text-muted-foreground/70 mb-6 text-sm">
                Tambah produk pertama Anda untuk mulai menjual
              </p>
              <Link href="/dashboard/products/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Tambah Produk Pertama
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allProducts.map((product) => (
              <Card
                key={product.id}
                className="group glass border-border hover:border-primary/30 overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-[0_8px_32px_rgba(79,163,209,0.1)]"
              >
                <div className="relative aspect-video overflow-hidden bg-white/[0.03]">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <Code className="text-muted-foreground/30 h-16 w-16" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Badge
                      variant="secondary"
                      className="font-mono text-[10px] backdrop-blur-sm"
                    >
                      {product.type}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-black/20 font-mono text-[10px] backdrop-blur-sm"
                    >
                      v{product.version}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="group-hover:text-primary text-lg transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="font-mono text-xs">
                    {product.slug}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                  {product.description ? (
                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  ) : (
                    <p className="text-muted-foreground/50 mb-4 text-sm italic">
                      Tidak ada deskripsi
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="gradient-text text-2xl font-bold">
                      Rp {product.price.toLocaleString("id-ID")}
                    </span>
                  </div>
                </CardContent>

                <CardFooter className="border-t border-white/5 pt-4">
                  <p className="text-muted-foreground/60 font-mono text-xs">
                    {product.createdAt
                      ? format(new Date(product.createdAt), "dd MMM yyyy", {
                          locale: idLocale,
                        })
                      : "-"}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
