import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Target, Heart, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

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
    <Header />
    <div className="pt-24 md:pt-32" />

    <section className="px-4 pb-20 md:pb-28">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-14 md:mb-20 space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="section-label justify-center"
          >
            Sobre nós
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="section-title"
          >
            Quem é a KuboWeb
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="section-subtitle max-w-2xl"
          >
            Somos uma empresa especializada em criação de sites profissionais, focada em ajudar pequenas e médias empresas a conquistarem presença digital de verdade — com design moderno, performance e foco em conversão.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="card-premium p-7 md:p-10 mb-14"
        >
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">Nossa missão</h2>
          <p className="text-muted-foreground leading-relaxed">
            Democratizar o acesso a sites profissionais de alta qualidade. Acreditamos que todo negócio, independente do tamanho, merece uma presença digital que transmita credibilidade e gere resultados. Combinamos design moderno com estratégias de conversão para criar sites que realmente funcionam.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="mb-14"
        >
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-8 text-center">
            Nossos valores
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card-premium p-6 md:p-7 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1.5">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="text-center space-y-5"
        >
          <p className="text-lg text-foreground font-heading font-semibold">Quer conhecer nosso trabalho?</p>
          <Button variant="whatsapp" size="xl" asChild>
            <a
              href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20empresa.%20Pode%20me%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>

    <Footer />
    <FloatingWhatsApp />
  </main>
);

export default Sobre;
