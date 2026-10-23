import { memo } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
const whatsappUrl="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";
const CTASection=()=> <section className="relative overflow-hidden bg-[#05070b] px-4 py-28 text-white md:py-44">
  <div className="pointer-events-none absolute -right-[10%] top-[-40%] h-[800px] w-[800px] rounded-full bg-[#326cff]/[.15] blur-[200px]"/>
  <div className="container relative mx-auto max-w-[1380px]">
    <div className="border-t border-white/[.12] pt-8"><div className="flex items-center justify-between text-[8px] font-semibold uppercase tracking-[.24em] text-white/[.28]"><span>Next project / Kubo Web</span><span>São Paulo · Brazil</span></div></div>
    <motion.h2 initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mt-14 max-w-[1250px] text-[4rem] font-heading font-semibold leading-[.82] tracking-[-.08em] sm:text-7xl md:text-[7.5rem] lg:text-[9.5rem]">Your business deserves<br/><span className="text-white/[.25]">a stronger first impression.</span></motion.h2>
    <div className="mt-14 grid gap-10 border-b border-white/[.12] pb-14 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="max-w-[650px] text-base leading-8 text-white/[.44] md:text-lg">Conte o que você vende, para quem e o que o site precisa resolver. A conversa começa pelo objetivo — não por um pacote pronto.</p><div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-[9px] font-semibold uppercase tracking-[.16em] text-white/[.3]"><span>Strategy</span><span>Art direction</span><span>Development</span><span>Launch</span></div></div><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex h-[58px] items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#07101f] transition-transform hover:-translate-y-1"><MessageCircle className="h-4 w-4"/>Conversar sobre o projeto<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></a></div>
  </div>
</section>;
export default memo(CTASection);
