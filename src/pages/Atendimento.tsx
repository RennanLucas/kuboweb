import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
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
        title="Atendimento em todo o Brasil"
        description="Criação de sites profissionais em todas as capitais do Brasil. Atendemos empresas em São Paulo, Rio de Janeiro, Belo Horizonte, Brasília e mais de 20 capitais brasileiras."
        path="/atendimento"
        jsonLd={jsonLd}
      />
      <Header />
      <div className="pt-24 md:pt-32" />

      <section className="px-4 pb-16">
        <div className="container mx-auto max-w-4xl text-center space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/15 text-sm text-primary font-medium"
          >
            <MapPin className="w-4 h-4" />
            Cobertura nacional
          </motion.div>
          <h1 className="section-title">Atendemos empresas em todo o Brasil</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            A Kubo Web cria sites profissionais para empresas em todas as capitais brasileiras. Atendimento 100% online via WhatsApp — onde você estiver, a gente entrega.
          </p>
        </div>
      </section>

      <div className="line-glow" />

      <section className="px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-5xl space-y-14">
          {regioes.map((regiao) => {
            const cidadesRegiao = cidades.filter((c) => c.regiao === regiao);
            return (
              <div key={regiao} className="space-y-5">
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground border-l-2 border-primary pl-4">
                  Região {regiao}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {cidadesRegiao.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/criacao-de-sites-${c.slug}`}
                      className="card-premium p-4 flex items-center justify-between gap-3 group hover:border-primary/30 transition-colors"
                    >
                      <div>
                        <p className="font-heading font-semibold text-foreground text-sm">
                          Criação de Sites em {c.nome}
                        </p>
                        <p className="text-xs text-muted-foreground">{c.estado} · {c.uf}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
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
