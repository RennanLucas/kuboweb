import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Servicos = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20" />
      <ServicesSection />
      <div className="section-divider" />
      <BenefitsSection />
      <div className="section-divider" />
      <ProcessSection />
      <div className="section-divider" />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Servicos;
