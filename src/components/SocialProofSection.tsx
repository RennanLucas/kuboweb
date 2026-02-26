import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Entrega rápida e visual profissional. Exatamente o que eu precisava para minha clínica.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Ana C.",
    role: "Psicóloga",
  },
  {
    text: "O site ficou moderno e fácil de usar. Já recebi vários contatos pelo WhatsApp.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Marcos R.",
    role: "Lojista",
  },
  {
    text: "Atendimento excelente, explicou tudo com paciência. Super recomendo!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Camila P.",
    role: "Dentista",
  },
  {
    text: "Finalmente tenho um site que representa meu trabalho. Profissional demais!",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Juliana M.",
    role: "Arquiteta",
  },
  {
    text: "Processo simples e sem enrolação. O resultado superou minhas expectativas.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Roberto L.",
    role: "Advogado",
  },
  {
    text: "Meus clientes elogiam o site toda hora. Valeu muito o investimento.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Eduardo S.",
    role: "Consultor Financeiro",
  },
  {
    text: "Site lindo e funcional. Recebi muitos elogios dos meus pacientes!",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Fernanda T.",
    role: "Nutricionista",
  },
  {
    text: "Investimento que se pagou em menos de um mês com os novos clientes que chegaram.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Ricardo M.",
    role: "Personal Trainer",
  },
  {
    text: "Equipe super atenciosa e resultado impecável. Meu negócio cresceu muito depois do site.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Patrícia S.",
    role: "Designer de Interiores",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const SocialProofSection = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14 md:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label justify-center">
              Depoimentos
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-title"
          >
            O que nossos clientes dizem
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Veja o que nossos clientes falam sobre nosso trabalho.
          </motion.p>
        </div>

        <div className="flex justify-center gap-5 md:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[700px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={19} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
