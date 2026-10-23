import { memo, type ComponentType } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
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
  deliverables: { title: string; items: string[] }[];
  examples: { icon: IconType; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  finalCta: { title: string; description: string; whatsappHref: string };
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};

const ServicePageTemplate = ({ content }: { content: ServicePageContent }) => {
  return (
    <main className="min-h-screen bg-background">
      <SEO title={content.seo.title} description={content.seo.description} path={content.seo.path} />
      <Header />

      <section className="relative isolate overflow-hidden bg-[#07101f] px-4 pb-0 pt-36 text-white md:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-0 h-[650px] w-[650px] rounded-full bg-blue-600/18 blur-[190px]" />
          <div className="absolute -right-48 top-[-140px] h-[760px] w-[760px] rounded-full bg-cyan-400/8 blur-[230px]" />
          <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        </div>

        <div className="container mx-auto max-w-7xl">
          <nav aria-label="breadcrumb" className="mb-9 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/32">
            <Link to="/" className="transition-colors hover:text-white">Início</Link>
            <span>/</span>
            <Link to="/servicos" className="transition-colors hover:text-white">Serviços</Link>
            <span>/</span>
            <span className="text-white/60">{content.hero.badge}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#78a9ff]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/42">{content.hero.badge} · Kubo Web</span>
              </div>

              <h1 className="max-w-4xl text-[3.1rem] font-heading font-semibold leading-[0.92] tracking-[-0.058em] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
                {content.hero.title}
                {content.hero.highlight && <span className="block text-[#78a9ff]">{content.hero.highlight}</span>}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/52 md:text-lg">
                {content.hero.subtitle}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="xl" className="rounded-full bg-white px-7 text-[#07101f] hover:bg-white/90">
                  <a href={content.hero.whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Conversar sobre o projeto
                  </a>
                </Button>
                <Button asChild size="xl" variant="outline" className="rounded-full border-white/18 bg-white/[0.04] px-7 text-white hover:bg-white/[0.08] hover:text-white">
                  <a href="#processo">
                    Ver processo
                    <ArrowDownRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-10 -z-10 rounded-full bg-blue-500/10 blur-[90px]" />
              <div className="overflow-hidden rounded-[32px] border border-white/14 bg-white/[0.06] p-3 shadow-[0_35px_100px_rgba(0,0,0,.45)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-[24px] bg-white">
                  <div className="flex items-center gap-2 border-b border-black/8 px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-black/12" />
                    <span className="h-2 w-2 rounded-full bg-black/12" />
                    <span className="h-2 w-2 rounded-full bg-black/12" />
                    <span className="ml-auto rounded-full bg-black/[0.04] px-3 py-1 text-[9px] font-medium text-black/40">kuboweb.com.br</span>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#eef1f5]">
                    <img
                      src={content.hero.image}
                      alt={content.hero.imageAlt}
                      width={1280}
                      height={960}
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 border-t border-white/10 py-5 md:mt-24">
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/36">
              <span>Strategy</span><span className="h-1 w-1 rounded-full bg-[#78a9ff]" />
              <span>UX/UI</span><span className="h-1 w-1 rounded-full bg-[#78a9ff]" />
              <span>Development</span><span className="h-1 w-1 rounded-full bg-[#78a9ff]" />
              <span>Launch</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5f7] px-4 py-24 md:py-36">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end md:mb-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">Why it matters</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-heading font-semibold leading-[0.97] tracking-[-0.05em] text-foreground md:text-6xl">
                O serviço precisa resolver um problema real do negócio.
              </h2>
            </div>
            <p className="max-w-[430px] text-base leading-8 text-muted-foreground lg:justify-self-end">
              A estrutura é definida para comunicar melhor, reduzir atrito e dar ao visitante um próximo passo claro.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.benefits.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.05, duration: 0.48 }}
                className="rounded-[28px] border border-border/70 bg-white p-6 md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] font-semibold text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="mt-12 text-xl font-heading font-semibold tracking-[-0.03em] text-foreground md:text-2xl">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="processo" className="px-4 py-24 md:py-36">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">Studio workflow</p>
              <h2 className="mt-5 text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-6xl">
                Do briefing ao projeto publicado.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">
                Cada etapa tem uma função clara para evitar decisões soltas e retrabalho desnecessário.
              </p>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-border/70 bg-white shadow-[0_30px_90px_rgba(15,23,42,.05)]">
              {content.process.map((step, index) => (
                <article key={step.title} className={`grid gap-5 p-7 md:grid-cols-[0.16fr_0.84fr] md:p-9 ${index !== content.process.length - 1 ? "border-b border-border/70" : ""}`}>
                  <div className="flex items-start justify-between md:block">
                    <span className="text-xs font-semibold text-primary">0{index + 1}</span>
                    {index !== content.process.length - 1 && <ArrowDownRight className="mt-7 hidden h-4 w-4 text-muted-foreground md:block" />}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold tracking-[-0.035em] text-foreground">{step.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-[15px]">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07101f] px-4 py-24 text-white md:py-36">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#78a9ff]">Scope</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-heading font-semibold leading-[0.97] tracking-[-0.05em] md:text-6xl">
                O que pode entrar no projeto.
              </h2>
            </div>
            <p className="max-w-[430px] text-base leading-8 text-white/45 lg:justify-self-end">
              O escopo final é fechado de acordo com a necessidade do negócio. Os itens abaixo mostram as frentes que podem compor a entrega.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.deliverables.map((group, index) => (
              <article key={group.title} className="rounded-[28px] border border-white/10 bg-white/[0.045] p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">0{index + 1}</span>
                  <ArrowUpRight className="h-4 w-4 text-white/30" />
                </div>
                <h3 className="mt-10 text-xl font-heading font-semibold tracking-[-0.03em] text-white md:text-2xl">{group.title}</h3>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/52">
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#78a9ff]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5f7] px-4 py-24 md:py-36">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">Best fit</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-6xl">
              Para quem esse serviço faz sentido.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.examples.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-[28px] border border-border/70 bg-white p-7 md:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-9 text-2xl font-heading font-semibold tracking-[-0.035em] text-foreground">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:py-36">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">FAQ</p>
            <h2 className="mt-5 text-4xl font-heading font-semibold tracking-[-0.045em] text-foreground md:text-5xl">Perguntas sobre o serviço.</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {content.faq.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`} className="rounded-2xl border border-border/70 bg-white px-5 md:px-6">
                <AccordionTrigger className="py-5 text-left font-heading font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-7 text-muted-foreground">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="px-4 pb-24 md:pb-36">
        <div className="container mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[38px] bg-[#2458d8] p-8 text-white md:p-12 lg:p-14">
            <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/10 blur-[100px]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/55">Next step</p>
                <h2 className="mt-5 max-w-4xl text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">{content.finalCta.title}</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/66">{content.finalCta.description}</p>
              </div>
              <Button asChild size="xl" className="rounded-full bg-white px-7 text-[#2458d8] hover:bg-white/90">
                <a href={content.finalCta.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Iniciar conversa
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default memo(ServicePageTemplate);
