import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SEO from "@/components/SEO";
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));

const ServicesSection = lazy(() => import("@/components/ServicesSection"));

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
      <Header />
      <HeroSection />
      <div className="line-glow" />
      <StatsSection />
      <div className="line-glow" />
      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
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
