import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/30 hover:scale-110 hover:shadow-xl hover:shadow-whatsapp/40 transition-all duration-300 animate-pulse-slow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default FloatingWhatsApp;