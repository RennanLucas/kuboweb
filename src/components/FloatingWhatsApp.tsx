import { memo, useEffect, useState } from "react";
import { ClipboardCheck, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { trackCtaClick } from "@/lib/tracking";

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
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    navigate("/diagnostico");
  };

  const handleWhatsAppClick = () => {
    // WhatsApp clicks are tracked once by the global capture listener in App.tsx.
    window.open(
      "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar%3F",
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-4 left-3 z-50 sm:bottom-6 sm:left-6">
        <div className="relative flex items-center">
          <div className="pointer-events-none hidden md:block">
            <AnimatePresence>
              {hoveredDiagnostico && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-0 mb-3 whitespace-nowrap rounded-xl border border-border/60 bg-card/95 px-4 py-2.5 shadow-xl backdrop-blur-md"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {isDiagnostico ? "Continuar diagnóstico" : "Diagnóstico gratuito"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {isDiagnostico ? "Voltar para a avaliação" : "Veja qual estrutura faz sentido"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            onClick={handleDiagnosticoClick}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background shadow-lg shadow-foreground/20 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3"
            aria-label={isDiagnostico ? "Ir para o diagnóstico" : "Fazer diagnóstico gratuito"}
            onMouseEnter={() => setHoveredDiagnostico(true)}
            onMouseLeave={() => setHoveredDiagnostico(false)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ClipboardCheck className="h-4.5 w-4.5 shrink-0 sm:h-5 sm:w-5" />
            <span className="hidden whitespace-nowrap text-sm font-semibold sm:inline">Diagnóstico</span>
          </motion.button>
        </div>
      </div>

      <div className="fixed bottom-4 right-3 z-50 sm:bottom-6 sm:right-6">
        <div className="relative flex items-center">
          <div className="pointer-events-none hidden md:block">
            <AnimatePresence>
              {hoveredWhatsApp && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-xl border border-border/60 bg-card/95 px-4 py-2.5 shadow-xl backdrop-blur-md"
                >
                  <p className="text-sm font-semibold text-foreground">Falar no WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Atendimento direto sobre o projeto</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            onClick={handleWhatsAppClick}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-3"
            aria-label="Falar no WhatsApp"
            onMouseEnter={() => setHoveredWhatsApp(true)}
            onMouseLeave={() => setHoveredWhatsApp(false)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="h-4.5 w-4.5 shrink-0 sm:h-5 sm:w-5" />
            <span className="hidden whitespace-nowrap text-sm font-semibold sm:inline">WhatsApp</span>
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default memo(FloatingWhatsApp);
