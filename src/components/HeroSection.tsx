import { memo, useState, useEffect } from "react";
import { MessageCircle, ArrowDown, CheckCircle2, Search, Globe, Shield, Smartphone, Palette, Zap, BarChart3, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

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

const serviceCards = [
  { icon: Palette, title: "Web Design", desc: "Sites únicos" },
  { icon: Search, title: "SEO", desc: "Tráfego orgânico" },
  { icon: Smartphone, title: "Responsivo", desc: "Todos os devices" },
];

const floatingFeatures = [
  { icon: Shield, label: "SSL Seguro", x: "-14%", y: "12%", delay: 1.8 },
  { icon: Zap, label: "99 Performance", x: "102%", y: "20%", delay: 2.0 },
  { icon: BarChart3, label: "+300% Tráfego", x: "-12%", y: "75%", delay: 2.2 },
  { icon: Star, label: "5.0 Avaliação", x: "104%", y: "70%", delay: 2.4 },
];

const HeroVisual = ({ mobile = false }: { mobile?: boolean }) => {
  const [typedUrl, setTypedUrl] = useState("");
  const fullUrl = "kuboweb.com.br";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullUrl.length) {
        setTypedUrl(fullUrl.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className={`relative mx-auto ${mobile ? "w-full max-w-[320px]" : "w-full max-w-[500px]"}`}
    >
      {/* Glow effect behind mockup */}
      <div className="absolute -inset-4 bg-primary/8 rounded-3xl blur-2xl -z-10" />

      {/* Floating feature badges - desktop only */}
      {!mobile && floatingFeatures.map((feat) => (
        <motion.div
          key={feat.label}
          initial={{ opacity: 0, scale: 0, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { delay: feat.delay, duration: 0.4 },
            scale: { delay: feat.delay, duration: 0.4, type: "spring", stiffness: 200 },
            y: { delay: feat.delay + 0.4, duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card/95 backdrop-blur-sm border border-border/50 shadow-xl text-xs font-semibold text-foreground"
          style={{ left: feat.x, top: feat.y }}
        >
          <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
            <feat.icon className="w-3.5 h-3.5 text-primary" />
          </div>
          {feat.label}
        </motion.div>
      ))}

      {/* Browser mockup */}
      <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card shadow-2xl shadow-foreground/5">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-border/20 bg-gradient-to-b from-muted/40 to-muted/20">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-destructive/70" />
            <span className="w-3 h-3 rounded-full bg-accent-foreground/30" />
            <span className="w-3 h-3 rounded-full bg-success/70" />
          </div>
          <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/80 border border-border/30">
            <Shield className="w-3 h-3 text-success shrink-0" />
            <span className="text-[11px] text-foreground/70 font-mono">
              {typedUrl}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-[1px] h-3 bg-primary ml-px align-middle"
              />
            </span>
          </div>
        </div>

        {/* Navbar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="flex items-center justify-between px-5 py-2.5 border-b border-border/15 bg-card"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center">
              <Globe className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="text-[12px] font-extrabold text-foreground tracking-tight">KuboWeb</span>
          </div>
          <div className="flex gap-4">
            {mockupNavItems.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.06, duration: 0.3 }}
                className={`text-[10px] font-medium ${i === 0 ? "text-primary" : "text-muted-foreground"}`}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Content area */}
        <div className={`${mobile ? "px-4 py-4" : "px-6 py-6"}`}>
          {/* Hero banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className={`w-full rounded-xl bg-gradient-to-br from-primary/15 via-primary/8 to-transparent border border-primary/10 ${mobile ? "p-4" : "p-6"} relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            >
              <div className={`font-heading font-bold text-foreground ${mobile ? "text-[11px]" : "text-sm"} leading-tight`}>
                Transforme sua presença digital
              </div>
              <div className={`text-muted-foreground ${mobile ? "text-[9px]" : "text-[11px]"} mt-1`}>
                Sites que convertem visitantes em clientes
              </div>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                transition={{ delay: 1.3, duration: 0.4 }}
                className={`mt-3 inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-lg font-semibold ${mobile ? "px-3 py-1.5 text-[8px]" : "px-4 py-2 text-[10px]"}`}
              >
                <MessageCircle className={`${mobile ? "w-2.5 h-2.5" : "w-3 h-3"}`} />
                Solicitar Orçamento
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Service cards */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            className={`grid grid-cols-3 gap-2 ${mobile ? "mt-3" : "mt-4"}`}
          >
            {serviceCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.12, duration: 0.35 }}
                className={`rounded-xl border border-border/25 bg-background/60 backdrop-blur-sm ${mobile ? "p-2.5" : "p-3.5"}`}
              >
                <div className={`rounded-lg bg-primary/10 ${mobile ? "w-5 h-5" : "w-7 h-7"} flex items-center justify-center mb-2`}>
                  <card.icon className={`text-primary ${mobile ? "w-3 h-3" : "w-3.5 h-3.5"}`} />
                </div>
                <div className={`font-heading font-bold text-foreground ${mobile ? "text-[8px]" : "text-[10px]"} leading-tight`}>
                  {card.title}
                </div>
                <div className={`text-muted-foreground ${mobile ? "text-[7px]" : "text-[8px]"} mt-0.5`}>
                  {card.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.4 }}
            className={`flex items-center justify-between rounded-xl bg-muted/20 border border-border/15 ${mobile ? "mt-3 px-3 py-2" : "mt-4 px-4 py-2.5"}`}
          >
            {[
              { value: "150+", label: "Projetos" },
              { value: "99%", label: "Satisfação" },
              { value: "24h", label: "Suporte" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 + i * 0.1, duration: 0.3 }}
                className="text-center"
              >
                <div className={`font-heading font-bold text-primary ${mobile ? "text-[10px]" : "text-xs"}`}>{stat.value}</div>
                <div className={`text-muted-foreground ${mobile ? "text-[7px]" : "text-[8px]"}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
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

      <motion.div style={{ y }} className="w-full md:container md:mx-auto md:max-w-6xl relative z-10">
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
