import { NextRequest, NextResponse } from "next/server";

import { activateLicense } from "@/lib/license";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { key, domain, ipAddress } = body;

    if (!key || !domain) {
      return NextResponse.json(
        { error: "Missing required fields: key, domain" },
        { status: 400 },
      );
    }

    const result = await activateLicense(key, domain, ipAddress);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error activating license:", error);
    return NextResponse.json(
      { error: "Failed to activate license" },
      { status: 500 },
    );
  }
}
