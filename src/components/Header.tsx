import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoKuboweb from "@/assets/logo-kuboweb-new.webp";

const navLinks = [
  { label: "Início", href: "/" },
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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/92 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-[72px] items-center justify-between md:h-20">
          <Link to="/" className="flex items-center" aria-label="Kubo Web - Início">
            <img
              src={logoKuboweb}
              alt="Kubo Web"
              className="h-9 w-auto object-contain md:h-10"
              width={150}
              height={40}
              decoding="async"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
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
            <Button asChild variant="outline" size="sm" className="rounded-full border-border/80 bg-background">
              <Link to="/portfolio">
                Projetos
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="whatsapp" size="sm" className="rounded-full px-5">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Pedir orçamento
              </a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background text-foreground lg:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border/60 bg-background/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <nav className="container mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Navegação mobile">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                to={link.href}
                className={`rounded-xl px-4 py-3 text-[15px] font-medium ${
                  active ? "bg-secondary text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Button asChild variant="whatsapp" size="lg" className="mt-3 w-full rounded-xl">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Pedir orçamento pelo WhatsApp
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
