import { memo } from "react";
import { motion } from "framer-motion";

export const MiniKuboLoader = memo(function MiniKuboLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 select-none">
      {/* Glow Backdrop */}
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-28 h-28 rounded-full bg-primary/20 blur-xl pointer-events-none"
        />

        {/* 3D Isometric Precision Kubo Vector */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotateZ: [0, 2, -2, 0],
          }}
          transition={{
            y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
            rotateZ: { duration: 3.6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative w-16 h-16 flex items-center justify-center drop-shadow-[0_10px_20px_rgba(56,189,248,0.25)]"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="topFace" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
              <linearGradient id="leftFace" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
              <linearGradient id="rightFace" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
              <filter id="cubeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Top Face */}
            <motion.polygon
              points="50,15 82,32 50,49 18,32"
              fill="url(#topFace)"
              stroke="#7dd3fc"
              strokeWidth="1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />

            {/* Left Face */}
            <motion.polygon
              points="18,32 50,49 50,85 18,68"
              fill="url(#leftFace)"
              stroke="#60a5fa"
              strokeWidth="1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />

            {/* Right Face */}
            <motion.polygon
              points="50,49 82,32 82,68 50,85"
              fill="url(#rightFace)"
              stroke="#38bdf8"
              strokeWidth="1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />

            {/* Center Core Accent */}
            <circle cx="50" cy="49" r="2.5" fill="#ffffff" filter="url(#cubeGlow)" />
          </svg>
        </motion.div>
      </div>

      {/* Brand & Loading Label */}
      <div className="flex flex-col items-center gap-1.5">
        <span className="font-heading font-black text-sm tracking-[0.2em] text-foreground uppercase">
          KUBO<span className="text-primary text-glow">WEB</span>
        </span>
        <div className="flex items-center gap-1">
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
          />
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
            className="w-1.5 h-1.5 rounded-full bg-blue-500"
          />
        </div>
      </div>
    </div>
  );
});

export default MiniKuboLoader;
