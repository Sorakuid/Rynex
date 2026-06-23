import { NextRequest } from "next/server";

import { getComments } from "@/lib/comments";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const postSlug = request.nextUrl.searchParams.get("postSlug");
  if (!postSlug) {
    return new Response("postSlug required", { status: 400 });
  }

  const comments = await getComments(postSlug);
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(
        encoder.encode(
          `data: ${JSON.stringify({ type: "init", comments })}\n\n`,
        ),
      );

      const interval = setInterval(async () => {
        const all = await getComments(postSlug);
        controller.enqueue(
          encoder.encode(
            `data: ${JSON.stringify({ type: "sync", comments: all })}\n\n`,
          ),
        );
      }, 15000);

      request.signal.addEventListener("abort", () => {
        clearInterval(interval);
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
