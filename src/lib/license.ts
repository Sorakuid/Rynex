import { randomBytes } from "crypto";
import { eq } from "drizzle-orm";

import type { LicenseType } from "@/types/json";

import { db } from "./db/index";
import { licenseActivations, licenses, orders, users } from "./db/schema";

export function generateLicenseKey(type: LicenseType): string {
  const prefix = `SRK-${type.toUpperCase()}`;
  const randomPart = randomBytes(4).toString("hex").toUpperCase();
  const year = new Date().getFullYear();
  return `${prefix}-${randomPart}-${year}`;
}

export async function createLicense(data: {
  type: LicenseType;
  email: string;
  productId?: number;
  domain?: string;
  maxDomains?: number;
  expiresInDays?: number;
}) {
  // Find or create user
  let user = await db
    .select()
    .from(users)
    .where(eq(users.email, data.email))
    .limit(1);

  if (!user[0]) {
    const [newUser] = await db
      .insert(users)
      .values({ email: data.email })
      .returning();
    user = [newUser];
  }

  // Calculate expiration
  const expiresAt = data.expiresInDays
    ? new Date(Date.now() + data.expiresInDays * 24 * 60 * 60 * 1000)
    : undefined;

  // Generate license
  const key = generateLicenseKey(data.type);
  const [license] = await db
    .insert(licenses)
    .values({
      key,
      type: data.type,
      userId: user[0].id,
      email: data.email,
      productId: data.productId,
      domain: data.domain,
      maxDomains: data.maxDomains || (data.type === "agency" ? 999 : 1),
      expiresAt,
    })
    .returning();

  return license;
}

export async function verifyLicense(key: string, domain?: string) {
  const license = await db
    .select()
    .from(licenses)
    .where(eq(licenses.key, key))
    .limit(1);

  if (!license[0]) {
    return { valid: false, error: "License not found" };
  }

  if (license[0].status !== "active") {
    return { valid: false, error: `License is ${license[0].status}` };
  }

  if (license[0].expiresAt && new Date(license[0].expiresAt) < new Date()) {
    return { valid: false, error: "License expired" };
  }

  // Check domain if provided
  if (domain && license[0].domain && license[0].domain !== domain) {
    return { valid: false, error: "Domain mismatch" };
  }

  return {
    valid: true,
    license: {
      id: license[0].id,
      type: license[0].type,
      email: license[0].email,
      domain: license[0].domain,
      maxDomains: license[0].maxDomains,
      expiresAt: license[0].expiresAt,
    },
  };
}

export async function activateLicense(
  key: string,
  domain: string,
  ipAddress?: string,
) {
  const verification = await verifyLicense(key, domain);
  if (!verification.valid || !verification.license) {
    return verification;
  }

  // Record activation
  await db.insert(licenseActivations).values({
    licenseId: verification.license.id,
    domain,
    ipAddress,
  });

  // Update license domain if not set
  if (!verification.license.domain) {
    await db
      .update(licenses)
      .set({ domain, activatedAt: new Date() })
      .where(eq(licenses.key, key));
  }

  return { success: true };
}

export async function revokeLicense(licenseId: number) {
  await db
    .update(licenses)
    .set({ status: "revoked" })
    .where(eq(licenses.id, licenseId));
}
