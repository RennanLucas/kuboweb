import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SocialProofPopup from "@/components/SocialProofPopup";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background bg-gradient-mesh bg-noise">
      <Header />
      <HeroSection />
      <div className="line-glow" />
      <StatsSection />
      <div className="line-glow" />
      <ServicesSection />
      <div className="line-glow" />
      <SocialProofSection />
      <div className="line-glow" />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
      <SocialProofPopup />
      <ExitIntentPopup />
    </main>
  );
};

export default Index;