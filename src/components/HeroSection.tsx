import { memo } from "react";
import { MessageCircle, ArrowDown, CheckCircle2, Code2, Smartphone, Search, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const trustItems = ["Resposta rápida", "Sem burocracia", "Atendimento direto"];
const whatsappUrl = "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.%20Pode%20me%20ajudar%3F";

const TrustIndicators = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-4 text-xs text-muted-foreground ${className}`}>
    {trustItems.map((item) => (
      <div key={item} className="flex items-center gap-1.5 whitespace-nowrap">
        <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
        {item}
      </div>
    ))}
  </div>
);

const floatingIcons = [
  { icon: Code2, delay: 0, x: "5%", y: "12%", label: "Design" },
  { icon: Smartphone, delay: 0.3, x: "72%", y: "8%", label: "Mobile" },
  { icon: Search, delay: 0.6, x: "80%", y: "58%", label: "SEO" },
  { icon: Zap, delay: 0.9, x: "8%", y: "68%", label: "Rápido" },
];

const HeroVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Central glow */}
    <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 blur-[80px]" />
    
    {/* Browser mockup */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative z-10 w-[260px] md:w-[320px] rounded-2xl border border-border/40 bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/10 overflow-hidden"
    >
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/30 bg-card/60">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-success/60" />
        <div className="ml-3 flex-1 h-5 rounded-md bg-muted/50 flex items-center px-2">
          <span className="text-[9px] text-muted-foreground/60 truncate">seunegocio.com.br</span>
        </div>
      </div>
      {/* Content */}
      <div className="p-5 space-y-3">
        <p className="text-[10px] md:text-[11px] font-heading font-bold text-foreground/80 leading-tight">
          Seu site profissional<br />
          <span className="text-primary">começa aqui.</span>
        </p>
        <div className="h-2 w-full rounded bg-foreground/6" />
        <div className="h-2 w-4/5 rounded bg-foreground/6" />
        <div className="flex items-center gap-2 mt-3">
          <div className="h-7 px-3 rounded-lg bg-whatsapp/20 flex items-center">
            <span className="text-[8px] font-semibold text-whatsapp">WhatsApp</span>
          </div>
          <div className="h-7 px-3 rounded-lg bg-muted/40 flex items-center">
            <span className="text-[8px] text-muted-foreground">Saiba mais</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="h-14 rounded-lg bg-muted/30 p-2 flex flex-col justify-between">
            <Search className="w-3 h-3 text-primary/60" />
            <span className="text-[7px] text-muted-foreground">SEO otimizado</span>
          </div>
          <div className="h-14 rounded-lg bg-muted/30 p-2 flex flex-col justify-between">
            <Smartphone className="w-3 h-3 text-primary/60" />
            <span className="text-[7px] text-muted-foreground">100% responsivo</span>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Floating icons - CSS animation for performance */}
    {floatingIcons.map(({ icon: Icon, delay, x, y, label }, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 + delay }}
        className="absolute flex flex-col items-center gap-1"
        style={{ left: x, top: y }}
      >
        <div
          className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-card/80 border border-border/30 flex items-center justify-center shadow-lg backdrop-blur-sm animate-float"
          style={{ animationDelay: `${delay}s` }}
        >
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
        </div>
        <span className="text-[8px] md:text-[9px] font-medium text-muted-foreground">{label}</span>
      </motion.div>
    ))}
  </div>
);

const HeroSection = () => {
  const scrollToServicos = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16 pb-4 md:py-24 px-0 md:px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-3xl hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl hidden md:block" />

      <div className="w-full md:container md:mx-auto md:max-w-6xl relative z-10">
        {/* Mobile layout */}
        <div className="md:hidden flex flex-col min-h-[calc(100dvh-5rem)] justify-center px-5 py-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold w-fit tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Web Design Profissional
          </div>

          <div className="space-y-4">
            <h1 className="text-[1.85rem] sm:text-3xl font-heading font-bold leading-[1.1] text-foreground tracking-tight">
              Criação de sites profissionais que{" "}
              <span className="text-gradient-primary">geram clientes</span>{" "}
              pelo WhatsApp
            </h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Design moderno, performance otimizada e SEO — feitos para empresas que querem vender mais.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button variant="whatsapp" size="xl" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="xl" onClick={scrollToServicos} className="border-border/50 text-muted-foreground hover:text-foreground">
              Ver Serviços
              <ArrowDown className="w-4 h-4" />
            </Button>
          </div>

          <TrustIndicators className="pt-2 flex-wrap gap-y-2" />

          {/* Lightweight visual */}
          <div className="relative min-h-[280px] flex-1">
            <HeroVisual />
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex flex-row min-h-[580px] items-center justify-center max-w-6xl mx-auto">
          <div className="flex-1 pr-8 lg:pr-16 relative z-10 flex flex-col justify-center items-center text-center space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold w-fit tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Web Design Profissional
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-heading font-bold leading-[1.08] text-foreground tracking-tight">
                Criação de sites profissionais que{" "}
                <span className="text-gradient-primary">geram clientes</span>{" "}
                pelo WhatsApp
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto">
                Design moderno, performance otimizada e SEO — feitos para empresas que querem vender mais.
              </p>
            </div>

            <div className="flex flex-row items-center justify-center gap-3">
              <Button variant="whatsapp" size="xl" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="xl" onClick={scrollToServicos} className="border-border/50 text-muted-foreground hover:text-foreground">
                Ver Serviços
                <ArrowDown className="w-4 h-4" />
              </Button>
            </div>

            <TrustIndicators className="flex-wrap justify-center gap-5 text-sm pt-1" />
          </div>

          <div className="flex-1 relative min-h-[500px]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
