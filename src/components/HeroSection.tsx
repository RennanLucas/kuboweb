import { memo, useState, useEffect } from "react";
import { MessageCircle, ArrowDown, CheckCircle2, Search, Globe, Shield, Smartphone, Palette, Zap } from "lucide-react";
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

const mockupNavItems = ["Início", "Serviços", "Portfólio", "Contato"];
const mockupBlocks = [
  { width: "60%", height: "h-3", delay: 0.8 },
  { width: "80%", height: "h-2", delay: 1.0 },
  { width: "45%", height: "h-2", delay: 1.1 },
  { width: "70%", height: "h-8", delay: 1.3, isButton: true },
];

const floatingFeatures = [
  { icon: Search, label: "SEO", x: "-12%", y: "15%", delay: 1.6 },
  { icon: Smartphone, label: "Responsivo", x: "105%", y: "25%", delay: 1.8 },
  { icon: Palette, label: "Design", x: "-10%", y: "70%", delay: 2.0 },
  { icon: Zap, label: "Rápido", x: "107%", y: "65%", delay: 2.2 },
];

const HeroVisual = ({ mobile = false }: { mobile?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
    className={`relative mx-auto ${mobile ? "w-full max-w-[320px]" : "w-full max-w-[480px]"}`}
  >
    {/* Floating feature badges - hidden on mobile */}
    {!mobile && floatingFeatures.map((feat) => (
      <motion.div
        key={feat.label}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: feat.delay, duration: 0.4, type: "spring", stiffness: 200 }}
        className="absolute z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border/60 shadow-lg text-xs font-medium text-foreground"
        style={{ left: feat.x, top: feat.y }}
      >
        <feat.icon className="w-3.5 h-3.5 text-primary" />
        {feat.label}
      </motion.div>
    ))}

    {/* Browser mockup */}
    <div className={`relative overflow-hidden rounded-2xl border border-border/40 bg-card shadow-2xl shadow-foreground/10 ${mobile ? "" : ""}`}>
      {/* Browser top bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/30 bg-muted/30">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent-foreground/30" />
          <span className="w-2.5 h-2.5 rounded-full bg-success/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex-1 flex items-center gap-1.5 px-3 py-1 rounded-md bg-background/60 text-[10px] text-muted-foreground overflow-hidden"
        >
          <Shield className="w-3 h-3 text-success shrink-0" />
          <span className="truncate">kuboweb.com.br</span>
        </motion.div>
      </div>

      {/* Navbar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="flex items-center justify-between px-4 py-2 border-b border-border/20"
      >
        <div className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-primary" />
          <span className="text-[11px] font-bold text-foreground">KuboWeb</span>
        </div>
        <div className="flex gap-3">
          {mockupNavItems.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.05, duration: 0.3 }}
              className="text-[9px] text-muted-foreground"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Content area */}
      <div className={`px-5 ${mobile ? "py-5 space-y-3" : "py-8 space-y-4"}`}>
        {/* Hero image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className={`w-full rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-accent/30 ${mobile ? "h-20" : "h-28"} flex items-center justify-center`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
            className="text-center"
          >
            <div className={`font-heading font-bold text-foreground ${mobile ? "text-[10px]" : "text-xs"}`}>Seu site profissional</div>
            <div className={`text-muted-foreground ${mobile ? "text-[8px]" : "text-[9px]"} mt-0.5`}>começa aqui</div>
          </motion.div>
        </motion.div>

        {/* Animated content blocks */}
        {mockupBlocks.map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: block.delay, duration: 0.4 }}
            className={`rounded-md ${block.isButton
              ? "bg-primary flex items-center justify-center"
              : "bg-muted/40"
            } ${block.height}`}
            style={{ width: block.width }}
          >
            {block.isButton && (
              <span className={`text-primary-foreground font-semibold ${mobile ? "text-[8px]" : "text-[10px]"}`}>
                Saiba Mais →
              </span>
            )}
          </motion.div>
        ))}

        {/* Animated cards row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.4 }}
          className={`grid grid-cols-3 gap-2 ${mobile ? "pt-1" : "pt-2"}`}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.3 }}
              className={`rounded-lg border border-border/30 bg-background/50 ${mobile ? "p-2" : "p-3"}`}
            >
              <div className={`rounded bg-primary/15 ${mobile ? "h-4 w-4" : "h-5 w-5"} mb-1.5`} />
              <div className="h-1.5 w-full rounded bg-muted/40 mb-1" />
              <div className="h-1.5 w-2/3 rounded bg-muted/30" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </motion.div>
);

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
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToServicos = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16 pb-4 md:py-24 px-0 md:px-4">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-3xl hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl hidden md:block" />

      <motion.div style={{ y, opacity }} className="w-full md:container md:mx-auto md:max-w-6xl relative z-10">
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

          <TrustIndicators className="flex-wrap gap-y-2 gap-x-4" />
          <HeroVisual mobile />
        </div>

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

            <TrustIndicators className="flex-wrap justify-center gap-5 text-sm pt-1" />
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
