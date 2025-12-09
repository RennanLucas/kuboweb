import { MessageCircle, FileText, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Contato pelo WhatsApp",
    description: "Você explica o que precisa e tira dúvidas.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Planejamento do site",
    description: "Definimos páginas, seções e estilo.",
  },
  {
    icon: Code,
    number: "03",
    title: "Criação",
    description: "Desenvolvimento completo do site + ajustes.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Entrega + suporte inicial",
    description: "Colocamos no ar e você já pode divulgar.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-gold font-medium tracking-wider uppercase text-sm">
            Simples e direto
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Como funciona o <span className="text-gradient-gold">processo</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
              >
                <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-gold text-center">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-accent-foreground font-bold text-sm shadow-gold">
                    {step.number}
                  </div>

                  <div className="pt-4">
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                      <step.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
