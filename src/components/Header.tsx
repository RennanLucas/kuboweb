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
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div className="pointer-events-auto mx-auto flex h-12 max-w-[1180px] items-center justify-between rounded-full border border-white/[.1] bg-[#07101f]/82 px-2.5 shadow-[0_10px_36px_rgba(2,8,18,.18)] backdrop-blur-2xl md:h-14 md:px-3.5">
        <Link to="/" aria-label="Kubo Web - início" className="flex items-center pl-1">
          <span className="md:hidden"><BrandMark inverse compact /></span>
          <span className="hidden md:inline-flex"><BrandMark inverse /></span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="rounded-full px-3.5 py-2 text-[11px] font-medium text-white/55 transition-colors hover:bg-white/[.055] hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <a href={wa} target="_blank" rel="noopener noreferrer" className="hidden h-9 items-center gap-2 rounded-full bg-white px-4 text-[11px] font-semibold text-[#07101f] transition-transform hover:-translate-y-0.5 lg:inline-flex">
          Solicitar orçamento <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button onClick={() => setOpen(true)} aria-label="Abrir menu" className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-white/[.12] text-white lg:hidden">
          <Menu className="h-4 w-4" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pointer-events-auto fixed inset-0 z-[60] overflow-hidden bg-[#05070b] px-5 pb-6 pt-5 text-white">
            <div className="pointer-events-none absolute -right-36 -top-16 h-[420px] w-[420px] rounded-full bg-[#2458d8]/20 blur-[130px]" />
            <div className="relative mx-auto flex h-full max-w-2xl flex-col">
              <div className="flex items-center justify-between">
                <BrandMark inverse />
                <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"><X className="h-4 w-4" /></button>
              </div>
              <nav className="mt-12 flex-1">
                {links.map((link, index) => (
                  <motion.a key={link.label} href={link.href} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : index * .035 }} className="group flex items-center justify-between border-b border-white/[.09] py-4.5 text-[1.65rem] font-heading font-semibold tracking-[-.045em] text-white/88">
                    <span className="flex items-center gap-4"><span className="font-mono text-[8px] font-semibold text-[#7ea8ff]">0{index + 1}</span>{link.label}</span>
                    <ArrowUpRight className="h-4.5 w-4.5 text-white/20 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
