import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const KuboPreloader = memo(function KuboPreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast, smooth counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 8;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background select-none overflow-hidden"
        >
          {/* Background Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-cyan-500/20 rounded-full blur-[90px] pointer-events-none" />

          {/* 3D Isometric Holographic Kubo */}
          <div className="relative mb-8 flex items-center justify-center">
            {/* Outer Pulsing Aura Ring */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-36 h-36 rounded-full border border-primary/40 bg-primary/5 blur-sm"
            />

            {/* Glowing 3D Isometric Cube Container */}
            <div className="relative w-24 h-24 perspective-[800px]">
              <motion.div
                animate={{
                  rotateX: [15, 25, 15],
                  rotateY: [0, 360],
                  rotateZ: [0, 5, 0],
                }}
                transition={{
                  rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
                  rotateX: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotateZ: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full relative"
              >
                {/* Front Face */}
                <div
                  style={{ transform: "translateZ(36px)" }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/30 via-primary/10 to-cyan-500/20 border-2 border-primary/70 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center justify-center"
                >
                  <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8]" />
                </div>

                {/* Back Face */}
                <div
                  style={{ transform: "rotateY(180deg) translateZ(36px)" }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/30 via-primary/10 to-indigo-500/20 border-2 border-blue-500/60 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                </div>

                {/* Right Face */}
                <div
                  style={{ transform: "rotateY(90deg) translateZ(36px)" }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/30 via-primary/10 to-primary/20 border-2 border-cyan-400/60 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-300" />
                </div>

                {/* Left Face */}
                <div
                  style={{ transform: "rotateY(-90deg) translateZ(36px)" }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/30 via-primary/10 to-blue-500/20 border-2 border-indigo-400/60 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.3)] flex items-center justify-center"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-300" />
                </div>

                {/* Top Face */}
                <div
                  style={{ transform: "rotateX(90deg) translateZ(36px)" }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/40 via-cyan-400/20 to-blue-500/30 border-2 border-primary/80 backdrop-blur-md shadow-[0_0_25px_rgba(56,189,248,0.5)] flex items-center justify-center"
                >
                  <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#ffffff]" />
                </div>

                {/* Bottom Face */}
                <div
                  style={{ transform: "rotateX(-90deg) translateZ(36px)" }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-slate-900/60 via-primary/10 to-card border border-primary/30 backdrop-blur-md"
                />
              </motion.div>
            </div>
          </div>

          {/* Typography & Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center space-y-3 z-10"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="font-heading font-extrabold text-2xl sm:text-3xl tracking-[0.25em] text-foreground uppercase">
                KUBO<span className="text-primary text-glow">WEB</span>
              </span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-48 sm:w-56 h-1.5 bg-secondary/60 rounded-full overflow-hidden border border-border/40 p-0.5 relative mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Counter and status */}
            <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground w-48 sm:w-56 mx-auto pt-1">
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
