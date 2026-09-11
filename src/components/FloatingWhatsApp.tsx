import { memo, useState, useEffect } from "react";
import { ClipboardCheck, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { trackWhatsAppClick, trackCtaClick } from "@/lib/tracking";

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
    trackCtaClick("cta_orcamento");
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
    trackWhatsAppClick("botao_whatsapp");
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
      <div className="fixed bottom-5 left-3 sm:bottom-6 sm:left-6 z-50">
        <div className="relative flex items-center">
          {/* Tooltip — apenas desktop, posicionado acima */}
          <div className="hidden md:block pointer-events-none">
            <AnimatePresence>
              {hoveredDiagnostico && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full mb-3 left-0 bg-card/95 backdrop-blur-md border border-border/60 rounded-xl px-4 py-2.5 shadow-xl whitespace-nowrap"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {isDiagnostico ? "Iniciar diagnóstico" : "Diagnóstico gratuito"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {isDiagnostico ? "Vá direto para a avaliação" : "Descubra a solução ideal"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            onClick={handleDiagnosticoClick}
            className="relative flex items-center gap-1.5 sm:gap-2 px-3 py-2.5 sm:px-4 sm:py-3 rounded-full bg-foreground text-background shadow-lg shadow-foreground/20"
            aria-label={isDiagnostico ? "Ir para o diagnóstico" : "Fazer diagnóstico gratuito"}
            onMouseEnter={() => setHoveredDiagnostico(true)}
            onMouseLeave={() => setHoveredDiagnostico(false)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ClipboardCheck className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
              {isDiagnostico ? "Diagnóstico" : "Diagnóstico"}
            </span>
          </motion.button>
        </div>
      </div>

      {/* WhatsApp — direita */}
      <div className="fixed bottom-5 right-3 sm:bottom-6 sm:right-6 z-50">
        <div className="relative flex items-center">
          {/* Tooltip — apenas desktop, posicionado acima */}
          <div className="hidden md:block pointer-events-none">
            <AnimatePresence>
              {hoveredWhatsApp && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full mb-3 right-0 bg-card/95 backdrop-blur-md border border-border/60 rounded-xl px-4 py-2.5 shadow-xl whitespace-nowrap"
                >
                  <p className="text-sm font-semibold text-foreground">Falar no WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Resposta rápida · Sem robô</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            onClick={handleWhatsAppClick}
            className="relative flex items-center gap-1.5 sm:gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30"
            aria-label="Falar no WhatsApp"
            onMouseEnter={() => setHoveredWhatsApp(true)}
            onMouseLeave={() => setHoveredWhatsApp(false)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">WhatsApp</span>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default memo(FloatingWhatsApp);
