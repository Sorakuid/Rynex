import { NextRequest, NextResponse } from "next/server";

import { validateLicense, verifyLicenseSignature } from "@/lib/license";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { licenseKey, domain, productId, signature, payload } = body;

    if (!licenseKey) {
      return NextResponse.json(
        { error: "Missing required field: licenseKey" },
        { status: 400 },
      );
    }

    if (signature && payload) {
      const isValid = verifyLicenseSignature(payload, signature);
      if (!isValid) {
        return NextResponse.json({
          valid: false,
          premiumUnlocked: false,
          brandingRemovalAllowed: false,
          error: "INVALID_SIGNATURE",
        });
      }
    }

    const result = await validateLicense(licenseKey, domain, productId);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error validating license:", error);
    return NextResponse.json(
      { error: "Failed to validate license" },
      { status: 500 },
    );
  }
}
