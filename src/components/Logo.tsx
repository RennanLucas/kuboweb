import { memo } from "react";
import logoDark from "@/assets/logo-kuboweb-dark.png";
import logoLight from "@/assets/logo-kuboweb-light.png";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light" | "auto";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", variant = "dark", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-7 md:h-8",
    md: "h-9 md:h-10 lg:h-11",
    lg: "h-12 md:h-14 lg:h-16",
  };

  const src = variant === "light" ? logoLight : logoDark;

  return (
    <div className={`inline-flex items-center group select-none ${className}`}>
      <img
        src={src}
        alt="Kubo Web - Criação de Sites Profissionais"
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_16px_rgba(56,189,248,0.2)]`}
        width={180}
        height={46}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export default memo(Logo);
