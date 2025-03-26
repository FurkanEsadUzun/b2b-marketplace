// app/why-b2b-market/page.tsx

import HeroSection from "@/app/components/why/HeroSection";
import FeatureGrid from "@/app/components/why/FeatureGrid";
import TestimonialSlider from "@/app/components/why/TestimonialSlider";
import CtaSection from "@/app/components/why/CtaSection";
import TrustedLogos from "@/app/components/why/TrustedLogos";
import ScrollRevealWrapper from "@/app/components/common/ScrollRevealWrapper";

export default function WhyB2BMarketPage() {
  return (
    <div className="bg-white text-gray-800">
      <ScrollRevealWrapper>
        <HeroSection />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <FeatureGrid />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <TrustedLogos />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <TestimonialSlider />
      </ScrollRevealWrapper>

      <ScrollRevealWrapper>
        <CtaSection />
      </ScrollRevealWrapper>
    </div>
  );
}
