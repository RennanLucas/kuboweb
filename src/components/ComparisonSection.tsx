import { memo } from "react";
import { motion } from "framer-motion";
import { Check, X, ShieldCheck, Zap, Sparkles, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisonCriteria = [
  {
    feature: "Design & Exclusividade",
    amador: "Templates prontos e copiados de outros sites",
    plataformas: "Layouts genéricos e difíceis de customizar",
    kuboweb: "100% exclusivo e desenhado para a sua marca",
    highlight: true,
  },
  {
    feature: "Velocidade de Carregamento",
    amador: "Lento (+5 segundos), perde metade dos visitantes",
    plataformas: "Pesado e travado por excesso de scripts",
    kuboweb: "Ultrarrápido (< 1.2s), nota 95+ no Google PageSpeed",
    highlight: true,
  },
  {
    feature: "Foco em Conversão (CRO)",
    amador: "Apenas 'bonitinho', sem estratégia comercial",
    plataformas: "Páginas estáticas sem fluxo de captação",
    kuboweb: "Arquitetura persuasiva com gatilhos para WhatsApp",
    highlight: true,
  },
  {
    feature: "SEO & Google Top 10",
    amador: "Ignora tags, schema e boas práticas",
    plataformas: "Configuração básica e limitada",
    kuboweb: "SEO Técnico completo, Schema.org e sitemap indexável",
    highlight: false,
  },
  {
    feature: "Propriedade do Site",
    amador: "Você fica refém para qualquer alteração básica",
    plataformas: "Fica preso a mensalidades perpétuas",
    kuboweb: "O site, código e domínio são 100% seus",
    highlight: true,
  },
  {
    feature: "Suporte e Atendimento",
    amador: "Some após a entrega ou demora dias para responder",
    plataformas: "Suporte por e-mail ou robô em inglês",
    kuboweb: "WhatsApp direto com quem desenvolveu o projeto",
    highlight: false,
  },
];

const ComparisonSection = () => {
  return (
    <section id="comparativo" className="py-24 md:py-32 px-4 relative overflow-hidden bg-card/30">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/4 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-14 md:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            Transparência Absoluta
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-foreground tracking-tight"
          >
            Por que a Kubo Web é a escolha dos <span className="text-gradient-hero">profissionais</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Entenda por que economizar no site pode custar milhares de reais em clientes perdidos todos os meses.
          </motion.p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="overflow-hidden rounded-3xl border border-border/40 bg-card/60 backdrop-blur-xl shadow-2xl shadow-primary/5">
            <div className="grid grid-cols-12 bg-muted/30 border-b border-border/30 text-sm font-semibold text-foreground py-5 px-6">
              <div className="col-span-4 flex items-center gap-2 text-muted-foreground">
                Critério de Avaliação
              </div>
              <div className="col-span-2.5 text-center text-muted-foreground font-normal">
                Criadores Gratuitos (Wix)
              </div>
              <div className="col-span-2.5 text-center text-muted-foreground font-normal">
                Freelancer Genérico
              </div>
              <div className="col-span-3 text-center text-primary font-bold flex items-center justify-center gap-1.5 bg-primary/10 py-1.5 rounded-xl border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" /> Kubo Web
              </div>
            </div>

            <div className="divide-y divide-border/20">
              {comparisonCriteria.map((item, index) => (
                <div
                  key={item.feature}
                  className={`grid grid-cols-12 items-center px-6 py-4.5 transition-colors duration-200 hover:bg-muted/10 ${
                    item.highlight ? "bg-primary/[0.015]" : ""
                  }`}
                >
                  <div className="col-span-4 font-heading font-semibold text-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                    {item.feature}
                  </div>
                  <div className="col-span-2.5 text-center text-xs text-muted-foreground px-3 flex flex-col items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5 text-destructive" />
                    </div>
                    <span>{item.plataformas}</span>
                  </div>
                  <div className="col-span-2.5 text-center text-xs text-muted-foreground px-3 flex flex-col items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5 text-destructive" />
                    </div>
                    <span>{item.amador}</span>
                  </div>
                  <div className="col-span-3 text-center text-xs font-medium text-foreground px-4 py-2 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl border border-primary/25 flex flex-col items-center gap-1.5 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-success/15 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-success" />
                    </div>
                    <span className="font-semibold text-foreground leading-snug">{item.kuboweb}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Card View */}
        <div className="lg:hidden space-y-4">
          {comparisonCriteria.map((item, index) => (
            <motion.div
              key={item.feature}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="rounded-2xl border border-border/40 bg-card/60 backdrop-blur-md p-5 space-y-3.5"
            >
              <div className="font-heading font-bold text-foreground text-base border-b border-border/20 pb-2 flex items-center justify-between">
                <span>{item.feature}</span>
                <span className="text-[11px] font-semibold text-primary px-2 py-0.5 rounded-full bg-primary/10">
                  Diferencial
                </span>
              </div>

              {/* Kubo Web Highlight */}
              <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/25 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-success" />
                </div>
                <div>
                  <div className="text-xs font-bold text-primary flex items-center gap-1">
                    Kubo Web
                  </div>
                  <div className="text-xs font-medium text-foreground mt-0.5 leading-relaxed">
                    {item.kuboweb}
                  </div>
                </div>
              </div>

              {/* Other Options */}
              <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs text-muted-foreground">
                <div className="p-2.5 rounded-lg bg-muted/20 border border-border/15 flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground/80">
                    <X className="w-3 h-3 text-destructive shrink-0" />
                    Amador / Sobrinho
                  </div>
                  <span className="text-[11px] leading-tight">{item.amador}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-muted/20 border border-border/15 flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground/80">
                    <X className="w-3 h-3 text-destructive shrink-0" />
                    Wix / Prontos
                  </div>
                  <span className="text-[11px] leading-tight">{item.plataformas}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA teaser */}
        <div className="mt-12 text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            Quer um projeto que gere credibilidade real desde o primeiro segundo?
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Button variant="whatsapp" size="lg" asChild className="shadow-glow-sm">
              <a
                href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vi%20o%20comparativo%20no%20site%20da%20Kubo%20Web%20e%20quero%20um%20projeto%20com%20essa%20qualidade%20profissional.%20Pode%20me%20atender%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Garantir Meu Site Profissional
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ComparisonSection);
