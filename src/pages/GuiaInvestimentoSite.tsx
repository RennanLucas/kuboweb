import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Palette, Search, Plug, Clock, Shield, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const variaveis = [
  {
    icon: Palette,
    titulo: "Design sob medida vs. template",
    texto:
      "Templates genéricos custam menos no curto prazo, mas entregam a mesma cara de mil outros sites. Um design feito do zero para a sua marca comunica posicionamento, gera confiança e converte mais — porque foi pensado para o seu público, não para o público de ninguém.",
  },
  {
    icon: Search,
    titulo: "Otimização para SEO",
    texto:
      "Um site bonito que não aparece no Google é vitrine fechada. SEO técnico (estrutura, performance, dados estruturados, semântica) entra desde o primeiro arquivo do projeto — ou não entra mais. Esse trabalho impacta diretamente o custo e o retorno de longo prazo.",
  },
  {
    icon: Plug,
    titulo: "Integrações e automações",
    texto:
      "WhatsApp, CRM, pagamentos, e-mail marketing, painel administrativo, área do cliente, blog, multi-idiomas. Cada integração adiciona complexidade técnica e escopo — e também valor real para o negócio. O custo varia conforme o que precisa conversar com o quê.",
  },
  {
    icon: Clock,
    titulo: "Prazo e profundidade",
    texto:
      "Um site entregue em 5 dias úteis é diferente de um projeto com pesquisa de marca, prototipagem, testes e revisões. Não existe certo ou errado — existe o que faz sentido para o seu momento. O prazo definido influencia diretamente o investimento.",
  },
  {
    icon: Shield,
    titulo: "Manutenção e evolução",
    texto:
      "Site profissional não termina no go-live. Atualizações de segurança, ajustes de conteúdo, monitoramento de performance e melhorias contínuas mantêm o site relevante. Considerar isso desde o início evita surpresas e protege o investimento.",
  },
];

const valorVsCusto = [
  {
    titulo: "Construtor genérico (Wix, Squarespace, etc.)",
    pros: ["Custo inicial baixo", "Setup rápido"],
    contras: [
      "Design padronizado, igual ao de concorrentes",
      "Limitações técnicas de SEO e performance",
      "Você não é dono do código — refém da plataforma",
      "Customizações complexas são impossíveis ou caras",
    ],
  },
  {
    titulo: "Freelancer pontual",
    pros: ["Atendimento direto", "Flexibilidade"],
    contras: [
      "Qualidade varia muito por profissional",
      "Suporte pós-entrega geralmente termina rápido",
      "Sem garantia de continuidade do projeto",
      "Raramente entrega estratégia + design + dev + SEO juntos",
    ],
  },
  {
    titulo: "Agência especializada (como a Kubo Web)",
    pros: [
      "Design exclusivo, alinhado ao posicionamento da marca",
      "SEO técnico desde a primeira linha de código",
      "Equipe multidisciplinar (estratégia, design, dev, ads)",
      "Suporte e evolução contínuos pós go-live",
      "Foco em conversão e ROI, não só em entrega visual",
    ],
    contras: ["Investimento maior no curto prazo"],
  },
];

