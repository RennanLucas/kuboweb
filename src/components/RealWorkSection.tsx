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
  },
  {
    number: "02",
    title: "Cristiano Ávila",
    category: "Professional · Website",
    description: "Uma estrutura mais direta para apresentar serviços, posicionamento e contato com leitura rápida em qualquer tela.",
    url: "https://cristiano-avila-site.vercel.app/",
    domain: "cristiano-avila-site.vercel.app",
    tone: "dark" as const,
  },
];

const HelenaCanvas = () => (
  <div className="relative h-full min-h-[470px] overflow-hidden bg-[#ded8cf] sm:min-h-[560px]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(255,255,255,.95),transparent_36%),radial-gradient(circle_at_5%_95%,rgba(151,177,161,.4),transparent_38%)]" />
    <div className="absolute inset-[6%] overflow-hidden border border-black/[0.06] bg-[#f7f3ee] shadow-[0_28px_80px_rgba(43,48,44,.12)] transition-transform duration-700 group-hover:scale-[1.015]">
      <div className="flex h-11 items-center border-b border-black/[0.06] px-5">
        <span className="font-serif text-[15px] tracking-[-0.02em] text-[#303833]">Helena Ávila</span>
        <div className="ml-auto flex gap-4 text-[8px] font-semibold uppercase tracking-[0.16em] text-black/[0.28]">
          <span>Sobre</span><span>Atendimento</span><span>Contato</span>
        </div>
      </div>
      <div className="grid h-[calc(100%-44px)] lg:grid-cols-[1.05fr_.95fr]">
        <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-11">
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#62796d]">Psicoterapia</p>
            <h3 className="mt-6 max-w-[540px] font-serif text-[3rem] leading-[.92] tracking-[-0.052em] text-[#2c342f] sm:text-[4rem] lg:text-[4.7rem]">
              Um espaço para se escutar com mais calma.
            </h3>
            <p className="mt-6 max-w-[390px] text-xs leading-6 text-black/[0.42] sm:text-sm">
              Atendimento, acolhimento e conteúdo apresentados em uma experiência digital leve e humana.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <span className="rounded-full bg-[#566f62] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-white">Conhecer o trabalho</span>
            <span className="h-10 w-10 rounded-full border border-[#566f62]/[0.2]" />
          </div>
        </div>
        <div className="relative hidden overflow-hidden border-l border-black/[0.05] bg-[#d7d0c8] lg:block">
          <div className="absolute left-[11%] right-[11%] top-[9%] h-[84%] rounded-t-[180px] bg-[#becabd]" />
          <div className="absolute left-[24%] top-[18%] h-[60%] w-[54%] rounded-[48%_48%_34%_34%] bg-[#8ea094] shadow-[0_30px_80px_rgba(59,72,64,.18)]" />
          <div className="absolute left-[39%] top-[25%] h-24 w-24 rounded-full bg-[#e2cdbd]" />
          <div className="absolute bottom-[10%] left-[12%] right-[12%] h-20 border border-white/[0.4] bg-white/[0.28] backdrop-blur-xl" />
        </div>
      </div>
    </div>
    <div className="absolute bottom-[4%] right-[4%] hidden w-[168px] rotate-[3deg] overflow-hidden rounded-[28px] border-[6px] border-[#313936] bg-[#313936] shadow-[0_25px_60px_rgba(40,48,43,.24)] sm:block">
      <div className="min-h-[260px] rounded-[21px] bg-[#f6f2ed] p-4">
        <div className="h-2 w-12 rounded-full bg-black/[0.08]" />
        <p className="mt-6 font-serif text-2xl leading-tight text-[#2c342f]">Helena Ávila</p>
        <div className="mt-4 aspect-[4/3] bg-[#d8ded8]" />
        <div className="mt-4 h-8 rounded-full bg-[#566f62]" />
      </div>
    </div>
  </div>
);

