import { NextRequest, NextResponse } from "next/server";

import { verifyLicense } from "@/lib/license";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { key, domain } = body;

    if (!key) {
      return NextResponse.json(
        { error: "Missing required field: key" },
        { status: 400 },
      );
    }

    const result = await verifyLicense(key, domain);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error verifying license:", error);
    return NextResponse.json(
      { error: "Failed to verify license" },
      { status: 500 },
    );
  }
}
