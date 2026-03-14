import { memo } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const floatingParticles = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  size: 4 + Math.random() * 8,
  x: `${10 + Math.random() * 80}%`,
  y: `${10 + Math.random() * 80}%`,
  delay: i * 0.5,
  duration: 4 + Math.random() * 3,
}));

const CTASection = () => {
  return (
    <section className="py-28 md:py-40 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-primary/3 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      {/* Floating particles - desktop only */}
      <div className="hidden md:block">
        {floatingParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/10"
            style={{ width: p.size, height: p.size, left: p.x, top: p.y }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
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
      ))}

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-6 h-6 text-primary" />
              </motion.div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="section-title"
            >
              Seu próximo cliente está te{" "}
              <motion.span
                className="text-gradient-primary inline-block"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
              animate={{ boxShadow: ["0 0 0 0 hsl(var(--primary) / 0)", "0 0 0 12px hsl(var(--primary) / 0.1)", "0 0 0 0 hsl(var(--primary) / 0)"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ borderRadius: "0.75rem" }}
            >
              <Button variant="whatsapp" size="xl" asChild>
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
