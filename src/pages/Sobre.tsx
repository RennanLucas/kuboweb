import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  LayoutTemplate,
  MessageCircle,
  Sparkles,
  Target,
} from "lucide-react";

const principles = [
  {
    icon: Target,
    index: "01",
    label: "Direction",
    title: "Começar pelo objetivo.",
    text: "Antes da interface, definimos o que o visitante precisa entender, qual percepção a marca precisa gerar e qual ação faz sentido para o negócio.",
    points: ["Objetivo da página", "Público e contexto", "Mensagem prioritária"],
    accent: "#8db6ff",
  },
  {
    icon: LayoutTemplate,
    index: "02",
    label: "Design",
    title: "Criar percepção de valor.",
    text: "Tipografia, hierarquia, contraste, ritmo, imagens e motion trabalham juntos para a marca parecer clara, atual e profissional.",
    points: ["Direção visual", "Sistema de componentes", "Ritmo entre seções"],
    accent: "#a8d7ff",
  },
  {
    icon: Code2,
    index: "03",
    label: "Build",
    title: "Transformar em produto real.",
    text: "O design vira um site responsivo, navegável e revisado em celular, tablet e desktop, com a parte técnica preparada para publicação.",
    points: ["Responsividade", "Interação e acessibilidade", "Performance e SEO técnico"],
    accent: "#c8b8ff",
  },
  {
    icon: MessageCircle,
    index: "04",
    label: "Partnership",
    title: "Manter a comunicação simples.",
    text: "Decisões, ajustes e próximos passos ficam claros durante o projeto para a execução não se perder em mensagens, versões e expectativas soltas.",
    points: ["Contato direto", "Decisões objetivas", "Escopo alinhado"],
    accent: "#9ae7cc",
  },
] as const;

