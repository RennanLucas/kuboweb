import { memo, useRef } from "react";
import { FileText, Building2, ShoppingCart, Megaphone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import TiltCard from "@/components/ui/TiltCard";

const services = [
  {
    icon: Building2,
    title: "Sites Institucionais",
    description: "Presença digital completa para sua empresa. Múltiplas páginas com informações sobre seu negócio.",
    features: ["Várias páginas", "SEO otimizado", "Gestão de conteúdo"],
    href: "/servicos/sites-institucionais",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description: "Páginas de alta conversão para capturar leads e vender serviços. Ideal para campanhas de marketing.",
    features: ["Foco em conversão", "Integração WhatsApp", "Design persuasivo"],
    href: "/servicos/landing-pages",
  },
  {
    icon: ShoppingCart,
    title: "Loja Virtual",
    description: "Venda seus produtos online com uma loja profissional, segura e fácil de gerenciar.",
    features: ["Catálogo de produtos", "Pagamento integrado", "Painel de gestão"],
    href: "/servicos/loja-virtual",
  },
  {
    icon: Megaphone,
    title: "Anúncios",
    description: "Campanhas de tráfego pago no Google e redes sociais para atrair clientes qualificados.",
    features: ["Google Ads", "Relatórios de performance"],
    href: "/servicos/anuncios",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const ServicesSection = () => {
  return (
  <section id="servicos" className="py-24 md:py-36 px-4 relative overflow-hidden">
    {/* Background effects — static, no parallax */}
    <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/20" />
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px] hidden md:block" />
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] hidden md:block" />

    <div className="container mx-auto max-w-6xl relative z-10">
      <div className="text-center mb-12 md:mb-20 space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="section-label justify-center"
        >
          Serviços
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="section-title"
        >
          Soluções desenhadas para o seu crescimento
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="section-subtitle"
        >
          Cada projeto é pensado para gerar resultado real — mais visibilidade, mais contatos, mais vendas.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-14">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <TiltCard className="h-full group" tiltAmount={8}>
              <Link
                to={service.href}
                className="card-premium border-glow flex flex-col p-6 sm:p-7 md:p-8 cursor-pointer h-full relative overflow-hidden"
              >
                {/* Gradient overlay on hover — CSS only */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/25 group-hover:shadow-lg group-hover:shadow-primary/15 transition-all duration-300">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-heading font-semibold mb-2.5 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-5 flex-grow text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-auto group-hover:translate-x-1 transition-transform duration-200">
                    Saiba mais
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <div className="inline-block hover:scale-105 active:scale-95 transition-transform duration-200">
          <Button variant="whatsapp" size="lg" asChild className="shadow-glow-sm">
            <a href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%20Pode%20me%20ajudar%3F" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Solicitar orçamento
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default memo(ServicesSection);
