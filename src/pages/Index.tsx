import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SEO from "@/components/SEO";
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));

const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const SocialProofSection = lazy(() => import("@/components/SocialProofSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));

const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => <div className="py-24" />;

const Index = () => {
  return (
    <main className="min-h-screen bg-background bg-gradient-mesh bg-noise">
      <SEO
        title="Kubo Web | Criação de Sites Profissionais no Brasil"
        description="Criação de sites profissionais em todo o Brasil. Sites institucionais, landing pages que convertem, lojas virtuais e Google Ads. Atendimento 100% online via WhatsApp."
        path="/"
      />
      <a href="#main-content" className="skip-to-content">
        Pular para o conteúdo
      </a>
      <Header />
      <div id="main-content">
        <HeroSection />
        <div className="line-glow" />
        <StatsSection />
        <div className="line-glow" />
        <Suspense fallback={<SectionFallback />}>
          <ProcessSection />
        </Suspense>
        <div className="line-glow" />
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
        <div className="line-glow" />
        <Suspense fallback={<SectionFallback />}>
          <SocialProofSection />
        </Suspense>
        <div className="line-glow" />
        <Suspense fallback={<SectionFallback />}>
          <PricingSection />
        </Suspense>
        <div className="line-glow" />
        <Suspense fallback={<SectionFallback />}>
          <CTASection />
        </Suspense>
      </div>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </main>
  );
};

export default Index;

