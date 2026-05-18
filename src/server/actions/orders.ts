"use server";

import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { schema } from "@/lib/db";

export interface OrderResult {
  success: boolean;
  data?: any[];
  error?: string;
}

export async function getOrders(): Promise<OrderResult> {
  try {
    const allOrders = await db
      .select()
      .from(schema.orders)
      .orderBy(schema.orders.createdAt);
    return { success: true, data: allOrders };
  } catch (error) {
    console.error("Error fetching orders:", error);
    return { success: false, error: "Failed to fetch orders" };
  }
}

export async function getOrderById(id: number): Promise<OrderResult> {
  try {
    const order = await db
      .select()
      .from(schema.orders)
      .where(eq(schema.orders.id, id))
      .limit(1);
    if (!order[0]) {
      return { success: false, error: "Order not found" };
    }
    return { success: true, data: [order[0]] };
  } catch (error) {
    console.error("Error fetching order:", error);
    return { success: false, error: "Failed to fetch order" };
  }
}

export async function createOrder(data: any): Promise<OrderResult> {
  try {
    const newOrder = await db.insert(schema.orders).values(data).returning();
    return { success: true, data: newOrder };
  } catch (error) {
    console.error("Error creating order:", error);
    return { success: false, error: "Failed to create order" };
  }
}

export async function updateOrderStatus(
  id: number,
  status: string,
): Promise<OrderResult> {
  try {
    const updatedOrder = await db
      .update(schema.orders)
      .set({ status })
      .where(eq(schema.orders.id, id))
      .returning();
    return { success: true, data: updatedOrder };
  } catch (error) {
    console.error("Error updating order:", error);
    return { success: false, error: "Failed to update order" };
  }
}
