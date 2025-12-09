import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Entrega rápida e visual perfeito.",
    name: "Ana",
    role: "Psicóloga",
  },
  {
    quote: "O site ficou profissional e fácil de usar.",
    name: "Marcos",
    role: "Lojista",
  },
  {
    quote: "Atendimento top, explicou tudo certinho.",
    name: "Eduardo",
    role: "Consultor",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-gold font-medium tracking-wider uppercase text-sm">
            Prova social
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            O que os clientes <span className="text-gradient-gold">dizem</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-gold"
            >
              <Quote className="w-10 h-10 text-gold/50 mb-6" />
              <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-bold text-lg">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
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

export default TestimonialsSection;
