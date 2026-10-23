import { memo } from "react";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Helena Ávila Psicoterapeuta",
    category: "Psicoterapia · Website",
    description:
      "Presença digital construída para transmitir acolhimento, profissionalismo e facilitar o caminho até o contato.",
    url: "https://www.helenaavilapsi.com.br/",
    domain: "helenaavilapsi.com.br",
    services: ["Direção visual", "Site responsivo", "Conteúdo e contato"],
    surface: "bg-[#ece5de]",
    ink: "text-[#1d242c]",
    muted: "text-black/48",
    accent: "bg-[#315b4a]",
  },
  {
    number: "02",
    title: "Cristiano Ávila",
    category: "Professional · Website",
    description:
      "Estrutura direta para apresentar serviços profissionais com leitura rápida, boa experiência mobile e contato sem fricção.",
    url: "https://cristiano-avila-site.vercel.app/",
    domain: "cristiano-avila-site.vercel.app",
    services: ["Arquitetura de conteúdo", "UX responsiva", "Publicação"],
    surface: "bg-[#101c30]",
    ink: "text-white",
    muted: "text-white/48",
    accent: "bg-[#79a9ff]",
  },
];

const ProjectBoard = ({ project, index }: { project: (typeof projects)[number]; index: number }) => (
  <div
    className={`relative min-h-[360px] overflow-hidden rounded-[28px] ${project.surface} p-6 shadow-[0_30px_80px_rgba(15,23,42,.10)] sm:p-8 md:min-h-[470px] md:p-10 ${project.ink}`}
  >
    <div className="pointer-events-none absolute inset-0 opacity-70">
      <div
        className={`absolute h-72 w-72 rounded-full blur-[90px] ${
          index === 0 ? "-right-16 -top-20 bg-white/70" : "-right-20 -top-24 bg-blue-500/25"
        }`}
      />
      <div
        className={`absolute h-64 w-64 rounded-full blur-[90px] ${
          index === 0 ? "-bottom-24 -left-16 bg-[#cddfd3]" : "-bottom-24 -left-16 bg-cyan-300/10"
        }`}
      />
    </div>

    <div className="relative z-10 flex h-full min-h-[312px] flex-col justify-between md:min-h-[390px]">
      <div>
        <div className="flex items-center justify-between gap-4">
          <span className={`text-[9px] font-semibold uppercase tracking-[0.24em] ${project.muted}`}>
            Projeto publicado
          </span>
          <span className={`h-2 w-2 rounded-full ${project.accent}`} />
        </div>

        <h3
          className={`mt-8 max-w-[650px] text-[2.65rem] font-heading font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl md:text-[4.6rem] ${project.ink}`}
        >
          {index === 0 ? "Uma presença digital mais humana e profissional." : "Uma mensagem profissional sem excesso de ruído."}
        </h3>

        <p className={`mt-5 max-w-[520px] text-sm leading-7 md:text-base ${project.muted}`}>
          {project.description}
        </p>
      </div>

      <div className="mt-10 grid gap-4 border-t border-current/10 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className={`text-[9px] font-semibold uppercase tracking-[0.2em] ${project.muted}`}>Site ao vivo</p>
          <p className={`mt-2 break-all text-xs font-medium sm:text-sm ${project.ink}`}>{project.domain}</p>
        </div>
        <span
          className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-[10px] font-semibold ${
            index === 0 ? "bg-[#1d242c] text-white" : "bg-white text-[#101c30]"
          }`}
        >
          Abrir projeto real
          <ExternalLink className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  </div>
);

const RealWorkSection = () => (
  <section className="relative overflow-hidden bg-[#f4f5f7] px-4 py-24 [content-visibility:auto] [contain-intrinsic-size:900px] md:py-36">
    <div className="container mx-auto max-w-7xl">
      <div className="mb-16 grid gap-8 md:mb-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Selected work</span>
          </div>
          <h2 className="max-w-4xl text-[2.75rem] font-heading font-semibold leading-[0.96] tracking-[-0.05em] text-foreground sm:text-6xl md:text-7xl">
            Trabalho real.
            <span className="block text-primary">Sem case de mentira.</span>
          </h2>
        </div>
        <div className="lg:justify-self-end lg:max-w-[430px]">
          <p className="text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            Os projetos abaixo estão publicados. Você pode abrir cada um e avaliar por conta própria o visual, a navegação e a experiência.
          </p>
          <Link
            to="/portfolio"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Explorar portfólio
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="space-y-20 md:space-y-28">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="group block"
          >
            <div
              className={`grid gap-7 lg:grid-cols-[0.4fr_1.6fr] lg:gap-12 ${
                index % 2 === 1 ? "lg:grid-cols-[1.6fr_0.4fr]" : ""
              }`}
            >
              <div
                className={`${index % 2 === 1 ? "lg:order-2" : ""} flex flex-col justify-between py-2`}
              >
                <div>
                  <div className="flex items-center justify-between border-t border-foreground/15 pt-4">
                    <span className="text-xs font-semibold text-muted-foreground">{project.number}</span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">{project.category}</p>
                  <h3 className="mt-4 text-3xl font-heading font-semibold leading-tight tracking-[-0.04em] text-foreground md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">{project.description}</p>

                  <ul className="mt-6 space-y-2.5">
                    {project.services.map((service) => (
                      <li key={service} className="flex items-center gap-2 text-xs font-medium text-foreground/62">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-8 text-xs font-semibold text-foreground/55">Abrir projeto publicado ↗</p>
              </div>

              <div
                className={`${index % 2 === 1 ? "lg:order-1" : ""} transition-transform duration-500 group-hover:-translate-y-1`}
              >
                <ProjectBoard project={project} index={index} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default memo(RealWorkSection);
