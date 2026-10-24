import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import BrandMark from "@/components/BrandMark";

const links = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Projetos", href: "/portfolio" },
  { label: "Processo", href: "/#processo" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

const wa = "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const Header = () => {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  const inverse = !scrolled;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-2.5 md:px-5 md:pt-4">
      <div className={`pointer-events-auto mx-auto flex max-w-[1320px] items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 md:px-4 md:py-2.5 ${scrolled ? "border-black/[.07] bg-white/92 shadow-[0_10px_34px_rgba(8,17,31,.08)] backdrop-blur-xl" : "border-white/[.1] bg-[#07101f]/50 backdrop-blur-xl"}`}>
        <Link to="/" aria-label="Kubo Web - início"><BrandMark inverse={inverse} /></Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={`rounded-full px-3.5 py-2 text-[11px] font-medium transition-colors ${inverse ? "text-white/55 hover:bg-white/[.05] hover:text-white" : "text-[#08111f]/55 hover:bg-black/[.035] hover:text-[#08111f]"}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href={wa} target="_blank" rel="noopener noreferrer" className={`hidden h-9 items-center gap-2 rounded-full px-4 text-[11px] font-semibold transition-transform hover:-translate-y-0.5 lg:inline-flex ${inverse ? "bg-white text-[#08111f]" : "bg-[#08111f] text-white"}`}>
          Solicitar orçamento <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button onClick={() => setOpen(true)} aria-label="Abrir menu" className={`flex h-9 w-9 items-center justify-center rounded-full border lg:hidden ${inverse ? "border-white/10 text-white" : "border-black/10 text-[#08111f]"}`}>
          <Menu className="h-4 w-4" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pointer-events-auto fixed inset-0 z-[60] overflow-hidden bg-[#050a13] p-5 text-white">
            <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#2458d8]/20 blur-[120px]" />
            <div className="relative mx-auto flex h-full max-w-2xl flex-col">
              <div className="flex items-center justify-between"><BrandMark inverse /><button onClick={() => setOpen(false)} aria-label="Fechar menu" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"><X className="h-4 w-4" /></button></div>
              <nav className="mt-10 flex-1">
                {links.map((link, index) => (
                  <motion.a key={link.label} href={link.href} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : index * .04 }} className="flex items-center justify-between border-b border-white/10 py-4 text-[1.7rem] font-heading font-semibold tracking-[-.045em] text-white/85">
                    {link.label}<ArrowUpRight className="h-5 w-5 text-white/25" />
                  </motion.a>
                ))}
              </nav>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#08111f]">Solicitar orçamento</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
