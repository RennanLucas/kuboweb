import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HomeHeroSection from "@/components/HomeHeroSection";
import StatsSection from "@/components/StatsSection";
import SEO from "@/components/SEO";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const PortfolioPreviewSection = lazy(() => import("@/components/PortfolioPreviewSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));

const SectionFallback = () => <div className="py-24" />;

const Index = () => {
  return (
    <main className="min-h-screen bg-background bg-gradient-mesh bg-noise">
      <SEO
        title="Kubo Web | Criação de Sites Profissionais"
        description="Criação de sites profissionais, landing pages e lojas virtuais para empresas em todo o Brasil. Design responsivo, performance, SEO técnico e atendimento direto pelo WhatsApp."
        path="/"
      />

      <Header />
      <HomeHeroSection />

      <div className="line-glow" />
      <StatsSection />

      <div className="line-glow" />
      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
      </Suspense>

      <div className="line-glow" />
      <Suspense fallback={<SectionFallback />}>
        <PortfolioPreviewSection />
      </Suspense>

      <div className="line-glow" />
      <Suspense fallback={<SectionFallback />}>
        <ProcessSection />
      </Suspense>

      <div className="line-glow" />
      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>

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
