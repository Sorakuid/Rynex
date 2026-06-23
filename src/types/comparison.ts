export interface ComparisonFeature {
  name: string;
  values: string[];
}

export interface ComparisonData {
  title: string;
  subtitle?: string;
  plans: string[];
  recommended?: string;
  licenseTypes?: Record<string, string>;
  descriptions?: Record<string, string>;
  upgradeTriggers?: string[];
  features: ComparisonFeature[];
}
