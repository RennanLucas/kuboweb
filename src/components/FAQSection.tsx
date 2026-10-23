import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { faqs } from "@/data/faqs";

const FAQSection = () => {
  return (
    <section id="faq" className="relative overflow-hidden bg-[#f2f3f5] px-4 py-24 md:py-40">
      <div className="pointer-events-none absolute right-[-12%] top-[12%] h-[560px] w-[560px] rounded-full bg-[#8db6ff]/18 blur-[170px]" />
      <div className="container relative mx-auto max-w-[1380px]">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.26em] text-[#2458d8]">
              <Sparkles className="h-3.5 w-3.5" />
              Before we start
            </div>
            <h2 className="mt-5 max-w-[620px] text-[3rem] font-heading font-semibold leading-[.91] tracking-[-0.067em] text-[#08111f] sm:text-6xl lg:text-[5.25rem]">
              Perguntas que fazem
              <span className="block text-[#08111f]/[0.32]">sentido antes de fechar.</span>
            </h2>
            <p className="mt-7 max-w-[500px] text-base leading-8 text-[#08111f]/[0.46] md:text-lg">
              Preço, prazo, conteúdo, publicação e manutenção precisam estar claros antes do projeto começar. Sem promessas vagas ou resposta escondida em letra pequena.
            </p>
            <a
              href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20tenho%20uma%20d%C3%BAvida."
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#08111f] px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#12213a]"
            >
              <MessageCircle className="h-4 w-4" />
              Tirar uma dúvida
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="mt-10 grid grid-cols-3 border-y border-black/[0.08] py-5">
              {["Escopo", "Processo", "Publicação"].map((label, index) => (
                <div key={label} className={index > 0 ? "border-l border-black/[0.08] pl-4" : ""}>
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#2458d8]">0{index + 1}</p>
                  <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#08111f]/[0.38]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <Accordion type="single" collapsible className="border-t border-black/[0.1]">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: Math.min(index * 0.035, .18), duration: 0.4 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="group border-b border-black/[0.1] data-[state=open]:bg-white/65"
                >
                  <AccordionTrigger className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-6 text-left hover:no-underline md:gap-6 md:py-7 [&>svg]:hidden">
                    <span className="text-[9px] font-semibold text-[#08111f]/[0.25]">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-lg font-heading font-semibold tracking-[-0.03em] text-[#08111f] md:text-xl lg:text-2xl">{faq.question}</span>
                    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/[0.1] transition-all group-data-[state=open]:rotate-45 group-data-[state=open]:bg-[#08111f] group-data-[state=open]:text-white">
                      <span className="absolute h-px w-3.5 bg-current" />
                      <span className="absolute h-3.5 w-px bg-current" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 pl-[42px] pr-5 text-sm leading-7 text-[#08111f]/[0.5] md:pl-[60px] md:pr-20 md:text-[15px] md:leading-8">
                    <div className="max-w-[760px]">{faq.answer}</div>
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
