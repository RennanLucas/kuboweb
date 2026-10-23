import { memo } from "react";
import { ArrowRight, Check, ExternalLink, MessageCircle, MousePointer2, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.";

const highlights = ["Design sob medida", "Responsivo de verdade", "Foco em conversão"];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.22)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.22)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-2 text-xs font-semibold text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Sites profissionais para negócios que querem crescer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="max-w-3xl text-[2.65rem] font-heading font-bold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.1rem]"
            >
              Seu site precisa parecer tão profissional quanto o seu negócio.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              A Kubo Web cria sites, landing pages e lojas virtuais com visual atual, navegação clara e estrutura pensada para transformar visitas em contatos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild variant="whatsapp" size="xl" className="rounded-full px-7">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Pedir orçamento
                </a>
              </Button>
              <Button asChild variant="outline" size="xl" className="rounded-full border-border/80 bg-background/70 px-7">
                <Link to="/portfolio">
                  Ver trabalhos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2"
            >
              {highlights.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-primary/8 blur-3xl" />

            <div className="overflow-hidden rounded-[30px] border border-border/70 bg-card shadow-2xl shadow-primary/8">
              <div className="flex items-center gap-3 border-b border-border/60 px-5 py-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                </div>
                <div className="flex-1 rounded-full border border-border/60 bg-background px-4 py-2 text-center text-[11px] text-muted-foreground">
                  kuboweb.com.br
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="rounded-[24px] border border-border/70 bg-foreground px-6 py-8 text-background md:px-8 md:py-10">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-background/55">Estratégia + Design + Código</p>
                  <h2 className="max-w-md text-3xl font-heading font-bold leading-tight tracking-[-0.035em] md:text-4xl">
                    Uma presença digital que transmite valor antes mesmo do primeiro contato.
                  </h2>
                  <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-xs font-semibold text-foreground">
                    Projeto pensado para conversão
                    <MousePointer2 className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-background p-4">
                    <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Search className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">Estrutura clara</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Conteúdo organizado para o visitante entender rápido o que você oferece.</p>
                  </div>

                  <a
                    href="https://www.helenaavilapsi.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-border/70 bg-background p-4 transition-colors hover:border-primary/25"
                  >
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">Projeto publicado</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">Helena Ávila</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Veja um trabalho real da Kubo Web no ar.</p>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
