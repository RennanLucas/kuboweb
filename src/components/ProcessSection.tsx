import { Code2, Compass, Layers3, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "Discovery",
    icon: Compass,
    title: "Entender o negócio.",
    description: "Objetivo, público, oferta, referências e qual ação o visitante precisa tomar.",
  },
  {
    number: "02",
    label: "Direction",
    icon: Layers3,
    title: "Definir a direção.",
    description: "Arquitetura, hierarquia, tipografia, contraste e ritmo viram um sistema visual coerente.",
  },
  {
    number: "03",
    label: "Build",
    icon: Code2,
    title: "Construir de verdade.",
    description: "A interface vira código responsivo com navegação, performance, acessibilidade e revisão mobile.",
  },
  {
    number: "04",
    label: "Launch",
    icon: Rocket,
    title: "Publicar e revisar.",
    description: "Domínio, SEO técnico, rastreamento, integrações e QA final antes de colocar tráfego no site.",
  },
];

const ProcessSection = () => (
  <section id="processo" className="relative overflow-hidden bg-[#eef0f3] px-4 py-24 md:py-36">
    <div className="container mx-auto max-w-[1380px]">
      <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2458d8]">Process</p>
          <h2 className="mt-5 max-w-[880px] text-[3rem] font-heading font-semibold leading-[.92] tracking-[-0.065em] text-[#08111f] sm:text-6xl md:text-7xl lg:text-[5.35rem]">
            O processo não começa
            <span className="block text-[#08111f]/[0.34]">no efeito visual.</span>
          </h2>
        </div>
        <p className="max-w-[460px] text-base leading-8 text-[#08111f]/[0.46] lg:justify-self-end md:text-lg">
          Site profissional parece simples quando estratégia, conteúdo, design e código foram resolvidos na ordem certa.
        </p>
      </div>

      <div className="relative mt-16 md:mt-20">
        <div className="absolute left-0 right-0 top-[25px] hidden h-px bg-black/[0.1] md:block" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 right-0 top-[25px] hidden h-px origin-left bg-[#2458d8] md:block"
        />

        <div className="grid border-t border-black/[0.1] md:grid-cols-4 md:border-t-0">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative border-b border-black/[0.1] py-8 md:border-b-0 md:border-r md:px-6 md:pb-4 md:pt-16 first:md:pl-0 last:md:border-r-0 last:md:pr-0"
            >
              <span className="absolute left-0 top-[16px] hidden h-[18px] w-[18px] rounded-full border-[5px] border-[#eef0f3] bg-[#2458d8] shadow-[0_0_0_1px_rgba(36,88,216,.22)] md:block md:left-6 first:md:left-0" />

              <div className="flex items-center justify-between md:block">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#08111f]/[0.28]">{step.number} · {step.label}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2458d8] shadow-[0_10px_30px_rgba(8,17,31,.06)] md:mt-7">
                  <step.icon className="h-4 w-4" />
                </span>
              </div>

              <h3 className="mt-7 text-2xl font-heading font-semibold tracking-[-0.045em] text-[#08111f] md:mt-8 md:text-3xl">{step.title}</h3>
              <p className="mt-4 max-w-[300px] text-sm leading-7 text-[#08111f]/[0.45]">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
