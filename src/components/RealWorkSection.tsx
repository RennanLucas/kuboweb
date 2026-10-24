import { memo, useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import LiveProjectFrame from "@/components/LiveProjectFrame";

const projects = [
  {
    number: "01",
    title: "Helena Ávila",
    category: "Psicoterapia · Website",
    description: "Uma presença digital acolhedora e profissional, com conteúdo organizado e caminho simples até o contato.",
    url: "https://www.helenaavilapsi.com.br/",
    domain: "helenaavilapsi.com.br",
    tags: ["Direção visual", "Responsivo", "Conteúdo"],
    surface: "bg-[#dfe5df]",
  },
  {
    number: "02",
    title: "Cristiano Ávila",
    category: "Profissional · Website",
    description: "Uma estrutura direta para apresentar serviços, reduzir ruído e conduzir o visitante ao contato com mais clareza.",
    url: "https://cristiano-avila-site.vercel.app/",
    domain: "cristiano-avila-site.vercel.app",
    tags: ["Arquitetura", "UX", "Publicação"],
    surface: "bg-[#0b1423]",
  },
] as const;

const ProjectChapter = ({ project, index }: { project: (typeof projects)[number]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.42, 0.72, 1], reduceMotion ? [1, 1, 1, 1] : [0.97, 1, 1, 0.985]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [0, 0, 0] : [index % 2 === 0 ? -.7 : .7, 0, index % 2 === 0 ? .35 : -.35]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [0, 0, 0] : [18, 0, -14]);

  return (
    <article ref={ref} className="relative grid gap-8 border-t border-black/[0.09] py-12 md:py-16 lg:min-h-[88vh] lg:grid-cols-[.34fr_1.66fr] lg:items-center lg:gap-14 lg:py-24">
      <div className={`relative z-20 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] font-semibold text-black/[0.28]">{project.number}</span>
          <span className="inline-flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-emerald-600/[0.75]"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Publicado</span>
        </div>

        <p className="mt-7 text-[8px] font-semibold uppercase tracking-[0.22em] text-[#2b61dc] md:mt-14 md:text-[9px]">{project.category}</p>
        <h3 className="mt-3 text-[2.65rem] font-heading font-semibold leading-[.94] tracking-[-0.06em] text-[#0b111c] sm:text-[3.5rem] lg:mt-4 lg:text-[4.6rem] lg:leading-[.9]">{project.title}</h3>
        <p className="mt-4 max-w-[390px] text-[13px] leading-6 text-black/[0.48] md:mt-6 md:text-sm md:leading-7">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2 md:mt-7">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-black/[0.07] bg-white/60 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-black/[0.38] md:text-[9px]">{tag}</span>
          ))}
        </div>

        <a href={project.url} target="_blank" rel="noopener noreferrer" className="group mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-[#0b111c] md:mt-10 md:text-sm">
          <ExternalLink className="h-4 w-4 text-[#2b61dc]" />
          Abrir projeto real
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <motion.a href={project.url} target="_blank" rel="noopener noreferrer" style={{ scale, rotate, y }} className={`group relative block ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <div className={`relative overflow-hidden rounded-[24px] p-2.5 shadow-[0_28px_90px_rgba(7,16,31,.14)] md:rounded-[38px] md:p-4 lg:rounded-[48px] lg:p-5 ${project.surface}`}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_5%,rgba(255,255,255,.35),transparent_28%)] opacity-70" />
          <LiveProjectFrame url={project.url} title={project.title} domain={project.domain} viewportClassName="min-h-[390px] sm:min-h-[520px] lg:min-h-[700px]" className="relative rounded-[18px] md:rounded-[30px] lg:rounded-[36px]" />
        </div>

        <div className={`absolute -bottom-6 hidden w-[210px] overflow-hidden rounded-[28px] border-[6px] border-[#0b1018] bg-[#0b1018] shadow-[0_24px_70px_rgba(7,16,31,.24)] md:block ${index % 2 === 0 ? "-right-6 rotate-[2deg]" : "-left-6 rotate-[-2deg]"}`}>
          <LiveProjectFrame url={project.url} title={project.title} domain={project.domain} compact viewportClassName="min-h-[320px]" className="rounded-[20px] border-0 shadow-none" />
        </div>
      </motion.a>
    </article>
  );
};

const RealWorkSection = () => (
  <section className="relative overflow-hidden bg-[#f7f7f4] px-4 py-16 md:py-28 lg:py-36">
    <div className="pointer-events-none absolute left-[-20%] top-[6%] h-[420px] w-[420px] rounded-full bg-[#dfe8ff]/60 blur-[150px] md:h-[520px] md:w-[520px] md:blur-[180px]" />
    <div className="container relative mx-auto max-w-[1460px]">
      <div className="grid gap-7 pb-12 md:gap-10 md:pb-20 lg:grid-cols-[1.08fr_.92fr] lg:items-end lg:pb-28">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#2b61dc] md:text-[10px] md:tracking-[0.28em]">Projetos reais</p>
          <h2 className="mt-4 max-w-[980px] text-[2.8rem] font-heading font-semibold leading-[0.93] tracking-[-0.065em] text-[#0b111c] sm:text-[4rem] md:mt-5 md:text-[5.5rem] md:leading-[.9] lg:text-[7rem] lg:leading-[.88]">
            O trabalho fala
            <span className="block text-black/[0.24]">antes do discurso.</span>
          </h2>
        </div>
        <div className="lg:max-w-[500px] lg:justify-self-end">
          <p className="text-[14px] leading-7 text-black/[0.48] md:text-base md:leading-8 lg:text-lg">
            Nada de mockup genérico. Aqui você vê projetos publicados e a forma como a Kubo transforma estratégia em experiência digital.
          </p>
          <Link to="/portfolio" className="group mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#0b111c] md:mt-7 md:text-sm">
            Ver portfólio completo
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div>{projects.map((project, index) => <ProjectChapter key={project.title} project={project} index={index} />)}</div>
    </div>
  </section>
);

export default memo(RealWorkSection);
