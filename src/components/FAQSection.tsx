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
    question: "O site funciona bem no celular?",
    answer:
      "Sim. Os projetos são responsivos e adaptados para celular, tablet e computador. A navegação mobile faz parte do desenvolvimento, não é um extra.",
  },
  {
    question: "Preciso entender de tecnologia para contratar?",
    answer:
      "Não. Você explica o seu negócio, objetivo e o que precisa comunicar. A parte técnica do desenvolvimento e da publicação fica com a Kubo Web.",
  },
  {
    question: "A Kubo Web também coloca o site no ar?",
    answer:
      "Sim. A publicação faz parte da entrega. Se você ainda não tiver domínio ou hospedagem, também podemos orientar a configuração necessária para o projeto.",
  },
  {
    question: "Quanto custa um projeto?",
    answer:
      "Landing Pages partem de R$ 697 e sites institucionais de R$ 1.497. A manutenção parte de R$ 70/mês. Loja virtual e Google Ads são avaliados conforme o escopo, porque podem variar bastante de um projeto para outro.",
  },
  {
    question: "Em quanto tempo o site fica pronto?",
    answer:
      "O prazo depende do tamanho do projeto, das integrações e do material disponível. Antes de começar, o prazo é combinado junto com o escopo para você saber exatamente o que será entregue.",
  },
  {
    question: "O site já vem preparado para o Google?",
    answer:
      "Os projetos recebem uma base de SEO técnico e on-page, como títulos, descrições, estrutura semântica e cuidados de performance. Isso ajuda os mecanismos de busca a entenderem o site, mas não existe promessa séria de posição específica no Google.",
  },
  {
    question: "Preciso fornecer textos e imagens?",
    answer:
      "O ideal é enviar as informações reais do negócio, serviços, contatos e materiais que você já possui. Se precisar, a Kubo Web pode ajudar a organizar o conteúdo e orientar a seleção das imagens.",
  },
  {
    question: "E depois que o site estiver publicado?",
    answer:
      "Você pode manter o projeto sem um plano mensal obrigatório ou contratar manutenção quando quiser acompanhamento contínuo. O plano parte de R$ 70/mês e o que está incluído é definido de forma clara antes da contratação.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-4xl">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div className="md:sticky md:top-28">
            <p className="section-label mb-4">Dúvidas</p>
            <h2 className="section-title">Perguntas antes de começar.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Sem letras pequenas ou promessas vagas. Aqui estão os pontos que normalmente surgem antes de fechar um projeto.
            </p>
            <Button variant="whatsapp" size="lg" asChild className="mt-7 rounded-full">
              <a
                href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20tenho%20uma%20d%C3%BAvida."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Tirar uma dúvida
              </a>
            </Button>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-2xl border border-border/70 bg-card px-5 data-[state=open]:border-primary/20"
                >
                  <AccordionTrigger className="py-5 text-left text-[15px] font-heading font-semibold text-foreground hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
