import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  X,
} from "lucide-react";
import BrandMark from "@/components/BrandMark";
import LineSculpture from "@/components/LineSculpture";
import SEO from "@/components/SEO";
import { faqs } from "@/data/faqs";
import "@/styles/studio.css";

const whatsapp = (
  message = "Olá, vim pelo site da Kubo Web e quero conversar sobre um projeto.",
) => `https://wa.me/5511932197334?text=${encodeURIComponent(message)}`;
const services = [
  {
    name: "Sites institucionais",
    summary: "Uma presença à altura da sua empresa.",
    description:
      "Apresente seus serviços, sua história e seus diferenciais em um site pensado para transmitir confiança e facilitar o contato.",
    price: "R$ 1.497",
    note: "a partir de",
    route: "/servicos/sites-institucionais",
    deliverables: [
      "Páginas organizadas para o seu negócio",
      "Design adaptado a celular e desktop",
      "SEO técnico e publicação",
    ],
  },
  {
    name: "Landing pages",
    summary: "Uma oferta. Uma página. Um próximo passo.",
    description:
      "Conecte sua campanha a uma página que apresenta a oferta, esclarece dúvidas e conduz o visitante até o contato.",
    price: "R$ 697",
    note: "a partir de",
    route: "/servicos/landing-pages",
    deliverables: [
      "Narrativa de oferta e chamada para ação",
      "Experiência responsiva",
      "Integração com WhatsApp e rastreamento",
    ],
  },
  {
    name: "Lojas virtuais",
    summary: "Seu produto bem apresentado. Sua loja pronta para vender.",
    description:
      "Organize catálogo, navegação e compra em uma experiência alinhada à sua marca. As integrações são definidas conforme a sua operação.",
    price: "Sob orçamento",
    note: "escopo personalizado",
    route: "/servicos/loja-virtual",
    deliverables: [
      "Catálogo e páginas de produto",
      "Experiência de compra no celular",
      "Integrações conforme o projeto",
    ],
  },
  {
    name: "Google Ads",
    summary: "Sua empresa no caminho de quem procura.",
    description:
      "Campanhas de pesquisa conectadas à página certa, com segmentação, mensuração e acompanhamento definidos para o seu objetivo.",
    price: "Sob orçamento",
    note: "escopo personalizado",
    route: "/servicos/anuncios",
    deliverables: [
      "Planejamento e estrutura de campanhas",
      "Página e anúncio com a mesma mensagem",
      "Rastreamento de conversões",
    ],
  },
];
const steps = [
  {
    title: "Primeiro, o seu negócio.",
    name: "Conversa",
    text: "Entendemos o que você faz, quem precisa alcançar e o que o site precisa resolver. Você participa das decisões desde o início.",
    output: "Objetivo, escopo e proposta definidos",
    tags: ["Seu público", "Sua oferta", "Seu objetivo"],
  },
  {
    title: "Uma direção com a sua cara.",
    name: "Design",
    text: "Organizamos o conteúdo e desenhamos a experiência. Tipografia, cores e composição trabalham juntas para apresentar a sua marca.",
    output: "Estrutura e direção visual para aprovação",
    tags: ["Conteúdo", "Identidade", "Experiência"],
  },
  {
    title: "O desenho ganha vida.",
    name: "Construção",
    text: "Transformamos a direção aprovada em um site responsivo, com navegação, interações e integrações adequadas ao projeto.",
    output: "Site navegável para revisão",
    tags: ["Desenvolvimento", "Responsividade", "Integrações"],
  },
  {
    title: "Tudo pronto para ir ao ar.",
    name: "Publicação",
    text: "Revisamos as telas, os links, o SEO e os caminhos de contato. Depois, cuidamos da publicação e orientamos os próximos passos.",
    output: "Site publicado e entrega revisada",
    tags: ["Revisão", "SEO", "Publicação"],
  },
];

