import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Site para Psicólogos",
    category: "Saúde Mental",
  },
  {
    title: "Site para Imobiliária",
    category: "Imóveis",
  },
  {
    title: "Landing Page para Lojas e Negócios Locais",
    category: "Comércio",
  },
  {
    title: "Site Institucional Profissional",
    category: "Corporativo",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-gold font-medium tracking-wider uppercase text-sm">
            Exemplos de projetos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            <span className="text-gradient-gold">Portfólio</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-gold/50 transition-all duration-300"
            >
              {/* Placeholder image area */}
              <div className="aspect-video bg-gradient-to-br from-primary/50 to-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-gold/50 text-6xl font-serif font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-gold text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-serif font-semibold text-foreground mt-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="goldOutline" size="lg">
            Ver mais projetos em breve
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
