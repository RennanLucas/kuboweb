import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Servicos = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20" />
      <ServicesSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Servicos;
