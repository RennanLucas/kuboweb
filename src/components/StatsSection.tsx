import { memo, useEffect, useRef, useState } from "react";
import { Clock } from "lucide-react";

const stats = [
  { value: "+30", label: "Projetos Criados", numericValue: 30, prefix: "+" },
  { value: "4.9★", label: "Avaliação Média", numericValue: 4.9, suffix: "★", decimals: 1 },
  { value: "7", label: "Entrega em até 7 dias úteis", numericValue: 7 },
  { value: "", label: "Suporte Direto no WhatsApp", icon: "whatsapp" },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-primary shrink-0" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const AnimatedNumber = ({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1500;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setCount(eased * value);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold whitespace-nowrap text-primary">
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.round(count)}{suffix}
    </span>
  );
};

const StatBlock = ({ value, label, icon, numericValue, prefix, suffix, decimals }: { value: string; label: string; icon?: string; numericValue?: number; prefix?: string; suffix?: string; decimals?: number }) => (
  <div className="flex-shrink-0 flex items-center gap-3 px-8 md:px-12">
    {icon === "whatsapp" ? (
      <WhatsAppIcon />
    ) : icon === "clock" ? (
      <Clock className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-primary shrink-0" />
    ) : numericValue !== undefined ? (
      <AnimatedNumber value={numericValue} prefix={prefix} suffix={suffix} decimals={decimals} />
    ) : (
      <span className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold whitespace-nowrap">
        <span className="text-primary">{value}</span>
      </span>
    )}
    <span className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide uppercase whitespace-nowrap">
      {label}
    </span>
  </div>
);

const StatsSection = () => (
  <section className="py-10 md:py-14 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-card/20 to-transparent pointer-events-none" />
    <div className="relative">
      <div className="flex w-max animate-marquee-stats will-change-transform" style={{ contain: "layout paint" }}>
        {[...Array(4)].map((_, setIndex) =>
          stats.map((stat, i) => (
            <div key={`${setIndex}-${i}`} className="flex items-center">
              <StatBlock
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                numericValue={(stat as any).numericValue}
                prefix={(stat as any).prefix}
                suffix={(stat as any).suffix}
                decimals={(stat as any).decimals}
              />
              <div className="w-px h-6 bg-border/40 shrink-0" />
            </div>
          ))
        )}
      </div>
    </div>
  </section>
);

export default memo(StatsSection);
