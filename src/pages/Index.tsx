import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SEO from "@/components/SEO";
import { faqs } from "@/components/FAQSection";

const ClientLogosSection = lazy(() => import("@/components/ClientLogosSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const CasesSection = lazy(() => import("@/components/CasesSection"));
const ComparisonSection = lazy(() => import("@/components/ComparisonSection"));
const AudienceSection = lazy(() => import("@/components/AudienceSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const SocialProofSection = lazy(() => import("@/components/SocialProofSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp"));

const SectionFallback = () => <div className="py-20" />;

// Schema.org FAQPage structured data for rich snippet display on Google
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
    <main className="min-h-screen bg-background bg-gradient-mesh bg-noise selection:bg-primary/20 selection:text-primary">
      <SEO
        title="Kubo Web | Criação de Sites Profissionais e Landing Pages que Vendem"
        description="Agência especializada em criação de sites profissionais, landing pages de alta conversão e lojas virtuais no Brasil. Design exclusivo, foco em vendas e atendimento direto via WhatsApp."
        path="/"
        jsonLd={faqSchema}
      />

      {/* 01. Header com Navegação e Contato */}
      <Header />

      {/* 02. Hero Section de Alta Conversão */}
      <HeroSection />

      {/* 03. Prova Social Instantânea (Logos de Clientes e Nichos Atendidos) */}
      <Suspense fallback={<SectionFallback />}>
        <ClientLogosSection />
      </Suspense>

      <div className="line-glow" />

      {/* 04. Indicadores de Performance e Métricas Reais */}
      <StatsSection />

      <div className="line-glow" />

      {/* 05. Portfólio de Serviços Estratégicos */}
      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
      </Suspense>

      <div className="line-glow" />

      {/* 06. Bento Grid de Diferenciais e Performance */}
      <Suspense fallback={<SectionFallback />}>
        <BenefitsSection />
      </Suspense>

      <div className="line-glow" />

      {/* 07. Casos Reais de Sucesso (Antes vs Depois com ROI) */}
      <Suspense fallback={<SectionFallback />}>
        <CasesSection />
      </Suspense>

      <div className="line-glow" />

      {/* 08. Tabela Comparativa Matadora (Kubo Web vs Mercado Amador/Pronto) */}
      <Suspense fallback={<SectionFallback />}>
        <ComparisonSection />
      </Suspense>

      <div className="line-glow" />

      {/* 09. Segmentos e Especialidades (Para quem é) */}
      <Suspense fallback={<SectionFallback />}>
        <AudienceSection />
      </Suspense>

      <div className="line-glow" />

      {/* 10. Metodologia e Processo em 3 Etapas Sem Burocracia */}
      <Suspense fallback={<SectionFallback />}>
        <ProcessSection />
      </Suspense>

      <div className="line-glow" />

      {/* 11. Planos e Preços Transparentes */}
      <Suspense fallback={<SectionFallback />}>
        <PricingSection />
      </Suspense>

      <div className="line-glow" />

      {/* 12. Depoimentos e Avaliações de Clientes Reais */}
      <Suspense fallback={<SectionFallback />}>
        <SocialProofSection />
      </Suspense>

      <div className="line-glow" />

      {/* 13. FAQ com Quebra de Objeções + Schema.org */}
      <Suspense fallback={<SectionFallback />}>
        <FAQSection />
      </Suspense>

      <div className="line-glow" />

      {/* 14. Mega CTA de Fechamento com Garantia */}
      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>

      {/* 15. Rodapé Completo */}
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>

      {/* 16. Botão Flutuante de Conversão Imediata (WhatsApp) */}
      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </main>
  );
};

export default Index;
