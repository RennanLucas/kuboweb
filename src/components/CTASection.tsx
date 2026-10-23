import { memo } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const CTASection = () => (
  <section className="relative overflow-hidden bg-[#050a13] px-4 py-28 text-white md:py-40">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-[-36%] h-[720px] w-[920px] -translate-x-1/2 rounded-full bg-[#326cff]/[0.2] blur-[180px]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-noise opacity-[0.16]" />
    </div>

    <div className="container relative mx-auto max-w-[1380px]">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8db6ff]">Next project</p>
        <h2 className="mx-auto mt-6 max-w-[1180px] text-center text-[3.3rem] font-heading font-semibold leading-[.89] tracking-[-0.072em] sm:text-7xl md:text-[6.4rem] lg:text-[7.5rem]">
          Seu próximo site não precisa
          <span className="block text-white/[0.32]">parecer com os outros.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-[680px] text-center text-base leading-8 text-white/[0.44] md:text-lg">
          Conte o que seu negócio precisa resolver. A Kubo Web organiza a direção, o escopo e o próximo passo antes de começar a construir.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-[54px] min-w-[235px] items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#07101f] transition-all hover:-translate-y-0.5 hover:bg-[#edf3ff]"
          >
            <MessageCircle className="h-4 w-4" />
            Conversar sobre o projeto
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <span className="text-xs text-white/[0.28]">Atendimento direto pelo WhatsApp</span>
        </div>
      </motion.div>

      <div className="mt-20 grid border-y border-white/[0.1] sm:grid-cols-3 md:mt-28">
        {["Objetivo antes do layout", "Direção visual própria", "Mobile e publicação revisados"].map((item, index) => (
          <div key={item} className={`flex items-center gap-4 py-5 sm:px-5 ${index > 0 ? "sm:border-l sm:border-white/[0.1]" : ""}`}>
            <span className="text-[9px] font-semibold text-[#8db6ff]">0{index + 1}</span>
            <span className="text-xs font-medium text-white/[0.52]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default memo(CTASection);
