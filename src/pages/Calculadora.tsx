import { memo, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Users, MessageCircle, BarChart3, Zap, Target, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useCountUp } from "@/hooks/use-count-up";

type ServiceType = "site" | "landing" | "loja" | "ads";

const serviceOptions: { value: ServiceType; label: string; icon: React.ReactNode }[] = [
  { value: "landing", label: "Landing Page", icon: <Target className="w-4 h-4" /> },
  { value: "site", label: "Site Institucional", icon: <BarChart3 className="w-4 h-4" /> },
  { value: "loja", label: "Loja Virtual", icon: <DollarSign className="w-4 h-4" /> },
  { value: "ads", label: "Google Ads", icon: <Zap className="w-4 h-4" /> },
];

const serviceData: Record<ServiceType, { investimento: number; mensal?: number; conversaoMedia: number; ticketMedio: number; leadsMes: number; label: string }> = {
  landing: { investimento: 697, conversaoMedia: 8, ticketMedio: 500, leadsMes: 120, label: "Landing Page" },
  site: { investimento: 997, conversaoMedia: 5, ticketMedio: 800, leadsMes: 200, label: "Site Institucional" },
  loja: { investimento: 1497, conversaoMedia: 3, ticketMedio: 150, leadsMes: 500, label: "Loja Virtual" },
  ads: { investimento: 250, mensal: 250, conversaoMedia: 10, ticketMedio: 600, leadsMes: 300, label: "Google Ads" },
};

const AnimatedValue = ({ value, prefix = "", suffix = "", enabled }: { value: number; prefix?: string; suffix?: string; enabled: boolean }) => {
  const animated = useCountUp(value, 1200, enabled);
  return <>{prefix}{animated.toLocaleString("pt-BR")}{suffix}</>;
};

