import { Helmet } from "react-helmet-async";
import { ArrowRight, Code2, LayoutTemplate, MessageCircle, Plug, Search, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const factors = [
  { icon: LayoutTemplate, title: "Quantidade de páginas e conteúdo", text: "Uma landing page de uma única oferta tem um escopo diferente de um site com várias páginas, serviços, áreas de conteúdo e materiais específicos." },
  { icon: Code2, title: "Nível de personalização", text: "Quanto mais a interface, os componentes e os fluxos precisam ser adaptados à marca e ao negócio, maior tende a ser o trabalho de design e desenvolvimento." },
  { icon: Plug, title: "Integrações", text: "Formulários, CRM, pagamentos, agenda, automações, área administrativa e serviços externos adicionam requisitos técnicos ao projeto." },
  { icon: Search, title: "SEO e estrutura técnica", text: "Arquitetura de páginas, títulos, descrições, dados estruturados, sitemap e performance precisam ser planejados de acordo com o tipo de site." },
  { icon: Wrench, title: "Manutenção e evolução", text: "Depois da publicação, algumas empresas precisam apenas manter o conteúdo; outras precisam de novas páginas, integrações e acompanhamento frequente." },
];

const priceReferences = [
  { label: "Landing Page", value: "A partir de R$ 697", href: "/servicos/landing-pages", text: "Para campanhas, ofertas e páginas com uma ação principal." },
  { label: "Site institucional", value: "A partir de R$ 1.497", href: "/servicos/sites-institucionais", text: "Para apresentar empresa, serviços, diferenciais e contato em uma estrutura mais completa." },
  { label: "Loja virtual", value: "Sob orçamento", href: "/servicos/loja-virtual", text: "O valor depende de catálogo, plataforma, pagamento, frete e integrações da operação." },
  { label: "Google Ads", value: "Sob orçamento", href: "/servicos/anuncios", text: "A gestão depende da estrutura da conta, objetivo, campanhas e acompanhamento necessário." },
  { label: "Manutenção", value: "A partir de R$ 70/mês", href: "/manutencao", text: "Para pequenas atualizações e acompanhamento conforme tecnologia e escopo do site." },
];

const GuiaInvestimentoSite = () => {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Quanto custa um site profissional? Guia de investimento",
    description: "Entenda os fatores que influenciam o investimento em sites, landing pages e lojas virtuais e veja os valores de referência da Kubo Web.",
    author: { "@type": "Organization", name: "Kubo Web" },
    publisher: { "@type": "Organization", name: "Kubo Web", logo: { "@type": "ImageObject", url: "https://www.kuboweb.com.br/favicon-192.png" } },
    datePublished: "2026-06-06",
    dateModified: "2026-10-23",
    mainEntityOfPage: "https://www.kuboweb.com.br/guia/investimento-site-profissional",
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Quanto custa um site profissional? Guia de investimento"
        description="Veja os valores de referência da Kubo Web e entenda o que muda o investimento em uma landing page, site institucional ou loja virtual."
        path="/guia/investimento-site-profissional"
        jsonLd={articleJsonLd}
      />
      <Helmet><meta name="article:modified_time" content="2026-10-23" /></Helmet>
      <Header />

      <section className="relative isolate overflow-hidden bg-[#07101f] px-4 pb-20 pt-36 text-white md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-44 top-0 h-[640px] w-[640px] rounded-full bg-blue-600/18 blur-[190px]" />
          <div className="absolute -right-48 top-[-120px] h-[720px] w-[720px] rounded-full bg-cyan-400/8 blur-[220px]" />
        </div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#78a9ff]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/42">Guide · Investment</span>
              </div>
              <h1 className="max-w-5xl text-[3.1rem] font-heading font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.35rem]">
                Quanto custa um
                <span className="block text-[#78a9ff]">site profissional?</span>
              </h1>
            </div>
            <p className="max-w-[440px] text-base leading-8 text-white/52 lg:justify-self-end md:text-lg">O preço não depende só do número de telas. Conteúdo, personalização, integrações, publicação e manutenção mudam o escopo — e precisam aparecer com clareza na proposta.</p>
          </div>
        </div>
      </section>

      <article>
        <section className="bg-[#f4f5f7] px-4 py-24 md:py-36">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">Valores de referência</p>
                <h2 className="mt-5 max-w-4xl text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-6xl">O ponto de partida hoje.</h2>
              </div>
              <p className="max-w-[430px] text-base leading-8 text-muted-foreground lg:justify-self-end">Esses valores são referências públicas da Kubo Web. O orçamento final é definido depois do escopo.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {priceReferences.map((item) => (
                <Link key={item.label} to={item.href} className="group rounded-[28px] border border-border/70 bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-primary/20 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">{item.label}</p>
                      <h3 className="mt-3 text-2xl font-heading font-semibold tracking-[-0.035em] text-foreground md:text-3xl">{item.value}</h3>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <p className="mt-8 max-w-xl text-sm leading-7 text-muted-foreground">{item.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:py-36">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">Scope factors</p>
                <h2 className="mt-5 text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-6xl">O que muda o orçamento.</h2>
                <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">Dois sites com o mesmo número de páginas podem exigir níveis bem diferentes de conteúdo, design, tecnologia e integração.</p>
              </div>

              <div className="overflow-hidden rounded-[34px] border border-border/70 bg-white shadow-[0_30px_90px_rgba(15,23,42,.05)]">
                {factors.map(({ icon: Icon, title, text }, index) => (
                  <section key={title} className={`grid gap-5 p-7 md:grid-cols-[0.16fr_0.84fr] md:p-9 ${index !== factors.length - 1 ? "border-b border-border/70" : ""}`}>
                    <div className="flex items-start justify-between md:block">
                      <span className="text-xs font-semibold text-muted-foreground">0{index + 1}</span>
                      <span className="mt-0 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/8 text-primary md:mt-7"><Icon className="h-4.5 w-4.5" /></span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-semibold tracking-[-0.035em] text-foreground">{title}</h3>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-[15px]">{text}</p>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#07101f] px-4 py-24 text-white md:py-36">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#78a9ff]">Compare propostas</p>
                <h2 className="mt-5 max-w-4xl text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">Compare escopo, não só preço.</h2>
              </div>
              <p className="max-w-[430px] text-base leading-8 text-white/48 lg:justify-self-end">Antes de escolher um fornecedor, veja o que está incluso: quantidade de páginas, conteúdo, responsividade, integrações, SEO técnico, publicação, revisões e suporte.</p>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {["O que será entregue?", "Quem fornece textos e imagens?", "Quais integrações estão inclusas?", "Como funciona a publicação?", "O que acontece depois do launch?", "Mudanças futuras entram como manutenção?"].map((question, index) => (
                <div key={question} className="rounded-[24px] border border-white/10 bg-white/[0.045] p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/28">0{index + 1}</p>
                  <p className="mt-8 text-sm font-medium leading-6 text-white/72">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-24 md:py-32">
          <div className="container mx-auto max-w-7xl">
            <div className="rounded-[38px] bg-[#2458d8] p-8 text-white md:p-12 lg:p-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/55">Seu projeto</p>
                  <h2 className="mt-5 max-w-4xl text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">Quer saber qual escopo faz sentido?</h2>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-white/66">Envie o que você precisa, referências e o site atual se já existir. A conversa serve para transformar isso em um escopo claro.</p>
                </div>
                <Button asChild size="xl" className="rounded-full bg-white px-7 text-[#2458d8] hover:bg-white/90">
                  <a href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20li%20o%20guia%20de%20investimento%20da%20Kubo%20Web%20e%20quero%20conversar%20sobre%20meu%20projeto." target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> Conversar sobre o projeto</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default GuiaInvestimentoSite;