function StudioNavigation() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="kw-header">
      <div className="kw-header-inner">
        <Link to="/" aria-label="Kubo Web — início" className="kw-brand">
          <BrandMark inverse />
        </Link>
        <nav className="kw-nav" aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#servicos">Serviços</a>
          <a href="#processo">Como funciona</a>
          <Link to="/sobre">O estúdio</Link>
        </nav>
        <a
          className="kw-header-cta"
          href={whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos conversar <ArrowUpRight size={16} />
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="kw-menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="studio-mobile-nav"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="studio-mobile-nav"
          className="kw-mobile-nav"
          aria-label="Navegação mobile"
          onClick={() => setOpen(false)}
        >
          <a href="#projetos">
            Projetos <ArrowUpRight />
          </a>
          <a href="#servicos">
            Serviços <ArrowUpRight />
          </a>
          <a href="#processo">
            Como funciona <ArrowUpRight />
          </a>
          <Link to="/sobre">
            O estúdio <ArrowUpRight />
          </Link>
          <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
            Conversar no WhatsApp <MessageCircle />
          </a>
        </nav>
      )}
    </header>
  );
}

function ServiceSelector() {
  const [active, setActive] = useState(0);
  const item = services[active];
  return (
    <section className="kw-services kw-section" id="servicos">
      <div className="kw-wrap">
        <div className="kw-section-heading">
          <h2>
            O próximo passo
            <br />
            do seu negócio.
          </h2>
          <p>
            Do primeiro site à próxima campanha.
            <br />
            Encontre o formato que faz sentido para você.
          </p>
        </div>
        <div className="kw-service-layout">
          <div
            className="kw-service-tabs"
            role="tablist"
            aria-label="Serviços"
            aria-orientation="vertical"
          >
            {services.map((service, i) => (
              <button
                key={service.name}
                id={`service-tab-${i}`}
                role="tab"
                aria-selected={i === active}
                aria-controls="service-panel"
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(event) => {
                  const next =
                    event.key === "ArrowDown"
                      ? (i + 1) % services.length
                      : event.key === "ArrowUp"
                        ? (i + services.length - 1) % services.length
                        : event.key === "Home"
                          ? 0
                          : event.key === "End"
                            ? services.length - 1
                            : null;
                  if (next !== null) {
                    event.preventDefault();
                    setActive(next);
                    document.getElementById(`service-tab-${next}`)?.focus();
                  }
                }}
              >
                <span>{service.name}</span>
                {i === active ? <ArrowUpRight /> : <Plus />}
              </button>
            ))}
          </div>
          <div
            id="service-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${active}`}
            tabIndex={0}
            className="kw-service-panel"
          >
            <h3>{item.summary}</h3>
            <p>{item.description}</p>
            <ul>
              {item.deliverables.map((text) => (
                <li key={text}>
                  <Check size={16} />
                  {text}
                </li>
              ))}
            </ul>
            <div className="kw-service-bottom">
              <div>
                <span>{item.note}</span>
                <strong>{item.price}</strong>
              </div>
              <a
                href={whatsapp(
                  `Olá! Tenho interesse em ${item.name.toLowerCase()} e gostaria de um orçamento.`,
                )}
                className="kw-button kw-button-dark"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir orçamento <ArrowUpRight size={17} />
              </a>
            </div>
            <Link to={item.route} className="kw-service-details">
              Conhecer o serviço <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <p className="kw-price-note">
          O valor final considera conteúdo, páginas e integrações.{" "}
          <Link to="/manutencao">
            Manutenção a partir de R$ 70/mês <ArrowUpRight size={14} />
          </Link>
        </p>
      </div>
    </section>
  );
}

