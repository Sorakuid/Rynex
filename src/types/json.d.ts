export interface ProductFormData {
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  price: string;
  category?: string;
  image?: string;
  demoUrl?: string;
  techStack?: string[];
  features?: string[];
}

export type LicenseType = "free" | "pro" | "agency" | "lifetime";

export interface LicenseData {
  key: string;
  type: LicenseType;
  email: string;
  productId?: number;
  domain?: string;
  maxDomains?: number;
  status: string;
  activatedAt?: Date;
  expiresAt?: Date;
  createdAt: Date;
}
