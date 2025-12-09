import { CheckCircle } from "lucide-react";

const highlights = [
  "Ajuda empreendedores e negócios locais a terem presença digital profissional",
  "Explica tudo de forma simples",
  "Monta o site com foco em conversão",
  "Acompanha o cliente desde o início até a entrega",
  "Atendimento personalizado",
];

const AboutSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar / Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-gold/10 rounded-full blur-3xl" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-gold/50 bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-gold-lg">
                <span className="text-7xl md:text-8xl font-serif font-bold text-gold">
                  R
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className="text-gold font-medium tracking-wider uppercase text-sm">
                Sobre
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
                Quem é o <span className="text-gradient-gold">Rennan</span>?
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Profissional especializado em montar sites profissionais para empresas e autônomos.
            </p>

            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
