import { memo } from "react";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logoKuboweb from "@/assets/logo-kuboweb-new.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

const Footer = () => {
  return (
    <footer className="py-14 md:py-16 px-4 border-t border-border/20 bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/3 rounded-full blur-[120px] hidden md:block" />
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-4 gap-10 md:gap-8 mb-10"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="inline-block">
              <motion.img
                src={logoKuboweb}
                alt="KuboWeb"
                className="h-40 w-auto object-contain"
                width={128}
                height={128}
                loading="lazy"
                decoding="async"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px]">
              Sites profissionais que geram resultados reais para o seu negócio.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground text-sm tracking-wide">Navegação</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Início", href: "/" },
                { label: "Sobre", href: "/sobre" },
                { label: "Serviços", href: "/servicos" },
                { label: "Portfólio", href: "/portfolio" },
              ].map((link) => (
                <motion.div key={link.href} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground text-sm tracking-wide">Informações</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Preços", href: "/precos" },
                { label: "FAQ", href: "/faq" },
                { label: "Contato", href: "/contato" },
              ].map((link) => (
                <motion.div key={link.href} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit inline-block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground text-sm tracking-wide">Contato</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "https://wa.me/5511932197334", icon: MessageCircle, text: "+55 11 93219-7334", hoverColor: "hover:text-[hsl(142,70%,45%)]", external: true },
                { href: "mailto:kuboweb.contato@gmail.com", icon: Mail, text: "kuboweb.contato@gmail.com", hoverColor: "hover:text-primary", external: false },
                { href: "https://instagram.com/kuboweboficial", icon: Instagram, text: "@kuboweboficial", hoverColor: "hover:text-primary", external: true },
              ].map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-2.5 text-sm text-muted-foreground ${item.hoverColor} transition-colors`}
                  whileHover={{ x: 4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className="w-4 h-4" />
                  {item.text}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground origin-left"
        >
          <p>© {new Date().getFullYear()} Kubo Web. Todos os direitos reservados.</p>
          <p>Feito com dedicação para negócios que querem crescer.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default memo(Footer);
