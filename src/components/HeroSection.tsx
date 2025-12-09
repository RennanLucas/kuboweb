import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-background" />
      
      {/* Subtle gold glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4 animate-fade-in">
              <p className="text-gold font-medium tracking-wider uppercase text-sm">
                Presença digital profissional
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-foreground">
                Sites Profissionais para Negócios que Querem{" "}
                <span className="text-gradient-gold">Crescer</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Eu monto sites profissionais modernos, rápidos e estratégicos para empresas e autônomos.
              </p>
            </div>

            <div className="space-y-4 animate-fade-in-delay-1">
              <Button
                variant="whatsapp"
                size="xl"
                className="w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/5511932197334"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6" />
                  Falar no WhatsApp
                </a>
              </Button>
              <p className="text-muted-foreground text-sm">
                Atendimento direto com Rennan Lucas.
              </p>
            </div>
          </div>

          {/* Right content - Mockup */}
          <div className="relative animate-fade-in-delay-2">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent rounded-2xl blur-2xl" />
              <img
                src={heroMockup}
                alt="Mockup de sites profissionais em computador, laptop, tablet e celular"
                className="relative w-full rounded-2xl shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
