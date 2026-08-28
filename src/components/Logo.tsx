import { memo } from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ className = "", size = "md", showText = true }: LogoProps) => {
  const iconSizes = {
    sm: "h-7 w-7",
    md: "h-9 w-9 md:h-10 md:w-10",
    lg: "h-12 w-12 md:h-14 md:w-14",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl md:text-2xl",
    lg: "text-2xl md:text-3xl",
  };

  return (
    <div className={`flex items-center gap-2.5 group select-none ${className}`}>
      {/* High-Resolution K Icon */}
      <img
        src="/favicon-512.png"
        alt="Kubo Web - Criação de Sites Profissionais"
        className={`${iconSizes[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]`}
        width={48}
        height={48}
        loading="eager"
        decoding="async"
      />

      {/* Crisp High-Contrast Typography for Dark Theme */}
      {showText && (
        <div className={`flex items-center font-heading font-black tracking-tight ${textSizes[size]} leading-none`}>
          <span className="text-white tracking-wider">KUBO</span>
          <span className="text-gradient-hero tracking-wider ml-1">WEB</span>
        </div>
      )}
    </div>
  );
};

export default memo(Logo);
