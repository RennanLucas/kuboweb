import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(43_74%_49%_/_0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(43_74%_49%_/_0.08),transparent_50%)]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Pronto para ter um{" "}
              <span className="text-gradient-gold">site profissional</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Clique abaixo e fale comigo diretamente no WhatsApp.
            </p>
          </div>

          <Button
            variant="whatsapp"
            size="xl"
            className="animate-pulse"
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-muted-foreground">
            <a
              href="https://wa.me/5511932197334"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Phone className="w-5 h-5" />
              (11) 93219-7334
            </a>
            <a
              href="mailto:rennanlucas27oficial@gmail.com"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Mail className="w-5 h-5" />
              rennanlucas27oficial@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
