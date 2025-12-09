import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O site funciona no celular?",
    answer:
      "Sim! Todos os sites que desenvolvo são 100% responsivos, ou seja, funcionam perfeitamente em celulares, tablets e computadores. Na verdade, trabalho com a abordagem mobile-first, priorizando a experiência em dispositivos móveis.",
  },
  {
    question: "Preciso saber de tecnologia?",
    answer:
      "Não! Você não precisa entender nada de programação ou tecnologia. Eu cuido de toda a parte técnica e explico tudo de forma simples e clara. Meu objetivo é facilitar sua vida, não complicar.",
  },
  {
    question: "Como faço para começar?",
    answer:
      "É simples! Basta clicar no botão de WhatsApp aqui na página e me enviar uma mensagem. Vou te responder rapidamente e podemos conversar sobre o que você precisa.",
  },
  {
    question: "Você coloca o site no ar pra mim?",
    answer:
      "Sim! A entrega inclui colocar o site no ar, funcionando e pronto para você divulgar. Também ofereço suporte inicial para garantir que tudo esteja funcionando perfeitamente.",
  },
  {
    question: "Posso pedir alterações depois?",
    answer:
      "Durante o desenvolvimento, fazemos ajustes até você ficar satisfeito. Após a entrega, oferecemos suporte inicial. Para alterações futuras, podemos combinar conforme a necessidade.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-gold font-medium tracking-wider uppercase text-sm">
            Dúvidas frequentes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-2xl px-6 data-[state=open]:border-gold/50 data-[state=open]:shadow-gold transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-gold py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
