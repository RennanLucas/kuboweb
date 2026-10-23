import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Building2, FileText, Megaphone, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    id: "site",
    label: "Site institucional",
    icon: Building2,
    title: "Uma presença digital que organiza a percepção da empresa.",
    text: "Estrutura, conteúdo e interface trabalham juntos para a marca parecer mais clara, confiável e atual.",
    href: "/servicos/sites-institucionais",
    accent: "#79a9ff",
  },
  {
    id: "landing",
    label: "Landing page",
    icon: FileText,
    title: "Uma página desenhada para explicar uma oferta e conduzir à ação.",
    text: "Hierarquia, prova, objeções e CTA entram na mesma narrativa para reduzir ruído e facilitar a decisão.",
    href: "/servicos/landing-pages",
    accent: "#9ad9ff",
  },
  {
    id: "store",
    label: "Loja virtual",
    icon: ShoppingBag,
    title: "Produto, navegação e checkout apresentados como uma experiência única.",
    text: "A loja precisa vender sem parecer improvisada: catálogo, mobile, confiança e integrações entram desde o início.",
    href: "/servicos/loja-virtual",
    accent: "#c9b8ff",
  },
  {
    id: "ads",
    label: "Google Ads",
    icon: Megaphone,
    title: "Tráfego conectado à página certa, com mensagem coerente até o contato.",
    text: "Campanha e destino precisam falar a mesma língua. A Kubo Web organiza essa continuidade entre busca, página e conversão.",
    href: "/servicos/anuncios",
    accent: "#8ee7c5",
  },
] as const;

