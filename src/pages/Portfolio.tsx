import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, TrendingUp, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import SEO from "@/components/SEO";

const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-background bg-gradient-mesh bg-noise">
      <SEO title="Portfólio" description="Veja projetos reais de sites, landing pages e lojas virtuais criados pela Kubo Web. Resultados comprovados para negócios em São Paulo." path="/portfolio" />
      <Header />
      <div className="pt-24 md:pt-32" />

      <section className="px-4 pb-20 md:pb-28">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14 space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="section-label justify-center"
            >
              Portfólio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="section-title"
            >
              Projetos que geram resultados
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="section-subtitle max-w-2xl mx-auto"
            >
              Cada projeto nasce de um diagnóstico estratégico. Confira entregas
              recentes e os resultados que alcançamos juntos.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-primary/5 border border-primary/15 backdrop-blur-sm"
            >
              <span className="text-base">🔒</span>
              <p className="text-sm text-foreground/80 font-medium">
                Os nomes de empresas foram alterados para preservar a <span className="text-primary font-semibold">confidencialidade</span> dos nossos clientes.
              </p>
            </motion.div>
          </div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 border ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20"
                    : "bg-card/50 text-muted-foreground border-border/40 hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                >
                  <Link
                    to={`/portfolio/${project.slug}`}
                    className="block group"
                  >
                    <article className="card-premium overflow-hidden flex flex-col h-full cursor-pointer relative">
                      {/* Image container */}
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={`Projeto ${project.title}`}
                          className="w-full h-56 md:h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          loading="lazy"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-md text-foreground border border-border/30 text-[11px] font-semibold tracking-wide uppercase">
                            {project.category}
                          </span>
                        </div>

                        {/* Hover CTA */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold shadow-lg">
                            Ver projeto
                            <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow gap-4">
                        <div>
                          <h3 className="font-heading font-bold text-foreground text-lg mb-2 leading-snug group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                        </div>

                        {/* Result highlight */}
                        <div className="flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-xl px-4 py-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <TrendingUp className="w-4 h-4 text-primary" />
                          </div>
                          <p className="text-sm font-semibold text-primary leading-tight">
                            {project.result}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium border border-primary/15"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Bottom link */}
                        <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2.5 gap-1.5 transition-all duration-300 mt-1">
                          Ver detalhes do projeto
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="text-center"
          >
            <div className="card-premium p-8 md:p-12 max-w-2xl mx-auto space-y-5">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                Quer resultados como esses?
              </h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Fale conosco e descubra como podemos transformar a presença digital do seu negócio.
              </p>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vi%20o%20portf%C3%B3lio%20da%20KuboWeb%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.%20Pode%20me%20ajudar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Portfolio;
