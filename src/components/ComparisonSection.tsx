import { memo, useState } from "react";
import { ArrowUpRight, Check, MoveHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const genericCards = ["Serviço 01", "Serviço 02", "Serviço 03"];

const ComparisonSection = () => {
  const [position, setPosition] = useState(58);

  return (
    <section className="relative overflow-hidden bg-[#070b12] px-4 py-24 text-white md:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-26%] h-[760px] w-[980px] -translate-x-1/2 rounded-full bg-[#2f68ff]/[0.16] blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <div className="container relative mx-auto max-w-[1380px]">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8db6ff]">Creative direction</p>
            <h2 className="mt-5 max-w-[980px] text-[3rem] font-heading font-semibold leading-[.9] tracking-[-0.068em] sm:text-6xl md:text-7xl lg:text-[5.7rem]">
              Não é sobre colocar
              <span className="block text-white/[0.3]">mais efeitos na tela.</span>
            </h2>
          </div>
          <p className="max-w-[480px] text-base leading-8 text-white/[0.44] lg:justify-self-end md:text-lg">
            A diferença está em hierarquia, ritmo, composição e interação. Arraste o divisor para comparar uma estrutura genérica com uma direção mais intencional.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14 overflow-hidden rounded-[28px] border border-white/[0.1] bg-[#0b111b] shadow-[0_50px_160px_rgba(0,0,0,.45)] md:mt-20 md:rounded-[36px]"
        >
          <div className="flex h-11 items-center gap-2 border-b border-white/[0.08] px-4 md:px-5">
            <span className="h-2 w-2 rounded-full bg-white/[0.14]" />
            <span className="h-2 w-2 rounded-full bg-white/[0.14]" />
            <span className="h-2 w-2 rounded-full bg-white/[0.14]" />
            <div className="mx-auto rounded-full border border-white/[0.08] bg-white/[0.035] px-5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/[0.3]">
              kubo.design/review
            </div>
          </div>

          <div className="relative min-h-[600px] md:min-h-[680px]">
            <div className="absolute inset-0 bg-[#f4f5f7] p-5 text-[#111827] md:p-9 lg:p-12">
              <div className="mx-auto max-w-[1040px]">
                <div className="flex items-center justify-between border-b border-black/[0.08] pb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/[0.3]">
                  <span>Estrutura genérica</span>
                  <span>Mesmo peso visual</span>
                </div>
                <div className="mx-auto mt-14 max-w-[720px] text-center">
                  <div className="mx-auto h-3 w-28 rounded-full bg-black/[0.07]" />
                  <div className="mx-auto mt-6 h-9 w-[88%] rounded-lg bg-black/[0.11] md:h-12" />
                  <div className="mx-auto mt-3 h-9 w-[62%] rounded-lg bg-black/[0.08] md:h-12" />
                  <div className="mx-auto mt-6 h-3 w-[70%] rounded-full bg-black/[0.06]" />
                  <div className="mx-auto mt-2 h-3 w-[54%] rounded-full bg-black/[0.05]" />
                  <div className="mx-auto mt-7 h-11 w-36 rounded-xl bg-black/[0.12]" />
                </div>
                <div className="mt-16 grid gap-4 md:grid-cols-3">
                  {genericCards.map((card) => (
                    <div key={card} className="rounded-[18px] border border-black/[0.07] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,.025)] md:p-6">
                      <div className="h-9 w-9 rounded-xl bg-black/[0.06]" />
                      <p className="mt-7 text-sm font-semibold text-black/[0.45]">{card}</p>
                      <div className="mt-4 h-2 w-full rounded-full bg-black/[0.055]" />
                      <div className="mt-2 h-2 w-[72%] rounded-full bg-black/[0.04]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              aria-hidden="true"
            >
              <div className="absolute inset-0 min-w-[100%] bg-[#07101f] p-5 md:p-9 lg:p-12">
                <div className="pointer-events-none absolute right-[-8%] top-[-18%] h-[520px] w-[520px] rounded-full bg-[#326cff]/[0.2] blur-[150px]" />
                <div className="pointer-events-none absolute bottom-[-28%] left-[10%] h-[420px] w-[420px] rounded-full bg-cyan-300/[0.07] blur-[140px]" />
                <div className="relative mx-auto max-w-[1040px]">
                  <div className="flex items-center justify-between border-b border-white/[0.1] pb-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/[0.34]">
                    <span>Direção Kubo</span>
                    <span className="text-[#8db6ff]">Hierarquia + contexto + ação</span>
                  </div>

                  <div className="mt-10 grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8db6ff]">Mensagem principal</p>
                      <h3 className="mt-4 max-w-[660px] text-[2.65rem] font-heading font-semibold leading-[.92] tracking-[-0.06em] text-white sm:text-5xl md:text-6xl">
                        Uma ideia forte ocupa
                        <span className="block text-white/[0.32]">o espaço que merece.</span>
                      </h3>
                      <p className="mt-5 max-w-[520px] text-sm leading-7 text-white/[0.42]">
                        O visitante entende primeiro a proposta, depois vê evidência, contexto e o próximo passo.
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        ["01", "Mensagem"],
                        ["02", "Prova"],
                        ["03", "Mobile"],
                        ["04", "CTA"],
                      ].map(([number, label]) => (
                        <div key={label} className="rounded-[18px] border border-white/[0.09] bg-white/[0.035] p-4 backdrop-blur-sm">
                          <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#8db6ff]">{number}</span>
                          <p className="mt-5 text-sm font-semibold text-white/[0.72]">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 grid gap-4 md:grid-cols-[1.35fr_.65fr]">
                    <div className="relative min-h-[210px] overflow-hidden rounded-[24px] border border-white/[0.1] bg-white/[0.04] p-6">
                      <div className="absolute right-[-12%] top-[-25%] h-52 w-52 rounded-full bg-[#78a7ff]/[0.15] blur-3xl" />
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/[0.3]">Narrativa</p>
                      <div className="mt-7 grid gap-3 sm:grid-cols-3">
                        {["Entender", "Confiar", "Agir"].map((item, index) => (
                          <div key={item} className="border-t border-white/[0.12] pt-4">
                            <p className="text-[9px] text-[#8db6ff]">0{index + 1}</p>
                            <p className="mt-2 text-lg font-heading font-semibold text-white">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative min-h-[210px] overflow-hidden rounded-[24px] border border-white/[0.1] bg-[#dfe8ff] p-5 text-[#08111f]">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#08111f]/[0.35]">Mobile first</p>
                      <div className="mx-auto mt-4 w-[118px] rounded-[22px] border-[5px] border-[#08111f] bg-white p-3 shadow-2xl">
                        <div className="mx-auto h-1.5 w-8 rounded-full bg-black/[0.12]" />
                        <div className="mt-5 h-3 w-[78%] rounded bg-black/[0.15]" />
                        <div className="mt-2 h-2 w-[58%] rounded bg-black/[0.08]" />
                        <div className="mt-5 h-16 rounded-lg bg-[#dce5ef]" />
                        <div className="mt-3 h-7 rounded-full bg-[#08111f]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 top-0 z-20 w-px bg-white/70 shadow-[0_0_35px_rgba(120,167,255,.8)]" style={{ left: `${position}%` }}>
              <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.15] bg-[#0b1525] text-white shadow-[0_14px_40px_rgba(0,0,0,.35)]">
                <MoveHorizontal className="h-4 w-4" />
              </div>
            </div>

            <input
              aria-label="Comparar estrutura genérica com direção Kubo"
              type="range"
              min="12"
              max="88"
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
              className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
        </motion.div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["Hierarquia visual", "Prova contextual", "Revisão mobile", "CTA sem ruído"].map((item) => (
            <div key={item} className="flex items-center gap-3 border-t border-white/[0.1] py-4 text-xs text-white/[0.48]">
              <Check className="h-3.5 w-3.5 text-[#8db6ff]" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link to="/portfolio" className="group inline-flex items-center gap-2 text-sm font-semibold text-white">
            Ver como isso aparece nos projetos
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(ComparisonSection);
