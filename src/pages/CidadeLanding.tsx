import { useLocation, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Building2, MapPin, Megaphone, MessageCircle, Search, ShoppingBag } from "lucide-react";
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
  { icon: Building2, title: "Sites Institucionais", desc: "Presença própria para apresentar empresa, serviços, diferenciais e contato.", href: "/servicos/sites-institucionais" },
  { icon: Search, title: "Landing Pages", desc: "Páginas focadas em campanhas, ofertas, cadastros e geração de contatos.", href: "/servicos/landing-pages" },
  { icon: ShoppingBag, title: "Lojas Virtuais", desc: "Estruturas de e-commerce definidas de acordo com catálogo, pagamento e operação.", href: "/servicos/loja-virtual" },
  { icon: Megaphone, title: "Google Ads", desc: "Campanhas de pesquisa e aquisição avaliadas conforme objetivo, mercado e orçamento.", href: "/servicos/anuncios" },
];

const CidadeLanding = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/criacao-de-sites-/, "").replace(/\/$/, "");
  const cidade = slug ? getCidadeBySlug(slug) : undefined;

  if (!cidade) return <Navigate to="/atendimento" replace />;

  const path = `/criacao-de-sites-${cidade.slug}`;
  const title = `Criação de Sites em ${cidade.nome} ${cidade.uf}`;
  const description = `Criação de sites profissionais, landing pages, lojas virtuais e Google Ads para negócios de ${cidade.nome}/${cidade.uf}, com atendimento online.`;
  const whatsappMsg = encodeURIComponent(`Olá! Sou de ${cidade.nome}/${cidade.uf} e quero conversar sobre um projeto de site com a Kubo Web.`);

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
      q: `Quanto custa criar um site para uma empresa de ${cidade.nome}?`,
      a: "O valor depende do tipo de projeto e do escopo. Landing Pages partem de R$ 697 e sites institucionais de R$ 1.497. Loja virtual e Google Ads são avaliados de acordo com a necessidade do negócio.",
    },
    {
      q: `A Kubo Web atende negócios de ${cidade.nome} de forma online?`,
      a: `Sim. O atendimento pode ser feito remotamente por WhatsApp, e-mail e reunião online. Briefing, aprovações e publicação não dependem de atendimento presencial em ${cidade.nome}.`,
    },
    {
      q: "Quanto tempo leva para o site ficar pronto?",
      a: "O cronograma depende da quantidade de páginas, conteúdo, integrações e aprovações. O prazo é definido junto com o escopo antes do início do projeto.",
    },
    {
      q: `É possível trabalhar SEO para buscas relacionadas a ${cidade.nome}?`,
      a: "O site pode receber estrutura técnica, títulos, descrições e conteúdo local relevante para facilitar a indexação. Posição no Google depende de concorrência, autoridade, conteúdo e outros fatores, por isso não existe garantia de ranking específico.",
    },
    {
      q: "A Kubo Web oferece manutenção depois da publicação?",
      a: "Sim. A manutenção é opcional e parte de R$ 70/mês. O que entra no plano é definido conforme a tecnologia e as necessidades do site.",
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
      <Helmet><script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script></Helmet>
      <Header />

      <section className="relative isolate overflow-hidden bg-[#07101f] px-4 pb-20 pt-36 text-white md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-44 top-0 h-[640px] w-[640px] rounded-full bg-blue-600/18 blur-[190px]" />
          <div className="absolute -right-48 top-[-120px] h-[720px] w-[720px] rounded-full bg-cyan-400/8 blur-[220px]" />
        </div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[#78a9ff]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/42">Atendimento online · {cidade.nome}/{cidade.uf}</span>
              </div>
              <h1 className="max-w-5xl text-[3.15rem] font-heading font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.35rem]">
                Criação de sites para negócios de
                <span className="block text-[#78a9ff]">{cidade.nome}.</span>
              </h1>
            </div>
            <div className="lg:justify-self-end lg:max-w-[440px]">
              <p className="text-base leading-8 text-white/52 md:text-lg">Sites institucionais, landing pages, lojas virtuais e Google Ads com processo remoto e uma estrutura adaptada ao objetivo do negócio.</p>
              <Button asChild size="lg" className="mt-7 rounded-full bg-white px-6 text-[#07101f] hover:bg-white/90">
                <a href={`https://wa.me/5511932197334?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> Conversar sobre o projeto</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5f7] px-4 py-24 md:py-36">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">Capabilities</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-6xl">O que podemos construir para o seu negócio.</h2>
            </div>
            <p className="max-w-[430px] text-base leading-8 text-muted-foreground lg:justify-self-end">O formato certo depende do que precisa ser comunicado, vendido ou medido. Cada serviço tem uma função diferente na presença digital.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {servicos.map(({ icon: Icon, title: serviceTitle, desc, href }) => (
              <Link key={serviceTitle} to={href} className="group rounded-[28px] border border-border/70 bg-white p-7 transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_25px_70px_rgba(15,23,42,.06)] md:p-8">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary"><Icon className="h-5 w-5" /></span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <h3 className="mt-12 text-2xl font-heading font-semibold tracking-[-0.035em] text-foreground">{serviceTitle}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:py-36">
        <div className="container mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">Presença local</p>
            <h2 className="mt-5 text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-6xl">Um ponto digital próprio para quem busca seu negócio em {cidade.nome}.</h2>
          </div>
          <div className="rounded-[34px] border border-border/70 bg-white p-7 md:p-10">
            <p className="text-base leading-8 text-muted-foreground">
              Um site pode reunir apresentação, serviços, localização, formas de contato e páginas específicas para campanhas em um endereço controlado pelo próprio negócio. Quando existe interesse em buscas locais, a estrutura também pode ser preparada para trabalhar conteúdo relevante ligado a {cidade.nome} sem prometer posições ou resultados que dependem do mercado.
            </p>
            <div className="mt-8 grid gap-3 border-t border-border/70 pt-7 sm:grid-cols-3">
              {[
                ["01", "Apresentar", "Explicar com clareza o que a empresa faz e para quem."],
                ["02", "Ser encontrado", "Dar ao Google uma estrutura técnica e conteúdo organizado para indexação."],
                ["03", "Gerar contato", "Conduzir o visitante até WhatsApp, formulário, cadastro ou compra."],
              ].map(([number, itemTitle, text]) => (
                <div key={number} className="rounded-2xl bg-[#f4f5f7] p-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">{number}</span>
                  <h3 className="mt-3 font-heading font-semibold text-foreground">{itemTitle}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5f7] px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">FAQ local</p>
            <h2 className="mt-5 text-4xl font-heading font-semibold tracking-[-0.045em] text-foreground md:text-5xl">Dúvidas sobre projetos em {cidade.nome}.</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`} className="rounded-2xl border border-border/70 bg-white px-5 md:px-6">
                <AccordionTrigger className="py-5 text-left font-heading font-semibold text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="pb-5 leading-7 text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="px-4 py-24 md:py-32">
        <div className="container mx-auto max-w-7xl">
          <div className="rounded-[38px] bg-[#2458d8] p-8 text-white md:p-12 lg:p-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/55">Projeto em {cidade.nome}</p>
                <h2 className="mt-5 max-w-4xl text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">Conte o que sua empresa precisa melhorar no digital.</h2>
              </div>
              <Button asChild size="xl" className="rounded-full bg-white px-7 text-[#2458d8] hover:bg-white/90">
                <a href={`https://wa.me/5511932197334?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> Falar no WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default CidadeLanding;
