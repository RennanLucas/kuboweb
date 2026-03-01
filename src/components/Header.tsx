import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoKuboweb from "@/assets/logo-kuboweb-dark.png";

const navLinks = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Preços", href: "#precos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-2xl border-b border-border/30 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img src={logoKuboweb} alt="KuboWeb" className="h-16 md:h-20 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-3.5 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/60"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Button variant="whatsapp" size="sm" asChild>
              <a href="https://wa.me/5511932197334" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-2xl border-t border-border/30">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-3 text-left text-[15px] text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-border/30">
              <Button variant="whatsapp" size="lg" className="w-full" asChild>
                <a href="https://wa.me/5511932197334" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
