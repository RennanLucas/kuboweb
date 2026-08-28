import { MessageSquare, Palette, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Briefing",
    description: "Entendemos seu negócio, objetivos e o que você precisa no site.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Criação",
    description: "Desenvolvemos o site com design moderno e foco em resultados.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Publicação",
    description: "Site no ar, pronto para receber clientes e gerar vendas.",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-24 md:py-32 px-4 bg-card/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14 md:mb-20 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-label justify-center"
          >
            Processo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="section-title"
          >
            Como funciona
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="section-subtitle"
          >
            Simples, direto e sem burocracia.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-[2rem] left-[16.66%] right-[16.66%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-primary/5 via-primary/25 to-primary/5" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 blur-sm" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                className="relative text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25 relative z-10 ring-2 ring-primary/20 ring-offset-4 ring-offset-background group-hover:shadow-xl group-hover:shadow-primary/30 transition-shadow duration-300">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                <div className="space-y-2.5">
                  <span className="text-[11px] font-bold text-primary/70 uppercase tracking-[0.25em]">
                    Passo {step.number}
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm max-w-[250px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
