import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  Lock,
  Globe,
  Sparkles,
  TrendingUp,
  Star,
  Users,
  Smartphone,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const showcaseTabs = [
  {
    id: "landing",
    label: "Landing Page",
    badge: "Alta Conversão",
    headline: "Transforme Visitantes em Clientes no WhatsApp",
    subtext: "Estrutura focada 100% em conversão com copywriting persuasivo e botões estratégicos.",
    stats: [
      { label: "Taxa de Conversão", val: "12.8%", icon: TrendingUp },
      { label: "PageSpeed Score", val: "99/100", icon: Zap },
      { label: "Tempo de Carga", val: "0.6s", icon: Clock },
    ],
    previewFeatures: ["Copywriting com Gatilhos", "Botões de WhatsApp Otimizados", "Design Responsivo"],
    price: "R$ 560",
  },
  {
    id: "institucional",
    label: "Site Institucional",
    badge: "Mais Vendido",
    headline: "Autoridade e Presença no Topo do Google",
    subtext: "Múltiplas páginas para sua empresa transmitir credibilidade máxima e captar leads orgânicos.",
    stats: [
      { label: "Retenção de Usuários", val: "+84%", icon: Users },
      { label: "SEO On-Page", val: "100%", icon: Globe },
      { label: "Avaliação Média", val: "5.0 ★", icon: Star },
    ],
    previewFeatures: ["Estrutura Multi-páginas", "Painel Administrativo", "SEO Técnico Avançado"],
    price: "R$ 760",
  },
  {
    id: "loja",
    label: "Loja Virtual",
    badge: "E-commerce",
    headline: "Vendas Automáticas 24 Horas por Dia",
    subtext: "Catálogo completo com carrinho de compras, cálculo de frete e checkout seguro via Pix e cartão.",
    stats: [
      { label: "Checkout Otimizado", val: "1 Clique", icon: Zap },
      { label: "Segurança SSL", val: "256-bit", icon: Lock },
      { label: "Gestão Integrada", val: "Automática", icon: Layers },
    ],
    previewFeatures: ["Gestão de Estoque", "Checkout Pix & Cartão", "Painel de Pedidos"],
    price: "R$ 1.200",
  },
];

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20empresa.%20Pode%20me%20ajudar%3F";

const HeroSection = () => {
  const [activeTabId, setActiveTabId] = useState("landing");
  const activeTab = showcaseTabs.find((t) => t.id === activeTabId) || showcaseTabs[0];

  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-4 overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] md:w-[1100px] h-[550px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Top Centered Content */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold tracking-wider uppercase shadow-glow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Agência de Alta Conversão • Projetos Sob Medida</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground tracking-tight leading-[1.12]"
          >
            Sua empresa merece um site que{" "}
            <span className="text-gradient-hero">realmente gera vendas todos os dias</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Desenvolvemos Landing Pages, Sites Institucionais e Lojas Virtuais com design premium,
            velocidade recorde no Google e foco total em converter visitantes em clientes no WhatsApp.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
          >
            <Button variant="whatsapp" size="xl" asChild className="w-full sm:w-auto shadow-glow font-bold">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Falar com Especialista no WhatsApp
              </a>
            </Button>

            <Button
              variant="outline"
              size="xl"
              asChild
              className="w-full sm:w-auto border-border/60 hover:border-primary/40 hover:bg-secondary/60 text-foreground"
            >
              <a href="#simulador">
                <Zap className="w-4 h-4 text-primary" />
                Simular Investimento
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 text-xs font-medium text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>PageSpeed 99/100</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Garantia de 7 Dias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Entrega em 5 a 10 dias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-primary" />
              <span>100% Mobile First</span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Live Showcase Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 md:mt-20 max-w-5xl mx-auto"
        >
          {/* Tab Selector */}
          <div className="flex flex-wrap sm:flex-nowrap justify-center gap-1.5 sm:gap-2 mb-4 p-1.5 rounded-2xl bg-card/60 border border-border/40 backdrop-blur-xl max-w-full mx-auto shadow-lg">
            {showcaseTabs.map((tab) => {
              const isSelected = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 sm:gap-2 ${
                    isSelected
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-showcase-tab"
                      className="absolute inset-0 bg-primary rounded-xl shadow-md"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                  <span
                    className={`relative z-10 text-[9px] px-1.5 py-0.5 rounded-md uppercase tracking-wider font-extrabold ${
                      isSelected
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {tab.price}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Browser Window Device Frame */}
          <div className="rounded-3xl border border-border/50 bg-gradient-to-b from-card/90 via-card/80 to-card/95 shadow-2xl backdrop-blur-2xl overflow-hidden ring-1 ring-white/10">
            {/* Window Title Bar */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-border/40 bg-secondary/30 gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* URL Bar */}
              <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 rounded-xl bg-background/80 border border-border/40 text-[11px] sm:text-xs text-muted-foreground flex-1 max-w-[200px] sm:max-w-xs justify-center shadow-inner truncate">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="font-mono text-[10px] sm:text-[11px] text-foreground/80 truncate">https://seusite.com.br/</span>
                <span className="text-[9px] sm:text-[10px] text-emerald-400 font-bold ml-1 hidden xs:inline shrink-0">● Seguro</span>
              </div>

              <div className="text-[11px] font-semibold text-primary hidden sm:block shrink-0">
                Padrão Kubo Web
              </div>
            </div>

            {/* Mockup Body Content */}
            <div className="p-5 sm:p-8 md:p-10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center"
                >
                  {/* Left Column: Mockup Text & Action */}
                  <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      {activeTab.badge}
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-foreground leading-tight">
                      {activeTab.headline}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {activeTab.subtext}
                    </p>

                    {/* Features checklist */}
                    <div className="grid sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
                      {activeTab.previewFeatures.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-secondary/30 border border-border/30 text-xs font-semibold text-foreground/90"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <Button variant="whatsapp" size="lg" asChild className="w-full sm:w-auto shadow-md">
                        <a
                          href={`https://wa.me/5511932197334?text=${encodeURIComponent(
                            `Olá! Quero criar um projeto no modelo ${activeTab.label} (${activeTab.price}). Pode me explicar os próximos passos?`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Quero este Formato ({activeTab.price})
                        </a>
                      </Button>
                      <span className="text-xs text-muted-foreground text-center sm:text-left">Entrega em até 10 dias</span>
                    </div>
                  </div>

                  {/* Right Column: Live Metric Dashboard Cards */}
                  <div className="lg:col-span-5 space-y-3.5">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/15 via-card to-card border border-primary/30 shadow-lg">
                      <div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-3 flex items-center justify-between">
                        <span>Desempenho Comprovado</span>
                        <Zap className="w-4 h-4 text-primary" />
                      </div>

                      <div className="space-y-3">
                        {activeTab.stats.map((st) => (
                          <div
                            key={st.label}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-background/80 border border-border/40"
                          >
                            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                              <st.icon className="w-3.5 h-3.5 text-primary" />
                              <span>{st.label}</span>
                            </div>
                            <span className="text-sm font-heading font-extrabold text-foreground">
                              {st.val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Mini client quote */}
                    <div className="p-3.5 rounded-2xl bg-secondary/30 border border-border/30 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                        KW
                      </div>
                      <div className="text-[11px] leading-tight">
                        <p className="font-bold text-foreground">Resultado Real de Cliente</p>
                        <p className="text-muted-foreground">+340% de novos contatos no primeiro mês.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HeroSection);