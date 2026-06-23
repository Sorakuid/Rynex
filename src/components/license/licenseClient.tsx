"use client";

import { Plus, RefreshCw } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { LicenseGenerateDialog } from "./genDialog";
import { LicenseTable } from "./table";

interface LicenseData {
  id: number;
  licenseKey: string;
  plan: string;
  customerEmail: string;
  status: string;
  domain: string | null;
  currentActivations: number;
  maxActivations: number;
  createdAt: Date | null;
}

export function LicenseManagementClient({
  initialLicenses,
}: {
  initialLicenses: LicenseData[];
}) {
  const [generateOpen, setGenerateOpen] = useState(false);
  const [licenses] = useState(initialLicenses);
  const refresh = async () => {
    const res = await fetch("/api/license/status?key=_all", { method: "GET" });
    if (res.ok) {
      // Re-fetch by navigating
      window.location.reload();
    }
  };

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold">Kelola Lisensi</h1>
          <p className="text-muted-foreground">
            Generate dan kelola kunci lisensi
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={refresh}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button onClick={() => setGenerateOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Generate Baru
          </Button>
        </div>
      </div>

      <LicenseTable licenses={licenses} onRefresh={refresh} />

      <LicenseGenerateDialog
        open={generateOpen}
        onOpenChange={setGenerateOpen}
        onSuccess={refresh}
      />
    </>
  );
}
