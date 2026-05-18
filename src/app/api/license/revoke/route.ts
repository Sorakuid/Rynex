import { NextRequest, NextResponse } from "next/server";

import { updateLicenseStatus } from "@/lib/license";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { licenseKey } = body;

    if (!licenseKey) {
      return NextResponse.json(
        { error: "Missing required field: licenseKey" },
        { status: 400 },
      );
    }

    const result = await updateLicenseStatus(licenseKey, "revoked");

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error revoking license:", error);
    return NextResponse.json(
      { error: "Failed to revoke license" },
      { status: 500 },
    );
  }
}
