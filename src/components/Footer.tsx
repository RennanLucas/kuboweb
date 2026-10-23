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
    <footer className="relative overflow-hidden bg-[#050a13] px-4 pb-24 pt-14 text-white md:pb-10 md:pt-20">
      <div className="pointer-events-none absolute inset-x-0 bottom-[-14%] mx-auto h-[480px] w-[78%] rounded-[50%] bg-[#316cff]/[0.12] blur-[170px]" />

      <div className="container relative mx-auto max-w-[1380px]">
        <div className="flex flex-col gap-6 border-b border-white/[0.1] pb-8 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="inline-flex items-center" aria-label="Kubo Web - Início">
            <BrandMark inverse />
          </Link>
          <p className="max-w-[520px] text-sm leading-7 text-white/[0.42] sm:text-right">
            Design, estratégia e desenvolvimento para transformar uma presença digital comum em uma experiência que parece construída de verdade.
          </p>
        </div>

        <div className="grid gap-12 py-12 md:grid-cols-[1.45fr_.55fr_.72fr] md:py-16">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8db6ff]">Kubo Web · Digital Studio</p>
            <h2 className="mt-6 max-w-[760px] text-[3.6rem] font-heading font-semibold leading-[.87] tracking-[-0.075em] text-white sm:text-7xl md:text-[6.3rem] lg:text-[7.1rem]">
              Make the first
              <span className="block text-white/[0.26]">impression count.</span>
            </h2>
          </div>

          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/[0.28]">Navegação</p>
            <nav className="flex flex-col items-start gap-3.5">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-white/[0.5] transition-colors hover:text-white"
                >
                  <span className="text-[8px] text-white/[0.18]">0{index + 1}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/[0.28]">Contato</p>
            <div className="flex flex-col items-start gap-4">
              <a
                href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-white/[0.52] transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
                <ArrowUpRight className="h-3.5 w-3.5 opacity-45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:contato.kuboweb@gmail.com"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-white/[0.52] transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                contato.kuboweb@gmail.com
              </a>
              <a
                href="https://www.instagram.com/kuboweb_oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-white/[0.52] transition-colors hover:text-white"
              >
                <Instagram className="h-4 w-4" />
                @kuboweb_oficial
                <ArrowUpRight className="h-3.5 w-3.5 opacity-45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-y border-white/[0.08] py-6">
          <div className="whitespace-nowrap text-[18vw] font-heading font-semibold leading-[.72] tracking-[-0.085em] text-white/[0.035] sm:text-[13vw] lg:text-[10vw]">
            KUBO WEB®
          </div>
        </div>

        <div className="flex flex-col gap-3 py-7 text-[10px] uppercase tracking-[0.12em] text-white/[0.26] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kubo Web. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>Atendimento online · Brasil</span>
            <Link to="/diagnostico" className="transition-colors hover:text-white/65">Diagnóstico</Link>
            <Link to="/manutencao" className="transition-colors hover:text-white/65">Manutenção</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
