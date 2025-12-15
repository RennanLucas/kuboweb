import { Building2, Dumbbell, Stethoscope, Star, Quote } from "lucide-react";

const projects = [
  {
    title: "ImobiPrime",
    category: "Imobiliária",
    icon: Building2,
    description: "Landing page focada em captação de leads para imobiliária moderna.",
  },
  {
    title: "FitPro Studio",
    category: "Personal Trainer",
    icon: Dumbbell,
    description: "Site institucional para personal trainer com foco em conversão.",
  },
  {
    title: "Odonto Sorriso",
    category: "Clínica Odontológica",
    icon: Stethoscope,
    description: "Site completo para consultório com agendamento via WhatsApp.",
  },
];

const testimonials = [
  {
    text: "Entrega rápida e visual profissional. Exatamente o que eu precisava.",
    author: "Ana C.",
    role: "Psicóloga",
  },
  {
    text: "O site ficou moderno e fácil de usar. Já recebi contatos pelo WhatsApp.",
    author: "Marcos R.",
    role: "Lojista",
  },
];

const SocialProofSection = () => {
  return (
    <section id="portfolio" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium text-sm uppercase tracking-wider">
            Prova Social
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Projetos e resultados
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-premium group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary">
                    {project.category}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  Projeto demonstrativo
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-premium relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;