import { memo } from "react";
import { ArrowUpRight, Building2, FileText, Megaphone, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building2,
    title: "Sites institucionais",
    description: "Sites completos para apresentar sua empresa, serviços e diferenciais com uma imagem profissional.",
    detail: "Estrutura, design, versão mobile e contato direto.",
    href: "/servicos/sites-institucionais",
  },
  {
    icon: FileText,
    title: "Landing pages",
    description: "Páginas objetivas para campanhas, lançamentos e ofertas que precisam conduzir o visitante até a ação.",
    detail: "Mensagem clara, CTA e experiência responsiva.",
    href: "/servicos/landing-pages",
  },
  {
    icon: ShoppingCart,
    title: "Lojas virtuais",
    description: "Estrutura de e-commerce para organizar produtos, facilitar a compra e profissionalizar sua operação online.",
    detail: "Catálogo, carrinho e integrações conforme o projeto.",
    href: "/servicos/loja-virtual",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    description: "Criação e organização de campanhas para levar pessoas interessadas até seu site ou WhatsApp.",
    detail: "Configuração, segmentação e acompanhamento.",
    href: "/servicos/anuncios",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="px-4 py-20 md:py-28">
    <div className="container mx-auto max-w-6xl">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end mb-10 md:mb-14">
        <div>
          <p className="section-label mb-4">Serviços</p>
          <h2 className="section-title max-w-xl">O que a Kubo Web pode construir para o seu negócio.</h2>
        </div>
        <p className="max-w-lg text-muted-foreground leading-relaxed lg:justify-self-end">
          Cada projeto parte do objetivo da empresa. A tecnologia e a estrutura entram depois, para servir à mensagem e à experiência do cliente.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
          >
            <Link
              to={service.href}
              className="group flex h-full min-h-[250px] flex-col rounded-[26px] border border-border/70 bg-card p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-10 flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <service.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </div>

              <div className="mt-auto">
                <h3 className="text-xl md:text-2xl font-heading font-bold tracking-[-0.025em] text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">{service.description}</p>
                <p className="mt-5 text-sm font-medium text-foreground/75">{service.detail}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default memo(ServicesSection);
