import { useState, useEffect, useRef } from "react";
import { MessageCircle, Menu, X, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoKuboweb from "@/assets/logo-kuboweb-new.webp";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#comparativo" },
  { label: "Cases", href: "#cases" },
  { label: "Simulador", href: "#simulador" },
  { label: "Planos", href: "#precos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      setScrolled(currentY > 20);
      if (delta > 20 && currentY > 300) {
        setHidden(true);
      } else if (delta < -10) {
        setHidden(false);
      }
      lastScrollY.current = currentY;

      // Update active section based on scroll position
      if (location.pathname === "/") {
        const sections = navLinks.map((l) => l.href.substring(1));
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(targetId);
        }
      }
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 will-change-transform transition-transform duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
        hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-background/95 backdrop-blur-2xl border-b border-border/20 shadow-lg shadow-primary/[0.03]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center shrink-0">
            <img
              alt="Kubo Web - Criação de Sites Profissionais"
              className="h-28 md:h-36 lg:h-40 w-auto object-contain hover:scale-105 transition-transform duration-200 -my-6 md:-my-8"
              src={logoKuboweb}
              width={200}
              height={80}
              decoding="async"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2 text-[13px] font-semibold transition-all duration-200 rounded-lg relative ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="whatsapp" size="sm" asChild className="shadow-glow-sm">
              <a
                href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20quero%20solicitar%20um%20or%C3%A7amento.%20Pode%20me%20ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2 font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors duration-150 active:scale-90"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-background/98 backdrop-blur-2xl border-t border-border/30 overflow-hidden transition-[grid-template-rows] duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]`}
        style={{
          display: "grid",
          gridTemplateRows: mobileOpen ? "1fr" : "0fr",
        }}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 text-left text-sm font-semibold rounded-xl transition-colors duration-150 flex items-center justify-between ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-border/30">
              <Button variant="whatsapp" size="lg" className="w-full shadow-glow-sm" asChild>
                <a
                  href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20quero%20solicitar%20um%20or%C3%A7amento.%20Pode%20me%20ajudar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2 font-bold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
