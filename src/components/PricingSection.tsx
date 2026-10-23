import { memo } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const whatsappBase = "https://wa.me/5511932197334?text=";

const plans = [
  {
    name: "Landing Page",
    price: "A partir de R$ 697",
    description: "Para campanhas, ofertas e serviços que precisam de uma página direta, clara e focada em contato.",
    features: ["Design responsivo", "CTA para WhatsApp", "Formulário de contato", "SEO básico"],
    message: "Olá, tenho interesse em uma Landing Page da Kubo Web e gostaria de fazer um orçamento.",
  },
  {
    name: "Site institucional",
    price: "A partir de R$ 1.497",
    description: "Para empresas e profissionais que precisam apresentar serviços, diferenciais e informações com mais profundidade.",
    features: ["Múltiplas páginas", "Design responsivo", "Estrutura de SEO", "Integrações conforme o projeto"],
    message: "Olá, tenho interesse em um site institucional da Kubo Web e gostaria de fazer um orçamento.",
    featured: true,
  },
  {
    name: "Loja virtual",
    price: "Sob orçamento",
    description: "Para negócios que querem vender produtos online com uma experiência organizada e profissional.",
    features: ["Catálogo de produtos", "Carrinho de compras", "Pagamento", "Gestão conforme a solução escolhida"],
    message: "Olá, tenho interesse em uma loja virtual da Kubo Web e gostaria de conversar sobre o projeto.",
  },
  {
    name: "Google Ads",
    price: "Sob orçamento",
    description: "Para negócios que já querem atrair demanda por meio de campanhas de pesquisa e direcionar para site ou WhatsApp.",
    features: ["Configuração de campanha", "Segmentação", "Palavras-chave", "Acompanhamento"],
    message: "Olá, tenho interesse no serviço de Google Ads da Kubo Web e gostaria de conversar sobre o projeto.",
  },
];

const PricingSection = () => (
  <section id="precos" className="px-4 py-20 md:py-28">
    <div className="container mx-auto max-w-6xl">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end mb-10 md:mb-14">
        <div>
          <p className="section-label mb-4">Investimento</p>
          <h2 className="section-title max-w-xl">Valores claros onde faz sentido. Orçamento quando o projeto varia.</h2>
        </div>
        <div className="lg:justify-self-end lg:max-w-lg">
          <p className="text-muted-foreground leading-relaxed">
            O valor final depende do escopo, conteúdo e integrações. Por isso, projetos mais variáveis são avaliados antes de fechar.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {plans.map((plan, index) => (
          <motion.article
            key={plan.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            className={`rounded-[28px] border p-6 md:p-8 ${
              plan.featured
                ? "border-foreground bg-foreground text-background"
                : "border-border/70 bg-card text-foreground"
            }`}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <p className={`text-sm font-semibold ${plan.featured ? "text-background/65" : "text-muted-foreground"}`}>{plan.name}</p>
                <h3 className="mt-2 text-2xl md:text-3xl font-heading font-bold tracking-[-0.03em]">{plan.price}</h3>
              </div>
              {plan.featured && (
                <span className="rounded-full bg-background px-3 py-1.5 text-[11px] font-semibold text-foreground">Mais completo</span>
              )}
            </div>

            <p className={`leading-relaxed ${plan.featured ? "text-background/70" : "text-muted-foreground"}`}>
              {plan.description}
            </p>

            <ul className="mt-7 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <span className={`flex h-5 w-5 items-center justify-center rounded-full ${plan.featured ? "bg-background/12" : "bg-primary/10 text-primary"}`}>
                    <Check className="h-3 w-3" />
                  </span>
                  <span className={plan.featured ? "text-background/80" : "text-foreground/80"}>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={`${whatsappBase}${encodeURIComponent(plan.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                plan.featured
                  ? "bg-background text-foreground hover:bg-background/90"
                  : "bg-foreground text-background hover:bg-foreground/90"
              }`}
            >
              Falar sobre este projeto
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.article>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-4 rounded-[24px] border border-border/70 bg-secondary/35 p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
        <div>
          <p className="font-semibold text-foreground">Já tem um site e só precisa de manutenção?</p>
          <p className="mt-1 text-sm text-muted-foreground">Plano de manutenção a partir de R$ 70/mês.</p>
        </div>
        <a
          href={`${whatsappBase}${encodeURIComponent("Olá, tenho interesse na manutenção mensal da Kubo Web e gostaria de saber como funciona.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
        >
          <MessageCircle className="h-4 w-4" />
          Conversar no WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default memo(PricingSection);
