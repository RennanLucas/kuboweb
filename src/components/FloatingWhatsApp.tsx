import { memo } from "react";
import { MessageCircle } from "lucide-react";
const whatsappUrl="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";
const FloatingWhatsApp=()=> <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Kubo Web no WhatsApp" className="fixed bottom-4 right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#08111f]/90 text-white shadow-[0_12px_34px_rgba(8,17,31,.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#14233d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ea8ff] sm:bottom-6 sm:right-6"><MessageCircle className="h-[18px] w-[18px]"/></a>;
export default memo(FloatingWhatsApp);
