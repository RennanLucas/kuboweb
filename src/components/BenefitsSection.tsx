import { Gauge, MessageCircle, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: PenTool,
    number: "01",
    title: "Visual com identidade",
    description:
      "Nada de empilhar efeitos. A interface é construída para combinar com o posicionamento da empresa e deixar a informação fácil de entender.",
  },
  {
    icon: Gauge,
    number: "02",
    title: "Experiência rápida e responsiva",
    description:
      "O site é pensado para funcionar bem no celular e no computador, com navegação direta e sem elementos desnecessários pesando a página.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Caminho claro até o contato",
    description:
      "Chamadas para ação, WhatsApp e formulários entram nos pontos certos para facilitar o próximo passo de quem visita o site.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="section-label mb-4">Como pensamos o projeto</p>
          <h2 className="section-title">Profissional não é ter mais efeitos. É saber o que precisa aparecer.</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            Um bom site organiza a mensagem, transmite confiança e deixa o visitante seguir sem esforço. É nisso que o projeto precisa acertar primeiro.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              className="rounded-[26px] border border-border/70 bg-card p-6 md:p-8"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">{benefit.number}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <benefit.icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold tracking-[-0.02em] text-foreground">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{benefit.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
