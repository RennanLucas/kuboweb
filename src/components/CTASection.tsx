import { memo } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-28 md:py-36 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/8 via-accent-blue/3 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-accent-blue/6 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-primary/4 rounded-full blur-[150px] hidden md:block" />

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto w-16 h-16 rounded-2xl bg-accent-blue/10 border border-accent-blue/25 flex items-center justify-center mb-4 shadow-glow-sm"
            >
              <Sparkles className="w-7 h-7 text-accent-blue" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="section-title"
            >
              Comece seu site hoje
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="section-subtitle"
            >
              Me chama no WhatsApp, te respondo em até 1 hora com um orçamento sob medida — sem formulário longo, sem robô, sem compromisso.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.3 }}
          >
            <div className="inline-block hover:scale-105 active:scale-95 transition-transform duration-200">
              <Button variant="dark" size="xl" asChild className="shadow-glow">
                <a href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20quero%20come%C3%A7ar%20meu%20projeto.%20Pode%20me%20ajudar%3F" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="text-xs text-muted-foreground tracking-wide"
          >
            Consultoria sem custo · Retorno em até 1 hora útil
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default memo(CTASection);
