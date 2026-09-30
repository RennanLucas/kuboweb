import { useEffect, useState } from "react";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoKuboweb from "@/assets/logo-kuboweb-new.webp";

const serviceSubLinks = [
  { label: "Sites Institucionais", href: "/servicos/sites-institucionais" },
  { label: "Landing Pages", href: "/servicos/landing-pages" },
  { label: "Loja Virtual", href: "/servicos/loja-virtual" },
  { label: "Anúncios", href: "/servicos/anuncios" },
];

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos", hasDropdown: true },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Manutenção", href: "/manutencao" },
  { label: "Diagnóstico", href: "/diagnostico" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar%3F";

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const isServicesActive = location.pathname.startsWith("/servicos");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/95 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-background/90">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex shrink-0 items-center" aria-label="Kubo Web - Início">
            <img
              src={logoKuboweb}
              alt="Kubo Web - Criação de Sites Profissionais"
              className="h-10 w-auto object-contain md:h-12"
              width={160}
              height={48}
              decoding="async"
            />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const active = link.hasDropdown
                ? isServicesActive
                : location.pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      to={link.href}
                      className={`inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors ${
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </Link>

                    {servicesOpen && (
                      <div className="absolute left-0 top-full z-50 pt-2">
                        <div className="min-w-[220px] rounded-xl border border-border/60 bg-card p-2 shadow-xl">
                          <Link
                            to="/servicos"
                            className="block rounded-lg px-3 py-2.5 text-[13px] font-medium text-foreground hover:bg-accent"
                          >
                            Todos os Serviços
                          </Link>
                          {serviceSubLinks.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              className={`block rounded-lg px-3 py-2.5 text-[13px] transition-colors ${
                                location.pathname === sub.href
                                  ? "bg-primary/10 font-medium text-primary"
                                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button variant="whatsapp" size="sm" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-secondary/60 lg:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`border-t border-border/30 bg-background/98 lg:hidden ${mobileOpen ? "block" : "hidden"}`}
      >
        <nav className="container mx-auto max-w-6xl px-4 py-3" aria-label="Navegação móvel">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = link.hasDropdown
                ? isServicesActive
                : location.pathname === link.href;

              if (link.hasDropdown) {
                return (
                  <div key={link.href}>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] ${
                        active
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="ml-4 border-l border-border/40 py-1 pl-3">
                        <Link
                          to="/servicos"
                          className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                        >
                          Todos os Serviços
                        </Link>
                        {serviceSubLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className={`block rounded-lg px-3 py-2.5 text-sm ${
                              location.pathname === sub.href
                                ? "font-medium text-primary"
                                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`rounded-xl px-4 py-3 text-[15px] ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-3 border-t border-border/30 pt-3">
            <Button variant="whatsapp" size="lg" className="w-full" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
