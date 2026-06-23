import type { ConfirmedEvent, OptimisticEvent } from "@ably-labs/models";

import type { CommentData } from "@/lib/comments";

export interface CommentState {
  comments: CommentData[];
}

export function mergeComments(
  state: CommentState,
  event: OptimisticEvent | ConfirmedEvent,
): CommentState {
  if (event.name === "addComment" && event.data) {
    return { comments: [event.data as CommentData, ...state.comments] };
  }
  if (event.name === "editComment" && event.data) {
    return {
      comments: state.comments.map((c) =>
        c.id === (event.data as CommentData).id
          ? (event.data as CommentData)
          : c,
      ),
    };
  }
  if (event.name === "deleteComment" && event.data) {
    return {
      comments: state.comments.filter(
        (c) => c.id !== (event.data as { id: number }).id,
      ),
    };
  }
  return state;
}
