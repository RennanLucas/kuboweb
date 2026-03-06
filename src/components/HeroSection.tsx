import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToServicos = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-12 md:pt-32 md:pb-24 px-4">
      {/* Abstract background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/6 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/4 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[80px]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Web Design Profissional
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-5"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.08] text-foreground tracking-tight">
              Criamos sites profissionais{" "}
              <br className="hidden sm:block" />
              para seu negócio{" "}
              <span className="text-gradient-primary">crescer online</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Sites rápidos, modernos e prontos para gerar clientes. Design profissional com foco em resultados reais.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20criar%20meu%20site.%20Pode%20me%20ajudar%3F" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Criar meu site
              </a>
            </Button>
            
            <Button variant="outline" size="xl" onClick={scrollToServicos}>
              Ver exemplos
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-muted-foreground pt-4"
          >
            {[
              { value: "+30", label: "sites criados" },
              { value: "4.9★", label: "avaliação" },
              { value: "7 dias", label: "de entrega" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-foreground font-heading font-bold text-lg">{item.value}</span>
                <span className="text-xs uppercase tracking-wide">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
