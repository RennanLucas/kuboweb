import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import imgAdvocacia from "@/assets/portfolio/advocacia.jpg";
import imgClinica from "@/assets/portfolio/clinica.jpg";
import imgModa from "@/assets/portfolio/moda.jpg";
import imgFinanceira from "@/assets/portfolio/financeira.jpg";
import imgConstrutora from "@/assets/portfolio/construtora.jpg";
import imgCurso from "@/assets/portfolio/curso.jpg";

const projects = [
  {
    title: "Moreira & Associados Advocacia",
    category: "Site Institucional",
    image: imgAdvocacia,
    description:
      "Site completo para escritório de advocacia com páginas de especialidades, perfil da equipe, blog jurídico e formulário de contato integrado ao WhatsApp.",
    tags: ["Responsivo", "SEO Otimizado", "Blog", "WhatsApp"],
    result: "+180% de contatos orgânicos em 3 meses",
  },
  {
    title: "Clínica Sorriso Perfeito",
    category: "Site Institucional",
    image: imgClinica,
    description:
      "Site para clínica odontológica com galeria de casos, perfis dos dentistas, agendamento online e integração com Google Maps.",
    tags: ["Agendamento Online", "Galeria", "Google Maps"],
    result: "+95 agendamentos/mês via site",
  },
  {
    title: "Stella Rose — Moda Feminina",
    category: "E-commerce",
    image: imgModa,
    description:
      "Loja virtual completa com catálogo de mais de 500 produtos, filtros avançados, carrinho, checkout com Pix e cartão, e painel administrativo.",
    tags: ["E-commerce", "Pix", "Painel Admin", "Catálogo"],
    result: "R$ 47 mil em vendas no primeiro mês",
  },
  {
    title: "Vertex Capital — Consultoria",
    category: "Landing Page",
    image: imgFinanceira,
    description:
      "Landing page de alta conversão para consultoria financeira com calculadora de investimentos, depoimentos em vídeo e agendamento direto.",
    tags: ["Alta Conversão", "Calculadora", "Vídeo"],
    result: "Taxa de conversão de 12,3%",
  },
  {
    title: "MRK Engenharia & Construções",
    category: "Site Institucional",
    image: imgConstrutora,
    description:
      "Site institucional com portfólio de obras em galeria interativa, linha do tempo da empresa, certificações e formulário de orçamento.",
    tags: ["Portfólio", "Galeria", "Orçamento Online"],
    result: "+60% de solicitações de orçamento",
  },
  {
    title: "AcademIA — Curso de IA",
    category: "Landing Page",
    image: imgCurso,
    description:
      "Página de vendas para curso online com vídeo de apresentação, grade curricular, depoimentos de alunos e checkout integrado.",
    tags: ["Vendas", "Vídeo", "Checkout", "Depoimentos"],
    result: "+320 matrículas na primeira semana",
  },
];

const Portfolio = () => (
  <main className="min-h-screen bg-background">
    <Header />
    <div className="pt-24 md:pt-32" />

    <section className="px-4 pb-20 md:pb-28">
      <div className="container mx-auto max-w-6xl">
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
            Projetos que já entregamos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="section-subtitle max-w-2xl mx-auto"
          >
            Cada projeto é desenvolvido sob medida para o negócio do cliente.
            Confira alguns dos resultados que geramos.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="card-premium group overflow-hidden flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`Projeto ${project.title}`}
                  className="w-full h-52 md:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 backdrop-blur-sm text-foreground border-border text-xs"
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="bg-primary/5 border border-primary/10 rounded-lg px-3 py-2 mb-4">
                  <p className="text-xs font-semibold text-primary">
                    📈 {project.result}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center space-y-5"
        >
          <p className="text-lg text-foreground font-heading font-semibold">
            Quer resultados como esses para o seu negócio?
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
