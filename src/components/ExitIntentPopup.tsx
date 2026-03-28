import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import botAvatar from "@/assets/kubo-icon.png";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20aproveitar%20o%20desconto%20de%2015%25%20no%20primeiro%20projeto!";

const ExitIntentPopup = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (e.clientY <= 5 && !dismissed && !visible) {
        setVisible(true);
      }
    },
    [dismissed, visible]
  );

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("exit-intent-shown");
    if (alreadyShown) {
      setDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const close = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("exit-intent-shown", "true");
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            onClick={close}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-[61] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md bg-card border border-border/60 rounded-3xl shadow-2xl shadow-primary/10 overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />

              {/* Close */}
              <button
                onClick={close}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors z-10"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>

              <div className="p-8 pt-10 text-center">
                {/* Icon */}
                <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <img src={botAvatar} alt="Kubo" className="w-10 h-10 object-contain" />
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                  <Gift className="w-3.5 h-3.5" />
                  OFERTA EXCLUSIVA
                </div>

                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Espere! Não vá embora 👋
                </h2>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Ganhe <span className="text-primary font-bold text-base">15% de desconto</span> no seu
                  primeiro projeto. Oferta válida apenas agora!
                </p>

                {/* Timer feel */}
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-6">
                  <Clock className="w-3.5 h-3.5" />
                  Oferta por tempo limitado
                </div>

                {/* CTA */}
                <Button
                  asChild
                  className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base gap-2"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Quero meu desconto
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>

                <button
                  onClick={close}
                  className="mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Não, obrigado
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
