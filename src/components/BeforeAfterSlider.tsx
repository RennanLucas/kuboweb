import React, { useState, useRef, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, XCircle, CheckCircle2, Zap } from 'lucide-react';

const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  }, [handleMove]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    handleMove(e.clientX);
  }, [handleMove]);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const onMouseLeave = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <section id="comparativo-visual" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="section-label inline-flex items-center gap-2">
            <ArrowLeftRight className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Antes vs Depois Interativo</span>
          </div>
          <h2 className="section-title">
            Arraste e veja a <span className="text-gradient-hero">transformação</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Descubra por que um site amador afasta clientes e como o Padrão Kubo Web os transforma em compradores.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full h-[520px] sm:h-[500px] md:h-[480px] max-h-[75vh] rounded-3xl overflow-hidden shadow-glow cursor-ew-resize select-none border border-border/50"
          ref={containerRef}
          onMouseMove={onMouseMove}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchMove={onTouchMove}
        >
          {/* AFTER Panel (Right / Kubo Web) - Base Layer */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 bg-slate-950 p-6 md:p-10 flex flex-col justify-between">
            <div className="pl-6 md:pl-10 ml-auto w-[90%] sm:w-[80%] max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary mb-6">
                <span className="text-sm font-semibold">✨ Depois · Padrão Kubo Web</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">Máquina de Vendas & Autoridade</h3>
              <ul className="space-y-4">
                {[
                  "Carregamento instantâneo em 0.6s",
                  "Design exclusivo alinhado ao seu público",
                  "Copywriting com gatilhos de conversão",
                  "Leads qualificados direto no WhatsApp"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="font-medium text-sm md:text-base leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-8 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm gap-4 ml-auto w-[90%] sm:w-[80%] max-w-lg">
               <div>
                 <p className="text-sm text-slate-400 mb-1">Conversão: 8% a 14%</p>
                 <p className="font-semibold text-emerald-400">+340% ROI</p>
               </div>
               <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                 <Zap className="w-4 h-4" />
                 <span className="text-sm font-bold">PageSpeed 99/100</span>
               </div>
            </div>
          </div>

          {/* BEFORE Panel (Left / Amador) - Clipped Layer */}
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-950/40 via-red-900/20 to-zinc-900 bg-zinc-950 p-6 md:p-10 flex flex-col justify-between border-r border-red-500/30"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <div className="w-[90%] sm:w-[80%] max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-6 whitespace-nowrap">
                <span className="text-sm font-semibold">⚠ Antes · Site Amador</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 leading-tight whitespace-nowrap">Perda de Clientes e Baixa Confiança</h3>
              <ul className="space-y-4">
                {[
                  "53% dos visitantes desistem antes de carregar",
                  "Template genérico igual ao do concorrente",
                  "Texto amador que não gera desejo de compra",
                  "Visitantes saem sem mandar mensagem"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="font-medium text-sm md:text-base leading-snug whitespace-nowrap">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-8 p-4 rounded-xl bg-red-950/30 border border-red-500/20 backdrop-blur-sm gap-4 w-[90%] sm:w-[80%] max-w-lg">
               <div>
                 <p className="text-sm text-slate-400 mb-1 whitespace-nowrap">Conversão: Menos de 0.8%</p>
                 <p className="font-semibold text-red-400 whitespace-nowrap">Perdendo vendas diárias</p>
               </div>
               <div className="flex items-center gap-2 text-red-400 bg-red-500/10 px-3 py-1.5 rounded-lg border border-red-500/20 whitespace-nowrap">
                 <span className="text-sm font-bold">Lento (6.4s)</span>
               </div>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize group shadow-[0_0_15px_rgba(var(--primary),0.5)] z-20"
            style={{ left: `calc(${sliderPos}% - 2px)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg shadow-primary/50 transition-transform group-hover:scale-110 group-active:scale-95">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-6 text-sm font-medium"
        >
          💡 Dica: Arraste a linha para comparar os dois cenários
        </motion.p>
      </div>
    </section>
  );
};

export default memo(BeforeAfterSlider);
