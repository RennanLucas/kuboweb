import { memo, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

const AnimatedCounter = ({ value, className = "" }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // If value contains a dash (range like "7-15"), don't animate — just show it
    if (value.includes("-")) {
      setDisplay(value);
      return;
    }

    const prefix = value.match(/^[+<]*/)?.[0] || "";
    const suffix = value.match(/[%+]*$/)?.[0] || "";
    const numStr = value.replace(/[^0-9.]/g, "");
    const target = parseFloat(numStr);

    if (isNaN(target)) {
      setDisplay(value);
      return;
    }

    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref} className={className}>
      {isInView ? display : "0"}
    </span>
  );
};

export default memo(AnimatedCounter);
