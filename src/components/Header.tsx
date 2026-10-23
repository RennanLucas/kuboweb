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
  const progress = useSpring(scrollYProgress, { stiffness: 150, damping: 28, mass: 0.22 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 22);
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

  const darkHero =
    darkHeroRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/servicos/") ||
    location.pathname.startsWith("/criacao-de-sites-");

  const inverse = darkHero && !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 h-[2px] origin-left bg-[#78a7ff]"
        style={{ scaleX: progress }}
      />

      <div
        className={`mx-auto flex h-[64px] max-w-[1320px] items-center justify-between rounded-[20px] border px-4 transition-all duration-500 md:h-[68px] md:px-5 ${
          inverse
            ? "border-white/[0.1] bg-[#07101f]/[0.58] shadow-[0_18px_60px_rgba(0,0,0,.12)] backdrop-blur-2xl"
            : "border-black/[0.07] bg-white/[0.88] shadow-[0_18px_55px_rgba(8,17,31,.08)] backdrop-blur-2xl"
        }`}
      >
        <Link
          to="/"
          aria-label="Kubo Web - Início"
          className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78a7ff]/[0.6]"
        >
          <BrandMark inverse={inverse} compact />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navLinks.map((item) => {
            const active = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                  inverse ? "text-white/[0.58] hover:text-white" : "text-[#08111f]/[0.55] hover:text-[#08111f]"
                } ${active ? (inverse ? "text-white" : "text-[#08111f]") : ""}`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="kubo-nav-dot"
                    className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#78a7ff]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/portfolio"
            className={`group inline-flex h-10 items-center gap-2 rounded-full px-4 text-[12px] font-semibold transition-colors ${
              inverse ? "text-white/[0.58] hover:text-white" : "text-[#08111f]/[0.55] hover:text-[#08111f]"
            }`}
          >
            Ver projetos
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex h-10 items-center gap-2 rounded-full px-4 text-[12px] font-semibold transition-all hover:-translate-y-0.5 ${
              inverse
                ? "bg-white text-[#07101f] hover:bg-[#eef4ff]"
                : "bg-[#07101f] text-white hover:bg-[#11233f]"
            }`}
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Iniciar projeto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden ${
            inverse
              ? "border-white/[0.12] bg-white/[0.05] text-white"
              : "border-black/[0.08] bg-black/[0.025] text-[#08111f]"
          }`}
        >
          {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.985 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-[1320px] overflow-hidden rounded-[24px] border border-white/[0.1] bg-[#07101f]/[0.96] p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,.32)] backdrop-blur-2xl lg:hidden"
          >
            <nav className="grid" aria-label="Navegação mobile">
              <Link to="/" className="border-b border-white/[0.08] py-4 text-2xl font-heading font-semibold tracking-[-0.04em]">Início</Link>
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group flex items-center justify-between border-b border-white/[0.08] py-4 text-2xl font-heading font-semibold tracking-[-0.04em] text-white/[0.78] transition-colors hover:text-white"
                >
                  {item.label}
                  <ArrowUpRight className="h-5 w-5 text-white/[0.28] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </nav>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-semibold text-[#07101f]"
            >
              <MessageCircle className="h-4 w-4" />
              Falar sobre um projeto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
