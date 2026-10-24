import { memo } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import LiveProjectFrame from "@/components/LiveProjectFrame";

const projects = [
  {
    number: "01",
    title: "Helena Ávila",
    category: "Psicoterapia · Website",
    description: "Presença digital acolhedora e profissional, com informação organizada e caminho simples até o contato.",
    url: "https://www.helenaavilapsi.com.br/",
    domain: "helenaavilapsi.com.br",
    tags: ["Direção visual", "Responsivo", "Conteúdo"],
    surface: "bg-[#dfe5df]",
  },
  {
    number: "02",
    title: "Cristiano Ávila",
    category: "Profissional · Website",
    description: "Estrutura direta para apresentar serviços com clareza e conduzir o visitante ao próximo passo.",
    url: "https://cristiano-avila-site.vercel.app/",
    domain: "cristiano-avila-site.vercel.app",
    tags: ["Arquitetura", "UX", "Publicação"],
    surface: "bg-[#0b1423]",
  },
] as const;

const ProjectCard = ({ project, index }: { project: (typeof projects)[number]; index: number }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: .6, ease: [.16, 1, .3, 1] }}
      className="grid gap-7 border-t border-black/[.09] py-10 md:gap-10 md:py-16 lg:grid-cols-[.34fr_1.66fr] lg:items-center lg:gap-14 lg:py-24"
    >
      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] font-semibold text-black/[.28]">{project.number}</span>
          <span className="inline-flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[.16em] text-emerald-600/75"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Publicado</span>
        </div>

        <p className="mt-6 text-[8px] font-semibold uppercase tracking-[.2em] text-[#2b61dc] md:mt-10">{project.category}</p>
        <h3 className="mt-2.5 text-[2.4rem] font-heading font-semibold leading-[.96] tracking-[-.055em] text-[#0b111c] sm:text-[3.3rem] lg:text-[4.4rem]">{project.title}</h3>
        <p className="mt-4 max-w-[390px] text-[13px] leading-6 text-black/[.48] md:mt-5 md:text-sm md:leading-7">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-black/[.07] bg-white/60 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[.11em] text-black/[.38]">{tag}</span>
          ))}
        </div>

        <a href={project.url} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#0b111c] md:mt-8 md:text-sm">
          <ExternalLink className="h-4 w-4 text-[#2b61dc]" />
          Abrir projeto real
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <a href={project.url} target="_blank" rel="noopener noreferrer" className={`group block ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <div className={`relative overflow-hidden rounded-[22px] p-2.5 md:rounded-[34px] md:p-4 lg:rounded-[44px] lg:p-5 ${project.surface}`}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_7%,rgba(255,255,255,.34),transparent_30%)]" />
          <LiveProjectFrame
            url={project.url}
            title={project.title}
            domain={project.domain}
            viewportClassName="aspect-[16/11] min-h-0 sm:aspect-[16/10] md:aspect-auto md:min-h-[500px] lg:min-h-[640px]"
            className="relative rounded-[16px] shadow-[0_22px_70px_rgba(7,16,31,.13)] md:rounded-[26px] lg:rounded-[32px]"
          />
        </div>
      </a>
    </motion.article>
  );
};

const RealWorkSection = () => (
  <section className="relative overflow-hidden bg-[#f7f7f4] px-4 py-14 md:py-24 lg:py-32">
    <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#dfe8ff]/55 blur-[150px]" />
    <div className="container relative mx-auto max-w-[1460px]">
      <div className="grid gap-6 pb-10 md:pb-16 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:pb-20">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[.24em] text-[#2b61dc]">Projetos reais</p>
          <h2 className="mt-4 max-w-[940px] text-[2.55rem] font-heading font-semibold leading-[.95] tracking-[-.06em] text-[#0b111c] sm:text-[3.8rem] md:text-[5.2rem] lg:text-[6.5rem]">
            Trabalho real.
            <span className="block text-black/[.24]">Sem portfólio de mentira.</span>
          </h2>
        </div>
        <div className="lg:max-w-[480px] lg:justify-self-end">
          <p className="text-[14px] leading-7 text-black/[.48] md:text-base md:leading-8">Os projetos abaixo estão publicados. Você pode abrir, navegar e avaliar o trabalho da Kubo fora desta página.</p>
          <Link to="/portfolio" className="group mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#0b111c] md:text-sm">Ver portfólio completo <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
        </div>
      </div>

      <div>{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
    </div>
  </section>
);

export default memo(RealWorkSection);
