"use client";

import ModelsClient from "@ably-labs/models";
import { Realtime } from "ably";
import { useCallback, useEffect, useState } from "react";

import { type CommentState, mergeComments } from "@/lib/ably/merge";
import type { CommentData } from "@/lib/comments";

let ablyInstance: Realtime | null = null;
let modelsClientInstance: ModelsClient | null = null;

function getAblyClient(): Realtime {
  if (!ablyInstance) {
    ablyInstance = new Realtime({ authUrl: "/api/ably/token" });
  }
  return ablyInstance;
}

function getModelsClient(): ModelsClient {
  if (!modelsClientInstance) {
    modelsClientInstance = new ModelsClient({ ably: getAblyClient() });
  }
  return modelsClientInstance;
}

function channelName(slug: string): string {
  return `comments:${slug}`;
}

async function syncComments(
  slug: string,
): Promise<{ sequenceId: string; data: CommentState }> {
  const res = await fetch(`/api/blog/comments?postSlug=${slug}`);
  const data = await res.json();
  return {
    sequenceId: data.sequenceId as string,
    data: { comments: data.comments as CommentData[] },
  };
}

function dummySync(): Promise<{
  sequenceId: string;
  data: CommentState;
}> {
  return Promise.resolve({
    sequenceId: "0",
    data: { comments: [] },
  });
}

export function useAblyComments(postSlug: string) {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const modelsClient = getModelsClient();
    const model = modelsClient.models.get({
      channelName: channelName(postSlug),
      sync: () => syncComments(postSlug),
      merge: mergeComments,
    });

    const callback = (err: Error | null, state?: CommentState) => {
      if (err) {
        setLoading(false);
        return;
      }
      if (state) {
        setComments(state.comments);
        setLoading(false);
      }
    };

    let cancelled = false;

    model.sync().then(() => {
      if (!cancelled) {
        model.subscribe(callback);
      }
    });

    return () => {
      cancelled = true;
      model.unsubscribe(callback);
    };
  }, [postSlug]);

  const addComment = useCallback(
    async (authorName: string, content: string) => {
      const mid = crypto.randomUUID();
      const modelsClient = getModelsClient();
      const model = modelsClient.models.get({
        channelName: channelName(postSlug),
        sync: dummySync,
        merge: mergeComments,
      });

      const optimisticData: CommentData = {
        id: -Date.now(),
        postSlug,
        authorName,
        content,
        createdAt: new Date().toISOString(),
        updatedAt: null,
      };

      const [confirmation, cancel] = await model.optimistic({
        mutationId: mid,
        name: "addComment",
        data: optimisticData,
      });

      try {
        const res = await fetch("/api/blog/comments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            postSlug,
            authorName,
            content,
            mutationId: mid,
          }),
        });
        if (!res.ok) throw new Error("Failed");
        await confirmation;
      } catch (e) {
        await cancel();
        throw e;
      }
    },
    [postSlug],
  );

  const editComment = useCallback(
    async (id: number, content: string) => {
      const mid = crypto.randomUUID();
      const modelsClient = getModelsClient();
      const model = modelsClient.models.get({
        channelName: channelName(postSlug),
        sync: dummySync,
        merge: mergeComments,
      });

      const [confirmation, cancel] = await model.optimistic({
        mutationId: mid,
        name: "editComment",
        data: { id, content },
      });

      try {
        const res = await fetch(`/api/blog/comments/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content, mutationId: mid }),
        });
        if (!res.ok) throw new Error("Failed");
        await confirmation;
      } catch (e) {
        await cancel();
        throw e;
      }
    },
    [postSlug],
  );

  const deleteComment = useCallback(
    async (id: number) => {
      const mid = crypto.randomUUID();
      const modelsClient = getModelsClient();
      const model = modelsClient.models.get({
        channelName: channelName(postSlug),
        sync: dummySync,
        merge: mergeComments,
      });

      const [confirmation, cancel] = await model.optimistic({
        mutationId: mid,
        name: "deleteComment",
        data: { id },
      });

      try {
        const res = await fetch(`/api/blog/comments/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mutationId: mid }),
        });
        if (!res.ok) throw new Error("Failed");
        await confirmation;
      } catch (e) {
        await cancel();
        throw e;
      }
    },
    [postSlug],
  );

  return { comments, loading, addComment, editComment, deleteComment };
}
