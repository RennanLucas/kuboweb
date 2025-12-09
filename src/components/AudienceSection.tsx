import { UserCheck, Store, Building2, Globe, RefreshCw, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "Autônomos",
    description: "Psicólogos, dentistas, advogados etc.",
  },
  {
    icon: Store,
    title: "Pequenos negócios",
    description: "Empresas que estão começando",
  },
  {
    icon: Building2,
    title: "Lojas físicas",
    description: "Comércios locais que querem expandir",
  },
  {
    icon: UserCheck,
    title: "Empresas que querem um site moderno",
    description: "Atualizar a presença digital",
  },
  {
    icon: Globe,
    title: "Quem não tem site",
    description: "Primeira presença online",
  },
  {
    icon: RefreshCw,
    title: "Quem tem site antigo",
    description: "Modernizar e atualizar",
  },
];

const AudienceSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-gold font-medium tracking-wider uppercase text-sm">
            Público ideal
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Para quem é o <span className="text-gradient-gold">serviço</span>?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-gold flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
