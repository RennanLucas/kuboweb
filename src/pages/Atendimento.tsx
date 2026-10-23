import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO from "@/components/SEO";
import { cidades } from "@/data/cidades";

const regioes = ["Sudeste", "Sul", "Nordeste", "Norte", "Centro-Oeste"] as const;

const Atendimento = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Cidades atendidas pela Kubo Web",
    itemListElement: cidades.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.kuboweb.com.br/criacao-de-sites-${c.slug}`,
      name: `Criação de Sites em ${c.nome}`,
    })),
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Atendimento Online em todo o Brasil"
        description="A Kubo Web atende negócios de diferentes regiões do Brasil de forma online para projetos de sites, landing pages, lojas virtuais e Google Ads."
        path="/atendimento"
        jsonLd={jsonLd}
      />
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
                <MapPin className="h-4 w-4 text-[#78a9ff]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/42">Remote-first · Brasil</span>
              </div>
              <h1 className="max-w-5xl text-[3.15rem] font-heading font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
                Atendimento online,
                <span className="block text-[#78a9ff]">independente da cidade.</span>
              </h1>
            </div>
            <p className="max-w-[440px] text-base leading-8 text-white/52 lg:justify-self-end md:text-lg">Briefing, reuniões, aprovações e publicação podem ser feitos remotamente. As páginas abaixo organizam informações de atendimento e contexto local para diferentes capitais.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5f7] px-4 py-24 md:py-36">
        <div className="container mx-auto max-w-7xl space-y-16">
          {regioes.map((regiao, regionIndex) => {
            const cidadesRegiao = cidades.filter((c) => c.regiao === regiao);
            return (
              <section key={regiao}>
                <div className="mb-7 flex items-end justify-between gap-4 border-b border-border/70 pb-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-primary">0{regionIndex + 1} · Região</p>
                    <h2 className="mt-2 text-3xl font-heading font-semibold tracking-[-0.04em] text-foreground md:text-4xl">{regiao}</h2>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{cidadesRegiao.length} cidades</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {cidadesRegiao.map((cidade) => (
                    <Link
                      key={cidade.slug}
                      to={`/criacao-de-sites-${cidade.slug}`}
                      className="group flex min-h-[118px] items-center justify-between gap-4 rounded-[24px] border border-border/70 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_20px_55px_rgba(15,23,42,.05)]"
                    >
                      <div>
                        <p className="text-lg font-heading font-semibold tracking-[-0.025em] text-foreground">{cidade.nome}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{cidade.estado} · {cidade.uf}</p>
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4f5f7] text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Atendimento;
