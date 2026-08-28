import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import { MessageCircle, Mail, MapPin, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const Contato = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO title="Contato" description="Entre em contato com a Kubo Web. WhatsApp, e-mail ou Instagram. Orçamento gratuito e resposta rápida para seu projeto web." path="/contato" />
      <Header />
      <div className="pt-20" />

      <section className="py-24 px-4">
        <div className="mx-auto w-full max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium text-sm uppercase tracking-wider"
            >
              Contato
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground"
            >
              Vamos conversar sobre seu projeto
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-muted-foreground max-w-lg mx-auto"
            >
              Entre em contato e receba um orçamento personalizado para o seu negócio.
            </motion.p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 w-full"
            >
              <div className="space-y-6">
                <a
                  href="https://wa.me/5511932197334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium w-full flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 p-6 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">+55 11 93219-7334</p>
                    <p className="text-primary text-sm mt-2 group-hover:underline">Enviar mensagem →</p>
                  </div>
                </a>

                <a
                  href="mailto:contato.kuboweb@gmail.com"
                  className="card-premium w-full flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 p-6 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">E-mail</h3>
                    <p className="text-muted-foreground text-sm">contato.kuboweb@gmail.com</p>
                    <p className="text-primary text-sm mt-2 group-hover:underline">Enviar e-mail →</p>
                  </div>
                </a>

                <div className="card-premium w-full flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Localização</h3>
                    <p className="text-muted-foreground text-sm">São Paulo, SP – Brasil</p>
                    <p className="text-muted-foreground text-sm mt-1">Atendimento 100% online</p>
                  </div>
                </div>

                <a
                  href="https://instagram.com/kuboweb_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium w-full flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 p-6 hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">Instagram</h3>
                    <p className="text-muted-foreground text-sm">@kuboweb_</p>
                    <p className="text-primary text-sm mt-2 group-hover:underline">Seguir no Instagram →</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-premium w-full p-8 flex flex-col items-center justify-center text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Send className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Solicite seu orçamento
              </h3>
              <p className="text-muted-foreground">
                A forma mais rápida de começar é pelo WhatsApp. Nossa equipe responde em poucos minutos!
              </p>
              <Button variant="whatsapp" size="xl" asChild>
                <a href="https://wa.me/5511932197334" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">
                Consultoria sem custo · Retorno em até 1 hora útil
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Contato;
