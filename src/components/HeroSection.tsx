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

const heroMetrics = [
  { label: "PageSpeed Score no Google", val: "99/100", icon: Zap, highlight: "Máxima Performance" },
  { label: "Tempo de Carregamento", val: "0.6s", icon: Clock, highlight: "Instantâneo" },
  { label: "Taxa Média de Conversão", val: "12.8%", icon: TrendingUp, highlight: "+340% Média" },
  { label: "Retenção de Visitantes", val: "+84%", icon: Users, highlight: "Baixo Rejeição" },
];

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20empresa.%20Pode%20me%20ajudar%3F";

const HeroSection = () => {
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
                className="w-full sm:w-auto border-border/60 hover:border-primary/40 hover:bg-secondary/60 text-foreground font-semibold"
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
              className="p-5 sm:p-6 rounded-3xl bg-card/60 border border-border/50 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-border/30">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Métricas de Performance</span>
                </div>
                <span className="text-[11px] font-bold text-primary flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> Padrão Kubo Web
                </span>
              </div>
              
              <div className="space-y-2.5 mt-4">
                {heroMetrics.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 rounded-2xl bg-background/70 border border-border/40 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <stat.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground">{stat.label}</p>
                        <p className="text-[10px] text-muted-foreground">{stat.highlight}</p>
                      </div>
                    </div>
                    <span className="text-sm font-heading font-extrabold text-primary">{stat.val}</span>
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
              className="p-4 rounded-2xl bg-gradient-to-br from-primary/[0.08] via-card to-card border border-primary/25 flex items-center gap-3.5 shadow-lg"
            >
              <div className="w-10 h-10 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                KW
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[10px] font-bold text-muted-foreground ml-1.5">5.0 ★</span>
                </div>
                <p className="text-xs font-semibold text-foreground leading-snug">
                  "Triplicamos os contatos no WhatsApp nas primeiras semanas."
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  Dr. Rafael V. • Clínica Médica
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);