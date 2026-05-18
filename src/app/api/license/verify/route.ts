import { NextRequest, NextResponse } from "next/server";

import { validateLicense } from "@/lib/license";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { licenseKey, domain, productId } = body;

    if (!licenseKey) {
      return NextResponse.json(
        { error: "Missing required field: licenseKey" },
        { status: 400 },
      );
    }

    const result = await validateLicense(licenseKey, domain, productId);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error verifying license:", error);
    return NextResponse.json(
      { error: "Failed to verify license" },
      { status: 500 },
    );
  }
}
