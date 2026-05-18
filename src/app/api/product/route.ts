import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";
import { products } from "@/lib/db/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, slug, description, image, type, version, price } = body;

    if (!name || !slug) {
      return NextResponse.json(
        { error: "Nama dan slug wajib diisi" },
        { status: 400 },
      );
    }

    const existing = await db
      .select()
      .from(products)
      .where(eq(products.slug, slug))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "Slug sudah digunakan" },
        { status: 409 },
      );
    }

    const [product] = await db
      .insert(products)
      .values({
        name,
        slug,
        description: description || null,
        image: image || null,
        type: type || "template",
        version: version || "1.0.0",
        price: price ? Number(price) : 0,
      })
      .returning();

    return NextResponse.json({ success: true, product });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Gagal membuat produk" },
      { status: 500 },
    );
  }
}
