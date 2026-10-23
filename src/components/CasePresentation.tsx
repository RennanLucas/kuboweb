import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudioContact from "@/components/StudioContact";
import SEO from "@/components/SEO";
import "@/styles/studio.css";

interface CasePresentationProps {
  item: {
    name: string;
    category: string;
    url: string;
    domain: string;
    objective: string;
    direction: string;
    highlights: readonly string[];
  };
  slug: string;
  next: { name: string; slug: string };
}

export default function CasePresentation({
  item,
  slug,
  next,
}: CasePresentationProps) {
  const imageId = slug === "helena-avila" ? "helena" : "cristiano";
  return (
    <div className="kw-studio kw-case-page">
      <SEO
        title={`${item.name} | Case Kubo Web`}
        description={`Conheça o projeto ${item.name}: objetivo, direção visual e experiência responsiva criada pela Kubo Web.`}
        path={`/portfolio/${slug}`}
      />
      <Header />
      <main>
        <section className="kw-page-intro kw-wrap">
          <Link to="/portfolio" className="kw-text-link kw-case-back">
            <ArrowLeft size={15} />
            Voltar aos projetos
          </Link>
          <h1>{item.name}</h1>
          <div className="kw-page-intro-bottom">
            <p>{item.category}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="kw-button kw-button-light"
            >
              Visitar site publicado <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section
          className="kw-case-showcase kw-wrap"
          aria-label={`Apresentação do projeto ${item.name}`}
        >
          <div className="kw-case-browser">
            <span>{item.domain}</span>
            <ArrowUpRight size={15} />
          </div>
          <img
            src={`/projects/${imageId}-desktop.png`}
            alt={`Página inicial do site de ${item.name} em computador`}
            width="1265"
            height="712"
          />
        </section>
        <section className="kw-section kw-wrap kw-case-story">
          <div>
            <h2>O ponto de partida.</h2>
            <p>{item.objective}</p>
          </div>
          <div>
            <h2>A direção.</h2>
            <p>{item.direction}</p>
          </div>
        </section>
        <section className="kw-case-responsive">
          <div className="kw-wrap kw-case-responsive-layout">
            <div>
              <h2>
                Uma experiência
                <br />
                <em>em todas as telas.</em>
              </h2>
              <p>
                Conteúdo e navegação adaptados para acompanhar o visitante do
                computador ao celular.
              </p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Check size={17} />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="kw-case-phone">
              <img
                src={`/projects/${imageId}-mobile.png`}
                alt={`Versão mobile do site de ${item.name}`}
                width="390"
                height="844"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className="kw-case-next kw-wrap">
          <span>Continue explorando</span>
          <Link to={`/portfolio/${next.slug}`}>
            {next.name}
            <ArrowUpRight size={40} />
          </Link>
        </section>
        <StudioContact />
      </main>
      <Footer />
    </div>
  );
}
