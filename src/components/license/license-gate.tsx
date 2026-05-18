"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface LicenseGateProps {
  licenseKey?: string;
  domain?: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface LicenseStatus {
  valid: boolean;
  premiumUnlocked: boolean;
  brandingRemovalAllowed: boolean;
  plan?: string;
  status?: string;
}

export function LicenseGate({
  licenseKey,
  domain,
  children,
  fallback,
}: LicenseGateProps) {
  const [status, setStatus] = useState<LicenseStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!licenseKey) {
      setLoading(false);
      setStatus({
        valid: false,
        premiumUnlocked: false,
        brandingRemovalAllowed: false,
      });
      return;
    }

    const params = new URLSearchParams({ key: licenseKey });
    if (domain) params.set("domain", domain);

    fetch(`/api/license/status?${params}`)
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch(() =>
        setStatus({
          valid: false,
          premiumUnlocked: false,
          brandingRemovalAllowed: false,
        }),
      )
      .finally(() => setLoading(false));
  }, [licenseKey, domain]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="text-muted-foreground h-5 w-5 animate-spin" />
      </div>
    );
  }

  if (!status?.premiumUnlocked) {
    return fallback || null;
  }

  return <>{children}</>;
}
