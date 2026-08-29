import { useState, useMemo, memo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const RoiCalculator = () => {
  const [visitors, setVisitors] = useState(2500);
  const [ticket, setTicket] = useState(350);

  const stats = useMemo(() => {
    const commonConversion = 0.01; // 1%
    const kuboConversion = 0.07; // 7%

    const commonSales = Math.round(visitors * commonConversion);
    const kuboSales = Math.round(visitors * kuboConversion);

    const commonRevenue = commonSales * ticket;
    const kuboRevenue = kuboSales * ticket;
    const revenueDifference = kuboRevenue - commonRevenue;

    return {
      commonSales,
      kuboSales,
      commonRevenue,
      kuboRevenue,
      revenueDifference,
    };
  }, [visitors, ticket]);

  const whatsappMessage = useMemo(() => {
    const text = `Olá, Kubo Web! Calculei a projeção de vendas no site:
• Visitantes estimados: ${visitors}/mês
• Ticket Médio: R$ ${ticket}
• Ganho projetado com site de alta conversão: +R$ ${stats.revenueDifference.toLocaleString("pt-BR")}/mês

Quero estruturar meu site para alcançar esse resultado!`;
    return `https://wa.me/5511932197334?text=${encodeURIComponent(text)}`;
  }, [visitors, ticket, stats]);

  return (
    <section id="calculadora-roi" className="py-28 md:py-40 px-4 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-14 md:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider"
          >
            <TrendingUp className="w-3.5 h-3.5" />
            Simulador de Retorno (ROI)
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="section-title"
          >
            Quanto a sua empresa está <span className="text-gradient-hero">deixando de faturar</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle max-w-xl"
          >
            Ajuste os controles abaixo e descubra o impacto financeiro de aumentar a taxa de conversão do seu site.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center bg-card rounded-3xl p-6 sm:p-10 border border-border/50 shadow-xl shadow-primary/[0.04]">
          {/* Sliders column */}
          <div className="lg:col-span-6 space-y-8">
            {/* Slider 1: Visitors */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-primary shrink-0" />
                  Visitantes estimados por mês:
                </label>
                <span className="text-sm sm:text-base font-heading font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-xl w-fit">
                  {visitors.toLocaleString("pt-BR")} acessos
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="20000"
                step="250"
                value={visitors}
                onChange={(e) => setVisitors(Number(e.target.value))}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[11px] text-muted-foreground">
                <span>500</span>
                <span>10.000</span>
                <span>20.000+</span>
              </div>
            </div>

            {/* Slider 2: Ticket */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <DollarSign className="w-4 h-4 text-primary shrink-0" />
                  Ticket médio do seu serviço/produto:
                </label>
                <span className="text-sm sm:text-base font-heading font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-xl w-fit">
                  R$ {ticket.toLocaleString("pt-BR")}
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2500"
                step="50"
                value={ticket}
                onChange={(e) => setTicket(Number(e.target.value))}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[11px] text-muted-foreground">
                <span>R$ 50</span>
                <span>R$ 1.250</span>
                <span>R$ 2.500+</span>
              </div>
            </div>
          </div>

          {/* Results Projection */}
          <div className="lg:col-span-6 bg-gradient-to-br from-primary/[0.08] via-card to-card p-6 sm:p-8 rounded-2xl border border-primary/20 space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-border/30">
                <span className="text-xs text-muted-foreground">Faturamento com site comum (1% conv.)</span>
                <span className="text-sm font-semibold text-foreground/70">
                  R$ {stats.commonRevenue.toLocaleString("pt-BR")}/mês
                </span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-border/30">
                <span className="text-xs text-foreground font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  Faturamento com Kubo Web (7% conv.)
                </span>
                <span className="text-base font-heading font-bold text-foreground">
                  R$ {stats.kuboRevenue.toLocaleString("pt-BR")}/mês
                </span>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                  Ganho adicional projetado por mês:
                </span>
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-primary">
                  + R$ {stats.revenueDifference.toLocaleString("pt-BR")}
                  <span className="text-xs font-normal text-muted-foreground block mt-0.5">/mês em vendas extras</span>
                </div>
              </div>
            </div>

            <Button variant="whatsapp" size="lg" asChild className="w-full shadow-glow font-bold">
              <a href={whatsappMessage} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Alcançar este Faturamento
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(RoiCalculator);
