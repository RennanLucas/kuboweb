import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import BrandMark from "@/components/BrandMark";

const navLinks = [
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const darkHeroRoutes = ["/", "/portfolio", "/sobre", "/contato", "/servicos", "/faq", "/diagnostico", "/manutencao"];
  const hasDarkHero = darkHeroRoutes.includes(location.pathname) || location.pathname.startsWith("/servicos/");
  const darkTop = hasDarkHero && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        darkTop
          ? "border-b border-white/10 bg-[#07101f]/30 backdrop-blur-md"
          : "border-b border-border/60 bg-background/92 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-2xl"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-[76px] items-center justify-between md:h-[84px]">
          <Link to="/" className="flex items-center" aria-label="Kubo Web - Início">
            <BrandMark inverse={darkTop} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const active = location.pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    darkTop
                      ? active
                        ? "bg-white/10 text-white"
                        : "text-white/65 hover:bg-white/8 hover:text-white"
                      : active
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/portfolio"
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                darkTop
                  ? "border-white/20 text-white/80 hover:border-white/45 hover:bg-white/8 hover:text-white"
                  : "border-border/80 text-foreground hover:border-primary/30 hover:text-primary"
              }`}
            >
              Ver projetos
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Button
              asChild
              size="sm"
              className={`rounded-full px-5 ${darkTop ? "bg-white text-[#07101f] hover:bg-white/90" : ""}`}
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Iniciar projeto
              </a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden ${
              darkTop ? "border-white/20 bg-white/5 text-white" : "border-border/80 bg-background text-foreground"
            }`}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border/60 bg-background/98 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <nav className="container mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Navegação mobile">
          <Link to="/" className="rounded-xl px-4 py-3 text-[15px] font-medium text-foreground">Início</Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded-xl px-4 py-3 text-[15px] font-medium ${
                location.pathname.startsWith(link.href) ? "bg-secondary text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Button asChild size="lg" className="mt-3 w-full rounded-xl">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Iniciar projeto pelo WhatsApp
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
