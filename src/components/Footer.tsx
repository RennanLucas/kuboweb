import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import "@/styles/studio.css";
const Footer = () => (
  <div className="kw-studio">
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
export default Footer;
