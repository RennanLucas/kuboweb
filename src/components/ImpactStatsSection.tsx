import { memo } from "react";
import { motion } from "framer-motion";
import { Clock, Gauge, TrendingUp, Target } from "lucide-react";

interface ImpactStat {
  icon: typeof Clock;
  value: string;
  suffix?: string;
  label: string;
  description: string;
  category: "Prazo" | "Performance" | "Impacto" | "Conversão";
}

const stats: ImpactStat[] = [
  {
    icon: Clock,
    value: "30",
    suffix: " dias",
    label: "Site no ar",
    description: "Do briefing à publicação, com prazo combinado e cumprido.",
    category: "Prazo",
  },
  {
    icon: Gauge,
    value: "95",
    suffix: "+",
    label: "Score de performance",
    description: "Páginas otimizadas para Google PageSpeed em mobile e desktop.",
    category: "Performance",
  },
  {
    icon: TrendingUp,
    value: "3x",
    label: "Mais leads qualificados",
    description: "Aumento médio em contatos após anúncios + landing page integrados.",
    category: "Impacto",
  },
  {
    icon: Target,
    value: "até 8%",
    label: "Taxa de conversão",
    description: "Páginas de vendas pensadas para transformar visita em cliente.",
    category: "Conversão",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const ImpactStatsSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto px-5 md:px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-label justify-center"
          >
            Resultados que importam
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="section-title mt-4"
          >
            Prazo, performance e <span className="text-gradient-hero">impacto real</span> no seu negócio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle mt-4"
          >
            Sites, lojas e anúncios trabalhando juntos para gerar mais clientes — com números que comprovam.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariant}
                className="card-premium border-glow group flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                    {stat.category}
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="text-xl md:text-2xl font-heading font-semibold text-primary">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm font-semibold text-foreground">{stat.label}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground/80">
          * Médias baseadas em projetos entregues. Resultados variam conforme nicho, investimento e estratégia.
        </p>
      </div>
    </section>
  );
};

export default memo(ImpactStatsSection);
