import { memo } from "react";
import { FileText, Building2, ShoppingCart, Megaphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building2,
    title: "Sites Institucionais",
    description: "Presença digital completa para sua empresa com múltiplas páginas, SEO otimizado e design personalizado que transmite credibilidade.",
    features: ["Múltiplas páginas", "SEO otimizado", "Gestão de conteúdo", "Design responsivo"],
    href: "/servicos/sites-institucionais",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description: "Páginas estratégicas de alta conversão para capturar leads e impulsionar vendas com design persuasivo e performance.",
    features: ["Foco em conversão", "Integração WhatsApp", "A/B testing", "Carregamento rápido"],
    href: "/servicos/landing-pages",
  },
  {
    icon: ShoppingCart,
    title: "Lojas Virtuais",
    description: "E-commerce completo e profissional com catálogo, pagamento integrado e painel de gestão intuitivo.",
    features: ["Catálogo de produtos", "Pagamento seguro", "Painel de gestão", "Checkout otimizado"],
    href: "/servicos/loja-virtual",
  },
  {
    icon: Megaphone,
    title: "Tráfego Pago",
    description: "Campanhas estratégicas no Google Ads para posicionar sua empresa na frente dos clientes certos, na hora certa.",
    features: ["Google Ads", "Segmentação avançada", "Relatórios detalhados", "ROI mensurável"],
    href: "/servicos/anuncios",
  },
];

const ServicesSection = () => (
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
          Nossos Serviços
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="section-title"
        >
          Soluções digitais completas para o seu negócio
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="section-subtitle max-w-2xl"
        >
          Desenvolvemos projetos sob medida com foco em resultados, combinando design de alto nível com tecnologia de ponta.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Link
              to={service.href}
              className="card-premium flex flex-col p-7 md:p-8 group h-full block"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">
                  {service.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                {service.description}
              </p>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all mt-auto">
                Conhecer serviço
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default memo(ServicesSection);
