import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Check, Layers3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const capabilityRows = [
  ["01", "Sites institucionais", "Marca / autoridade", "/servicos/sites-institucionais"],
  ["02", "Landing pages", "Campanha / conversão", "/servicos/landing-pages"],
  ["03", "Lojas virtuais", "Catálogo / compra", "/servicos/loja-virtual"],
  ["04", "Google Ads", "Busca / aquisição", "/servicos/anuncios"],
] as const;

const Servicos = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Serviços"
        description="Sites institucionais, landing pages, lojas virtuais e Google Ads com estratégia, design e desenvolvimento sob medida."
        path="/servicos"
      />
      <Header />

      <section className="relative isolate overflow-hidden bg-[#050a13] px-4 pb-24 pt-36 text-white md:pb-32 md:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[7%] top-[-310px] h-[780px] w-[780px] rounded-full bg-[#326cff]/[0.2] blur-[190px]" />
          <div className="absolute right-[-12%] top-[12%] h-[620px] w-[620px] rounded-full bg-[#8db6ff]/[0.08] blur-[190px]" />
          <div className="absolute inset-0 opacity-[0.075] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="container mx-auto max-w-[1380px]">
          <div className="grid gap-14 xl:grid-cols-[1.03fr_.97fr] xl:items-center xl:gap-16">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8db6ff]">
                <Sparkles className="h-3.5 w-3.5" />
                Capabilities · Kubo Web
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .65, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 max-w-[900px] text-[3.45rem] font-heading font-semibold leading-[.89] tracking-[-0.075em] sm:text-7xl md:text-[6.2rem] lg:text-[7rem]"
              >
                Um sistema digital,
                <span className="block text-white/[0.3]">não uma lista de serviços.</span>
              </motion.h1>
              <p className="mt-8 max-w-[690px] text-base leading-8 text-white/[0.47] md:text-lg">
                Site, landing page, e-commerce e mídia precisam conversar. A Kubo Web define o formato a partir do objetivo e conecta mensagem, experiência e aquisição no mesmo raciocínio.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/diagnostico" className="group inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#07101f] transition-all hover:-translate-y-0.5 hover:bg-[#edf3ff]">
                  Encontrar o formato ideal
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <a href="#servicos" className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-6 text-sm font-semibold text-white/[0.72] transition-all hover:border-white/[0.24] hover:text-white">
                  Ver capacidades
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28, rotateX: 5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: .08, duration: .75, ease: [0.16, 1, 0.3, 1] }}
              className="relative [perspective:1400px]"
            >
              <div className="pointer-events-none absolute -inset-10 rounded-full bg-[#326cff]/10 blur-[90px]" />
              <div className="relative overflow-hidden rounded-[34px] border border-white/[0.1] bg-white/[0.055] p-5 shadow-[0_42px_120px_rgba(0,0,0,.35)] backdrop-blur-xl md:p-6">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                  <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#9ae7cc] shadow-[0_0_18px_rgba(154,231,204,.55)]" /><span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.34]">Capability map</span></div>
                  <Layers3 className="h-4 w-4 text-[#8db6ff]" />
                </div>

                <div className="mt-5 space-y-2">
                  {capabilityRows.map(([number, name, role, href], index) => (
                    <Link key={number} to={href} className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[20px] border border-white/[0.07] bg-black/[0.1] p-4 transition-all hover:border-white/[0.15] hover:bg-white/[0.055]">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-full text-[9px] font-semibold ${index === 1 ? "bg-[#8db6ff] text-[#07101f]" : "bg-white/[0.05] text-white/[0.34]"}`}>{number}</span>
                      <div>
                        <p className="text-sm font-semibold text-white/[0.74]">{name}</p>
                        <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/[0.26]">{role}</p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-white/[0.28] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#8db6ff]" />
                    </Link>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {["Estratégia", "Direção visual", "Desenvolvimento"].map((item, index) => (
                    <div key={item} className="rounded-[18px] border border-white/[0.07] bg-white/[0.03] p-4">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9ae7cc]/10 text-[#9ae7cc]"><Check className="h-3 w-3" /></span>
                      <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/[0.42]">0{index + 1}</p>
                      <p className="mt-1 text-xs font-medium text-white/[0.62]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-6 -right-4 hidden rounded-[18px] border border-white/[0.1] bg-[#0b1525]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/[0.24]">Rule</p>
                <p className="mt-1 text-xs font-medium text-white/[0.62]">Objetivo → formato → execução</p>
              </motion.div>
            </motion.div>
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
