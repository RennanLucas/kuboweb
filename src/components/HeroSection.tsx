import { memo, useState, useEffect, lazy, Suspense } from "react";
import { MessageCircle, ArrowDown, CheckCircle2, Search, Globe, Shield, Smartphone, Palette, Zap, BarChart3, Star, Lock, ChevronRight, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ParticleField from "@/components/ui/ParticleField";
import MagneticButton from "@/components/ui/MagneticButton";
import GyroParticles from "@/components/ui/GyroParticles";
import heroMockup from "@/assets/hero-mockup.webp";


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
  { icon: Shield, label: "SSL Seguro", x: "-22%", y: "8%", delay: 1.8 },
  { icon: Zap, label: "PageSpeed 99", x: "108%", y: "15%", delay: 2.0 },
  { icon: TrendingUp, label: "+340% Leads", x: "-20%", y: "78%", delay: 2.2 },
  { icon: Award, label: "5.0 ★★★★★", x: "110%", y: "72%", delay: 2.4 },
];

const navItems = ["Início", "Serviços", "Portfólio", "Contato"];

const HeroVisual = ({ mobile = false }: { mobile?: boolean }) => {
  if (mobile) {
    return (
      <div className="relative mx-auto w-full max-w-[300px] animate-fade-in">
        <div className="absolute -inset-6 bg-primary/10 rounded-[2rem] blur-3xl -z-10" />
        <img
          src={heroMockup}
          alt="Mockup de site moderno em laptop e celular"
          width={1024}
          height={1024}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-auto rounded-2xl"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative mx-auto w-full max-w-[560px]"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-primary/10 rounded-[2rem] blur-3xl -z-10 animate-glow-pulse" />
      <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl -z-10" />

      {/* Floating badges - desktop only */}
      <div className="hidden xl:block">
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

      {/* 3D Mockup Image */}
      <motion.img
        src={heroMockup}
        alt="Mockup de site profissional moderno em laptop e celular"
        width={1024}
        height={1024}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="w-full h-auto rounded-2xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
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
            Especialistas em Conversão
          </motion.div>

          <div className="space-y-3">
            <h1 className="text-[1.75rem] sm:text-3xl font-heading font-bold leading-[1.25] text-foreground tracking-tight">
              Transforme sua marca em uma{" "}
              <span className="text-gradient-hero inline-block">referência digital</span>{" "}
              com um site de alto padrão.
            </h1>
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Design exclusivo, performance impecável e acompanhamento individual em cada etapa. O próximo nível do seu negócio começa em <span className="font-semibold text-foreground">30 dias</span>.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <motion.div whileTap={{ scale: 0.98 }}>
              <Button variant="whatsapp" size="lg" asChild className="w-full shadow-glow-sm">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
              </Button>
            </motion.div>
            <p className="text-[11px] text-center text-muted-foreground -mt-1">
              <Lock className="w-2.5 h-2.5 inline mr-1 -mt-0.5" />
              Consultoria sem custo · Retorno em até 1 hora útil
            </p>
            <motion.div whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
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
              Especialistas em Conversão
            </motion.div>

            <div className="space-y-5">
              <h1 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-heading font-extrabold leading-[1.2] text-foreground tracking-[-0.02em]">
                Transforme sua marca em uma{" "}
                <span className="text-gradient-hero">referência digital</span>{" "}
                com um site de alto padrão.
              </h1>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.35 }}
                className="text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                Design exclusivo, performance impecável e acompanhamento individual em cada etapa. O próximo nível do seu negócio começa em <span className="font-semibold text-foreground">30 dias</span>.
              </motion.p>
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
                    <Button variant="whatsapp" size="lg" asChild className="shadow-glow-sm whitespace-nowrap">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4" />
                        Falar no WhatsApp
                      </a>
                    </Button>
                  </motion.div>
                </MagneticButton>
                <MagneticButton>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={scrollToServicos}
                      className="border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30 whitespace-nowrap"
                    >
                      Ver Serviços
                      <ArrowDown className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </MagneticButton>
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-success" />
                Consultoria sem custo · Retorno em até 1 hora útil
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