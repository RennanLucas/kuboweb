import { memo } from "react";
import { Clock, MessageCircle, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Zap,
    title: "Performance",
    description: "Sites leves, rápidos e otimizados para ranquear no Google.",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "SSL, hospedagem confiável e proteção contra vulnerabilidades.",
  },
  {
    icon: Clock,
    title: "Agilidade",
    description: "Entregas em dias úteis com acompanhamento direto do projeto.",
  },
  {
    icon: MessageCircle,
    title: "Suporte humano",
    description: "Atendimento direto no WhatsApp, sem robôs ou filas.",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden border-y border-border/30">
      <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-background to-card/30 pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <p className="text-accent-blue font-semibold text-xs uppercase tracking-[0.2em]">
            Por que a KuboWeb
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground max-w-2xl mx-auto leading-tight">
            Tecnologia e estratégia para quem leva o digital a sério.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {pillars.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="card-premium p-6 md:p-7 flex flex-col items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-blue/10 border border-accent-blue/15 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-accent-blue" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1.5">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(StatsSection);
