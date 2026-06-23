import { NextRequest, NextResponse } from "next/server";

import { deleteComment, editComment } from "@/lib/comments";

export const dynamic = "force-dynamic";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const { content, mutationId } = await request.json();
  if (!content) {
    return NextResponse.json({ error: "content required" }, { status: 400 });
  }
  const comment = await editComment(Number(id), content, mutationId);
  if (!comment) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ comment });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const { mutationId } = await request.json().catch(() => ({}));
  const postSlug = await deleteComment(Number(id), mutationId);
  if (!postSlug) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ success: true });
}
