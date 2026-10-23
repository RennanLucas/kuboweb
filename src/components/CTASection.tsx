import { memo } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const CTASection = () => {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-[34px] bg-foreground px-6 py-10 text-background md:px-12 md:py-14"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
                Vamos conversar
              </p>
              <h2 className="max-w-3xl text-3xl font-heading font-bold leading-tight tracking-[-0.035em] md:text-5xl">
                Se o seu site não representa mais o nível do seu negócio, está na hora de mudar isso.
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-background/65">
                Conte o que você precisa. A Kubo Web avalia o projeto e explica a melhor estrutura antes de começar.
              </p>
            </div>

            <Button asChild variant="whatsapp" size="xl" className="rounded-full px-7 lg:mb-1">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(CTASection);
