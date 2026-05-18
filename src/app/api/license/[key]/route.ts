import { NextRequest, NextResponse } from "next/server";

import { getLicenseByKey } from "@/lib/license";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ key: string }> },
) {
  try {
    const { key } = await params;

    const license = await getLicenseByKey(key);

    if (!license) {
      return NextResponse.json({ error: "License not found" }, { status: 404 });
    }

    return NextResponse.json({
      licenseKey: license.licenseKey,
      plan: license.plan,
      status: license.status,
      customerEmail: license.customerEmail,
      domain: license.domain,
      maxActivations: license.maxActivations,
      currentActivations: license.currentActivations,
      issuedAt: license.issuedAt,
      activatedAt: license.activatedAt,
      expiresAt: license.expiresAt,
      activations: license.activations,
    });
  } catch (error) {
    console.error("Error looking up license:", error);
    return NextResponse.json(
      { error: "Failed to lookup license" },
      { status: 500 },
    );
  }
}
