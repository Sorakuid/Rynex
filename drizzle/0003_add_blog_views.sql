CREATE TABLE IF NOT EXISTS "blog_views" (
  "slug" varchar(255) PRIMARY KEY NOT NULL,
  "views" integer DEFAULT 0 NOT NULL,
  "updated_at" timestamp DEFAULT now() NOT NULL
);--> statement-breakpoint
