import { memo } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const wa = "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#05070b] px-4 pb-16 pt-24 text-white md:pb-24 md:pt-32 lg:pb-28 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={reduceMotion ? undefined : { x: [0, 40, 0], y: [0, 24, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 -top-20 h-[520px] w-[520px] rounded-full bg-[#2458d8]/18 blur-[170px] md:-right-16 md:-top-36 md:h-[820px] md:w-[820px] md:blur-[220px]"
        />
        <div className="absolute inset-0 opacity-[.025] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute left-[-8%] top-[35%] h-px w-[116%] rotate-[-7deg] bg-gradient-to-r from-transparent via-[#6f9fff]/20 to-transparent" />
      </div>

      <div className="container mx-auto max-w-[1460px]">
        <div className="grid gap-12 lg:min-h-[720px] lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16 xl:min-h-[760px]">
          <div className="relative z-20 max-w-[760px]">
            <motion.div initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#7ea8ff]" />
              <p className="text-[8px] font-semibold uppercase tracking-[.24em] text-[#91b5ff] sm:text-[9px]">Kubo Web · Websites & digital presence</p>
            </motion.div>

            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .65, ease: [.16, 1, .3, 1] }}
              className="mt-5 max-w-[760px] text-[2.75rem] font-heading font-semibold leading-[.95] tracking-[-.06em] min-[390px]:text-[3rem] sm:text-[4.2rem] md:text-[5.2rem] lg:text-[5.7rem] xl:text-[6.5rem]"
            >
              Sites com presença.
              <span className="block text-white/[.28]">Design com direção.</span>
            </motion.h1>

            <p className="mt-6 max-w-[590px] text-[14px] leading-6 text-white/[.56] sm:text-[15px] sm:leading-7 md:mt-7 md:text-base md:leading-8">
              Criamos sites profissionais para empresas que querem transmitir mais confiança, organizar melhor sua presença digital e transformar visitas em oportunidades reais.
            </p>

            <div className="mt-7 grid gap-2.5 sm:flex sm:flex-wrap sm:gap-3 md:mt-8">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#07101f] transition-transform hover:-translate-y-0.5 sm:min-h-[52px] sm:px-6">
                Solicitar orçamento <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <Link to="/portfolio" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/[.13] px-5 text-sm font-semibold text-white/[.72] transition-colors hover:border-white/30 hover:text-white sm:min-h-[52px] sm:px-6">
                Ver projetos <ArrowDownRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/[.09] pt-5 sm:flex sm:gap-7 md:mt-12">
              <a href="https://www.helenaavilapsi.com.br/" target="_blank" rel="noopener noreferrer" className="group">
                <p className="text-[8px] font-semibold uppercase tracking-[.18em] text-white/25">Projeto publicado</p>
                <p className="mt-1.5 text-[12px] font-semibold text-white/72 transition-colors group-hover:text-white">Helena Ávila ↗</p>
              </a>
              <a href="https://cristiano-avila-site.vercel.app/" target="_blank" rel="noopener noreferrer" className="group sm:border-l sm:border-white/[.09] sm:pl-7">
                <p className="text-[8px] font-semibold uppercase tracking-[.18em] text-white/25">Projeto publicado</p>
                <p className="mt-1.5 text-[12px] font-semibold text-white/72 transition-colors group-hover:text-white">Cristiano Ávila ↗</p>
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[560px] lg:block">
            <div className="absolute inset-[8%_5%_4%_8%] rounded-[54px] border border-white/[.09] bg-white/[.025] backdrop-blur-sm" />
            <div className="absolute left-[16%] top-[16%] h-[360px] w-[360px] rounded-full border border-[#6f9fff]/20" />
            <motion.div
              animate={reduceMotion ? undefined : { rotate: [0, 360] }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              className="absolute left-[16%] top-[16%] h-[360px] w-[360px] rounded-full"
            >
              <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#7ea8ff] shadow-[0_0_30px_rgba(126,168,255,.9)]" />
            </motion.div>

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-3, -1.5, -3] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[11%] top-[24%] flex h-[260px] w-[260px] items-center justify-center rounded-[52px] border border-white/[.1] bg-[#0a1220]/90 shadow-[0_40px_120px_rgba(0,0,0,.38)]"
            >
              <span className="select-none text-[10rem] font-heading font-semibold leading-none tracking-[-.15em] text-white">K</span>
            </motion.div>

            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 10, 0], rotate: [3, 1.5, 3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[13%] right-[2%] w-[310px] rounded-[32px] border border-white/[.1] bg-white/[.055] p-6 shadow-[0_30px_100px_rgba(0,0,0,.28)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between text-[8px] font-semibold uppercase tracking-[.18em] text-white/28"><span>Kubo system</span><span>01 / 03</span></div>
              <p className="mt-8 max-w-[240px] text-2xl font-heading font-semibold leading-[1.05] tracking-[-.045em] text-white">Strategy<br />Design<br />Development</p>
              <div className="mt-8 flex gap-2"><span className="h-1.5 flex-1 rounded-full bg-[#7ea8ff]" /><span className="h-1.5 flex-1 rounded-full bg-white/10" /><span className="h-1.5 flex-1 rounded-full bg-white/10" /></div>
            </motion.div>

            <div className="absolute bottom-[5%] left-[9%] text-[8px] font-semibold uppercase tracking-[.2em] text-white/22">Digital direction · Kubo Web</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