const VisualPreview = ({ active }: { active: number }) => {
  const item = principles[active];

  if (active === 0) {
    return (
      <div className="grid h-full gap-4 md:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.04] p-5 md:p-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.3]">Project direction</p>
          <h4 className="mt-8 max-w-[420px] text-4xl font-heading font-semibold leading-[.94] tracking-[-0.055em] text-white">Antes de desenhar, decidimos o que precisa ficar claro.</h4>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[['Negócio', 'O que precisa ser percebido'], ['Visitante', 'O que precisa entender'], ['Oferta', 'O que ganha prioridade'], ['Ação', 'Qual próximo passo']].map(([title, text]) => (
              <div key={title} className="rounded-[18px] border border-white/[0.07] bg-black/[0.12] p-4">
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#8db6ff]">{title}</p>
                <p className="mt-2 text-xs leading-5 text-white/[0.48]">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[28px] border border-white/[0.08] bg-[#0d1a2e] p-5 md:p-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.3]">Priority map</p>
          <div className="mt-8 space-y-3">
            {['Mensagem principal', 'Diferenciais', 'Prova', 'Contato'].map((label, index) => (
              <div key={label} className="flex items-center gap-3 rounded-[18px] border border-white/[0.07] bg-white/[0.025] p-3.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8db6ff]/10 text-[9px] font-semibold text-[#9fc2ff]">0{index + 1}</span>
                <span className="text-xs font-medium text-white/[0.58]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (active === 1) {
    return (
      <div className="grid h-full gap-4 md:grid-cols-[.88fr_1.12fr]">
        <div className="rounded-[28px] bg-[#eff2f6] p-5 text-[#08111f] md:p-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-black/[0.28]">Visual language</p>
          <p className="mt-8 text-5xl font-heading font-semibold leading-[.88] tracking-[-0.07em]">Forma segue mensagem.</p>
          <p className="mt-5 max-w-[350px] text-sm leading-7 text-black/[0.45]">Escala, contraste e espaço fazem a leitura parecer mais segura antes mesmo do visitante perceber por quê.</p>
          <div className="mt-8 flex gap-2">
            {['#08111F', '#78A7FF', '#F1F3F6', '#FFFFFF'].map((color) => <span key={color} className="h-12 flex-1 rounded-[14px] border border-black/[0.06]" style={{ backgroundColor: color }} />)}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[28px] border border-white/[0.08] bg-[#8db6ff] p-5 text-[#08111f] sm:col-span-2 md:p-6">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] opacity-45">Hierarchy</p>
            <p className="mt-9 max-w-[520px] text-4xl font-heading font-semibold leading-[.94] tracking-[-0.055em]">Uma frase forte precisa de espaço para parecer forte.</p>
          </div>
          <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.04] p-5">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/[0.28]">Motion</p>
            <div className="mt-8 flex items-end gap-2">{[28, 44, 62, 84].map((h) => <span key={h} className="w-4 rounded-full bg-[#a8d7ff]/55" style={{ height: h }} />)}</div>
          </div>
          <div className="rounded-[24px] border border-white/[0.08] bg-[#0d1a2e] p-5">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/[0.28]">Rhythm</p>
            <div className="mt-8 space-y-2"><div className="h-2 w-[80%] rounded-full bg-white/[0.13]" /><div className="h-2 w-[55%] rounded-full bg-white/[0.08]" /><div className="h-2 w-[68%] rounded-full bg-[#8db6ff]/35" /></div>
          </div>
        </div>
      </div>
    );
  }

  if (active === 2) {
    return (
      <div className="grid h-full gap-4 md:grid-cols-[1.12fr_.88fr]">
        <div className="rounded-[28px] border border-white/[0.08] bg-[#091321] p-5 md:p-6">
          <div className="flex items-center justify-between"><p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.3]">Responsive build</p><span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#c8b8ff]">Desktop + Mobile</span></div>
          <div className="mt-8 grid grid-cols-[1fr_.3fr] items-end gap-4">
            <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.04] p-4">
              <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-white/[0.12]" /><span className="h-2 w-2 rounded-full bg-white/[0.12]" /><span className="h-2 w-2 rounded-full bg-white/[0.12]" /></div>
              <div className="mt-8 h-3 w-[48%] rounded-full bg-white/[0.16]" />
              <div className="mt-3 h-3 w-[72%] rounded-full bg-[#8db6ff]/40" />
              <div className="mt-7 grid grid-cols-2 gap-3"><div className="h-28 rounded-[16px] bg-white/[0.05]" /><div className="h-28 rounded-[16px] bg-white/[0.05]" /></div>
            </div>
            <div className="rounded-[24px] border-[5px] border-white/[0.08] bg-[#eff2f6] p-3">
              <div className="mx-auto h-1.5 w-10 rounded-full bg-black/[0.1]" />
              <div className="mt-6 h-2 w-[70%] rounded-full bg-black/[0.12]" />
              <div className="mt-2 h-2 w-[48%] rounded-full bg-[#2d63d8]/28" />
              <div className="mt-5 h-28 rounded-[15px] bg-[#dce7ff]" />
              <div className="mt-4 h-8 rounded-full bg-[#08111f]" />
            </div>
          </div>
        </div>
        <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.04] p-5 md:p-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.3]">Quality review</p>
          <div className="mt-7 space-y-3">
            {['Responsividade', 'Navegação', 'Acessibilidade', 'SEO técnico', 'Publicação'].map((label) => (
              <div key={label} className="flex items-center justify-between border-b border-white/[0.07] pb-3 text-sm text-white/[0.55]"><span>{label}</span><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#9ae7cc]/10 text-[#9ae7cc]"><Check className="h-3 w-3" /></span></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-full gap-4 md:grid-cols-[.92fr_1.08fr]">
      <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.04] p-5 md:p-6">
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.3]">Project communication</p>
        <h4 className="mt-8 text-4xl font-heading font-semibold leading-[.94] tracking-[-0.055em] text-white">Menos ruído entre ideia e entrega.</h4>
        <div className="mt-8 space-y-3">
          {['Referências e escopo', 'Decisões de conteúdo', 'Revisões objetivas', 'Próximo passo'].map((label, index) => (
            <div key={label} className="flex items-center gap-3 rounded-[18px] border border-white/[0.07] bg-black/[0.12] p-3.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#9ae7cc]/10 text-[9px] font-semibold text-[#9ae7cc]">0{index + 1}</span>
              <span className="text-xs font-medium text-white/[0.58]">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[28px] bg-[#eef5f2] p-5 text-[#08111f] md:p-6">
        <div className="flex items-center justify-between"><p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-black/[0.28]">Working together</p><span className="h-2.5 w-2.5 rounded-full bg-[#3fbf8f]" /></div>
        <p className="mt-8 text-5xl font-heading font-semibold leading-[.9] tracking-[-0.065em]">Contato direto. Decisões claras.</p>
        <p className="mt-5 max-w-[430px] text-sm leading-7 text-black/[0.45]">O objetivo é reduzir retrabalho e deixar o projeto avançar com contexto suficiente em cada etapa.</p>
        <div className="mt-9 rounded-[20px] border border-black/[0.06] bg-white p-4 shadow-[0_14px_40px_rgba(8,17,31,.05)]">
          <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/[0.28]">Principle</p>
          <p className="mt-2 text-sm font-medium text-black/[0.62]">Comunicação faz parte da qualidade final.</p>
        </div>
      </div>
    </div>
  );
};

const Sobre = () => {
  const [active, setActive] = useState(0);
  const item = principles[active];

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Sobre a Kubo Web"
        description="Conheça a Kubo Web, estúdio digital de criação de sites, landing pages, lojas virtuais e experiências web sob medida."
        path="/sobre"
      />
      <Header />

      <section className="relative isolate overflow-hidden bg-[#050a13] px-4 pb-24 pt-36 text-white md:pb-32 md:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[7%] top-[-300px] h-[760px] w-[760px] rounded-full bg-[#326cff]/[0.2] blur-[190px]" />
          <div className="absolute right-[-12%] top-[18%] h-[620px] w-[620px] rounded-full bg-[#8db6ff]/[0.08] blur-[190px]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="container mx-auto max-w-[1380px]">
          <div className="grid gap-14 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8db6ff]">
                <Sparkles className="h-3.5 w-3.5" />
                About Kubo · Digital Studio
              </div>
              <h1 className="mt-6 max-w-[980px] text-[3.4rem] font-heading font-semibold leading-[.89] tracking-[-0.075em] sm:text-7xl md:text-[6.4rem] lg:text-[7.2rem]">
                Não desenhamos páginas.
                <span className="block text-white/[0.3]">Construímos percepção.</span>
              </h1>
            </div>
            <div className="lg:justify-self-end lg:max-w-[470px]">
              <p className="text-base leading-8 text-white/[0.48] md:text-lg">
                A Kubo Web conecta posicionamento, direção visual e desenvolvimento para transformar uma empresa em uma experiência digital mais clara, forte e profissional.
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/[0.1] pt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/[0.28]">
                Estratégia · Design · Código
                <ArrowDownRight className="h-4 w-4 text-[#8db6ff]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eef0f3] px-4 py-24 md:py-40">
        <div className="pointer-events-none absolute right-[-14%] top-[16%] h-[620px] w-[620px] rounded-full bg-[#8db6ff]/18 blur-[180px]" />
        <div className="container relative mx-auto max-w-[1380px]">
          <div className="grid gap-12 xl:grid-cols-[.7fr_1.3fr] xl:gap-16">
            <div className="xl:sticky xl:top-28 xl:self-start">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2458d8]">How we think</p>
              <h2 className="mt-5 max-w-[620px] text-[3rem] font-heading font-semibold leading-[.91] tracking-[-0.067em] text-[#08111f] sm:text-6xl lg:text-[5.3rem]">
                O visual importa.
                <span className="block text-[#08111f]/[0.32]">A lógica por trás dele também.</span>
              </h2>
              <p className="mt-7 max-w-[520px] text-base leading-8 text-[#08111f]/[0.46] md:text-lg">
                Clique nos princípios. Cada um muda o workspace ao lado para mostrar como pensamos projeto, não apenas como estilizamos uma página.
              </p>

              <div className="mt-9 space-y-2">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  const selected = active === index;
                  return (
                    <button
                      key={principle.index}
                      type="button"
                      onClick={() => setActive(index)}
                      onMouseEnter={() => setActive(index)}
                      className={`group flex w-full items-center gap-4 rounded-[20px] border px-4 py-3.5 text-left transition-all ${selected ? "border-[#08111f]/10 bg-white shadow-[0_14px_40px_rgba(8,17,31,.06)]" : "border-transparent hover:bg-white/60"}`}
                    >
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${selected ? "bg-[#08111f] text-white" : "bg-white text-[#2458d8]"}`}><Icon className="h-4 w-4" /></span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#08111f]/[0.28]">{principle.index} · {principle.label}</p>
                        <p className={`mt-1.5 text-sm font-semibold ${selected ? "text-[#08111f]" : "text-[#08111f]/[0.52]"}`}>{principle.title}</p>
                      </div>
                      <span className={`h-1.5 w-1.5 rounded-full transition-all ${selected ? "bg-[#2458d8]" : "bg-transparent"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="relative min-h-[650px] overflow-hidden rounded-[38px] bg-[#07101f] p-4 shadow-[0_48px_120px_rgba(8,17,31,.2)] md:p-6 lg:p-8">
                <motion.div aria-hidden="true" animate={{ backgroundColor: item.accent }} transition={{ duration: .45 }} className="pointer-events-none absolute -right-[16%] -top-[18%] h-[540px] w-[540px] rounded-full opacity-[0.18] blur-[155px]" />
                <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-5">
                  <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#9ae7cc] shadow-[0_0_18px_rgba(154,231,204,.55)]" /><span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.34]">Kubo studio principles</span></div>
                  <span className="hidden text-[9px] font-semibold uppercase tracking-[0.18em] text-white/[0.22] sm:block">{item.index} · {item.label}</span>
                </div>

                <div className="relative z-10 mt-5 min-h-[520px]">
                  <AnimatePresence mode="wait">
                    <motion.div key={active} initial={{ opacity: 0, y: 16, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: .99 }} transition={{ duration: .38, ease: [0.16, 1, 0.3, 1] }} className="h-full">
                      <VisualPreview active={active} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-[1.1fr_.9fr]">
                <div className="rounded-[24px] border border-black/[0.07] bg-white p-5">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/[0.28]">Principle</p>
                  <p className="mt-2 text-xl font-heading font-semibold tracking-[-0.035em] text-[#08111f]">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-[#08111f]/[0.48]">{item.text}</p>
                </div>
                <div className="rounded-[24px] border border-black/[0.07] bg-white p-5">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/[0.28]">Included in the thinking</p>
                  <div className="mt-4 space-y-3">
                    {item.points.map((point) => <div key={point} className="flex items-center gap-2.5 text-xs font-medium text-[#08111f]/[0.56]"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#edf3ff] text-[#2458d8]"><Check className="h-3 w-3" /></span>{point}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 md:py-36">
        <div className="container mx-auto max-w-[1380px]">
          <div className="grid gap-5 lg:grid-cols-[1.18fr_.82fr]">
            <div className="relative overflow-hidden rounded-[36px] bg-[#07101f] p-7 text-white shadow-[0_32px_90px_rgba(8,17,31,.14)] md:p-11">
              <div className="pointer-events-none absolute -right-20 -top-24 h-[420px] w-[420px] rounded-full bg-[#326cff]/20 blur-[130px]" />
              <div className="relative z-10 flex min-h-[500px] flex-col justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8db6ff]">What we build</p>
                  <h2 className="mt-5 max-w-[850px] text-4xl font-heading font-semibold leading-[.94] tracking-[-0.06em] md:text-6xl lg:text-7xl">
                    Sites que parecem parte da marca.
                    <span className="block text-white/[0.3]">Não um template comprado.</span>
                  </h2>
                </div>
                <div className="grid gap-4 border-t border-white/[0.1] pt-6 sm:grid-cols-3">
                  {['Sites institucionais', 'Landing pages', 'Lojas virtuais'].map((label, index) => <div key={label}><p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#8db6ff]">0{index + 1}</p><p className="mt-2 text-sm font-medium text-white/[0.58]">{label}</p></div>)}
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {[
                { number: '01', title: 'Helena Ávila', subtitle: 'Psicoterapia · Projeto publicado', href: 'https://www.helenaavilapsi.com.br/', bg: '#f0ede7' },
                { number: '02', title: 'Cristiano Ávila', subtitle: 'Website profissional · Projeto publicado', href: 'https://cristiano-avila-site.vercel.app/', bg: '#e8effb' },
              ].map((project) => (
                <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-[240px] flex-col justify-between rounded-[30px] border border-black/[0.06] p-6 transition-all hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(8,17,31,.07)] md:p-7" style={{ backgroundColor: project.bg }}>
                  <div className="flex items-center justify-between"><span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/[0.28]">Live project · {project.number}</span><span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#08111f]"><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span></div>
                  <div><h3 className="text-3xl font-heading font-semibold tracking-[-0.05em] text-[#08111f]">{project.title}</h3><p className="mt-2 text-xs font-medium text-[#08111f]/[0.42]">{project.subtitle}</p></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Sobre;
