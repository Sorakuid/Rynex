import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background flex min-h-screen">
      <Sidebar />
      <main className="ml-0 flex-1 md:ml-64">{children}</main>
    </div>
  );
}
