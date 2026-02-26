import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import BenefitsSection from "@/components/BenefitsSection";
import AudienceSection from "@/components/AudienceSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import SocialProofSection from "@/components/SocialProofSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <PricingSection />
      <SocialProofSection />
      <AudienceSection />
      <FAQSection />
      <CTASection />

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/30 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/25 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <span className="text-primary-foreground font-heading font-extrabold text-base tracking-tight relative z-10">K</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-heading font-bold text-lg text-foreground tracking-tight">
                    Kubo<span className="text-primary">Web</span>
                  </span>
                  <span className="text-[10px] text-muted-foreground/60 font-medium tracking-widest uppercase">
                    Web Design
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sites profissionais que geram resultados reais para o seu negócio.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-foreground">Navegação</h4>
              <nav className="flex flex-col gap-2">
                {[
                  { label: "Benefícios", href: "#beneficios" },
                  { label: "Serviços", href: "#servicos" },
                  { label: "Depoimentos", href: "#depoimentos" },
                  { label: "FAQ", href: "#faq" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-foreground">Contato</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/5511932197334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-whatsapp transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  +55 11 93219-7334
                </a>
                <a
                  href="mailto:rennanlucas27oficial@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  rennanlucas27oficial@gmail.com
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  São Paulo, SP
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Kubo Web. Todos os direitos reservados.</p>
            <p>Feito com dedicação para negócios que querem crescer.</p>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
