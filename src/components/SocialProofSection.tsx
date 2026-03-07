import { memo } from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "A KuboWeb entregou um site que realmente representa minha marca. Os contatos pelo WhatsApp aumentaram significativamente desde o lançamento.",
    name: "Ana Costa",
    role: "Psicóloga Clínica",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    text: "Processo profissional do início ao fim. O site ficou moderno, rápido e meus pacientes elogiam constantemente a facilidade de navegação.",
    name: "Dr. Marcos Ribeiro",
    role: "Dentista",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    text: "Investimento que se pagou em menos de um mês. O site transmite a credibilidade que meu escritório precisava para atrair novos clientes.",
    name: "Roberto Lima",
    role: "Advogado",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    text: "Atendimento impecável e resultado acima das expectativas. Finalmente tenho um site à altura do meu trabalho como arquiteta.",
    name: "Juliana Melo",
    role: "Arquiteta",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    text: "A equipe da KuboWeb entendeu perfeitamente o que eu precisava. Meu e-commerce ficou bonito, funcional e fácil de gerenciar.",
    name: "Eduardo Santos",
    role: "Lojista",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    text: "Desde que lancei o site, recebi mais contatos do que em meses de indicação. A presença digital fez toda a diferença para o consultório.",
    name: "Fernanda Torres",
    role: "Nutricionista",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

const SocialProofSection = () => (
  <section id="depoimentos" className="py-24 md:py-32 px-4 bg-card/20">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-14 md:mb-20 space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-label justify-center"
        >
          Depoimentos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="section-title"
        >
          A opinião de quem confiou na KuboWeb
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="section-subtitle max-w-2xl"
        >
          Profissionais e empresas que transformaram sua presença digital com nossos serviços.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="card-premium p-6 md:p-7 flex flex-col"
          >
            <Quote className="w-8 h-8 text-primary/20 mb-4" />

            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-sm text-foreground leading-relaxed mb-6 flex-grow">
              "{testimonial.text}"
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-border/30">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default memo(SocialProofSection);
