import { memo } from "react";
import { ArrowUpRight } from "lucide-react";

const plans = [
  { n: "01", name: "Landing Page", price: "R$ 697", suffix: "a partir de", desc: "Uma página focada em campanha, serviço ou oferta, com direção visual e caminho claro até o contato.", msg: "Olá, tenho interesse em uma Landing Page da Kubo Web e gostaria de fazer um orçamento." },
  { n: "02", name: "Site institucional", price: "R$ 1.497", suffix: "a partir de", desc: "Presença digital completa para apresentar empresa, serviços e diferenciais com mais autoridade.", msg: "Olá, tenho interesse em um site institucional da Kubo Web e gostaria de fazer um orçamento." },
  { n: "03", name: "Loja virtual", price: "Sob orçamento", suffix: "escopo variável", desc: "E-commerce definido conforme catálogo, checkout, integrações e operação real do negócio.", msg: "Olá, tenho interesse em uma loja virtual da Kubo Web e gostaria de conversar sobre o projeto." },
  { n: "04", name: "Google Ads", price: "Sob orçamento", suffix: "escopo variável", desc: "Campanhas de pesquisa conectando intenção de busca, página e próximo passo.", msg: "Olá, tenho interesse no serviço de Google Ads da Kubo Web e gostaria de conversar sobre o projeto." },
] as const;

const PricingSection = () => (
  <section id="precos" className="bg-[#f4f4f1] px-4 py-16 md:py-28 lg:py-40">
    <div className="container mx-auto max-w-[1380px]">
      <div className="grid gap-7 border-b border-black/[.1] pb-10 md:gap-10 md:pb-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[.25em] text-[#2458d8]">Investimento / valores iniciais</p>
          <h2 className="mt-4 text-[2.75rem] font-heading font-semibold leading-[.93] tracking-[-.065em] text-[#08111f] sm:text-[4rem] md:mt-5 md:text-[5.4rem] lg:text-[6.4rem] lg:leading-[.88]">
            Clareza no início.<br /><span className="text-black/[.25]">Escopo sem surpresa.</span>
          </h2>
        </div>
        <p className="max-w-[480px] text-[14px] leading-7 text-black/[.48] md:text-base md:leading-8 lg:justify-self-end">
          Os valores abaixo são pontos de partida reais. Conteúdo, páginas e integrações definem a proposta final.
        </p>
      </div>

      <div>
        {plans.map((plan) => (
          <a key={plan.name} href={`https://wa.me/5511932197334?text=${encodeURIComponent(plan.msg)}`} target="_blank" rel="noopener noreferrer" className="group grid grid-cols-[30px_1fr_20px] gap-x-3 gap-y-3 border-b border-black/[.1] py-6 transition-colors hover:bg-white/55 md:grid-cols-[.08fr_.34fr_.34fr_.2fr_.04fr] md:items-center md:gap-5 md:px-4 md:py-10">
            <span className="pt-1 font-mono text-[8px] font-semibold text-black/[.28] md:text-[9px]">{plan.n}</span>
            <h3 className="text-[1.75rem] font-heading font-semibold leading-none tracking-[-.05em] text-[#08111f] md:text-4xl">{plan.name}</h3>
            <ArrowUpRight className="h-4 w-4 justify-self-end text-black/[.3] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:order-5 md:h-5 md:w-5" />
            <p className="col-start-2 col-end-4 max-w-[430px] text-[13px] leading-6 text-black/[.46] md:col-auto md:text-sm md:leading-7">{plan.desc}</p>
            <div className="col-start-2 col-end-4 pt-1 md:col-auto md:pt-0 md:text-right">
              <p className={`${plan.price.length > 12 ? "text-[1.45rem]" : "text-[1.85rem]"} font-heading font-semibold tracking-[-.045em] text-[#08111f] md:text-3xl`}>{plan.price}</p>
              <p className="mt-1 text-[8px] font-semibold uppercase tracking-[.15em] text-black/[.3]">{plan.suffix}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-7 flex flex-col justify-between gap-5 border-t border-black/[.08] pt-6 sm:flex-row sm:items-center md:mt-8 md:pt-7">
        <div>
          <p className="text-[13px] font-semibold text-[#08111f] md:text-sm">Manutenção mensal · a partir de R$ 70/mês</p>
          <p className="mt-1 text-xs text-black/[.38]">Para ajustes e continuidade após a publicação.</p>
        </div>
        <a href={`https://wa.me/5511932197334?text=${encodeURIComponent("Olá, tenho interesse na manutenção mensal da Kubo Web e gostaria de saber como funciona.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#08111f] md:text-sm">
          Consultar manutenção <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

export default memo(PricingSection);
