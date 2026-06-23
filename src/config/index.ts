import type { ComparisonData } from "@/types/comparison";
import type {
  CollaborationItem,
  EcosystemItem,
  PartnerItem,
  TechItem,
} from "@/types/config";
import type { PricingPackage } from "@/types/pricing";

import collaborationsData from "./collaborations.json";
import comparisonData from "./comparison.json";
import ecosystemData from "./ecosystem.json";
import partnersData from "./partners.json";
import pricingData from "./pricing.json";
import techPartnersData from "./tech.json";

export const techPartners = techPartnersData as TechItem[];
export const businessPartners = partnersData as PartnerItem[];
export const collaborations = collaborationsData as CollaborationItem[];
export const ecosystem = ecosystemData as EcosystemItem[];
export const pricingPackages = pricingData as PricingPackage[];
export const comparison = comparisonData as ComparisonData;

export function getFeaturedTech(): TechItem[] {
  return techPartners.filter((t) => t.featured);
}

export function getFeaturedPartners(): PartnerItem[] {
  return businessPartners.filter((p) => p.featured);
}

export function getTechByCategory(category: string): TechItem[] {
  return techPartners.filter((t) => t.category === category);
}

export function getActiveCollaborations(): CollaborationItem[] {
  return collaborations.filter((c) => c.status === "active");
}
