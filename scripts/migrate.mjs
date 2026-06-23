import { neon } from '@neondatabase/serverless';
import { readFileSync, readdirSync } from 'fs';
import { resolve, join } from 'path';

const envRaw = readFileSync('.env.local', 'utf8');
const urlMatch = envRaw.match(/DATABASE_URL="([^"]+)"/);
if (!urlMatch) throw new Error('DATABASE_URL not found in .env.local');
const sql = neon(urlMatch[1]);

const dir = resolve('drizzle');
const files = readdirSync(dir)
  .filter(f => f.endsWith('.sql'))
  .sort();

for (const file of files) {
  const content = readFileSync(join(dir, file), 'utf8');
  const statements = content
    .split('--> statement-breakpoint')
    .map(s => s.trim())
    .filter(Boolean);

  console.log(`Running ${file} (${statements.length} statements)...`);
  for (const stmt of statements) {
    try {
      // Use query() instead of unsafe() — unsafe() does NOT execute
      await sql.query(stmt);
      console.log(`  OK`);
    } catch (e) {
      console.error(`  FAIL: ${e.message}`);
    }
  }
}

console.log('\nAll migrations complete.');

// Verify
const tables = await sql.query(
  "SELECT table_name FROM information_schema.tables WHERE table_schema='public' ORDER BY table_name"
);
console.log('Tables now:', tables.map(t => t.table_name).join(', '));
