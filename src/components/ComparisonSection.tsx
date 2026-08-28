import { memo } from "react";
import { CheckCircle2, XCircle, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const comparisons = [
  {
    feature: "Velocidade de Carregamento",
    bad: "Lento (3s a 7s), fazendo você perder mais de 50% dos visitantes.",
    good: "Ultra rápido (< 1s com PageSpeed 95+), retendo o tráfego e melhorando o anúncio.",
  },
  {
    feature: "Design & Identidade",
    bad: "Templates genéricos e repetitivos que não transmitem credibilidade.",
    good: "Design exclusivo sob medida desenhado para transmitir autoridade máxima.",
  },
  {
    feature: "Estratégia de Conversão",
    bad: "Textos soltos e sem foco comercial, que apenas informam mas não vendem.",
    good: "Copywriting persuasivo, gatilhos mentais e chamadas estratégicas para ação.",
  },
  {
    feature: "Posicionamento no Google (SEO)",
    bad: "Sem otimização técnica, ficando invisível nas buscas dos clientes.",
    good: "SEO estruturado, sitemap XML e marcação Schema.org para atrair leads orgânicos.",
  },
  {
    feature: "Integração com WhatsApp",
    bad: "Botão simples que exige que o cliente invente a mensagem do zero.",
    good: "Mensagens pré-configuradas e rastreamento de conversão em tempo real.",
  },
  {
    feature: "Suporte & Atendimento",
    bad: "Suporte demorado ou plataformas com robôs sem suporte humano.",
    good: "Atendimento direto com especialistas via WhatsApp, sem burocracia.",
  },
];

const ComparisonSection = () => {
  return (
    <section id="comparativo" className="py-24 md:py-36 px-4 relative overflow-hidden bg-background">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-14 md:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Diferencial Competitivo
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="section-title"
          >
            Por que um site comum não vende e a <span className="text-gradient-hero">Kubo Web gera resultados</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="section-subtitle max-w-2xl"
          >
            A diferença entre ter apenas um link na internet e ter uma verdadeira máquina de vendas trabalhando pela sua empresa 24 horas por dia.
          </motion.p>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch mb-12">
          {/* Traditional / Common sites card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-6 sm:p-8 bg-card/40 border border-border/40 backdrop-blur-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-border/30">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">O mercado comum</span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mt-1">Sites Amadores & Genéricos</h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center justify-center text-destructive shrink-0">
                  <XCircle className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-5">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-destructive/80 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground/80">{item.feature}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.bad}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/30 text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-destructive/80" />
              Resultado: Baixo retorno sobre investimento e perda de clientes para a concorrência.
            </div>
          </motion.div>

          {/* Kubo Web high conversion card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-primary/[0.08] via-card to-card border-2 border-primary/40 shadow-2xl shadow-primary/10 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Top highlight badge */}
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-extrabold uppercase px-4 py-1 rounded-bl-2xl tracking-wider">
              Padrão Kubo Web
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-primary/20">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">Alta Performance</span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mt-1">Sites Kubo Web de Alta Conversão</h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                  <Zap className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-5">
                {comparisons.map((item, index) => (
                  <div key={index} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{item.feature}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.good}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-primary font-medium flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Mais autoridade, mais contatos e escala de vendas.
              </div>
              <Button size="sm" variant="default" asChild className="w-full sm:w-auto shadow-md">
                <a href="#precos">
                  Ver Planos
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(ComparisonSection);
