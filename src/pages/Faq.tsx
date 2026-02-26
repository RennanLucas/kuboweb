import Header from "@/components/Header";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Faq = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20" />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Faq;
