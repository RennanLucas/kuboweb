import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SEO from "@/components/SEO";
import RealWorkSection from "@/components/RealWorkSection";
import { faqs } from "@/data/faqs";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));

const SectionFallback = () => <div className="py-16" />;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/15 selection:text-foreground">
      <SEO
        title="Kubo Web | Sites profissionais para negócios que querem crescer"
        description="Criação de sites profissionais, landing pages e lojas virtuais com design atual, navegação clara e foco em gerar contatos para o seu negócio."
        path="/"
        jsonLd={faqSchema}
      />

      <Header />
      <HeroSection />
      <RealWorkSection />

      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <BenefitsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ProcessSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <PricingSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FAQSection />
      </Suspense>

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
