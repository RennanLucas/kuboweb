import { memo, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const words = ["Estratégia", "Direção", "Interação", "Código"];

const AgencyStatementSection = () => {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["7%", "-9%"]);
  const xReverse = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-6%", "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#05080d] py-28 text-white md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[18%] top-[-30%] h-[620px] w-[620px] rounded-full bg-[#315fff]/[0.15] blur-[180px]" />
        <div className="absolute bottom-[-30%] right-[5%] h-[520px] w-[520px] rounded-full bg-cyan-300/[0.06] blur-[170px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative">
        <div className="container mx-auto max-w-[1380px] px-4">
          <div className="grid gap-8 border-b border-white/[0.1] pb-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8db6ff]">Kubo direction</p>
            <p className="max-w-[760px] text-xl leading-9 tracking-[-0.025em] text-white/[0.52] md:text-2xl md:leading-10">
              O nível não vem de adicionar mais efeitos. Vem de fazer cada decisão visual parecer intencional e cada interação reforçar a percepção de qualidade.
            </p>
          </div>
        </div>

        <div className="mt-14 space-y-0 overflow-hidden md:mt-20">
          <motion.div style={{ x }} className="flex min-w-max items-center gap-8 whitespace-nowrap pl-4 text-[20vw] font-heading font-semibold leading-[.78] tracking-[-0.09em] text-white md:text-[12vw]">
            {words.map((word) => <span key={word}>{word}<span className="ml-8 text-[#78a7ff]">/</span></span>)}
          </motion.div>
          <motion.div style={{ x: xReverse }} className="mt-4 flex min-w-max items-center gap-8 whitespace-nowrap pr-4 text-[20vw] font-heading font-semibold leading-[.78] tracking-[-0.09em] text-white/[0.12] md:mt-7 md:text-[12vw]">
            {words.slice().reverse().map((word) => <span key={word}>{word}<span className="ml-8 text-white/[0.05]">/</span></span>)}
          </motion.div>
        </div>

        <div className="container mx-auto mt-16 max-w-[1380px] px-4 md:mt-24">
          <div className="grid gap-0 border-y border-white/[0.1] sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Clareza", "A mensagem certa ganha espaço antes do detalhe."],
              ["02", "Escala", "Tipografia e composição criam presença imediatamente."],
              ["03", "Profundidade", "Camadas e movimento existem para dar contexto, não ruído."],
              ["04", "Prova", "Projeto real substitui mockup genérico sempre que possível."],
            ].map(([number, title, copy], index) => (
              <div key={title} className={`py-6 sm:p-6 ${index > 0 ? "sm:border-l sm:border-white/[0.1]" : ""}`}>
                <span className="text-[9px] font-semibold text-[#8db6ff]">{number}</span>
                <p className="mt-6 text-2xl font-heading font-semibold tracking-[-0.04em]">{title}</p>
                <p className="mt-3 max-w-[260px] text-xs leading-6 text-white/[0.36]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AgencyStatementSection);
