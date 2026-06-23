"use client";

import { motion } from "framer-motion";
import { Check, Edit3, Loader2, Trash2, X } from "lucide-react";
import { useState } from "react";

import type { CommentData } from "@/lib/comments";

interface CommentItemProps {
  comment: CommentData & { _pending?: boolean; _error?: boolean };
  onEdit: (id: number, content: string) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export function CommentItem({ comment, onEdit, onDelete }: CommentItemProps) {
  const [editing, setEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!editContent.trim() || saving) return;
    setSaving(true);
    try {
      await onEdit(comment.id, editContent.trim());
      setEditing(false);
    } catch {
      // handled by hook
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditContent(comment.content);
    setEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-xl border p-4 transition-colors ${
        comment._pending
          ? "border-primary/20 bg-primary/[0.02]"
          : comment._error
            ? "border-red-500/30 bg-red-500/[0.02]"
            : "border-border/30 bg-card/50"
      }`}
    >
      <div className="mb-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 text-primary flex h-6 w-6 items-center justify-center rounded-full font-mono text-[10px] font-bold uppercase">
            {comment.authorName.charAt(0)}
          </div>
          <span className="font-mono text-xs font-semibold tracking-wide">
            {comment.authorName}
          </span>
          <span className="text-muted-foreground/40 font-mono text-[9px] tracking-wider uppercase">
            {new Date(comment.createdAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          {comment.updatedAt && (
            <span className="text-muted-foreground/30 font-mono text-[9px]">
              · edited
            </span>
          )}
          {comment._pending && (
            <Loader2 className="text-primary h-3 w-3 animate-spin" />
          )}
          {comment._error && (
            <span className="font-mono text-[9px] text-red-400">gagal</span>
          )}
        </div>

        {!comment._pending && !editing && (
          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                setEditContent(comment.content);
                setEditing(true);
              }}
              className="text-muted-foreground/40 hover:text-muted-foreground/70 rounded-lg p-1 transition-colors"
            >
              <Edit3 className="h-3 w-3" />
            </button>
            <button
              onClick={() => onDelete(comment.id)}
              className="text-muted-foreground/40 rounded-lg p-1 transition-colors hover:text-red-400"
            >
              <Trash2 className="h-3 w-3" />
            </button>
          </div>
        )}
      </div>

      {editing ? (
        <div className="space-y-2">
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows={2}
            className="bg-muted/30 border-border/30 focus:border-primary/50 w-full resize-none rounded-lg border px-3 py-2 text-sm outline-none"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={saving}
              className="bg-primary text-primary-foreground inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase transition-colors"
            >
              {saving ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                <Check className="h-3 w-3" />
              )}
              Simpan
            </button>
            <button
              onClick={handleCancel}
              className="text-muted-foreground/60 hover:text-foreground inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase transition-colors"
            >
              <X className="h-3 w-3" />
              Batal
            </button>
          </div>
        </div>
      ) : (
        <p className="text-muted-foreground text-sm leading-relaxed">
          {comment.content}
        </p>
      )}
    </motion.div>
  );
}
