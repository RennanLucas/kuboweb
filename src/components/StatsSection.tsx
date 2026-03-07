import { memo } from "react";
import { CheckCircle2, Award, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: CheckCircle2, value: "+30", label: "Projetos entregues" },
  { icon: Award, value: "4.9", label: "Avaliação média" },
  { icon: Clock, value: "7 dias", label: "Prazo de entrega" },
  { icon: Users, value: "100%", label: "Clientes satisfeitos" },
];

const StatsSection = () => (
  <section className="py-16 md:py-20 px-4 bg-card/30">
    <div className="container mx-auto max-w-5xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="text-center space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto">
              <stat.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">{stat.value}</div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default memo(StatsSection);
