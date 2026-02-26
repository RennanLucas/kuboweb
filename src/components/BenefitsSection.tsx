import { Zap, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Zap,
    title: "Site rápido e responsivo",
    description: "Performance otimizada que carrega em segundos e funciona perfeitamente em qualquer dispositivo.",
  },
  {
    icon: MessageCircle,
    title: "Foco em conversão e WhatsApp",
    description: "Estrutura pensada para transformar visitantes em clientes através de CTAs estratégicos.",
  },
  {
    icon: Sparkles,
    title: "Estrutura profissional e moderna",
    description: "Design clean e contemporâneo que transmite credibilidade e profissionalismo.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium text-sm uppercase tracking-wider"
          >
            Por que escolher
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground"
          >
            O que você ganha com um site profissional
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-premium text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
              >
                <benefit.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