const SitePreview = ({ mode }: { mode: (typeof items)[number]["id"] }) => {
  if (mode === "landing") {
    return (
      <div className="grid min-h-[430px] gap-4 p-5 md:grid-cols-[1.18fr_.82fr] md:p-7">
        <div className="rounded-[26px] bg-[#f7f8fb] p-6 text-[#101726] md:p-8">
          <div className="h-2 w-24 rounded-full bg-[#101726]/10" />
          <div className="mt-14 max-w-xl">
            <div className="h-3 w-28 rounded-full bg-[#2458d8]/18" />
            <div className="mt-5 h-10 w-[88%] rounded-xl bg-[#101726]" />
            <div className="mt-3 h-10 w-[64%] rounded-xl bg-[#101726]" />
            <div className="mt-6 h-3 w-[78%] rounded-full bg-[#101726]/10" />
            <div className="mt-2 h-3 w-[58%] rounded-full bg-[#101726]/10" />
            <div className="mt-8 flex gap-3">
              <div className="h-12 w-36 rounded-full bg-[#2458d8]" />
              <div className="h-12 w-28 rounded-full border border-[#101726]/10" />
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          {["Oferta", "Prova", "Objeções", "CTA"].map((label, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
              className="flex items-center justify-between rounded-[22px] border border-white/9 bg-white/[0.035] p-5"
            >
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/28">0{index + 1}</p>
                <p className="mt-2 text-sm font-medium text-white/72">{label}</p>
              </div>
              <div className="h-2 w-2 rounded-full bg-[#9ad9ff]" />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (mode === "store") {
    return (
      <div className="min-h-[430px] p-5 md:p-7">
        <div className="grid h-full gap-4 md:grid-cols-[.72fr_1.28fr]">
          <div className="rounded-[26px] border border-white/9 bg-white/[0.035] p-5">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/28">Store structure</p>
            <div className="mt-6 space-y-3">
              {["Categorias", "Produto", "Carrinho", "Pagamento"].map((label, index) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/[0.035] p-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.06] text-[9px] text-white/38">0{index + 1}</span>
                  <span className="text-xs font-medium text-white/68">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[26px] bg-[#f4f1eb] p-5 md:p-7">
            <div className="flex items-center justify-between">
              <div className="h-3 w-28 rounded-full bg-black/10" />
              <div className="h-9 w-24 rounded-full bg-black/6" />
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.045 }}
                  className="rounded-[18px] bg-white p-3 shadow-[0_12px_30px_rgba(15,23,42,.06)]"
                >
                  <div className={`aspect-[4/5] rounded-[14px] ${index % 3 === 0 ? "bg-[#dce8ff]" : index % 3 === 1 ? "bg-[#ece3db]" : "bg-[#e3e8ec]"}`} />
                  <div className="mt-3 h-2 w-3/4 rounded-full bg-black/12" />
                  <div className="mt-2 h-2 w-1/3 rounded-full bg-black/8" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (mode === "ads") {
    return (
      <div className="grid min-h-[430px] gap-4 p-5 md:grid-cols-[.86fr_1.14fr] md:p-7">
        <div className="rounded-[26px] border border-white/9 bg-white/[0.035] p-5 md:p-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/28">Search intent</p>
          <div className="mt-6 rounded-2xl border border-white/9 bg-[#0c1727] p-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-[#8ee7c5]" />
              <span className="text-xs text-white/58">criação de site profissional</span>
            </div>
            <div className="mt-5 space-y-3">
              {["Intenção alta", "Página coerente", "CTA direto"].map((label, index) => (
                <div key={label} className="flex items-center justify-between rounded-xl border border-white/8 px-4 py-3">
                  <span className="text-xs text-white/54">{label}</span>
                  <span className="text-[9px] font-semibold text-[#8ee7c5]">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-[26px] bg-white p-5 text-[#101726] md:p-7">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">Ad → landing → contact</p>
          <div className="mt-7 space-y-4">
            {[
              ["Anúncio", "Mensagem alinhada à busca"],
              ["Página", "Mesmo argumento, mais contexto"],
              ["Contato", "Próximo passo sem fricção"],
            ].map(([title, copy], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                className="relative rounded-[20px] border border-black/7 bg-[#f6f7f9] p-5"
              >
                <span className="absolute right-4 top-4 text-[9px] font-semibold text-black/22">0{index + 1}</span>
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-2 text-xs leading-5 text-black/46">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid min-h-[430px] gap-4 p-5 md:grid-cols-[.7fr_1.3fr] md:p-7">
      <div className="rounded-[26px] border border-white/9 bg-white/[0.035] p-5 md:p-6">
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/28">Information architecture</p>
        <div className="mt-6 space-y-3">
          {["Home", "Serviços", "Prova", "Sobre", "Contato"].map((label, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`flex items-center gap-3 rounded-2xl border p-4 ${index === 0 ? "border-[#79a9ff]/25 bg-[#79a9ff]/10" : "border-white/8 bg-white/[0.025]"}`}
            >
              <span className="text-[9px] font-semibold text-white/30">0{index + 1}</span>
              <span className="text-xs font-medium text-white/68">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="rounded-[26px] bg-[#f5f6f8] p-5 text-[#101726] md:p-7">
        <div className="flex items-center justify-between border-b border-black/7 pb-4">
          <div className="h-3 w-24 rounded-full bg-black/10" />
          <div className="flex gap-2"><span className="h-2 w-12 rounded-full bg-black/8" /><span className="h-2 w-12 rounded-full bg-black/8" /></div>
        </div>
        <div className="mt-8 max-w-[88%]">
          <div className="h-3 w-28 rounded-full bg-[#2458d8]/16" />
          <div className="mt-5 h-10 w-[92%] rounded-xl bg-[#101726]" />
          <div className="mt-3 h-10 w-[66%] rounded-xl bg-[#101726]" />
          <div className="mt-6 h-3 w-[72%] rounded-full bg-black/9" />
          <div className="mt-2 h-3 w-[54%] rounded-full bg-black/9" />
          <div className="mt-8 h-12 w-36 rounded-full bg-[#2458d8]" />
        </div>
        <div className="mt-10 grid grid-cols-3 gap-3">
          {[0,1,2].map((index) => <div key={index} className="h-20 rounded-[16px] border border-black/6 bg-white" />)}
        </div>
      </div>
    </div>
  );
};

const StudioShowcaseSection = () => {
  const [active, setActive] = useState<(typeof items)[number]["id"]>("site");
  const current = items.find((item) => item.id === active)!;

  return (
    <section className="relative overflow-hidden bg-[#050a13] px-4 py-24 text-white md:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[-10%] h-[460px] w-[460px] rounded-full bg-blue-600/14 blur-[150px]" />
        <div className="absolute bottom-[-16%] right-[4%] h-[520px] w-[520px] rounded-full bg-cyan-400/8 blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:68px_68px]" />
      </div>

      <div className="container relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8eb8ff]">Interactive studio</p>
            <h2 className="mt-5 max-w-xl text-[2.9rem] font-heading font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[4.8rem]">
              Explore como cada tipo de projeto é pensado.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/46 md:text-lg">
              Não é uma coleção de templates. Cada formato pede uma arquitetura, uma narrativa e uma experiência diferentes.
            </p>

            <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {items.map((item) => {
                const Icon = item.icon;
                const selected = item.id === active;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(item.id)}
                    className={`group flex items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-300 ${selected ? "border-white/16 bg-white/[0.08]" : "border-white/7 bg-white/[0.02] hover:border-white/12 hover:bg-white/[0.045]"}`}
                    aria-pressed={selected}
                  >
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${selected ? "bg-white text-[#07101f]" : "bg-white/[0.05] text-white/45"}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className={`text-sm font-medium ${selected ? "text-white" : "text-white/52"}`}>{item.label}</span>
                    <ArrowUpRight className={`ml-auto h-4 w-4 transition-transform ${selected ? "text-white/70" : "text-white/20 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/50"}`} />
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[#091321]/94 shadow-[0_45px_120px_rgba(0,0,0,.35)] backdrop-blur-xl">
              <div className="flex items-center gap-3 border-b border-white/8 px-5 py-4 md:px-7">
                <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-white/12" /><span className="h-2.5 w-2.5 rounded-full bg-white/12" /><span className="h-2.5 w-2.5 rounded-full bg-white/12" /></div>
                <span className="ml-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">Kubo studio · capability preview</span>
                <span className="ml-auto hidden h-2 w-2 rounded-full sm:block" style={{ backgroundColor: current.accent, boxShadow: `0 0 18px ${current.accent}` }} />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SitePreview mode={active} />
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${active}-copy`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
                className="mt-6 grid gap-5 rounded-[28px] border border-white/8 bg-white/[0.025] p-6 md:grid-cols-[1fr_auto] md:items-end md:p-7"
              >
                <div>
                  <h3 className="max-w-3xl text-2xl font-heading font-semibold leading-tight tracking-[-0.04em] md:text-3xl">{current.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/42">{current.text}</p>
                </div>
                <Link to={current.href} className="group inline-flex items-center gap-2 text-sm font-semibold text-white/72 transition-colors hover:text-white">
                  Ver serviço
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioShowcaseSection;
