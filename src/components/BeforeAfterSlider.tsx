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

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

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
    <section id="comparativo-visual" className="py-28 md:py-40 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16 space-y-4"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[520px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none border border-border/50 touch-none bg-slate-950"
          ref={containerRef}
          onMouseMove={onMouseMove}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* AFTER Panel (Right / Kubo Web) - Base Layer */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/10 via-card to-card p-5 sm:p-8 md:p-10 flex flex-col justify-between">
            <div className="pl-4 sm:pl-6 md:pl-10 ml-auto w-[92%] sm:w-[85%] max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-semibold">✨ Depois · Padrão Kubo Web</span>
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Máquina de Vendas & Autoridade
              </h3>
              <ul className="space-y-2.5 sm:space-y-3.5">
                {[
                  "Carregamento instantâneo em 0.6s",
                  "Design exclusivo alinhado ao seu público",
                  "Copywriting com gatilhos de conversão",
                  "Leads qualificados direto no WhatsApp",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-slate-200">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                    <span className="font-medium text-xs sm:text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 sm:mt-8 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm gap-2 sm:gap-4 ml-auto w-[92%] sm:w-[85%] max-w-lg">
              <div>
                <p className="text-xs text-slate-400">Conversão: 8% a 14%</p>
                <p className="font-semibold text-xs sm:text-sm text-emerald-400">+340% ROI</p>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 text-xs font-bold">
                <Zap className="w-3.5 h-3.5" />
                <span>PageSpeed 99/100</span>
              </div>
            </div>
          </div>

          {/* BEFORE Panel (Left / Amador) - Clipped Layer */}
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-950/50 via-zinc-900 to-zinc-950 p-5 sm:p-8 md:p-10 flex flex-col justify-between border-r-2 border-primary overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <div className="w-[92%] sm:w-[85%] max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-semibold">⚠ Antes · Site Amador</span>
              </div>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Perda de Clientes e Baixa Confiança
              </h3>
              <ul className="space-y-2.5 sm:space-y-3.5">
                {[
                  "53% dos visitantes desistem antes de carregar",
                  "Template genérico igual ao do concorrente",
                  "Texto amador que não gera desejo de compra",
                  "Visitantes saem sem mandar mensagem",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-slate-300">
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 shrink-0" />
                    <span className="font-medium text-xs sm:text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 sm:mt-8 p-3 sm:p-4 rounded-xl bg-red-950/40 border border-red-500/25 backdrop-blur-sm gap-2 sm:gap-4 w-[92%] sm:w-[85%] max-w-lg">
              <div>
                <p className="text-xs text-slate-400">Conversão: Menos de 0.8%</p>
                <p className="font-semibold text-xs sm:text-sm text-red-400">Perdendo vendas diárias</p>
              </div>
              <div className="flex items-center gap-1.5 text-red-400 bg-red-500/10 px-2.5 py-1 rounded-lg border border-red-500/20 text-xs font-bold">
                <span>Lento (6.4s)</span>
              </div>
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize group shadow-[0_0_15px_rgba(56,189,248,0.6)] z-20"
            style={{ left: `calc(${sliderPos}% - 2px)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg shadow-primary/50 transition-transform active:scale-95 border-2 border-background">
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
