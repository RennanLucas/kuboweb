import { memo, useState } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const whatsappBase = "https://wa.me/5511932197334?text=";

const plans = [
  {
    name: "Landing Page",
    number: "01",
    price: "R$ 697",
    suffix: "a partir de",
    description: "Uma página de campanha, serviço ou oferta com mensagem clara e caminho direto até o contato.",
    features: ["Direção visual", "Design responsivo", "CTA para WhatsApp", "Formulário", "SEO básico"],
    message: "Olá, tenho interesse em uma Landing Page da Kubo Web e gostaria de fazer um orçamento.",
    accent: "#8db6ff",
  },
  {
    name: "Site institucional",
    number: "02",
    price: "R$ 1.497",
    suffix: "a partir de",
    description: "Uma presença digital mais completa para apresentar empresa, serviços, diferenciais e gerar autoridade.",
    features: ["Múltiplas páginas", "Direção visual", "Responsividade", "Estrutura de SEO", "Integrações conforme o projeto"],
    message: "Olá, tenho interesse em um site institucional da Kubo Web e gostaria de fazer um orçamento.",
    accent: "#a9d9ff",
  },
  {
    name: "Loja virtual",
    number: "03",
    price: "Sob orçamento",
    suffix: "escopo variável",
    description: "E-commerce com estrutura, catálogo, checkout e integrações definidas conforme a operação do negócio.",
    features: ["Catálogo", "Carrinho", "Pagamento", "Responsividade", "Integrações"],
    message: "Olá, tenho interesse em uma loja virtual da Kubo Web e gostaria de conversar sobre o projeto.",
    accent: "#c8b8ff",
  },
  {
    name: "Google Ads",
    number: "04",
    price: "Sob orçamento",
    suffix: "escopo variável",
    description: "Campanhas de pesquisa estruturadas para conectar intenção de busca com a página certa e um próximo passo claro.",
    features: ["Configuração", "Segmentação", "Palavras-chave", "Conversões", "Acompanhamento"],
    message: "Olá, tenho interesse no serviço de Google Ads da Kubo Web e gostaria de conversar sobre o projeto.",
    accent: "#9ae7cc",
  },
] as const;

const PricingSection = () => {
  const [active, setActive] = useState(1);
  const plan = plans[active];

  return (
    <section id="precos" className="relative overflow-hidden bg-white px-4 py-24 md:py-40">
      <motion.div
        aria-hidden="true"
        animate={{ backgroundColor: plan.accent }}
        transition={{ duration: .45 }}
        className="pointer-events-none absolute left-[-10%] top-[18%] h-[560px] w-[560px] rounded-full opacity-30 blur-[170px]"
      />
      <div className="container relative mx-auto max-w-[1380px]">
        <div className="grid gap-9 border-b border-black/[0.09] pb-12 lg:grid-cols-[1.06fr_.94fr] lg:items-end md:pb-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2458d8]">Investment</p>
            <h2 className="mt-5 max-w-[900px] text-[3rem] font-heading font-semibold leading-[.91] tracking-[-0.067em] text-[#08111f] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              Escolha o formato.
              <span className="block text-[#08111f]/[0.32]">O escopo vem depois.</span>
            </h2>
          </div>
          <p className="max-w-[470px] text-base leading-8 text-[#08111f]/[0.46] lg:justify-self-end md:text-lg">
            Projetos simples têm ponto de partida claro. Escopos com integrações, conteúdo ou operação mais complexa são avaliados antes da proposta.
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[.72fr_1.28fr]">
          <div className="space-y-2">
            {plans.map((item, index) => {
              const selected = active === index;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  className={`group flex w-full items-center gap-4 rounded-[22px] border p-4 text-left transition-all duration-300 ${selected ? "border-black/[0.1] bg-[#f6f7f9] shadow-[0_14px_45px_rgba(8,17,31,.06)]" : "border-transparent hover:bg-[#f8f9fb]"}`}
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold transition-all ${selected ? "bg-[#08111f] text-white" : "bg-[#f0f2f5] text-[#08111f]/[0.38]"}`}>
                    {item.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-semibold transition-colors ${selected ? "text-[#08111f]" : "text-[#08111f]/[0.52]"}`}>{item.name}</p>
                    <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#08111f]/[0.28]">{item.suffix}</p>
                  </div>
                  <span className={`text-sm font-heading font-semibold tracking-[-0.03em] transition-colors ${selected ? "text-[#08111f]" : "text-[#08111f]/[0.34]"}`}>{item.price}</span>
                </button>
              );
            })}

            <a
              href={`${whatsappBase}${encodeURIComponent("Olá, tenho interesse na manutenção mensal da Kubo Web e gostaria de saber como funciona.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 flex items-center justify-between rounded-[22px] border border-black/[0.08] bg-white p-4 transition-all hover:border-black/[0.14] hover:shadow-[0_12px_38px_rgba(8,17,31,.05)]"
            >
              <div>
                <p className="text-sm font-semibold text-[#08111f]">Manutenção mensal</p>
                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#08111f]/[0.28]">A partir de R$ 70/mês</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#08111f]/[0.4] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="relative min-h-[610px] overflow-hidden rounded-[38px] bg-[#07101f] p-6 text-white shadow-[0_46px_120px_rgba(8,17,31,.2)] md:p-8 lg:p-10">
            <motion.div
              aria-hidden="true"
              animate={{ backgroundColor: plan.accent }}
              transition={{ duration: .45 }}
              className="pointer-events-none absolute -right-[12%] -top-[20%] h-[520px] w-[520px] rounded-full opacity-[0.22] blur-[150px]"
            />
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:64px_64px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: .34, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex min-h-[530px] flex-col"
              >
                <div className="flex items-start justify-between gap-5 border-b border-white/[0.1] pb-6">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.32]">Selected service · {plan.number}</p>
                    <h3 className="mt-3 text-3xl font-heading font-semibold tracking-[-0.05em] md:text-4xl">{plan.name}</h3>
                  </div>
                  <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/[0.45]">{plan.suffix}</span>
                </div>

                <div className="grid flex-1 gap-8 py-9 lg:grid-cols-[1.1fr_.9fr]">
                  <div>
                    <p className="max-w-[560px] text-base leading-8 text-white/[0.5] md:text-lg">{plan.description}</p>

                    <div className="mt-9 grid gap-3 sm:grid-cols-2">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 rounded-[18px] border border-white/[0.08] bg-white/[0.035] p-4">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06]" style={{ color: plan.accent }}><Check className="h-3.5 w-3.5" /></span>
                          <span className="text-xs font-medium text-white/[0.62]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-[28px] border border-white/[0.08] bg-white/[0.035] p-5 md:p-6">
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/[0.28]">Investimento</p>
                      <p className={`mt-4 font-heading font-semibold tracking-[-0.06em] ${plan.price.length > 12 ? "text-4xl" : "text-5xl md:text-6xl"}`}>{plan.price}</p>
                      <p className="mt-3 text-xs leading-6 text-white/[0.34]">A proposta final considera conteúdo, páginas, integrações e complexidade real do projeto.</p>
                    </div>

                    <a
                      href={`${whatsappBase}${encodeURIComponent(plan.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#07101f] transition-all hover:-translate-y-0.5 hover:bg-[#eef4ff]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Solicitar proposta
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>

                <div className="grid gap-3 border-t border-white/[0.1] pt-6 sm:grid-cols-3">
                  {["Escopo antes da proposta", "Experiência responsiva", "Publicação revisada"].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-white/[0.34]">
                      <span className="text-[8px]" style={{ color: plan.accent }}>0{index + 1}</span>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(PricingSection);
