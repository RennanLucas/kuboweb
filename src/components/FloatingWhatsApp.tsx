import { memo, useState, useEffect } from "react";
import { ClipboardCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const FloatingWhatsApp = () => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDiagnostico = location.pathname === "/diagnostico";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (isDiagnostico) {
      const element = document.getElementById("diagnostico-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/diagnostico");
    }
  };

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
            <p className="text-sm font-medium text-foreground">
              {isDiagnostico ? "Iniciar diagnóstico" : "Diagnóstico gratuito"}
            </p>
            <p className="text-xs text-muted-foreground">
              {isDiagnostico ? "Vá direto para a avaliação" : "Descubra a solução ideal"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={handleClick}
        className="flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-foreground text-background shadow-lg shadow-foreground/20 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_3]"
        aria-label={isDiagnostico ? "Ir para o diagnóstico" : "Fazer diagnóstico gratuito"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ClipboardCheck className="w-5 h-5" />
        <span className="text-sm font-semibold whitespace-nowrap">
          {isDiagnostico ? "Iniciar diagnóstico" : "Diagnóstico gratuito"}
        </span>
      </motion.button>
    </div>
  );
};

export default memo(FloatingWhatsApp);
