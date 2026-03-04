import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 30, suffix: "+", label: "Projetos Criados" },
  { value: 4.9, suffix: "★", label: "Avaliação Média", decimal: true },
  { value: 7, suffix: " dias", label: "Entrega em até 7 dias" },
  { value: 0, suffix: "💬", label: "Suporte Direto no WhatsApp", isIcon: true },
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
              {(stat as any).isIcon ? (
                <div className="flex items-center justify-center" aria-hidden="true">
                  <svg
                    viewBox="0 0 32 32"
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2.2" />
                    <path
                      d="M12.5 20.2C14.6 21.4 17.3 21.5 19.6 20.3C20.4 19.9 21.1 19.3 21.6 18.6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12.3 11.6C12.7 10.9 13.4 10.5 14.1 10.7L15.5 11.1C16.1 11.3 16.4 11.9 16.2 12.5L15.9 13.4C15.8 13.8 15.9 14.3 16.2 14.6L17.4 15.8C17.7 16.1 18.2 16.2 18.6 16.1L19.5 15.8C20.1 15.6 20.7 15.9 20.9 16.5L21.3 17.9C21.5 18.6 21.1 19.3 20.4 19.7L19.9 20"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <AnimatedNumber target={stat.value} suffix={stat.suffix} decimal={(stat as any).decimal} />
              )}
              <p className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
