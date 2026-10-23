import { memo, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  LayoutDashboard,
  MessageCircle,
  Palette,
  Rocket,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20quero%20conversar%20sobre%20um%20projeto.";

const stages = [
  {
    id: "structure",
    label: "Estrutura",
    icon: LayoutDashboard,
    title: "Arquitetura antes do efeito.",
    copy: "Mensagem, hierarquia e caminho até o contato são definidos antes de decorar a tela.",
  },
  {
    id: "visual",
    label: "Direção visual",
    icon: Palette,
    title: "Uma linguagem que parece sua.",
    copy: "Tipografia, contraste, ritmo e componentes funcionam como um sistema — não como peças soltas.",
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    title: "A experiência continua forte no celular.",
    copy: "O projeto é revisto para telas menores sem virar uma versão espremida do desktop.",
  },
  {
    id: "launch",
    label: "Publicação",
    icon: Rocket,
    title: "Código, SEO e deploy fecham o projeto.",
    copy: "A interface vira produto real com domínio, metadados, rastreamento e revisão final.",
  },
] as const;

const capabilities = ["Web design", "Landing pages", "E-commerce", "Google Ads", "UX", "Desenvolvimento"];

const StagePreview = ({ stage }: { stage: (typeof stages)[number]["id"] }) => {
  if (stage === "visual") {
    return (
      <div className="grid min-h-[430px] gap-4 p-5 sm:p-6 md:grid-cols-[1.08fr_.92fr] md:p-7">
        <div className="relative overflow-hidden rounded-[26px] bg-[#f2efe9] p-6 text-[#1d2421] md:p-8">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#c6d4cb] blur-[55px]" />
          <div className="relative">
            <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.2em] text-black/32">
              <span>Visual direction</span>
              <span>02 / 04</span>
            </div>
            <p className="mt-16 max-w-[480px] font-serif text-[2.85rem] leading-[.94] tracking-[-0.052em] sm:text-[3.45rem]">
              Calma, confiança e presença.
            </p>
            <p className="mt-5 max-w-[360px] text-xs leading-6 text-black/46">
              Um sistema visual que transmite a personalidade do negócio antes mesmo do visitante ler tudo.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-10 w-32 rounded-full bg-[#526b60]" />
              <span className="h-10 w-10 rounded-full border border-black/10" />
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-[26px] border border-white/9 bg-white/[0.035] p-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">Type system</p>
            <p className="mt-8 text-4xl font-heading font-semibold tracking-[-0.06em] text-white">Aa</p>
            <div className="mt-5 space-y-2">
              <div className="h-2 w-[88%] rounded-full bg-white/13" />
              <div className="h-2 w-[64%] rounded-full bg-white/8" />
            </div>
          </div>
          <div className="rounded-[26px] border border-white/9 bg-white/[0.035] p-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">Palette</p>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {["#07101f", "#78a7ff", "#f2efe9", "#ffffff"].map((color) => (
                <div key={color} className="aspect-square rounded-[15px] border border-white/8" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (stage === "mobile") {
    return (
      <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden p-6 md:p-8">
        <div className="absolute left-[7%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#396fff]/16 blur-[110px]" />
        <div className="absolute right-[5%] top-[15%] hidden w-[48%] rounded-[28px] border border-white/9 bg-white/[0.035] p-6 md:block">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">Desktop composition</p>
          <div className="mt-7 rounded-[20px] bg-[#f6f4ef] p-5">
            <div className="h-2 w-20 rounded-full bg-black/10" />
            <div className="mt-8 h-7 w-[74%] rounded-lg bg-[#17202e]" />
            <div className="mt-2 h-7 w-[52%] rounded-lg bg-[#17202e]" />
            <div className="mt-6 h-2 w-[68%] rounded-full bg-black/10" />
            <div className="mt-2 h-2 w-[48%] rounded-full bg-black/8" />
            <div className="mt-7 h-10 w-28 rounded-full bg-[#2458d8]" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          className="relative z-10 mr-auto w-[218px] rounded-[35px] border-[7px] border-[#111827] bg-[#111827] shadow-[0_34px_90px_rgba(0,0,0,.45)] md:ml-[12%] md:w-[244px]"
        >
          <div className="mx-auto mt-2 h-1.5 w-14 rounded-full bg-white/12" />
          <div className="mt-2 min-h-[336px] rounded-[25px] bg-[#f5f1eb] p-5 text-[#202824]">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/32">Mobile review</p>
            <p className="mt-8 font-serif text-3xl leading-[.98] tracking-[-0.05em]">Helena Ávila</p>
            <div className="mt-5 h-2 w-[82%] rounded-full bg-black/10" />
            <div className="mt-2 h-2 w-[58%] rounded-full bg-black/8" />
            <div className="mt-6 aspect-[4/3] rounded-[19px] bg-[#d5ddd7]" />
            <div className="mt-5 h-10 w-full rounded-full bg-[#536d61]" />
          </div>
        </motion.div>
      </div>
    );
  }

  if (stage === "launch") {
    return (
      <div className="grid min-h-[430px] gap-4 p-5 sm:p-6 md:grid-cols-[.82fr_1.18fr] md:p-7">
        <div className="rounded-[26px] border border-white/9 bg-white/[0.035] p-5 md:p-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">Launch checklist</p>
          <div className="mt-7 space-y-3">
            {["Domínio e HTTPS", "SEO técnico", "Analytics", "Formulários", "Mobile QA"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.055 }}
                className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#78a7ff]/10 text-[#9abaff]">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-medium text-white/68">{item}</span>
                <span className="ml-auto text-[8px] font-semibold uppercase tracking-[0.16em] text-white/25">OK</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[26px] bg-[#f7f8fb] p-6 text-[#111827] md:p-8">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#dbe7ff] blur-[80px]" />
          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/34">Exemplo de publicação</span>
            </div>
            <p className="mt-14 max-w-[520px] text-[2.8rem] font-heading font-semibold leading-[.94] tracking-[-0.058em] md:text-[3.6rem]">
              Pronto para abrir, compartilhar e anunciar.
            </p>
            <p className="mt-5 max-w-[430px] text-sm leading-7 text-black/44">
              O lançamento fecha a experiência: página no ar, medição configurada e próximo passo claro para o visitante.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#07101f] px-4 py-2.5 text-[11px] font-semibold text-white">
              www.seudominio.com.br
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid min-h-[430px] gap-4 p-5 sm:p-6 md:grid-cols-[.74fr_1.26fr] md:p-7">
      <div className="rounded-[26px] border border-white/9 bg-white/[0.035] p-5 md:p-6">
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">Information architecture</p>
        <div className="mt-7 space-y-3">
          {["Hero / proposta", "Serviços", "Trabalho real", "Processo", "Contato"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`flex items-center gap-3 rounded-2xl border p-4 ${index === 0 ? "border-[#78a7ff]/24 bg-[#78a7ff]/9" : "border-white/8 bg-white/[0.02]"}`}
            >
              <span className="text-[9px] font-semibold text-white/26">0{index + 1}</span>
              <span className="text-xs font-medium text-white/67">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="rounded-[26px] bg-[#f7f8fb] p-6 text-[#111827] md:p-8">
        <div className="flex items-center justify-between border-b border-black/7 pb-4">
          <div className="h-2.5 w-24 rounded-full bg-black/10" />
          <div className="flex gap-2"><span className="h-2 w-12 rounded-full bg-black/7" /><span className="h-2 w-12 rounded-full bg-black/7" /></div>
        </div>
        <div className="mt-10 max-w-[90%]">
          <div className="h-2.5 w-28 rounded-full bg-[#2458d8]/16" />
          <div className="mt-5 h-10 w-[92%] rounded-xl bg-[#111827]" />
          <div className="mt-3 h-10 w-[65%] rounded-xl bg-[#111827]" />
          <div className="mt-6 h-2.5 w-[74%] rounded-full bg-black/9" />
          <div className="mt-2 h-2.5 w-[52%] rounded-full bg-black/7" />
          <div className="mt-8 h-12 w-36 rounded-full bg-[#2458d8]" />
        </div>
        <div className="mt-10 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((index) => <div key={index} className="h-20 rounded-[18px] border border-black/6 bg-white" />)}
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const [activeStage, setActiveStage] = useState<(typeof stages)[number]["id"]>("structure");
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 90, damping: 22 });
  const smy = useSpring(my, { stiffness: 90, damping: 22 });
  const rotateX = useTransform(smy, [-0.5, 0.5], [2.6, -2.6]);
  const rotateY = useTransform(smx, [-0.5, 0.5], [-3.4, 3.4]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStage((current) => {
        const index = stages.findIndex((stage) => stage.id === current);
        return stages[(index + 1) % stages.length].id;
      });
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const current = stages.find((stage) => stage.id === activeStage)!;

  return (
    <section className="relative isolate overflow-hidden bg-[#05080d] px-4 pb-24 pt-32 text-white md:pb-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[-360px] h-[760px] w-[760px] rounded-full bg-[#315fff]/20 blur-[180px]" />
        <div className="absolute right-[-12%] top-[10%] h-[620px] w-[620px] rounded-full bg-cyan-300/7 blur-[190px]" />
        <div className="absolute inset-0 opacity-[0.085] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.17]" />
      </div>

      <div className="container mx-auto max-w-[1380px]">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-end lg:gap-10">
          <div className="pb-2 lg:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/45 backdrop-blur-xl"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#91b5ff]" />
              Web design studio · Brasil
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-[780px] text-[3.65rem] font-heading font-semibold leading-[0.88] tracking-[-0.075em] sm:text-7xl md:text-[6.2rem] lg:text-[6rem] xl:text-[7.1rem]"
            >
              Sites que não
              <span className="block text-[#84abff]">parecem template.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.5 }}
              className="mt-7 max-w-[610px] text-[15px] leading-7 text-white/48 md:text-lg md:leading-8"
            >
              Estratégia, direção de arte e desenvolvimento para transformar sua presença digital em uma experiência que parece pensada — não montada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.21, duration: 0.5 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#07101f] shadow-[0_20px_65px_rgba(0,0,0,.25)] transition-all hover:-translate-y-0.5 hover:bg-[#edf3ff]"
              >
                <MessageCircle className="h-4 w-4" />
                Iniciar um projeto
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/portfolio"
                className="group inline-flex h-[52px] items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.035] px-6 text-sm font-semibold text-white/76 backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
              >
                Ver trabalhos reais
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Link>
            </motion.div>

            <div className="mt-10 grid max-w-[620px] grid-cols-3 border-t border-white/10 pt-5">
              {[
                ["Direção", "Antes do layout"],
                ["Mobile", "Desde o início"],
                ["Código", "Pronto para publicar"],
              ].map(([label, value], index) => (
                <div key={label} className={index > 0 ? "border-l border-white/10 pl-4" : ""}>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/24">{label}</p>
                  <p className="mt-1.5 text-[11px] font-medium text-white/58 sm:text-xs">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            className="relative [perspective:1600px]"
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              mx.set((event.clientX - rect.left) / rect.width - 0.5);
              my.set((event.clientY - rect.top) / rect.height - 0.5);
            }}
            onMouseLeave={() => {
              mx.set(0);
              my.set(0);
            }}
          >
            <div className="pointer-events-none absolute -inset-12 rounded-full bg-[#315fff]/10 blur-[120px]" />
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0a111d]/94 shadow-[0_50px_140px_rgba(0,0,0,.42)] backdrop-blur-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3.5 sm:px-5">
                <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-white/13" /><span className="h-2 w-2 rounded-full bg-white/13" /><span className="h-2 w-2 rounded-full bg-white/13" /></div>
                <span className="ml-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/28">Kubo Studio · Interactive workflow</span>
                <span className="ml-auto hidden items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#91b5ff] sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#91b5ff]" /> 4 etapas
                </span>
              </div>

              <div className="grid md:grid-cols-[170px_1fr]">
                <aside className="hidden border-r border-white/8 p-4 md:block">
                  <p className="px-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/22">Project flow</p>
                  <div className="mt-4 space-y-1.5">
                    {stages.map((stage) => {
                      const Icon = stage.icon;
                      const selected = stage.id === activeStage;
                      return (
                        <button
                          key={stage.id}
                          type="button"
                          onClick={() => setActiveStage(stage.id)}
                          className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[11px] font-medium transition-all ${selected ? "bg-white/[0.08] text-white" : "text-white/35 hover:bg-white/[0.04] hover:text-white/60"}`}
                        >
                          <Icon className={`h-3.5 w-3.5 ${selected ? "text-[#91b5ff]" : ""}`} />
                          {stage.label}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-8 rounded-2xl border border-white/8 bg-white/[0.025] p-3">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/22">Preview flow</p>
                    <p className="mt-2 text-[11px] font-medium text-white/62">Website / Brand presence</p>
                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/8">
                      <motion.div className="h-full rounded-full bg-[#78a7ff]" animate={{ width: `${(stages.findIndex((stage) => stage.id === activeStage) + 1) * 25}%` }} />
                    </div>
                  </div>
                </aside>

                <div>
                  <div className="flex gap-2 overflow-x-auto border-b border-white/8 px-4 py-3 md:hidden">
                    {stages.map((stage) => (
                      <button
                        key={stage.id}
                        type="button"
                        onClick={() => setActiveStage(stage.id)}
                        className={`whitespace-nowrap rounded-full px-3 py-2 text-[10px] font-semibold ${stage.id === activeStage ? "bg-white text-[#07101f]" : "border border-white/10 text-white/45"}`}
                      >
                        {stage.label}
                      </button>
                    ))}
                  </div>

                  <div className="border-b border-white/8 px-5 py-4 md:px-7">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={current.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.24 }}
                      >
                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#91b5ff]">{current.label}</p>
                        <div className="mt-1 flex flex-wrap items-end justify-between gap-3">
                          <h2 className="text-xl font-heading font-semibold tracking-[-0.04em] text-white md:text-2xl">{current.title}</h2>
                          <p className="max-w-[360px] text-[10px] leading-5 text-white/34 md:text-xs">{current.copy}</p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStage}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <StagePreview stage={activeStage} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16 overflow-hidden border-y border-white/8 py-4 md:mt-20">
          <div className="flex min-w-max animate-marquee-stats items-center gap-8 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/28">
            {[...capabilities, ...capabilities].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-8">
                {item}
                <span className="h-1 w-1 rounded-full bg-[#78a7ff]/70" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
