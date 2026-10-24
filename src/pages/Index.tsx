import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SEO from "@/components/SEO";
import RealWorkSection from "@/components/RealWorkSection";
import TrustStrip from "@/components/TrustStrip";
import { faqs } from "@/data/faqs";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const DifferentialsSection = lazy(() => import("@/components/DifferentialsSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));

const Fallback = () => <div className="min-h-[80px]" />;
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const Index = () => (
  <main className="min-h-screen bg-white selection:bg-[#78a7ff]/30 selection:text-[#08111f]">
    <SEO
      title="Kubo Web | Sites profissionais para empresas"
      description="Landing pages, sites institucionais, lojas virtuais e soluções digitais com direção visual, performance e experiência responsiva."
      path="/"
      jsonLd={faqSchema}
    />
    <Header />
    <HeroSection />
    <TrustStrip />
    <div id="projetos"><RealWorkSection /></div>
    <Suspense fallback={<Fallback />}>
      <ServicesSection />
      <DifferentialsSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </Suspense>
    <Suspense fallback={null}><FloatingWhatsApp /></Suspense>
  </main>
);

export default Index;
