import { env } from "@/env";

export default {
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  connectionString: env.DATABASE_URL,
};
