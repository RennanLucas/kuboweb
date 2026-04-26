import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  containerClassName?: string;
}

/**
 * Image with skeleton/shimmer placeholder and blur-up fade-in.
 * Shows an animated gradient skeleton while loading, then smoothly
 * transitions to the loaded image.
 */
const BlurImage = ({
  src,
  alt,
  className,
  containerClassName,
  onLoad,
  ...props
}: BlurImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Skeleton shimmer placeholder */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-muted via-muted/60 to-muted",
          "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.6s_infinite]",
          "before:bg-gradient-to-r before:from-transparent before:via-foreground/5 before:to-transparent",
          "transition-opacity duration-500",
          loaded ? "opacity-0" : "opacity-100"
        )}
      />
      <img
        src={src}
        alt={alt}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          "transition-[opacity,filter,transform] duration-700 ease-out",
          loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default BlurImage;
