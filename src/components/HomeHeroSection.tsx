import { memo } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe2,
  MessageCircle,
  Search,
  ShoppingCart,
  Smartphone,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20quero%20entender%20qual%20site%20%C3%A9%20ideal%20para%20o%20meu%20neg%C3%B3cio.%20Pode%20me%20ajudar%3F";

const services = [
  {
    icon: Globe2,
    title: "Site Institucional",
    description: "Credibilidade, conteúdo e estrutura para apresentar sua empresa.",
    href: "/servicos/sites-institucionais",
  },
  {
    icon: FileText,
    title: "Landing Page",
    description: "Página objetiva para campanhas, ofertas e captação de contatos.",
    href: "/servicos/landing-pages",
  },
  {
    icon: ShoppingCart,
    title: "Loja Virtual",
    description: "Estrutura para apresentar produtos e vender online com mais profissionalismo.",
    href: "/servicos/loja-virtual",
  },
];

const trustItems = [
  { icon: Smartphone, text: "Responsivo no celular" },
  { icon: Search, text: "Estrutura preparada para SEO" },
  { icon: Zap, text: "Foco em performance" },
];

const HomeHeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.06] via-background to-background" />
      <div className="absolute -right-40 top-16 h-[520px] w-[520px] rounded-full bg-primary/[0.08] blur-[140px]" />
      <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-primary/[0.05] blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
            >
              Criação de sites profissionais
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.55rem]"
            >
              Criação de sites profissionais que transformam visitas em clientes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.45 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Sites institucionais, landing pages e lojas virtuais com design profissional,
              boa experiência no celular, performance e estrutura preparada para o Google.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.45 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button variant="whatsapp" size="xl" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Solicitar orçamento
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/portfolio">
                  Ver portfólio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.5 }}
              className="mt-7 flex flex-col gap-2.5 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-5"
            >
              {trustItems.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  <Icon className="hidden h-3.5 w-3.5 text-primary/70 sm:block" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/[0.07] blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/90 p-5 shadow-2xl shadow-primary/[0.08] backdrop-blur-xl md:p-7">
              <div className="mb-6 flex items-center justify-between border-b border-border/40 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Escolha a estrutura ideal
                  </p>
                  <h2 className="mt-1.5 font-heading text-xl font-bold text-foreground">
                    Um site para cada objetivo
                  </h2>
                </div>
                <div className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 sm:flex">
                  <Globe2 className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="space-y-3">
                {services.map(({ icon: Icon, title, description, href }, index) => (
                  <Link
                    key={title}
                    to={href}
                    className="group flex items-start gap-4 rounded-2xl border border-border/40 bg-background/70 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md"
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-heading font-semibold text-foreground">{title}</h3>
                        <span className="text-xs font-semibold text-primary">0{index + 1}</span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-primary/15 bg-primary/[0.06] p-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Não sabe qual opção faz mais sentido? Conte seu objetivo e a Kubo Web indica a
                  estrutura mais adequada antes de iniciar o projeto.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(HomeHeroSection);
