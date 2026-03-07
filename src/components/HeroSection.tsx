import { memo } from "react";
import { MessageCircle, ArrowDown, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

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
        <div className="md:hidden flex flex-col min-h-[calc(100dvh-5rem)] justify-center px-5 py-6 space-y-6 will-change-transform">
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

          <div className="relative min-h-[300px] flex-1 overflow-visible">
            <div className="absolute -inset-6">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
                delayMs={800}
              />
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <Card className="hidden md:block w-full bg-transparent border-border/30 relative overflow-hidden rounded-3xl">
          <Spotlight className="-top-40 left-60 -top-20" fill="hsl(217 91% 60%)" />
          <div className="flex flex-row min-h-[580px] items-center justify-center">
            <div className="flex-1 p-12 lg:p-16 relative z-10 flex flex-col justify-center items-center text-center space-y-7">
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

            <div className="flex-1 relative min-h-[500px] overflow-visible">
              <div className="absolute -inset-8">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                  delayMs={300}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default memo(HeroSection);
