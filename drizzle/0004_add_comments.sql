CREATE TABLE IF NOT EXISTS "comments" (
  "id" serial PRIMARY KEY NOT NULL,
  "post_slug" varchar(255) NOT NULL,
  "author_name" varchar(100) NOT NULL,
  "content" text NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "updated_at" timestamp,
  "deleted_at" timestamp
);--> statement-breakpoint

CREATE TABLE IF NOT EXISTS "comment_outbox" (
  "id" serial PRIMARY KEY NOT NULL,
  "mutation_id" uuid NOT NULL UNIQUE,
  "post_slug" varchar(255) NOT NULL,
  "name" varchar(50) NOT NULL,
  "data" jsonb NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL,
  "processed" boolean DEFAULT false NOT NULL
);--> statement-breakpoint
