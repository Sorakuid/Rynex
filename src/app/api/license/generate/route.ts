import { NextRequest, NextResponse } from "next/server";

import { createLicenseEntry } from "@/lib/license";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan, email, productId, domain, expiresInDays } = body;

    if (!plan || !email) {
      return NextResponse.json(
        { error: "Missing required fields: plan, email" },
        { status: 400 },
      );
    }

    const validPlans = ["basic", "pro", "agency", "lifetime"];
    if (!validPlans.includes(plan.toLowerCase())) {
      return NextResponse.json(
        { error: `Invalid plan. Must be one of: ${validPlans.join(", ")}` },
        { status: 400 },
      );
    }

    const license = await createLicenseEntry({
      plan,
      email,
      productId,
      domain,
      expiresInDays,
    });

    return NextResponse.json({
      success: true,
      licenseKey: license.licenseKey,
      signature: license.signature,
      status: license.status,
      plan: license.plan,
      maxActivations: license.maxActivations,
    });
  } catch (error) {
    console.error("Error generating license:", error);
    return NextResponse.json(
      { error: "Failed to generate license" },
      { status: 500 },
    );
  }
}
