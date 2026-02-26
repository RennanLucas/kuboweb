import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Quanto custa criar um site profissional?",
    answer:
      "Anúncios a partir de R$280, Landing Pages a partir de R$560, Sites Profissionais a partir de R$760 e Lojas Virtuais a partir de R$1.200. Envie uma mensagem no WhatsApp para um orçamento personalizado.",
  },
  {
    question: "Em quanto tempo o site fica pronto?",
    answer:
      "Sites e landing pages são entregues em até 7 dias úteis. Lojas virtuais têm prazo de até 14 dias úteis. O prazo exato depende da complexidade e dos materiais fornecidos.",
  },
  {
    question: "O site fica otimizado para celular?",
    answer:
      "Sim! Todos os sites são desenvolvidos com abordagem mobile-first, garantindo uma experiência perfeita em smartphones, tablets e desktops.",
  },
  {
    question: "O site aparece no Google?",
    answer:
      "Sim. Todos os projetos incluem SEO básico (títulos, meta descriptions, estrutura semântica, velocidade otimizada). Para resultados mais avançados, oferecemos consultoria de SEO como serviço adicional.",
  },
  {
    question: "Preciso fornecer conteúdo e imagens?",
    answer:
      "Idealmente sim, pois o conteúdo que melhor representa seu negócio é o seu. Mas posso ajudar na produção de textos e na seleção de imagens profissionais para complementar o projeto.",
  },
  {
    question: "O que está incluso no valor?",
    answer:
      "Design personalizado, desenvolvimento responsivo, otimização SEO, integração com WhatsApp, hospedagem e domínio orientados, e suporte pós-lançamento por 30 dias.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-primary font-medium text-sm uppercase tracking-wider"
          >
            Dúvidas
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground"
          >
            Perguntas frequentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-muted-foreground"
          >
            Tudo o que você precisa saber antes de contratar.
          </motion.p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="card-premium border border-border/50 rounded-2xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-glow-sm transition-all"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
          <Button variant="whatsapp" size="lg" asChild>
            <a href="https://wa.me/5511932197334" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Pergunte no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
