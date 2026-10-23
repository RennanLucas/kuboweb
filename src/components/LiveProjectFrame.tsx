import { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(eager);

  useEffect(() => {
    if (eager) return;
    const timer = window.setTimeout(() => setMounted(true), 700);
    return () => window.clearTimeout(timer);
  }, [eager]);

  return (
    <div className={`relative overflow-hidden rounded-[26px] border border-black/[0.08] bg-[#eef1f5] shadow-[0_30px_100px_rgba(7,16,31,.16)] ${className}`}>
      <div className="relative z-20 flex h-11 items-center gap-3 border-b border-black/[0.07] bg-white/95 px-4 backdrop-blur-xl">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-black/[0.12]" />
          <span className="h-2 w-2 rounded-full bg-black/[0.12]" />
          <span className="h-2 w-2 rounded-full bg-black/[0.12]" />
        </div>
        <div className="mx-auto flex max-w-[70%] items-center gap-2 rounded-full bg-black/[0.035] px-4 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-black/[0.36]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="truncate">{domain}</span>
        </div>
        <ExternalLink className="h-3.5 w-3.5 text-black/[0.28]" />
      </div>

      <div className={`relative overflow-hidden ${viewportClassName} ${browserClassName}`}>
        <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_20%,rgba(120,167,255,.25),transparent_36%),linear-gradient(135deg,#f8fafc,#edf2f7)]">
          <div className="text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#2458d8]">Projeto publicado</p>
            <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-[#08111f]">{title}</p>
            <p className="mt-2 text-[10px] text-[#08111f]/[0.36]">Carregando visualização real</p>
          </div>
        </div>

        {mounted && (
          <iframe
            src={url}
            title={`Visualização do projeto ${title}`}
            loading={eager ? "eager" : "lazy"}
            tabIndex={-1}
            aria-hidden="true"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            className="pointer-events-none absolute left-0 top-0 z-10 border-0 bg-white"
            style={{
              width: compact ? "200%" : "166.667%",
              height: compact ? "200%" : "166.667%",
              transform: compact ? "scale(.5)" : "scale(.6)",
              transformOrigin: "top left",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default LiveProjectFrame;
