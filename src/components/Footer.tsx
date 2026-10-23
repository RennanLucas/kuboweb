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

const whatsappUrl = "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050a13] px-4 pb-8 pt-16 text-white md:pt-20">
      <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[#326cff]/[0.14] blur-[180px]" />
      <div className="container relative mx-auto max-w-[1380px]">
        <div className="flex flex-col gap-8 border-b border-white/[0.1] pb-10 lg:flex-row lg:items-end lg:justify-between md:pb-12">
          <div>
            <Link to="/" className="inline-flex" aria-label="Kubo Web - Início">
              <BrandMark inverse />
            </Link>
            <p className="mt-6 max-w-[560px] text-sm leading-7 text-white/[0.42] md:text-base">
              Estratégia, direção visual e desenvolvimento para empresas que precisam de uma presença digital mais forte, clara e profissional.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-[52px] items-center justify-center gap-2 self-start rounded-full bg-white px-6 text-sm font-semibold text-[#07101f] transition-all hover:-translate-y-0.5 hover:bg-[#edf3ff] lg:self-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Iniciar um projeto
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid gap-12 border-b border-white/[0.1] py-12 md:grid-cols-[1.15fr_.7fr_.9fr] md:py-14">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#8db6ff]">Kubo Web</p>
            <h2 className="mt-5 max-w-[650px] text-4xl font-heading font-semibold leading-[.98] tracking-[-0.055em] md:text-5xl lg:text-6xl">
              Projetos digitais com
              <span className="block text-white/[0.28]">menos cara de template.</span>
            </h2>
          </div>

          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/[0.28]">Navegação</p>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-1">
              {navigation.map((item) => (
                <Link key={item.href} to={item.href} className="group inline-flex items-center gap-2 text-sm font-medium text-white/[0.52] transition-colors hover:text-white">
                  {item.label}
                  <span className="h-px w-0 bg-[#8db6ff] transition-all duration-300 group-hover:w-5" />
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/[0.28]">Contato</p>
            <div className="space-y-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-white/[0.08] pb-3 text-sm font-medium text-white/[0.52] transition-colors hover:text-white">
                <span className="inline-flex items-center gap-2.5"><MessageCircle className="h-4 w-4" />WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="mailto:contato.kuboweb@gmail.com" className="group flex items-center justify-between border-b border-white/[0.08] pb-3 text-sm font-medium text-white/[0.52] transition-colors hover:text-white">
                <span className="inline-flex items-center gap-2.5"><Mail className="h-4 w-4" />E-mail</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="https://www.instagram.com/kuboweb_oficial/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-white/[0.08] pb-3 text-sm font-medium text-white/[0.52] transition-colors hover:text-white">
                <span className="inline-flex items-center gap-2.5"><Instagram className="h-4 w-4" />@kuboweb_oficial</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-b border-white/[0.08] py-7 md:py-9">
          <div className="whitespace-nowrap text-[18vw] font-heading font-semibold leading-[.72] tracking-[-0.09em] text-white/[0.055] sm:text-[16vw] lg:text-[12.7rem] xl:text-[14.8rem]">
            KUBO WEB
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-[10px] uppercase tracking-[0.14em] text-white/[0.25] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kubo Web</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <span>Atendimento online · Brasil</span>
            <Link to="/diagnostico" className="transition-colors hover:text-white/60">Diagnóstico</Link>
            <Link to="/manutencao" className="transition-colors hover:text-white/60">Manutenção</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
