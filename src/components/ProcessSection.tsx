import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Entender",
    description:
      "Primeiro definimos o objetivo do site, o público, os serviços que precisam aparecer e qual ação o visitante deve tomar.",
  },
  {
    number: "02",
    title: "Construir",
    description:
      "A estrutura, o conteúdo e o visual são organizados para que a página fique clara, atual e coerente com o posicionamento do negócio.",
  },
  {
    number: "03",
    title: "Publicar",
    description:
      "Depois dos ajustes finais, o projeto é publicado, testado no celular e no desktop e fica pronto para receber acessos.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end mb-10 md:mb-14">
          <div>
            <p className="section-label mb-4">Processo</p>
            <h2 className="section-title max-w-xl">Um projeto bom começa antes do código.</h2>
          </div>
          <p className="max-w-lg text-muted-foreground leading-relaxed lg:justify-self-end">
            O trabalho segue uma sequência simples para evitar retrabalho e deixar claro o que está sendo construído em cada etapa.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              className="group relative min-h-[280px] overflow-hidden rounded-[26px] border border-border/70 bg-card p-6 md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-semibold tracking-[0.18em] text-primary">{step.number}</span>
                <ArrowDownRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-primary" />
              </div>

              <div className="mt-24 md:mt-28">
                <h3 className="text-2xl font-heading font-bold tracking-[-0.03em] text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{step.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
