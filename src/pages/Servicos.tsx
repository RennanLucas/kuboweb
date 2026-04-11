import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Servicos = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO title="Serviços" description="Sites institucionais, landing pages, lojas virtuais e Google Ads. Soluções digitais sob medida para transformar sua presença online." path="/servicos" />
      <Header />
      <PageHero
        title="Nossos Serviços"
        subtitle="Soluções digitais sob medida para transformar sua presença online em resultados reais."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Serviços" },
        ]}
      />
      <div className="line-glow" />
      <ServicesSection />
      <div className="line-glow" />
      <BenefitsSection />
      <div className="line-glow" />
      <ProcessSection />
      <div className="line-glow" />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Servicos;
