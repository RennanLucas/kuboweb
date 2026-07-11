import { memo, useState, useEffect } from "react";
import { ClipboardCheck, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const FloatingWhatsApp = () => {
  const [hoveredDiagnostico, setHoveredDiagnostico] = useState(false);
  const [hoveredWhatsApp, setHoveredWhatsApp] = useState(false);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDiagnostico = location.pathname === "/diagnostico";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleDiagnosticoClick = () => {
    if (isDiagnostico) {
      const element = document.getElementById("diagnostico-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/diagnostico");
    }
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar%3F",
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (!visible) return null;

  return (
    <>
      {/* Diagnóstico — esquerda */}
      <div className="fixed bottom-6 left-4 sm:left-6 z-50">
        <div className="relative flex items-center">
          <AnimatePresence>
            {hoveredDiagnostico && (
              <motion.div
                initial={{ opacity: 0, x: -10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute left-full ml-3 bg-card border border-border/50 rounded-xl px-4 py-2.5 shadow-xl whitespace-nowrap pointer-events-none"
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
            onClick={handleDiagnosticoClick}
            className="relative flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-foreground text-background shadow-lg shadow-foreground/20 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_3]"
            aria-label={isDiagnostico ? "Ir para o diagnóstico" : "Fazer diagnóstico gratuito"}
            onMouseEnter={() => setHoveredDiagnostico(true)}
            onMouseLeave={() => setHoveredDiagnostico(false)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <ClipboardCheck className="w-5 h-5" />
            <span className="text-sm font-semibold whitespace-nowrap">
              {isDiagnostico ? "Iniciar diagnóstico" : "Diagnóstico gratuito"}
            </span>
          </motion.button>
        </div>
      </div>

      {/* WhatsApp — direita */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50">
        <div className="relative flex items-center">
          <AnimatePresence>
            {hoveredWhatsApp && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute right-full mr-3 bg-card border border-border/50 rounded-xl px-4 py-2.5 shadow-xl whitespace-nowrap pointer-events-none"
              >
                <p className="text-sm font-medium text-foreground">Falar no WhatsApp</p>
                <p className="text-xs text-muted-foreground">Resposta rápida · Sem robô</p>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            onClick={handleWhatsAppClick}
            className="relative flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_3]"
            aria-label="Falar no WhatsApp"
            onMouseEnter={() => setHoveredWhatsApp(true)}
            onMouseLeave={() => setHoveredWhatsApp(false)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-semibold whitespace-nowrap">WhatsApp</span>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default memo(FloatingWhatsApp);
