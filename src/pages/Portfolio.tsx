import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const projects = [
  {
    title: "Helena Ávila Psicoterapeuta",
    category: "Site institucional",
    description:
      "Site profissional para apresentação de serviços, construção de confiança e contato direto com pacientes.",
    url: "https://www.helenaavilapsi.com.br/",
    domain: "helenaavilapsi.com.br",
    tags: ["Responsivo", "Institucional", "Contato direto"],
  },
  {
    title: "Cristiano Ávila",
    category: "Site profissional",
    description:
      "Projeto responsivo com estrutura objetiva, identidade própria e navegação pensada para apresentar serviços com clareza.",
    url: "https://cristiano-avila-site.vercel.app/",
    domain: "cristiano-avila-site.vercel.app",
    tags: ["Responsivo", "Performance", "Design sob medida"],
  },
];

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vi%20os%20trabalhos%20da%20Kubo%20Web%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.";

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Portfólio | Kubo Web"
        description="Veja projetos publicados pela Kubo Web e abra os sites para conferir o trabalho real."
        path="/portfolio"
      />
      <Header />

      <section className="px-4 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 border-b border-border/70 pb-12 lg:grid-cols-[1fr_0.8fr] lg:items-end md:pb-16">
            <div>
              <p className="section-label mb-4">Portfólio</p>
              <h1 className="max-w-3xl text-4xl font-heading font-bold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl">
                Projetos publicados. Sem números inventados para impressionar.
              </h1>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:justify-self-end">
              Preferimos mostrar trabalhos que você pode abrir, navegar e avaliar por conta própria. Esta página reúne projetos reais publicados pela Kubo Web.
            </p>
          </div>

          <div className="grid gap-6 py-12 md:grid-cols-2 md:py-16">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="group overflow-hidden rounded-[30px] border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="border-b border-border/60 bg-background p-5 md:p-6">
                  <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-inner">
                    <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-border" />
                      <span className="h-2.5 w-2.5 rounded-full bg-border" />
                      <span className="h-2.5 w-2.5 rounded-full bg-border" />
                      <span className="ml-2 truncate text-[11px] text-muted-foreground">{project.domain}</span>
                    </div>
                    <div className="p-5 md:p-7">
                      <div className="mb-3 h-2.5 w-24 rounded-full bg-primary/20" />
                      <div className="mb-2 h-7 w-4/5 rounded-lg bg-foreground/90" />
                      <div className="mb-5 h-3 w-2/3 rounded-full bg-muted" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-xl bg-primary/8" />
                        <div className="h-16 rounded-xl bg-muted" />
                        <div className="h-16 rounded-xl bg-muted" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{project.category}</p>
                      <h2 className="text-2xl font-heading font-bold tracking-[-0.025em] text-foreground">{project.title}</h2>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-all group-hover:border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="leading-relaxed text-muted-foreground">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border/70 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary">
                    Abrir projeto publicado
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="rounded-[32px] border border-border/70 bg-foreground px-6 py-10 text-background md:px-10 md:py-12">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-background/55">Seu projeto pode ser o próximo</p>
                <h2 className="max-w-2xl text-3xl font-heading font-bold tracking-[-0.03em] md:text-4xl">
                  Quer um site que represente melhor a sua empresa?
                </h2>
              </div>
              <Button asChild variant="whatsapp" size="xl" className="rounded-full px-7">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Pedir orçamento
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Portfolio;
