import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Precos = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20" />
      <PricingSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Precos;
