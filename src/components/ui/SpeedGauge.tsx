import { memo } from "react";
import { motion } from "framer-motion";
import { Zap, CheckCircle2 } from "lucide-react";

interface SpeedGaugeProps {
  score?: number;
  label?: string;
  size?: number;
}

export const SpeedGauge = memo(function SpeedGauge({
  score = 99,
  label = "Google PageSpeed Score",
  size = 120,
}: SpeedGaugeProps) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-card/80 border border-emerald-500/30 shadow-lg shadow-emerald-500/5 backdrop-blur-md">
      <div className="relative flex items-center justify-center shrink-0" style={{ width: size * 0.65, height: size * 0.65 }}>
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            className="text-secondary/60 stroke-current"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Animated progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            className="text-emerald-400 stroke-current drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"
            strokeWidth="8"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="font-heading font-black text-lg sm:text-xl text-emerald-400 leading-none">
            {score}
          </span>
          <span className="text-[8px] font-bold text-emerald-400/80 uppercase tracking-tighter mt-0.5">/100</span>
        </div>
      </div>

      <div className="space-y-0.5">
        <div className="flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-400">
          <Zap className="w-3 h-3 fill-emerald-400" />
          <span>{label}</span>
        </div>
        <p className="text-xs font-bold text-foreground">Velocidade Máxima (0.6s)</p>
        <p className="text-[10px] text-muted-foreground flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 100% Core Web Vitals Aprovado
        </p>
      </div>
    </div>
  );
});

export default SpeedGauge;
