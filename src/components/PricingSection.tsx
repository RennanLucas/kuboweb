import { memo } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const whatsappBase = "https://wa.me/5511932197334?text=";

const plans = [
  {
    name: "Landing Page",
    number: "01",
    price: "R$ 697",
    suffix: "a partir de",
    description: "Uma página de campanha, serviço ou oferta com mensagem clara e caminho direto até o contato.",
    features: ["Design responsivo", "CTA para WhatsApp", "Formulário", "SEO básico"],
    message: "Olá, tenho interesse em uma Landing Page da Kubo Web e gostaria de fazer um orçamento.",
  },
  {
    name: "Site institucional",
    number: "02",
    price: "R$ 1.497",
    suffix: "a partir de",
    description: "Uma presença digital mais completa para apresentar empresa, serviços, diferenciais e gerar autoridade.",
    features: ["Múltiplas páginas", "Design responsivo", "Estrutura de SEO", "Integrações conforme o projeto"],
    message: "Olá, tenho interesse em um site institucional da Kubo Web e gostaria de fazer um orçamento.",
    featured: true,
  },
  {
    name: "Loja virtual",
    number: "03",
    price: "Sob orçamento",
    suffix: "escopo variável",
    description: "E-commerce com estrutura, catálogo, checkout e integrações definidas conforme a operação do negócio.",
    features: ["Catálogo", "Carrinho", "Pagamento", "Integrações"],
    message: "Olá, tenho interesse em uma loja virtual da Kubo Web e gostaria de conversar sobre o projeto.",
  },
  {
    name: "Google Ads",
    number: "04",
    price: "Sob orçamento",
    suffix: "escopo variável",
    description: "Campanhas de pesquisa estruturadas para conectar intenção de busca com seu site ou WhatsApp.",
    features: ["Configuração", "Segmentação", "Palavras-chave", "Acompanhamento"],
    message: "Olá, tenho interesse no serviço de Google Ads da Kubo Web e gostaria de conversar sobre o projeto.",
  },
];

const PricingSection = () => (
  <section id="precos" className="bg-white px-4 py-24 md:py-36">
    <div className="container mx-auto max-w-7xl">
      <div className="mb-14 grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-end md:mb-20">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Investment</span>
          </div>
          <h2 className="max-w-4xl text-[2.9rem] font-heading font-semibold leading-[0.95] tracking-[-0.052em] text-foreground sm:text-6xl md:text-7xl">
            Um investimento compatível
            <span className="block text-muted-foreground/45">com a percepção que você quer gerar.</span>
          </h2>
        </div>
        <p className="max-w-[430px] text-base leading-8 text-muted-foreground lg:justify-self-end md:text-lg">
          Projetos simples têm ponto de partida claro. Escopos com mais integrações são avaliados antes para o orçamento refletir o que realmente será construído.
        </p>
      </div>

      <div className="overflow-hidden rounded-[34px] border border-border/70 bg-[#f7f8fa] shadow-[0_30px_90px_rgba(15,23,42,.06)]">
        {plans.map((plan, index) => (
          <motion.a
            key={plan.name}
            href={`${whatsappBase}${encodeURIComponent(plan.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ delay: index * 0.05, duration: 0.45 }}
            className={`group grid gap-7 border-b border-border/70 p-6 last:border-b-0 md:grid-cols-[0.22fr_0.9fr_1.1fr_0.8fr] md:items-center md:p-8 lg:p-9 ${
              plan.featured ? "bg-[#0b1525] text-white" : "transition-colors hover:bg-white"
            }`}
          >
            <div className="flex items-center justify-between md:block">
              <span className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${plan.featured ? "text-white/35" : "text-muted-foreground"}`}>{plan.number}</span>
              <ArrowUpRight className={`h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:hidden ${plan.featured ? "text-white/55" : "text-muted-foreground"}`} />
            </div>

            <div>
              <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${plan.featured ? "text-[#78a9ff]" : "text-primary"}`}>{plan.suffix}</p>
              <h3 className="mt-3 text-2xl font-heading font-semibold tracking-[-0.035em] md:text-3xl">{plan.name}</h3>
            </div>

            <div>
              <p className={`text-sm leading-7 md:text-[15px] ${plan.featured ? "text-white/48" : "text-muted-foreground"}`}>{plan.description}</p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {plan.features.map((feature) => (
                  <span key={feature} className={`inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${plan.featured ? "text-white/48" : "text-foreground/55"}`}>
                    <Check className={`h-3 w-3 ${plan.featured ? "text-[#78a9ff]" : "text-primary"}`} />
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-end justify-between gap-4 md:justify-end">
              <div className="md:text-right">
                <p className={`text-2xl font-heading font-semibold tracking-[-0.035em] md:text-3xl ${plan.price.length > 12 ? "text-xl md:text-2xl" : ""}`}>{plan.price}</p>
                <p className={`mt-1 text-[10px] uppercase tracking-[0.18em] ${plan.featured ? "text-white/30" : "text-muted-foreground"}`}>Solicitar proposta</p>
              </div>
              <span className={`hidden h-11 w-11 items-center justify-center rounded-full md:flex ${plan.featured ? "bg-white text-[#0b1525]" : "bg-foreground text-background"}`}>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-4 rounded-[24px] border border-border/70 bg-white p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
        <div>
          <p className="font-semibold text-foreground">Manutenção mensal</p>
          <p className="mt-1 text-sm text-muted-foreground">A partir de R$ 70/mês para sites que precisam continuar atualizados e acompanhados.</p>
        </div>
        <a
          href={`${whatsappBase}${encodeURIComponent("Olá, tenho interesse na manutenção mensal da Kubo Web e gostaria de saber como funciona.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
        >
          Conversar sobre manutenção
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

export default memo(PricingSection);
