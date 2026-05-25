import Header from "@/components/Header";
import FAQSection, { faqs } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Faq = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Perguntas Frequentes"
        description="Tire suas dúvidas sobre criação de sites, prazos, preços e processo de trabalho da Kubo Web. FAQ completo."
        path="/faq"
        jsonLd={faqJsonLd}
      />
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
