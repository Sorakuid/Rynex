"use server";

import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { products } from "@/lib/db/schema";

export interface ProductResult {
  success: boolean;
  data?: any[];
  error?: string;
}

export async function getProducts(): Promise<ProductResult> {
  try {
    const allProducts = await db
      .select()
      .from(products)
      .orderBy(products.createdAt);
    return { success: true, data: allProducts };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { success: false, error: "Failed to fetch products" };
  }
}

export async function getProductBySlug(slug: string): Promise<ProductResult> {
  try {
    const product = await db
      .select()
      .from(products)
      .where(eq(products.slug, slug))
      .limit(1);
    if (!product[0]) {
      return { success: false, error: "Product not found" };
    }
    return { success: true, data: [product[0]] };
  } catch (error) {
    console.error("Error fetching product:", error);
    return { success: false, error: "Failed to fetch product" };
  }
}

export async function createProduct(data: any): Promise<ProductResult> {
  try {
    const newProduct = await db.insert(products).values(data).returning();
    return { success: true, data: newProduct };
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, error: "Failed to create product" };
  }
}

export async function updateProduct(
  id: number,
  data: any,
): Promise<ProductResult> {
  try {
    const updatedProduct = await db
      .update(products)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(products.id, id))
      .returning();
    return { success: true, data: updatedProduct };
  } catch (error) {
    console.error("Error updating product:", error);
    return { success: false, error: "Failed to update product" };
  }
}

export async function deleteProduct(id: number): Promise<ProductResult> {
  try {
    await db.delete(products).where(eq(products.id, id));
    return { success: true };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false, error: "Failed to delete product" };
  }
}
