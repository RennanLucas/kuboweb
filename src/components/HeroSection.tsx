import { memo, useState, useEffect } from "react";
import { MessageCircle, ArrowDown, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import heroMockup from "@/assets/hero-mockup.jpg";

const trustItems = ["Resposta rápida", "Sem burocracia", "Atendimento direto"];
const whatsappUrl = "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.%20Pode%20me%20ajudar%3F";

const rotatingWords = ["máquina de vendas", "vitrine digital", "fonte de clientes", "marca de autoridade"];

const useRotatingText = (words: string[], interval = 3000) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);
  return words[index];
};

const TrustIndicators = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-4 text-xs text-muted-foreground ${className}`}>
    {trustItems.map((item, i) => (
      <motion.div
        key={item}
        className="flex items-center gap-1.5 whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
      >
        <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
        {item}
      </motion.div>
    ))}
  </div>
);

const floatingIcons = [
  { icon: Code2, delay: 0, label: "Design" },
  { icon: Smartphone, delay: 0.3, label: "Mobile" },
  { icon: Search, delay: 0.6, label: "SEO" },
  { icon: Zap, delay: 0.9, label: "Rápido" },
];

const desktopPositions = [
  { left: "-8%", top: "10%" },
  { right: "-8%", top: "5%" },
  { right: "-12%", bottom: "25%" },
  { left: "-12%", bottom: "20%" },
];

/* Compact horizontal strip of feature icons for mobile (no absolute positioning) */
const MobileFeatureStrip = () => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.4 }}
    className="flex items-center justify-center gap-5 pt-2"
  >
    {floatingIcons.map(({ icon: Icon, delay, label }, i) => (
      <div key={i} className="flex flex-col items-center gap-1">
        <div
          className="w-10 h-10 rounded-xl bg-card border border-border/40 flex items-center justify-center shadow-md animate-float"
          style={{ animationDelay: `${delay}s` }}
        >
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <span className="text-[8px] font-semibold text-muted-foreground/70 tracking-wide">{label}</span>
      </div>
    ))}
  </motion.div>
);

/* Desktop visual with browser mockup + floating icons */
const HeroVisualDesktop = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute w-80 h-80 rounded-full bg-primary/8 blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="relative z-10 w-[340px] rounded-2xl border border-border/50 bg-card shadow-2xl shadow-foreground/5 overflow-hidden cursor-default mx-auto"
    >
      <BrowserMockupContent />
    </motion.div>

    {floatingIcons.map(({ icon: Icon, delay, label }, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 + delay }}
        whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
        className="absolute flex flex-col items-center gap-1.5 cursor-default z-20"
        style={desktopPositions[i]}
      >
        <div
          className="w-12 h-12 rounded-xl bg-card border border-border/40 flex items-center justify-center shadow-lg animate-float"
          style={{ animationDelay: `${delay}s` }}
        >
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <span className="text-[9px] font-semibold text-muted-foreground/70 tracking-wide">{label}</span>
      </motion.div>
    ))}
  </div>
);

/* Mobile visual: just the browser mockup, scaled down, no floating icons around it */
const HeroVisualMobile = () => (
  <div className="relative flex items-center justify-center">
    <div className="absolute w-56 h-56 rounded-full bg-primary/8 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10 w-[260px] rounded-2xl border border-border/50 bg-card shadow-xl shadow-foreground/5 overflow-hidden mx-auto"
    >
      <BrowserMockupContent compact />
    </motion.div>
  </div>
);

/* Shared browser mockup content */
const BrowserMockupContent = ({ compact = false }: { compact?: boolean }) => (
  <>
    <div className="flex items-center gap-1.5 px-3.5 py-3 border-b border-border/40 bg-card">
      <div className="w-2 h-2 rounded-full bg-destructive/70" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
      <div className="w-2 h-2 rounded-full bg-success/70" />
      <div className="ml-2.5 flex-1 h-5.5 rounded-lg bg-muted/30 border border-border/30 flex items-center px-2.5">
        <div className="w-2.5 h-2.5 mr-1.5 rounded-full bg-success/40 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-success" />
        </div>
        <span className="text-[9px] text-muted-foreground/70 font-medium tracking-wide">seunegocio.com.br</span>
      </div>
    </div>
    <div className={`${compact ? "p-4 space-y-3" : "p-6 space-y-4"} bg-background/50`}>
      <div className="flex items-center justify-between mb-1">
        <div className="h-1.5 w-14 rounded-full bg-foreground/8" />
        <div className="flex gap-2.5">
          <div className="h-1.5 w-7 rounded-full bg-foreground/6" />
          <div className="h-1.5 w-7 rounded-full bg-foreground/6" />
          <div className="h-1.5 w-7 rounded-full bg-foreground/6" />
        </div>
      </div>
      <div className="pt-1">
        <p className={`${compact ? "text-xs" : "text-sm"} font-heading font-bold text-foreground leading-tight`}>
          Seu site profissional<br />
          <span className="text-primary">começa aqui.</span>
        </p>
      </div>
      <div className="space-y-1.5">
        <div className="h-1.5 w-full rounded-full bg-foreground/5" />
        <div className="h-1.5 w-3/4 rounded-full bg-foreground/5" />
      </div>
      <div className="flex items-center gap-2 pt-1">
        <div className={`${compact ? "h-7 px-3" : "h-8 px-4"} rounded-lg bg-whatsapp/15 border border-whatsapp/20 flex items-center`}>
          <span className={`${compact ? "text-[9px]" : "text-[10px]"} font-semibold text-whatsapp`}>WhatsApp</span>
        </div>
        <div className={`${compact ? "h-7 px-3" : "h-8 px-4"} rounded-lg bg-muted/20 border border-border/40 flex items-center`}>
          <span className={`${compact ? "text-[9px]" : "text-[10px]"} text-muted-foreground font-medium`}>Saiba mais</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 pt-1">
        <div className={`${compact ? "h-14" : "h-16"} rounded-xl bg-card border border-border/30 p-2.5 flex flex-col justify-between shadow-sm`}>
          <Search className={`${compact ? "w-3 h-3" : "w-3.5 h-3.5"} text-primary/70`} />
          <span className={`${compact ? "text-[8px]" : "text-[9px]"} text-muted-foreground font-medium`}>SEO otimizado</span>
        </div>
        <div className={`${compact ? "h-14" : "h-16"} rounded-xl bg-card border border-border/30 p-2.5 flex flex-col justify-between shadow-sm`}>
          <Smartphone className={`${compact ? "w-3 h-3" : "w-3.5 h-3.5"} text-primary/70`} />
          <span className={`${compact ? "text-[8px]" : "text-[9px]"} text-muted-foreground font-medium`}>100% responsivo</span>
        </div>
      </div>
    </div>
  </>
);

const RotatingWord = () => {
  const word = useRotatingText(rotatingWords);
  return (
    <motion.span
      key={word}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
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
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToServicos = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16 pb-4 md:py-24 px-0 md:px-4">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-3xl hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl hidden md:block" />

      <motion.div style={{ y, opacity }} className="w-full md:container md:mx-auto md:max-w-6xl relative z-10">
        {/* Mobile layout */}
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
              Não tenha apenas um site.{" "}
              Tenha uma <RotatingWord />
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
              <Button variant="outline" size="xl" onClick={scrollToServicos} className="border-border/50 text-muted-foreground hover:text-foreground w-full">
                Ver Serviços
                <ArrowDown className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          <TrustIndicators className="flex-wrap gap-y-2 gap-x-4" />

          <HeroVisualMobile />

          <MobileFeatureStrip />
        </div>

        {/* Desktop layout */}
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
                Não tenha apenas um site.{" "}
                Tenha uma <RotatingWord />
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
                <Button variant="outline" size="xl" onClick={scrollToServicos} className="border-border/50 text-muted-foreground hover:text-foreground">
                  Ver Serviços
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>

            <TrustIndicators className="flex-wrap justify-center gap-5 text-sm pt-1" />
          </div>

          <div className="flex-1 relative min-h-[500px]">
            <HeroVisualDesktop />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default memo(HeroSection);
