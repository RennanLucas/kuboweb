import { memo } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    title: "Helena Ávila",
    category: "Psicoterapia · Website",
    description: "Uma presença digital acolhedora e profissional, com conteúdo organizado e caminho simples até o contato.",
    url: "https://www.helenaavilapsi.com.br/",
    domain: "helenaavilapsi.com.br",
    tone: "light" as const,
    tags: ["Direção visual", "Responsivo", "Conteúdo"],
  },
  {
    number: "02",
    title: "Cristiano Ávila",
    category: "Professional · Website",
    description: "Uma estrutura direta para apresentar serviços, reduzir ruído e conduzir o visitante ao contato com mais clareza.",
    url: "https://cristiano-avila-site.vercel.app/",
    domain: "cristiano-avila-site.vercel.app",
    tone: "dark" as const,
    tags: ["Arquitetura", "UX", "Publicação"],
  },
] as const;

const HelenaVisual = () => (
  <div className="relative min-h-[480px] overflow-hidden rounded-[30px] bg-[#dfe5df] p-4 sm:p-6 md:min-h-[620px] md:p-8">
    <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/80 blur-[85px]" />
    <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#b9c9bd] blur-[90px]" />

    <div className="relative h-full min-h-[430px] overflow-hidden rounded-[24px] border border-black/[0.06] bg-[#f8f4ed] shadow-[0_30px_85px_rgba(46,56,49,.14)] md:min-h-[550px]">
      <div className="flex h-11 items-center border-b border-black/[0.06] px-4">
        <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-black/10" /><span className="h-2 w-2 rounded-full bg-black/10" /><span className="h-2 w-2 rounded-full bg-black/10" /></div>
        <span className="mx-auto hidden rounded-full bg-black/[0.035] px-5 py-1.5 text-[8px] font-medium text-black/28 sm:block">helenaavilapsi.com.br</span>
      </div>
      <div className="grid min-h-[386px] md:min-h-[506px] lg:grid-cols-[1.06fr_.94fr]">
        <div className="flex flex-col justify-between p-7 sm:p-9 md:p-12">
          <div>
            <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#536d61]/58"><span className="h-px w-8 bg-[#536d61]/45" /> Psicoterapia</div>
            <p className="mt-10 max-w-[520px] font-serif text-[3rem] leading-[.94] tracking-[-0.055em] text-[#252d29] sm:text-[4.15rem] md:text-[5rem]">
              Um espaço digital mais humano.
            </p>
            <p className="mt-6 max-w-[420px] text-sm leading-7 text-black/42">Conteúdo, presença e contato organizados com calma, hierarquia e uma direção visual acolhedora.</p>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <span className="h-11 w-36 rounded-full bg-[#536d61]" />
            <span className="h-11 w-11 rounded-full border border-[#536d61]/16" />
          </div>
        </div>
        <div className="relative hidden overflow-hidden bg-[#d8d2ca] lg:block">
          <div className="absolute inset-x-[11%] bottom-[-9%] top-[8%] rounded-t-[140px] bg-[#c4cfc5]" />
          <div className="absolute left-[24%] top-[20%] h-[58%] w-[53%] rounded-[48%_48%_35%_35%] bg-[#92a398] shadow-[0_35px_70px_rgba(50,63,55,.17)]" />
          <div className="absolute left-[38%] top-[28%] h-24 w-24 rounded-full bg-[#e4d1c0]" />
          <div className="absolute bottom-[13%] left-[17%] right-[17%] h-24 rounded-[30px] border border-white/35 bg-white/24 backdrop-blur-xl" />
        </div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 22, rotate: 4 }}
      whileInView={{ opacity: 1, y: 0, rotate: 2 }}
      viewport={{ once: true }}
      transition={{ delay: 0.18, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="absolute bottom-5 right-5 hidden w-[180px] rounded-[30px] border-[6px] border-[#1b211e] bg-[#1b211e] shadow-[0_28px_70px_rgba(33,43,37,.25)] sm:block md:bottom-8 md:right-8 md:w-[210px]"
    >
      <div className="mx-auto mt-2 h-1.5 w-12 rounded-full bg-white/12" />
      <div className="m-2 rounded-[22px] bg-[#f7f2eb] p-4">
        <div className="h-2 w-12 rounded-full bg-black/8" />
        <p className="mt-6 font-serif text-2xl leading-none text-[#27302b]">Helena Ávila</p>
        <div className="mt-4 h-2 w-[82%] rounded-full bg-black/9" />
        <div className="mt-2 h-2 w-[58%] rounded-full bg-black/7" />
        <div className="mt-5 h-20 rounded-[16px] bg-[#d6ded7]" />
        <div className="mt-4 h-8 rounded-full bg-[#536d61]" />
      </div>
    </motion.div>
  </div>
);

const CristianoVisual = () => (
  <div className="relative min-h-[480px] overflow-hidden rounded-[30px] bg-[#09121f] p-4 sm:p-6 md:min-h-[620px] md:p-8">
    <div className="absolute -right-24 -top-28 h-[420px] w-[420px] rounded-full bg-[#356dff]/28 blur-[120px]" />
    <div className="absolute -bottom-28 left-[-8%] h-[360px] w-[360px] rounded-full bg-cyan-300/8 blur-[110px]" />
    <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:52px_52px]" />

    <div className="relative h-full min-h-[430px] overflow-hidden rounded-[24px] border border-white/9 bg-[#0b1423] shadow-[0_30px_90px_rgba(0,0,0,.32)] md:min-h-[550px]">
      <div className="flex h-11 items-center border-b border-white/8 px-4">
        <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-white/13" /><span className="h-2 w-2 rounded-full bg-white/13" /><span className="h-2 w-2 rounded-full bg-white/13" /></div>
        <span className="mx-auto hidden rounded-full bg-white/[0.04] px-5 py-1.5 text-[8px] font-medium text-white/26 sm:block">cristiano-avila-site.vercel.app</span>
      </div>
      <div className="grid min-h-[386px] md:min-h-[506px] lg:grid-cols-[1.15fr_.85fr]">
        <div className="flex flex-col justify-between p-7 sm:p-9 md:p-12">
          <div>
            <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#91b5ff]/65"><span className="h-px w-8 bg-[#91b5ff]/45" /> Professional website</div>
            <p className="mt-10 max-w-[590px] text-[3rem] font-heading font-semibold leading-[.91] tracking-[-0.065em] text-white sm:text-[4.4rem] md:text-[5.35rem]">
              Menos ruído.
              <span className="block text-white/34">Mais presença.</span>
            </p>
            <p className="mt-6 max-w-[430px] text-sm leading-7 text-white/38">Uma estrutura direta para apresentar serviços profissionais, criar confiança e conduzir ao contato.</p>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <span className="h-11 w-36 rounded-full bg-[#78a7ff]" />
            <span className="h-11 w-28 rounded-full border border-white/10" />
          </div>
        </div>
        <div className="relative hidden border-l border-white/7 bg-[#101d31] lg:block">
          <div className="absolute left-[14%] right-[14%] top-[11%] rounded-[28px] border border-white/9 bg-white/[0.035] p-5">
            <div className="flex items-center justify-between"><div className="h-9 w-9 rounded-xl bg-[#78a7ff]/14" /><div className="h-2 w-16 rounded-full bg-white/9" /></div>
            <div className="mt-9 h-3 w-24 rounded-full bg-[#78a7ff]/18" />
            <div className="mt-4 h-6 w-[90%] rounded-lg bg-white/76" />
            <div className="mt-2 h-6 w-[64%] rounded-lg bg-white/76" />
            <div className="mt-7 grid grid-cols-2 gap-2"><div className="h-24 rounded-2xl bg-white/[0.045]" /><div className="h-24 rounded-2xl bg-white/[0.045]" /></div>
          </div>
          <div className="absolute bottom-[10%] left-[24%] right-[8%] h-28 rounded-[28px] border border-[#78a7ff]/16 bg-[#78a7ff]/8 backdrop-blur-xl" />
        </div>
      </div>
    </div>
  </div>
);

