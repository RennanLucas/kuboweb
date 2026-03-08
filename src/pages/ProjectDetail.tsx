import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageCircle, CheckCircle2, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 text-center container mx-auto max-w-3xl px-4">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
            Projeto não encontrado
          </h1>
          <Button asChild variant="outline">
            <Link to="/portfolio">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao portfólio
            </Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  const details = project.details;

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 md:pt-32" />

      <section className="px-4 pb-20 md:pb-28">
        <div className="container mx-auto max-w-4xl">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao portfólio
            </Link>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden border border-border mb-8"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </motion.div>

          {/* Header info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-10"
          >
            <Badge
              variant="secondary"
              className="mb-4 bg-primary/10 text-primary border-primary/20"
            >
              {project.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.description}
            </p>

            {/* Result highlight */}
            <div className="mt-6 bg-primary/5 border border-primary/10 rounded-lg px-5 py-3 inline-block">
              <p className="text-sm font-semibold text-primary">
                📈 {project.result}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Detailed sections */}
          {details && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="space-y-10"
            >
              {/* Challenge */}
              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                  O Desafio
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {details.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Nossa Solução
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {details.solution}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-heading font-semibold text-foreground mb-4">
                  O que foi entregue
                </h2>
                <ul className="space-y-3">
                  {details.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              {details.testimonial && (
                <div className="bg-muted/30 border border-border rounded-xl p-6 md:p-8">
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <blockquote className="text-foreground italic leading-relaxed mb-4">
                    "{details.testimonial.text}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {details.testimonial.author}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {details.testimonial.role}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="mt-14 text-center space-y-5"
          >
            <p className="text-lg text-foreground font-heading font-semibold">
              Quer resultados como esses para o seu negócio?
            </p>
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vi%20o%20projeto%20da%20KuboWeb%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.%20Pode%20me%20ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar orçamento
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default ProjectDetail;
