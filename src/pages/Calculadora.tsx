import { memo, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Users, MessageCircle, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

type ServiceType = "site" | "landing" | "loja" | "ads";

const serviceOptions: { value: ServiceType; label: string; emoji: string }[] = [
  { value: "landing", label: "Landing Page", emoji: "📄" },
  { value: "site", label: "Site Institucional", emoji: "🏢" },
  { value: "loja", label: "Loja Virtual", emoji: "🛒" },
  { value: "ads", label: "Google Ads", emoji: "📢" },
];

const serviceData: Record<ServiceType, { investimento: number; mensal?: number; conversaoMedia: number; ticketMedio: number; leadsMes: number; label: string }> = {
  landing: { investimento: 697, conversaoMedia: 8, ticketMedio: 500, leadsMes: 120, label: "Landing Page" },
  site: { investimento: 997, conversaoMedia: 5, ticketMedio: 800, leadsMes: 200, label: "Site Institucional" },
  loja: { investimento: 1497, conversaoMedia: 3, ticketMedio: 150, leadsMes: 500, label: "Loja Virtual" },
  ads: { investimento: 250, mensal: 250, conversaoMedia: 10, ticketMedio: 600, leadsMes: 300, label: "Google Ads" },
};

const Calculadora = () => {
  const [service, setService] = useState<ServiceType>("landing");
  const [visitantes, setVisitantes] = useState(500);
  const [ticketMedio, setTicketMedio] = useState(500);
  const [showResult, setShowResult] = useState(false);

  const data = serviceData[service];

  const result = useMemo(() => {
    const taxaConversao = data.conversaoMedia / 100;
    const leadsMes = Math.round(visitantes * taxaConversao);
    const taxaFechamento = 0.2;
    const clientesMes = Math.round(leadsMes * taxaFechamento);
    const faturamentoMes = clientesMes * ticketMedio;
    const faturamentoAno = faturamentoMes * 12;
    const investTotal = data.investimento + (data.mensal ? data.mensal * 12 : 0);
    const roi = investTotal > 0 ? Math.round(((faturamentoAno - investTotal) / investTotal) * 100) : 0;
    return { leadsMes, clientesMes, faturamentoMes, faturamentoAno, roi, investTotal };
  }, [service, visitantes, ticketMedio, data]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-background to-background" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] hidden md:block" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-accent/30 rounded-full blur-[120px] hidden md:block" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 md:mb-14"
          >
            <p className="section-label justify-center mb-4">Calculadora de ROI</p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 leading-tight">
              Quanto seu negócio pode <span className="text-gradient">faturar a mais?</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Simule o retorno do seu investimento em presença digital e descubra o potencial de crescimento.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Input Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card-premium p-6 md:p-8 space-y-6 bg-gradient-to-br from-card to-background shadow-xl shadow-primary/5 border-primary/10"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg font-heading font-semibold text-foreground">Configure sua simulação</h2>
              </div>

              {/* Service */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Tipo de solução</label>
                <div className="grid grid-cols-2 gap-2">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setService(opt.value); setShowResult(false); }}
                    className={`px-3 py-2.5 rounded-xl border text-left transition-all text-sm ${
                        service === opt.value
                          ? "border-primary/40 bg-gradient-to-br from-primary/10 to-primary/5 text-primary font-semibold shadow-md shadow-primary/10 ring-1 ring-primary/20"
                          : "border-border/40 bg-card text-muted-foreground hover:border-primary/30 hover:bg-accent/30"
                      }`}
                    >
                      <span className="text-base">{opt.emoji}</span>
                      <p className="text-xs mt-0.5">{opt.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Visitantes */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground">Visitantes esperados/mês</label>
                  <span className="text-sm font-bold text-primary">{visitantes.toLocaleString("pt-BR")}</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={5000}
                  step={100}
                  value={visitantes}
                  onChange={(e) => { setVisitantes(Number(e.target.value)); setShowResult(false); }}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                  <span>100</span>
                  <span>5.000</span>
                </div>
              </div>

              {/* Ticket */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground">Ticket médio (R$)</label>
                  <span className="text-sm font-bold text-primary">R$ {ticketMedio.toLocaleString("pt-BR")}</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={5000}
                  step={50}
                  value={ticketMedio}
                  onChange={(e) => { setTicketMedio(Number(e.target.value)); setShowResult(false); }}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                  <span>R$ 50</span>
                  <span>R$ 5.000</span>
                </div>
              </div>

              <Button
                onClick={() => setShowResult(true)}
                size="lg"
                className="w-full"
              >
                <BarChart3 className="w-5 h-5" />
                Calcular meu ROI
              </Button>
            </motion.div>

            {/* Result Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card-premium border-glow p-6 md:p-8 relative overflow-hidden flex flex-col shadow-xl shadow-primary/5 border-primary/15"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-transparent to-primary/5" />

              {!showResult ? (
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center py-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-foreground font-heading font-semibold mb-2">Pronto para simular?</p>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Configure os dados ao lado e clique em "Calcular meu ROI" para ver o potencial do seu negócio.
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 flex-1 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-heading font-semibold text-foreground">Resultado estimado</h2>
                      <p className="text-[11px] text-muted-foreground">{data.label} · Taxa de conversão: {data.conversaoMedia}%</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-card rounded-xl p-4 border border-border/30 shadow-sm">
                      <Users className="w-4 h-4 text-primary mb-1" />
                      <p className="text-2xl font-heading font-bold text-foreground">{result.leadsMes}</p>
                      <p className="text-[11px] text-muted-foreground">Leads/mês</p>
                    </div>
                    <div className="bg-card rounded-xl p-4 border border-border/30 shadow-sm">
                      <Users className="w-4 h-4 text-primary mb-1" />
                      <p className="text-2xl font-heading font-bold text-foreground">{result.clientesMes}</p>
                      <p className="text-[11px] text-muted-foreground">Clientes/mês</p>
                    </div>
                    <div className="bg-card rounded-xl p-4 border border-border/30 shadow-sm">
                      <DollarSign className="w-4 h-4 text-primary mb-1" />
                      <p className="text-xl font-heading font-bold text-foreground">R$ {result.faturamentoMes.toLocaleString("pt-BR")}</p>
                      <p className="text-[11px] text-muted-foreground">Faturamento/mês</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20 shadow-md shadow-primary/10">
                      <TrendingUp className="w-4 h-4 text-primary mb-1" />
                      <p className="text-xl font-heading font-bold text-primary">{result.roi}%</p>
                      <p className="text-[11px] text-muted-foreground">ROI estimado/ano</p>
                    </div>
                  </div>

                  <div className="bg-secondary/20 rounded-xl p-3 border border-border/30 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Investimento total (1º ano)</span>
                      <span className="font-semibold text-foreground">R$ {result.investTotal.toLocaleString("pt-BR")}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-muted-foreground">Faturamento estimado/ano</span>
                      <span className="font-bold text-primary">R$ {result.faturamentoAno.toLocaleString("pt-BR")}</span>
                    </div>
                  </div>

                  <div className="mt-auto space-y-2">
                    <Button variant="whatsapp" size="lg" className="w-full shadow-glow-sm" asChild>
                      <a
                        href={`https://wa.me/5511932197334?text=${encodeURIComponent(`Olá! Fiz a simulação de ROI no site e o resultado foi incrível. Quero investir em ${data.label}. Pode me ajudar?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Quero esse resultado
                      </a>
                    </Button>
                    <p className="text-[10px] text-center text-muted-foreground">
                      * Valores estimados com base em médias de mercado. Resultados reais podem variar.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default memo(Calculadora);
