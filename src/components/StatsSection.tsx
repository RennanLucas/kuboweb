import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 30, suffix: "+", label: "Projetos entregues" },
  { value: 100, suffix: "%", label: "Clientes satisfeitos" },
  { value: 4.9, suffix: "★", label: "Avaliação média", decimal: true },
  { value: 7, suffix: " dias", label: "Tempo médio de entrega" },
];

const AnimatedNumber = ({ target, suffix, decimal }: { target: number; suffix: string; decimal?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(decimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, decimal]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground tabular-nums">
      {decimal ? count.toFixed(1) : count}
      <span className="text-primary ml-0.5">{suffix}</span>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-card/20 to-transparent" />
      <div className="container mx-auto max-w-5xl relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center space-y-2.5 relative"
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} decimal={(stat as any).decimal} />
              <p className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
