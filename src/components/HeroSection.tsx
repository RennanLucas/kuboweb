import { memo, useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import LiveProjectFrame from "@/components/LiveProjectFrame";

const wa = "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const projects = [
  { title: "Helena Ávila", domain: "helenaavilapsi.com.br", url: "https://www.helenaavilapsi.com.br/", label: "Psicoterapia · Site profissional" },
  { title: "Cristiano Ávila", domain: "cristiano-avila-site.vercel.app", url: "https://cristiano-avila-site.vercel.app/", label: "Profissional · Site responsivo" },
] as const;

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const project = projects[active];

  return (
    <section className="relative isolate overflow-hidden bg-[#05070b] px-4 pb-14 pt-24 text-white sm:pt-28 md:pb-24 md:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={reduceMotion ? undefined : { x: [0, 55, 0], y: [0, 28, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-[45%] -top-[12%] h-[620px] w-[620px] rounded-full bg-[#2f65ff]/[.14] blur-[170px] md:-right-[12%] md:-top-[24%] md:h-[950px] md:w-[950px] md:blur-[220px]"
        />
        <div className="absolute inset-0 opacity-[.032] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:64px_64px] md:[background-size:96px_96px]" />
      </div>

      <div className="container mx-auto max-w-[1460px]">
        <div className="grid gap-12 xl:min-h-[calc(100vh-8rem)] xl:grid-cols-[.78fr_1.22fr] xl:items-center xl:gap-16">
          <div className="relative z-30 max-w-[760px]">
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-[8px] font-semibold uppercase tracking-[.26em] text-[#91b5ff] sm:text-[9px] sm:tracking-[.3em]">
              Kubo Web · Estratégia, design e desenvolvimento
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .65, ease: [.16, 1, .3, 1] }}
              className="mt-5 max-w-[780px] text-[2.85rem] font-heading font-semibold leading-[.93] tracking-[-.065em] min-[390px]:text-[3.15rem] sm:mt-7 sm:text-[4.5rem] lg:text-[6.15rem] lg:leading-[.88]"
            >
              Sites que fazem sua empresa <span className="text-white/[.32]">parecer profissional de verdade.</span>
            </motion.h1>

            <p className="mt-6 max-w-[570px] text-[14px] leading-6 text-white/[.56] sm:mt-8 sm:text-[15px] sm:leading-7 md:text-base md:leading-8">
              Criamos sites modernos, rápidos e estratégicos para fortalecer sua presença digital e transformar visitas em oportunidades.
            </p>

            <div className="mt-7 grid gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#07101f] transition-transform hover:-translate-y-1 sm:min-h-[54px] sm:justify-start sm:px-6">
                Solicitar orçamento <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link to="/portfolio" className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/[.14] px-5 text-sm font-semibold text-white/[.72] transition-colors hover:border-white/30 hover:text-white sm:min-h-[54px] sm:justify-start sm:px-6">
                Ver projetos <ArrowDownRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-4 border-t border-white/[.09] pt-4 sm:mt-12 sm:gap-5 sm:pt-5">
              <span className="hidden text-[8px] font-semibold uppercase tracking-[.18em] text-white/25 sm:block">Em destaque</span>
              {projects.map((item, index) => (
                <button key={item.title} onClick={() => setActive(index)} className={`group flex items-center gap-2 text-[11px] font-semibold transition-colors sm:text-xs ${active === index ? "text-white" : "text-white/30 hover:text-white/60"}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${active === index ? "bg-[#91b5ff]" : "bg-white/15"}`} />
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div className="relative min-h-[390px] sm:min-h-[620px] lg:min-h-[760px] xl:min-h-[800px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.url}
                initial={{ opacity: 0, scale: .98, x: 18 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: .985, x: -12 }}
                transition={{ duration: .55, ease: [.16, 1, .3, 1] }}
                className="absolute inset-0"
              >
                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-x-0 top-0 overflow-hidden rounded-[24px] border border-white/[.08] bg-[#0b111b] p-1.5 shadow-[0_40px_120px_rgba(0,0,0,.45)] sm:left-[2%] sm:right-[-5%] sm:top-[4%] sm:rounded-[34px] sm:p-2.5 md:rounded-[42px] md:p-3"
                >
                  <div className="hidden h-8 items-center gap-1.5 px-3 sm:flex">
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/10" />
                    <span className="h-2 w-2 rounded-full bg-white/10" />
                    <span className="ml-3 text-[8px] font-medium text-white/25">{project.domain}</span>
                  </div>
                  <LiveProjectFrame
                    url={project.url}
                    title={project.title}
                    domain={project.domain}
                    eager
                    viewportClassName="min-h-[340px] sm:min-h-[500px] lg:min-h-[630px]"
                    className="rounded-[19px] sm:rounded-[26px] md:rounded-[32px]"
                  />
                </motion.div>

                <motion.div animate={reduceMotion ? undefined : { y: [0, 10, 0], rotate: [-4, -2.5, -4] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[1%] left-[-1%] z-20 hidden w-[210px] overflow-hidden rounded-[30px] border-[6px] border-[#090e16] bg-[#090e16] shadow-[0_35px_90px_rgba(0,0,0,.5)] sm:block md:w-[245px]">
                  <LiveProjectFrame url={project.url} title={project.title} domain={project.domain} compact viewportClassName="min-h-[380px]" className="rounded-[22px] border-0 shadow-none" />
                </motion.div>

                <div className="absolute bottom-[2%] right-[17%] z-30 hidden max-w-[220px] border-l border-white/[.14] pl-4 xl:block">
                  <p className="text-[8px] font-semibold uppercase tracking-[.18em] text-[#91b5ff]">Projeto real / 0{active + 1}</p>
                  <p className="mt-2 text-lg font-heading font-semibold tracking-[-.04em]">{project.title}</p>
                  <p className="mt-1 text-[10px] leading-5 text-white/35">{project.label}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
