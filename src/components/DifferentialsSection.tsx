import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const rows = [
  ["01", "Design com direção", "A identidade do projeto nasce do posicionamento e do conteúdo do negócio — não de um tema reaproveitado."],
  ["02", "Performance", "Estrutura enxuta, carregamento eficiente e decisões que respeitam Core Web Vitals."],
  ["03", "Experiência mobile", "Tipografia, ordem, espaçamento e interação são pensados para desktop, tablet e celular."],
  ["04", "SEO técnico", "Semântica, metadados, sitemap e fundamentos técnicos preparados para busca."],
  ["05", "Conversão", "WhatsApp, formulários e CTAs entram na arquitetura da página, não como remendo no final."],
  ["06", "Suporte", "Manutenção e acompanhamento disponíveis para o site continuar útil depois da publicação."],
] as const;

const DifferentialsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:py-28 lg:py-40">
      <div className="container mx-auto max-w-[1460px]">
        <div className="grid gap-10 lg:grid-cols-[.42fr_.58fr] lg:gap-14">
          <div className="relative">
            <div className="lg:sticky lg:top-28">
              <p className="text-[9px] font-semibold uppercase tracking-[.26em] text-[#2458d8]">A assinatura Kubo</p>
              <h2 className="mt-4 text-[2.75rem] font-heading font-semibold leading-[.92] tracking-[-.065em] text-[#08111f] sm:text-[4rem] md:mt-5 md:text-[5.2rem] lg:text-7xl lg:leading-[.86]">
                Design que<br /><span className="text-black/[.22]">tem sistema.</span>
              </h2>
              <p className="mt-5 max-w-[430px] text-[14px] leading-7 text-black/[.48] md:mt-7 md:text-base md:leading-8">
                A estética chama atenção. A estrutura faz o site continuar bom depois do primeiro impacto.
              </p>

              <div className="relative mt-12 hidden h-[420px] overflow-hidden rounded-[38px] bg-[#05070b] lg:block">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(36,88,216,.3),transparent_45%)]" />
                <motion.div animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#91b5ff]/20">
                  <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 rounded-full bg-[#91b5ff] shadow-[0_0_28px_#91b5ff]" />
                </motion.div>
                <motion.div animate={reduceMotion ? undefined : { scale: [.94, 1.03, .94], rotate: [-6, 3, -6] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/2 top-1/2 flex h-[185px] w-[185px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[48px] border border-white/10 bg-white/[.04] shadow-[0_35px_100px_rgba(36,88,216,.22)] backdrop-blur-xl">
                  <span className="text-[7rem] font-heading font-semibold leading-none tracking-[-.14em] text-white">K</span>
                </motion.div>
                <span className="absolute bottom-6 left-7 text-[8px] font-semibold uppercase tracking-[.2em] text-white/25">Kubo digital system / 2026</span>
              </div>
            </div>
          </div>

          <div className="border-t border-black/[.1]">
            {rows.map((row, index) => (
              <motion.div key={row[0]} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: index * .03 }} className="group grid grid-cols-[30px_1fr] gap-x-3 gap-y-2 border-b border-black/[.09] py-6 md:grid-cols-[55px_.38fr_.62fr] md:items-start md:gap-4 md:py-10">
                <span className="pt-1 font-mono text-[8px] font-semibold text-[#2458d8] md:text-[9px]">{row[0]}</span>
                <h3 className="text-[1.55rem] font-heading font-semibold leading-[1.02] tracking-[-.045em] text-[#08111f] transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">{row[1]}</h3>
                <p className="col-start-2 max-w-[620px] text-[13px] leading-6 text-black/[.47] md:col-auto md:text-sm md:leading-7">{row[2]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(DifferentialsSection);
