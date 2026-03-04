import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "+30", label: "Projetos Criados", highlight: "+" },
  { value: "4.9★", label: "Avaliação Média", highlight: "★" },
  { value: "7 dias", label: "Entrega em até 7 dias úteis", highlight: "dias" },
  { value: "💬", label: "Suporte Direto no WhatsApp", highlight: "", isIcon: true },
];

const StatBlock = ({ value, label, isIcon }: { value: string; label: string; isIcon?: boolean }) => (
  <div className="flex-shrink-0 flex items-center gap-3 px-8 md:px-12">
    {isIcon ? (
      <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-primary flex-shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ) : (
      <span className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground whitespace-nowrap">
        {value.replace(/[★+]|dias/g, '')}
        <span className="text-primary">{value.match(/[★+]|dias/)?.[0] || ''}</span>
      </span>
    )}
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
                <StatBlock value={stat.value} label={stat.label} isIcon={stat.isIcon} />
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
