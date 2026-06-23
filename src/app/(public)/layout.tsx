import { Footer } from "@/components/rynex/footer";
import { Navbar } from "@/components/rynex/navbar";
import { SmoothScroll } from "@/components/rynex/scroll";
import { MobileBottomNavbar } from "@/components/ui/mobile/bottomNav";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <Navbar />
      <MobileBottomNavbar />
      <main className="relative z-10 overflow-x-hidden pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
    </SmoothScroll>
  );
}
