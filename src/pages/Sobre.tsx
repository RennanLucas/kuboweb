import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { MessageCircle, Target, Heart, Lightbulb, Users, Star, Globe, Lock } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const values = [
  {
    icon: Target,
    title: "Foco em resultados",
    description: "Cada projeto é pensado para gerar retorno real: mais clientes, mais vendas, mais visibilidade.",
  },
  {
    icon: Heart,
    title: "Atendimento humanizado",
    description: "Tratamos cada cliente de forma única, com atenção aos detalhes e comunicação direta.",
  },
  {
    icon: Lightbulb,
    title: "Inovação acessível",
    description: "Tecnologia de ponta com preços justos, tornando o digital acessível para todos os negócios.",
  },
  {
    icon: Users,
    title: "Parceria de longo prazo",
    description: "Não entregamos apenas um site — construímos uma parceria para o crescimento contínuo do seu negócio.",
  },
];

const Sobre = () => (
  <main className="min-h-screen bg-background">
    <SEO title="Sobre Nós | Kubo Web" description="Conheça a Kubo Web: estúdio digital especializado em sites profissionais, landing pages, e-commerce e Google Ads. Atendimento 100% online." path="/sobre" />
    <Header />
    <div className="pt-24 md:pt-32" />

    {/* Hero / Introduction */}
    <section className="px-4 pb-16 md:pb-24">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left space-y-6"
          >
            <p className="text-accent-blue font-semibold text-xs uppercase tracking-[0.2em]">
              Sobre nós
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[1.1] tracking-tight">
              Quem é a <span className="text-accent-blue">KuboWeb</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
              Somos um estúdio digital especializado em criar sites profissionais, landing pages de alta conversão, lojas virtuais e campanhas de Google Ads. Atuamos 100% online, com processo enxuto e comunicação direta.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 w-full max-w-lg"
          >
            <div className="relative bg-card rounded-2xl border border-border/40 shadow-2xl overflow-hidden">
              <div className="bg-secondary/50 border-b border-border/30 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[hsl(0,65%,58%)]" />
                  <span className="w-3 h-3 rounded-full bg-[hsl(42,65%,55%)]" />
                  <span className="w-3 h-3 rounded-full bg-[hsl(130,45%,48%)]" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-background/80 border border-border/40 text-[10px] text-muted-foreground font-mono">
                    <Lock className="w-3 h-3 text-success" />
                    kuboweb.com.br
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent-blue/5 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-accent-blue" />
                </div>
                <div className="font-heading font-bold text-2xl text-foreground">KuboWeb</div>
                <p className="text-sm text-muted-foreground max-w-xs">Sites e estratégias digitais para negócios que querem crescer.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* What we do */}
    <section className="py-16 md:py-24 px-4 border-y border-border/30 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-accent-blue font-semibold text-xs uppercase tracking-[0.2em]">
              O que fazemos
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
              Cada site é um cubo sólido do seu negócio
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A KuboWeb constrói presenças digitais com a mesma lógica de um cubo: estrutura sólida, faces alinhadas e uma base estável para crescer.
              </p>
              <p>
                Unimos design premium, performance técnica e estratégia de conversão em um único bloco — feito sob medida para a sua marca, sem templates genéricos.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid gap-4"
          >
            {[
              { title: "Sites institucionais", desc: "Autoridade e credibilidade para o seu negócio." },
              { title: "Landing pages", desc: "Páginas focadas em converter visitantes em leads." },
              { title: "Lojas virtuais", desc: "E-commerce completo, do catálogo ao checkout." },
              { title: "Google Ads", desc: "Tráfego pago com foco em retorno sobre investimento." },
            ].map((item, i) => (
              <div key={item.title} className="card-premium p-5 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0 text-accent-blue font-heading font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <p className="text-accent-blue font-semibold text-xs uppercase tracking-[0.2em]">
            Nossos valores
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            O que nos guia
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {values.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="card-premium p-6 md:p-7 flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-accent-blue/10 border border-accent-blue/15 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-accent-blue" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1.5">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-24 px-4 border-t border-border/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-premium p-8 md:p-12 text-center space-y-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mx-auto">
            <Star className="w-7 h-7 text-accent-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            Quer conhecer nosso trabalho?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Vamos conversar sobre o seu projeto. Resposta em até 1 hora útil, sem compromisso.
          </p>
          <Button variant="dark" size="xl" asChild className="shadow-glow-sm">
            <a
              href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20empresa.%20Pode%20me%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">Consultoria sem custo · Retorno em até 1 hora útil</p>
        </motion.div>
      </div>
    </section>

    <Footer />
    <FloatingWhatsApp />
  </main>
);

export default Sobre;
