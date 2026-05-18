import { BusinessPartnersSection } from "@/components/partners/business-partners";
import { CollaborationSection } from "@/components/partners/collaboration-section";
import { EcosystemSection } from "@/components/partners/ecosystem-section";
import { TechnologyPartnersSection } from "@/components/partners/technology-partners";
import { BackgroundAnimation } from "@/components/shared/background-animation";

export const metadata = {
  title: "Partners & Ecosystem",
  description:
    "Teknologi, mitra strategis, dan ekosistem di balik RYNEX oleh Soraku Studio.",
};

export default function PartnersPage() {
  return (
    <>
      <div className="pt-28">
        <section className="pb-8">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Partners & Ecosystem
            </span>
            <h1 className="mt-4 mb-4 text-5xl font-bold md:text-6xl">
              Our <span className="gradient-text">Network</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              The technology, partners, and ecosystem that power RYNEX and the
              Soraku Studio universe.
            </p>
          </div>
        </section>

        <TechnologyPartnersSection />
        <BusinessPartnersSection />
        <CollaborationSection />
        <EcosystemSection />
      </div>
    </>
  );
}
