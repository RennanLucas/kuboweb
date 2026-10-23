type BrandMarkProps = {
  inverse?: boolean;
  compact?: boolean;
};

const BrandMark = ({ inverse = false, compact = false }: BrandMarkProps) => {
  const ink = inverse ? "text-white" : "text-[#07101f]";
  const muted = inverse ? "text-white/42" : "text-[#07101f]/42";
  const stroke = inverse ? "rgba(255,255,255,.88)" : "#07101f";
  const accent = inverse ? "#8eb8ff" : "#2458d8";
  const shell = inverse ? "border-white/14 bg-white/[0.045]" : "border-[#07101f]/10 bg-white";

  return (
    <span className="inline-flex items-center gap-3" aria-label="Kubo Web">
      <span
        className={`relative flex h-[42px] w-[42px] shrink-0 items-center justify-center overflow-hidden rounded-[14px] border shadow-[0_8px_30px_rgba(15,23,42,.08)] ${shell}`}
        aria-hidden="true"
      >
        <span className="absolute inset-[5px] rounded-[10px] border border-current opacity-[0.055]" />
        <svg viewBox="0 0 44 44" className="relative h-full w-full" fill="none" role="presentation">
          <path d="M14 11V33" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
          <path d="M18 22L30 11" stroke={accent} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 22L31 33" stroke={accent} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29.5 9.5L34.5 14.5" stroke={stroke} strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M29.5 34.5L34.5 29.5" stroke={stroke} strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>

      <span className="leading-none">
        <span className={`block font-heading text-[17px] font-semibold tracking-[-0.04em] ${ink}`}>
          Kubo Web
        </span>
        {!compact && (
          <span className={`mt-1.5 block text-[8px] font-semibold uppercase tracking-[0.24em] ${muted}`}>
            Web Design Studio
          </span>
        )}
      </span>
    </span>
  );
};

export default BrandMark;
