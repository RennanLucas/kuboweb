type BrandMarkProps = {
  inverse?: boolean;
  compact?: boolean;
};

const BrandMark = ({ inverse = false, compact = false }: BrandMarkProps) => {
  const ink = inverse ? "text-white" : "text-[#07101f]";
  const muted = inverse ? "text-white/42" : "text-[#07101f]/38";
  const faceA = inverse ? "#f7fbff" : "#07101f";
  const faceB = inverse ? "#6f9fff" : "#2a61dc";
  const faceC = inverse ? "#a8c5ff" : "#9bbdff";
  const glyphStroke = inverse ? "#07101f" : "#ffffff";

  return (
    <span className="inline-flex items-center gap-3" aria-label="Kubo Web">
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center" aria-hidden="true">
        <svg viewBox="0 0 48 48" className="h-full w-full overflow-visible" fill="none" role="presentation">
          <path d="M24 4.75 43 14.8 24 24.8 5 14.8 24 4.75Z" fill={faceC} />
          <path d="M5 16.1 23 25.55V45L5 35.15V16.1Z" fill={faceA} />
          <path d="M25 25.55 43 16.1V35.15L25 45V25.55Z" fill={faceB} />
          <path d="M16.4 18.6v11.9" stroke={glyphStroke} strokeWidth="2.7" strokeLinecap="round" />
          <path d="m19.2 24.4 6.5-5.45m-6.5 5.45 6.8 5.85" stroke={glyphStroke} strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      <span className="flex items-end gap-2 leading-none">
        <span className={`font-heading text-[17px] font-semibold uppercase tracking-[-0.06em] ${ink}`}>KUBO</span>
        {!compact && (
          <span className={`pb-[1px] text-[8px] font-semibold uppercase tracking-[0.28em] ${muted}`}>WEB</span>
        )}
      </span>
    </span>
  );
};

export default BrandMark;
