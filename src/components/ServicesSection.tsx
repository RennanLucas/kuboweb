import { memo } from "react";
import { FileText, Building2, ShoppingCart, Megaphone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const ServicesSection = () => (
  <section id="servicos" className="py-24 md:py-36 px-4 bg-muted/20">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-12 md:mb-20 space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-label justify-center"
        >
          Serviços
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="section-title"
        >
          Soluções desenhadas para o seu crescimento
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
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
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <Link
              to={service.href}
              className="card-premium flex flex-col p-6 sm:p-7 md:p-8 group cursor-pointer h-full relative overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/3 to-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300"
                >
                  <service.icon className="w-5 h-5 text-primary" />
                </motion.div>
                
                <h3 className="text-lg md:text-xl font-heading font-semibold mb-2.5 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-5 flex-grow text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature, fi) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + fi * 0.08 + 0.3, duration: 0.4 }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                        whileHover={{ scale: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.span
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-auto"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Saiba mais
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        className="text-center"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
          <Button variant="whatsapp" size="lg" asChild>
            <a href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%20Pode%20me%20ajudar%3F" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Solicitar orçamento
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default memo(ServicesSection);
