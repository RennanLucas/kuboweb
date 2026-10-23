import Header from "@/components/Header";
import FAQSection, { faqs } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowDownRight } from "lucide-react";

const Faq = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Perguntas Frequentes"
        description="Dúvidas sobre criação de sites, preços, prazos, SEO, publicação e manutenção na Kubo Web."
        path="/faq"
        jsonLd={faqJsonLd}
      />
      <Header />

      <section className="relative isolate overflow-hidden bg-[#07101f] px-4 pb-20 pt-36 text-white md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-44 top-0 h-[640px] w-[640px] rounded-full bg-blue-600/18 blur-[190px]" />
          <div className="absolute -right-48 top-[-120px] h-[720px] w-[720px] rounded-full bg-cyan-400/8 blur-[220px]" />
        </div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#78a9ff]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/42">FAQ · Before we build</span>
              </div>
              <h1 className="max-w-5xl text-[3.2rem] font-heading font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Sem letras pequenas.
                <span className="block text-[#78a9ff]">Perguntas antes de começar.</span>
              </h1>
            </div>
            <div className="lg:justify-self-end lg:max-w-[430px]">
              <p className="text-base leading-8 text-white/52 md:text-lg">Preço, prazo, SEO, conteúdo, publicação e manutenção: os pontos que normalmente precisam ficar claros antes de fechar um projeto.</p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/32">Ver respostas <ArrowDownRight className="h-4 w-4" /></div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Faq;
