import { Palette, Smartphone, Zap, Search, PenTool, Shield } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Palette,
    title: "Design profissional",
    description: "Visual moderno e sofisticado que transmite credibilidade para sua marca.",
  },
  {
    icon: Smartphone,
    title: "Otimizado para celular",
    description: "Seu site funciona perfeitamente em qualquer dispositivo e tamanho de tela.",
  },
  {
    icon: Zap,
    title: "Carregamento rápido",
    description: "Performance otimizada para carregar em segundos e não perder visitantes.",
  },
  {
    icon: Search,
    title: "SEO otimizado",
    description: "Estrutura pensada para seu site aparecer nas primeiras posições do Google.",
  },
  {
    icon: PenTool,
    title: "Fácil de editar",
    description: "Painel simples para você atualizar conteúdos sem precisar de um programador.",
  },
  {
    icon: Shield,
    title: "Seguro e confiável",
    description: "Certificado SSL, backups e hospedagem de alta disponibilidade inclusos.",
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
            Benefícios
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="section-title"
          >
            Por que escolher a KuboWeb
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="card-premium p-7 md:p-8 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-heading font-semibold mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
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
