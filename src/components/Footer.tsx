import { memo } from "react";
import { ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import BrandMark from "@/components/BrandMark";

const navigation = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

const Footer = () => {
  return (
    <footer className="bg-[#07101f] px-4 pb-24 pt-16 text-white md:pb-10 md:pt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.35fr_0.65fr_0.9fr] md:pb-16">
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="Kubo Web - Início">
              <BrandMark inverse />
            </Link>
            <h2 className="mt-7 max-w-xl text-3xl font-heading font-semibold leading-[1.05] tracking-[-0.04em] md:text-4xl">
              Design, estratégia e código para marcas que querem parecer maiores.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/45">
              Sites institucionais, landing pages, lojas virtuais e Google Ads com atendimento direto e projetos sob medida.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">Navegação</p>
            <nav className="flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium text-white/62 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">Contato</p>
            <div className="flex flex-col items-start gap-4">
              <a
                href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-white/62 transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
                <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:contato.kuboweb@gmail.com"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-white/62 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                contato.kuboweb@gmail.com
              </a>
              <a
                href="https://www.instagram.com/kuboweb_oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-white/62 transition-colors hover:text-white"
              >
                <Instagram className="h-4 w-4" />
                @kuboweb_oficial
                <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-7 text-[11px] text-white/32 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kubo Web. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>Atendimento online no Brasil</span>
            <Link to="/diagnostico" className="transition-colors hover:text-white/65">Diagnóstico</Link>
            <Link to="/manutencao" className="transition-colors hover:text-white/65">Manutenção</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
