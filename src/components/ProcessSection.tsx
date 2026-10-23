import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Code2, Compass, Layers3, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    label: "Discovery",
    icon: Compass,
    title: "Entender o negócio antes de abrir o Figma.",
    description: "Objetivo, público, oferta, referências e qual ação o visitante precisa tomar entram primeiro.",
    accent: "#8db6ff",
  },
  {
    number: "02",
    label: "Direction",
    icon: Layers3,
    title: "Transformar estratégia em direção visual.",
    description: "Hierarquia, tipografia, contraste, ritmo e componentes viram um sistema coerente — não uma coleção de efeitos.",
    accent: "#a8d7ff",
  },
  {
    number: "03",
    label: "Build",
    icon: Code2,
    title: "Construir a experiência como produto.",
    description: "A interface vira código responsivo com navegação, motion, acessibilidade e revisão real em diferentes telas.",
    accent: "#c7b8ff",
  },
  {
    number: "04",
    label: "Launch",
    icon: Rocket,
    title: "Publicar com a parte técnica resolvida.",
    description: "Domínio, SEO técnico, rastreamento, integrações, 404, sitemap e QA final entram antes de considerar o projeto pronto.",
    accent: "#9ae7cc",
  },
] as const;

const BriefPreview = () => (
  <div className="grid h-full gap-4 md:grid-cols-[1.15fr_.85fr]">
    <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.04] p-5 md:p-6">
      <div className="flex items-center justify-between">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.34]">Project brief</p>
        <span className="rounded-full bg-[#8db6ff]/10 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#9fc2ff]">01 · Discovery</span>
      </div>
      <h4 className="mt-8 max-w-[420px] text-3xl font-heading font-semibold leading-[.98] tracking-[-0.05em] text-white md:text-4xl">Clareza antes da estética.</h4>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {[['Objetivo', 'Gerar contato qualificado'], ['Público', 'Quem realmente decide'], ['Oferta', 'O que precisa ficar evidente'], ['Ação principal', 'WhatsApp ou formulário']].map(([label, value]) => (
          <div key={label} className="rounded-[20px] border border-white/[0.07] bg-black/[0.12] p-4">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/[0.26]">{label}</p>
            <p className="mt-2 text-sm font-medium text-white/[0.72]">{value}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="rounded-[28px] border border-white/[0.08] bg-[#0d1a2e] p-5 md:p-6">
      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.34]">Decision map</p>
      <div className="mt-7 space-y-3">
        {['Mensagem principal', 'Prova e contexto', 'Objeções', 'CTA'].map((item, index) => (
          <div key={item} className="flex items-center gap-3 rounded-[18px] border border-white/[0.07] bg-white/[0.025] p-3.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8db6ff]/10 text-[9px] font-semibold text-[#9fc2ff]">0{index + 1}</span>
            <span className="text-xs font-medium text-white/[0.6]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DirectionPreview = () => (
  <div className="grid h-full gap-4 md:grid-cols-[.9fr_1.1fr]">
    <div className="rounded-[28px] border border-white/[0.08] bg-[#f1f3f6] p-5 text-[#08111f] md:p-6">
      <div className="flex items-center justify-between text-[8px] font-semibold uppercase tracking-[0.18em] text-black/[0.3]">
        <span>Visual system</span>
        <span>02 · Direction</span>
      </div>
      <p className="mt-8 text-4xl font-heading font-semibold leading-[.95] tracking-[-0.06em]">Tipografia que organiza percepção.</p>
      <div className="mt-8 grid grid-cols-4 gap-2">
        {['#08111F', '#78A7FF', '#F3F5F8', '#FFFFFF'].map((color) => (
          <div key={color} className="space-y-2">
            <div className="aspect-square rounded-[18px] border border-black/[0.06]" style={{ backgroundColor: color }} />
            <p className="text-[7px] font-semibold uppercase tracking-[0.12em] text-black/[0.34]">{color}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.04] p-5 md:p-6">
      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.34]">Composition</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="min-h-[145px] rounded-[22px] bg-[#8db6ff] p-5 text-[#08111f]">
          <p className="text-[8px] font-semibold uppercase tracking-[0.18em] opacity-50">Hero</p>
          <p className="mt-8 text-2xl font-heading font-semibold leading-[.95] tracking-[-0.05em]">Grande onde precisa ser grande.</p>
        </div>
        <div className="min-h-[145px] rounded-[22px] border border-white/[0.07] bg-black/[0.12] p-5">
          <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/[0.28]">Details</p>
          <div className="mt-8 space-y-2">
            <div className="h-2 w-[72%] rounded-full bg-white/[0.16]" />
            <div className="h-2 w-[48%] rounded-full bg-white/[0.08]" />
            <div className="h-2 w-[58%] rounded-full bg-white/[0.08]" />
          </div>
        </div>
        <div className="sm:col-span-2 rounded-[22px] border border-white/[0.07] bg-[#0d1a2e] p-5">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/[0.26]">Rhythm</p>
              <p className="mt-2 text-sm text-white/[0.62]">Dark → light → editorial → product UI</p>
            </div>
            <div className="flex gap-1.5">
              {[24, 38, 56, 72].map((height) => <span key={height} className="w-3 rounded-full bg-[#8db6ff]/50" style={{ height }} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BuildPreview = () => (
  <div className="grid h-full gap-4 md:grid-cols-[1.15fr_.85fr]">
    <div className="rounded-[28px] border border-white/[0.08] bg-[#091321] p-5 md:p-6">
      <div className="flex items-center justify-between">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.34]">Responsive build</p>
        <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#c7b8ff]">03 · Build</span>
      </div>
      <div className="mt-7 grid grid-cols-[1fr_.34fr] items-end gap-4">
        <div className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-white/[0.04] p-4">
          <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-white/[0.12]" /><span className="h-2 w-2 rounded-full bg-white/[0.12]" /><span className="h-2 w-2 rounded-full bg-white/[0.12]" /></div>
          <div className="mt-7 h-3 w-[38%] rounded-full bg-white/[0.16]" />
          <div className="mt-3 h-3 w-[64%] rounded-full bg-[#8db6ff]/45" />
          <div className="mt-6 grid grid-cols-3 gap-2">{[0,1,2].map(i => <div key={i} className="h-20 rounded-[14px] bg-white/[0.05]" />)}</div>
        </div>
        <div className="overflow-hidden rounded-[22px] border-[5px] border-white/[0.08] bg-[#f2f4f7] p-3">
          <div className="mx-auto h-1.5 w-10 rounded-full bg-black/[0.1]" />
          <div className="mt-5 h-2 w-[58%] rounded-full bg-black/[0.14]" />
          <div className="mt-2 h-2 w-[78%] rounded-full bg-[#2d63d8]/30" />
          <div className="mt-4 h-24 rounded-[14px] bg-[#d9e5ff]" />
          <div className="mt-3 h-7 rounded-full bg-[#08111f]" />
        </div>
      </div>
    </div>
    <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.04] p-5 md:p-6">
      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.34]">Review list</p>
      <div className="mt-7 space-y-3">
        {['Desktop', 'Tablet', 'Mobile', 'Keyboard', 'Reduced motion'].map((item) => (
          <div key={item} className="flex items-center justify-between border-b border-white/[0.07] pb-3 text-sm text-white/[0.58]">
            <span>{item}</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9ae7cc]/10 text-[#9ae7cc]"><Check className="h-3 w-3" /></span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LaunchPreview = () => (
  <div className="grid h-full gap-4 md:grid-cols-[.82fr_1.18fr]">
    <div className="rounded-[28px] border border-white/[0.08] bg-[#0d1a2e] p-5 md:p-6">
      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.34]">Launch checklist</p>
      <div className="mt-7 space-y-3">
        {['Domínio e HTTPS', 'SEO técnico', 'Sitemap e robots', 'Analytics', '404 real'].map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-[18px] border border-white/[0.07] bg-white/[0.025] p-3.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#9ae7cc]/10 text-[#9ae7cc]"><Check className="h-3.5 w-3.5" /></span>
            <span className="text-xs font-medium text-white/[0.6]">{item}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="rounded-[28px] border border-white/[0.08] bg-[#f2f5f3] p-5 text-[#08111f] md:p-6">
      <div className="flex items-center justify-between">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-black/[0.3]">Publication</p>
        <span className="h-2.5 w-2.5 rounded-full bg-[#3fbf8f] shadow-[0_0_18px_rgba(63,191,143,.45)]" />
      </div>
      <p className="mt-8 text-4xl font-heading font-semibold leading-[.94] tracking-[-0.055em]">Pronto para receber tráfego.</p>
      <p className="mt-4 max-w-[430px] text-sm leading-7 text-black/[0.46]">A publicação é parte do projeto, não o último clique depois do design.</p>
      <div className="mt-9 rounded-[20px] border border-black/[0.06] bg-white p-4 shadow-[0_14px_40px_rgba(8,17,31,.06)]">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/[0.3]">Production</span>
          <span className="rounded-full bg-[#e7f7f0] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#2a8f69]">Ready</span>
        </div>
        <div className="mt-4 h-2 w-[76%] rounded-full bg-black/[0.08]" />
        <div className="mt-2 h-2 w-[48%] rounded-full bg-black/[0.05]" />
      </div>
    </div>
  </div>
);

const previews = [BriefPreview, DirectionPreview, BuildPreview, LaunchPreview];

const ProcessSection = () => {
  const [active, setActive] = useState(0);
  const ActivePreview = previews[active];

  return (
    <section id="processo" className="relative overflow-hidden bg-[#eef0f3] px-4 py-24 md:py-40">
      <div className="pointer-events-none absolute left-[-15%] top-[12%] h-[520px] w-[520px] rounded-full bg-[#8db6ff]/20 blur-[170px]" />
      <div className="container relative mx-auto max-w-[1380px]">
        <div className="grid gap-12 xl:grid-cols-[.68fr_1.32fr] xl:gap-16">
          <div className="xl:sticky xl:top-28 xl:self-start">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2458d8]">Process / 04 steps</p>
            <h2 className="mt-5 max-w-[620px] text-[3rem] font-heading font-semibold leading-[.91] tracking-[-0.067em] text-[#08111f] sm:text-6xl lg:text-[5.25rem]">
              O processo também
              <span className="block text-[#08111f]/[0.32]">precisa parecer produto.</span>
            </h2>
            <p className="mt-7 max-w-[520px] text-base leading-8 text-[#08111f]/[0.46] md:text-lg">
              Cada etapa produz uma decisão concreta. Clique nos passos para ver como estratégia, direção, construção e publicação se conectam.
            </p>

            <div className="mt-9 space-y-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const selected = active === index;
                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    className={`group flex w-full items-center gap-4 rounded-[20px] border px-4 py-3.5 text-left transition-all duration-300 ${selected ? "border-[#08111f]/10 bg-white shadow-[0_14px_40px_rgba(8,17,31,.06)]" : "border-transparent hover:bg-white/55"}`}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all ${selected ? "bg-[#08111f] text-white" : "bg-white text-[#2458d8]"}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#08111f]/[0.3]">{step.number} · {step.label}</span>
                        <span className={`h-1.5 w-1.5 rounded-full transition-all ${selected ? "scale-100 bg-[#2458d8]" : "scale-0 bg-transparent"}`} />
                      </div>
                      <p className={`mt-1.5 text-sm font-semibold transition-colors ${selected ? "text-[#08111f]" : "text-[#08111f]/[0.52]"}`}>{step.title}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="relative min-h-[640px] overflow-hidden rounded-[38px] border border-white/[0.08] bg-[#07101f] p-4 shadow-[0_48px_120px_rgba(8,17,31,.18)] md:p-6 lg:min-h-[700px] lg:p-8">
              <motion.div
                aria-hidden="true"
                animate={{ backgroundColor: steps[active].accent }}
                transition={{ duration: 0.45 }}
                className="pointer-events-none absolute right-[-18%] top-[-18%] h-[520px] w-[520px] rounded-full opacity-[0.18] blur-[150px]"
              />
              <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#9ae7cc] shadow-[0_0_18px_rgba(154,231,204,.55)]" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.38]">Kubo project workspace</span>
                </div>
                <span className="hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-white/[0.24] sm:block">Strategy → Design → Code → Launch</span>
              </div>

              <div className="relative z-10 mt-5 min-h-[500px] lg:min-h-[560px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 16, scale: .985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: .99 }}
                    transition={{ duration: .38, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full"
                  >
                    <ActivePreview />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-black/[0.07] bg-white p-5">
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/[0.28]">Current step</p>
                <p className="mt-2 text-base font-heading font-semibold tracking-[-0.03em] text-[#08111f]">{steps[active].title}</p>
              </div>
              <div className="rounded-[24px] border border-black/[0.07] bg-white p-5">
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/[0.28]">Why it matters</p>
                <p className="mt-2 text-sm leading-6 text-[#08111f]/[0.5]">{steps[active].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
