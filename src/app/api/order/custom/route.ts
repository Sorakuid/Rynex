import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, package: pkg, description, budget, timeline } = body;

    if (!name || !email || !pkg) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, package" },
        { status: 400 },
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send notification email
    // 3. Create invoice/order

    console.log("Custom order received:", {
      name,
      email,
      package: pkg,
      description,
      budget,
      timeline,
    });

    return NextResponse.json({
      success: true,
      message: "Custom order received. We'll contact you within 24 hours.",
      orderId: `CUSTOM-${Date.now()}`,
    });
  } catch (error) {
    console.error("Error processing custom order:", error);
    return NextResponse.json(
      { error: "Failed to process custom order" },
      { status: 500 },
    );
  }
}
