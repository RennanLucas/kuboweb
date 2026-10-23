import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import BrandMark from "@/components/BrandMark";

const navLinks = [
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 32, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 26);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
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

  const inverse = hasDarkHero && !scrolled;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 md:top-4 md:px-5">
      <motion.div
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 h-[2px] origin-left bg-[#7ea8ff]"
        style={{ scaleX: progress }}
      />

      <div
        className={`pointer-events-auto mx-auto flex max-w-[1240px] items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 md:px-4 ${
          inverse
            ? "border-white/10 bg-[#080d16]/62 shadow-[0_18px_70px_rgba(0,0,0,.2)] backdrop-blur-2xl"
            : "border-black/[0.07] bg-white/88 shadow-[0_18px_55px_rgba(15,23,42,.08)] backdrop-blur-2xl"
        }`}
      >
        <Link
          to="/"
          className="rounded-full px-2 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ea8ff]/70"
          aria-label="Kubo Web - Início"
        >
          <BrandMark inverse={inverse} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const active = link.href === "/" ? location.pathname === "/" : location.pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                  inverse ? "text-white/62 hover:text-white" : "text-[#07101f]/58 hover:text-[#07101f]"
                } ${active ? (inverse ? "text-white" : "text-[#07101f]") : ""}`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="kubo-nav-pill"
                    className={`absolute inset-x-3 -bottom-[2px] h-px ${inverse ? "bg-[#91b5ff]" : "bg-[#2c61dc]"}`}
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/portfolio"
            className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-[13px] font-semibold transition-all ${
              inverse ? "text-white/62 hover:bg-white/[0.05] hover:text-white" : "text-[#07101f]/58 hover:bg-black/[0.035] hover:text-[#07101f]"
            }`}
          >
            Ver trabalho
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-[13px] font-semibold transition-all hover:-translate-y-0.5 ${
              inverse ? "bg-white text-[#07101f] hover:bg-[#edf3ff]" : "bg-[#07101f] text-white hover:bg-[#13213a]"
            }`}
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Iniciar projeto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
            inverse ? "border-white/12 bg-white/[0.045] text-white" : "border-black/[0.08] bg-black/[0.025] text-[#07101f]"
          }`}
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
        >
          <Menu className="h-4.5 w-4.5" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="pointer-events-auto fixed inset-0 z-[60] bg-[#050a13] px-5 py-5 text-white"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute left-1/2 top-[-240px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#326cff]/18 blur-[150px]" />
              <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:64px_64px]" />
            </div>

            <div className="relative mx-auto flex h-full max-w-2xl flex-col">
              <div className="flex items-center justify-between">
                <BrandMark inverse />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.05]"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-16 flex flex-1 flex-col" aria-label="Navegação mobile">
                {[{ label: "Início", href: "/" }, ...navLinks].map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + index * 0.045 }}
                    className="border-b border-white/10"
                  >
                    <Link
                      to={link.href}
                      className="group flex items-center justify-between py-5 text-[2rem] font-heading font-semibold tracking-[-0.045em] text-white/84"
                    >
                      {link.label}
                      <ArrowUpRight className="h-5 w-5 text-white/28 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#07101f]"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                Conversar sobre um projeto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
