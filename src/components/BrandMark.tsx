type BrandMarkProps = {
  inverse?: boolean;
  compact?: boolean;
};

const BrandGlyph = ({ inverse = false }: { inverse?: boolean }) => {
  const edge = inverse ? "#ffffff" : "#08111f";
  const blue = "#78a7ff";
  const blueDark = "#2d63d8";

  return (
    <svg viewBox="0 0 42 42" className="h-9 w-9 shrink-0" fill="none" aria-hidden="true">
      <path d="M21 4.5 35.5 12.8 21 21 6.5 12.8 21 4.5Z" fill={blue} />
      <path d="M6.5 12.8 21 21v16.5L6.5 29.2V12.8Z" fill={edge} fillOpacity={inverse ? 0.88 : 0.96} />
      <path d="M35.5 12.8 21 21v16.5l14.5-8.3V12.8Z" fill={blueDark} />
      <path d="m14.2 17.3 6.8 3.8 6.8-3.8" stroke="#fff" strokeOpacity=".72" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M21 21v8.2" stroke="#fff" strokeOpacity=".56" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
};

const BrandMark = ({ inverse = false, compact = false }: BrandMarkProps) => {
  const ink = inverse ? "text-white" : "text-[#08111f]";
  const muted = inverse ? "text-white/38" : "text-[#08111f]/42";

  return (
    <span className="inline-flex items-center gap-2.5" aria-label="Kubo Web">
      <BrandGlyph inverse={inverse} />
      <span className="leading-none">
        <span className={`block font-heading text-[18px] font-semibold uppercase tracking-[-0.065em] ${ink}`}>
          Kubo<span className="text-[#5f8fff]">.</span>
        </span>
        {!compact && (
          <span className={`mt-1.5 block text-[7px] font-semibold uppercase tracking-[0.3em] ${muted}`}>
            Digital Studio
          </span>
        )}
      </span>
    </span>
  );
};

export default BrandMark;
