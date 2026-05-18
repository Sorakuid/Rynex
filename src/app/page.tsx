import { CTASection } from "@/components/rynex/cta-section";
import { FAQSection } from "@/components/rynex/faq-section";
import { FeaturedProductsSection } from "@/components/rynex/featured-products-section";
import { HeroSection } from "@/components/rynex/hero-section";
import { PortfolioSection } from "@/components/rynex/portfolio-section";
import { PricingTeaserSection } from "@/components/rynex/pricing-teaser-section";
import { ProcessSection } from "@/components/rynex/process-section";
import { ServicesSection } from "@/components/rynex/services-section";
import { SocialProofSection } from "@/components/rynex/social-proof-section";
import { TestimonialsSection } from "@/components/rynex/testimonials-section";
import { WhySection } from "@/components/rynex/why-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <ServicesSection />
      <FeaturedProductsSection />
      <PortfolioSection />
      <ProcessSection />
      <PricingTeaserSection />
      <TestimonialsSection />
      <FAQSection />
      <WhySection />
      <CTASection />
    </>
  );
}
