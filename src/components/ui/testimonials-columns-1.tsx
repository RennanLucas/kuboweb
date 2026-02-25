"use client";
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
            className="bg-card border border-border/50 rounded-2xl p-6"
          >
            <p className="text-foreground leading-relaxed">{text}</p>
            <div className="flex items-center gap-3 mt-4">
              <img
                src={image}
                alt={name}
                loading="lazy"
                className="w-10 h-10 rounded-full object-cover border border-border"
              />
              <div>
                <p className="font-medium text-foreground text-sm">{name}</p>
                <p className="text-muted-foreground text-xs">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
