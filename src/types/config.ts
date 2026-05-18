export interface TechItem {
  id: string;
  name: string;
  category: TechCategory;
  description: string;
  logo: string;
  website: string;
  featured: boolean;
}

export type TechCategory =
  | "framework"
  | "deployment"
  | "database"
  | "security"
  | "development"
  | "payment"
  | "analytics";

export interface PartnerItem {
  id: string;
  name: string;
  role: string;
  description: string;
  logo: string;
  website: string;
  featured: boolean;
}

export interface CollaborationItem {
  id: string;
  project: string;
  partner: string;
  type: CollabType;
  status: CollabStatus;
  description: string;
}

export type CollabType =
  | "development"
  | "research"
  | "community"
  | "design"
  | "strategic";
export type CollabStatus = "active" | "completed" | "planned";

export interface EcosystemItem {
  id: string;
  name: string;
  type: EcosystemType;
  description: string;
  logo: string;
  website: string;
  featured: boolean;
}

export type EcosystemType =
  | "platform"
  | "studio"
  | "product"
  | "community"
  | "tool";
