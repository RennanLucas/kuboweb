import { memo } from "react";

const stack = [
  "React",
  "Vite",
  "Vercel",
  "Supabase",
  "Google Ads",
  "Analytics",
  "WhatsApp",
  "Responsive UI",
];

const StackRailSection = () => (
  <section className="overflow-hidden border-y border-black/[0.07] bg-[#f7f8fa] py-5">
    <div className="container mx-auto flex max-w-[1380px] flex-col gap-4 px-4 lg:flex-row lg:items-center lg:gap-10">
      <p className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#08111f]/[0.34]">Ecossistema de trabalho</p>
      <div className="min-w-0 flex-1 overflow-hidden">
        <div className="flex min-w-max animate-marquee-stats items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#08111f]/[0.46]">
          {[...stack, ...stack].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-9">{item}<span className="h-1 w-1 rounded-full bg-[#2458d8]/60" /></span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default memo(StackRailSection);
