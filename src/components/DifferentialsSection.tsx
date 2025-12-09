import { Palette, Smartphone, MessageCircle, FileCheck, Headphones, MessageSquare } from "lucide-react";

const differentials = [
  {
    icon: Palette,
    title: "Montagem de sites profissionais sob medida",
  },
  {
    icon: FileCheck,
    title: "Layout moderno e limpo",
  },
  {
    icon: Smartphone,
    title: "Site rápido e responsivo (mobile-first)",
  },
  {
    icon: MessageCircle,
    title: "Integração com WhatsApp",
  },
  {
    icon: FileCheck,
    title: "Processo simples e sem burocracia",
  },
  {
    icon: Headphones,
    title: "Suporte inicial após entrega",
  },
  {
    icon: MessageSquare,
    title: "Comunicação direta e clara com o cliente",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-gold font-medium tracking-wider uppercase text-sm">
            Por que me escolher?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Diferenciais do meu trabalho
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-6 rounded-2xl bg-card border-2 border-gold/30 hover:border-gold transition-all duration-300 hover:shadow-gold"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
