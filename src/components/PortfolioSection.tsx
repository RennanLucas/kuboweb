import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import BlurImage from "@/components/ui/BlurImage";

const categories = ["Todos", "Site Institucional", "Landing Page", "E-commerce"];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered =
    activeFilter === "Todos"
      ? projects.slice(0, 6)
      : projects.filter((p) => p.category === activeFilter).slice(0, 6);

  return (
    <section id="cases" className="py-28 md:py-40 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Cases Reais
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="section-title"
          >
            Projetos que geram <span className="text-gradient-hero">resultados comprovados</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle max-w-xl"
          >
            Confira algumas das soluções sob medida que transformaram a presença online de nossos clientes.
          </motion.p>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                    : "bg-card/50 text-muted-foreground border-border/40 hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
              >
                <Link to={`/portfolio/${project.slug}`} className="block group h-full">
                  <article className="card-premium overflow-hidden flex flex-col h-full cursor-pointer relative hover:border-primary/40 transition-all">
                    {/* Image */}
                    <div className="relative overflow-hidden h-48 sm:h-52">
                      <BlurImage
                        src={project.image}
                        alt={`Projeto ${project.title}`}
                        containerClassName="w-full h-full"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        loading="lazy"
                        width={600}
                        height={400}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-background/90 backdrop-blur-md text-foreground border border-border/30 text-[10px] font-bold uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow gap-3">
                      <h3 className="font-heading font-bold text-foreground text-base group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-xl px-3 py-2 mt-auto">
                        <TrendingUp className="w-4 h-4 text-primary shrink-0" />
                        <p className="text-xs font-bold text-primary leading-tight">
                          {project.result}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border/20 text-xs font-semibold text-primary">
                        <span>Ver Estudo de Caso</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline group"
          >
            Ver todos os 10+ cases de sucesso
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(PortfolioSection);
