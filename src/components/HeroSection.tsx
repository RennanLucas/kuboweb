import { MessageCircle, ArrowDown, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const HeroSection = () => {
  const scrollToServicos = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-8 md:py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/4 rounded-full blur-3xl hidden md:block" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl hidden md:block" />

      <div className="container mx-auto max-w-6xl relative z-10 w-full">
        <Card className="w-full bg-card/40 border-border/30 relative overflow-hidden rounded-2xl md:rounded-3xl backdrop-blur-sm">
          <Spotlight
            className="hidden md:block -top-40 left-0 md:left-60 md:-top-20"
            fill="hsl(217 91% 60%)"
          />
          <div className="flex flex-col lg:flex-row lg:min-h-[580px]">
            {/* Left - Hero content */}
            <div className="flex-1 p-6 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center space-y-6 md:space-y-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold w-fit tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Web Design Profissional
              </div>

              {/* Headline */}
              <div className="space-y-4 md:space-y-5">
                <h1 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-heading font-bold leading-[1.1] text-foreground tracking-tight">
                  Criação de sites profissionais que{" "}
                  <span className="text-gradient-primary">geram clientes</span>{" "}
                  pelo WhatsApp
                </h1>
                
                <p className="text-[15px] md:text-lg text-muted-foreground max-w-md leading-relaxed">
                  Design moderno, performance otimizada e SEO — feitos para empresas que querem vender mais.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3">
                <Button variant="whatsapp" size="xl" asChild>
                  <a href="https://wa.me/5511932197334" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
                
                <Button variant="outline" size="xl" onClick={scrollToServicos} className="border-border/50 text-muted-foreground hover:text-foreground">
                  Ver Serviços
                  <ArrowDown className="w-4 h-4" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-4 md:gap-5 text-xs md:text-sm text-muted-foreground pt-1">
                {["Resposta rápida", "Sem burocracia", "Atendimento direto"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - 3D Scene */}
            <div className="relative min-h-[220px] sm:min-h-[280px] lg:flex-1 lg:min-h-[500px] overflow-visible">
              <div className="absolute inset-0 lg:-inset-8">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                  delayMs={2400}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
