import { NextRequest, NextResponse } from "next/server";

import { deactivateDomain } from "@/lib/license";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { licenseKey, domain } = body;

    if (!licenseKey || !domain) {
      return NextResponse.json(
        { error: "Missing required fields: licenseKey, domain" },
        { status: 400 },
      );
    }

    const result = await deactivateDomain(licenseKey, domain);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error deactivating license:", error);
    return NextResponse.json(
      { error: "Failed to deactivate license" },
      { status: 500 },
    );
  }
}
