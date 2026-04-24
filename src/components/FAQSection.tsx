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
    question: "O site funciona no celular?",
    answer:
      "Sim, 100%. Todos os sites são desenvolvidos com abordagem mobile-first, ou seja, pensados primeiro para o celular e adaptados para tablet e desktop. Você terá uma experiência impecável em qualquer tela — algo essencial, já que mais de 70% dos acessos hoje vêm de dispositivos móveis.",
  },
  {
    question: "Preciso saber de tecnologia?",
    answer:
      "Não precisa saber nada de tecnologia. Eu cuido de absolutamente tudo: design, desenvolvimento, hospedagem, domínio e publicação. Você só precisa enviar as informações do seu negócio (ou eu te ajudo a estruturar) e acompanhar a evolução pelo WhatsApp. É um processo simples, direto e sem complicação técnica.",
  },
  {
    question: "Você coloca o site no ar pra mim?",
    answer:
      "Sim, eu cuido de tudo: registro de domínio (caso ainda não tenha), configuração da hospedagem, publicação e ajustes finais para garantir que o site esteja online, rápido e seguro. Você recebe o site pronto, funcionando e pronto para receber visitas.",
  },
  {
    question: "Quanto custa criar um site profissional?",
    answer:
      "Google Ads a partir de R$ 250/mês + verba de anúncios, Landing Pages a partir de R$ 697, Sites Institucionais a partir de R$ 997 e Lojas Virtuais a partir de R$ 1.497. Envie uma mensagem no WhatsApp para um orçamento personalizado.",
  },
  {
    question: "Em quanto tempo o site fica pronto?",
    answer:
      "Landing Pages são entregues em 5 a 10 dias úteis. Sites Institucionais e Lojas Virtuais têm prazo de 7 a 15 dias úteis. Campanhas de Google Ads ficam prontas em 3 a 5 dias úteis. O prazo exato depende da complexidade e dos materiais fornecidos.",
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
      "Design personalizado, desenvolvimento responsivo, otimização básica para SEO e integração com WhatsApp.\n\nO suporte é oferecido durante todo o processo de criação do site.\n\nApós a entrega, a manutenção é opcional e custa R$ 70 por mês, incluindo hospedagem, backups, atualizações de segurança e suporte via WhatsApp.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 px-4 bg-card/20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-14 md:mb-20 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-label justify-center"
          >
            Dúvidas
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="section-title"
          >
            Perguntas frequentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="section-subtitle"
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
                className="card-premium border border-border/30 rounded-2xl px-6 data-[state=open]:border-primary/20 data-[state=open]:shadow-glow-sm transition-all"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary transition-colors py-5 hover:no-underline text-[15px]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm whitespace-pre-line">
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
          className="text-center mt-14"
        >
          <p className="text-muted-foreground mb-5 text-sm">Ainda tem dúvidas?</p>
          <Button variant="whatsapp" size="lg" asChild>
            <a href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20tenho%20uma%20d%C3%BAvida.%20Pode%20me%20ajudar%3F" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
