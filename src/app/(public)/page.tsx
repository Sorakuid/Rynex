import dynamic from "next/dynamic";

import { ResponsiveHero } from "@/components/layout/responsiveHero";

const LogoMarquee = dynamic(() =>
  import("@/components/partners/marquee").then((m) => ({
    default: m.LogoMarquee,
  })),
);

const ServicesSection = dynamic(() =>
  import("@/components/rynex/services").then((m) => ({
    default: m.ServicesSection,
  })),
);

const PortfolioSection = dynamic(() =>
  import("@/components/rynex/portfolio").then((m) => ({
    default: m.PortfolioSection,
  })),
);

const HowRynexBuilds = dynamic(() =>
  import("@/components/rynex/howRynexBuilds").then((m) => ({
    default: m.HowRynexBuilds,
  })),
);

const PricingTeaserSection = dynamic(() =>
  import("@/components/rynex/pricingTeaser").then((m) => ({
    default: m.PricingTeaserSection,
  })),
);

const TestimonialsSection = dynamic(() =>
  import("@/components/rynex/testimonials").then((m) => ({
    default: m.TestimonialsSection,
  })),
);

const FAQSection = dynamic(() =>
  import("@/components/rynex/faq").then((m) => ({
    default: m.FAQSection,
  })),
);

const WhySection = dynamic(() =>
  import("@/components/rynex/why").then((m) => ({
    default: m.WhySection,
  })),
);

const CTASection = dynamic(() =>
  import("@/components/rynex/cta").then((m) => ({
    default: m.CTASection,
  })),
);

const BlogHomeSection = dynamic(() =>
  import("@/components/rynex/blogHome").then((m) => ({
    default: m.BlogHomeSection,
  })),
);

export default function HomePage() {
  return (
    <>
      <ResponsiveHero />
      <LogoMarquee />
      <ServicesSection />
      <PortfolioSection />
      <HowRynexBuilds />
      <WhySection />
      <PricingTeaserSection />
      <TestimonialsSection />
      <BlogHomeSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
