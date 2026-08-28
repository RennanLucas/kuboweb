import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const faqs = [
  {
    question: "O site funciona perfeitamente no celular?",
    answer:
      "Sim, 100%. Todos os sites são desenvolvidos com abordagem mobile-first, ou seja, pensados primeiro para smartphones e adaptados para tablet e desktop. Sua empresa terá uma experiência impecável em qualquer tela — algo essencial, já que mais de 70% dos acessos hoje vêm de dispositivos móveis.",
  },
  {
    question: "Preciso ter conhecimento de tecnologia?",
    answer:
      "Não precisa saber nada de programação ou tecnologia. Cuidamos de absolutamente tudo: design, desenvolvimento, hospedagem, domínio e publicação. Você só precisa enviar as informações do seu negócio (ou nossa equipe te ajuda a estruturar) e acompanhar a evolução pelo WhatsApp. É um processo simples, direto e sem complicação técnica.",
  },
  {
    question: "A Kubo Web coloca o site no ar para mim?",
    answer:
      "Sim, cuidamos de toda a infraestrutura: registro de domínio (caso ainda não tenha), configuração de hospedagem, publicação, certificado SSL e ajustes finais para garantir que o site esteja online, ultra veloz e seguro. Você recebe o projeto 100% pronto para receber visitas e converter clientes.",
  },
  {
    question: "Quanto custa criar um site profissional?",
    answer:
      "Trabalhamos com opções transparentes e sob medida para cada estágio do seu negócio: Landing Pages a partir de R$ 560, Sites Institucionais a partir de R$ 760 e Lojas Virtuais a partir de R$ 1.200. Também oferecemos gestão de anúncios Google Ads e suporte contínuo. Fale conosco no WhatsApp para receber uma proposta personalizada.",
  },
  {
    question: "Em quanto tempo o site fica pronto?",
    answer:
      "Landing Pages são entregues em média de 5 a 10 dias úteis. Sites Institucionais e Lojas Virtuais têm prazo de 7 a 15 dias úteis. Campanhas de Google Ads ficam prontas em 3 a 5 dias úteis. O prazo exato é alinhado no início conforme a complexidade e materiais do projeto.",
  },
  {
    question: "O site aparece nas primeiras posições do Google?",
    answer:
      "Sim. Todos os nossos projetos são desenvolvidos com as melhores práticas de SEO on-page: indexação imediata, meta tags otimizadas, marcação estruturada Schema.org, sitemap XML e performance com notas máximas no PageSpeed.",
  },
  {
    question: "Preciso fornecer todo o conteúdo e imagens?",
    answer:
      "Se já tiver fotos e textos, ótimo! Caso não tenha, nossa equipe cuida da criação de copywriting persuasivo e seleção de imagens profissionais de alta qualidade para o seu nicho.",
  },
  {
    question: "O que está incluso e como funciona a manutenção?",
    answer:
      "Inclui design exclusivo, desenvolvimento responsivo, otimização de velocidade, SEO técnico, integração com WhatsApp e suporte durante todo o desenvolvimento.\n\nApós a entrega, oferecemos planos opcionais de manutenção mensal a partir de R$ 70/mês, cobrindo atualizações, backups automáticos, monitoramento de segurança e suporte prioritário.",
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
