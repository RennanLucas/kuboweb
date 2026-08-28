import { memo } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Check, Zap, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GuaranteeBadge from '@/components/GuaranteeBadge';

export const CTASection = memo(function CTASection() {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-background">
      {/* Background with dot pattern and gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-primary opacity-10" />
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, hsl(var(--primary)/0.15) 0%, transparent 70%)' 
        }} 
      />
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(hsl(var(--foreground)/0.3)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Elements Desktop */}
      <motion.div 
        className="hidden lg:block absolute top-20 left-[15%] text-primary/30"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={48} />
      </motion.div>
      <motion.div 
        className="hidden lg:block absolute bottom-32 right-[15%] text-primary/30"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Star size={40} />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Urgency Counter */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive border border-destructive/20 font-semibold text-sm">
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🔥
            </motion.span>
            Vagas limitadas este mês — restam apenas 4
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient-primary">
            Pronto para transformar sua presença digital?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Não perca mais tempo perdendo clientes para a concorrência. Nossa equipe está pronta para criar um site que vende e destaca sua marca hoje mesmo.
          </p>

          {/* Guarantee Badge */}
          <div className="mt-4">
            <GuaranteeBadge />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mt-8">
            <motion.div 
              className="card-glass p-6 rounded-2xl flex flex-col items-center text-center gap-3 border-glow shadow-glow-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">✅ Consultoria Gratuita</h3>
              <p className="text-muted-foreground text-sm">
                Analisamos seu negócio e propomos a solução ideal sem compromisso
              </p>
            </motion.div>

            <motion.div 
              className="card-glass p-6 rounded-2xl flex flex-col items-center text-center gap-3 border-glow shadow-glow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg">⚡ Resposta em 1 Hora</h3>
              <p className="text-muted-foreground text-sm">
                Nossa equipe responde pelo WhatsApp em até 1 hora útil
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <Button 
              variant="whatsapp" 
              size="xl" 
              className="rounded-full shadow-glow text-lg font-bold w-full sm:w-auto min-w-[300px]"
              asChild
            >
              <a href="https://wa.me/5511932197334?text=Olá%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20quero%20começar%20meu%20projeto.%20Pode%20me%20ajudar%3F" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 mr-2" />
                Quero Começar Meu Projeto
              </a>
            </Button>
            
            <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              Atendimento humano <span className="text-primary/50">•</span> Sem robô <span className="text-primary/50">•</span> Garantia de 7 dias
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
});

export default CTASection;
