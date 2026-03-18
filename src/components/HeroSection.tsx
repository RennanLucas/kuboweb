import { memo, useState, useEffect } from "react";
import { MessageCircle, ArrowDown, CheckCircle2, Search, Globe, Shield, Smartphone, Palette, Zap, BarChart3, Star, Lock, ChevronRight, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

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
  { icon: Shield, label: "SSL Seguro", x: "-16%", y: "8%", delay: 1.8 },
  { icon: Zap, label: "PageSpeed 99", x: "100%", y: "15%", delay: 2.0 },
  { icon: TrendingUp, label: "+340% Leads", x: "-14%", y: "78%", delay: 2.2 },
  { icon: Award, label: "5.0 ★★★★★", x: "102%", y: "72%", delay: 2.4 },
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className={`relative mx-auto ${mobile ? "w-full max-w-[300px]" : "w-full max-w-[520px]"}`}
    >
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-primary/6 rounded-[2rem] blur-3xl -z-10" />
      <div className="absolute -inset-4 bg-primary/4 rounded-3xl blur-xl -z-10" />

      {/* Floating badges - desktop only */}
      {!mobile && floatingFeatures.map((feat) => (
        <motion.div
          key={feat.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { delay: feat.delay, duration: 0.5 },
            scale: { delay: feat.delay, duration: 0.5, type: "spring", stiffness: 180, damping: 15 },
            y: { delay: feat.delay + 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute z-20 flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-2xl bg-card border border-border/40 shadow-lg shadow-foreground/5 text-[11px] font-semibold text-foreground backdrop-blur-md"
          style={{ left: feat.x, top: feat.y }}
        >
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center border border-primary/10">
            <feat.icon className="w-3.5 h-3.5 text-primary" />
          </div>
          {feat.label}
        </motion.div>
      ))}

      {/* Browser window */}
      <div className="relative overflow-hidden rounded-2xl border border-border/25 bg-card shadow-2xl">
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
            className={`w-full rounded-xl bg-gradient-to-br from-primary/12 via-primary/6 to-accent/8 border border-primary/8 ${sz.bannerP} relative overflow-hidden`}
          >
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/8 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full blur-xl" />
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
                <div className={`mt-3 inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg font-bold shadow-md shadow-primary/20 ${mobile ? "px-3 py-1.5 text-[7px]" : "px-4 py-2 text-[9px]"}`}>
                  Fale Conosco
                  <ChevronRight className={`${mobile ? "w-2 h-2" : "w-2.5 h-2.5"}`} />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Service cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className={`grid grid-cols-3 ${sz.gap} ${mobile ? "mt-2.5" : "mt-3.5"}`}
          >
            {[
              { icon: Palette, title: "Design", desc: "UI/UX Premium", color: "from-primary/12 to-primary/4" },
              { icon: Search, title: "SEO", desc: "Google Top 10", color: "from-success/12 to-success/4" },
              { icon: Smartphone, title: "Mobile", desc: "100% Responsivo", color: "from-primary/12 to-primary/4" },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.1 }}
                className={`rounded-xl border border-border/20 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-sm ${sz.cardP} hover:border-primary/20 transition-colors`}
              >
                <div className={`${sz.iconBox} rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-1.5 border border-primary/5`}>
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
            className={`flex items-center justify-around rounded-xl bg-gradient-to-r from-muted/15 via-muted/10 to-muted/15 border border-border/10 ${mobile ? "mt-2.5 px-2 py-1.5" : "mt-3.5 px-4 py-2.5"}`}
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
                <stat.icon className={`text-primary/60 ${mobile ? "w-2.5 h-2.5" : "w-3 h-3"}`} />
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

const TrustTicker = () => {
  const items = [...trustItems, ...trustItems, ...trustItems, ...trustItems];
  return (
    <div className="w-full overflow-hidden group" style={{ contain: "layout paint" }}>
      <div
        className="flex items-center gap-10 w-max animate-trust-ticker md:group-hover:[animation-play-state:paused]"
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap text-xs text-muted-foreground shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
            <span className="font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const RotatingWord = () => {
  const word = useRotatingText(rotatingWords);
  return (
    <motion.span
      key={word}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-gradient-primary inline-block"
    >
      {word}
    </motion.span>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);

  const scrollToServicos = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16 pb-4 md:py-24 px-0 md:px-4">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-3xl hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl hidden md:block" />

      <motion.div style={{ y }} className="w-full md:container md:mx-auto md:max-w-5xl relative z-10 md:px-6 lg:px-8">
        {/* Mobile */}
        <div className="md:hidden flex flex-col min-h-[calc(100dvh-5rem)] justify-center px-5 py-6 gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold w-fit tracking-wide uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Web Design Profissional
          </motion.div>

          <div className="space-y-3">
            <h1 className="text-[1.75rem] sm:text-3xl font-heading font-bold leading-[1.12] text-foreground tracking-tight">
              Não tenha apenas um site. Tenha uma <RotatingWord />
            </h1>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Sites estratégicos que transformam visitantes em clientes — com design premium, SEO e atendimento direto.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <motion.div whileTap={{ scale: 0.98 }}>
              <Button variant="whatsapp" size="xl" asChild className="w-full">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </motion.div>
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

          <TrustTicker />
          <HeroVisual mobile />
        </div>

        {/* Desktop */}
        <div className="hidden md:flex flex-row min-h-[580px] items-center justify-center max-w-6xl mx-auto">
          <div className="flex-1 pr-8 lg:pr-16 relative z-10 flex flex-col justify-center items-center text-center space-y-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold w-fit tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Web Design Profissional
            </motion.div>

            <div className="space-y-5">
              <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-heading font-bold leading-[1.08] text-foreground tracking-tight">
                Não tenha apenas um site. Tenha uma <RotatingWord />
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto"
              >
                Sites estratégicos que transformam visitantes em clientes — com design premium, SEO e atendimento direto.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-row items-center justify-center gap-3"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button variant="whatsapp" size="xl" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="outline"
                  size="xl"
                  onClick={scrollToServicos}
                  className="border-border/50 text-muted-foreground hover:text-foreground"
                >
                  Ver Serviços
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>

            <TrustTicker />
          </div>

          <div className="flex-1 relative min-h-[500px] flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default memo(HeroSection);
