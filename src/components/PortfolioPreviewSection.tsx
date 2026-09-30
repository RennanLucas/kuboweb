import { memo } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const PortfolioPreviewSection = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="relative overflow-hidden px-4 py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/25 to-background" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              Portfólio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="section-title mt-3"
            >
              Veja como diferentes negócios podem ganhar uma presença digital mais profissional
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle mt-4 max-w-2xl"
            >
              Exemplos de estruturas, estilos e soluções desenvolvidas para diferentes segmentos.
            </motion.p>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            Ver portfólio completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group overflow-hidden rounded-3xl border border-border/50 bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
            >
              <Link to={`/portfolio/${project.slug}`} className="block h-full">
                <div className="relative h-52 overflow-hidden bg-secondary/30">
                  <img
                    src={project.image}
                    alt={`Projeto ${project.title}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-lg border border-border/30 bg-background/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-foreground backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="font-heading text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Ver projeto
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PortfolioPreviewSection);
