import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CubeLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center gap-6"
        >
          {/* 3D CSS Cube */}
          <div className="cube-scene">
            <div className="cube-spinner">
              <div className="cube-face cube-front" />
              <div className="cube-face cube-back" />
              <div className="cube-face cube-right" />
              <div className="cube-face cube-left" />
              <div className="cube-face cube-top" />
              <div className="cube-face cube-bottom" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-1.5"
          >
            <span className="text-lg font-heading font-bold text-foreground tracking-tight">Kubo</span>
            <span className="text-lg font-heading font-bold text-primary tracking-tight">Web</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CubeLoader;
