import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#1C1E22]">
      <Sidebar />
      <main className="ml-0 flex-1 md:ml-64">{children}</main>
    </div>
  );
}
