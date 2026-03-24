import { memo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Eye, ShoppingCart, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    cliente: "Clínica Sorriso Perfeito",
    segmento: "Saúde — Odontologia",
    servico: "Site Institucional + Google Ads",
    antes: {
      volume: "~15 agendamentos/mês",
      presenca: "Só Instagram",
      investimento: "Nenhum em digital",
    },
    depois: {
      volume: "95 agendamentos/mês",
      presenca: "Site + Google + Instagram",
      investimento: "R$ 250/mês em ads",
    },
    metricas: [
      { icon: Users, label: "Agendamentos", valor: "+533%", cor: "text-primary" },
      { icon: TrendingUp, label: "Faturamento", valor: "+R$ 38k/mês", cor: "text-primary" },
      { icon: Eye, label: "Visibilidade", valor: "4x mais", cor: "text-primary" },
    ],
    depoimento: "Em 3 meses, minha agenda lotou. O site transmite a credibilidade que eu precisava para atrair pacientes novos.",
  },
  {
    cliente: "Stella Rose — Moda Feminina",
    segmento: "E-commerce — Moda",
    servico: "Loja Virtual completa",
    antes: {
      volume: "~20 vendas/mês",
      presenca: "Só redes sociais",
      investimento: "R$ 0 em estrutura digital",
    },
    depois: {
      volume: "R$ 47 mil em vendas no 1º mês",
      presenca: "Loja Virtual + Pix + Painel Admin",
      investimento: "R$ 1.497 (único)",
    },
    metricas: [
      { icon: ShoppingCart, label: "Vendas", valor: "R$ 47k", cor: "text-primary" },
      { icon: TrendingUp, label: "Ticket médio", valor: "+65%", cor: "text-primary" },
      { icon: Users, label: "Clientes novos", valor: "320+", cor: "text-primary" },
    ],
    depoimento: "A loja virtual profissional fez toda a diferença. Os clientes confiam mais e compram sem medo. Melhor investimento que fiz.",
  },
  {
    cliente: "Moreira & Associados Advocacia",
    segmento: "Advocacia — B2B",
    servico: "Site Institucional + SEO",
    antes: {
      volume: "~5 contatos/mês",
      presenca: "Só indicações presenciais",
      investimento: "R$ 0",
    },
    depois: {
      volume: "30+ contatos qualificados/mês",
      presenca: "Site + Blog + SEO jurídico",
      investimento: "R$ 997 (único)",
    },
    metricas: [
      { icon: Users, label: "Contatos orgânicos", valor: "+180%", cor: "text-primary" },
      { icon: TrendingUp, label: "Leads qualificados", valor: "6x mais", cor: "text-primary" },
      { icon: Eye, label: "Posição no Google", valor: "Top 5", cor: "text-primary" },
    ],
    depoimento: "Antes do site, recebíamos em média 5 contatos por mês via internet. Hoje são mais de 30, e a qualidade dos leads melhorou significativamente.",
  },
  {
    cliente: "Vertex Capital — Consultoria",
    segmento: "Finanças — B2B",
    servico: "Landing Page de alta conversão",
    antes: {
      volume: "~8 leads/mês",
      presenca: "Cartão de visita + LinkedIn",
      investimento: "R$ 0",
    },
    depois: {
      volume: "Taxa de conversão de 12,3%",
      presenca: "Landing Page + Calculadora + Vídeo",
      investimento: "R$ 697 (único)",
    },
    metricas: [
      { icon: TrendingUp, label: "Conversão", valor: "12,3%", cor: "text-primary" },
      { icon: Users, label: "Leads/mês", valor: "45+", cor: "text-primary" },
      { icon: Eye, label: "Tempo na página", valor: "4min30s", cor: "text-primary" },
    ],
    depoimento: "A landing page com calculadora de investimentos foi um diferencial. Os clientes já chegam prontos para contratar.",
  },
  {
    cliente: "AcademIA — Curso de IA",
    segmento: "Educação — Infoproduto",
    servico: "Landing Page de vendas",
    antes: {
      volume: "Lançamento do zero",
      presenca: "Apenas redes sociais",
      investimento: "R$ 0 em página própria",
    },
    depois: {
      volume: "+320 matrículas na 1ª semana",
      presenca: "Página de vendas + Checkout integrado",
      investimento: "R$ 697 (único)",
    },
    metricas: [
      { icon: ShoppingCart, label: "Matrículas", valor: "320+", cor: "text-primary" },
      { icon: TrendingUp, label: "Faturamento", valor: "R$ 96k", cor: "text-primary" },
      { icon: Users, label: "Taxa de conversão", valor: "8,7%", cor: "text-primary" },
    ],
    depoimento: "A página de vendas converteu muito acima da média do mercado. O checkout integrado eliminou a fricção e as matrículas dispararam.",
  },
];

const CasesSection = () => (
  <section className="py-24 md:py-36 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/20" />

    <div className="container mx-auto max-w-5xl relative z-10">
      <div className="text-center mb-12 md:mb-20 space-y-4">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label justify-center"
        >
          Cases de Sucesso
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Resultados reais de clientes reais
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Veja como nossos clientes transformaram seus negócios com presença digital profissional.
        </motion.p>
      </div>

      <div className="space-y-6 md:space-y-8">
        {cases.map((c, i) => (
          <motion.div
            key={c.cliente}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
            className="card-premium border-glow p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-primary/2" />
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">{c.cliente}</h3>
                  <p className="text-sm text-muted-foreground">{c.segmento} · {c.servico}</p>
                </div>
              </div>

              {/* Antes / Depois */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-destructive/5 border border-destructive/10 rounded-xl p-4">
                  <p className="text-xs font-bold text-destructive/80 uppercase tracking-wider mb-3">❌ Antes</p>
                  {Object.entries(c.antes).map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm py-1">
                      <span className="text-muted-foreground capitalize">{k === "agendamentos" ? "Volume" : k === "presenca" ? "Presença" : "Investimento"}</span>
                      <span className="text-foreground font-medium">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-primary/5 border border-primary/15 rounded-xl p-4">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">✅ Depois</p>
                  {Object.entries(c.depois).map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm py-1">
                      <span className="text-muted-foreground capitalize">{k === "agendamentos" ? "Volume" : k === "presenca" ? "Presença" : "Investimento"}</span>
                      <span className="text-foreground font-bold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Métricas */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {c.metricas.map((m) => (
                  <div key={m.label} className="bg-secondary/30 rounded-xl p-3 text-center border border-border/30">
                    <m.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                    <p className="text-lg md:text-xl font-heading font-bold text-primary">{m.valor}</p>
                    <p className="text-[10px] text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Depoimento */}
              <blockquote className="border-l-2 border-primary/30 pl-4 italic text-sm text-muted-foreground">
                "{c.depoimento}"
                <span className="block mt-1 not-italic font-medium text-foreground text-xs">— {c.cliente}</span>
              </blockquote>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button variant="whatsapp" size="lg" className="shadow-glow-sm" asChild>
          <a
            href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vi%20os%20cases%20no%20site%20e%20quero%20resultados%20assim%20para%20meu%20neg%C3%B3cio.%20Pode%20me%20ajudar%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5" />
            Quero resultados assim
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default memo(CasesSection);
