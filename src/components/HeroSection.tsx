import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const HeroSection = () => {
  const scrollToServicos = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 3D Spline Card */}
        <Card className="w-full mb-12 bg-card/50 border-border/50 relative overflow-hidden rounded-2xl">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="hsl(217 91% 60%)"
          />
          <div className="flex flex-col md:flex-row min-h-[400px]">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                3D <span className="text-gradient-primary">Interativo</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
                Experiências visuais imersivas que capturam atenção e elevam o design do seu negócio a outro nível.
              </p>
            </div>

            {/* Right content - 3D Scene */}
            <div className="flex-1 relative min-h-[300px] md:min-h-[400px]">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>

        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Web Design Profissional
          </div>

          {/* Headline */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] text-foreground">
              Criação de sites profissionais que{" "}
              <span className="text-gradient-primary">geram clientes</span>{" "}
              pelo WhatsApp
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Sites modernos, rápidos e prontos para Google, feitos para empresas que querem vender mais online.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-1">
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/5511932197334" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
            
            <Button variant="outline" size="xl" onClick={scrollToServicos}>
              Ver Serviços
              <ArrowDown className="w-4 h-4" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-muted-foreground animate-fade-in-delay-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              Resposta rápida
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              Sem burocracia
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              Atendimento direto
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
