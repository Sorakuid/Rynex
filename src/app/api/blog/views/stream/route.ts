import { NextRequest } from "next/server";

import { getAllViews } from "@/lib/views";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const stream = new ReadableStream({
    async start(controller) {
      const send = async () => {
        const views = await getAllViews();
        controller.enqueue(`data: ${JSON.stringify({ views })}\n\n`);
      };

      await send();

      const interval = setInterval(send, 5000);

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
