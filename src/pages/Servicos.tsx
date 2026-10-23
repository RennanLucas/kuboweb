import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowDownRight } from "lucide-react";

const Servicos = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Serviços"
        description="Sites institucionais, landing pages, lojas virtuais e Google Ads com estratégia, design e desenvolvimento sob medida."
        path="/servicos"
      />
      <Header />

      <section className="relative isolate overflow-hidden bg-[#07101f] px-4 pb-20 pt-36 text-white md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-0 h-[620px] w-[620px] rounded-full bg-blue-600/18 blur-[180px]" />
          <div className="absolute -right-48 top-[-120px] h-[720px] w-[720px] rounded-full bg-cyan-400/8 blur-[220px]" />
          <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#78a9ff]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/42">Capabilities · Kubo Web</span>
              </div>
              <h1 className="max-w-5xl text-[3.25rem] font-heading font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.6rem]">
                Do posicionamento ao
                <span className="block text-[#78a9ff]">site no ar.</span>
              </h1>
            </div>

            <div className="lg:justify-self-end lg:max-w-[430px]">
              <p className="text-base leading-8 text-white/52 md:text-lg">
                A Kubo Web conecta estratégia, design, desenvolvimento e aquisição para construir uma presença digital coerente do primeiro acesso até o contato.
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/32">
                Sites · Landing pages · E-commerce · Ads
                <ArrowDownRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Servicos;
