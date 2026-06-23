CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"email" varchar(255) NOT NULL,
	"password_hash" text,
	"role" varchar(50) NOT NULL DEFAULT 'user',
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_unique" ON "users" ("email");
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"description" text,
	"image" varchar(500),
	"type" varchar(50) NOT NULL DEFAULT 'template',
	"version" varchar(50) NOT NULL DEFAULT '1.0.0',
	"price" integer NOT NULL DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "products_slug_unique" ON "products" ("slug");
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "licenses" (
	"id" serial PRIMARY KEY NOT NULL,
	"license_key" varchar(255) NOT NULL,
	"product_id" integer,
	"customer_email" varchar(255) NOT NULL,
	"plan" varchar(50) NOT NULL DEFAULT 'basic',
	"status" varchar(50) NOT NULL DEFAULT 'inactive',
	"domain" varchar(255),
	"issued_at" timestamp DEFAULT now(),
	"activated_at" timestamp,
	"expires_at" timestamp,
	"max_activations" integer NOT NULL DEFAULT 1,
	"current_activations" integer NOT NULL DEFAULT 0,
	"signature" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "licenses_license_key_unique" ON "licenses" ("license_key");
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "activations" (
	"id" serial PRIMARY KEY NOT NULL,
	"license_id" integer NOT NULL,
	"domain" varchar(255) NOT NULL,
	"ip_address" varchar(45),
	"activated_at" timestamp DEFAULT now(),
	"device_hash" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"customer_email" varchar(255) NOT NULL,
	"product_id" integer,
	"amount" integer NOT NULL,
	"payment_status" varchar(50) NOT NULL DEFAULT 'pending',
	"payment_provider" varchar(50),
	"purchased_at" timestamp DEFAULT now()
);
