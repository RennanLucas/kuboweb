import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, Building2, Globe, Users, BarChart3, Shield, Palette } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import heroImage from "@/assets/service-sites.jpg";

const benefits = [
  { icon: Globe, text: "Presença digital profissional 24 horas por dia" },
  { icon: Users, text: "Transmite credibilidade e confiança para seus clientes" },
  { icon: BarChart3, text: "Otimizado para aparecer no Google (SEO)" },
  { icon: Shield, text: "Design responsivo para todos os dispositivos" },
];

const includes = [
  "Página inicial com apresentação da empresa",
  "Página de serviços detalhada",
  "Página sobre a empresa (história, missão, valores)",
  "Página de contato com formulário e WhatsApp",
  "Design personalizado e moderno",
  "Otimização para Google (SEO básico)",
  "Responsivo para celular, tablet e desktop",
  "Integração com WhatsApp",
  "Domínio personalizado",
  "Suporte pós-entrega",
];

const examples = [
  "Escritórios de advocacia que precisam transmitir autoridade",
  "Clínicas e consultórios que querem atrair pacientes",
  "Empresas de serviços que precisam de uma vitrine profissional",
  "Consultores e coaches que querem fortalecer sua marca",
];

const SitesInstitucionais = () => (
  <main className="min-h-screen bg-background">
    <SEO title="Sites Institucionais" description="Criação de sites institucionais profissionais em São Paulo. Design moderno, SEO otimizado e responsivo para sua empresa." path="/servicos/sites-institucionais" />
    <Header />
    <div className="pt-24 md:pt-32" />

    <section className="px-4 pb-20 md:pb-28">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-14 md:mb-20 space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-md md:max-w-lg aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/20 border border-border/40 shadow-xl"
          >
            <img src={heroImage} alt="Site institucional profissional" width={1280} height={896} className="w-full h-full object-cover" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="section-title"
          >
            Sites Institucionais
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="section-subtitle"
          >
            Um site profissional com várias páginas que apresenta sua empresa, serviços e contatos — fortalecendo sua presença online e transmitindo credibilidade.
          </motion.p>
        </div>

        {/* Benefits */}
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

        {/* What's included */}
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

        {/* Examples */}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-center space-y-5"
        >
          <p className="text-lg text-foreground font-heading font-semibold">Pronto para ter seu site profissional?</p>
          <Button variant="whatsapp" size="xl" asChild>
            <a href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20quero%20criar%20um%20site%20institucional%20profissional.%20Pode%20me%20passar%20os%20pr%C3%B3ximos%20passos%3F" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Sim, quero meu site
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

export default SitesInstitucionais;
