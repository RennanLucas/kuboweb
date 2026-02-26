import { FileText, Building2, ShoppingCart, Megaphone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    icon: FileText,
    title: "Landing Pages",
    description: "Páginas de alta conversão para capturar leads e vender serviços. Ideal para campanhas de marketing.",
    features: ["Foco em conversão", "Integração WhatsApp", "Design persuasivo"],
  },
  {
    icon: Building2,
    title: "Sites Institucionais",
    description: "Presença digital completa para sua empresa. Múltiplas páginas com informações sobre seu negócio.",
    features: ["Várias páginas", "SEO otimizado", "Gestão de conteúdo"],
  },
  {
    icon: ShoppingCart,
    title: "Loja Virtual",
    description: "Venda seus produtos online com uma loja profissional, segura e fácil de gerenciar.",
    features: ["Catálogo de produtos", "Pagamento integrado", "Painel de gestão"],
  },
  {
    icon: Megaphone,
    title: "Anúncios",
    description: "Campanhas de tráfego pago no Google e redes sociais para atrair clientes qualificados.",
    features: ["Google Ads", "Meta Ads", "Relatórios de performance"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-primary font-medium text-sm uppercase tracking-wider"
          >
            Serviços
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground"
          >
            Soluções para cada necessidade
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Do simples ao completo, criamos a solução ideal para o seu negócio crescer online.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="card-premium flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5511932197334"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group mt-auto"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
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
          <Button variant="whatsapp" size="lg" asChild>
            <a href="https://wa.me/5511932197334" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Solicitar orçamento
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
