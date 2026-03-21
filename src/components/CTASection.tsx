import { memo } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const floatingParticles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: 3 + Math.random() * 6,
  x: `${5 + Math.random() * 90}%`,
  y: `${5 + Math.random() * 90}%`,
  delay: i * 0.4,
  duration: 4 + Math.random() * 4,
}));

const CTASection = () => {
  return (
    <section className="py-28 md:py-40 px-4 relative overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/4 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/6 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-primary/4 rounded-full blur-[150px] hidden md:block" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px] hidden md:block" />

      {/* Floating particles - desktop only */}
      <div className="hidden md:block">
        {floatingParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/15"
            style={{ width: p.size, height: p.size, left: p.x, top: p.y }}
            animate={{
              y: [0, -25, 0],
              x: [0, 10, 0],
              opacity: [0.15, 0.5, 0.15],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/25 flex items-center justify-center mb-4 shadow-glow-sm"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-7 h-7 text-primary" />
              </motion.div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="section-title"
            >
              Seu próximo cliente está te{" "}
              <motion.span
                className="text-gradient-hero inline-block"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                procurando agora
              </motion.span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="section-subtitle"
            >
              Não perca oportunidades. Fale comigo no WhatsApp e tenha um site que trabalha por você 24h.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
              animate={{ boxShadow: ["0 0 0 0 hsl(var(--primary) / 0)", "0 0 0 14px hsl(var(--primary) / 0.12)", "0 0 0 0 hsl(var(--primary) / 0)"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ borderRadius: "0.75rem" }}
            >
              <Button variant="whatsapp" size="xl" asChild className="shadow-glow">
                <a href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20quero%20come%C3%A7ar%20meu%20projeto.%20Pode%20me%20ajudar%3F" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6" />
                  Falar no WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.4 }}
            className="text-xs text-muted-foreground tracking-wide"
          >
            Atendimento direto · Resposta rápida · Sem compromisso
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default memo(CTASection);