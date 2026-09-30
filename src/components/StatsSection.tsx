import { memo } from "react";
import { Gauge, MessageCircle, Search, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Smartphone,
    title: "Responsivo",
    description: "Experiência pensada para celular, tablet e desktop.",
  },
  {
    icon: Search,
    title: "SEO técnico",
    description: "Estrutura preparada para indexação e boas práticas do Google.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description: "Sites leves, rápidos e com foco na experiência do visitante.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento direto",
    description: "Contato simples pelo WhatsApp durante o projeto.",
  },
];

const StatsSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-10 md:py-14">
      <div className="absolute inset-0 bg-gradient-to-b from-card/35 via-primary/[0.025] to-transparent" />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.35 }}
              className="rounded-2xl border border-border/40 bg-card/70 p-5 backdrop-blur-sm"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-heading text-sm font-bold text-foreground">{title}</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(StatsSection);
