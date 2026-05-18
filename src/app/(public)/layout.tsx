import { Footer } from "@/components/rynex/footer";
import { Navbar } from "@/components/rynex/navbar";
import { SmoothScroll } from "@/components/rynex/smooth-scroll";
import { BackgroundAnimation } from "@/components/shared/background-animation";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <BackgroundAnimation />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </SmoothScroll>
  );
}
