import { memo, useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar%3F";

const FloatingWhatsApp = () => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-3 z-50 sm:bottom-6 sm:right-6">
      <div className="relative flex items-center justify-end">
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 8, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-2xl border border-border/70 bg-white/95 px-4 py-3 shadow-[0_18px_50px_rgba(15,23,42,.14)] backdrop-blur-xl md:block"
            >
              <p className="text-sm font-semibold text-foreground">Falar sobre seu projeto</p>
              <p className="mt-0.5 text-xs text-muted-foreground">Atendimento direto pelo WhatsApp</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a Kubo Web no WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          initial={{ scale: 0.85, opacity: 0, y: 8 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-[#21c45b] text-white shadow-[0_16px_42px_rgba(37,211,102,.28)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/25 sm:h-auto sm:w-auto sm:gap-2.5 sm:px-5 sm:py-3.5"
        >
          <span className="absolute inset-0 -z-10 rounded-full border border-[#25D366]/35 kubo-pulse-soft" aria-hidden="true" />
          <MessageCircle className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:rotate-[-4deg]" />
          <span className="hidden whitespace-nowrap text-sm font-semibold sm:inline">WhatsApp</span>
        </motion.a>
      </div>
    </div>
  );
};

export default memo(FloatingWhatsApp);
