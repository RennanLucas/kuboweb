import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, FileText, Target, Zap, TrendingUp, Palette } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const benefits = [
  { icon: Target, text: "Focada 100% em conversão e captação de leads" },
  { icon: Zap, text: "Carregamento ultra-rápido para não perder visitantes" },
  { icon: TrendingUp, text: "Estrutura persuasiva que guia o visitante até o contato" },
  { icon: MessageCircle, text: "Integração direta com WhatsApp para conversão imediata" },
];

const includes = [
  "Design profissional e persuasivo",
  "Página única otimizada para conversão",
  "Responsivo para celular, tablet e desktop",
  "Botão de WhatsApp integrado",
  "Formulário de contato",
  "Otimização para Google (SEO básico)",
  "Velocidade de carregamento otimizada",
  "Entrega rápida (até 7 dias úteis)",
];

const examples = [
  "Campanhas de Google Ads que precisam de uma página de destino eficiente",
  "Lançamento de novos serviços ou produtos",
  "Captação de leads para consultórios e clínicas",
  "Promoções e ofertas especiais com prazo limitado",
];

const LandingPages = () => (
  <main className="min-h-screen bg-background">
    <Header />
    <div className="pt-24 md:pt-32" />

    <section className="px-4 pb-20 md:pb-28">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-14 md:mb-20 space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto"
          >
            <FileText className="w-7 h-7 text-primary" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="section-title"
          >
            Landing Pages
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="section-subtitle"
          >
            Páginas de alta conversão focadas em um único objetivo: transformar visitantes em clientes. Ideal para campanhas de marketing e captação de leads.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-14"
        >
          {benefits.map(({ icon: Icon, text }) => (
            <div key={text} className="card-premium p-5 md:p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="card-premium p-7 md:p-10 mb-14"
        >
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-6">O que está incluído</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {includes.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="card-premium p-7 md:p-10 mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <Palette className="w-5 h-5 text-primary" />
            <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">Ideal para</h2>
          </div>
          <div className="space-y-3">
            {examples.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-center space-y-5"
        >
          <p className="text-lg text-foreground font-heading font-semibold">Pronto para criar sua landing page?</p>
          <Button variant="whatsapp" size="xl" asChild>
            <a href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20quero%20criar%20minha%20Landing%20Page.%20Pode%20me%20explicar%20como%20funciona%3F" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">Atendimento direto · Resposta rápida · Sem compromisso</p>
        </motion.div>
      </div>
    </section>

    <Footer />
    <FloatingWhatsApp />
  </main>
);

export default LandingPages;
