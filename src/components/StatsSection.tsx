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
                <div className="flex items-center justify-center h-[40px] md:h-[48px] lg:h-[56px]" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-primary"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
