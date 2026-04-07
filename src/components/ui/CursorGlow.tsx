import { useEffect, useState, memo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorGlow = memo(() => {
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 150, damping: 15 });
  const springY = useSpring(cursorY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(max-width: 768px)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-[9999] mix-blend-soft-light"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        background: "radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
      }}
    />
  );
});

CursorGlow.displayName = "CursorGlow";

export default CursorGlow;
