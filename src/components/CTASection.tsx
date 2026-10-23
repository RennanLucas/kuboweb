import { memo } from "react";
import { ArrowUpRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const points = ["Objetivo do site", "Referências e direção visual", "Escopo e próximos passos"];

const CTASection = () => {
  return (
    <section className="overflow-hidden px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[36px] bg-[#06101f] text-white shadow-[0_45px_120px_rgba(15,23,42,.17)]"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-28 -top-36 h-[420px] w-[420px] rounded-full bg-blue-600/24 blur-[130px]" />
            <div className="absolute -bottom-48 right-[-8%] h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[150px]" />
            <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:58px_58px] [mask-image:linear-gradient(to_right,black,transparent_92%)]" />
          </div>

          <div className="relative grid gap-10 p-7 sm:p-9 md:p-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch lg:p-14">
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2">
                  <Sparkles className="h-3.5 w-3.5 text-[#8eb8ff]" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/48">Próximo projeto</span>
                </div>
                <h2 className="max-w-4xl text-[2.65rem] font-heading font-semibold leading-[0.96] tracking-[-0.052em] sm:text-5xl md:text-6xl lg:text-[4.7rem]">
                  Seu site precisa representar
                  <span className="block text-[#8eb8ff]">o nível do seu negócio.</span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/48 md:text-lg">
                  Conte o que você precisa. A Kubo Web organiza o escopo, apresenta a direção mais adequada e deixa claro o que será construído antes de começar.
                </p>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild variant="whatsapp" size="xl" className="rounded-full px-7 shadow-none">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Conversar sobre o projeto
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <span className="text-xs leading-5 text-white/32">Sem formulário longo. Atendimento direto.</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.5 }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl sm:p-6 md:p-7"
            >
              <div className="absolute right-[-80px] top-[-90px] h-[240px] w-[240px] rounded-full bg-[#79a9ff]/16 blur-[80px]" />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/9 pb-4">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">Project intake</p>
                    <p className="mt-2 font-heading text-xl font-semibold tracking-[-0.035em]">O começo precisa ser simples.</p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#79a9ff] text-[#06101f] kubo-float">
                    <ArrowUpRight className="h-4.5 w-4.5" />
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {points.map((point, index) => (
                    <div key={point} className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-4 kubo-interactive-card">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/[0.055] text-[9px] font-semibold text-white/44">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-medium text-white/72">{point}</span>
                      <CheckCircle2 className="ml-auto h-4 w-4 text-[#8eb8ff]/70 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-[#79a9ff]/18 bg-[#79a9ff]/8 p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9cc2ff]">Resultado da conversa</p>
                  <p className="mt-2 text-xs leading-6 text-white/48">Você sai sabendo qual formato faz sentido, o que entra no projeto e qual é o próximo passo.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(CTASection);
