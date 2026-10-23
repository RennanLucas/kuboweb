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
    category: "Professional · Website",
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
  const scale = useTransform(scrollYProgress, [0, 0.42, 0.72, 1], reduceMotion ? [1, 1, 1, 1] : [0.94, 1, 1, 0.97]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [0, 0, 0] : [index % 2 === 0 ? -1.2 : 1.2, 0, index % 2 === 0 ? 0.8 : -0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [0, 0, 0] : [35, 0, -25]);

  return (
    <article ref={ref} className="relative grid min-h-[92vh] items-center gap-10 border-t border-black/[0.09] py-16 lg:grid-cols-[.34fr_1.66fr] lg:gap-14 lg:py-24">
      <div className={`relative z-20 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-black/[0.3]">{project.number}</span>
          <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-emerald-600/[0.75]"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live</span>
        </div>

        <p className="mt-16 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#2b61dc]">{project.category}</p>
        <h3 className="mt-4 text-[3.4rem] font-heading font-semibold leading-[.9] tracking-[-0.065em] text-[#0b111c] sm:text-6xl lg:text-[4.6rem]">{project.title}</h3>
        <p className="mt-6 max-w-[390px] text-sm leading-7 text-black/[0.46]">{project.description}</p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-black/[0.07] bg-[#f6f7f8] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-black/[0.38]">{tag}</span>
          ))}
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#0b111c]"
        >
          <ExternalLink className="h-4 w-4 text-[#2b61dc]" />
          Abrir projeto real
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ scale, rotate, y }}
        className={`group relative block ${index % 2 === 1 ? "lg:order-1" : ""}`}
      >
        <div className={`relative overflow-hidden rounded-[34px] p-3 shadow-[0_55px_150px_rgba(7,16,31,.16)] md:rounded-[48px] md:p-5 ${project.surface}`}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_5%,rgba(255,255,255,.35),transparent_28%)] opacity-70" />
          <LiveProjectFrame
            url={project.url}
            title={project.title}
            domain={project.domain}
            viewportClassName="min-h-[520px] sm:min-h-[620px] lg:min-h-[720px]"
            className="relative rounded-[26px] md:rounded-[36px]"
          />
        </div>

        <div className={`absolute -bottom-6 hidden w-[220px] overflow-hidden rounded-[30px] border-[7px] border-[#0b1018] bg-[#0b1018] shadow-[0_28px_90px_rgba(7,16,31,.28)] md:block ${index % 2 === 0 ? "-right-8 rotate-[3deg]" : "-left-8 rotate-[-3deg]"}`}>
          <div className="mx-auto my-2 h-1.5 w-12 rounded-full bg-white/[0.12]" />
          <LiveProjectFrame
            url={project.url}
            title={project.title}
            domain={project.domain}
            compact
            viewportClassName="min-h-[330px]"
            className="rounded-[22px] border-0 shadow-none"
          />
        </div>
      </motion.a>
    </article>
  );
};

const RealWorkSection = () => (
  <section className="relative overflow-hidden bg-[#f7f7f4] px-4 py-24 md:py-36">
    <div className="pointer-events-none absolute left-[-12%] top-[8%] h-[520px] w-[520px] rounded-full bg-[#dfe8ff]/70 blur-[180px]" />
    <div className="container relative mx-auto max-w-[1460px]">
      <div className="grid gap-10 pb-20 lg:grid-cols-[1.08fr_.92fr] lg:items-end md:pb-28">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2b61dc]">Selected work / live</p>
          <h2 className="mt-5 max-w-[980px] text-[3.4rem] font-heading font-semibold leading-[0.88] tracking-[-0.072em] text-[#0b111c] sm:text-7xl md:text-[6.2rem] lg:text-[7.1rem]">
            O trabalho fala
            <span className="block text-black/[0.24]">antes do texto.</span>
          </h2>
        </div>
        <div className="lg:max-w-[500px] lg:justify-self-end">
          <p className="text-base leading-8 text-black/[0.46] md:text-lg">
            Aqui você não vê uma ilustração genérica de portfólio. Você vê os projetos publicados, dentro da própria experiência da Kubo.
          </p>
          <Link to="/portfolio" className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#0b111c]">
            Abrir portfólio completo
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div>
        {projects.map((project, index) => <ProjectChapter key={project.title} project={project} index={index} />)}
      </div>
    </div>
  </section>
);

export default memo(RealWorkSection);
