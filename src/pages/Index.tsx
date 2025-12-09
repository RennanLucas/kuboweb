import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AudienceSection from "@/components/AudienceSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <DifferentialsSection />
      <AboutSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <AudienceSection />
      <FAQSection />
      <CTASection />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Rennan Lucas. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
