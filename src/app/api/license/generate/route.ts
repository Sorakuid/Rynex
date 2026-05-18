import { NextRequest, NextResponse } from "next/server";

import { createLicense, generateLicenseKey } from "@/lib/license";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, email, productId, domain, maxDomains, expiresInDays } = body;

    if (!type || !email) {
      return NextResponse.json(
        { error: "Missing required fields: type, email" },
        { status: 400 },
      );
    }

    const license = await createLicense({
      type,
      email,
      productId,
      domain,
      maxDomains,
      expiresInDays,
    });

    return NextResponse.json({
      success: true,
      license: {
        key: license.key,
        type: license.type,
        email: license.email,
        domain: license.domain,
        maxDomains: license.maxDomains,
        expiresAt: license.expiresAt,
      },
    });
  } catch (error) {
    console.error("Error generating license:", error);
    return NextResponse.json(
      { error: "Failed to generate license" },
      { status: 500 },
    );
  }
}
