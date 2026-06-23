import { NextRequest, NextResponse } from "next/server";

import { addComment, getCommentsForSync } from "@/lib/comments";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const postSlug = request.nextUrl.searchParams.get("postSlug");
  if (!postSlug) {
    return NextResponse.json({ error: "postSlug required" }, { status: 400 });
  }
  const result = await getCommentsForSync(postSlug);
  return NextResponse.json(result);
}

export async function POST(request: NextRequest) {
  const { postSlug, authorName, content, mutationId } = await request.json();
  if (!postSlug || !authorName || !content) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const comment = await addComment(postSlug, authorName, content, mutationId);
  return NextResponse.json({ comment }, { status: 201 });
}
