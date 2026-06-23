export interface PricingPackage {
  name: string;
  slug: string;
  price: string;
  description: string;
  badge: string | null;
  popular: boolean;
  features: string[];
  cta: string;
  href: string;
}
