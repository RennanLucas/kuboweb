import { FileText, Building2, ShoppingCart, Megaphone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    icon: Building2,
    title: "Sites Institucionais",
    description: "Presença digital completa para sua empresa. Múltiplas páginas com informações sobre seu negócio.",
    features: ["Várias páginas", "SEO otimizado", "Gestão de conteúdo"],
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description: "Páginas de alta conversão para capturar leads e vender serviços. Ideal para campanhas de marketing.",
    features: ["Foco em conversão", "Integração WhatsApp", "Design persuasivo"],
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
    features: ["Google Ads", "Relatórios de performance"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14 md:mb-20 space-y-4">
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
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="section-title"
          >
            Soluções para cada necessidade
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="section-subtitle"
          >
            Do simples ao completo, criamos a solução ideal para o seu negócio crescer online.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto mb-14">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="card-premium flex flex-col p-7 md:p-8 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                <service.icon className="w-5.5 h-5.5 text-primary" />
              </div>
              
              <h3 className="text-lg md:text-xl font-heading font-semibold mb-2.5 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-5 flex-grow text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5511932197334?text=${encodeURIComponent(`Olá, vim pelo site da KuboWeb e tenho interesse no serviço de ${service.title}. Pode me explicar como funciona?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group mt-auto"
              >
                Saiba mais
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
            <a href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%20Pode%20me%20ajudar%3F" target="_blank" rel="noopener noreferrer">
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
