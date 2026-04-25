import { memo, useState, useEffect, lazy, Suspense } from "react";
import { MessageCircle, ArrowDown, CheckCircle2, Search, Globe, Shield, Smartphone, Palette, Zap, BarChart3, Star, Lock, ChevronRight, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ParticleField from "@/components/ui/ParticleField";
import MagneticButton from "@/components/ui/MagneticButton";
import GyroParticles from "@/components/ui/GyroParticles";


const trustItems = ["Resposta rápida", "Sem burocracia", "Atendimento direto"];
const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.%20Pode%20me%20ajudar%3F";

const rotatingWords = ["máquina de vendas", "vitrine digital", "fonte de clientes", "marca de autoridade"];

const useRotatingText = (words: string[], interval = 3000) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);
  return words[index];
};

const floatingFeatures = [
  { icon: Shield, label: "SSL Seguro", x: "-22%", y: "22%", delay: 1.8 },
  { icon: Zap, label: "PageSpeed 99", x: "104%", y: "10%", delay: 2.0 },
  { icon: TrendingUp, label: "+340% Leads", x: "104%", y: "55%", delay: 2.2 },
  { icon: Award, label: "5.0 ★★★★★", x: "-24%", y: "75%", delay: 2.4 },
];

const navItems = ["Início", "Serviços", "Portfólio", "Contato"];

