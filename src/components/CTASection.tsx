import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
              Pronto para ter um site profissional que{" "}
              <span className="text-gradient-primary">passa credibilidade</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Fale comigo diretamente no WhatsApp e vamos transformar sua presença digital.
            </p>
          </div>

          <Button
            variant="whatsapp"
            size="xl"
            asChild
          >
            <a
              href="https://wa.me/5511932197334"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com Rennan no WhatsApp
            </a>
          </Button>

          <p className="text-sm text-muted-foreground">
            Atendimento direto • Resposta rápida • Sem compromisso
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;