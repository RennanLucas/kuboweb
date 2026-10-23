import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  ArrowUpRight,
  Building2,
  Check,
  FileText,
  Instagram,
  Mail,
  Megaphone,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  Target,
} from "lucide-react";

const services = [
  { id: "site", label: "Site institucional", icon: Building2 },
  { id: "landing", label: "Landing page", icon: FileText },
  { id: "loja", label: "Loja virtual", icon: ShoppingBag },
  { id: "ads", label: "Google Ads", icon: Megaphone },
] as const;

const objectives = [
  "Gerar mais contatos",
  "Melhorar a presença da marca",
  "Vender online",
  "Organizar uma campanha",
] as const;

const stages = ["Só tenho a ideia", "Já tenho conteúdo", "Já tenho um site", "Quero começar logo"] as const;

const channels = [
  {
    icon: Mail,
    label: "E-mail",
    value: "contato.kuboweb@gmail.com",
    detail: "Bom para enviar briefing, referências e materiais.",
    href: "mailto:contato.kuboweb@gmail.com",
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@kuboweb_oficial",
    detail: "Acompanhe identidade, trabalhos e novidades da Kubo Web.",
    href: "https://www.instagram.com/kuboweb_oficial/",
    external: true,
  },
];

const Contato = () => {
  const [service, setService] = useState(0);
  const [objective, setObjective] = useState(0);
  const [stage, setStage] = useState(0);

  const whatsappUrl = useMemo(() => {
    const message = [
      "Olá, vim pelo site da Kubo Web e quero conversar sobre um projeto.",
      "",
      `Tipo de projeto: ${services[service].label}`,
      `Objetivo principal: ${objectives[objective]}`,
      `Momento atual: ${stages[stage]}`,
    ].join("\n");
    return `https://wa.me/5511932197334?text=${encodeURIComponent(message)}`;
  }, [service, objective, stage]);

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Contato"
        description="Fale com a Kubo Web pelo WhatsApp, e-mail ou Instagram para conversar sobre seu site, landing page, loja virtual ou projeto digital."
        path="/contato"
      />
      <Header />

      <section className="relative isolate overflow-hidden bg-[#050a13] px-4 pb-24 pt-36 text-white md:pb-32 md:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[8%] top-[-260px] h-[720px] w-[720px] rounded-full bg-[#326cff]/[0.2] blur-[180px]" />
          <div className="absolute right-[-12%] top-[10%] h-[620px] w-[620px] rounded-full bg-[#8db6ff]/[0.08] blur-[190px]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="container mx-auto max-w-[1380px]">
          <div className="grid gap-14 lg:grid-cols-[1.02fr_.98fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8db6ff]">
                <Sparkles className="h-3.5 w-3.5" />
                Start a project
              </div>
              <h1 className="mt-6 max-w-[880px] text-[3.4rem] font-heading font-semibold leading-[.89] tracking-[-0.075em] sm:text-7xl md:text-[6.3rem] lg:text-[7rem]">
                Antes da proposta,
                <span className="block text-white/[0.3]">vamos organizar a ideia.</span>
              </h1>
            </div>
            <div className="lg:justify-self-end lg:max-w-[470px]">
              <p className="text-base leading-8 text-white/[0.48] md:text-lg">
                Escolha o tipo de projeto, o objetivo e o momento atual. O WhatsApp já abre com um briefing inicial pronto para a conversa começar com contexto.
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-white/[0.1] pt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/[0.28]">
                Briefing rápido · Sem formulário longo
                <Target className="h-4 w-4 text-[#8db6ff]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eef0f3] px-4 py-24 md:py-36">
        <div className="pointer-events-none absolute left-[-12%] top-[14%] h-[560px] w-[560px] rounded-full bg-[#8db6ff]/20 blur-[170px]" />
        <div className="container relative mx-auto max-w-[1380px]">
          <div className="grid gap-6 xl:grid-cols-[.72fr_1.28fr]">
            <div className="space-y-5">
              <div className="rounded-[30px] border border-black/[0.07] bg-white p-6 shadow-[0_22px_60px_rgba(8,17,31,.05)] md:p-7">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#2458d8]">01 · Projeto</p>
                <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
                  {services.map((item, index) => {
                    const Icon = item.icon;
                    const selected = service === index;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setService(index)}
                        className={`group flex items-center gap-3 rounded-[18px] border p-3.5 text-left transition-all ${selected ? "border-[#08111f]/10 bg-[#08111f] text-white" : "border-black/[0.06] bg-[#f7f8fa] text-[#08111f] hover:border-black/[0.12]"}`}
                      >
                        <span className={`flex h-9 w-9 items-center justify-center rounded-full ${selected ? "bg-white/[0.08] text-[#8db6ff]" : "bg-white text-[#2458d8]"}`}>
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-semibold">{item.label}</span>
                        {selected && <Check className="ml-auto h-4 w-4 text-[#9ae7cc]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[30px] border border-black/[0.07] bg-white p-6 shadow-[0_22px_60px_rgba(8,17,31,.05)] md:p-7">
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#2458d8]">02 · Objetivo</p>
                <div className="mt-5 space-y-2">
                  {objectives.map((item, index) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setObjective(index)}
                      className={`flex w-full items-center justify-between rounded-[16px] border px-4 py-3 text-left text-sm font-medium transition-all ${objective === index ? "border-[#2458d8]/20 bg-[#edf3ff] text-[#08111f]" : "border-black/[0.05] text-[#08111f]/[0.52] hover:bg-[#f8f9fb]"}`}
                    >
                      {item}
                      <span className={`h-2 w-2 rounded-full ${objective === index ? "bg-[#2458d8]" : "bg-black/[0.08]"}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative min-h-[680px] overflow-hidden rounded-[38px] bg-[#07101f] p-6 text-white shadow-[0_48px_120px_rgba(8,17,31,.22)] md:p-8 lg:p-10">
              <div className="pointer-events-none absolute -right-[16%] -top-[16%] h-[560px] w-[560px] rounded-full bg-[#326cff]/[0.22] blur-[160px]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:64px_64px]" />

              <div className="relative z-10 flex h-full min-h-[600px] flex-col">
                <div className="flex items-center justify-between border-b border-white/[0.1] pb-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#9ae7cc] shadow-[0_0_18px_rgba(154,231,204,.55)]" />
                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.34]">Kubo brief builder</span>
                  </div>
                  <span className="hidden text-[9px] font-semibold uppercase tracking-[0.18em] text-white/[0.22] sm:block">03 · Momento atual</span>
                </div>

                <div className="grid flex-1 gap-9 py-8 lg:grid-cols-[1.05fr_.95fr]">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8db6ff]">Seu briefing inicial</p>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${service}-${objective}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: .3 }}
                      >
                        <h2 className="mt-5 max-w-[650px] text-4xl font-heading font-semibold leading-[.94] tracking-[-0.058em] md:text-5xl lg:text-6xl">
                          {services[service].label}
                          <span className="block text-white/[0.3]">para {objectives[objective].toLowerCase()}.</span>
                        </h2>
                      </motion.div>
                    </AnimatePresence>

                    <div className="mt-9 space-y-2">
                      {stages.map((item, index) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setStage(index)}
                          className={`flex w-full items-center gap-3 rounded-[18px] border p-4 text-left transition-all ${stage === index ? "border-white/[0.12] bg-white/[0.07]" : "border-white/[0.06] bg-white/[0.025] hover:bg-white/[0.045]"}`}
                        >
                          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold ${stage === index ? "bg-[#8db6ff] text-[#07101f]" : "bg-white/[0.05] text-white/[0.3]"}`}>0{index + 1}</span>
                          <span className={`text-sm font-medium ${stage === index ? "text-white/[0.78]" : "text-white/[0.42]"}`}>{item}</span>
                          {stage === index && <Check className="ml-auto h-4 w-4 text-[#9ae7cc]" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-[28px] border border-white/[0.08] bg-white/[0.04] p-5 md:p-6">
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/[0.26]">Mensagem preparada</p>
                      <div className="mt-5 space-y-4">
                        <div>
                          <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white/[0.22]">Projeto</p>
                          <p className="mt-1 text-sm font-medium text-white/[0.7]">{services[service].label}</p>
                        </div>
                        <div>
                          <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white/[0.22]">Objetivo</p>
                          <p className="mt-1 text-sm font-medium text-white/[0.7]">{objectives[objective]}</p>
                        </div>
                        <div>
                          <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white/[0.22]">Momento</p>
                          <p className="mt-1 text-sm font-medium text-white/[0.7]">{stages[stage]}</p>
                        </div>
                      </div>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-9 inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#07101f] transition-all hover:-translate-y-0.5 hover:bg-[#edf3ff]"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Enviar briefing no WhatsApp
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>

                <div className="grid gap-3 border-t border-white/[0.1] pt-6 sm:grid-cols-3">
                  {["Sem formulário longo", "Contexto já organizado", "Conversa direto no WhatsApp"].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.13em] text-white/[0.3]">
                      <span className="text-[#8db6ff]">0{index + 1}</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {channels.map(({ icon: Icon, label, value, detail, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-[24px] border border-black/[0.07] bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(8,17,31,.05)] md:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf3ff] text-[#2458d8]">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#08111f]/[0.28]">{label}</p>
                  <p className="mt-1 truncate text-sm font-semibold text-[#08111f]">{value}</p>
                  <p className="mt-1 text-xs text-[#08111f]/[0.4]">{detail}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#08111f]/[0.3] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Contato;