const HeroVisual = ({ mobile = false }: { mobile?: boolean }) => {
  const [typedUrl, setTypedUrl] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullUrl = "kuboweb.com.br";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullUrl.length) {
        setTypedUrl(fullUrl.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 1500);
      }
    }, 70);
    return () => clearInterval(timer);
  }, []);

  const sz = mobile
    ? { pad: "px-3 py-3", padInner: "px-3 py-3", text: "text-[9px]", textSm: "text-[7px]", textXs: "text-[6px]", gap: "gap-1.5", iconBox: "w-4 h-4", iconSz: "w-2.5 h-2.5", cardP: "p-2", bannerP: "p-3", statText: "text-[9px]" }
    : { pad: "px-5 py-5", padInner: "px-5 py-5", text: "text-[11px]", textSm: "text-[9px]", textXs: "text-[7px]", gap: "gap-2", iconBox: "w-6 h-6", iconSz: "w-3 h-3", cardP: "p-3", bannerP: "p-5", statText: "text-[11px]" };

  if (mobile) {
    return (
      <div className="relative mx-auto w-full max-w-[300px] animate-fade-in">
        <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card shadow-2xl shadow-primary/5">
          {/* Title bar */}
          <div className="flex items-center gap-3 px-4 py-2 border-b border-border/15 bg-gradient-to-r from-muted/30 via-muted/20 to-muted/30">
            <div className="flex gap-[6px]">
              <span className="w-[10px] h-[10px] rounded-full bg-[hsl(0,65%,58%)]" />
              <span className="w-[10px] h-[10px] rounded-full bg-[hsl(42,65%,55%)]" />
              <span className="w-[10px] h-[10px] rounded-full bg-[hsl(130,45%,48%)]" />
            </div>
            <div className="flex-1 flex items-center gap-1.5 px-3 py-[5px] rounded-lg bg-background/70 border border-border/20">
              <Lock className="w-[10px] h-[10px] text-success shrink-0" />
              <span className="text-[10px] text-foreground/60 font-mono tracking-tight">
                {typedUrl}
                {showCursor && <span className="inline-block w-[1.5px] h-[11px] bg-primary ml-[1px] align-middle rounded-full animate-pulse" />}
              </span>
            </div>
          </div>

          {/* Site navbar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-border/10 bg-card">
            <div className="flex items-center gap-1.5">
              <div className="w-[18px] h-[18px] rounded-[5px] bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Globe className="w-[10px] h-[10px] text-primary-foreground" />
              </div>
              <span className="text-[11px] font-extrabold text-foreground tracking-tight">Kubo</span>
              <span className="text-[11px] font-extrabold text-primary tracking-tight">Web</span>
            </div>
            <div className="flex items-center gap-3">
              {navItems.map((item, i) => (
                <span key={item} className={`text-[9px] font-medium ${i === 0 ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Page content */}
          <div className={sz.pad}>
            <div className={`w-full rounded-xl bg-gradient-to-br from-primary/12 via-primary/6 to-accent/8 border border-primary/10 ${sz.bannerP} relative overflow-hidden`}>
              <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/15 ${sz.textXs} text-primary font-semibold mb-2`}>
                <Star className="w-2 h-2" /> Agência Premium
              </div>
              <div className={`font-heading font-bold text-foreground ${sz.text} leading-snug`}>
                Sua empresa merece um<br />
                <span className="text-primary">site que vende.</span>
              </div>
              <div className={`text-muted-foreground ${sz.textSm} mt-1 leading-relaxed`}>
                Design profissional + estratégia de conversão
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg font-bold shadow-md shadow-primary/25 px-3 py-1.5 text-[7px]">
                Fale Conosco
                <ChevronRight className="w-2 h-2" />
              </div>
            </div>

            <div className={`grid grid-cols-3 ${sz.gap} mt-2.5`}>
              {[
                { icon: Palette, title: "Design", desc: "UI/UX Premium", color: "from-primary/15 to-primary/5" },
                { icon: Search, title: "SEO", desc: "Google Top 10", color: "from-success/15 to-success/5" },
                { icon: Smartphone, title: "Mobile", desc: "100% Responsivo", color: "from-primary/15 to-primary/5" },
              ].map((card) => (
                <div key={card.title} className={`rounded-xl border border-border/20 bg-gradient-to-b from-background/80 to-background/40 ${sz.cardP}`}>
                  <div className={`${sz.iconBox} rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-1.5 border border-primary/8`}>
                    <card.icon className={`text-primary ${sz.iconSz}`} />
                  </div>
                  <div className={`font-heading font-bold text-foreground ${sz.textSm} leading-tight`}>{card.title}</div>
                  <div className={`text-muted-foreground ${sz.textXs} mt-0.5`}>{card.desc}</div>
                </div>
              ))}
            </div>

            <div className={`flex items-center justify-around rounded-xl bg-gradient-to-r from-primary/8 via-primary/4 to-primary/8 border border-primary/10 mt-2.5 px-2 py-1.5`}>
              {[
                { icon: Users, value: "150+", label: "Clientes" },
                { icon: TrendingUp, value: "99%", label: "Satisfação" },
                { icon: Zap, value: "<24h", label: "Resposta" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-1.5 text-center">
                  <stat.icon className="text-primary/70 w-2.5 h-2.5" />
                  <div>
                    <div className={`font-heading font-bold text-foreground ${sz.textSm} leading-none`}>{stat.value}</div>
                    <div className={`text-muted-foreground ${sz.textXs} leading-none mt-0.5`}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="relative mx-auto w-full max-w-[520px]"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-primary/8 rounded-[2rem] blur-3xl -z-10 animate-glow-pulse" />
      <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl -z-10" />

      {/* Floating badges - desktop only */}
      <div className="hidden lg:block">
        {floatingFeatures.map((feat) => (
          <motion.div
            key={feat.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
            transition={{
              opacity: { delay: feat.delay, duration: 0.5 },
              scale: { delay: feat.delay, duration: 0.5, type: "spring", stiffness: 180, damping: 15 },
              y: { delay: feat.delay + 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute z-20 flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-2xl bg-card/90 border border-border/40 shadow-lg shadow-primary/5 text-[11px] font-semibold text-foreground backdrop-blur-xl"
            style={{ left: feat.x, top: feat.y }}
          >
            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/15">
              <feat.icon className="w-3.5 h-3.5 text-primary" />
            </div>
            {feat.label}
          </motion.div>
        ))}
      </div>

      {/* Browser window */}
      <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card shadow-2xl shadow-primary/5">
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 py-2 border-b border-border/15 bg-gradient-to-r from-muted/30 via-muted/20 to-muted/30">
          <div className="flex gap-[6px]">
            <span className="w-[10px] h-[10px] rounded-full bg-[hsl(0,65%,58%)]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[hsl(42,65%,55%)]" />
            <span className="w-[10px] h-[10px] rounded-full bg-[hsl(130,45%,48%)]" />
          </div>
          <div className="flex-1 flex items-center gap-1.5 px-3 py-[5px] rounded-lg bg-background/70 border border-border/20">
            <Lock className="w-[10px] h-[10px] text-success shrink-0" />
            <span className="text-[10px] text-foreground/60 font-mono tracking-tight">
              {typedUrl}
              {showCursor && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.53, repeat: Infinity }}
                  className="inline-block w-[1.5px] h-[11px] bg-primary ml-[1px] align-middle rounded-full"
                />
              )}
            </span>
          </div>
        </div>

        {/* Site navbar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-between px-4 py-2 border-b border-border/10 bg-card"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-[18px] h-[18px] rounded-[5px] bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <Globe className="w-[10px] h-[10px] text-primary-foreground" />
            </div>
            <span className="text-[11px] font-extrabold text-foreground tracking-tight">Kubo</span>
            <span className="text-[11px] font-extrabold text-primary tracking-tight">Web</span>
          </div>
          <div className="flex items-center gap-3">
            {navItems.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.05 }}
                className={`text-[9px] font-medium transition-colors ${i === 0 ? "text-primary font-semibold" : "text-muted-foreground"}`}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Page content */}
        <div className={sz.pad}>
          {/* Hero banner */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className={`w-full rounded-xl bg-gradient-to-br from-primary/12 via-primary/6 to-accent/8 border border-primary/10 ${sz.bannerP} relative overflow-hidden`}
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/6 rounded-full blur-xl" />
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
              <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/15 ${sz.textXs} text-primary font-semibold mb-2`}>
                <Star className="w-2 h-2" /> Agência Premium
              </div>
              <div className={`font-heading font-bold text-foreground ${sz.text} leading-snug`}>
                Sua empresa merece um<br />
                <span className="text-primary">site que vende.</span>
              </div>
              <div className={`text-muted-foreground ${sz.textSm} mt-1 leading-relaxed`}>
                Design profissional + estratégia de conversão
              </div>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 1.4, duration: 0.4, ease: "easeOut" }}
                className="origin-left"
              >
                <div className={`mt-3 inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg font-bold shadow-md shadow-primary/25 px-4 py-2 text-[9px]`}>
                  Fale Conosco
                  <ChevronRight className="w-2.5 h-2.5" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Service cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className={`grid grid-cols-3 ${sz.gap} mt-3.5`}
          >
            {[
              { icon: Palette, title: "Design", desc: "UI/UX Premium", color: "from-primary/15 to-primary/5" },
              { icon: Search, title: "SEO", desc: "Google Top 10", color: "from-success/15 to-success/5" },
              { icon: Smartphone, title: "Mobile", desc: "100% Responsivo", color: "from-primary/15 to-primary/5" },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.1 }}
                className={`rounded-xl border border-border/20 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-sm ${sz.cardP} hover:border-primary/25 transition-all duration-300`}
              >
                <div className={`${sz.iconBox} rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-1.5 border border-primary/8`}>
                  <card.icon className={`text-primary ${sz.iconSz}`} />
                </div>
                <div className={`font-heading font-bold text-foreground ${sz.textSm} leading-tight`}>
                  {card.title}
                </div>
                <div className={`text-muted-foreground ${sz.textXs} mt-0.5`}>
                  {card.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Metrics bar */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
            className={`flex items-center justify-around rounded-xl bg-gradient-to-r from-primary/8 via-primary/4 to-primary/8 border border-primary/10 mt-3.5 px-4 py-2.5`}
          >
            {[
              { icon: Users, value: "150+", label: "Clientes" },
              { icon: TrendingUp, value: "99%", label: "Satisfação" },
              { icon: Zap, value: "<24h", label: "Resposta" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.1 + i * 0.1 }}
                className="flex items-center gap-1.5 text-center"
              >
                <stat.icon className="text-primary/70 w-3 h-3" />
                <div>
                  <div className={`font-heading font-bold text-foreground ${sz.textSm} leading-none`}>{stat.value}</div>
                  <div className={`text-muted-foreground ${sz.textXs} leading-none mt-0.5`}>{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const TrustIndicators = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-5 text-xs text-muted-foreground ${className}`}>
    {trustItems.map((item, i) => (
      <motion.div
        key={item}
        className="flex items-center gap-2 whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
      >
        <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
        <span className="font-medium">{item}</span>
      </motion.div>
    ))}
  </div>
);

const RotatingWord = () => {
  const word = useRotatingText(rotatingWords);
  return (
    <motion.span
      key={word}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block font-semibold text-foreground"
    >
      {word}
    </motion.span>
  );
};

const HeroSection = () => {
  const scrollToServicos = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-16 pb-4 md:min-h-[100dvh] md:py-24 px-0 md:px-4">
      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/20" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/4 rounded-full blur-[180px] hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] hidden md:block" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-primary/2 rounded-full blur-[250px] hidden md:block" />
      
      {/* Interactive particle field - desktop only */}
      <div className="absolute inset-0 hidden md:block">
        <ParticleField count={35} connectDistance={100} speed={0.2} />
      </div>

      {/* Refined dot pattern overlay - desktop */}
      <div className="absolute inset-0 hidden md:block opacity-[0.025]" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="w-full md:container md:mx-auto md:max-w-6xl relative z-10">
        {/* Mobile */}
        <div className="md:hidden flex flex-col px-5 pt-6 pb-6 gap-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/15 text-primary text-xs font-semibold w-fit tracking-wider uppercase shadow-sm"
          >
            <Lock className="w-3 h-3 text-primary" />
            Solução completa para vender mais online
          </motion.div>

          <div className="space-y-3">
            <h1 className="text-[1.875rem] sm:text-[2rem] font-heading font-bold leading-[1.1] text-foreground tracking-tight text-balance">
              Mais <span className="text-gradient-hero">clientes</span> para o seu negócio.
            </h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Site, loja virtual e anúncios — tudo em um só lugar para você vender mais.
            </p>
          </div>

          {/* Resultado em bullets — escaneável */}
          <ul className="space-y-2.5">
            {[
              "Pronto em até 30 dias",
              "Anúncios que trazem clientes",
              "Atendimento direto com quem cria",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[14px] text-foreground">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3">
            <motion.div whileTap={{ scale: 0.98 }}>
              <Button variant="whatsapp" size="xl" asChild className="w-full shadow-glow-sm">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Quero atrair mais clientes
                </a>
              </Button>
            </motion.div>
            <p className="text-[11px] text-center text-muted-foreground -mt-1">
              <Lock className="w-2.5 h-2.5 inline mr-1 -mt-0.5" />
              Resposta em até 1 hora útil · Sem compromisso
            </p>
            <motion.div whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="xl"
                onClick={scrollToServicos}
                className="border-border/50 text-muted-foreground hover:text-foreground w-full"
              >
                Ver Serviços
                <ArrowDown className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-success shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-row min-h-[580px] items-center justify-between max-w-6xl mx-auto gap-8 lg:gap-16">
          <div className="flex-1 relative z-10 flex flex-col justify-center items-start text-left space-y-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/15 text-primary text-xs font-semibold w-fit tracking-wider uppercase shadow-sm"
            >
              <Lock className="w-3 h-3 text-primary" />
              Solução completa para vender mais online
            </motion.div>

            <div className="space-y-5">
              <h1 className="text-[2rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text-[3rem] font-heading font-extrabold leading-[1.1] text-foreground tracking-[-0.02em] text-balance">
                Mais <span className="text-gradient-hero">clientes</span> para o seu negócio.
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.35 }}
                className="text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                Site, loja virtual e anúncios — tudo em um só lugar para você vender mais.
              </motion.p>

              {/* Resultado escaneável — 3 bullets */}
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.35 }}
                className="space-y-2.5 pt-1"
              >
                {[
                  "Pronto em até 30 dias",
                  "Anúncios que trazem clientes",
                  "Atendimento direto com quem cria",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[15px] text-foreground">
                    <CheckCircle2 className="w-[18px] h-[18px] text-success shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.35 }}
              className="flex flex-col items-start gap-3"
            >
              <div className="flex flex-row items-center gap-3">
                <MagneticButton>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button variant="whatsapp" size="xl" asChild className="shadow-glow-sm">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5" />
                        Quero atrair mais clientes
                      </a>
                    </Button>
                  </motion.div>
                </MagneticButton>
                <MagneticButton>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      variant="outline"
                      size="xl"
                      onClick={scrollToServicos}
                      className="border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
                    >
                      Ver Serviços
                      <ArrowDown className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </MagneticButton>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-success" />
                Resposta em até 1 hora útil · Sem compromisso
              </p>
            </motion.div>

            <TrustIndicators />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);