import { NextRequest, NextResponse } from "next/server";

import { getAllViews } from "@/lib/views";

export const dynamic = "force-dynamic";

export async function GET(_request: NextRequest) {
  const views = await getAllViews();
  return NextResponse.json({ views });
}
