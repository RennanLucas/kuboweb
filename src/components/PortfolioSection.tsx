import { Building2, Dumbbell, Stethoscope, Check } from "lucide-react";

const projects = [
  {
    title: "ImobiPrime",
    subtitle: "Site para Imobiliária",
    category: "Imobiliário",
    icon: Building2,
    highlights: [
      "Seção de imóveis em destaque",
      "Botão de contato rápido via WhatsApp",
      "Design moderno com fotos grandes",
      "Estrutura focada em conversão",
      "Totalmente responsivo",
      "Área com depoimentos e diferenciais",
    ],
    description: "Landing page profissional criada para uma imobiliária moderna, focada em captação de clientes e apresentação de imóveis.",
  },
  {
    title: "FitPro Studio",
    subtitle: "Site para Personal Trainer",
    category: "Fitness",
    icon: Dumbbell,
    highlights: [
      "Apresentação profissional do treinador",
      "Seção de planos e modalidades",
      "Depoimentos de alunos",
      "Botão de matrícula / contato no WhatsApp",
      "Layout esportivo e chamativo",
      "Design 100% mobile-first",
    ],
    description: "Site institucional e de vendas feito para um personal trainer focado em treinos personalizados e consultoria fitness.",
  },
  {
    title: "Clínica Odonto Sorriso",
    subtitle: "Site para Dentista",
    category: "Saúde",
    icon: Stethoscope,
    highlights: [
      "Seção de tratamentos e procedimentos",
      "Galeria de antes e depois",
      "Integração com WhatsApp para agendamento",
      "Design limpo e elegante",
      "Estrutura profissional com várias páginas",
      "Focado em conversão e confiança",
    ],
    description: "Site institucional completo criado para um consultório odontológico, com foco em credibilidade e agendamentos.",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-gold font-medium tracking-wider uppercase text-sm">
            Projetos Demonstrativos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            <span className="text-gradient-gold">Portfólio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modelos profissionais criados para diferentes segmentos de mercado
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-gold/50 bg-card transition-all duration-500 hover:shadow-elegant"
              >
                {/* Header with icon */}
                <div className="aspect-video bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  <IconComponent className="w-16 h-16 text-gold/80 group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-4 right-4 bg-gold/20 text-gold text-xs font-medium px-3 py-1 rounded-full border border-gold/30">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-gold text-sm font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">
                      Destaques:
                    </p>
                    <ul className="space-y-1.5">
                      {project.highlights.slice(0, 4).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <span className="inline-block text-xs text-muted-foreground/70 bg-secondary px-3 py-1.5 rounded-full">
                      Projeto demonstrativo (modelo profissional)
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
