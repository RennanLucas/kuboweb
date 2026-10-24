import { ExternalLink } from "lucide-react";

interface LiveProjectFrameProps {
  url: string;
  title: string;
  domain: string;
  className?: string;
  viewportClassName?: string;
  browserClassName?: string;
  compact?: boolean;
  eager?: boolean;
}

const LiveProjectFrame = ({
  url,
  title,
  domain,
  className = "",
  viewportClassName = "min-h-[420px] md:min-h-[560px]",
  browserClassName = "bg-white",
  compact = false,
  eager = false,
}: LiveProjectFrameProps) => {
  const desktopScreenshot = `https://image.thum.io/get/width/${compact ? 760 : 1440}/crop/${compact ? 1180 : 1000}/maxAge/24/noanimate/?url=${encodeURIComponent(url)}`;
  const mobileScreenshot = `https://image.thum.io/get/width/430/crop/980/maxAge/24/noanimate/?url=${encodeURIComponent(url)}`;

  return (
    <div className={`relative overflow-hidden rounded-[22px] border border-black/[0.07] bg-[#eef1f5] shadow-[0_24px_80px_rgba(7,16,31,.14)] md:rounded-[26px] ${className}`}>
      <div className="relative z-20 flex h-9 items-center gap-2 border-b border-black/[0.06] bg-white/96 px-3 backdrop-blur-xl md:h-11 md:gap-3 md:px-4">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-black/[0.12] md:h-2 md:w-2" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/[0.12] md:h-2 md:w-2" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/[0.12] md:h-2 md:w-2" />
        </div>
        <div className="mx-auto flex max-w-[72%] items-center gap-2 rounded-full bg-black/[0.035] px-3 py-1 text-[7px] font-semibold uppercase tracking-[0.12em] text-black/[0.36] md:px-4 md:py-1.5 md:text-[8px]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="truncate">{domain}</span>
        </div>
        <ExternalLink className="h-3 w-3 text-black/[0.25] md:h-3.5 md:w-3.5" />
      </div>

      <div className={`relative overflow-hidden ${viewportClassName} ${browserClassName}`}>
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_20%,rgba(120,167,255,.22),transparent_36%),linear-gradient(135deg,#f8fafc,#edf2f7)]">
          <div className="text-center">
            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#2458d8]">Projeto publicado</p>
            <p className="mt-2 text-lg font-semibold tracking-[-0.04em] text-[#08111f]">{title}</p>
          </div>
        </div>

        <picture>
          <source media="(max-width: 639px)" srcSet={mobileScreenshot} />
          <img
            src={desktopScreenshot}
            alt={`Captura do projeto ${title}`}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 z-10 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.008]"
          />
        </picture>
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/[0.02]" />
      </div>
    </div>
  );
};

export default LiveProjectFrame;
