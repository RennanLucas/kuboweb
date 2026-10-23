import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Building2, FileText, Megaphone, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    id: "site",
    number: "01",
    label: "Site institucional",
    icon: Building2,
    title: "Presença digital que organiza percepção e confiança.",
    text: "Conteúdo, estrutura e direção visual trabalham juntos para a empresa parecer mais clara, atual e profissional.",
    href: "/servicos/sites-institucionais",
    accent: "#78a7ff",
  },
  {
    id: "landing",
    number: "02",
    label: "Landing page",
    icon: FileText,
    title: "Uma oferta forte precisa de uma página que conduza a leitura.",
    text: "Mensagem, prova, objeções e CTA entram na mesma narrativa para reduzir ruído e facilitar a decisão.",
    href: "/servicos/landing-pages",
    accent: "#9ad9ff",
  },
  {
    id: "store",
    number: "03",
    label: "Loja virtual",
    icon: ShoppingBag,
    title: "Produto, navegação e checkout precisam parecer um só sistema.",
    text: "A experiência de compra é desenhada para funcionar bem no mobile, apresentar produto e manter confiança até o pagamento.",
    href: "/servicos/loja-virtual",
    accent: "#c8b7ff",
  },
  {
    id: "ads",
    number: "04",
    label: "Google Ads",
    icon: Megaphone,
    title: "Tráfego e página precisam falar exatamente a mesma língua.",
    text: "A campanha leva a busca certa para uma página coerente, com mensagem contínua até o contato.",
    href: "/servicos/anuncios",
    accent: "#88e4c1",
  },
] as const;

type Mode = (typeof items)[number]["id"];

const PreviewCanvas = ({ mode }: { mode: Mode }) => {
  const current = items.find((item) => item.id === mode)!;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={mode}
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.99 }}
        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        className="relative min-h-[520px] overflow-hidden border border-white/[0.1] bg-[#0a1423] p-5 sm:p-7 md:min-h-[620px] md:p-9"
      >
        <div className="absolute -right-[18%] -top-[20%] h-[560px] w-[560px] rounded-full blur-[150px]" style={{ backgroundColor: `${current.accent}22` }} />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="relative z-10 flex min-h-[480px] flex-col md:min-h-[548px]">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: current.accent }} />
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.32]">Kubo build system</span>
            </div>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/[0.2]">{current.number} / 04</span>
          </div>

          <div className="grid flex-1 gap-8 pt-8 md:grid-cols-[1.08fr_.92fr] md:items-end">
            <div className="flex min-h-[360px] flex-col justify-between bg-[#f4f5f7] p-6 text-[#08111f] sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-black/[0.28]">{current.label}</span>
                  <span className="h-8 w-20 rounded-full border border-black/[0.07]" />
                </div>
                <h3 className="mt-12 max-w-[620px] text-[2.6rem] font-heading font-semibold leading-[.91] tracking-[-0.065em] sm:text-5xl md:text-[3.9rem]">
                  {current.title}
                </h3>
                <p className="mt-6 max-w-[470px] text-sm leading-7 text-black/[0.46]">{current.text}</p>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <span className="h-10 w-32 rounded-full bg-[#08111f]" />
                <span className="h-10 w-10 rounded-full border border-black/[0.1]" />
              </div>
            </div>

            <div className="space-y-3">
              {(mode === "site"
                ? ["Arquitetura", "Direção visual", "Responsivo", "Publicação"]
                : mode === "landing"
                  ? ["Oferta", "Prova", "Objeções", "CTA"]
                  : mode === "store"
                    ? ["Catálogo", "Produto", "Carrinho", "Checkout"]
                    : ["Busca", "Anúncio", "Página", "Contato"]
              ).map((label, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.055 }}
                  className="group flex items-center justify-between border-t border-white/[0.1] py-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] font-semibold text-white/[0.22]">0{index + 1}</span>
                    <span className="text-sm font-medium text-white/[0.62] transition-colors group-hover:text-white">{label}</span>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: current.accent }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const StudioShowcaseSection = () => {
  const [active, setActive] = useState<Mode>("site");
  const current = items.find((item) => item.id === active)!;

  return (
    <section className="relative overflow-hidden bg-[#050a13] px-4 py-24 text-white md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.14]" />
      <div className="container relative mx-auto max-w-[1380px]">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8db6ff]">Interactive studio</p>
            <h2 className="mt-5 max-w-[620px] text-[3rem] font-heading font-semibold leading-[.92] tracking-[-0.065em] sm:text-6xl lg:text-[5rem]">
              Cada projeto pede uma lógica diferente.
            </h2>
            <p className="mt-6 max-w-[520px] text-base leading-8 text-white/[0.42] md:text-lg">
              Escolha um formato e veja como a estrutura muda. A direção visual vem depois da estratégia, não antes.
            </p>

            <div className="mt-10 border-t border-white/[0.1]">
              {items.map((item) => {
                const Icon = item.icon;
                const selected = item.id === active;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(item.id)}
                    onMouseEnter={() => setActive(item.id)}
                    aria-pressed={selected}
                    className={`group flex w-full items-center gap-4 border-b border-white/[0.1] py-5 text-left transition-colors ${selected ? "text-white" : "text-white/[0.42] hover:text-white/[0.72]"}`}
                  >
                    <span className="text-[9px] font-semibold text-white/[0.22]">{item.number}</span>
                    <Icon className={`h-4 w-4 ${selected ? "text-[#8db6ff]" : "text-white/[0.3]"}`} />
                    <span className="text-sm font-medium">{item.label}</span>
                    <motion.span
                      animate={{ x: selected ? 0 : -5, opacity: selected ? 1 : 0.25 }}
                      className="ml-auto"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </button>
                );
              })}
            </div>

            <Link to={current.href} className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/[0.7] transition-colors hover:text-white">
              Ver detalhes do serviço
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <PreviewCanvas mode={active} />
        </div>
      </div>
    </section>
  );
};

export default StudioShowcaseSection;
