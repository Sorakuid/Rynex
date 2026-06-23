"use client";

import { Loader2, Send } from "lucide-react";
import { useState } from "react";

interface CommentFormProps {
  onSubmit: (authorName: string, content: string) => Promise<void>;
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !content.trim() || sending) return;
    setSending(true);
    try {
      await onSubmit(authorName.trim(), content.trim());
      setContent("");
    } catch {
      // optimistic update handles rollback
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        placeholder="Nama Anda"
        maxLength={100}
        required
        className="bg-muted/50 border-border/40 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 w-full rounded-xl border px-4 py-2.5 font-mono text-xs transition-colors outline-none"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Tulis komentar..."
        rows={3}
        required
        className="bg-muted/50 border-border/40 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 w-full resize-none rounded-xl border px-4 py-2.5 text-sm transition-colors outline-none"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={sending || !authorName.trim() || !content.trim()}
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-mono text-xs font-semibold tracking-wider uppercase transition-colors disabled:opacity-50"
        >
          {sending && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
          {sending ? "Mengirim..." : "Kirim"}
          {!sending && <Send className="h-3.5 w-3.5" />}
        </button>
      </div>
    </form>
  );
}
