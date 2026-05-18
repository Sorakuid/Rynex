import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db";
import { licenses } from "@/lib/db/schema";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Missing required query param: email" },
        { status: 400 },
      );
    }

    const customerLicenses = await db
      .select()
      .from(licenses)
      .where(eq(licenses.email, email));

    return NextResponse.json({
      success: true,
      licenses: customerLicenses,
    });
  } catch (error) {
    console.error("Error fetching customer licenses:", error);
    return NextResponse.json(
      { error: "Failed to fetch licenses" },
      { status: 500 },
    );
  }
}
