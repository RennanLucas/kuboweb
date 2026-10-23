type BrandMarkProps = {
  inverse?: boolean;
  compact?: boolean;
};

const BrandMark = ({ inverse = false, compact = false }: BrandMarkProps) => {
  const ink = inverse ? "text-white" : "text-[#07101f]";
  const muted = inverse ? "text-white/42" : "text-[#07101f]/42";
  const border = inverse ? "border-white/16" : "border-[#07101f]/12";
  const panel = inverse ? "bg-white/[0.06]" : "bg-[#07101f]/[0.035]";

  return (
    <span className="inline-flex items-center gap-3" aria-label="Kubo Web">
      <span
        className={`relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[13px] border ${border} ${panel}`}
        aria-hidden="true"
      >
        <span className={`absolute left-[9px] top-[8px] h-[24px] w-[4px] rounded-full ${inverse ? "bg-white" : "bg-[#07101f]"}`} />
        <span className={`absolute left-[17px] top-[9px] h-[4px] w-[15px] -rotate-45 rounded-full origin-left ${inverse ? "bg-[#7aa9ff]" : "bg-[#2458d8]"}`} />
        <span className={`absolute left-[17px] bottom-[9px] h-[4px] w-[15px] rotate-45 rounded-full origin-left ${inverse ? "bg-[#7aa9ff]" : "bg-[#2458d8]"}`} />
      </span>

      <span className="leading-none">
        <span className={`block font-heading text-[17px] font-semibold tracking-[-0.035em] ${ink}`}>
          KUBO WEB
        </span>
        {!compact && (
          <span className={`mt-1 block text-[8px] font-semibold uppercase tracking-[0.26em] ${muted}`}>
            Digital Studio
          </span>
        )}
      </span>
    </span>
  );
};

export default BrandMark;
