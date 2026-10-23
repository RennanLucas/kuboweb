import { memo, useState } from "react";
import { ArrowUpRight, Building2, FileText, Megaphone, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Building2,
    number: "01",
    title: "Sites institucionais",
    description: "Presença digital para apresentar empresa, serviços, diferenciais e contato com mais autoridade.",
    detail: "Posicionamento · UX · Responsivo · SEO técnico",
    href: "/servicos/sites-institucionais",
    accent: "#dce8ff",
  },
  {
    icon: FileText,
    number: "02",
    title: "Landing pages",
    description: "Páginas com narrativa de oferta, prova, objeções e CTA organizados para facilitar a decisão.",
    detail: "Oferta · Campanha · CTA · Performance",
    href: "/servicos/landing-pages",
    accent: "#e5f4ff",
  },
  {
    icon: ShoppingCart,
    number: "03",
    title: "Lojas virtuais",
    description: "E-commerce com navegação clara, produto bem apresentado e experiência de compra consistente no mobile.",
    detail: "Catálogo · Checkout · Integrações · Mobile",
    href: "/servicos/loja-virtual",
    accent: "#efe9ff",
  },
  {
    icon: Megaphone,
    number: "04",
    title: "Google Ads",
    description: "Campanhas conectadas à página certa para manter a mensagem coerente da busca até o contato.",
    detail: "Pesquisa · Segmentação · Conversão · Otimização",
    href: "/servicos/anuncios",
    accent: "#def5ec",
  },
] as const;

const ServicesSection = () => {
  const [hovered, setHovered] = useState(0);

  return (
    <section id="servicos" className="relative overflow-hidden bg-white px-4 py-24 md:py-36">
      <motion.div
        aria-hidden="true"
        animate={{ backgroundColor: services[hovered].accent }}
        transition={{ duration: 0.45 }}
        className="pointer-events-none absolute right-[-12%] top-[22%] h-[620px] w-[620px] rounded-full opacity-45 blur-[170px]"
      />

      <div className="container relative mx-auto max-w-[1380px]">
        <div className="grid gap-8 border-b border-black/[0.1] pb-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end md:pb-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2458d8]">Capabilities</p>
            <h2 className="mt-5 max-w-[900px] text-[3rem] font-heading font-semibold leading-[.92] tracking-[-0.065em] text-[#08111f] sm:text-6xl md:text-7xl lg:text-[5.35rem]">
              O site certo depende
              <span className="block text-[#08111f]/[0.34]">do objetivo certo.</span>
            </h2>
          </div>
          <p className="max-w-[460px] text-base leading-8 text-[#08111f]/[0.46] lg:justify-self-end md:text-lg">
            Não empilhamos serviços em cards. Primeiro entendemos o que o negócio precisa resolver; depois definimos o formato mais adequado.
          </p>
        </div>

        <div className="mt-4 border-t border-black/[0.06]">
          {services.map((service, index) => {
            const Icon = service.icon;
            const active = hovered === index;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.045, duration: 0.48 }}
                onMouseEnter={() => setHovered(index)}
                className="border-b border-black/[0.08]"
              >
                <Link
                  to={service.href}
                  className="group grid gap-5 py-7 transition-colors md:grid-cols-[.1fr_.42fr_.36fr_.12fr] md:items-center md:gap-8 md:py-9"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-semibold text-black/[0.28]">{service.number}</span>
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                        active ? "bg-[#08111f] text-white" : "bg-black/[0.035] text-black/[0.36]"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className={`text-3xl font-heading font-semibold tracking-[-0.05em] transition-colors md:text-4xl lg:text-[2.9rem] ${active ? "text-[#08111f]" : "text-[#08111f]/[0.72]"}`}>
                    {service.title}
                  </h3>

                  <div>
                    <p className="max-w-[470px] text-sm leading-7 text-[#08111f]/[0.46]">{service.description}</p>
                    <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.17em] text-[#08111f]/[0.28]">{service.detail}</p>
                  </div>

                  <span className={`ml-auto flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${active ? "border-[#08111f] bg-[#08111f] text-white" : "border-black/[0.1] text-black/[0.32]"}`}>
                    <ArrowUpRight className={`h-4 w-4 transition-transform duration-300 ${active ? "-translate-y-0.5 translate-x-0.5" : ""}`} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);
