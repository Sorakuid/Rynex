import { LicenseManagementClient } from "@/components/license/licenseClient";
import { db } from "@/lib/db";
import { licenses } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

export default async function LicensesPage() {
  const allLicenses = await db
    .select()
    .from(licenses)
    .orderBy(licenses.createdAt);

  return (
    <main className="bg-background flex-1 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <LicenseManagementClient initialLicenses={allLicenses} />
      </div>
    </main>
  );
}
