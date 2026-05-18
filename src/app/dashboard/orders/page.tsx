import { CheckCircle, Clock, DollarSign, ShoppingCart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function OrdersPage() {
  return (
    <main className="bg-background flex-1 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-bold">Kelola Pesanan</h1>
            <p className="text-muted-foreground">
              Daftar semua transaksi dan pesanan
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          <Card className="glass border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Total Pesanan
              </CardTitle>
              <ShoppingCart className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="mt-1 text-xs text-green-500">+15 bulan ini</p>
            </CardContent>
          </Card>

          <Card className="glass border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Pendapatan
              </CardTitle>
              <DollarSign className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="gradient-text text-2xl font-bold">
                Rp 45.000.000
              </div>
              <p className="mt-1 text-xs text-green-500">
                +23% dari bulan lalu
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Selesai
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">76</div>
            </CardContent>
          </Card>

          <Card className="glass border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Pending
              </CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-500">13</div>
            </CardContent>
          </Card>
        </div>

        {/* Orders Table */}
        <Card className="glass border-border">
          <CardHeader>
            <CardTitle>Daftar Pesanan</CardTitle>
            <CardDescription>Semua transaksi masuk</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="border-border hover:bg-accent/50 flex items-center justify-between rounded-lg border p-4 transition-colors"
                >
                  <div>
                    <p className="font-medium">Order #{1000 + i}</p>
                    <p className="text-muted-foreground text-sm">
                      client{i}@example.com
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium">Template Portfolio {i}</p>
                    <p className="text-muted-foreground text-sm">Rp 450.000</p>
                  </div>
                  <div>
                    <Badge variant={i % 2 === 0 ? "default" : "secondary"}>
                      {i % 2 === 0 ? "Selesai" : "Pending"}
                    </Badge>
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
