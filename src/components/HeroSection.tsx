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
  Sparkles,
  Smartphone,
  Monitor,
  Check,
  TrendingUp,
  Star,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SpotlightCard from "@/components/ui/SpotlightCard";
import BorderBeam from "@/components/ui/BorderBeam";
import SpeedGauge from "@/components/ui/SpeedGauge";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20empresa.%20Pode%20me%20ajudar%3F";

const HeroSection = () => {
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 md:pt-36 md:pb-32 px-4 overflow-hidden">
      {/* Background Lighting Gradients & Radial Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[600px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-5 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-5 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (Copy & CTAs) */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-7">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold tracking-wider uppercase shadow-glow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Agência de Alta Conversão • Projetos Sob Medida</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-[2.25rem] sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] font-heading font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground"
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
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Desenvolvemos Landing Pages, Sites Institucionais e Lojas Virtuais com design exclusivo,
              carregamento ultra-rápido no Google e estratégia comercial para transformar visitantes em clientes no WhatsApp.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-3.5 pt-2"
            >
              <Button variant="whatsapp" size="xl" asChild className="w-full sm:w-auto shadow-glow font-bold text-sm sm:text-base">
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
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 text-xs font-medium text-muted-foreground"
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

          {/* Right Column (Next-Gen Interactive Studio Preview) */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <SpotlightCard className="p-0 border-primary/30 shadow-2xl shadow-primary/10 overflow-hidden relative">
                <BorderBeam size={250} duration={12} colorFrom="#38bdf8" colorTo="#818cf8" />

                {/* Studio Browser Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 bg-secondary/40 backdrop-blur-md">
                  {/* Mac Buttons */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>

                  {/* Browser URL bar */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-background/80 border border-border/40 text-[11px] text-muted-foreground shadow-inner">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="font-mono text-[10px] text-foreground/80">https://seusite.com.br</span>
                    <span className="text-[9px] text-emerald-400 font-bold ml-1 hidden xs:inline">● Seguro</span>
                  </div>

                  {/* Viewport Device Toggle */}
                  <div className="flex items-center gap-1 p-0.5 rounded-lg bg-background/80 border border-border/40">
                    <button
                      type="button"
                      onClick={() => setDeviceMode("desktop")}
                      className={`p-1 rounded-md transition-colors ${
                        deviceMode === "desktop" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                      aria-label="Desktop view"
                    >
                      <Monitor className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeviceMode("mobile")}
                      className={`p-1 rounded-md transition-colors ${
                        deviceMode === "mobile" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                      aria-label="Mobile view"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Studio Live Content Canvas */}
                <div className="p-5 sm:p-6 space-y-4 bg-gradient-to-b from-card/60 via-card/90 to-card">
                  {/* Gauge & Speed Badge */}
                  <SpeedGauge score={99} label="Google PageSpeed Score" />

                  {/* Realtime WhatsApp Lead Notification Simulation */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-card to-card border border-emerald-500/30 flex items-start gap-3 shadow-md"
                  >
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 shadow-sm">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-bold text-foreground truncate">Novo Lead no WhatsApp</p>
                        <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-md shrink-0">
                          há 2 min
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                        "Olá! Vi o site e quero solicitar um orçamento para o meu negócio."
                      </p>
                    </div>
                  </motion.div>

                  {/* Interactive Stats Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-background/80 border border-border/40">
                      <div className="flex items-center gap-1.5 text-primary text-xs font-semibold mb-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Conversão</span>
                      </div>
                      <p className="font-heading font-extrabold text-base sm:text-lg text-foreground">12.8%</p>
                      <p className="text-[10px] text-emerald-400 font-medium">+340% média nacional</p>
                    </div>

                    <div className="p-3 rounded-xl bg-background/80 border border-border/40">
                      <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold mb-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>Avaliação</span>
                      </div>
                      <p className="font-heading font-extrabold text-base sm:text-lg text-foreground">5.0 ★★★★★</p>
                      <p className="text-[10px] text-muted-foreground">+150 clientes satisfeitos</p>
                    </div>
                  </div>

                  {/* Interactive Live CTA inside preview */}
                  <div className="pt-2">
                    <Button
                      variant="whatsapp"
                      size="default"
                      asChild
                      className="w-full shadow-glow-sm text-xs font-bold rounded-xl"
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <Sparkles className="w-3.5 h-3.5" />
                        Quero um Site com Esta Performance
                      </a>
                    </Button>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
