import { memo, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown, MessageCircle, ArrowRight, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import ParticleField from '@/components/ui/ParticleField';

// Palavras que vão rotacionar
const rotativeWords = [
  "máquina de vendas",
  "vitrine digital",
  "fonte de clientes",
  "marca de autoridade"
];

// Hook de contagem
function useCountUp(end: number, start: boolean, duration: number = 2.5, decimals: number = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing: easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(ease * end);
      
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };
    
    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count.toFixed(decimals);
}

// Componente para card de estatística flutuante
const FloatingStatCard = memo(({ 
  value, 
  label, 
  prefix = "", 
  suffix = "", 
  decimals = 0,
  delay = 0,
  positionClass = ""
}: { 
  value: number; 
  label: string; 
  prefix?: string; 
  suffix?: string;
  decimals?: number;
  delay: number;
  positionClass: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const displayValue = useCountUp(value, isInView, 2.5, decimals);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      className={`absolute hidden lg:flex flex-col items-center justify-center bg-card/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-10 ${positionClass}`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      <div className="text-2xl font-bold text-foreground">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">
        {label}
      </div>
    </motion.div>
  );
});

FloatingStatCard.displayName = 'FloatingStatCard';

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % rotativeWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const whatsappUrl = "https://wa.me/5511932197334?text=Olá%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços.%20Pode%20me%20ajudar%3F";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-16">
      {/* Background Cinematográfico */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-[150px] opacity-40" />
      </div>

      {/* Partículas apenas no Desktop */}
      <div className="absolute inset-0 z-0 hidden lg:block opacity-60">
        <ParticleField />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          
          {/* Floating Stat Cards (Desktop Only) */}
          <FloatingStatCard 
            value={150} 
            prefix="+" 
            label="Projetos" 
            delay={0.2} 
            positionClass="top-[15%] left-[5%]" 
          />
          <FloatingStatCard 
            value={99} 
            label="PageSpeed" 
            delay={0.4} 
            positionClass="bottom-[25%] left-[10%]" 
          />
          <FloatingStatCard 
            value={340} 
            prefix="+" 
            suffix="%" 
            label="Leads" 
            delay={0.6} 
            positionClass="top-[20%] right-[5%]" 
          />
          <FloatingStatCard 
            value={5.0} 
            decimals={1}
            suffix=" ★★★★★" 
            label="Avaliações" 
            delay={0.8} 
            positionClass="bottom-[20%] right-[10%]" 
          />

          {/* Badge Premium */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8"
          >
            <span className="text-xl">⚡</span>
            <span className="text-sm font-semibold tracking-wide text-primary">Agência de Alta Conversão</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.15] text-center"
          >
            Transformamos seu site em uma<br />
            <span className="relative inline-flex justify-center items-center h-[1.3em] overflow-hidden align-bottom min-w-[260px] sm:min-w-[420px] max-w-full">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={rotativeWords[wordIndex]}
                  initial={{ y: 35, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -35, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="text-gradient-hero inline-block whitespace-nowrap"
                >
                  {rotativeWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Design exclusivo, performance extrema e acompanhamento estratégico. 
            Criamos experiências digitais que posicionam sua marca como líder e geram resultados reais.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com Especialista
            </a>
            
            <a
              href="#cases"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground border-2 border-white/10 hover:border-primary/50 hover:bg-primary/5 rounded-xl transition-all"
            >
              Ver Resultados
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground/80"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Resposta em 1h</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Garantia 7 dias</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
          Descubra
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
      
      {/* Estilos para animação float */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </section>
  );
};

export default memo(HeroSection);