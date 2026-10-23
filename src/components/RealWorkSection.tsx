import { memo } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Helena Ávila Psicoterapeuta",
    category: "Site institucional",
    description:
      "Presença digital voltada para apresentação profissional, confiança e contato direto com pacientes.",
    url: "https://www.helenaavilapsi.com.br/",
    domain: "helenaavilapsi.com.br",
  },
  {
    title: "Cristiano Ávila",
    category: "Site profissional",
    description:
      "Projeto responsivo com estrutura objetiva, identidade própria e navegação pensada para serviços profissionais.",
    url: "https://cristiano-avila-site.vercel.app/",
    domain: "cristiano-avila-site.vercel.app",
  },
];

const RealWorkSection = () => (
  <section className="px-4 py-20 md:py-28">
    <div className="container mx-auto max-w-6xl">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end mb-10 md:mb-14">
        <div>
          <p className="section-label mb-4">Trabalhos reais</p>
          <h2 className="section-title max-w-xl">Menos promessa. Mais trabalho para abrir e conferir.</h2>
        </div>
        <div className="lg:justify-self-end lg:max-w-md">
          <p className="text-muted-foreground leading-relaxed">
            Estes são projetos publicados pela Kubo Web. Sem números inventados, sem depoimentos genéricos e sem métricas impossíveis de verificar.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="group relative overflow-hidden rounded-[28px] border border-border/70 bg-card p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="mb-12 flex items-center justify-between gap-4">
              <span className="rounded-full border border-border/70 bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                {project.category}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all group-hover:border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground">
                <ExternalLink className="h-4 w-4" />
              </span>
            </div>

            <div className="mb-8 rounded-2xl border border-border/60 bg-background p-4 shadow-inner">
              <div className="mb-4 flex items-center gap-2 border-b border-border/50 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
                <span className="ml-2 truncate text-[11px] text-muted-foreground">{project.domain}</span>
              </div>
              <div className="space-y-3">
                <div className="h-2.5 w-20 rounded-full bg-primary/20" />
                <div className="h-6 w-4/5 rounded-lg bg-foreground/90" />
                <div className="h-3 w-full rounded-full bg-muted" />
                <div className="h-3 w-3/4 rounded-full bg-muted" />
                <div className="pt-2 flex gap-2">
                  <div className="h-8 w-24 rounded-lg bg-primary" />
                  <div className="h-8 w-20 rounded-lg border border-border" />
                </div>
              </div>
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{project.category}</p>
            <h3 className="mb-3 text-xl md:text-2xl font-heading font-bold text-foreground">{project.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          </motion.a>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
        >
          Ver portfólio
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default memo(RealWorkSection);
