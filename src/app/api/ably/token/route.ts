import { NextResponse } from "next/server";

import { createAblyTokenRequest } from "@/lib/ably/client";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const tokenRequest = await createAblyTokenRequest();
    return NextResponse.json(tokenRequest);
  } catch {
    return NextResponse.json(
      { error: "Failed to create token" },
      { status: 500 },
    );
  }
}
