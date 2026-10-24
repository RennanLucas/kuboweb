import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
  { n: "01", label: "Entendimento", title: "Primeiro, entendemos o negócio.", text: "Empresa, público, objetivo, posicionamento e ação principal entram antes de qualquer decisão visual.", meta: "Negócio · Público · Objetivo" },
  { n: "02", label: "Estratégia", title: "A página ganha uma lógica.", text: "Definimos páginas, conteúdo, hierarquia e direção visual para conduzir a experiência sem ruído.", meta: "Arquitetura · Conteúdo · Direção" },
  { n: "03", label: "Design e desenvolvimento", title: "A direção vira experiência.", text: "Design e código evoluem juntos, com responsividade, performance, acessibilidade e interações cuidadosas.", meta: "UI · Código · Motion · Mobile" },
  { n: "04", label: "Revisão", title: "Ajustamos antes de chamar de pronto.", text: "O projeto é apresentado, revisado em diferentes telas e refinado dentro do escopo combinado.", meta: "QA · Feedback · Refinamento" },
  { n: "05", label: "Publicação", title: "Tudo no lugar para entrar no ar.", text: "Domínio, hospedagem, SEO técnico, rastreamento e verificações finais fecham a entrega.", meta: "Domínio · SEO · Analytics · Deploy" },
] as const;

const ProcessSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="processo" className="relative overflow-hidden bg-[#05070b] px-4 py-16 text-white md:py-28 lg:py-44">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[35%] top-[10%] h-[520px] w-[520px] rounded-full bg-[#2458d8]/10 blur-[170px] md:h-[650px] md:w-[650px] md:blur-[190px]" />
        <div className="absolute inset-0 opacity-[.03] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px] md:[background-size:100px_100px]" />
      </div>

      <div className="container relative mx-auto max-w-[1460px]">
        <div className="grid gap-7 border-b border-white/[.11] pb-10 md:gap-10 md:pb-14 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:pb-16">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[.26em] text-[#91b5ff]">Processo / 05</p>
            <h2 className="mt-4 text-[2.75rem] font-heading font-semibold leading-[.92] tracking-[-.065em] sm:text-[4rem] md:mt-5 md:text-[5.5rem] lg:text-[6.7rem] lg:leading-[.85]">
              Da conversa<br /><span className="text-white/[.24]">até a publicação.</span>
            </h2>
          </div>
          <p className="max-w-[490px] text-[14px] leading-7 text-white/[.46] md:text-base md:leading-8 lg:justify-self-end">
            Um processo enxuto para manter estratégia, direção visual e execução apontando para o mesmo objetivo.
          </p>
        </div>

        <div className="relative">
          <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [.16, 1, .3, 1] }} className="absolute bottom-0 left-[20px] top-0 hidden w-px origin-top bg-gradient-to-b from-[#91b5ff]/70 via-[#2458d8]/35 to-transparent md:block" />

          {steps.map((step, index) => (
            <motion.article key={step.n} initial={reduceMotion ? false : { opacity: 0, x: index % 2 ? 18 : -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: .55 }} className="relative grid grid-cols-[40px_1fr] gap-x-3 gap-y-4 border-b border-white/[.1] py-7 md:grid-cols-[70px_.25fr_.4fr_.27fr] md:items-start md:gap-5 md:py-14">
              <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#91b5ff]/25 bg-[#07101f] font-mono text-[8px] font-semibold text-[#91b5ff] shadow-[0_0_30px_rgba(36,88,216,.16)] md:h-10 md:w-10 md:text-[9px]">{step.n}</div>
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[.18em] text-white/[.36] md:text-[9px] md:tracking-[.2em]">{step.label}</p>
                <p className="mt-2 text-[7px] font-semibold uppercase leading-4 tracking-[.14em] text-white/[.2] md:mt-4 md:text-[8px] md:leading-5 md:tracking-[.15em]">{step.meta}</p>
              </div>
              <h3 className="col-start-2 max-w-[560px] text-[1.65rem] font-heading font-semibold leading-[1] tracking-[-.05em] md:col-auto md:text-5xl">{step.title}</h3>
              <p className="col-start-2 max-w-[400px] text-[13px] leading-6 text-white/[.44] md:col-auto md:text-sm md:leading-7">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ProcessSection);
