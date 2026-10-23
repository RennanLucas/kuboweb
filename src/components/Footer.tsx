import { memo } from "react";
import { ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logoKuboweb from "@/assets/logo-kuboweb-new.webp";

const navigation = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/70 bg-background px-4 pb-24 pt-14 md:pb-10 md:pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-border/70 pb-10 md:grid-cols-[1.2fr_0.8fr_1fr] md:pb-12">
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="Kubo Web - Início">
              <img
                src={logoKuboweb}
                alt="Kubo Web"
                className="h-10 w-auto object-contain"
                width={150}
                height={40}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Criação de sites, landing pages e lojas virtuais para negócios que precisam de uma presença digital mais profissional.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Navegação</p>
            <nav className="flex flex-col items-start gap-2.5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Contato</p>
            <div className="flex flex-col items-start gap-3">
              <a
                href="https://wa.me/5511932197334"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
                <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:contato.kuboweb@gmail.com"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                contato.kuboweb@gmail.com
              </a>
              <a
                href="https://www.instagram.com/kuboweb_oficial"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
                @kuboweb_oficial
                <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kubo Web. Todos os direitos reservados.</p>
          <p>Atendimento online no Brasil.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
