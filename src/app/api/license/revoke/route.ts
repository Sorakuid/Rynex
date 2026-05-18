import { NextRequest, NextResponse } from "next/server";

import { revokeLicense } from "@/lib/license";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { licenseId } = body;

    if (!licenseId) {
      return NextResponse.json(
        { error: "Missing required field: licenseId" },
        { status: 400 },
      );
    }

    await revokeLicense(licenseId);

    return NextResponse.json({
      success: true,
      message: "License revoked successfully",
    });
  } catch (error) {
    console.error("Error revoking license:", error);
    return NextResponse.json(
      { error: "Failed to revoke license" },
      { status: 500 },
    );
  }
}