const StatCard = ({ icon, value, label, highlight = false, prefix = "", suffix = "", enabled }: { icon: React.ReactNode; value: number; label: string; highlight?: boolean; prefix?: string; suffix?: string; enabled: boolean }) => (
  <div className={`rounded-2xl p-5 border transition-all ${
    highlight 
      ? "bg-primary/10 border-primary/25 shadow-lg shadow-primary/10" 
      : "bg-card/80 border-border/30 shadow-sm"
  }`}>
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
      highlight ? "bg-primary/20 text-primary" : "bg-secondary/30 text-primary"
    }`}>
      {icon}
    </div>
    <p className={`text-2xl font-heading font-bold ${highlight ? "text-primary" : "text-foreground"}`}>
      <AnimatedValue value={value} prefix={prefix} suffix={suffix} enabled={enabled} />
    </p>
    <p className="text-xs text-muted-foreground mt-1">{label}</p>
  </div>
);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border/40 bg-card/95 backdrop-blur-sm px-3 py-2 shadow-lg">
        <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
        <p className="text-sm font-bold text-foreground">R$ {Number(payload[0].value).toLocaleString("pt-BR")}</p>
      </div>
    );
  }
  return null;
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

  const chartData = useMemo(() => [
    { name: "Investimento", value: result.investTotal },
    { name: "Faturamento", value: result.faturamentoAno },
  ], [result]);

  const chartColors = ["hsl(var(--muted-foreground))", "hsl(var(--primary))"];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.06),transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase mb-5">
              <Calculator className="w-3.5 h-3.5" />
              Calculadora de ROI
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 leading-tight">
              Quanto seu negócio pode{" "}
              <span className="text-primary">faturar a mais?</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Simule o retorno do seu investimento em presença digital e descubra o potencial real de crescimento.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Input Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-2 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm p-6 md:p-8 space-y-7"
            >
              <div>
                <h2 className="text-base font-heading font-semibold text-foreground mb-1">Configure sua simulação</h2>
                <p className="text-xs text-muted-foreground">Ajuste os parâmetros abaixo</p>
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3 block">Solução</label>
                <div className="grid grid-cols-2 gap-2">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setService(opt.value); setShowResult(false); }}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm transition-all ${
                        service === opt.value
                          ? "border-primary/40 bg-primary/8 text-primary font-semibold ring-1 ring-primary/15"
                          : "border-border/30 bg-background/50 text-muted-foreground hover:border-primary/20 hover:text-foreground"
                      }`}
                    >
                      {opt.icon}
                      <span className="text-xs">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Visitantes/mês</label>
                  <span className="text-sm font-bold text-primary tabular-nums">{visitantes.toLocaleString("pt-BR")}</span>
                </div>
                <input
                  type="range" min={100} max={5000} step={100} value={visitantes}
                  onChange={(e) => { setVisitantes(Number(e.target.value)); setShowResult(false); }}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary/40 accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-primary/30 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground/60 mt-1.5">
                  <span>100</span><span>5.000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Ticket médio</label>
                  <span className="text-sm font-bold text-primary tabular-nums">R$ {ticketMedio.toLocaleString("pt-BR")}</span>
                </div>
                <input
                  type="range" min={50} max={5000} step={50} value={ticketMedio}
                  onChange={(e) => { setTicketMedio(Number(e.target.value)); setShowResult(false); }}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary/40 accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-primary/30 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground/60 mt-1.5">
                  <span>R$ 50</span><span>R$ 5.000</span>
                </div>
              </div>

              <Button onClick={() => setShowResult(true)} size="lg" className="w-full mt-2">
                <BarChart3 className="w-5 h-5" />
                Calcular meu ROI
              </Button>
            </motion.div>

            {/* Result Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="lg:col-span-3 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden min-h-[520px] flex flex-col"
            >
              <AnimatePresence mode="wait">
                {!showResult ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col items-center justify-center text-center py-8"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center mb-5">
                      <TrendingUp className="w-9 h-9 text-primary/60" />
                    </div>
                    <p className="text-foreground font-heading font-semibold text-lg mb-2">Pronto para simular?</p>
                    <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                      Configure os parâmetros ao lado e clique em "Calcular meu ROI" para visualizar o potencial do seu negócio.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <h2 className="text-lg font-heading font-semibold text-foreground">Resultado estimado</h2>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {data.label} · Conversão: {data.conversaoMedia}% · Fechamento: 20%
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Stats grid with animated numbers */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <StatCard icon={<Users className="w-4 h-4" />} value={result.leadsMes} label="Leads por mês" enabled={showResult} />
                      <StatCard icon={<Users className="w-4 h-4" />} value={result.clientesMes} label="Clientes por mês" enabled={showResult} />
                      <StatCard icon={<DollarSign className="w-4 h-4" />} value={result.faturamentoMes} prefix="R$ " label="Faturamento mensal" enabled={showResult} />
                      <StatCard icon={<TrendingUp className="w-4 h-4" />} value={result.roi} suffix="%" label="ROI estimado anual" highlight enabled={showResult} />
                    </div>

                    {/* Chart: Investimento vs Faturamento */}
                    <div className="rounded-xl bg-background/60 border border-border/20 p-4 mb-5">
                      <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3">Investimento vs Retorno (anual)</p>
                      <div className="h-36">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={chartData} barCategoryGap="40%">
                            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                            <YAxis hide />
                            <Tooltip content={<CustomTooltip />} cursor={false} />
                            <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={64}>
                              {chartData.map((_, idx) => (
                                <Cell key={idx} fill={chartColors[idx]} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto space-y-3">
                      <Button variant="whatsapp" size="lg" className="w-full" asChild>
                        <a
                          href={`https://wa.me/5511932197334?text=${encodeURIComponent(`Olá! Fiz a simulação de ROI no site e o resultado foi incrível. Quero investir em ${data.label}. Pode me ajudar?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Quero esse resultado
                        </a>
                      </Button>
                      <p className="text-[10px] text-center text-muted-foreground/60">
                        * Valores estimados com base em médias de mercado. Resultados reais podem variar.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
