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
    <section id="beneficios" className="py-24 md:py-32 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14 md:mb-20 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-label justify-center"
          >
            Por que escolher
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="section-title"
          >
            O que você ganha com um site profissional
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="card-premium text-center p-8 md:p-10 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-heading font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
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
