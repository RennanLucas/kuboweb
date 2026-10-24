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
  <section aria-label="Capacidades Kubo" className="bg-[#f7f7f3] px-4">
    <div className="container mx-auto max-w-[1460px] border-y border-black/[.09]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {items.map(([number, label], index) => (
          <div
            key={label}
            className={`flex min-h-[68px] items-center gap-2.5 px-2 py-4 sm:px-4 lg:min-h-[76px] ${index % 2 ? "border-l border-black/[.07]" : ""} ${index >= 2 ? "border-t border-black/[.07]" : ""} md:border-l md:border-t-0 md:[&:nth-child(3n+1)]:border-l-0 lg:border-l lg:[&:nth-child(n)]:border-t-0 lg:first:border-l-0`}
          >
            <span className="font-mono text-[8px] font-semibold text-[#2458d8]">{number}</span>
            <span className="text-[9px] font-semibold uppercase leading-4 tracking-[.1em] text-[#08111f]/55 sm:text-[10px] lg:text-[11px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default memo(TrustStrip);