function Process() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return (
    <section className="kw-process kw-section" id="processo">
      <div className="kw-wrap">
        <div className="kw-section-heading">
          <h2>
            Da primeira conversa
            <br />
            ao site no ar.
          </h2>
          <p>
            Um processo próximo, com etapas claras.
            <br />
            Você sabe o que está acontecendo e o que vem depois.
          </p>
        </div>
        <div
          className="kw-process-tabs"
          role="tablist"
          aria-label="Etapas do projeto"
        >
          {steps.map((item, i) => (
            <button
              key={item.name}
              role="tab"
              id={`process-tab-${i}`}
              aria-selected={i === active}
              aria-controls="process-panel"
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(event) => {
                const next =
                  event.key === "ArrowRight"
                    ? (i + 1) % steps.length
                    : event.key === "ArrowLeft"
                      ? (i + steps.length - 1) % steps.length
                      : event.key === "Home"
                        ? 0
                        : event.key === "End"
                          ? steps.length - 1
                          : null;
                if (next !== null) {
                  event.preventDefault();
                  setActive(next);
                  document.getElementById(`process-tab-${next}`)?.focus();
                }
              }}
            >
              <span>0{i + 1}</span>
              {item.name}
              <ArrowRight size={17} />
            </button>
          ))}
        </div>
        <div
          className="kw-process-panel"
          id="process-panel"
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`process-tab-${active}`}
        >
          <div className="kw-process-art" aria-hidden="true">
            <span className="kw-process-number">0{active + 1}</span>
            <div className="kw-process-orbit">
              <Code2 size={36} />
            </div>
          </div>
          <div className="kw-process-copy">
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <div className="kw-tags">
              {step.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="kw-process-output">
              <Check size={18} />
              {step.output}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const StudioHome = () => (
  <div className="kw-studio">
    <SEO
      title="Kubo Web | Sites profissionais para negócios que querem crescer"
      description="Sites institucionais, landing pages, lojas virtuais e Google Ads. Design, estratégia e desenvolvimento para uma presença digital à altura do seu negócio."
      path="/"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }}
    />
    <a href="#conteudo" className="kw-skip">
      Pular para o conteúdo
    </a>
    <StudioNavigation />
    <main id="conteudo">
      <section className="kw-hero">
        <div className="kw-hero-topline kw-wrap">
          <span>Design com intenção. Código com cuidado.</span>
          <span>Estúdio digital independente · Brasil</span>
        </div>
        <div className="kw-hero-content kw-wrap">
          <h1>
            Seu negócio
            <br />
            merece um site
            <br />
            <em>à altura.</em>
          </h1>
          <p>
            Criamos sites e experiências digitais que traduzem o valor da sua
            marca. Da estratégia ao último detalhe, prontos para o seu próximo
            passo.
          </p>
          <div className="kw-hero-actions">
            <a
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="kw-button kw-button-light"
            >
              Começar meu projeto <ArrowUpRight size={19} />
            </a>
            <a href="#projetos" className="kw-text-link">
              Explorar projetos <ArrowDown size={17} />
            </a>
          </div>
        </div>
        <div className="kw-hero-visual">
          <LineSculpture />
          <div className="kw-art-caption">
            <span>Ideias ganham forma.</span>
            <ArrowDownRight size={20} />
          </div>
        </div>
        <div className="kw-hero-bottom kw-wrap">
          <span>
            Estratégia <i /> Design <i /> Desenvolvimento
          </span>
          <a href="#projetos">
            Conheça o trabalho <ArrowDown size={14} />
          </a>
        </div>
      </section>
      <section className="kw-work kw-section" id="projetos">
        <div className="kw-wrap">
          <div className="kw-section-heading">
            <h2>
              Feito para pessoas.
              <br />
              <span>Construído para marcas.</span>
            </h2>
            <Link to="/portfolio" className="kw-text-link">
              Ver portfólio completo <ArrowUpRight size={19} />
            </Link>
          </div>
          <div className="kw-project-grid">
            <Link
              to="/portfolio/helena-avila"
              className="kw-project kw-project-helena"
            >
              <div className="kw-project-image">
                <div className="kw-browser-bar">
                  <span />
                  <span />
                  <span />
                  <small>helenaavilapsi.com.br</small>
                </div>
                <img
                  src="/projects/helena-desktop.png"
                  alt="Site de Helena Ávila: composição clara com fotografia e apresentação de psicoterapia"
                  width="1265"
                  height="712"
                  loading="lazy"
                />
                <span className="kw-project-open">
                  Explorar projeto <ArrowUpRight size={18} />
                </span>
              </div>
              <div className="kw-project-info">
                <div>
                  <h3>Helena Ávila</h3>
                  <p>Psicoterapia · Site institucional</p>
                </div>
                <ArrowUpRight size={27} />
              </div>
            </Link>
            <Link
              to="/portfolio/cristiano-avila"
              className="kw-project kw-project-cristiano"
            >
              <div className="kw-project-image">
                <div className="kw-browser-bar">
                  <span />
                  <span />
                  <span />
                  <small>cristiano-avila-site.vercel.app</small>
                </div>
                <img
                  src="/projects/cristiano-desktop.png"
                  alt="Site de Cristiano Ávila: tipografia editorial e retrato do profissional"
                  width="1265"
                  height="712"
                  loading="lazy"
                />
                <span className="kw-project-open">
                  Explorar projeto <ArrowUpRight size={18} />
                </span>
              </div>
              <div className="kw-project-info">
                <div>
                  <h3>Cristiano Ávila</h3>
                  <p>Psicologia clínica · Site institucional</p>
                </div>
                <ArrowUpRight size={27} />
              </div>
            </Link>
          </div>
          <div className="kw-work-note">
            <p>
              Cada negócio tem uma história.
              <br />O seu site precisa saber contá-la.
            </p>
            <p>
              Conteúdo organizado, identidade própria e um caminho claro até o
              contato. Explore os projetos e veja como essas escolhas aparecem
              na prática.
            </p>
          </div>
        </div>
      </section>
      <ServiceSelector />
      <section className="kw-principles kw-section">
        <div className="kw-wrap kw-principles-layout">
          <h2>
            Bonito no primeiro olhar.
            <br />
            <em>Bem pensado em cada clique.</em>
          </h2>
          <div>
            <article>
              <span className="kw-small-symbol">
                <ArrowUpRight />
              </span>
              <h3>Uma identidade que faz sentido.</h3>
              <p>
                A sua marca orienta a composição, o conteúdo e a experiência.
                Cada escolha tem uma função.
              </p>
            </article>
            <article>
              <span className="kw-small-symbol">
                <Code2 />
              </span>
              <h3>Funciona onde seu cliente está.</h3>
              <p>
                Celular, tablet ou computador. O site se adapta para manter a
                leitura e a navegação confortáveis.
              </p>
            </article>
            <article>
              <span className="kw-small-symbol">
                <MessageCircle />
              </span>
              <h3>O próximo passo fica claro.</h3>
              <p>
                Contato, orçamento ou compra. Organizar a experiência também é
                facilitar a decisão do visitante.
              </p>
            </article>
          </div>
        </div>
      </section>
      <Process />
      <section className="kw-faq kw-section" id="duvidas">
        <div className="kw-wrap kw-faq-layout">
          <div>
            <h2>
              Antes de <br />
              começar.
            </h2>
            <p>
              As respostas que ajudam você
              <br />a dar o próximo passo.
            </p>
            <a
              href={whatsapp(
                "Olá! Tenho uma dúvida sobre um projeto com a Kubo Web.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="kw-text-link"
            >
              Falar com a Kubo <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="kw-faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <span className="kw-faq-icons">
                    <Plus size={18} />
                    <Minus size={18} />
                  </span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="kw-contact" id="contato">
        <div className="kw-wrap">
          <div className="kw-contact-top">
            <span>Uma boa conversa pode mudar tudo.</span>
            <MessageCircle size={25} />
          </div>
          <h2>
            Vamos construir
            <br />
            <em>o seu próximo passo?</em>
          </h2>
          <div className="kw-contact-bottom">
            <p>
              Conte sua ideia. A gente conversa sobre
              <br />o melhor caminho para tirá-la do papel.
            </p>
            <a
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              className="kw-button kw-button-dark"
            >
              Conversar sobre meu projeto <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </section>
    </main>
    <footer className="kw-footer">
      <div className="kw-wrap">
        <div className="kw-footer-top">
          <Link to="/" aria-label="Kubo Web — início">
            <BrandMark inverse />
          </Link>
          <p>
            Estratégia, design e desenvolvimento.
            <br />
            Atendimento online em todo o Brasil.
          </p>
          <div>
            <a href="mailto:contato.kuboweb@gmail.com">
              contato.kuboweb@gmail.com <ArrowUpRight size={14} />
            </a>
            <a
              href="https://www.instagram.com/kuboweb_oficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="kw-footer-word" aria-hidden="true">
          kubo
        </div>
        <div className="kw-footer-bottom">
          <span>© {new Date().getFullYear()} Kubo Web</span>
          <nav aria-label="Links do rodapé">
            <Link to="/sobre">O estúdio</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/manutencao">Manutenção</Link>
            <Link to="/faq">Perguntas frequentes</Link>
          </nav>
          <span>Ideias com forma. Marcas com presença.</span>
        </div>
      </div>
    </footer>
  </div>
);
export default StudioHome;
