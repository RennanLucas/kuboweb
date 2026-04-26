import { useLocation, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { MessageCircle, CheckCircle2, MapPin, Rocket, Search, ShoppingBag, Megaphone, ArrowRight, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getCidadeBySlug } from "@/data/cidades";

const servicos = [
  { icon: Rocket, title: "Sites Institucionais", desc: "Presença digital profissional para sua empresa" },
  { icon: Search, title: "Landing Pages", desc: "Páginas otimizadas para conversão e vendas" },
  { icon: ShoppingBag, title: "Lojas Virtuais", desc: "E-commerce completo e pronto para vender" },
  { icon: Megaphone, title: "Google Ads", desc: "Tráfego qualificado para o seu negócio" },
];

const beneficios = [
  "Atendimento 100% online via WhatsApp",
  "Sites entregues em até 7 dias úteis",
  "Design responsivo e otimizado para celular",
  "SEO técnico aplicado desde o lançamento",
  "Suporte direto, sem intermediários",
  "Hospedagem e domínio configurados",
];

const CidadeLanding = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/criacao-de-sites-/, "").replace(/\/$/, "");
  const cidade = slug ? getCidadeBySlug(slug) : undefined;

  if (!cidade) return <Navigate to="/atendimento" replace />;

  const path = `/criacao-de-sites-${cidade.slug}`;
  const title = `Criação de Sites em ${cidade.nome} ${cidade.uf}`;
  const description = `Criação de sites profissionais em ${cidade.nome} (${cidade.uf}). Sites institucionais, landing pages, lojas virtuais e Google Ads para empresas de ${cidade.nome} e região. Atendimento 100% online.`;
  const whatsappMsg = encodeURIComponent(`Olá! Sou de ${cidade.nome}/${cidade.uf} e tenho interesse em criar um site profissional.`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Criação de Sites Profissionais",
    provider: {
      "@type": "ProfessionalService",
      name: "Kubo Web",
      url: "https://www.kuboweb.com.br",
      telephone: "+5511932197334",
    },
    areaServed: {
      "@type": "City",
      name: cidade.nome,
      containedInPlace: { "@type": "AdministrativeArea", name: cidade.estado },
    },
    name: `Criação de Sites em ${cidade.nome}`,
    description,
    url: `https://www.kuboweb.com.br${path}`,
  };

  const faqs = [
    {
      q: `Quanto custa criar um site em ${cidade.nome}?`,
      a: `O investimento para criar um site profissional em ${cidade.nome}/${cidade.uf} varia conforme o escopo: site institucional, landing page ou loja virtual. A Kubo Web trabalha com orçamentos personalizados — fale com um especialista pelo WhatsApp e receba uma proposta sob medida.`,
    },
    {
      q: `A Kubo Web atende empresas de ${cidade.nome} sendo 100% online?`,
      a: `Sim. Atendemos empresas de ${cidade.nome} e de toda a região ${cidade.regiao} de forma 100% online, via WhatsApp, e-mail e videochamadas, com processo estruturado para entregar sites profissionais sem reuniões presenciais.`,
    },
    {
      q: `Em quanto tempo o site da minha empresa em ${cidade.nome} fica pronto?`,
      a: `Sites institucionais e landing pages são entregues em até 7 dias úteis. Lojas virtuais e projetos maiores levam de 15 a 30 dias, conforme a complexidade. Todo o cronograma é alinhado no início do projeto.`,
    },
    {
      q: `O site será otimizado para aparecer no Google em buscas de ${cidade.nome}?`,
      a: `Sim. Todos os sites já saem com SEO técnico aplicado: estrutura semântica, meta tags, schema, performance otimizada e responsividade mobile. Para acelerar resultados, oferecemos campanhas de Google Ads segmentadas para ${cidade.nome} e região.`,
    },
    {
      q: `Vocês oferecem manutenção do site após a entrega em ${cidade.nome}?`,
      a: `Sim. Oferecemos planos de manutenção mensal com atualizações de conteúdo, correções, backups, monitoramento e suporte técnico — para que seu site continue performando ao longo do tempo.`,
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO title={title} description={description} path={path} jsonLd={jsonLd} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Header />
      <div className="pt-24 md:pt-32" />

      {/* Hero */}
      <section className="px-4 pb-16 md:pb-24">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/15 text-sm text-primary font-medium"
          >
            <MapPin className="w-4 h-4" />
            Atendemos {cidade.nome} e toda região {cidade.regiao}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="section-title"
          >
            Criação de Sites Profissionais em {cidade.nome}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="section-subtitle max-w-2xl mx-auto"
          >
            Sua empresa em {cidade.nome}/{cidade.uf} merece um site que vende. {cidade.nome} é {cidade.contexto} — e a Kubo Web entrega sites institucionais, landing pages, lojas virtuais e campanhas de Google Ads sob medida para o seu negócio crescer na região.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="pt-2"
          >
            <Button variant="whatsapp" size="xl" asChild>
              <a href={`https://wa.me/5511932197334?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">Consultoria sem custo · Retorno em até 1 hora útil</p>
          </motion.div>
        </div>
      </section>

      <div className="line-glow" />

      {/* Serviços */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 space-y-3">
            <h2 className="section-title">Serviços para empresas de {cidade.nome}</h2>
            <p className="section-subtitle">Soluções digitais completas para o seu mercado local</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {servicos.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-premium p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="line-glow" />

      {/* Por que Kubo */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 space-y-3">
            <h2 className="section-title">Por que escolher a Kubo Web em {cidade.nome}</h2>
            <p className="section-subtitle">Atendimento 100% online — onde você estiver no Brasil, entregamos</p>
          </div>
          <div className="card-premium p-7 md:p-10">
            <div className="grid sm:grid-cols-2 gap-3">
              {beneficios.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="line-glow" />

      {/* FAQ */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/15 text-xs text-primary font-medium">
              <HelpCircle className="w-3.5 h-3.5" />
              Perguntas frequentes
            </div>
            <h2 className="section-title">Dúvidas sobre criação de sites em {cidade.nome}</h2>
          </div>
          <Accordion type="single" collapsible className="card-premium px-5 md:px-7">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/40 last:border-0">
                <AccordionTrigger className="text-left text-base font-heading font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <div className="line-glow" />

      {/* CTA Final */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h2 className="section-title">Pronto para crescer em {cidade.nome}?</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Fale com um especialista da Kubo Web e descubra como um site profissional pode transformar o seu negócio em {cidade.nome}/{cidade.uf}.
          </p>
          <Button variant="whatsapp" size="xl" asChild>
            <a href={`https://wa.me/5511932197334?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </Button>
          <div className="pt-6">
            <Link to="/atendimento" className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-1.5">
              Ver outras cidades atendidas <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default CidadeLanding;
