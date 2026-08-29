import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const KuboPreloader = memo(function KuboPreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast, responsive progress simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 350);
          return 100;
        }
        const step = Math.floor(Math.random() * 16) + 10;
        return Math.min(prev + step, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -25, scale: 0.99, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background select-none overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

          {/* 3D Isometric Precision Kubo Hero */}
          <div className="relative mb-8 flex items-center justify-center">
            {/* Pulsing Energy Aura Rings */}
            <motion.div
              animate={{ scale: [1, 1.35, 1], opacity: [0.25, 0.6, 0.25] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-44 h-44 rounded-full border border-primary/30 bg-primary/5 blur-sm"
            />
            <motion.div
              animate={{ scale: [1.1, 1.5, 1.1], opacity: [0.1, 0.35, 0.1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute w-56 h-56 rounded-full border border-cyan-500/20 bg-cyan-500/5 blur-md"
            />

            {/* Precision Isometric 3D Kubo Vector */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotateZ: [0, 2, -2, 0],
              }}
              transition={{
                y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                rotateZ: { duration: 3.8, repeat: Infinity, ease: "easeInOut" },
              }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center drop-shadow-[0_15px_30px_rgba(56,189,248,0.35)]"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="preloaderTopFace" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7dd3fc" />
                    <stop offset="50%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                  <linearGradient id="preloaderLeftFace" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="60%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                  <linearGradient id="preloaderRightFace" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="60%" stopColor="#0369a1" />
                    <stop offset="100%" stopColor="#075985" />
                  </linearGradient>
                  <filter id="preloaderCubeGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Top Face */}
                <motion.polygon
                  points="50,15 84,32 50,49 16,32"
                  fill="url(#preloaderTopFace)"
                  stroke="#bae6fd"
                  strokeWidth="1.2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Left Face */}
                <motion.polygon
                  points="16,32 50,49 50,85 16,68"
                  fill="url(#preloaderLeftFace)"
                  stroke="#93c5fd"
                  strokeWidth="1.2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                />

                {/* Right Face */}
                <motion.polygon
                  points="50,49 84,32 84,68 50,85"
                  fill="url(#preloaderRightFace)"
                  stroke="#38bdf8"
                  strokeWidth="1.2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                />

                {/* Center Glowing Core */}
                <circle cx="50" cy="49" r="3.5" fill="#ffffff" filter="url(#preloaderCubeGlow)" />
              </svg>
            </motion.div>
          </div>

          {/* Typography & Progress */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-center space-y-3.5 z-10"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="font-heading font-black text-2xl sm:text-3xl tracking-[0.25em] text-foreground uppercase">
                KUBO<span className="text-primary text-glow">WEB</span>
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-52 sm:w-64 h-1.5 bg-secondary/60 rounded-full overflow-hidden border border-border/40 p-0.5 relative mx-auto shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-cyan-400 to-blue-500 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Counter status */}
            <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground w-52 sm:w-64 mx-auto pt-0.5">
              <span className="tracking-wider text-primary font-bold">CARREGANDO</span>
              <span className="font-bold text-foreground">{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default KuboPreloader;
