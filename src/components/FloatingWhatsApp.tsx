import { memo, useState, useEffect } from "react";
import { Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingWhatsApp = () => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-card border border-border/50 rounded-xl px-4 py-2.5 shadow-xl whitespace-nowrap"
          >
            <p className="text-sm font-medium text-foreground">Consultoria rápida</p>
            <p className="text-xs text-muted-foreground">Fale com um especialista</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/30 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_3]"
        aria-label="Falar com um especialista no WhatsApp"
        onClick={(e) => {
          const w = window as unknown as { gtagSendEvent?: (u: string) => boolean };
          if (typeof w.gtagSendEvent === "function") {
            e.preventDefault();
            w.gtagSendEvent(e.currentTarget.href);
          }
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Briefcase className="w-5 h-5" />
        <span className="text-sm font-semibold whitespace-nowrap">Falar com especialista</span>
      </motion.a>
    </div>
  );
};

export default memo(FloatingWhatsApp);
