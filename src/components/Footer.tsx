import { MessageCircle, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/30 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/25">
                <span className="text-primary-foreground font-heading font-bold text-sm">K</span>
              </div>
              <span className="font-heading font-bold text-lg text-foreground">
                Kubo<span className="text-primary">Web</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sites profissionais que geram resultados reais para o seu negócio.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "Serviços", to: "/servicos" },
                { label: "Preços", to: "/precos" },
                { label: "FAQ", to: "/faq" },
                { label: "Contato", to: "/contato" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Contato</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5511932197334"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[hsl(var(--whatsapp))] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                +55 11 93219-7334
              </a>
              <a
                href="mailto:rennanlucas27oficial@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                rennanlucas27oficial@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                São Paulo, SP
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Kubo Web. Todos os direitos reservados.</p>
          <p>Feito com dedicação para negócios que querem crescer.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
