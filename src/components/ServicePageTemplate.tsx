import { memo, type ComponentType } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GuaranteeBadge from "@/components/GuaranteeBadge";

type IconType = ComponentType<{ className?: string }>;

export interface ServicePageContent {
  seo: { title: string; description: string; path: string };
  hero: {
    badge: string;
    title: string;
    highlight?: string;
    subtitle: string;
    image: string;
    imageAlt: string;
    whatsappHref: string;
    quickFacts: { label: string; value: string }[];
  };
  benefits: { icon: IconType; title: string; text: string }[];
  process: { title: string; description: string }[];
  deliverables: {
    title: string;
    items: string[];
  }[];
  examples: { icon: IconType; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  finalCta: {
    title: string;
    description: string;
    whatsappHref: string;
  };
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const ServicePageTemplate = ({ content }: { content: ServicePageContent }) => {
  return (
    <main className="min-h-screen bg-background">
      <SEO title={content.seo.title} description={content.seo.description} path={content.seo.path} />
      <Header />

      {/* HERO SPLIT */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/[0.04] via-background to-background" />
        <div
          aria-hidden
          className="absolute top-24 -right-32 w-[520px] h-[520px] rounded-full bg-primary/10 blur-[120px] hidden md:block"
        />
        <div
          aria-hidden
          className="absolute -bottom-20 -left-32 w-[420px] h-[420px] rounded-full bg-primary/5 blur-[120px] hidden md:block"
        />

        <div className="container mx-auto max-w-6xl relative">
          {/* breadcrumb */}
          <nav
            aria-label="breadcrumb"
            className="mb-8 flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <Link to="/" className="hover:text-primary transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/servicos" className="hover:text-primary transition-colors">
              Serviços
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground font-medium">{content.seo.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/15 text-xs font-semibold text-primary uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                {content.hero.badge}
              </span>

              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
                {content.hero.title}
                {content.hero.highlight && (
                  <span className="block text-primary mt-1">{content.hero.highlight}</span>
                )}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {content.hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="whatsapp" size="lg" asChild className="shadow-glow-sm">
                  <a href={content.hero.whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Solicitar orçamento
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#processo">
                    Ver como funciona
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              <GuaranteeBadge className="mt-1" />

              {/* quick facts */}
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border/60 mt-8">
                {content.hero.quickFacts.map((fact) => {
                  const isPrice = fact.label.toLowerCase().includes("investimento") || fact.label.toLowerCase().includes("preço");
                  return (
                    <div key={fact.label} className={isPrice ? "bg-primary/5 border border-primary/15 rounded-xl p-2.5 -m-1" : ""}>
                      <dt className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                        {fact.label}
                      </dt>
                      <dd className={`text-lg md:text-xl font-heading font-bold ${isPrice ? "text-primary font-extrabold" : "text-foreground"}`}>
                        {fact.value}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/20 border border-border/40 shadow-2xl">
                <img
                  src={content.hero.image}
                  alt={content.hero.imageAlt}
                  width={1280}
                  height={960}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                aria-hidden
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-primary/10 border border-primary/20 backdrop-blur-sm hidden md:block"
              />
              <div
                aria-hidden
                className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-card border border-border shadow-lg hidden md:block"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 md:py-28 px-4 bg-card/40 border-y border-border/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14 space-y-3">
            <p className="text-primary font-bold tracking-wider uppercase text-sm">
              Por que investir
            </p>
            <h2 className="section-title">Resultados que fazem diferença no seu negócio</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {content.benefits.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-base text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section id="processo" className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14 space-y-3">
            <p className="text-primary font-bold tracking-wider uppercase text-sm">Nosso processo</p>
            <h2 className="section-title">Uma metodologia clara, do briefing à entrega</h2>
          </div>

          <ol className="relative border-l-2 border-dashed border-primary/20 ml-3 md:ml-6 space-y-10">
            {content.process.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="pl-8 md:pl-12 relative"
              >
                <span className="absolute -left-[17px] md:-left-[21px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-primary-foreground font-heading font-bold text-sm md:text-base flex items-center justify-center shadow-lg ring-4 ring-background">
                  {i + 1}
                </span>
                <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 md:py-28 px-4 bg-card/40 border-y border-border/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14 space-y-3">
            <p className="text-primary font-bold tracking-wider uppercase text-sm">
              O que você recebe
            </p>
            <h2 className="section-title">Tudo o que está incluso no projeto</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.deliverables.map((group) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="font-heading font-bold text-lg text-foreground mb-5 pb-4 border-b border-border">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES / IDEAL FOR */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14 space-y-3">
            <p className="text-primary font-bold tracking-wider uppercase text-sm">Ideal para</p>
            <h2 className="section-title">Quem se beneficia deste serviço</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {content.examples.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-5 p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1.5">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-4 bg-card/40 border-y border-border/60">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 space-y-3">
            <p className="text-primary font-bold tracking-wider uppercase text-sm">Dúvidas frequentes</p>
            <h2 className="section-title">Perguntas comuns sobre este serviço</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {content.faq.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={`item-${i}`}
                className="bg-card border border-border rounded-2xl px-5 md:px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-heading font-bold text-foreground hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center shadow-2xl"
          >
            <div
              aria-hidden
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary-foreground/10 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl"
            />

            <div className="relative space-y-6">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
                {content.finalCta.title}
              </h2>
              <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                {content.finalCta.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button variant="whatsapp" size="xl" asChild>
                  <a
                    href={content.finalCta.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
              <div className="flex justify-center pt-2">
                <GuaranteeBadge variant="inverted" />
              </div>
              <p className="text-xs text-primary-foreground/60 pt-1">
                Consultoria sem custo · Retorno em até 1 hora útil
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default memo(ServicePageTemplate);
