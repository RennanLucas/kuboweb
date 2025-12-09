import { Shield, Users, Clock, Award, Search, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Mais credibilidade imediata",
    description: "Transmita profissionalismo desde o primeiro contato",
  },
  {
    icon: Search,
    title: "Mais clientes encontrando seu negócio",
    description: "Seja encontrado por quem procura seus serviços",
  },
  {
    icon: Award,
    title: "Apresentação profissional",
    description: "Mostre seu trabalho de forma organizada e elegante",
  },
  {
    icon: Clock,
    title: "Site funcionando 24 horas",
    description: "Seu negócio disponível a qualquer momento",
  },
  {
    icon: TrendingUp,
    title: "Diferencial perante concorrentes",
    description: "Destaque-se no mercado com presença digital",
  },
  {
    icon: Users,
    title: "Aumento de confiança do cliente",
    description: "Clientes confiam mais em quem tem site profissional",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-gold font-medium tracking-wider uppercase text-sm">
            Por que ter um site?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Benefícios de ter um{" "}
            <span className="text-gradient-gold">site profissional</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-gold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