const CristianoCanvas = () => (
  <div className="relative h-full min-h-[470px] overflow-hidden bg-[#07101f] sm:min-h-[560px]">
    <div className="absolute -right-[14%] -top-[18%] h-[560px] w-[560px] rounded-full bg-[#3c73ff]/[0.26] blur-[150px]" />
    <div className="absolute -bottom-[26%] -left-[8%] h-[480px] w-[480px] rounded-full bg-cyan-300/[0.08] blur-[140px]" />
    <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:52px_52px]" />
    <div className="absolute inset-[6%] overflow-hidden border border-white/[0.09] bg-[#0a1423] shadow-[0_35px_100px_rgba(0,0,0,.34)] transition-transform duration-700 group-hover:scale-[1.015]">
      <div className="flex h-11 items-center border-b border-white/[0.08] px-5">
        <span className="font-heading text-[13px] font-semibold uppercase tracking-[-0.04em] text-white">Cristiano Ávila</span>
        <div className="ml-auto flex gap-4 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/[0.24]">
          <span>Perfil</span><span>Serviços</span><span>Contato</span>
        </div>
      </div>
      <div className="grid min-h-[430px] lg:grid-cols-[1.2fr_.8fr]">
        <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-11">
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#8db6ff]">Professional website</p>
            <h3 className="mt-6 max-w-[620px] text-[3rem] font-heading font-semibold leading-[.9] tracking-[-0.065em] text-white sm:text-[4rem] lg:text-[4.9rem]">
              Clareza para transformar experiência em percepção.
            </h3>
            <p className="mt-6 max-w-[420px] text-xs leading-6 text-white/[0.38] sm:text-sm">
              Uma estrutura objetiva, feita para apresentar valor sem excesso de elementos competindo pela atenção.
            </p>
          </div>
          <div className="mt-8 inline-flex w-fit items-center gap-2 border-b border-[#8db6ff]/[0.4] pb-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/[0.68]">
            Ver serviços <ArrowUpRight className="h-3 w-3" />
          </div>
        </div>
        <div className="relative hidden border-l border-white/[0.08] p-7 lg:block">
          <div className="absolute left-[12%] right-[12%] top-[12%] border border-white/[0.1] bg-white/[0.035] p-5">
            <div className="flex items-center justify-between">
              <span className="h-9 w-9 bg-[#78a7ff]/[0.12]" />
              <span className="h-2 w-16 rounded-full bg-white/[0.08]" />
            </div>
            <div className="mt-10 h-3 w-24 rounded-full bg-[#78a7ff]/[0.18]" />
            <div className="mt-4 h-5 w-[86%] bg-white/[0.72]" />
            <div className="mt-2 h-5 w-[58%] bg-white/[0.72]" />
            <div className="mt-8 grid grid-cols-2 gap-3">
              <span className="h-24 border border-white/[0.08] bg-white/[0.025]" />
              <span className="h-24 border border-white/[0.08] bg-white/[0.025]" />
            </div>
          </div>
          <div className="absolute bottom-[12%] left-[20%] right-[7%] h-24 border border-[#78a7ff]/[0.14] bg-[#78a7ff]/[0.08] backdrop-blur-xl" />
        </div>
      </div>
    </div>
  </div>
);

const RealWorkSection = () => (
  <section className="bg-[#f5f4f1] px-4 py-24 md:py-36">
    <div className="container mx-auto max-w-[1380px]">
      <div className="grid gap-8 border-b border-black/[0.1] pb-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end md:pb-16">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2458d8]">Selected work</p>
          <h2 className="mt-5 max-w-[930px] text-[3rem] font-heading font-semibold leading-[.91] tracking-[-0.067em] text-[#08111f] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Projetos reais.
            <span className="block text-[#08111f]/[0.34]">Sem números inventados.</span>
          </h2>
        </div>
        <div className="lg:justify-self-end lg:max-w-[430px]">
          <p className="text-base leading-8 text-[#08111f]/[0.48] md:text-lg">
            Aqui a prova não é uma estatística decorativa. São projetos publicados que você pode abrir, navegar e avaliar.
          </p>
          <Link to="/portfolio" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#08111f]">
            Ver portfólio completo
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="mt-12 space-y-20 md:mt-16 md:space-y-28">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="overflow-hidden bg-white shadow-[0_30px_90px_rgba(8,17,31,.08)]">
                {index === 0 ? <HelenaCanvas /> : <CristianoCanvas />}
              </div>
            </a>

            <div className="mt-6 grid gap-5 border-t border-black/[0.1] pt-5 md:grid-cols-[.2fr_.5fr_.3fr] md:items-start md:gap-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/[0.3]">{project.number}</span>
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#2458d8]">{project.category}</p>
                <h3 className="mt-2 text-2xl font-heading font-semibold tracking-[-0.045em] text-[#08111f] md:text-3xl">{project.title}</h3>
              </div>
              <div className="md:justify-self-end md:max-w-[390px]">
                <p className="text-sm leading-7 text-[#08111f]/[0.48]">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#08111f]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {project.domain}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default memo(RealWorkSection);
