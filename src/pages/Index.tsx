import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SEO from "@/components/SEO";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ComparisonSection = lazy(() => import("@/components/ComparisonSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const ProjectCalculator = lazy(() => import("@/components/ProjectCalculator"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const SocialProofSection = lazy(() => import("@/components/SocialProofSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));

const SectionFallback = () => <div className="py-24" />;

const Index = () => {
  return (
    <main className="min-h-screen bg-background bg-gradient-mesh bg-noise selection:bg-primary/20 selection:text-foreground">
      <SEO
        title="Kubo Web | Criação de Sites Profissionais e Landing Pages que Vendem"
        description="Criação de sites profissionais e landing pages de alta conversão. Design sob medida, PageSpeed 95+, SEO estratégico e integração com WhatsApp. Solicite seu orçamento online."
        path="/"
      />
      <a href="#main-content" className="skip-to-content">
        Pular para o conteúdo
      </a>
      
      <Header />

      <div id="main-content">
        {/* 1. Hero Section */}
        <HeroSection />
        <div className="line-glow" />

        {/* 2. Marquee Stats & Authority */}
        <StatsSection />
        <div className="line-glow" />

        {/* 3. Bento Grid Services with Clear Pricing */}
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
        <div className="line-glow" />

        {/* 4. Pain vs Solution Comparison (Amateur vs Kubo Web) */}
        <Suspense fallback={<SectionFallback />}>
          <ComparisonSection />
        </Suspense>
        <div className="line-glow" />

        {/* 5. Interactive Portfolio Showcase with ROI Metrics */}
        <Suspense fallback={<SectionFallback />}>
          <PortfolioSection />
        </Suspense>
        <div className="line-glow" />

        {/* 6. Real-Time Project Investment Simulator / Calculator */}
        <Suspense fallback={<SectionFallback />}>
          <ProjectCalculator />
        </Suspense>
        <div className="line-glow" />

        {/* 7. Step-by-step Delivery Process */}
        <Suspense fallback={<SectionFallback />}>
          <ProcessSection />
        </Suspense>
        <div className="line-glow" />

        {/* 8. Pricing Tables & Maintenance Plans */}
        <Suspense fallback={<SectionFallback />}>
          <PricingSection />
        </Suspense>
        <div className="line-glow" />

        {/* 9. Verified Client Social Proof & Testimonials */}
        <Suspense fallback={<SectionFallback />}>
          <SocialProofSection />
        </Suspense>
        <div className="line-glow" />

        {/* 10. Objection-killing Interactive FAQ */}
        <Suspense fallback={<SectionFallback />}>
          <FAQSection />
        </Suspense>
        <div className="line-glow" />

        {/* 11. Final High-Conversion CTA & Guarantee */}
        <Suspense fallback={<SectionFallback />}>
          <CTASection />
        </Suspense>
      </div>

      {/* Footer */}
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>

      {/* Floating Action Button */}
      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </main>
  );
};

export default Index;

