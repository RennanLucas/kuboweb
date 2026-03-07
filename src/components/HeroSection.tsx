import { memo } from "react";
import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroMockup from "@/assets/hero-devices-mockup.png";

const highlights = [
  "Design sob medida para seu segmento",
  "Otimizado para Google (SEO)",
  "Integração com WhatsApp",
];

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.%20Pode%20me%20ajudar%3F";

const HeroSection = () => (
  <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20 pb-8 md:pt-0 md:pb-0 px-4">
    {/* Background */}
    <div className="absolute inset-0 bg-background" />
    <div className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] hidden md:block" />
    <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] hidden md:block" />

    <div className="container mx-auto max-w-6xl relative z-10">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[calc(100dvh-5rem)] md:min-h-[600px]">
        {/* Content */}
        <div className="space-y-8 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Agência de Web Design
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-heading font-bold leading-[1.1] text-foreground tracking-tight">
              Desenvolvemos sites que{" "}
              <span className="text-primary">transformam visitantes</span>{" "}
              em clientes
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Sites institucionais, landing pages e lojas virtuais com design premium, performance otimizada e foco em conversão — para profissionais e empresas que levam o digital a sério.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="space-y-4"
          >
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button variant="whatsapp" size="xl" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Solicitar orçamento
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-border/50 text-muted-foreground hover:text-foreground">
              <Link to="/portfolio">
                Ver portfólio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center order-1 md:order-2"
        >
          <img
            src={heroMockup}
            alt="Mockup de site profissional em laptop e smartphone"
            className="w-full max-w-[480px] md:max-w-none drop-shadow-2xl"
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default memo(HeroSection);
