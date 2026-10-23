import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import RealWorkSection from "@/components/RealWorkSection";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { ArrowDownRight, ExternalLink } from "lucide-react";

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Portfólio"
        description="Conheça projetos publicados pela Kubo Web e abra os sites para conferir o trabalho real."
        path="/portfolio"
      />
      <Header />

      <section className="relative isolate overflow-hidden bg-[#07101f] px-4 pb-20 pt-36 text-white md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[620px] w-[620px] rounded-full bg-blue-600/18 blur-[180px]" />
          <div className="absolute -right-44 top-[-120px] h-[700px] w-[700px] rounded-full bg-cyan-400/8 blur-[210px]" />
          <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#78a9ff]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/42">Selected work · Live projects</span>
              </div>
              <h1 className="max-w-5xl text-[3.25rem] font-heading font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                Trabalho que você pode
                <span className="block text-[#78a9ff]">abrir e conferir.</span>
              </h1>
            </div>

            <div className="lg:justify-self-end lg:max-w-[430px]">
              <p className="text-base leading-8 text-white/52 md:text-lg">
                Portfólio com projetos publicados pela Kubo Web. Sem cases genéricos, sem números decorativos e sem resultados que não possam ser sustentados.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://www.helenaavilapsi.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2.5 text-xs font-semibold text-white/72 transition-colors hover:border-white/30 hover:text-white"
                >
                  Helena Ávila
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://cristiano-avila-site.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2.5 text-xs font-semibold text-white/72 transition-colors hover:border-white/30 hover:text-white"
                >
                  Cristiano Ávila
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-center gap-3 border-t border-white/10 pt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/32 md:mt-24">
            Explore os projetos
            <ArrowDownRight className="h-4 w-4" />
          </div>
        </div>
      </section>

      <RealWorkSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Portfolio;
