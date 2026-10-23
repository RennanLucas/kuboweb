import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "Discovery",
    title: "Entender o negócio",
    description:
      "Objetivo, público, oferta, referências e o que a pessoa precisa fazer ao chegar no site.",
  },
  {
    number: "02",
    label: "Direction",
    title: "Definir a direção",
    description:
      "Estrutura, hierarquia, tom visual e conteúdo entram em uma direção coerente antes de começar a polir detalhes.",
  },
  {
    number: "03",
    label: "Build",
    title: "Construir e testar",
    description:
      "A interface vira código responsivo, é revisada no celular e no desktop e recebe os ajustes finais.",
  },
  {
    number: "04",
    label: "Launch",
    title: "Publicar e acompanhar",
    description:
      "O site entra no ar pronto para receber tráfego, contatos e evoluções conforme o negócio cresce.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="bg-[#f6f7f9] px-4 py-24 md:py-36">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end md:mb-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Studio workflow</span>
            </div>
            <h2 className="max-w-4xl text-[2.9rem] font-heading font-semibold leading-[0.95] tracking-[-0.052em] text-foreground sm:text-6xl md:text-7xl">
              Do briefing ao site no ar.
              <span className="block text-muted-foreground/45">Sem processo confuso.</span>
            </h2>
          </div>
          <p className="max-w-[430px] text-base leading-8 text-muted-foreground lg:justify-self-end md:text-lg">
            O projeto avança por etapas claras. Você entende o que está sendo feito e evita retrabalho causado por decisões tomadas tarde demais.
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-border/70 bg-white shadow-[0_28px_80px_rgba(15,23,42,.06)]">
          <div className="grid lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.07, duration: 0.48 }}
                className="group relative min-h-[330px] border-b border-border/70 p-6 last:border-b-0 md:p-8 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">{step.label}</span>
                  <span className="text-xs font-semibold text-muted-foreground">{step.number}</span>
                </div>

                <div className="mt-16 md:mt-20">
                  <h3 className="text-2xl font-heading font-semibold leading-tight tracking-[-0.035em] text-foreground md:text-[1.8rem]">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.description}</p>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-border/70 pt-4 md:bottom-8 md:left-8 md:right-8">
                  <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    Etapa definida
                  </span>
                  {index < steps.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
