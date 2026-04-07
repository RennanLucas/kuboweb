import { useState, useEffect, useRef } from "react";
import { MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoKuboweb from "@/assets/logo-kuboweb-premium.png";

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
  { label: "Calculadora", href: "/calculadora" },
  { label: "Consultoria", href: "/diagnostico" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();

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
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const isServicosActive = location.pathname.startsWith("/servicos");

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden && !mobileOpen ? -100 : 0, opacity: hidden && !mobileOpen ? 0 : 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 will-change-transform ${
        scrolled
          ? "bg-background/95 backdrop-blur-2xl border-b border-border/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center shrink-0">
            <motion.img
              alt="KuboWeb"
              className="h-44 md:h-40 w-auto object-contain"
              src={logoKuboweb}
              width={160}
              height={160}
              decoding="async"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                className="relative"
                {...(link.hasDropdown
                  ? { onMouseEnter: handleDropdownEnter, onMouseLeave: handleDropdownLeave }
                  : {})}
              >
                <Link
                  to={link.href}
                  className={`px-3.5 py-2 text-[13px] font-medium transition-colors rounded-lg relative inline-flex items-center gap-1 ${
                    link.hasDropdown
                      ? isServicosActive
                        ? "text-primary bg-primary/8"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                      : location.pathname === link.href
                        ? "text-primary bg-primary/8"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  )}
                  {(link.hasDropdown ? isServicosActive : location.pathname === link.href) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 pt-2 z-50"
                      >
                        <div className="bg-card/98 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl py-2 min-w-[200px]">
                          {serviceSubLinks.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              className={`block px-4 py-2.5 text-[13px] font-medium transition-colors ${
                                location.pathname === sub.href
                                  ? "text-primary bg-primary/8"
                                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Button variant="whatsapp" size="sm" asChild>
              <a
                href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
            aria-label="Menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-background/98 backdrop-blur-2xl border-t border-border/30 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-3 flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`w-full px-4 py-3 text-left text-[15px] rounded-xl transition-colors flex items-center justify-between ${
                          isServicosActive
                            ? "text-primary bg-primary/8"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <Link
                              to={link.href}
                              className="block px-8 py-2.5 text-[14px] text-muted-foreground hover:text-foreground transition-colors"
                            >
                              Todos os Serviços
                            </Link>
                            {serviceSubLinks.map((sub) => (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                className={`block px-8 py-2.5 text-[14px] transition-colors ${
                                  location.pathname === sub.href
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`px-4 py-3 text-left text-[15px] rounded-xl transition-colors block ${
                        location.pathname === link.href
                          ? "text-primary bg-primary/8"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                className="pt-3 mt-2 border-t border-border/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
              >
                <Button variant="whatsapp" size="lg" className="w-full" asChild>
                  <a
                    href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais.%20Pode%20me%20ajudar%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
