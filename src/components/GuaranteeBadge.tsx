import { memo } from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface GuaranteeBadgeProps {
  className?: string;
  variant?: "default" | "inverted" | "compact";
}

const GuaranteeBadge = ({ className, variant = "default" }: GuaranteeBadgeProps) => {
  if (variant === "compact") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/25 text-xs font-semibold text-success",
          className
        )}
      >
        <ShieldCheck className="w-3.5 h-3.5" />
        Garantia de satisfação · 7 dias
      </div>
    );
  }

  if (variant === "inverted") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/25 backdrop-blur-sm",
          className
        )}
      >
        <div className="w-8 h-8 rounded-xl bg-primary-foreground/15 border border-primary-foreground/25 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-4 h-4 text-primary-foreground" />
        </div>
        <div className="text-left">
          <div className="text-xs font-bold text-primary-foreground leading-tight">
            Garantia de satisfação
          </div>
          <div className="text-[11px] text-primary-foreground/70 leading-tight mt-0.5">
            7 dias para ajustes ou devolução
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-success/8 border border-success/25 shadow-sm",
        className
      )}
    >
      <div className="w-9 h-9 rounded-xl bg-success/15 border border-success/25 flex items-center justify-center shrink-0">
        <ShieldCheck className="w-4.5 h-4.5 text-success" />
      </div>
      <div className="text-left">
        <div className="text-xs font-bold text-foreground leading-tight">
          Garantia de satisfação
        </div>
        <div className="text-[11px] text-muted-foreground leading-tight mt-0.5">
          7 dias para ajustes ou devolução do valor
        </div>
      </div>
    </div>
  );
};

export default memo(GuaranteeBadge);
