"use client";

import { motion } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { useState } from "react";

import { useAblyComments } from "@/hooks/useAblyComments";

import { CommentForm } from "./commentForm";
import { CommentItem } from "./commentItem";

interface CommentSectionProps {
  postSlug: string;
  action?: React.ReactNode;
}

export function CommentSection({ postSlug, action }: CommentSectionProps) {
  const { comments, loading, addComment, editComment, deleteComment } =
    useAblyComments(postSlug);
  const [open, setOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MessageSquare className="text-primary h-5 w-5 shrink-0" />
          <h2 className="text-lg font-bold md:text-xl">Komentar</h2>
          <span className="text-muted-foreground/50 font-mono text-xs">
            ({comments.length})
          </span>
        </div>
        {action}
      </div>

      {open ? (
        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-muted-foreground/60 font-mono text-[11px] font-semibold tracking-wider uppercase">
              Saha?
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground/40 hover:text-muted-foreground/70 rounded-lg p-1 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <CommentForm
            onSubmit={async (authorName, content) => {
              await addComment(authorName, content);
            }}
          />
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="group border-border/40 bg-card hover:border-primary/20 hover:bg-card/80 mb-8 flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition-colors"
        >
          <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full font-mono text-sm font-bold uppercase">
            ?
          </div>
          <div>
            <p className="text-sm font-semibold">Saha? Tulis komentar...</p>
            <p className="text-muted-foreground/50 font-mono text-[10px] tracking-wider uppercase">
              Bagikan pendapat Anda
            </p>
          </div>
        </button>
      )}

      {loading ? (
        <div className="text-muted-foreground/50 py-12 text-center font-mono text-xs tracking-wider uppercase">
          Memuat komentar...
        </div>
      ) : comments.length === 0 ? (
        <div className="text-muted-foreground/30 py-8 text-center font-mono text-xs tracking-wider uppercase">
          Belum ada komentar. Jadilah yang pertama!
        </div>
      ) : (
        <div className="mb-8 space-y-3">
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onEdit={editComment}
              onDelete={deleteComment}
            />
          ))}
        </div>
      )}
    </motion.section>
  );
}
