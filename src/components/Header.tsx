import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
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
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.22 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const darkHeroRoutes = [
    "/",
    "/portfolio",
    "/sobre",
    "/contato",
    "/servicos",
    "/faq",
    "/diagnostico",
    "/manutencao",
    "/atendimento",
    "/guia/investimento-site-profissional",
  ];
  const hasDarkHero =
    darkHeroRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/servicos/") ||
    location.pathname.startsWith("/criacao-de-sites-");
  const darkTop = hasDarkHero && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        darkTop
          ? "border-b border-white/10 bg-[#07101f]/34 backdrop-blur-xl"
          : "border-b border-border/60 bg-background/94 shadow-[0_10px_35px_rgba(15,23,42,0.055)] backdrop-blur-2xl"
      }`}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-[#79a9ff]"
        style={{ scaleX: progress }}
      />

      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-[74px] items-center justify-between md:h-[82px]">
          <Link to="/" className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#79a9ff]/70" aria-label="Kubo Web - Início">
            <BrandMark inverse={darkTop} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const active = location.pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    darkTop
                      ? active
                        ? "text-white"
                        : "text-white/62 hover:text-white"
                      : active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className={`absolute inset-x-4 -bottom-1 h-px ${darkTop ? "bg-[#79a9ff]" : "bg-primary"}`}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/portfolio"
              className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                darkTop
                  ? "border-white/18 text-white/78 hover:border-white/38 hover:bg-white/[0.06] hover:text-white"
                  : "border-border/80 text-foreground hover:border-primary/30 hover:bg-primary/[0.025] hover:text-primary"
              }`}
            >
              Ver projetos
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Button
              asChild
              size="sm"
              className={`rounded-full px-5 shadow-none ${darkTop ? "bg-white text-[#07101f] hover:bg-[#eef4ff]" : ""}`}
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
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#79a9ff]/70 lg:hidden ${
              darkTop ? "border-white/20 bg-white/5 text-white" : "border-border/80 bg-background text-foreground"
            }`}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-border/60 bg-background/98 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[540px] opacity-100" : "pointer-events-none max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <nav className="container mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Navegação mobile">
          <Link to="/" className="rounded-xl px-4 py-3 text-[15px] font-medium text-foreground">Início</Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
                location.pathname.startsWith(link.href) ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
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
