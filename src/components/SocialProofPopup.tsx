import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

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
  return `${minutes}min`;
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
    }, 4000);
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
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-2.5 pl-3 pr-2 py-2 rounded-full bg-card/95 backdrop-blur-xl border border-border/50 shadow-lg shadow-primary/5">
            <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
            <span className="text-sm text-foreground whitespace-nowrap">
              <span className="font-semibold">{notification.name}</span>
              <span className="text-muted-foreground"> de {notification.city} </span>
              <span className="text-muted-foreground">{notification.action}</span>
            </span>
            <span className="text-[10px] text-muted/60 whitespace-nowrap">
              {getRandomTime()}
            </span>
            <button
              onClick={() => { setVisible(false); setDismissed(true); }}
              className="ml-1 w-5 h-5 rounded-full bg-muted/40 flex items-center justify-center hover:bg-muted transition-colors flex-shrink-0"
              aria-label="Fechar"
            >
              <X className="w-3 h-3 text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofPopup;