const RealWorkSection = () => (
  <section className="relative overflow-hidden bg-white px-4 py-24 md:py-36">
    <div className="container mx-auto max-w-[1380px]">
      <div className="mb-16 grid gap-8 md:mb-24 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2b61dc]">Selected work</p>
          <h2 className="mt-5 max-w-[900px] text-[3rem] font-heading font-semibold leading-[0.92] tracking-[-0.065em] text-[#0b111c] sm:text-6xl md:text-[5.35rem]">
            Trabalho real.
            <span className="block text-black/28">Abra e confira.</span>
          </h2>
        </div>
        <div className="lg:justify-self-end lg:max-w-[470px]">
          <p className="text-base leading-8 text-black/46 md:text-lg">
            Nada de cases genéricos ou números inventados. Os projetos abaixo estão publicados e podem ser abertos agora.
          </p>
          <Link to="/portfolio" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0b111c]">
            Explorar portfólio
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="space-y-20 md:space-y-28">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-7 lg:grid-cols-[.34fr_1.66fr] lg:gap-12"
          >
            <div className={`flex flex-col justify-between py-2 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div>
                <div className="flex items-center justify-between border-t border-black/12 pt-4">
                  <span className="text-xs font-semibold text-black/34">{project.number}</span>
                  <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-emerald-600/70"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Publicado</span>
                </div>
                <p className="mt-10 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#2b61dc]">{project.category}</p>
                <h3 className="mt-4 text-3xl font-heading font-semibold tracking-[-0.045em] text-[#0b111c] md:text-4xl">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/46">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="rounded-full border border-black/[0.07] bg-[#f7f7f5] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-black/38">{tag}</span>)}
                </div>
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center justify-between border-t border-black/12 pt-4 text-sm font-semibold text-[#0b111c]"
              >
                <span className="inline-flex items-center gap-2"><ExternalLink className="h-4 w-4 text-[#2b61dc]" /> {project.domain}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <a href={project.url} target="_blank" rel="noopener noreferrer" className={`group block ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 240, damping: 24 }}>
                {project.tone === "light" ? <HelenaVisual /> : <CristianoVisual />}
              </motion.div>
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default memo(RealWorkSection);
