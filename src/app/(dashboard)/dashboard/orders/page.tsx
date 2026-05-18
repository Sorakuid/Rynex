import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { eq } from "drizzle-orm";
import { CheckCircle, Clock, DollarSign, ShoppingCart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { orders, products } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

const paymentStatusStyles: Record<string, string> = {
  paid: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  pending: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  failed: "bg-red-500/15 text-red-400 border-red-500/25",
  refunded: "bg-rose-500/15 text-rose-400 border-rose-500/25",
};

export default async function OrdersPage() {
  const allOrders = await db.select().from(orders).orderBy(orders.purchasedAt);

  const allProducts = await db.select().from(products);
  const productMap = new Map(allProducts.map((p) => [p.id, p]));

  const totalOrders = allOrders.length;
  const paidOrders = allOrders.filter((o) => o.paymentStatus === "paid").length;
  const pendingOrders = allOrders.filter(
    (o) => o.paymentStatus === "pending",
  ).length;
  const totalRevenue = allOrders
    .filter((o) => o.paymentStatus === "paid")
    .reduce((sum, o) => sum + o.amount, 0);

  const formatPrice = (amount: number) => {
    return `Rp ${amount.toLocaleString("id-ID")}`;
  };

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

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          <Card className="glass border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Total Pesanan
              </CardTitle>
              <ShoppingCart className="text-primary h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalOrders}</div>
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
                {formatPrice(totalRevenue)}
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Selesai
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-500">
                {paidOrders}
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Pending
              </CardTitle>
              <Clock className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-500">
                {pendingOrders}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="glass border-border">
          <CardHeader>
            <CardTitle>Daftar Pesanan</CardTitle>
            <CardDescription>Semua transaksi masuk</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-border border-b text-left">
                    <th className="text-muted-foreground p-3 font-mono text-xs tracking-wider uppercase">
                      ID
                    </th>
                    <th className="text-muted-foreground p-3 font-mono text-xs tracking-wider uppercase">
                      Pelanggan
                    </th>
                    <th className="text-muted-foreground p-3 font-mono text-xs tracking-wider uppercase">
                      Produk
                    </th>
                    <th className="text-muted-foreground p-3 font-mono text-xs tracking-wider uppercase">
                      Jumlah
                    </th>
                    <th className="text-muted-foreground p-3 font-mono text-xs tracking-wider uppercase">
                      Status
                    </th>
                    <th className="text-muted-foreground p-3 font-mono text-xs tracking-wider uppercase">
                      Tanggal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allOrders.map((order) => {
                    const product = order.productId
                      ? productMap.get(order.productId)
                      : null;

                    return (
                      <tr
                        key={order.id}
                        className="border-border/50 border-b transition-colors hover:bg-white/[0.02]"
                      >
                        <td className="p-3 font-mono text-sm">#{order.id}</td>
                        <td className="text-muted-foreground p-3 text-sm">
                          {order.customerEmail}
                        </td>
                        <td className="p-3 text-sm">{product?.name || "-"}</td>
                        <td className="p-3 font-mono text-sm">
                          {formatPrice(order.amount)}
                        </td>
                        <td className="p-3">
                          <span
                            className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[11px] tracking-wider uppercase ${
                              paymentStatusStyles[order.paymentStatus] ||
                              "bg-zinc-500/15 text-zinc-400"
                            }`}
                          >
                            {order.paymentStatus}
                          </span>
                        </td>
                        <td className="text-muted-foreground p-3 text-sm">
                          {order.purchasedAt
                            ? format(
                                new Date(order.purchasedAt),
                                "dd MMM yyyy",
                                {
                                  locale: idLocale,
                                },
                              )
                            : "-"}
                        </td>
                      </tr>
                    );
                  })}
                  {allOrders.length === 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className="text-muted-foreground p-8 text-center"
                      >
                        Belum ada pesanan
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
