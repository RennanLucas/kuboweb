import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import StudioContact from "@/components/StudioContact";
import SEO from "@/components/SEO";
import "@/styles/studio.css";

export default function StudioPortfolio() {
  return (
    <div className="kw-studio kw-portfolio-page">
      <SEO
        title="Portfólio | Kubo Web"
        description="Explore os projetos publicados pela Kubo Web, conheça a direção de cada trabalho e veja as experiências em computador e celular."
        path="/portfolio"
      />
      <Header />
      <main>
        <section className="kw-page-intro kw-wrap">
          <h1>
            Ideias que viraram
            <br />
            <em>presença digital.</em>
          </h1>
          <div className="kw-page-intro-bottom">
            <p>
              Cada projeto parte de um negócio real, de uma história e de um
              objetivo. Conheça as escolhas por trás de cada experiência.
            </p>
            <span>Projetos publicados · Desktop e mobile</span>
          </div>
        </section>
        <section
          className="kw-work kw-section"
          aria-label="Projetos publicados"
        >
          <div className="kw-wrap">
            <ProjectGallery />
          </div>
        </section>
        <StudioContact />
      </main>
      <Footer />
    </div>
  );
}
