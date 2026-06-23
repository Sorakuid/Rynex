import { eq, sql } from "drizzle-orm";

import { db, schema } from "./db";

const cache = new Map<string, number>();

export async function getView(slug: string): Promise<number> {
  if (cache.has(slug)) return cache.get(slug)!;

  const row = await db
    .select({ views: schema.blogViews.views })
    .from(schema.blogViews)
    .where(eq(schema.blogViews.slug, slug))
    .then((r) => r[0]);

  const count = row?.views ?? 0;
  cache.set(slug, count);
  return count;
}

export async function incrementView(slug: string): Promise<number> {
  const row = await db
    .insert(schema.blogViews)
    .values({ slug, views: 1, updatedAt: new Date() })
    .onConflictDoUpdate({
      target: schema.blogViews.slug,
      set: {
        views: sql`blog_views.views + 1`,
        updatedAt: new Date(),
      },
    })
    .returning({ views: schema.blogViews.views });

  const count = row[0].views;
  cache.set(slug, count);
  return count;
}

export async function getAllViews(): Promise<Record<string, number>> {
  const rows = await db.select().from(schema.blogViews);
  const result: Record<string, number> = {};
  for (const row of rows) {
    result[row.slug] = row.views;
    cache.set(row.slug, row.views);
  }
  return result;
}
