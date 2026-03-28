import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";


const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const SocialProofSection = lazy(() => import("@/components/SocialProofSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => <div className="py-24" />;

const Index = () => {
  return (
    <main className="min-h-screen bg-background bg-gradient-mesh bg-noise">
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
        <SocialProofSection />
      </Suspense>
      <div className="line-glow" />
      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <FloatingWhatsApp />
      
    </main>
  );
};

export default Index;
