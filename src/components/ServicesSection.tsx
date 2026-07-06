import { memo } from "react";
import { FileText, Building2, ShoppingCart, Megaphone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import serviceSitesImg from "@/assets/service-sites.jpg";
import serviceLandingImg from "@/assets/service-landing.jpg";
import serviceLojaImg from "@/assets/service-loja.jpg";
import serviceAnunciosImg from "@/assets/service-anuncios.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const services = [
  {
    id: "sites",
    icon: Building2,
    title: "Sites Institucionais",
    description:
      "Presença digital profissional que transmite autoridade e converte visitantes em clientes qualificados.",
    features: ["SEO Otimizado", "Design Exclusivo", "Ultra Velocidade", "Painel Administrativo"],
    href: "/servicos/sites-institucionais",
    layout: "wide",
    theme: "light",
    image: serviceSitesImg,
  },
  {
    id: "landing",
    icon: FileText,
    title: "Landing Pages",
    description: "Focadas 100% em conversão para maximizar o ROI das suas campanhas.",
    features: ["Copywriting Persuasivo", "Testes A/B"],
    href: "/servicos/landing-pages",
    layout: "tall",
    theme: "dark",
    image: serviceLandingImg,
  },
  {
    id: "loja",
    icon: ShoppingCart,
    title: "Loja Virtual",
    description: "E-commerce completo e escalável com as melhores tecnologias do mercado.",
    features: ["Checkout Fluido", "Gestão de Estoque"],
    href: "/servicos/loja-virtual",
    layout: "tall",
    theme: "light",
    image: serviceLojaImg,
  },
  {
    id: "anuncios",
    icon: Megaphone,
    title: "Gestão de Anúncios",
    description: "Estratégias avançadas de tráfego pago no Google Ads para escala imediata.",
    features: [
      "Google Ads",
      "Dashboards em Tempo Real",
      "Análise de Público Alvo",
      "Otimização de Funil",
    ],
    href: "/servicos/anuncios",
    layout: "wide",
    theme: "light",
    image: serviceAnunciosImg,
  },
];

const ServiceCard = ({
  service,
}: {
  service: (typeof services)[number];
}) => {
  const Icon = service.icon;
  const isDark = service.theme === "dark";
  const isWide = service.layout === "wide";

  const baseClasses = `
    group relative block overflow-hidden rounded-3xl h-full
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1
    ${isDark ? "bg-primary text-primary-foreground border border-primary/10" : "bg-card border border-border shadow-sm"}
  `;

  return (
    <motion.div variants={itemVariants} className={`h-full ${isWide ? "md:col-span-2" : ""}`}>
      <Link to={service.href} className={baseClasses}>
        <div className={`flex h-full ${isWide ? "flex-col md:flex-row" : "flex-col"}`}>
          {/* Content */}
          <div className={`flex flex-col p-7 md:p-8 ${isWide ? "md:flex-1 md:max-w-md" : "flex-1"}`}>
            <div
              className={`p-3 rounded-2xl w-fit mb-6 transition-colors duration-300 ${
                isDark ? "bg-primary-foreground/10 text-primary-foreground" : "bg-primary/10 text-primary"
              }`}
            >
              <Icon className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
            </div>

            <h3
              className={`text-xl md:text-2xl font-bold font-heading mb-3 ${
                isDark ? "text-primary-foreground" : "text-foreground"
              }`}
            >
              {service.title}
            </h3>

            <p
              className={`mb-6 ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}
            >
              {service.description}
            </p>

            <ul
              className={`grid gap-y-3 mb-8 text-sm grid-cols-1 ${
                isDark ? "text-primary-foreground/60" : "text-muted-foreground"
              }`}
            >
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isDark ? "bg-primary-foreground/50" : "bg-primary"}`} />
                  {feature}
                </li>
              ))}
            </ul>

            <span
              className={`mt-auto inline-flex items-center gap-2 text-sm font-bold transition-transform duration-200 group-hover:translate-x-1 ${
                isDark ? "text-primary-foreground" : "text-primary"
              }`}
            >
              Saiba mais
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>

          {/* Image */}
          <div
            className={`relative overflow-hidden ${
              isWide
                ? "md:flex-1 min-h-[220px] md:min-h-0"
                : "mt-2 mx-4 mb-4 rounded-2xl min-h-[180px]"
            } ${isDark ? "bg-primary-foreground/5" : "bg-muted/40"}`}
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              width={1024}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-36 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl hidden md:block" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-primary font-bold tracking-wider uppercase text-sm"
          >
            Nossos Serviços
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
        </div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 auto-rows-[minmax(320px,auto)] mb-14"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <div className="inline-block hover:scale-105 active:scale-95 transition-transform duration-200">
            <Button variant="whatsapp" size="lg" asChild className="shadow-glow-sm">
              <a
                href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%20Pode%20me%20ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Consultoria sem custo · Retorno em até 1 hora útil
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);
