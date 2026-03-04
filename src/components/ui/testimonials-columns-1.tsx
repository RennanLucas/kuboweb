import React, { useMemo } from "react";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const duration = props.duration || 10;

  const items = useMemo(
    () => [...props.testimonials, ...props.testimonials],
    [props.testimonials]
  );

  return (
    <div className={props.className} style={{ contain: "layout paint" }}>
      <div
        className="flex flex-col gap-6 pb-6 animate-scroll-up"
        style={{
          animationDuration: `${duration}s`,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {items.map(({ text, image, name, role }, i) => (
          <div
            key={i}
            className="group bg-gradient-to-br from-card/80 to-card border border-border/40 rounded-2xl p-6 hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <svg key={j} className="w-3.5 h-3.5 text-primary/70" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-foreground leading-relaxed text-sm">{text}</p>
            <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border/30">
              <img
                src={image}
                alt={name}
                loading="lazy"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-border/50"
              />
              <div>
                <p className="font-semibold text-foreground text-sm">{name}</p>
                <p className="text-muted-foreground text-xs">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
