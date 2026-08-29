import { memo } from "react";
import { motion } from "framer-motion";
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
  const landingStats = showcaseTabs[0].stats;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden">
      {/* Background Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] md:w-[1100px] h-[550px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold tracking-wider uppercase shadow-glow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Agência de Alta Conversão • Projetos Sob Medida</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-[2.25rem] sm:text-5xl lg:text-[3.75rem] xl:text-[4.2rem] font-heading font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
            >
              Sua empresa merece um site que{" "}
              <span className="text-gradient-hero">realmente gera vendas todos os dias</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Desenvolvemos Landing Pages, Sites Institucionais e Lojas Virtuais com design premium,
              velocidade recorde no Google e foco total em converter visitantes em clientes no WhatsApp.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-3.5 pt-2"
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
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-4 sm:gap-8 pt-4 text-xs font-medium text-muted-foreground"
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

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-4">
            {/* Performance Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 rounded-3xl bg-card/60 border border-border/40 backdrop-blur-xl shadow-2xl"
            >
              <div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Desempenho Comprovado</span>
                <Zap className="w-4 h-4 text-primary" />
              </div>
              
              <div className="space-y-3 mt-4">
                {landingStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 rounded-2xl bg-background/60 border border-border/30"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                        <stat.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
                    </div>
                    <span className="text-base font-heading font-extrabold text-foreground">{stat.val}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Client Result Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="p-4 rounded-2xl bg-gradient-to-br from-primary/[0.06] to-card border border-primary/20 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                KW
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">Resultado Real de Cliente</p>
                <p className="text-xs text-muted-foreground">+340% de novos contatos no primeiro mês.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);