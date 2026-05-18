import { createHmac, randomBytes } from "crypto";
import { and, eq, sql } from "drizzle-orm";
import { z } from "zod";

import { env } from "@/env";

import { db } from "./db/index";
import { activations, licenses, orders, products, users } from "./db/schema";

function checksum(segment: string): string {
  let hash = 0;
  for (let i = 0; i < segment.length; i++) {
    const char = segment.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  const positive = Math.abs(hash);
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return chars[positive % chars.length] + chars[(positive >> 4) % chars.length];
}

export function generateLicenseKey(plan: string): string {
  const prefix = "RYNEX";
  const planCode = plan.toUpperCase().slice(0, 4);
  const segment1 = randomBytes(2).toString("hex").toUpperCase();
  const segment2 = randomBytes(2).toString("hex").toUpperCase();
  const raw = `${prefix}-${planCode}-${segment1}-${segment2}`;
  const chk = checksum(raw);
  return `${raw}-${chk}`;
}

export function signLicensePayload(payload: Record<string, unknown>): string {
  const hmac = createHmac("sha256", env.LICENSE_HMAC_KEY);
  hmac.update(JSON.stringify(payload));
  return hmac.digest("hex");
}

export function verifyLicenseSignature(
  payload: Record<string, unknown>,
  signature: string,
): boolean {
  const expected = signLicensePayload(payload);
  return expected === signature;
}

const activationLimits: Record<string, number> = {
  basic: 1,
  pro: 3,
  agency: 10,
  lifetime: 999,
};

const planOrder: Record<string, number> = {
  basic: 0,
  pro: 1,
  agency: 2,
  lifetime: 3,
};

export function getMaxActivations(plan: string): number {
  return activationLimits[plan.toLowerCase()] || 1;
}

export async function createLicenseEntry(data: {
  plan: string;
  email: string;
  productId?: number;
  domain?: string;
  expiresInDays?: number;
}) {
  const key = generateLicenseKey(data.plan);
  const maxActivations = getMaxActivations(data.plan);

  const payload = {
    licenseKey: key,
    plan: data.plan,
    email: data.email,
    productId: data.productId,
    maxActivations,
    issuedAt: new Date().toISOString(),
  };

  const signature = signLicensePayload(payload);

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

  const expiresAt = data.expiresInDays
    ? new Date(Date.now() + data.expiresInDays * 86400000)
    : null;

  const [license] = await db
    .insert(licenses)
    .values({
      licenseKey: key,
      productId: data.productId,
      customerEmail: data.email,
      plan: data.plan.toLowerCase(),
      domain: data.domain,
      maxActivations,
      expiresAt,
      signature,
    })
    .returning();

  return license;
}

export async function validateLicense(
  licenseKey: string,
  domain?: string,
  productId?: number,
) {
  const license = await db
    .select()
    .from(licenses)
    .where(eq(licenses.licenseKey, licenseKey))
    .limit(1);

  if (!license[0]) {
    return {
      valid: false,
      premiumUnlocked: false,
      brandingRemovalAllowed: false,
      error: "LICENSE_NOT_FOUND",
    };
  }

  const l = license[0];

  if (l.status === "revoked") {
    return {
      valid: false,
      premiumUnlocked: false,
      brandingRemovalAllowed: false,
      error: "LICENSE_REVOKED",
    };
  }

  if (l.status === "suspended") {
    return {
      valid: false,
      premiumUnlocked: false,
      brandingRemovalAllowed: false,
      error: "LICENSE_SUSPENDED",
    };
  }

  if (
    l.status === "expired" ||
    (l.expiresAt && new Date(l.expiresAt) < new Date())
  ) {
    return {
      valid: false,
      premiumUnlocked: false,
      brandingRemovalAllowed: false,
      error: "LICENSE_EXPIRED",
    };
  }

  if (domain && l.domain && !l.domain.split(",").includes(domain)) {
    return {
      valid: true,
      premiumUnlocked: false,
      brandingRemovalAllowed: false,
      domainMismatch: true,
      error: "DOMAIN_MISMATCH",
    };
  }

  if (productId && l.productId && l.productId !== productId) {
    return {
      valid: true,
      premiumUnlocked: false,
      brandingRemovalAllowed: false,
      productMismatch: true,
      error: "PRODUCT_MISMATCH",
    };
  }

  const isActive = l.status === "active" || l.status === "inactive";
  const canRemoveBranding = isActive && planOrder[l.plan] >= planOrder["pro"];
  const premiumUnlocked = isActive;

  return {
    valid: isActive,
    premiumUnlocked,
    brandingRemovalAllowed: canRemoveBranding,
    status: l.status,
    plan: l.plan,
    domain: l.domain,
    currentActivations: l.currentActivations,
    maxActivations: l.maxActivations,
    expiresAt: l.expiresAt,
  };
}

export async function activateLicenseForKey(
  licenseKey: string,
  domain: string,
  ipAddress?: string,
  deviceHash?: string,
) {
  const license = await db
    .select()
    .from(licenses)
    .where(eq(licenses.licenseKey, licenseKey))
    .limit(1);

  if (!license[0]) {
    return { success: false, error: "LICENSE_NOT_FOUND" };
  }

  const l = license[0];

  if (
    l.status === "revoked" ||
    l.status === "suspended" ||
    l.status === "expired"
  ) {
    return { success: false, error: `LICENSE_${l.status.toUpperCase()}` };
  }

  if (l.currentActivations >= l.maxActivations) {
    return {
      success: false,
      error: "MAX_ACTIVATIONS_REACHED",
      currentActivations: l.currentActivations,
      maxActivations: l.maxActivations,
    };
  }

  const existingActivation = await db
    .select()
    .from(activations)
    .where(and(eq(activations.licenseId, l.id), eq(activations.domain, domain)))
    .limit(1);

  if (existingActivation[0]) {
    return {
      success: true,
      alreadyActivated: true,
      remainingActivations: l.maxActivations - l.currentActivations,
    };
  }

  await db.insert(activations).values({
    licenseId: l.id,
    domain,
    ipAddress,
    deviceHash,
  });

  const newCount = l.currentActivations + 1;
  await db
    .update(licenses)
    .set({
      currentActivations: newCount,
      status: "active",
      activatedAt: new Date(),
      domain: l.domain ? `${l.domain},${domain}` : domain,
    })
    .where(eq(licenses.licenseKey, licenseKey));

  return {
    success: true,
    activated: true,
    remainingActivations: l.maxActivations - newCount,
  };
}

export async function deactivateDomain(licenseKey: string, domain: string) {
  const license = await db
    .select()
    .from(licenses)
    .where(eq(licenses.licenseKey, licenseKey))
    .limit(1);

  if (!license[0]) {
    return { success: false, error: "LICENSE_NOT_FOUND" };
  }

  const l = license[0];

  await db
    .delete(activations)
    .where(
      and(eq(activations.licenseId, l.id), eq(activations.domain, domain)),
    );

  const newCount = Math.max(0, l.currentActivations - 1);
  const domains = (l.domain || "")
    .split(",")
    .filter((d) => d !== domain)
    .join(",");

  await db
    .update(licenses)
    .set({
      currentActivations: newCount,
      domain: domains || null,
    })
    .where(eq(licenses.licenseKey, licenseKey));

  return { success: true, remainingActivations: l.maxActivations - newCount };
}

export async function updateLicenseStatus(licenseKey: string, status: string) {
  const validStatuses = [
    "active",
    "inactive",
    "suspended",
    "revoked",
    "expired",
  ];
  if (!validStatuses.includes(status)) {
    return { success: false, error: "INVALID_STATUS" };
  }

  const [updated] = await db
    .update(licenses)
    .set({ status })
    .where(eq(licenses.licenseKey, licenseKey))
    .returning();

  if (!updated) {
    return { success: false, error: "LICENSE_NOT_FOUND" };
  }

  return { success: true, status: updated.status };
}

export async function getLicenseByKey(licenseKey: string) {
  const license = await db
    .select()
    .from(licenses)
    .where(eq(licenses.licenseKey, licenseKey))
    .limit(1);

  if (!license[0]) return null;

  const activationList = await db
    .select()
    .from(activations)
    .where(eq(activations.licenseId, license[0].id))
    .orderBy(activations.activatedAt);

  return { ...license[0], activations: activationList };
}

export async function getAllLicenses() {
  return db.select().from(licenses).orderBy(licenses.createdAt);
}

export async function getDashboardStats() {
  const allLicenses = await db.select().from(licenses);
  const allOrders = await db.select().from(orders);

  const totalLicenses = allLicenses.length;
  const activeLicenses = allLicenses.filter(
    (l) => l.status === "active",
  ).length;
  const revokedLicenses = allLicenses.filter(
    (l) => l.status === "revoked",
  ).length;
  const suspendedLicenses = allLicenses.filter(
    (l) => l.status === "suspended",
  ).length;
  const expiredLicenses = allLicenses.filter(
    (l) => l.status === "expired",
  ).length;
  const totalRevenue = allOrders
    .filter((o) => o.paymentStatus === "paid")
    .reduce((sum, o) => sum + o.amount, 0);

  const statusDistribution = {
    active: activeLicenses,
    inactive: allLicenses.filter((l) => l.status === "inactive").length,
    suspended: suspendedLicenses,
    revoked: revokedLicenses,
    expired: expiredLicenses,
  };

  return {
    totalLicenses,
    activeLicenses,
    revokedLicenses,
    suspendedLicenses,
    expiredLicenses,
    totalRevenue,
    totalOrders: allOrders.length,
    paidOrders: allOrders.filter((o) => o.paymentStatus === "paid").length,
    statusDistribution,
  };
}

export async function getOrders() {
  return db.select().from(orders).orderBy(orders.purchasedAt);
}

export async function createOrder(data: {
  customerEmail: string;
  productId?: number;
  amount: number;
  paymentProvider?: string;
}) {
  const [order] = await db.insert(orders).values(data).returning();
  return order;
}

export async function getProducts() {
  return db.select().from(products).orderBy(products.createdAt);
}

export async function createProduct(data: {
  name: string;
  slug: string;
  type?: string;
  version?: string;
  price: number;
}) {
  const [product] = await db.insert(products).values(data).returning();
  return product;
}
