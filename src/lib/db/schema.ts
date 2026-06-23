import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: text("password_hash"),
  role: varchar("role", { length: 50 }).notNull().default("user"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  description: text("description"),
  image: varchar("image", { length: 500 }),
  type: varchar("type", { length: 50 }).notNull().default("template"),
  version: varchar("version", { length: 50 }).notNull().default("1.0.0"),
  price: integer("price").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const licenses = pgTable("licenses", {
  id: serial("id").primaryKey(),
  licenseKey: varchar("license_key", { length: 255 }).notNull().unique(),
  productId: integer("product_id").references(() => products.id),
  customerEmail: varchar("customer_email", { length: 255 }).notNull(),
  plan: varchar("plan", { length: 50 }).notNull().default("basic"),
  status: varchar("status", { length: 50 }).notNull().default("inactive"),
  domain: varchar("domain", { length: 255 }),
  issuedAt: timestamp("issued_at").defaultNow(),
  activatedAt: timestamp("activated_at"),
  expiresAt: timestamp("expires_at"),
  maxActivations: integer("max_activations").notNull().default(1),
  currentActivations: integer("current_activations").notNull().default(0),
  signature: text("signature"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const activations = pgTable("activations", {
  id: serial("id").primaryKey(),
  licenseId: integer("license_id")
    .notNull()
    .references(() => licenses.id),
  domain: varchar("domain", { length: 255 }).notNull(),
  ipAddress: varchar("ip_address", { length: 45 }),
  activatedAt: timestamp("activated_at").defaultNow(),
  deviceHash: varchar("device_hash", { length: 255 }),
});

export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  postSlug: varchar("post_slug", { length: 255 }).notNull(),
  authorName: varchar("author_name", { length: 100 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at"),
  deletedAt: timestamp("deleted_at"),
});

export const commentOutbox = pgTable("comment_outbox", {
  id: serial("id").primaryKey(),
  mutationId: uuid("mutation_id").notNull().unique(),
  postSlug: varchar("post_slug", { length: 255 }).notNull(),
  name: varchar("name", { length: 50 }).notNull(),
  data: jsonb("data").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  processed: boolean("processed").default(false).notNull(),
});

export const blogViews = pgTable("blog_views", {
  slug: varchar("slug", { length: 255 }).primaryKey(),
  views: integer("views").notNull().default(0),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const outbox = pgTable("outbox", {
  sequenceId: serial("sequence_id").primaryKey(),
  mutationId: text("mutation_id").notNull(),
  channel: text("channel").notNull(),
  name: text("name").notNull(),
  rejected: boolean("rejected").notNull().default(false),
  data: jsonb("data"),
  headers: jsonb("headers"),
  lockedBy: text("locked_by"),
  lockExpiry: timestamp("lock_expiry"),
  processed: boolean("processed").notNull().default(false),
});

export const nodes = pgTable("nodes", {
  id: text("id").primaryKey(),
  expiry: timestamp("expiry").notNull(),
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  customerEmail: varchar("customer_email", { length: 255 }).notNull(),
  productId: integer("product_id").references(() => products.id),
  amount: integer("amount").notNull(),
  paymentStatus: varchar("payment_status", { length: 50 })
    .notNull()
    .default("pending"),
  paymentProvider: varchar("payment_provider", { length: 50 }),
  purchasedAt: timestamp("purchased_at").defaultNow(),
});
