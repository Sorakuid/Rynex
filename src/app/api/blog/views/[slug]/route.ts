import { NextRequest, NextResponse } from "next/server";

import { getView, incrementView } from "@/lib/views";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const views = await getView(slug);
  return NextResponse.json({ slug, views });
}

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const views = await incrementView(slug);
  return NextResponse.json({ slug, views });
}
