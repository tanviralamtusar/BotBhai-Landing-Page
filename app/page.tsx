"use client"

import { BGPattern } from "@/components/ui/bg-pattern"
import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { DemoComparisonSection } from "@/components/landing/demo-comparison-section"
import { CostAnalysisSection } from "@/components/landing/cost-analysis-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { IntegrationSection } from "@/components/landing/integration-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { FAQSection } from "@/components/landing/faq-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { ParallaxSection, ParallaxContainer } from "@/components/ui/parallax-section"

export default function HomePage() {
  return (
    <ParallaxContainer className="relative min-h-screen">
      <ParallaxSection speed={-0.3} className="fixed inset-0 z-0">
        <BGPattern variant="dots" mask="fade-edges" fill="#222E44" size={32} />
      </ParallaxSection>

      <Navbar />

      <main className="relative z-10">
        <ParallaxSection speed={0.2}>
          <HeroSection />
        </ParallaxSection>

        <ParallaxSection speed={0.1}>
          <DemoComparisonSection />
        </ParallaxSection>

        <ParallaxSection speed={0.1}>
          <CostAnalysisSection />
        </ParallaxSection>

        <ParallaxSection speed={0.15}>
          <FeaturesSection />
        </ParallaxSection>

        <ParallaxSection speed={0.1}>
          <HowItWorksSection />
        </ParallaxSection>

        <ParallaxSection speed={0.1}>
          <IntegrationSection />
        </ParallaxSection>

        <ParallaxSection speed={0.2}>
          <PricingSection />
        </ParallaxSection>

        <ParallaxSection speed={0.1}>
          <FAQSection />
        </ParallaxSection>

        <ParallaxSection speed={0.15}>
          <CTASection />
        </ParallaxSection>
      </main>

      <Footer />
    </ParallaxContainer>
  )
}
