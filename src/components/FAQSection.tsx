import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { faqs } from "@/data/faqs";

const wa = "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20tenho%20uma%20d%C3%BAvida.";

const FAQSection = () => (
  <section id="faq" className="bg-white px-4 py-16 md:py-28 lg:py-40">
    <div className="container mx-auto max-w-[1460px]">
      <div className="grid gap-10 lg:grid-cols-[.42fr_.58fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[9px] font-semibold uppercase tracking-[.25em] text-[#2458d8]">Perguntas frequentes / 10</p>
          <h2 className="mt-4 text-[2.75rem] font-heading font-semibold leading-[.92] tracking-[-.065em] text-[#08111f] sm:text-[4rem] md:mt-5 md:text-[5.2rem] lg:text-7xl lg:leading-[.87]">
            Antes de começar,<br /><span className="text-black/[.22]">deixe tudo claro.</span>
          </h2>
          <p className="mt-5 max-w-[460px] text-[14px] leading-7 text-black/[.48] md:mt-7 md:text-base md:leading-8">
            Preço, prazo, publicação e manutenção precisam ser entendidos antes do projeto. Sem promessa vaga e sem letra pequena.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-2 border-b border-[#08111f]/25 pb-1 text-[13px] font-semibold text-[#08111f] transition-colors hover:border-[#2458d8] hover:text-[#2458d8] md:mt-8 md:text-sm">
            Ainda ficou uma dúvida? <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>

        <Accordion type="single" collapsible className="border-t border-black/[.11]">
          {faqs.map((faq, index) => (
            <motion.div key={faq.question} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }} transition={{ delay: Math.min(index * .02, .12), duration: .32 }}>
              <AccordionItem value={`item-${index}`} className="border-b border-black/[.1]">
                <AccordionTrigger className="group grid w-full grid-cols-[28px_1fr_auto] items-center gap-3 py-5 text-left hover:no-underline md:grid-cols-[34px_1fr_auto] md:gap-6 md:py-8 [&>svg]:hidden">
                  <span className="font-mono text-[8px] font-semibold text-black/[.25] md:text-[9px]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[1.05rem] font-heading font-semibold leading-[1.15] tracking-[-.03em] text-[#08111f] md:text-2xl">{faq.question}</span>
                  <span className="text-lg font-light text-black/30 transition-transform group-data-[state=open]:rotate-45 md:text-xl">+</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-[40px] pr-4 text-[13px] leading-6 text-black/[.5] md:pb-8 md:pl-[58px] md:pr-20 md:text-[15px] md:leading-8">
                  <div className="max-w-[720px]">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
