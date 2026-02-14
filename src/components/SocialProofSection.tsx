import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Entrega rápida e visual profissional. Exatamente o que eu precisava para minha clínica.",
    author: "Ana C.",
    role: "Psicóloga",
  },
  {
    text: "O site ficou moderno e fácil de usar. Já recebi vários contatos pelo WhatsApp.",
    author: "Marcos R.",
    role: "Lojista",
  },
  {
    text: "Atendimento excelente, explicou tudo com paciência. Super recomendo!",
    author: "Eduardo S.",
    role: "Consultor Financeiro",
  },
  {
    text: "Finalmente tenho um site que representa meu trabalho. Profissional demais!",
    author: "Juliana M.",
    role: "Arquiteta",
  },
  {
    text: "Processo simples e sem enrolação. O resultado superou minhas expectativas.",
    author: "Roberto L.",
    role: "Advogado",
  },
  {
    text: "Meus clientes elogiam o site toda hora. Valeu muito o investimento.",
    author: "Camila P.",
    role: "Dentista",
  },
];

const SocialProofSection = () => {
  return (
    <section id="depoimentos" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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