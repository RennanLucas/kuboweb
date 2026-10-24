import { memo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  { number: "01", title: "Sites institucionais", description: "Sites profissionais para empresas que precisam transmitir confiança, autoridade e presença digital.", detail: "Posicionamento · UX · Responsivo · SEO", href: "/servicos/sites-institucionais", word: "PRESENÇA" },
  { number: "02", title: "Landing pages", description: "Páginas estratégicas para apresentar uma oferta com clareza e transformar tráfego em contatos e vendas.", detail: "Oferta · Campanha · CTA · Performance", href: "/servicos/landing-pages", word: "CONVERSÃO" },
  { number: "03", title: "Lojas virtuais", description: "Estruturas de venda online modernas e responsivas, pensadas para facilitar a jornada de compra.", detail: "Catálogo · Checkout · Integrações · Mobile", href: "/servicos/loja-virtual", word: "COMÉRCIO" },
  { number: "04", title: "Google Ads", description: "Campanhas direcionadas para atrair pessoas que já estão buscando pelo serviço ou produto da empresa.", detail: "Busca · Segmentação · Conversão", href: "/servicos/anuncios", word: "DEMANDA" },
  { number: "05", title: "Manutenção e suporte", description: "Atualizações, ajustes, correções e suporte para manter o site funcionando corretamente depois da publicação.", detail: "Ajustes · Correções · Suporte", href: "/manutencao", word: "CONTINUIDADE" },
] as const;

const ServicesSection = () => {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="servicos" className="relative overflow-hidden bg-[#f5f5f1] px-4 py-16 md:py-28 lg:py-40">
      <div className="container mx-auto max-w-[1460px]">
        <div className="grid gap-7 border-b border-black/[.11] pb-10 md:gap-10 md:pb-14 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:pb-16">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[.26em] text-[#2458d8]">Serviços / 05</p>
            <h2 className="mt-4 text-[2.75rem] font-heading font-semibold leading-[.92] tracking-[-.065em] text-[#08111f] sm:text-[4rem] md:mt-5 md:text-[5.4rem] lg:text-[6.5rem] lg:leading-[.86]">
              Cada negócio pede<br /><span className="text-black/[.24]">uma solução própria.</span>
            </h2>
          </div>
          <p className="max-w-[500px] text-[14px] leading-7 text-black/[.48] md:text-base md:leading-8 lg:justify-self-end">
            A direção visual, a estrutura e a tecnologia mudam conforme o objetivo. Nada de encaixar todo cliente no mesmo modelo.
          </p>
        </div>

        <div className="grid lg:grid-cols-[.64fr_.36fr]">
          <div>
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} onViewportEnter={() => setActive(index)} onMouseEnter={() => setActive(index)}>
                <Link to={service.href} className="group grid grid-cols-[32px_1fr_22px] gap-x-3 gap-y-3 border-b border-black/[.1] py-6 md:grid-cols-[55px_.72fr_1fr_34px] md:items-center md:gap-4 md:py-10">
                  <span className="pt-1 font-mono text-[8px] font-semibold text-black/[.28] md:text-[9px]">{service.number}</span>
                  <h3 className="text-[1.7rem] font-heading font-semibold leading-[1] tracking-[-.05em] text-[#08111f] transition-transform duration-500 group-hover:translate-x-1 md:text-[2.65rem]">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 justify-self-end text-black/[.28] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:order-4 md:h-5 md:w-5" />
                  <div className="col-start-2 col-end-4 md:col-auto">
                    <p className="max-w-[480px] text-[13px] leading-6 text-black/[.48] md:text-sm md:leading-7">{service.description}</p>
                    <p className="mt-2 text-[7px] font-semibold uppercase tracking-[.15em] text-black/[.28] md:mt-3 md:text-[8px] md:tracking-[.17em]">{service.detail}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="relative hidden min-h-[650px] overflow-hidden border-b border-l border-black/[.1] lg:block">
            <div className="sticky top-24 flex h-[650px] items-center justify-center overflow-hidden">
              <motion.div key={active} initial={reduceMotion ? false : { opacity: 0, scale: .9, rotate: -3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .5, ease: [.16, 1, .3, 1] }} className="relative flex h-[340px] w-[340px] items-center justify-center rounded-full border border-[#2458d8]/20">
                <div className="absolute inset-8 rounded-full border border-black/[.08]" />
                <div className="absolute inset-[70px] rounded-full bg-[#2458d8] shadow-[0_35px_100px_rgba(36,88,216,.22)]" />
                <span className="relative z-10 max-w-[230px] -rotate-5 text-center text-[2.05rem] font-heading font-semibold leading-none tracking-[-.07em] text-white">{services[active].word}</span>
                <motion.div animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                  <span className="absolute left-1/2 top-[-5px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#2458d8]" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);
