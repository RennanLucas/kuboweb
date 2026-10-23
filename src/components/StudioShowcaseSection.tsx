import { ArrowUpRight, Check, Gauge, Layers3, Megaphone, MonitorSmartphone, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LayerCard = ({ label, index, active = false }: { label: string; index: number; active?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06, duration: 0.45 }}
    className={`flex items-center justify-between rounded-2xl border p-4 ${active ? "border-[#2b61dc]/20 bg-[#2b61dc]/7" : "border-black/[0.06] bg-white"}`}
  >
    <div className="flex items-center gap-3">
      <span className={`flex h-8 w-8 items-center justify-center rounded-xl text-[9px] font-semibold ${active ? "bg-[#07101f] text-white" : "bg-[#f0f2f5] text-black/36"}`}>0{index + 1}</span>
      <span className="text-sm font-medium text-[#111827]">{label}</span>
    </div>
    <span className={`h-2 w-2 rounded-full ${active ? "bg-[#2b61dc]" : "bg-black/10"}`} />
  </motion.div>
);

const StudioShowcaseSection = () => (
  <section className="relative overflow-hidden bg-[#f7f7f5] px-4 py-24 md:py-36">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/8 to-transparent" />
    <div className="container mx-auto max-w-[1380px]">
      <div className="mb-14 grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-end md:mb-20">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2b61dc]">Design system</p>
          <h2 className="mt-5 max-w-[900px] text-[3rem] font-heading font-semibold leading-[0.92] tracking-[-0.065em] text-[#0b111c] sm:text-6xl md:text-[5.25rem]">
            O nível aparece
            <span className="block text-black/28">nos detalhes.</span>
          </h2>
        </div>
        <p className="max-w-[470px] text-base leading-8 text-black/48 lg:justify-self-end md:text-lg">
          Os sites das referências funcionam porque produto, interface e narrativa parecem uma coisa só. A Kubo segue a mesma lógica: menos peças genéricas, mais sistema.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-12">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-black/[0.06] bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,.05)] sm:p-8 lg:col-span-7 lg:p-10"
        >
          <div className="pointer-events-none absolute -right-24 -top-28 h-[360px] w-[360px] rounded-full bg-[#dce7ff] blur-[90px]" />
          <div className="relative z-10 grid gap-8 md:grid-cols-[.85fr_1.15fr] md:items-end">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07101f] text-white"><Layers3 className="h-4.5 w-4.5" /></span>
              <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-black/32">Direção de projeto</p>
              <h3 className="mt-3 max-w-[430px] text-3xl font-heading font-semibold leading-[1.02] tracking-[-0.045em] text-[#0b111c] md:text-4xl">
                Uma decisão visual precisa sustentar a próxima.
              </h3>
              <p className="mt-4 max-w-[430px] text-sm leading-7 text-black/46">
                Estrutura, hierarquia, cor, tipografia e CTA deixam de competir entre si e passam a funcionar como uma linguagem única.
              </p>
            </div>
            <div className="rounded-[26px] border border-black/[0.06] bg-[#f5f6f8] p-4 sm:p-5">
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/28">Project layers</span>
                <span className="rounded-full bg-white px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-black/34">Live system</span>
              </div>
              <div className="mt-4 space-y-2.5">
                <LayerCard label="Mensagem e proposta" index={0} active />
                <LayerCard label="Arquitetura da página" index={1} />
                <LayerCard label="Sistema visual" index={2} />
                <LayerCard label="Estados e mobile" index={3} />
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[#07101f] p-6 text-white shadow-[0_30px_90px_rgba(15,23,42,.15)] sm:p-8 lg:col-span-5 lg:p-9"
        >
          <div className="absolute -right-20 -top-24 h-[300px] w-[300px] rounded-full bg-[#336cff]/25 blur-[90px]" />
          <div className="relative z-10">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.07] text-[#91b5ff]"><MonitorSmartphone className="h-4.5 w-4.5" /></span>
            <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/28">Responsive by design</p>
            <h3 className="mt-3 max-w-[420px] text-3xl font-heading font-semibold leading-[1.02] tracking-[-0.045em]">Desktop e mobile contam a mesma história.</h3>

            <div className="mt-8 flex items-end gap-3">
              <div className="flex-1 rounded-[22px] border border-white/9 bg-white/[0.035] p-4">
                <div className="h-2 w-16 rounded-full bg-white/10" />
                <div className="mt-8 h-6 w-[84%] rounded-lg bg-white/78" />
                <div className="mt-2 h-6 w-[58%] rounded-lg bg-white/78" />
                <div className="mt-5 h-2 w-[70%] rounded-full bg-white/8" />
                <div className="mt-2 h-2 w-[48%] rounded-full bg-white/6" />
                <div className="mt-6 h-9 w-28 rounded-full bg-[#78a7ff]" />
              </div>
              <div className="w-[92px] rounded-[25px] border-[5px] border-white/12 bg-white/[0.04] p-2 shadow-xl">
                <div className="mx-auto h-1 w-8 rounded-full bg-white/12" />
                <div className="mt-2 rounded-[18px] bg-[#f4f1eb] p-3">
                  <div className="h-2 w-8 rounded-full bg-black/9" />
                  <div className="mt-5 h-4 w-[82%] rounded-md bg-black/72" />
                  <div className="mt-2 h-4 w-[56%] rounded-md bg-black/72" />
                  <div className="mt-5 h-16 rounded-xl bg-[#d8ddd7]" />
                  <div className="mt-4 h-7 rounded-full bg-[#536d61]" />
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[32px] border border-black/[0.06] bg-[#eef2ff] p-6 sm:p-8 lg:col-span-5 lg:p-9"
        >
          <div className="flex items-start justify-between gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07101f] text-white"><Gauge className="h-4.5 w-4.5" /></span>
            <Search className="h-5 w-5 text-black/24" />
          </div>
          <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#2b61dc]">Antes de publicar</p>
          <h3 className="mt-3 max-w-[420px] text-3xl font-heading font-semibold leading-[1.02] tracking-[-0.045em] text-[#0b111c]">Performance, SEO e rastreamento entram no acabamento.</h3>
          <div className="mt-7 grid gap-2">
            {["Metadados e canonical", "Responsividade e leitura", "Formulários e CTAs", "Analytics e conversões"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#2b61dc]/10 bg-white/65 px-4 py-3">
                <Check className="h-3.5 w-3.5 text-[#2b61dc]" />
                <span className="text-xs font-medium text-black/58">{item}</span>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-black/[0.06] bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,.04)] sm:p-8 lg:col-span-7 lg:p-9"
        >
          <div className="grid gap-8 md:grid-cols-[.9fr_1.1fr] md:items-center">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#07101f] text-white"><Megaphone className="h-4.5 w-4.5" /></span>
              <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-black/32">Campanha conectada</p>
              <h3 className="mt-3 text-3xl font-heading font-semibold leading-[1.02] tracking-[-0.045em] text-[#0b111c]">Anúncio, página e contato precisam falar a mesma língua.</h3>
              <Link to="/servicos/anuncios" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0b111c]">
                Ver Google Ads
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="rounded-[26px] bg-[#0a111d] p-4 text-white sm:p-5">
              {[
                ["01", "Busca", "Intenção"],
                ["02", "Página", "Mesma mensagem"],
                ["03", "Contato", "Próximo passo"],
              ].map(([number, title, detail], index) => (
                <div key={number} className={`flex items-center gap-4 py-4 ${index > 0 ? "border-t border-white/8" : ""}`}>
                  <span className="text-[9px] font-semibold text-[#91b5ff]">{number}</span>
                  <div>
                    <p className="text-sm font-medium text-white/78">{title}</p>
                    <p className="mt-1 text-[10px] text-white/30">{detail}</p>
                  </div>
                  <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-white/22" />
                </div>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  </section>
);

export default StudioShowcaseSection;
