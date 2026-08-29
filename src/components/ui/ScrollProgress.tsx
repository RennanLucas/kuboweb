import { memo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = memo(function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-cyan-400 to-blue-600 origin-left z-[9999] shadow-[0_0_10px_rgba(56,189,248,0.7)] pointer-events-none"
    />
  );
});

export default ScrollProgress;
