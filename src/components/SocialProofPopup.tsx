import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import botAvatar from "@/assets/kubo-icon.png";

const notifications = [
  { name: "João", city: "São Paulo", action: "solicitou um orçamento" },
  { name: "Maria", city: "Rio de Janeiro", action: "contratou um site institucional" },
  { name: "Carlos", city: "Belo Horizonte", action: "solicitou um orçamento" },
  { name: "Ana", city: "Curitiba", action: "contratou uma landing page" },
  { name: "Pedro", city: "Porto Alegre", action: "solicitou um diagnóstico gratuito" },
  { name: "Fernanda", city: "Brasília", action: "contratou uma loja virtual" },
  { name: "Lucas", city: "Salvador", action: "solicitou um orçamento" },
  { name: "Juliana", city: "Florianópolis", action: "contratou manutenção mensal" },
  { name: "Rafael", city: "Campinas", action: "solicitou um orçamento" },
  { name: "Camila", city: "Recife", action: "contratou anúncios online" },
  { name: "Thiago", city: "Goiânia", action: "contratou um site institucional" },
  { name: "Larissa", city: "Manaus", action: "solicitou um orçamento" },
  { name: "Bruno", city: "Fortaleza", action: "contratou uma landing page" },
  { name: "Patrícia", city: "Vitória", action: "solicitou um diagnóstico gratuito" },
  { name: "Gustavo", city: "Belém", action: "contratou uma loja virtual" },
  { name: "Isabela", city: "Santos", action: "solicitou um orçamento" },
  { name: "Diego", city: "Natal", action: "contratou manutenção mensal" },
  { name: "Mariana", city: "São Luís", action: "contratou anúncios online" },
  { name: "Felipe", city: "Joinville", action: "solicitou um orçamento" },
  { name: "Beatriz", city: "Ribeirão Preto", action: "contratou um site institucional" },
  { name: "André", city: "Sorocaba", action: "solicitou um diagnóstico gratuito" },
  { name: "Tatiane", city: "Uberlândia", action: "contratou uma landing page" },
  { name: "Rodrigo", city: "Aracaju", action: "solicitou um orçamento" },
  { name: "Priscila", city: "Londrina", action: "contratou uma loja virtual" },
  { name: "Marcelo", city: "João Pessoa", action: "contratou manutenção mensal" },
];

function getRandomTime() {
  const minutes = Math.floor(Math.random() * 55) + 2;
  return `${minutes} min atrás`;
}

const SocialProofPopup = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  const showNext = useCallback(() => {
    if (dismissed) return;
    setVisible(true);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % notifications.length);
      }, 500);
    }, 5000);
    return () => clearTimeout(hideTimer);
  }, [dismissed]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      showNext();
    }, 8000);
    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (dismissed) return;
    if (!visible && current > 0) {
      const interval = setTimeout(() => {
        showNext();
      }, 15000 + Math.random() * 10000);
      return () => clearTimeout(interval);
    }
  }, [visible, current, dismissed, showNext]);

  const notification = notifications[current];

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: -100, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-24 left-4 z-50 max-w-xs"
        >
          <div className="relative bg-card/95 backdrop-blur-xl border border-border/60 rounded-2xl p-4 shadow-xl shadow-primary/5">
            <button
              onClick={() => { setVisible(false); setDismissed(true); }}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-muted/80 flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Fechar"
            >
              <X className="w-3 h-3 text-muted-foreground" />
            </button>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden">
                <img src={botAvatar} alt="Kubo" className="w-7 h-7 object-contain" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0" />
                  <span className="text-sm font-semibold text-foreground truncate">
                    {notification.name} de {notification.city}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {notification.action}
                </p>
                <p className="text-[10px] text-muted/70 mt-1">
                  {getRandomTime()}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofPopup;
