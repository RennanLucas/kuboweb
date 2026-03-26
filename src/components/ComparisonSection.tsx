import { memo } from "react";
import { motion } from "framer-motion";
import { Check, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { name: "Design profissional", landing: true, site: true, loja: true },
  { name: "Responsivo (mobile)", landing: true, site: true, loja: true },
  { name: "SEO otimizado", landing: true, site: true, loja: true },
  { name: "Botão WhatsApp", landing: true, site: true, loja: true },
  { name: "Formulário de contato", landing: true, site: true, loja: true },
  { name: "Múltiplas páginas", landing: false, site: true, loja: true },
  { name: "Domínio personalizado", landing: false, site: true, loja: true },
  { name: "Blog integrado", landing: false, site: true, loja: true },
  { name: "Painel administrativo", landing: false, site: true, loja: true },
  { name: "Catálogo de produtos", landing: false, site: false, loja: true },
  { name: "Carrinho de compras", landing: false, site: false, loja: true },
  { name: "Integração de pagamento", landing: false, site: false, loja: true },
  { name: "Gestão de estoque", landing: false, site: false, loja: true },
];

const plans = [
  { key: "landing" as const, name: "Landing Page", price: "R$ 560" },
  { key: "site" as const, name: "Site Profissional", price: "R$ 760", popular: true },
  { key: "loja" as const, name: "Loja Virtual", price: "R$ 1.200" },
];

const Cell = ({ checked }: { checked: boolean }) => (
  <td className="px-3 py-3 text-center">
    {checked ? (
      <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
        <Check className="w-3.5 h-3.5 text-primary" />
      </div>
    ) : (
      <div className="w-6 h-6 rounded-full bg-muted/40 flex items-center justify-center mx-auto">
        <X className="w-3.5 h-3.5 text-muted-foreground/40" />
      </div>
    )}
  </td>
);

const ComparisonSection = () => (
  <section className="py-24 md:py-32 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_70%)]" />

    <div className="container mx-auto max-w-4xl relative">
      <div className="text-center mb-12 md:mb-16 space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label justify-center"
        >
          Comparativo
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Qual solução é ideal para você?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="section-subtitle"
        >
          Compare os recursos de cada plano e escolha o melhor para o seu negócio.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/30">
                <th className="text-left px-5 py-5 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-[40%]">
                  Recurso
                </th>
                {plans.map((plan) => (
                  <th key={plan.key} className="px-3 py-5 text-center min-w-[120px]">
                    <div className="space-y-1">
                      {plan.popular && (
                        <span className="inline-block text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-2 py-0.5 uppercase tracking-wider">
                          Popular
                        </span>
                      )}
                      <p className="text-xs font-semibold text-foreground">{plan.name}</p>
                      <p className="text-lg font-heading font-bold text-primary">{plan.price}</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={feature.name}
                  className={`border-b border-border/15 transition-colors hover:bg-primary/[0.02] ${
                    i % 2 === 0 ? "bg-background/30" : ""
                  }`}
                >
                  <td className="px-5 py-3 text-foreground/80 text-sm">{feature.name}</td>
                  <Cell checked={feature.landing} />
                  <Cell checked={feature.site} />
                  <Cell checked={feature.loja} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="px-5 py-6 bg-muted/20 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Não sabe qual escolher? Fale conosco e receba uma recomendação personalizada.
          </p>
          <Button variant="whatsapp" size="lg" asChild>
            <a
              href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vi%20o%20comparativo%20de%20planos%20no%20site%20e%20quero%20ajuda%20para%20escolher%20a%20melhor%20op%C3%A7%C3%A3o%20para%20meu%20neg%C3%B3cio."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com especialista
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default memo(ComparisonSection);
