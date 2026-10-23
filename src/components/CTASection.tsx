import { memo } from "react";
import { ArrowUpRight, Check, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const CTASection = () => (
  <section className="relative overflow-hidden bg-[#050a13] px-4 py-28 text-white md:py-40">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-[18%] top-[-28%] h-[720px] w-[720px] rounded-full bg-[#326cff]/[0.18] blur-[180px]" />
      <div className="absolute right-[-10%] bottom-[-35%] h-[620px] w-[620px] rounded-full bg-[#8db6ff]/[0.08] blur-[170px]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-noise opacity-[0.14]" />
    </div>

    <div className="container relative mx-auto max-w-[1380px]">
      <div className="grid gap-14 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8db6ff]">
            <Sparkles className="h-3.5 w-3.5" />
            Next project
          </div>
          <h2 className="mt-6 max-w-[900px] text-[3.5rem] font-heading font-semibold leading-[.88] tracking-[-0.075em] sm:text-7xl md:text-[6.5rem] lg:text-[7.15rem]">
            Um site forte começa
            <span className="block text-white/[0.3]">antes do layout.</span>
          </h2>
          <p className="mt-8 max-w-[650px] text-base leading-8 text-white/[0.46] md:text-lg">
            Conte o que seu negócio precisa resolver. A Kubo Web organiza objetivo, direção, escopo e próximo passo antes de começar a construir.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-[56px] min-w-[245px] items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#07101f] shadow-[0_20px_60px_rgba(0,0,0,.22)] transition-all hover:-translate-y-0.5 hover:bg-[#edf3ff]"
            >
              <MessageCircle className="h-4 w-4" />
              Conversar sobre o projeto
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <span className="text-xs text-white/[0.28]">Atendimento direto pelo WhatsApp</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, rotate: 1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: .08, duration: .72, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-[#326cff]/10 blur-[90px]" />
          <div className="relative overflow-hidden rounded-[34px] border border-white/[0.1] bg-white/[0.055] p-5 shadow-[0_40px_120px_rgba(0,0,0,.35)] backdrop-blur-xl md:p-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.3]">Project brief</p>
                <p className="mt-1 text-sm font-semibold text-white/[0.76]">O que precisamos saber primeiro</p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8db6ff]/10 text-[#8db6ff]">
                <Sparkles className="h-4 w-4" />
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {[
                ["01", "Objetivo", "O que o site precisa fazer pelo negócio?"],
                ["02", "Público", "Quem precisa entender e confiar nessa mensagem?"],
                ["03", "Oferta", "Qual serviço, produto ou ação deve ganhar prioridade?"],
              ].map(([number, title, text]) => (
                <motion.div
                  key={number}
                  whileHover={{ x: 4 }}
                  transition={{ duration: .2 }}
                  className="grid grid-cols-[auto_1fr] gap-4 rounded-[20px] border border-white/[0.08] bg-black/[0.1] p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.05] text-[9px] font-semibold text-[#8db6ff]">{number}</span>
                  <div>
                    <p className="text-sm font-semibold text-white/[0.76]">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/[0.34]">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 rounded-[22px] border border-white/[0.08] bg-[#0b1525] p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/[0.26]">Depois disso</p>
                  <p className="mt-2 text-sm font-semibold text-white/[0.7]">Escopo e direção ficam muito mais claros.</p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#9ae7cc]/10 text-[#9ae7cc]"><Check className="h-4 w-4" /></span>
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-5 hidden rounded-[18px] border border-white/[0.1] bg-[#0b1525]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
          >
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/[0.24]">Kubo Web</p>
            <p className="mt-1 text-xs font-medium text-white/[0.62]">Strategy → Design → Code</p>
          </motion.div>
        </motion.div>
      </div>

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
