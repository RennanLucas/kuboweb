import { memo } from "react";
import { MessageCircle, ArrowDown, Globe, Lock, Star, ChevronRight, Palette, Search, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.%20Pode%20me%20ajudar%3F";

const HeroSection = () => {
  const scrollToServicos = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-8">
      {/* Subtle background grain */}
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[150px] hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] hidden md:block" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-accent-blue text-xs font-semibold tracking-wider uppercase"
            >
              <Star className="w-3.5 h-3.5" />
              Agência Digital Premium
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] tracking-tight"
            >
              Soluções que{" "}
              <span className="text-accent-blue">elevam</span>{" "}
              seu negócio.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              Criamos sites institucionais, landing pages e lojas virtuais de alta performance, aliados a estratégias precisas de Google Ads.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3"
            >
              <Button variant="dark" size="lg" asChild className="w-full sm:w-auto shadow-lg shadow-foreground/10">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Iniciar projeto
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToServicos}
                className="w-full sm:w-auto border-foreground/20 text-foreground hover:bg-foreground hover:text-background"
              >
                Ver serviços
                <ArrowDown className="w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex items-center justify-center md:justify-start gap-5 text-xs text-muted-foreground"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                Atendimento 100% online
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                Resposta em até 1h
              </span>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full max-w-xl mx-auto"
          >
            <div className="relative bg-card rounded-2xl border border-border/40 shadow-2xl shadow-primary/5 overflow-hidden">
              {/* Browser header */}
              <div className="bg-secondary/50 border-b border-border/30 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[hsl(0,65%,58%)]" />
                  <span className="w-3 h-3 rounded-full bg-[hsl(42,65%,55%)]" />
                  <span className="w-3 h-3 rounded-full bg-[hsl(130,45%,48%)]" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-background/80 border border-border/40 text-[10px] text-muted-foreground font-mono">
                    <Lock className="w-3 h-3 text-success" />
                    kuboweb.com.br
                  </div>
                </div>
              </div>

              {/* Browser body */}
              <div className="p-5 md:p-6 space-y-4">
                {/* Navbar mock */}
                <div className="flex items-center justify-between pb-4 border-b border-border/20">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-blue to-accent-blue/70 flex items-center justify-center">
                      <Globe className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-heading font-bold text-foreground tracking-tight">Kubo</span>
                    <span className="text-sm font-heading font-bold text-accent-blue tracking-tight">Web</span>
                  </div>
                  <div className="flex gap-3 text-[10px] text-muted-foreground">
                    <span className="text-foreground font-medium">Início</span>
                    <span>Serviços</span>
                    <span>Contato</span>
                  </div>
                </div>

                {/* Hero banner mock */}
                <div className="rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent-blue/5 border border-primary/10 p-5 relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl" />
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-blue/10 border border-accent-blue/15 text-[10px] text-accent-blue font-semibold mb-2">
                    <Star className="w-2.5 h-2.5" /> Agência Premium
                  </div>
                  <div className="font-heading font-bold text-foreground text-sm leading-snug mb-1">
                    Sua empresa merece um site que vende.
                  </div>
                  <div className="text-[11px] text-muted-foreground mb-3">
                    Design profissional + estratégia de conversão
                  </div>
                  <div className="inline-flex items-center gap-1 bg-foreground text-background rounded-md px-2.5 py-1.5 text-[9px] font-semibold">
                    Fale Conosco
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Palette, title: "Design", desc: "UI/UX Premium" },
                    { icon: Search, title: "SEO", desc: "Google Otimizado" },
                    { icon: Smartphone, title: "Mobile", desc: "100% Responsivo" },
                  ].map((card) => (
                    <div
                      key={card.title}
                      className="rounded-lg border border-border/30 bg-secondary/30 p-3 hover:border-accent-blue/30 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-md bg-accent-blue/10 flex items-center justify-center mb-2">
                        <card.icon className="w-3.5 h-3.5 text-accent-blue" />
                      </div>
                      <div className="font-heading font-bold text-foreground text-[11px] leading-tight">{card.title}</div>
                      <div className="text-[9px] text-muted-foreground mt-0.5">{card.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
