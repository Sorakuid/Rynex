import { NextRequest, NextResponse } from "next/server";

import { getLicenseByKey, validateLicense } from "@/lib/license";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const licenseKey = searchParams.get("key");
    const domain = searchParams.get("domain");

    if (!licenseKey) {
      return NextResponse.json(
        { error: "Missing required query param: key" },
        { status: 400 },
      );
    }

    const validation = await validateLicense(licenseKey, domain || undefined);

    if (!validation.valid) {
      return NextResponse.json({
        valid: false,
        error: validation.error,
        premiumUnlocked: false,
        brandingRemovalAllowed: false,
      });
    }

    const license = await getLicenseByKey(licenseKey);

    return NextResponse.json({
      valid: true,
      premiumUnlocked: validation.premiumUnlocked,
      brandingRemovalAllowed: validation.brandingRemovalAllowed,
      plan: validation.plan,
      status: validation.status,
      currentActivations: validation.currentActivations,
      maxActivations: validation.maxActivations,
      expiresAt: validation.expiresAt,
      domain: validation.domain,
      activations: license?.activations || [],
    });
  } catch (error) {
    console.error("Error getting license status:", error);
    return NextResponse.json(
      { error: "Failed to get license status" },
      { status: 500 },
    );
  }
}
