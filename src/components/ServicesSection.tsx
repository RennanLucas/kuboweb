import { memo } from "react";
import { ArrowUpRight, Building2, FileText, Megaphone, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building2,
    number: "01",
    title: "Sites institucionais",
    description: "Para empresas que precisam parecer mais sólidas, atuais e confiáveis no digital.",
    detail: "Posicionamento · UX · Responsivo · SEO técnico",
    href: "/servicos/sites-institucionais",
    className: "md:col-span-2 lg:col-span-7 bg-[#0b1525] text-white border-white/10",
    iconClass: "bg-white/10 text-white",
    muted: "text-white/48",
    detailClass: "text-white/62",
  },
  {
    icon: FileText,
    number: "02",
    title: "Landing pages",
    description: "Páginas com mensagem afiada e estrutura desenhada para levar o visitante até uma ação.",
    detail: "Oferta · Campanha · CTA · Performance",
    href: "/servicos/landing-pages",
    className: "lg:col-span-5 bg-[#dce8ff] text-[#0b1525] border-blue-200/60",
    iconClass: "bg-[#0b1525] text-white",
    muted: "text-[#0b1525]/55",
    detailClass: "text-[#0b1525]/65",
  },
  {
    icon: ShoppingCart,
    number: "03",
    title: "Lojas virtuais",
    description: "E-commerce com navegação clara, apresentação forte de produto e uma jornada de compra mais profissional.",
    detail: "Catálogo · Checkout · Integrações · Mobile",
    href: "/servicos/loja-virtual",
    className: "lg:col-span-5 bg-[#f2efe9] text-[#171b22] border-black/8",
    iconClass: "bg-[#171b22] text-white",
    muted: "text-[#171b22]/50",
    detailClass: "text-[#171b22]/62",
  },
  {
    icon: Megaphone,
    number: "04",
    title: "Google Ads",
    description: "Campanhas organizadas para colocar a empresa na frente de pessoas que já estão procurando uma solução.",
    detail: "Pesquisa · Segmentação · Conversão · Otimização",
    href: "/servicos/anuncios",
    className: "md:col-span-2 lg:col-span-7 bg-white text-foreground border-border/70",
    iconClass: "bg-primary/10 text-primary",
    muted: "text-muted-foreground",
    detailClass: "text-foreground/65",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="relative overflow-hidden bg-white px-4 py-24 md:py-36">
    <div className="container mx-auto max-w-7xl">
      <div className="mb-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end md:mb-20">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Capabilities</span>
          </div>
          <h2 className="max-w-4xl text-[2.9rem] font-heading font-semibold leading-[0.95] tracking-[-0.05em] text-foreground sm:text-6xl md:text-7xl">
            Não é só desenvolvimento.
            <span className="block text-muted-foreground/50">É presença, mensagem e venda.</span>
          </h2>
        </div>
        <div className="lg:justify-self-end lg:max-w-[410px]">
          <p className="text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            A Kubo Web conecta design, estratégia e tecnologia para construir experiências que parecem atuais e ajudam o cliente a entender por que escolher sua empresa.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={service.className}
          >
            <Link
              to={service.href}
              className="group relative flex h-full min-h-[360px] overflow-hidden rounded-[30px] border p-6 shadow-[0_24px_60px_rgba(15,23,42,.04)] transition-transform duration-500 hover:-translate-y-1 md:p-8 lg:min-h-[420px]"
            >
              <div className="pointer-events-none absolute right-[-70px] top-[-80px] h-[260px] w-[260px] rounded-full border border-current opacity-[0.06]" />
              <div className="pointer-events-none absolute right-[-20px] top-[-30px] h-[180px] w-[180px] rounded-full border border-current opacity-[0.06]" />

              <div className="relative z-10 flex w-full flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${service.iconClass}`}>
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${service.muted}`}>{service.number}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-current/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                <div className="max-w-xl">
                  <h3 className="text-3xl font-heading font-semibold leading-tight tracking-[-0.04em] md:text-4xl">
                    {service.title}
                  </h3>
                  <p className={`mt-4 max-w-lg text-sm leading-7 md:text-base ${service.muted}`}>{service.description}</p>
                  <div className="mt-7 border-t border-current/10 pt-5">
                    <p className={`text-[10px] font-semibold uppercase tracking-[0.19em] ${service.detailClass}`}>{service.detail}</p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default memo(ServicesSection);
