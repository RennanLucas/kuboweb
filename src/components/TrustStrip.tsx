import { memo } from "react";

const items = [
  ["01", "Design responsivo"],
  ["02", "Performance"],
  ["03", "SEO técnico"],
  ["04", "WhatsApp"],
  ["05", "Experiência mobile"],
  ["06", "Suporte"],
] as const;

const TrustStrip = () => (
  <section aria-label="Capacidades Kubo" className="relative overflow-hidden bg-[#f7f7f3] px-4">
    <div className="container mx-auto max-w-[1460px] border-y border-black/[.09]">
      <div className="flex items-center gap-7 overflow-x-auto py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-6 md:gap-0 md:py-0">
        {items.map(([number, label], index) => (
          <div
            key={label}
            className={`group flex min-w-max items-center gap-3 md:min-w-0 md:px-5 md:py-6 ${index ? "md:border-l md:border-black/[.07]" : ""}`}
          >
            <span className="font-mono text-[8px] font-semibold text-[#2458d8]">{number}</span>
            <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[.12em] text-[#08111f]/55 transition-colors group-hover:text-[#08111f]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default memo(TrustStrip);
