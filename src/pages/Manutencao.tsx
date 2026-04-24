import { memo } from "react";
import { motion } from "framer-motion";
import { Check, Shield, Zap, RefreshCw, Headphones, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO from "@/components/SEO";

const benefits = [
  {
    icon: Shield,
    title: "Segurança garantida",
    description: "Atualizações de segurança, backups automáticos e monitoramento contínuo do seu site.",
  },
  {
    icon: Zap,
    title: "Performance otimizada",
    description: "Otimização de velocidade, cache e compressão de imagens para carregar mais rápido.",
  },
  {
    icon: RefreshCw,
    title: "Atualizações mensais",
    description: "Pequenas alterações de texto, imagens e conteúdo incluídas no plano.",
  },
  {
    icon: Headphones,
    title: "Suporte prioritário",
    description: "Atendimento rápido via WhatsApp para resolver qualquer problema do seu site.",
  },
];

const included = [
  "Hospedagem inclusa",
  "Certificado SSL (HTTPS)",
  "Backup semanal automático",
  "Atualizações de segurança",
  "Monitoramento de uptime 24/7",
  "Até 3 alterações de conteúdo/mês",
  "Otimização de velocidade",
  "Suporte via WhatsApp",
  "Relatório mensal simplificado",
  "Domínio personalizado",
];

const faqs = [
  {
    q: "O que está incluso na manutenção?",
    a: "Hospedagem, SSL, backups, atualizações de segurança, monitoramento 24/7, até 3 alterações de conteúdo por mês e suporte via WhatsApp.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim! Sem fidelidade ou multa. Você pode cancelar quando quiser com aviso de 30 dias.",
  },
  {
    q: "Alterações maiores estão incluídas?",
    a: "Pequenas alterações de texto e imagens sim. Para mudanças estruturais ou novas funcionalidades, fazemos um orçamento à parte.",
  },
  {
    q: "E se meu site sair do ar?",
    a: "Nosso monitoramento detecta quedas automaticamente e agimos rapidamente para restaurar. Garantimos 99.9% de uptime.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const Manutencao = () => (
  <div className="min-h-screen bg-background">
    <SEO title="Manutenção de Sites" description="Planos de manutenção de sites com hospedagem, SSL, backups e suporte. Mantenha seu site sempre atualizado e seguro com a Kubo Web." path="/manutencao" />
    <Header />

    {/* Hero */}
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px] hidden md:block" />

      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-label justify-center mb-4"
        >
          Plano de Manutenção
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight"
        >
          Seu site sempre{" "}
          <span className="text-gradient">no ar e atualizado</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          Deixe a parte técnica com a gente. Hospedagem, segurança, backups e suporte — tudo por um valor que cabe no seu bolso.
        </motion.p>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="card-premium border-glow max-w-md mx-auto p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4" />
          <div className="relative z-10">
            <p className="text-sm font-medium text-muted-foreground mb-2">Plano Mensal</p>
            <div className="flex items-baseline justify-center gap-1 mb-1">
              <span className="text-sm text-muted-foreground">R$</span>
              <span className="text-5xl md:text-6xl font-heading font-bold text-foreground">70</span>
              <span className="text-muted-foreground text-sm">/mês</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6">Sem fidelidade · Cancele quando quiser</p>

            <ul className="text-left space-y-3 mb-8">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="whatsapp" size="lg" className="w-full shadow-glow-sm" asChild>
              <a
                href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%20de%20manuten%C3%A7%C3%A3o%20mensal%20de%20R%2470.%20Pode%20me%20ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Contratar agora
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-12 md:mb-16"
        >
          Por que ter um plano de manutenção?
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-5 md:gap-6"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={itemVariants}
              className="card-premium p-6 md:p-7 group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 md:py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-12"
        >
          Dúvidas frequentes
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq) => (
            <motion.details
              key={faq.q}
              variants={itemVariants}
              className="card-premium p-5 md:p-6 group cursor-pointer"
            >
              <summary className="flex items-center justify-between font-heading font-semibold text-foreground text-sm md:text-base list-none">
                {faq.q}
                <ArrowRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0 ml-4" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA Final */}
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-premium border-glow p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-primary/3" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Pronto para despreocupar?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Contrate agora e deixe toda a parte técnica do seu site com quem entende. Foque no que importa: seu negócio.
            </p>
            <Button variant="whatsapp" size="lg" className="shadow-glow-sm" asChild>
              <a
                href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20quero%20contratar%20o%20plano%20de%20manuten%C3%A7%C3%A3o%20mensal.%20Pode%20me%20ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Sim, quero contratar agora
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">Resposta em até 1h · Sem compromisso · Sem fidelidade</p>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default memo(Manutencao);
