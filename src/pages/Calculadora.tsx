import { memo, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Users, MessageCircle, BarChart3, Zap, Target, ArrowUpRight, CheckCircle2, Sparkles, Shield, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

type ServiceType = "site" | "landing" | "loja" | "ads";

const serviceOptions: { value: ServiceType; label: string; icon: React.ReactNode; desc: string }[] = [
  { value: "landing", label: "Landing Page", icon: <Target className="w-4 h-4" />, desc: "Foco em conversão" },
  { value: "site", label: "Site Institucional", icon: <BarChart3 className="w-4 h-4" />, desc: "Credibilidade online" },
  { value: "loja", label: "Loja Virtual", icon: <DollarSign className="w-4 h-4" />, desc: "Vendas 24/7" },
  { value: "ads", label: "Google Ads", icon: <Zap className="w-4 h-4" />, desc: "Tráfego qualificado" },
];

const serviceData: Record<ServiceType, { investimento: number; mensal?: number; conversaoMedia: number; ticketMedio: number; leadsMes: number; label: string; beneficios: string[] }> = {
  landing: { investimento: 697, conversaoMedia: 8, ticketMedio: 500, leadsMes: 120, label: "Landing Page", beneficios: ["Alta taxa de conversão", "Otimizada para campanhas", "Carregamento ultra-rápido", "Design persuasivo"] },
  site: { investimento: 997, conversaoMedia: 5, ticketMedio: 800, leadsMes: 200, label: "Site Institucional", beneficios: ["Presença profissional", "SEO otimizado", "Múltiplas páginas", "Credibilidade da marca"] },
  loja: { investimento: 1497, conversaoMedia: 3, ticketMedio: 150, leadsMes: 500, label: "Loja Virtual", beneficios: ["Vendas automatizadas", "Gestão de produtos", "Pagamento integrado", "Estoque em tempo real"] },
  ads: { investimento: 250, mensal: 250, conversaoMedia: 10, ticketMedio: 600, leadsMes: 300, label: "Google Ads", beneficios: ["Resultados imediatos", "Segmentação precisa", "Relatórios detalhados", "Otimização contínua"] },
};

const formatCurrency = (value: number) => `R$ ${value.toLocaleString("pt-BR")}`;

const StatCard = ({ icon, value, label, highlight = false, delay = 0 }: { icon: React.ReactNode; value: string | number; label: string; highlight?: boolean; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={`rounded-2xl p-5 border transition-all group hover:scale-[1.02] ${
      highlight
        ? "bg-primary/10 border-primary/25 shadow-lg shadow-primary/10"
        : "bg-card/80 border-border/30 shadow-sm hover:border-primary/20 hover:shadow-md"
    }`}
  >
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
      highlight ? "bg-primary/20 text-primary" : "bg-secondary/30 text-primary"
    }`}>
      {icon}
    </div>
    <p className={`text-2xl font-heading font-bold tabular-nums ${highlight ? "text-primary" : "text-foreground"}`}>{value}</p>
    <p className="text-xs text-muted-foreground mt-1">{label}</p>
  </motion.div>
);

const ProgressBar = ({ label, value, max, color = "primary" }: { label: string; value: number; max: number; color?: string }) => {
  const percentage = Math.min((value / max) * 100, 100);
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-semibold text-foreground tabular-nums">{formatCurrency(value)}</span>
      </div>
      <div className="h-2 rounded-full bg-secondary/30 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full ${color === "primary" ? "bg-primary" : "bg-whatsapp"}`}
        />
      </div>
    </div>
  );
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
    const lucroLiquido = faturamentoAno - investTotal;
    const paybackMeses = faturamentoMes > 0 ? Math.ceil(investTotal / faturamentoMes) : 0;
    return { leadsMes, clientesMes, faturamentoMes, faturamentoAno, roi, investTotal, lucroLiquido, paybackMeses };
  }, [service, visitantes, ticketMedio, data]);

  const sliderPercentVisitantes = ((visitantes - 100) / (5000 - 100)) * 100;
  const sliderPercentTicket = ((ticketMedio - 50) / (5000 - 50)) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.06),transparent_60%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-40 -left-32 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 -right-32 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Calculadora Inteligente de ROI
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 leading-tight">
              Descubra quanto sua empresa pode{" "}
              <span className="text-primary">faturar a mais</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Simule o retorno do seu investimento em presença digital com dados reais de mercado e veja o potencial de crescimento do seu negócio.
            </p>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
          >
            {[
              { icon: <Shield className="w-4 h-4" />, text: "Dados baseados em mercado" },
              { icon: <Clock className="w-4 h-4" />, text: "Resultado em segundos" },
              { icon: <CheckCircle2 className="w-4 h-4" />, text: "100% gratuito" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="text-primary">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </motion.div>

          {/* Main grid */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Input Card - 5 cols */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-5 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm p-6 md:p-8 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-base font-heading font-semibold text-foreground">Configure sua simulação</h2>
                  <p className="text-xs text-muted-foreground">Ajuste os parâmetros abaixo</p>
                </div>
              </div>

              {/* Service selector */}
              <div>
                <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-3 block">Tipo de solução</label>
                <div className="grid grid-cols-2 gap-2">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setService(opt.value); setShowResult(false); }}
                      className={`flex flex-col items-start gap-1 px-3 py-3 rounded-xl border text-left transition-all ${
                        service === opt.value
                          ? "border-primary/40 bg-primary/8 ring-1 ring-primary/15"
                          : "border-border/30 bg-background/50 hover:border-primary/20"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={service === opt.value ? "text-primary" : "text-muted-foreground"}>{opt.icon}</span>
                        <span className={`text-xs font-semibold ${service === opt.value ? "text-primary" : "text-foreground"}`}>{opt.label}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground pl-6">{opt.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service benefits */}
              <div className="rounded-xl bg-background/60 border border-border/20 p-4">
                <p className="text-[10px] font-semibold text-foreground/70 uppercase tracking-wider mb-2">Incluso na solução</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {data.beneficios.map((b, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Visitantes slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Visitantes/mês</label>
                  <span className="text-sm font-bold text-primary tabular-nums bg-primary/8 px-2 py-0.5 rounded-md">{visitantes.toLocaleString("pt-BR")}</span>
                </div>
                <div className="relative">
                  <div className="h-2 rounded-full bg-secondary/30 overflow-hidden">
                    <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${sliderPercentVisitantes}%` }} />
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={5000}
                    step={100}
                    value={visitantes}
                    onChange={(e) => { setVisitantes(Number(e.target.value)); setShowResult(false); }}
                    className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
                  />
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground/50 mt-1.5">
                  <span>100</span>
                  <span>5.000</span>
                </div>
              </div>

              {/* Ticket slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Ticket médio</label>
                  <span className="text-sm font-bold text-primary tabular-nums bg-primary/8 px-2 py-0.5 rounded-md">R$ {ticketMedio.toLocaleString("pt-BR")}</span>
                </div>
                <div className="relative">
                  <div className="h-2 rounded-full bg-secondary/30 overflow-hidden">
                    <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${sliderPercentTicket}%` }} />
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={5000}
                    step={50}
                    value={ticketMedio}
                    onChange={(e) => { setTicketMedio(Number(e.target.value)); setShowResult(false); }}
                    className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
                  />
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground/50 mt-1.5">
                  <span>R$ 50</span>
                  <span>R$ 5.000</span>
                </div>
              </div>

              {/* Investment preview */}
              <div className="rounded-xl bg-primary/5 border border-primary/15 p-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Investimento</p>
                  <p className="text-lg font-heading font-bold text-foreground">{formatCurrency(data.investimento)}</p>
                  {data.mensal && <p className="text-[10px] text-muted-foreground">+ {formatCurrency(data.mensal)}/mês em verba</p>}
                </div>
                <Button onClick={() => setShowResult(true)} size="lg">
                  <BarChart3 className="w-5 h-5" />
                  Calcular ROI
                </Button>
              </div>
            </motion.div>

            {/* Result Card - 7 cols */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 }}
              className="lg:col-span-7 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm p-6 md:p-8 relative overflow-hidden min-h-[560px] flex flex-col"
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
                    <div className="relative mb-6">
                      <div className="w-24 h-24 rounded-3xl bg-primary/8 border border-primary/15 flex items-center justify-center">
                        <TrendingUp className="w-11 h-11 text-primary/50" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                    <p className="text-foreground font-heading font-semibold text-xl mb-2">Pronto para simular?</p>
                    <p className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-6">
                      Configure os parâmetros ao lado e clique em "Calcular ROI" para visualizar uma projeção completa do potencial do seu negócio.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      {["Leads estimados", "Faturamento mensal", "ROI anual", "Payback"].map((item, i) => (
                        <span key={i} className="text-[11px] px-3 py-1.5 rounded-full bg-secondary/20 border border-border/20 text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col"
                  >
                    {/* Result header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-lg font-heading font-semibold text-foreground">Projeção de resultados</h2>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                            {data.label}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Conversão: {data.conversaoMedia}% · Fechamento: 20% · {visitantes.toLocaleString("pt-BR")} visitantes/mês
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      <StatCard icon={<Users className="w-4 h-4" />} value={result.leadsMes} label="Leads/mês" delay={0.05} />
                      <StatCard icon={<Users className="w-4 h-4" />} value={result.clientesMes} label="Clientes/mês" delay={0.1} />
                      <StatCard icon={<DollarSign className="w-4 h-4" />} value={formatCurrency(result.faturamentoMes)} label="Faturamento/mês" delay={0.15} />
                      <StatCard icon={<TrendingUp className="w-4 h-4" />} value={`${result.roi}%`} label="ROI anual" highlight delay={0.2} />
                    </div>

                    {/* Progress bars */}
                    <div className="rounded-xl bg-background/60 border border-border/20 p-5 space-y-4 mb-6">
                      <p className="text-[10px] font-semibold text-foreground/70 uppercase tracking-wider">Comparativo anual</p>
                      <ProgressBar label="Investimento total (1º ano)" value={result.investTotal} max={Math.max(result.faturamentoAno, result.investTotal)} color="primary" />
                      <ProgressBar label="Faturamento estimado anual" value={result.faturamentoAno} max={Math.max(result.faturamentoAno, result.investTotal)} color="whatsapp" />
                    </div>

                    {/* Extra metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="rounded-xl bg-background/60 border border-border/20 p-3 text-center">
                        <p className="text-lg font-heading font-bold text-foreground tabular-nums">{formatCurrency(result.lucroLiquido)}</p>
                        <p className="text-[10px] text-muted-foreground">Lucro líquido/ano</p>
                      </div>
                      <div className="rounded-xl bg-background/60 border border-border/20 p-3 text-center">
                        <p className="text-lg font-heading font-bold text-primary tabular-nums">{result.paybackMeses} {result.paybackMeses === 1 ? "mês" : "meses"}</p>
                        <p className="text-[10px] text-muted-foreground">Tempo de payback</p>
                      </div>
                      <div className="rounded-xl bg-background/60 border border-border/20 p-3 text-center">
                        <p className="text-lg font-heading font-bold text-foreground tabular-nums">{formatCurrency(result.faturamentoAno)}</p>
                        <p className="text-[10px] text-muted-foreground">Receita anual</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto space-y-3">
                      <Button variant="whatsapp" size="lg" className="w-full" asChild>
                        <a
                          href={`https://wa.me/5511932197334?text=${encodeURIComponent(`Olá! Fiz a simulação de ROI no site e o resultado foi incrível: ROI de ${result.roi}% com ${data.label}. Quero saber mais!`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Quero alcançar esse resultado
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                      <p className="text-[10px] text-center text-muted-foreground/60">
                        * Valores estimados com base em médias de mercado. Resultados reais podem variar conforme nicho e estratégia.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Bottom trust section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-border/30 bg-card/40 backdrop-blur-sm px-8 py-6">
              <p className="text-sm font-heading font-semibold text-foreground">Por que investir em presença digital?</p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                {[
                  { value: "93%", label: "das jornadas de compra começam online" },
                  { value: "5x", label: "mais leads com site otimizado" },
                  { value: "70%", label: "dos consumidores pesquisam antes de comprar" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-lg font-heading font-bold text-primary">{stat.value}</span>
                    <span className="text-xs text-muted-foreground max-w-[160px] text-left">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default memo(Calculadora);
