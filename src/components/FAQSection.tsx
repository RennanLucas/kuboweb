import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { faqs } from "@/data/faqs";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20tenho%20uma%20d%C3%BAvida.";

const FAQSection = () => {
  return (
    <section id="faq" className="relative overflow-hidden bg-[#f5f6f8] px-4 py-24 md:py-36">
      <div className="pointer-events-none absolute right-[-18%] top-[8%] h-[620px] w-[620px] rounded-full bg-[#dfe8ff]/70 blur-[180px]" />
      <div className="container relative mx-auto max-w-[1380px]">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2458d8]">FAQ</p>
            <h2 className="mt-5 max-w-[560px] text-[3rem] font-heading font-semibold leading-[.92] tracking-[-0.065em] text-[#08111f] sm:text-6xl md:text-7xl">
              Antes de começar,
              <span className="block text-[#08111f]/[0.32]">vale deixar claro.</span>
            </h2>
            <p className="mt-6 max-w-[470px] text-base leading-8 text-[#08111f]/[0.46] md:text-lg">
              Escopo, prazo, publicação, manutenção e o que entra em cada projeto — sem letras pequenas e sem promessa vaga.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex h-[52px] items-center gap-2 rounded-full bg-[#08111f] px-6 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#10213a]">
              <MessageCircle className="h-4 w-4" /> Tirar uma dúvida
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <Accordion type="single" collapsible className="border-t border-black/[0.1]">
            {faqs.map((faq, index) => (
              <motion.div key={faq.question} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: index * 0.035, duration: 0.38 }}>
                <AccordionItem value={`item-${index}`} className="border-b border-black/[0.1] px-0 data-[state=open]:bg-white/55">
                  <AccordionTrigger className="group py-6 text-left hover:no-underline md:py-7">
                    <span className="grid w-full grid-cols-[42px_1fr] items-start gap-3 pr-4 md:grid-cols-[58px_1fr] md:gap-5">
                      <span className="pt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#2458d8]/70">0{index + 1}</span>
                      <span className="text-[17px] font-heading font-semibold leading-6 tracking-[-0.025em] text-[#08111f] transition-colors group-hover:text-[#2458d8] md:text-xl md:leading-7">{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 pl-[45px] pr-6 text-sm leading-7 text-[#08111f]/[0.48] md:pl-[63px] md:pr-10 md:text-[15px]">
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
