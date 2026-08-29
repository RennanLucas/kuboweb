import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SEO from "@/components/SEO";

const TechStackMarquee = lazy(() => import("@/components/TechStackMarquee"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ComparisonSection = lazy(() => import("@/components/ComparisonSection"));
const BeforeAfterSlider = lazy(() => import("@/components/BeforeAfterSlider"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const RoiCalculator = lazy(() => import("@/components/RoiCalculator"));
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
        {/* 1. Hero — Cinematic centered hero with rotating headline + count-up stats */}
        <HeroSection />
        <div className="section-transition" />

        {/* 2. Authority Marquee — Stats ticker */}
        <StatsSection />
        <div className="section-transition" />

        {/* 3. Tech Stack Marquee — Infinite scroll of tech badges */}
        <Suspense fallback={<SectionFallback />}>
          <TechStackMarquee />
        </Suspense>

        {/* 4. Services — Bento Grid with pricing */}
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
        <div className="section-transition" />

        {/* 5. Comparison — Why amateur sites don't sell */}
        <Suspense fallback={<SectionFallback />}>
          <ComparisonSection />
        </Suspense>
        <div className="section-transition" />

        {/* 6. Interactive Before/After Slider — Drag to compare */}
        <Suspense fallback={<SectionFallback />}>
          <BeforeAfterSlider />
        </Suspense>
        <div className="section-transition" />

        {/* 7. Portfolio — Filterable case studies with ROI metrics */}
        <Suspense fallback={<SectionFallback />}>
          <PortfolioSection />
        </Suspense>
        <div className="section-transition" />

        {/* 8. ROI Calculator — How much revenue are you leaving on the table? */}
        <Suspense fallback={<SectionFallback />}>
          <RoiCalculator />
        </Suspense>
        <div className="section-transition" />

        {/* 9. Project Calculator — Configure your project + WhatsApp */}
        <Suspense fallback={<SectionFallback />}>
          <ProjectCalculator />
        </Suspense>
        <div className="section-transition" />

        {/* 10. Process — 4-step premium timeline */}
        <Suspense fallback={<SectionFallback />}>
          <ProcessSection />
        </Suspense>
        <div className="section-transition" />

        {/* 11. Pricing — Plans with tabs */}
        <Suspense fallback={<SectionFallback />}>
          <PricingSection />
        </Suspense>
        <div className="section-transition" />

        {/* 12. Social Proof — Verified testimonials */}
        <Suspense fallback={<SectionFallback />}>
          <SocialProofSection />
        </Suspense>
        <div className="section-transition" />

        {/* 13. FAQ — Objection-killing accordion */}
        <Suspense fallback={<SectionFallback />}>
          <FAQSection />
        </Suspense>
        <div className="section-transition" />

        {/* 14. Final CTA — Urgency + guarantee + WhatsApp */}
        <Suspense fallback={<SectionFallback />}>
          <CTASection />
        </Suspense>
      </div>

      {/* Footer */}
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>

      {/* Floating WhatsApp Button */}
      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </main>
  );
};

export default Index;
