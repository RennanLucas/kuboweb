import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { MessageCircle, ExternalLink, Globe, ShoppingCart, FileText } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Site Institucional — Escritório de Advocacia",
    category: "Site Institucional",
    icon: Globe,
    description: "Site com múltiplas páginas, área de especialidades, equipe e formulário de contato integrado ao WhatsApp.",
    tags: ["Responsivo", "SEO", "WhatsApp"],
  },
  {
    title: "Landing Page — Consultoria Financeira",
    category: "Landing Page",
    icon: FileText,
    description: "Página de captura de alta conversão com depoimentos, FAQ e CTA direto para agendamento.",
    tags: ["Conversão", "Performance", "Design"],
  },
  {
    title: "Loja Virtual — Moda Feminina",
    category: "E-commerce",
    icon: ShoppingCart,
    description: "Loja completa com catálogo de produtos, carrinho, checkout e painel de gestão.",
    tags: ["E-commerce", "Pagamento", "Catálogo"],
  },
  {
    title: "Site Institucional — Clínica Odontológica",
    category: "Site Institucional",
    icon: Globe,
    description: "Site com galeria de antes e depois, perfil dos dentistas e agendamento online via WhatsApp.",
    tags: ["Galeria", "Agendamento", "SEO"],
  },
  {
    title: "Landing Page — Curso Online",
    category: "Landing Page",
    icon: FileText,
    description: "Página de vendas com vídeo, módulos do curso, depoimentos de alunos e checkout integrado.",
    tags: ["Vendas", "Vídeo", "Conversão"],
  },
  {
    title: "Site Institucional — Construtora",
    category: "Site Institucional",
    icon: Globe,
    description: "Site com portfólio de obras, linha do tempo da empresa e formulário de orçamento.",
    tags: ["Portfólio", "Institucional", "Responsivo"],
  },
];

const Portfolio = () => (
  <main className="min-h-screen bg-background">
    <Header />
    <div className="pt-24 md:pt-32" />

    <section className="px-4 pb-20 md:pb-28">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14 md:mb-20 space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="section-label justify-center"
          >
            Portfólio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="section-title"
          >
            Projetos que entregamos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="section-subtitle"
          >
            Conheça alguns dos sites que criamos para nossos clientes. Cada projeto é único e feito sob medida.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-14">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="card-premium p-6 flex flex-col group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                  <project.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-primary tracking-wide uppercase">
                  {project.category}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-foreground mb-2 text-[15px] leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-primary/8 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-center space-y-5"
        >
          <p className="text-lg text-foreground font-heading font-semibold">
            Quer um projeto como esses?
          </p>
          <Button variant="whatsapp" size="xl" asChild>
            <a
              href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vi%20o%20portf%C3%B3lio%20da%20KuboWeb%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.%20Pode%20me%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar orçamento
            </a>
          </Button>
        </motion.div>
      </div>
    </section>

    <Footer />
    <FloatingWhatsApp />
  </main>
);

export default Portfolio;