const GuiaInvestimentoSite = () => {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Quanto custa um site profissional no Brasil? Guia completo de investimento",
    description:
      "Entenda as variáveis que definem o investimento em um site profissional: design sob medida, SEO, integrações, prazo e manutenção. Guia transparente da Kubo Web.",
    author: { "@type": "Organization", name: "Kubo Web" },
    publisher: {
      "@type": "Organization",
      name: "Kubo Web",
      logo: { "@type": "ImageObject", url: "https://www.kuboweb.com.br/favicon-192.png" },
    },
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    mainEntityOfPage: "https://www.kuboweb.com.br/guia/investimento-site-profissional",
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Quanto custa um site profissional? Guia de investimento"
        description="Guia completo para avaliar o investimento em um site profissional no Brasil: design, SEO, integrações, prazo e manutenção. Entenda valor vs. custo."
        path="/guia/investimento-site-profissional"
        jsonLd={articleJsonLd}
      />
      <Header />

      <PageHero
        title="Quanto custa um site profissional?"
        subtitle="Um guia honesto sobre as variáveis que definem o investimento em um site — e por que o preço mais barato raramente é o mais barato no longo prazo."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Guia de investimento" },
        ]}
      />

      <article className="px-4 pb-16">
        <div className="container mx-auto max-w-3xl space-y-16">
          {/* Intro */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-lg text-foreground/85 leading-relaxed">
              "Quanto custa um site?" é uma das perguntas mais frequentes que recebemos —
              e também uma das mais difíceis de responder em uma frase. Um site profissional
              não é um produto de prateleira com preço fixo: é uma ferramenta estratégica de
              negócio, e o investimento varia de acordo com o que ele precisa entregar.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed mt-4">
              Em vez de listar tabelas que enganam, este guia mostra <strong>as variáveis reais</strong>{" "}
              que definem o investimento — para que você converse com qualquer fornecedor
              (nós ou não) sabendo exatamente o que está comprando.
            </p>
          </motion.section>

          {/* Variáveis */}
          <section className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wide mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                As 5 variáveis que definem o preço
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                O que realmente impacta o investimento
              </h2>
            </div>

            <div className="space-y-6">
              {variaveis.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-card"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{v.titulo}</h3>
                    <p className="text-foreground/80 leading-relaxed">{v.texto}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Valor vs Custo */}
          <section className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wide mb-3">
                Valor vs. Custo
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Três caminhos para ter um site
              </h2>
              <p className="mt-3 text-foreground/75 leading-relaxed">
                Não existe escolha errada — existe escolha alinhada ou desalinhada ao
                momento do seu negócio. Veja o que cada caminho entrega:
              </p>
            </div>

            <div className="grid gap-6">
              {valorVsCusto.map((opt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="p-6 rounded-2xl border border-border/40 bg-card"
                >
                  <h3 className="text-lg font-bold text-foreground mb-4">{opt.titulo}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Pontos fortes</p>
                      <ul className="space-y-1.5">
                        {opt.pros.map((p, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Limitações</p>
                      <ul className="space-y-1.5">
                        {opt.contras.map((c, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-foreground/70">
                            <span className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground">—</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Como a Kubo Web cobra */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Como a Kubo Web define o investimento
            </h2>
            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-4">
              <p className="text-foreground/85 leading-relaxed">
                Não trabalhamos com tabela pública de preços — porque acreditamos que
                <strong> proposta honesta nasce de diagnóstico, não de catálogo</strong>.
                Cada projeto recebe um escopo personalizado baseado em:
              </p>
              <ul className="space-y-2">
                {[
                  "Objetivo de negócio (vender, captar leads, fortalecer marca)",
                  "Volume de conteúdo, páginas e integrações necessárias",
                  "Profundidade de design e prototipagem",
                  "Prazo desejado de entrega",
                  "Necessidade ou não de manutenção contínua",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground/80">
                    <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-foreground/85 leading-relaxed">
                Em 1 minuto, o diagnóstico gratuito te mostra qual solução faz sentido
                para o seu momento — e em seguida você recebe uma proposta clara,
                detalhada e sem letrinhas miúdas.
              </p>
            </div>
          </section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 py-8"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Pronto para entender o investimento do seu projeto?
            </h2>
            <p className="text-foreground/75 max-w-xl mx-auto">
              Faça o diagnóstico gratuito de 1 minuto e receba uma proposta personalizada
              para o seu negócio.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="xl" className="shadow-glow-sm">
                <Link to="/diagnostico">
                  Iniciar diagnóstico gratuito
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link to="/servicos">Ver nossos serviços</Link>
              </Button>
            </div>
          </motion.section>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default GuiaInvestimentoSite;
