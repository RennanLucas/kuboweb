import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SEO from "@/components/SEO";
import RealWorkSection from "@/components/RealWorkSection";
import { faqs } from "@/data/faqs";

const StackRailSection = lazy(() => import("@/components/StackRailSection"));
const StudioShowcaseSection = lazy(() => import("@/components/StudioShowcaseSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ComparisonSection = lazy(() => import("@/components/ComparisonSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));

const SectionFallback = () => <div className="min-h-[160px] bg-transparent" />;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background selection:bg-[#78a7ff]/30 selection:text-foreground">
      <SEO title="Kubo Web | Sites profissionais para negócios que querem crescer" description="Criação de sites profissionais, landing pages e lojas virtuais com direção visual, experiência responsiva e desenvolvimento sob medida." path="/" jsonLd={faqSchema} />

      <Header />
      <HeroSection />
      <RealWorkSection />
      <Suspense fallback={<SectionFallback />}><StudioShowcaseSection /></Suspense>
      <Suspense fallback={<div className="h-[58px] bg-[#f7f8fa]" />}><StackRailSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><ServicesSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><ComparisonSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><ProcessSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><PricingSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><FAQSection /></Suspense>
      <Suspense fallback={<SectionFallback />}><CTASection /></Suspense>
      <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
      <Suspense fallback={null}><FloatingWhatsApp /></Suspense>
    </main>
  );
};

export default Index;
