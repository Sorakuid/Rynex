import { eq } from "drizzle-orm";

import { db } from "./index";
import { products } from "./schema";

async function seed() {
  const templateProducts = [
    {
      name: "Portfolio Anime",
      slug: "portfolio-anime",
      type: "template",
      version: "2.0.0",
      price: 450000,
    },
    {
      name: "Dashboard SaaS",
      slug: "dashboard-saas",
      type: "template",
      version: "1.5.0",
      price: 750000,
    },
    {
      name: "Landing Page Modern",
      slug: "landing-page-modern",
      type: "template",
      version: "3.0.0",
      price: 299000,
    },
    {
      name: "E-commerce Starter",
      slug: "ecommerce-starter",
      type: "template",
      version: "1.0.0",
      price: 599000,
    },
    {
      name: "Blog Tech",
      slug: "blog-tech",
      type: "template",
      version: "1.2.0",
      price: 349000,
    },
  ];

  console.log("Seeding products...");

  for (const product of templateProducts) {
    const existing = await db
      .select()
      .from(products)
      .where(eq(products.slug, product.slug))
      .limit(1);

    if (!existing[0]) {
      await db.insert(products).values(product);
      console.log(`  Created: ${product.name}`);
    } else {
      console.log(`  Skipped: ${product.name} (exists)`);
    }
  }

  console.log("Seed complete!");
}

seed()
  .catch(console.error)
  .finally(() => process.exit(0));
