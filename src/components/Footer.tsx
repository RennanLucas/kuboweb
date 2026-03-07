import { MessageCircle, Mail, MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logoKuboweb from "@/assets/logo-kuboweb.png";

const Footer = () => {
  return (
    <footer className="py-14 md:py-16 px-4 border-t border-border/20 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-10">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={logoKuboweb}
                alt="KuboWeb"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px]">
              Sites profissionais que geram resultados reais para o seu negócio.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground text-sm tracking-wide">Navegação</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Início", href: "/" },
                { label: "Sobre", href: "/sobre" },
                { label: "Serviços", href: "/servicos" },
                { label: "Portfólio", href: "/portfolio" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground text-sm tracking-wide">Informações</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Preços", href: "/precos" },
                { label: "FAQ", href: "/faq" },
                { label: "Contato", href: "/contato" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground text-sm tracking-wide">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5511932197334"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-[hsl(142,70%,45%)] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                +55 11 93219-7334
              </a>
              <a
                href="mailto:kuboweb.contato@gmail.com"
                className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                kuboweb.contato@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                São Paulo, SP
              </div>
              <a
                href="https://instagram.com/kuboweboficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @kuboweboficial
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Kubo Web. Todos os direitos reservados.</p>
          <p>Feito com dedicação para negócios que querem crescer.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
