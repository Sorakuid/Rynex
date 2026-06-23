import crypto from "crypto";
import { desc, sql as drizzleSql } from "drizzle-orm";

import { db, schema, sql } from "./db";

export interface CommentData {
  id: number;
  postSlug: string;
  authorName: string;
  content: string;
  createdAt: string;
  updatedAt: string | null;
}

function serialize(row: typeof schema.comments.$inferSelect): CommentData {
  return {
    id: row.id,
    postSlug: row.postSlug,
    authorName: row.authorName,
    content: row.content,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt?.toISOString() ?? null,
  };
}

export interface SyncResult {
  sequenceId: string;
  comments: CommentData[];
}

export async function getCommentsForSync(
  postSlug: string,
): Promise<SyncResult> {
  const [sequenceResult, commentsResult] = await Promise.all([
    db
      .select({ value: drizzleSql`COALESCE(MAX(sequence_id), 0)` })
      .from(schema.outbox)
      .then((r) => Number(r[0].value)),
    db
      .select()
      .from(schema.comments)
      .where(
        drizzleSql`${schema.comments.postSlug} = ${postSlug} AND ${schema.comments.deletedAt} IS NULL`,
      )
      .orderBy(desc(schema.comments.createdAt)),
  ]);
  return {
    sequenceId: String(sequenceResult),
    comments: commentsResult.map(serialize),
  };
}

export async function getComments(postSlug: string): Promise<CommentData[]> {
  const rows = await db
    .select()
    .from(schema.comments)
    .where(
      drizzleSql`${schema.comments.postSlug} = ${postSlug} AND ${schema.comments.deletedAt} IS NULL`,
    )
    .orderBy(desc(schema.comments.createdAt));
  return rows.map(serialize);
}

export async function addComment(
  postSlug: string,
  authorName: string,
  content: string,
  mutationId?: string,
): Promise<CommentData> {
  const mid = mutationId ?? crypto.randomUUID();

  const result = await sql`
    WITH inserted_comment AS (
      INSERT INTO comments (post_slug, author_name, content, created_at)
      VALUES (${postSlug}, ${authorName}, ${content}, NOW())
      RETURNING *
    ),
    inserted_outbox AS (
      INSERT INTO outbox (mutation_id, channel, name, data)
      SELECT
        ${mid},
        ${`comments:${postSlug}`},
        'addComment',
        jsonb_build_object(
          'id', ic.id,
          'postSlug', ic.post_slug,
          'authorName', ic.author_name,
          'content', ic.content,
          'createdAt', ic.created_at::text,
          'updatedAt', ic.updated_at::text
        )
      FROM inserted_comment ic
    )
    SELECT * FROM inserted_comment;
  `;

  const row = result[0] as Record<string, unknown>;
  return {
    id: Number(row.id),
    postSlug: String(row.post_slug),
    authorName: String(row.author_name),
    content: String(row.content),
    createdAt: new Date(String(row.created_at)).toISOString(),
    updatedAt: null,
  };
}

export async function editComment(
  id: number,
  content: string,
  mutationId?: string,
): Promise<CommentData | null> {
  const mid = mutationId ?? crypto.randomUUID();

  const result = await sql`
    WITH updated_comment AS (
      UPDATE comments
      SET content = ${content}, updated_at = NOW()
      WHERE id = ${id} AND deleted_at IS NULL
      RETURNING *
    ),
    inserted_outbox AS (
      INSERT INTO outbox (mutation_id, channel, name, data)
      SELECT
        ${mid},
        'comments:' || uc.post_slug,
        'editComment',
        jsonb_build_object(
          'id', uc.id,
          'postSlug', uc.post_slug,
          'authorName', uc.author_name,
          'content', uc.content,
          'createdAt', uc.created_at::text,
          'updatedAt', uc.updated_at::text
        )
      FROM updated_comment uc
    )
    SELECT * FROM updated_comment;
  `;

  const row = result[0] as Record<string, unknown> | undefined;
  if (!row) return null;

  return {
    id: Number(row.id),
    postSlug: String(row.post_slug),
    authorName: String(row.author_name),
    content: String(row.content),
    createdAt: new Date(String(row.created_at)).toISOString(),
    updatedAt: new Date(String(row.updated_at)).toISOString(),
  };
}

export async function deleteComment(
  id: number,
  mutationId?: string,
): Promise<string | null> {
  const mid = mutationId ?? crypto.randomUUID();

  const result = await sql`
    WITH deleted_comment AS (
      UPDATE comments
      SET deleted_at = NOW()
      WHERE id = ${id} AND deleted_at IS NULL
      RETURNING id, post_slug
    ),
    inserted_outbox AS (
      INSERT INTO outbox (mutation_id, channel, name, data)
      SELECT
        ${mid},
        'comments:' || dc.post_slug,
        'deleteComment',
        jsonb_build_object('id', dc.id)
      FROM deleted_comment dc
    )
    SELECT * FROM deleted_comment;
  `;

  const row = result[0] as Record<string, unknown> | undefined;
  if (!row) return null;

  return String(row.post_slug);
}
