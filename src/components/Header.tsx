import { useState, useEffect, useRef } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoKuboweb from "@/assets/logo-kuboweb-dark.png";

const navLinks = [
{ label: "Benefícios", href: "#beneficios" },
{ label: "Serviços", href: "#servicos" },
{ label: "Processo", href: "#processo" },
{ label: "Preços", href: "#precos" },
{ label: "Depoimentos", href: "#depoimentos" },
{ label: "FAQ", href: "#faq" }];


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      setScrolled(currentY > 20);
      // Only hide after scrolling well past the hero
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

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 will-change-transform transition-[transform,opacity] duration-500 ease-in-out ${
      hidden && !mobileOpen ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"} ${
      scrolled ?
      "bg-background/95 backdrop-blur-2xl border-b border-border/20 shadow-[0_1px_20px_rgba(0,0,0,0.4)]" :
      "bg-transparent"}`
      }>

      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <img alt="KuboWeb" className="h-24 md:h-28 w-auto object-contain mix-blend-lighten" src="/lovable-uploads/c9fee460-be3a-465e-907f-be07776348d6.jpg" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) =>
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-3.5 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/60">

                {link.label}
              </button>
            )}
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
            aria-label="Menu">

            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen &&
      <div className="md:hidden bg-background/98 backdrop-blur-2xl border-t border-border/30">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-0.5">
            {navLinks.map((link) =>
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            className="px-4 py-3 text-left text-[15px] text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-colors">

                {link.label}
              </button>
          )}
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
      }
    </header>);

};

export default Header;