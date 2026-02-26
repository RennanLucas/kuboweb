import { Briefcase, Heart, Scale, Scissors, ShoppingBag, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const audiences = [
  { icon: Stethoscope, label: "Clínicas e Consultórios" },
  { icon: Scale, label: "Advogados" },
  { icon: Heart, label: "Psicólogos" },
  { icon: Scissors, label: "Salões e Estúdios" },
  { icon: ShoppingBag, label: "Lojas e Comércios" },
  { icon: Briefcase, label: "Consultores e Coaches" },
];

const AudienceSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-primary font-medium text-sm uppercase tracking-wider"
          >
            Para quem é
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground"
          >
            Sites para profissionais como você
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Atendo diversos segmentos com soluções sob medida para cada tipo de negócio.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {audiences.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="card-premium flex flex-col items-center text-center gap-3 p-5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-medium text-foreground text-sm">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
