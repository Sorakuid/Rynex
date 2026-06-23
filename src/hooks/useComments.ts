"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { CommentData } from "@/lib/comments";

const MUTATION_TIMEOUT = 10000;

interface OptimisticComment extends CommentData {
  _pending?: boolean;
  _error?: boolean;
}

export function useComments(postSlug: string) {
  const [comments, setComments] = useState<OptimisticComment[]>([]);
  const [loading, setLoading] = useState(true);
  const pending = useRef<
    Map<
      string,
      {
        type: string;
        resolve: () => void;
        timer: ReturnType<typeof setTimeout>;
      }
    >
  >(new Map());
  const sourceRef = useRef<EventSource | null>(null);

  useEffect(() => {
    const source = new EventSource(
      `/api/blog/comments/stream?postSlug=${postSlug}`,
    );

    source.onmessage = (event) => {
      try {
        const {
          type,
          comments: initComments,
          data: eventData,
        } = JSON.parse(event.data);

        if (type === "init") {
          setComments(initComments ?? []);
          setLoading(false);
        }

        if (type === "sync") {
          setComments((prev) => {
            const map = new Map(
              prev.filter((c) => c._pending).map((c) => [c.id, c]),
            );
            const merged = initComments.map(
              (c: CommentData) => map.get(c.id) ?? c,
            );
            return merged;
          });
        }

        if (type === "addComment" && eventData) {
          const pendingEntry = pending.current.get(`add-${eventData.id}`);
          if (pendingEntry) {
            clearTimeout(pendingEntry.timer);
            pendingEntry.resolve();
            pending.current.delete(`add-${eventData.id}`);
          }
          setComments((prev) => {
            const filtered = prev.filter(
              (c) => !(c._pending && c.content === eventData.content),
            );
            return [eventData, ...filtered];
          });
        }

        if (type === "editComment" && eventData) {
          pending.current.forEach((val, key) => {
            if (key.startsWith(`edit-`)) {
              clearTimeout(val.timer);
              val.resolve();
              pending.current.delete(key);
            }
          });
          setComments((prev) =>
            prev.map((c) =>
              c.id === eventData.id
                ? { ...c, ...eventData, _pending: false, _error: false }
                : c,
            ),
          );
        }

        if (type === "deleteComment" && eventData) {
          pending.current.forEach((val, key) => {
            if (key.startsWith(`del-`)) {
              clearTimeout(val.timer);
              val.resolve();
              pending.current.delete(key);
            }
          });
          setComments((prev) => prev.filter((c) => c.id !== eventData.id));
        }
      } catch {}
    };

    source.onerror = () => {
      setLoading(false);
    };

    sourceRef.current = source;

    return () => {
      source.close();
      pending.current.forEach(({ timer }) => clearTimeout(timer));
      pending.current.clear();
    };
  }, [postSlug]);

  const addComment = useCallback(
    async (authorName: string, content: string) => {
      const tempId = -Date.now();
      const optimistic: OptimisticComment = {
        id: tempId,
        postSlug,
        authorName,
        content,
        createdAt: new Date().toISOString(),
        updatedAt: null,
        _pending: true,
      };

      setComments((prev) => [optimistic, ...prev]);

      return new Promise<void>((resolve, reject) => {
        const timer = setTimeout(() => {
          pending.current.delete(`add-${tempId}`);
          setComments((prev) =>
            prev.map((c) =>
              c.id === tempId ? { ...c, _pending: false, _error: true } : c,
            ),
          );
          reject(new Error("Timeout"));
        }, MUTATION_TIMEOUT);

        pending.current.set(`add-${tempId}`, { type: "add", resolve, timer });

        fetch("/api/blog/comments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ postSlug, authorName, content }),
        }).catch(() => {
          clearTimeout(timer);
          pending.current.delete(`add-${tempId}`);
          setComments((prev) =>
            prev.map((c) =>
              c.id === tempId ? { ...c, _pending: false, _error: true } : c,
            ),
          );
          reject(new Error("Network error"));
        });
      });
    },
    [postSlug],
  );

  const editComment = useCallback(
    async (id: number, content: string) => {
      const prev = comments.find((c) => c.id === id);
      if (!prev) return;

      setComments((prev) =>
        prev.map((c) =>
          c.id === id ? { ...c, content, _pending: true, _error: false } : c,
        ),
      );

      return new Promise<void>((resolve, reject) => {
        const timer = setTimeout(() => {
          pending.current.delete(`edit-${id}`);
          setComments((prev) =>
            prev.map((c) =>
              c.id === id ? { ...c, _pending: false, _error: true } : c,
            ),
          );
          reject(new Error("Timeout"));
        }, MUTATION_TIMEOUT);

        pending.current.set(`edit-${id}`, { type: "edit", resolve, timer });

        fetch(`/api/blog/comments/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content }),
        }).catch(() => {
          clearTimeout(timer);
          pending.current.delete(`edit-${id}`);
          reject(new Error("Network error"));
        });
      });
    },
    [comments],
  );

  const deleteComment = useCallback(async (id: number) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, _pending: true } : c)),
    );

    return new Promise<void>((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.current.delete(`del-${id}`);
        reject(new Error("Timeout"));
      }, MUTATION_TIMEOUT);

      pending.current.set(`del-${id}`, { type: "del", resolve, timer });

      fetch(`/api/blog/comments/${id}`, { method: "DELETE" }).catch(() => {
        clearTimeout(timer);
        pending.current.delete(`del-${id}`);
        reject(new Error("Network error"));
      });
    });
  }, []);

  return { comments, loading, addComment, editComment, deleteComment };
}
