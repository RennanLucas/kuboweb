import { Briefcase, Heart, Scale, Scissors, ShoppingBag, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

const audiences = [
  { icon: Stethoscope, label: "Clínicas e Consultórios", desc: "Sites que transmitem confiança e atraem pacientes" },
  { icon: Scale, label: "Advogados", desc: "Presença digital sólida para escritórios de advocacia" },
  { icon: Heart, label: "Psicólogos", desc: "Páginas acolhedoras que conectam com seus pacientes" },
  { icon: Scissors, label: "Salões e Estúdios", desc: "Vitrines online para mostrar seu trabalho" },
  { icon: ShoppingBag, label: "Lojas e Comércios", desc: "Venda mais com uma presença digital forte" },
  { icon: Briefcase, label: "Consultores e Coaches", desc: "Autoridade online para atrair clientes qualificados" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="group relative rounded-2xl border border-border/40 bg-card/50 p-6 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-semibold text-foreground text-sm">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
