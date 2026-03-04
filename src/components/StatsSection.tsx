import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "30+", label: "Projetos Entregues" },
  { value: "100%", label: "Clientes Satisfeitos" },
  { value: "4.9★", label: "Avaliação Média" },
  { value: "7 dias", label: "Tempo Médio de Entrega" },
];

const StatBlock = ({ value, label }: { value: string; label: string }) => (
  <div className="flex-shrink-0 flex items-center gap-3 px-8 md:px-12">
    <span className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground whitespace-nowrap">
      {value.replace(/[★+%]|dias/g, (m) => '')}
      <span className="text-primary">{value.match(/[★+%]|dias/)?.[0] || ''}</span>
    </span>
    <span className="text-xs md:text-sm text-muted-foreground font-medium tracking-wide uppercase whitespace-nowrap">
      {label}
    </span>
  </div>
);

const StatsSection = () => {
  return (
    <section className="py-10 md:py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-card/20 to-transparent pointer-events-none" />
      <div className="relative">
        <div className="flex w-max animate-marquee-stats will-change-transform">
          {/* Render 4 sets for seamless loop */}
          {[...Array(4)].map((_, setIndex) =>
            stats.map((stat, i) => (
              <div key={`${setIndex}-${i}`} className="flex items-center">
                <StatBlock value={stat.value} label={stat.label} />
                <div className="w-px h-6 bg-border/40 flex-shrink-0" />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
