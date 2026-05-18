import { NextRequest, NextResponse } from "next/server";

import { activateLicenseForKey } from "@/lib/license";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { licenseKey, domain, ipAddress, deviceHash } = body;

    if (!licenseKey || !domain) {
      return NextResponse.json(
        { error: "Missing required fields: licenseKey, domain" },
        { status: 400 },
      );
    }

    const result = await activateLicenseForKey(
      licenseKey,
      domain,
      ipAddress || request.headers.get("x-forwarded-for") || undefined,
      deviceHash,
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error activating license:", error);
    return NextResponse.json(
      { error: "Failed to activate license" },
      { status: 500 },
    );
  }
}
