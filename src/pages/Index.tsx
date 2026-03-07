import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div className="section-divider" />
      <StatsSection />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <SocialProofSection />
      <div className="section-divider" />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
