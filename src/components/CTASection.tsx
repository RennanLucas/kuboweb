import { memo } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const whatsappUrl = "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const CTASection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#05070b] px-4 py-16 text-white md:py-28 lg:py-44">
      <div className="pointer-events-none absolute inset-0">
        <motion.div animate={reduceMotion ? undefined : { x: [0, -60, 0], y: [0, 22, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-[30%] top-[-15%] h-[520px] w-[520px] rounded-full bg-[#2458d8]/18 blur-[160px] md:-right-[8%] md:top-[-30%] md:h-[850px] md:w-[850px] md:blur-[210px]" />
        <div className="absolute bottom-[-360px] left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-[50%] border border-[#91b5ff]/12 shadow-[0_-60px_150px_rgba(36,88,216,.1)] md:bottom-[-420px] md:h-[650px] md:w-[1200px]" />
      </div>

      <div className="container relative mx-auto max-w-[1460px]">
        <div className="flex items-center justify-between gap-4 border-t border-white/[.12] pt-5 text-[7px] font-semibold uppercase tracking-[.18em] text-white/[.3] md:pt-7 md:text-[8px] md:tracking-[.24em]">
          <span>Próximo projeto / Kubo Web</span>
          <span className="hidden sm:inline">Atendimento online · Brasil</span>
        </div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65, ease: [.16, 1, .3, 1] }} className="mt-10 max-w-[1260px] text-[3rem] font-heading font-semibold leading-[.9] tracking-[-.07em] sm:text-[4.5rem] md:mt-14 md:text-[6.5rem] lg:text-[8.4rem] lg:leading-[.82]">
          Seu site deveria<br /><span className="text-white/[.27]">trabalhar pela sua empresa.</span>
        </motion.h2>

        <div className="mt-10 grid gap-8 border-b border-white/[.12] pb-10 md:mt-14 md:gap-10 md:pb-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="max-w-[700px] text-[14px] leading-7 text-white/[.48] md:text-base md:leading-8 lg:text-lg">
              Se sua presença digital ainda não representa o nível do seu negócio, podemos mudar isso.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[7px] font-semibold uppercase tracking-[.15em] text-white/[.3] md:mt-8 md:gap-x-8 md:gap-y-3 md:text-[8px] md:tracking-[.17em]">
              <span>Estratégia</span><span>Direção visual</span><span>Desenvolvimento</span><span>Publicação</span>
            </div>
          </div>

          <div className="grid gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#07101f] transition-transform hover:-translate-y-1 md:min-h-[58px] md:px-7">
              Solicitar orçamento <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/[.14] px-6 text-sm font-semibold text-white/70 transition-colors hover:border-white/30 hover:text-white md:min-h-[58px] md:px-7">
              <MessageCircle className="h-4 w-4" /> Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(CTASection);
