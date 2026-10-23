import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import "@/styles/studio.css";

const contact =
  "https://wa.me/5511932197334?text=" +
  encodeURIComponent(
    "Olá, vim pelo site da Kubo Web e quero conversar sobre um projeto.",
  );

export default function StudioHeader() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const home = pathname === "/";
  const links = [
    { label: "Projetos", href: home ? "#projetos" : "/portfolio" },
    { label: "Serviços", href: home ? "#servicos" : "/servicos" },
    {
      label: home ? "Como funciona" : "Contato",
      href: home ? "#processo" : "/contato",
    },
    { label: "O estúdio", href: "/sobre" },
  ];
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  const renderLink = (item: (typeof links)[number], mobile = false) =>
    item.href.startsWith("#") ? (
      <a key={item.label} href={item.href}>
        {item.label}
        {mobile && <ArrowUpRight size={20} />}
      </a>
    ) : (
      <Link
        key={item.label}
        to={item.href}
        aria-current={pathname.startsWith(item.href) ? "page" : undefined}
      >
        {item.label}
        {mobile && <ArrowUpRight size={20} />}
      </Link>
    );
  return (
    <header className="kw-studio kw-header">
      <div className="kw-header-inner">
        <Link to="/" aria-label="Kubo Web — início" className="kw-brand">
          <BrandMark inverse />
        </Link>
        <nav className="kw-nav" aria-label="Navegação principal">
          {links.map((item) => renderLink(item))}
        </nav>
        <a
          className="kw-header-cta"
          href={contact}
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos conversar <ArrowUpRight size={16} />
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="kw-menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="studio-mobile-nav"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <nav
          id="studio-mobile-nav"
          className="kw-mobile-nav"
          aria-label="Navegação mobile"
          onClick={() => setOpen(false)}
        >
          {links.map((item) => renderLink(item, true))}
          <a href={contact} target="_blank" rel="noopener noreferrer">
            Conversar no WhatsApp <MessageCircle size={20} />
          </a>
        </nav>
      )}
    </header>
  );
}
