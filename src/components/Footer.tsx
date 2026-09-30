import { memo } from "react";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logoKuboweb from "@/assets/logo-kuboweb-new.webp";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/30 bg-card/40 px-4 pb-24 pt-14 md:pb-16 md:pt-16">
      <div className="absolute left-1/2 top-0 h-[180px] w-[600px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[110px]" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="mb-10 grid gap-10 md:grid-cols-4 md:gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center" aria-label="Kubo Web - Início">
              <img
                src={logoKuboweb}
                alt="Kubo Web - Criação de Sites Profissionais"
                className="h-12 w-auto object-contain"
                width={160}
                height={48}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <div>
              <p className="font-heading text-base font-bold text-foreground">Kubo Web</p>
              <p className="mt-2 max-w-[290px] text-sm leading-relaxed text-muted-foreground">
                Criação de sites profissionais, landing pages e lojas virtuais com foco em
                experiência, performance e conversão.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-sm font-semibold tracking-wide text-foreground">
              Serviços
            </h2>
            <nav className="flex flex-col gap-2.5" aria-label="Serviços no rodapé">
              {[
                { label: "Sites Institucionais", href: "/servicos/sites-institucionais" },
                { label: "Landing Pages", href: "/servicos/landing-pages" },
                { label: "Loja Virtual", href: "/servicos/loja-virtual" },
                { label: "Gestão de Anúncios", href: "/servicos/anuncios" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="w-fit text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-sm font-semibold tracking-wide text-foreground">
              Kubo Web
            </h2>
            <nav className="flex flex-col gap-2.5" aria-label="Institucional no rodapé">
              {[
                { label: "Sobre", href: "/sobre" },
                { label: "Portfólio", href: "/portfolio" },
                { label: "Diagnóstico", href: "/diagnostico" },
                { label: "FAQ", href: "/faq" },
                { label: "Contato", href: "/contato" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="w-fit text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading text-sm font-semibold tracking-wide text-foreground">
              Contato
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5511932197334"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>+55 11 93219-7334</span>
              </a>
              <a
                href="mailto:contato.kuboweb@gmail.com"
                className="flex items-center gap-2.5 break-all text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>contato.kuboweb@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/kuboweb_oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-4 w-4 shrink-0" />
                <span>@kuboweb_oficial</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Atendimento online em todo o Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border/30 pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Kubo Web. Todos os direitos reservados.</p>
          <p>Sites profissionais para negócios que querem crescer no digital.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
