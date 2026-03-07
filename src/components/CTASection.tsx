import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import workspaceMockup from "@/assets/workspace-mockup.png";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/2 to-background" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={workspaceMockup}
              alt="Ambiente de trabalho profissional"
              className="w-full max-w-[400px] mx-auto drop-shadow-xl"
              loading="lazy"
            />
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="section-label">Vamos conversar</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
                Pronto para elevar a presença digital do seu negócio?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Entre em contato pelo WhatsApp e receba um orçamento personalizado sem compromisso. Nosso time responde em minutos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20quero%20come%C3%A7ar%20meu%20projeto.%20Pode%20me%20ajudar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-border/50">
                <Link to="/servicos">
                  Ver serviços
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-xs text-muted-foreground"
            >
              Atendimento direto · Resposta em até 1 hora · Orçamento gratuito
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
