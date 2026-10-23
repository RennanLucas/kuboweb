import { memo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";

const whatsappBase = "https://wa.me/5511932197334?text=";

const plans = [
  {
    id: "landing",
    number: "01",
    name: "Landing Page",
    eyebrow: "Campanhas e ofertas",
    price: "R$ 697",
    suffix: "a partir de",
    description: "Uma página focada em uma oferta, serviço ou campanha, com leitura guiada e caminho direto até o contato.",
    features: ["Direção visual", "Responsivo", "CTA para WhatsApp", "Formulário", "SEO básico", "Publicação"],
    message: "Olá, tenho interesse em uma Landing Page da Kubo Web e gostaria de fazer um orçamento.",
  },
  {
    id: "site",
    number: "02",
    name: "Site institucional",
    eyebrow: "Presença e autoridade",
    price: "R$ 1.497",
    suffix: "a partir de",
    description: "Uma presença digital mais completa para apresentar empresa, serviços, diferenciais e contato com uma estrutura própria.",
    features: ["Múltiplas páginas", "Direção visual", "Responsivo", "Estrutura de SEO", "Integrações", "Publicação"],
    message: "Olá, tenho interesse em um site institucional da Kubo Web e gostaria de fazer um orçamento.",
  },
  {
    id: "loja",
    number: "03",
    name: "Loja virtual",
    eyebrow: "Catálogo e venda",
    price: "Sob orçamento",
    suffix: "escopo variável",
    description: "E-commerce com catálogo, carrinho, checkout e integrações definidos conforme a operação do negócio.",
    features: ["Arquitetura da loja", "Catálogo", "Carrinho", "Pagamento", "Responsivo", "Integrações"],
    message: "Olá, tenho interesse em uma loja virtual da Kubo Web e gostaria de conversar sobre o projeto.",
  },
  {
    id: "ads",
    number: "04",
    name: "Google Ads",
    eyebrow: "Aquisição e intenção",
    price: "Sob orçamento",
    suffix: "escopo variável",
    description: "Campanhas de pesquisa estruturadas para conectar intenção de busca com a página e o contato certos.",
    features: ["Configuração", "Segmentação", "Palavras-chave", "Negativas", "Conversões", "Acompanhamento"],
    message: "Olá, tenho interesse no serviço de Google Ads da Kubo Web e gostaria de conversar sobre o projeto.",
  },
] as const;

const PricingSection = () => {
  const [activeId, setActiveId] = useState<(typeof plans)[number]["id"]>("site");
  const active = plans.find((plan) => plan.id === activeId)!;

  return (
    <section id="precos" className="relative overflow-hidden bg-white px-4 py-24 md:py-36">
      <div className="pointer-events-none absolute left-[-18%] top-[18%] h-[620px] w-[620px] rounded-full bg-[#e4ebff] blur-[180px]" />

      <div className="container relative mx-auto max-w-[1380px]">
        <div className="grid gap-9 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2458d8]">Investment</p>
            <h2 className="mt-5 max-w-[900px] text-[3rem] font-heading font-semibold leading-[.91] tracking-[-0.068em] text-[#08111f] sm:text-6xl md:text-7xl lg:text-[5.45rem]">
              O escopo muda.
              <span className="block text-[#08111f]/[0.32]">A régua visual não.</span>
            </h2>
          </div>
          <p className="max-w-[470px] text-base leading-8 text-[#08111f]/[0.46] lg:justify-self-end md:text-lg">
            Selecione o tipo de projeto. Os valores simples têm ponto de partida claro; operações com mais variáveis são orçadas depois de entender o escopo.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[30px] border border-black/[0.08] bg-[#07101f] shadow-[0_40px_130px_rgba(8,17,31,.16)] md:mt-20 md:rounded-[38px]">
          <div className="grid lg:grid-cols-[.72fr_1.28fr]">
            <div className="border-b border-white/[0.09] p-4 lg:border-b-0 lg:border-r lg:p-6">
              <p className="px-3 pb-4 pt-2 text-[8px] font-semibold uppercase tracking-[0.22em] text-white/[0.24]">Escolha o projeto</p>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {plans.map((plan) => {
                  const selected = plan.id === activeId;
                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setActiveId(plan.id)}
                      className={`group flex items-center gap-4 rounded-[18px] border px-4 py-4 text-left transition-all md:px-5 ${
                        selected
                          ? "border-white/[0.12] bg-white text-[#08111f] shadow-[0_18px_45px_rgba(0,0,0,.2)]"
                          : "border-transparent bg-white/[0.025] text-white hover:border-white/[0.08] hover:bg-white/[0.05]"
                      }`}
                    >
                      <span className={`text-[9px] font-semibold ${selected ? "text-[#2458d8]" : "text-white/[0.24]"}`}>{plan.number}</span>
                      <span className="min-w-0 flex-1">
                        <span className={`block text-[8px] font-semibold uppercase tracking-[0.16em] ${selected ? "text-[#08111f]/[0.36]" : "text-white/[0.25]"}`}>{plan.eyebrow}</span>
                        <span className="mt-1 block truncate text-sm font-semibold">{plan.name}</span>
                      </span>
                      <ArrowUpRight className={`h-4 w-4 transition-transform ${selected ? "text-[#2458d8]" : "text-white/[0.22] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"}`} />
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 rounded-[18px] border border-white/[0.08] bg-white/[0.025] p-4">
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#8db6ff]">Continuidade</p>
                <p className="mt-2 text-sm font-semibold text-white">Manutenção · R$ 70/mês+</p>
                <p className="mt-2 text-xs leading-5 text-white/[0.34]">Para sites que precisam continuar atualizados e acompanhados depois da publicação.</p>
              </div>
            </div>

            <div className="relative min-h-[530px] overflow-hidden p-6 md:p-9 lg:p-12">
              <div className="pointer-events-none absolute right-[-14%] top-[-22%] h-[520px] w-[520px] rounded-full bg-[#326cff]/[0.18] blur-[150px]" />
              <div className="pointer-events-none absolute bottom-[-34%] left-[8%] h-[420px] w-[420px] rounded-full bg-cyan-300/[0.06] blur-[150px]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex h-full flex-col"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.1] pb-6">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8db6ff]">{active.eyebrow}</p>
                      <h3 className="mt-2 text-3xl font-heading font-semibold tracking-[-0.05em] text-white md:text-4xl">{active.name}</h3>
                    </div>
                    <span className="rounded-full border border-white/[0.1] bg-white/[0.035] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/[0.38]">
                      Projeto {active.number}
                    </span>
                  </div>

                  <div className="grid flex-1 gap-10 py-9 md:grid-cols-[1.05fr_.95fr] md:items-end">
                    <div>
                      <p className="max-w-[560px] text-base leading-8 text-white/[0.46] md:text-lg">{active.description}</p>
                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {active.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 border-t border-white/[0.1] py-3 text-xs text-white/[0.5]">
                            <Check className="h-3.5 w-3.5 text-[#8db6ff]" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-white/[0.1] bg-white/[0.04] p-5 md:p-6">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/[0.25]">Investimento</p>
                      <p className={`mt-4 font-heading font-semibold tracking-[-0.055em] text-white ${active.price.length > 12 ? "text-3xl md:text-4xl" : "text-5xl md:text-6xl"}`}>
                        {active.price}
                      </p>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/[0.28]">{active.suffix}</p>
                      <a
                        href={`${whatsappBase}${encodeURIComponent(active.message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-7 inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#07101f] transition-all hover:-translate-y-0.5 hover:bg-[#edf3ff]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Solicitar proposta
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.1] pt-5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/[0.26]">
                    <span>Escopo definido antes do desenvolvimento</span>
                    <span className="text-[#8db6ff]">Direção · Design · Código</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(PricingSection);
