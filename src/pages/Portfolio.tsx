import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import RealWorkSection from "@/components/RealWorkSection";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { ArrowDownRight, ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Portfólio"
        description="Conheça projetos publicados pela Kubo Web e abra os sites para conferir o trabalho real."
        path="/portfolio"
      />
      <Header />

      <section className="relative isolate overflow-hidden bg-[#050a13] px-4 pb-24 pt-36 text-white md:pb-32 md:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[5%] top-[-320px] h-[780px] w-[780px] rounded-full bg-[#326cff]/[0.2] blur-[190px]" />
          <div className="absolute right-[-12%] top-[14%] h-[620px] w-[620px] rounded-full bg-[#8db6ff]/[0.08] blur-[190px]" />
          <div className="absolute inset-0 opacity-[0.075] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="container mx-auto max-w-[1380px]">
          <div className="grid gap-14 xl:grid-cols-[.94fr_1.06fr] xl:items-center xl:gap-16">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8db6ff]">
                <Sparkles className="h-3.5 w-3.5" />
                Selected work · Live projects
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .65, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 max-w-[900px] text-[3.45rem] font-heading font-semibold leading-[.89] tracking-[-0.075em] sm:text-7xl md:text-[6.2rem] lg:text-[7rem]"
              >
                Trabalho real.
                <span className="block text-white/[0.3]">Abra. Navegue. Julgue.</span>
              </motion.h1>
              <p className="mt-8 max-w-[690px] text-base leading-8 text-white/[0.47] md:text-lg">
                O portfólio da Kubo Web mostra projetos publicados e acessíveis. Sem case inventado, métrica decorativa ou mockup usado como substituto do trabalho real.
              </p>
              <a href="#projetos" className="mt-10 inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-6 text-sm font-semibold text-white/[0.72] transition-all hover:border-white/[0.24] hover:text-white">
                Explorar projetos
                <ArrowDownRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative grid gap-4 sm:grid-cols-2">
              <motion.a
                href="https://www.helenaavilapsi.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, rotate: -1.5 }}
                animate={{ opacity: 1, y: 0, rotate: -1.5 }}
                transition={{ delay: .08, duration: .7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -7, rotate: -.4 }}
                className="group relative overflow-hidden rounded-[30px] border border-white/[0.1] bg-[#f0ede7] p-5 text-[#26302b] shadow-[0_36px_100px_rgba(0,0,0,.28)] sm:mt-10 md:p-6"
              >
                <div className="flex items-center justify-between text-[8px] font-semibold uppercase tracking-[0.18em] text-black/[0.28]"><span>01 · Live website</span><ExternalLink className="h-3.5 w-3.5" /></div>
                <div className="mt-9 rounded-[22px] border border-black/[0.06] bg-white/55 p-4">
                  <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-black/[0.1]" /><span className="h-2 w-2 rounded-full bg-black/[0.1]" /><span className="h-2 w-2 rounded-full bg-black/[0.1]" /></div>
                  <p className="mt-10 font-serif text-4xl leading-[.93] tracking-[-0.055em]">Helena Ávila</p>
                  <p className="mt-4 text-xs leading-6 text-black/[0.42]">Psicoterapia · presença digital acolhedora e objetiva.</p>
                  <div className="mt-7 h-10 rounded-full bg-[#586f64]" />
                </div>
                <div className="mt-6 flex items-end justify-between gap-4"><div><p className="text-lg font-heading font-semibold tracking-[-0.035em]">Helena Ávila</p><p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-black/[0.3]">helenaavilapsi.com.br</p></div><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#26302b] text-white"><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span></div>
              </motion.a>

              <motion.a
                href="https://cristiano-avila-site.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, rotate: 1.5 }}
                animate={{ opacity: 1, y: 0, rotate: 1.5 }}
                transition={{ delay: .15, duration: .7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -7, rotate: .4 }}
                className="group relative overflow-hidden rounded-[30px] border border-white/[0.1] bg-[#0b1525] p-5 text-white shadow-[0_36px_100px_rgba(0,0,0,.34)] md:p-6"
              >
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#326cff]/20 blur-[90px]" />
                <div className="relative flex items-center justify-between text-[8px] font-semibold uppercase tracking-[0.18em] text-white/[0.28]"><span>02 · Live website</span><ExternalLink className="h-3.5 w-3.5" /></div>
                <div className="relative mt-9 rounded-[22px] border border-white/[0.08] bg-white/[0.035] p-4">
                  <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-white/[0.12]" /><span className="h-2 w-2 rounded-full bg-white/[0.12]" /><span className="h-2 w-2 rounded-full bg-white/[0.12]" /></div>
                  <p className="mt-10 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#8db6ff]">Professional website</p>
                  <p className="mt-3 text-4xl font-heading font-semibold leading-[.93] tracking-[-0.055em]">Cristiano Ávila</p>
                  <p className="mt-4 text-xs leading-6 text-white/[0.38]">Interface direta, responsiva e construída para apresentar o profissional com clareza.</p>
                  <div className="mt-7 grid grid-cols-3 gap-2">{[0,1,2].map(i => <div key={i} className="h-14 rounded-[12px] bg-white/[0.05]" />)}</div>
                </div>
                <div className="relative mt-6 flex items-end justify-between gap-4"><div><p className="text-lg font-heading font-semibold tracking-[-0.035em]">Cristiano Ávila</p><p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/[0.26]">cristiano-avila-site.vercel.app</p></div><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#07101f]"><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span></div>
              </motion.a>
            </div>
          </div>

          <div className="mt-16 grid border-y border-white/[0.1] sm:grid-cols-3 md:mt-24">
            {["Projetos publicados", "Links verificáveis", "Desktop + mobile"].map((item, index) => <div key={item} className={`flex items-center gap-4 py-5 sm:px-5 ${index > 0 ? "sm:border-l sm:border-white/[0.1]" : ""}`}><span className="text-[9px] font-semibold text-[#8db6ff]">0{index + 1}</span><span className="text-xs font-medium text-white/[0.48]">{item}</span></div>)}
          </div>
        </div>
      </section>

      <div id="projetos">
        <RealWorkSection />
      </div>
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Portfolio;
