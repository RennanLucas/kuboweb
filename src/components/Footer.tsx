import { MessageCircle, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-14 md:py-16 px-4 border-t border-border/20 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-10">
          <div className="space-y-4">
            <a href="#" className="inline-block">
              <img
                src="/lovable-uploads/9a3f5302-65af-43f4-b5a2-96e1efe72e54.png"
                alt="KuboWeb"
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px]">
              Sites profissionais que geram resultados reais para o seu negócio.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground text-sm tracking-wide">Navegação</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Benefícios", href: "#beneficios" },
                { label: "Serviços", href: "#servicos" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </a>
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
