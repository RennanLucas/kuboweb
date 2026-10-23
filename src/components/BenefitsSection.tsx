import { Code2, Globe2, LayoutGrid, MousePointer2, Palette, PanelsTopLeft, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const stages = [
  { icon: LayoutGrid, label: "Estrutura", status: "Aprovada" },
  { icon: Palette, label: "Direção visual", status: "Em revisão" },
  { icon: Code2, label: "Desenvolvimento", status: "Próxima" },
  { icon: Globe2, label: "Publicação", status: "Agendada" },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-[#050a13] px-4 py-24 text-white md:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[8%] h-[420px] w-[420px] rounded-full bg-blue-600/12 blur-[150px]" />
        <div className="absolute right-[-10%] top-[20%] h-[560px] w-[560px] rounded-full bg-cyan-400/8 blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="container relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end md:mb-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#79a9ff]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">Kubo Workbench</span>
            </div>
            <h2 className="max-w-5xl text-[3rem] font-heading font-semibold leading-[0.93] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              O projeto inteiro,
              <span className="block text-[#79a9ff]">pensado como produto.</span>
            </h2>
          </div>
          <p className="max-w-[440px] text-base leading-8 text-white/48 lg:justify-self-end md:text-lg">
            Referência, estrutura, direção visual, responsividade e desenvolvimento entram no mesmo sistema — para o site parecer consistente do primeiro bloco ao último.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-[34px] border border-white/10 bg-[#0a1220]/94 shadow-[0_40px_120px_rgba(0,0,0,.42)] backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 border-b border-white/8 px-5 py-4 md:px-7">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
            </div>
            <div className="ml-3 flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.035] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">Projeto ativo</span>
            </div>
            <span className="ml-auto hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-white/28 sm:block">Kubo Web · Studio workspace</span>
          </div>

          <div className="grid min-h-[680px] lg:grid-cols-[220px_1fr]">
            <aside className="hidden border-r border-white/8 bg-white/[0.018] p-5 lg:block">
              <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/28">Projeto</p>
              <div className="space-y-1.5">
                {["Overview", "Estrutura", "Interface", "Responsivo", "Desenvolvimento", "Launch"].map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs ${
                      index === 2 ? "bg-white/8 text-white" : "text-white/38"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${index === 2 ? "bg-[#79a9ff]" : "bg-white/14"}`} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-white/8 bg-white/[0.025] p-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/28">Entrega</p>
                <p className="mt-3 text-sm font-medium text-white/72">Website responsivo</p>
                <p className="mt-1 text-[11px] leading-5 text-white/32">Estratégia, interface e desenvolvimento.</p>
              </div>
            </aside>

            <div className="p-4 sm:p-6 md:p-8 lg:p-9">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">Interface / Desktop</p>
                  <h3 className="mt-2 text-2xl font-heading font-semibold tracking-[-0.035em] md:text-3xl">Direção principal da página</h3>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[10px] font-medium text-white/45">1440px</span>
                  <span className="rounded-full border border-[#79a9ff]/30 bg-[#79a9ff]/10 px-3 py-2 text-[10px] font-medium text-[#9cc2ff]">Live preview</span>
                </div>
              </div>

              <div className="grid gap-4 xl:grid-cols-[1.5fr_0.5fr]">
                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#f2f3f5] shadow-[0_30px_70px_rgba(0,0,0,.25)]">
                  <div className="flex items-center gap-2 border-b border-black/8 bg-white px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-black/12" />
                    <span className="h-2 w-2 rounded-full bg-black/12" />
                    <span className="h-2 w-2 rounded-full bg-black/12" />
                    <div className="mx-auto rounded-full bg-black/[0.035] px-5 py-1.5 text-[9px] text-black/35">projeto.kuboweb.com.br</div>
                  </div>

                  <div className="relative min-h-[470px] overflow-hidden bg-[#0a1020] p-6 text-white md:p-9">
                    <div className="absolute right-[-8%] top-[-18%] h-[360px] w-[360px] rounded-full bg-blue-500/28 blur-[100px]" />
                    <div className="absolute bottom-[-30%] left-[-10%] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-[100px]" />
                    <div className="relative z-10 grid min-h-[390px] gap-7 md:grid-cols-[1.05fr_0.95fr] md:items-center">
                      <div>
                        <div className="mb-5 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#79a9ff]" />
                          <span className="text-[9px] font-semibold uppercase tracking-[0.23em] text-white/40">Brand system / Website</span>
                        </div>
                        <h4 className="max-w-[430px] text-[2.5rem] font-heading font-semibold leading-[0.95] tracking-[-0.055em] md:text-[3.5rem]">
                          Clareza visual que aumenta a percepção de valor.
                        </h4>
                        <p className="mt-5 max-w-[390px] text-xs leading-6 text-white/45 md:text-sm">
                          Uma página forte começa com hierarquia, mensagem e direção visual coerentes — não com efeitos aleatórios.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-2">
                          <span className="rounded-full bg-white px-4 py-2 text-[10px] font-semibold text-[#0a1020]">Solicitar projeto</span>
                          <span className="rounded-full border border-white/14 px-4 py-2 text-[10px] font-semibold text-white/65">Ver processo</span>
                        </div>
                      </div>

                      <div className="relative mx-auto w-full max-w-[340px]">
                        <div className="rounded-[24px] border border-white/12 bg-white/[0.07] p-3 backdrop-blur-xl">
                          <div className="rounded-[18px] bg-white p-4 text-[#152033] shadow-[0_24px_50px_rgba(0,0,0,.22)]">
                            <div className="flex items-center justify-between">
                              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/35">Interface system</span>
                              <PanelsTopLeft className="h-4 w-4 text-blue-600" />
                            </div>
                            <div className="mt-5 grid grid-cols-2 gap-2">
                              <div className="col-span-2 h-20 rounded-xl bg-[#e8eef9] p-3">
                                <div className="h-2 w-16 rounded-full bg-blue-500/25" />
                                <div className="mt-3 h-4 w-3/4 rounded-md bg-[#18243a]" />
                                <div className="mt-2 h-2 w-1/2 rounded-full bg-black/10" />
                              </div>
                              <div className="h-24 rounded-xl bg-[#f3eee7]" />
                              <div className="h-24 rounded-xl bg-[#dfe8e1]" />
                            </div>
                            <div className="mt-3 flex items-center gap-2 rounded-xl border border-black/8 px-3 py-2.5">
                              <MousePointer2 className="h-3.5 w-3.5 text-blue-600" />
                              <span className="text-[9px] font-medium text-black/45">CTA / hierarchy / spacing</span>
                            </div>
                          </div>
                        </div>

                        <div className="absolute -bottom-6 -right-3 rounded-[18px] border border-white/12 bg-[#101a2a]/95 p-3 shadow-2xl backdrop-blur-xl md:-right-8">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05]">
                              <Smartphone className="h-3.5 w-3.5 text-[#8bb6ff]" />
                            </div>
                            <div>
                              <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/28">Mobile</p>
                              <p className="mt-1 text-[10px] font-medium text-white/70">Revisão responsiva</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                  <div className="rounded-[24px] border border-white/9 bg-white/[0.035] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/28">System status</p>
                    <div className="mt-5 space-y-4">
                      <div>
                        <div className="flex justify-between text-[10px] text-white/42"><span>Hierarquia</span><span>100%</span></div>
                        <div className="mt-2 h-1.5 rounded-full bg-white/7"><div className="h-full w-full rounded-full bg-[#79a9ff]" /></div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] text-white/42"><span>Responsivo</span><span>88%</span></div>
                        <div className="mt-2 h-1.5 rounded-full bg-white/7"><div className="h-full w-[88%] rounded-full bg-cyan-300/80" /></div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] text-white/42"><span>Desenvolvimento</span><span>64%</span></div>
                        <div className="mt-2 h-1.5 rounded-full bg-white/7"><div className="h-full w-[64%] rounded-full bg-white/45" /></div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/9 bg-white/[0.035] p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/28">Design tokens</p>
                    <div className="mt-5 flex gap-2">
                      <span className="h-10 flex-1 rounded-xl bg-[#07101f] ring-1 ring-white/10" />
                      <span className="h-10 flex-1 rounded-xl bg-[#79a9ff]" />
                      <span className="h-10 flex-1 rounded-xl bg-[#e7ebf1]" />
                      <span className="h-10 flex-1 rounded-xl bg-white" />
                    </div>
                    <p className="mt-4 text-[10px] leading-5 text-white/35">Cor, espaçamento e tipografia definidos como sistema — não bloco por bloco.</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {stages.map((stage, index) => (
                  <motion.div
                    key={stage.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + index * 0.06, duration: 0.4 }}
                    className="rounded-2xl border border-white/8 bg-white/[0.025] p-4"
                  >
                    <div className="flex items-center justify-between">
                      <stage.icon className="h-4 w-4 text-[#8bb6ff]" />
                      <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white/25">0{index + 1}</span>
                    </div>
                    <p className="mt-5 text-sm font-medium text-white/76">{stage.label}</p>
                    <p className="mt-1 text-[10px] text-white/30">{stage.status}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
