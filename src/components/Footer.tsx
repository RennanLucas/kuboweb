import { memo } from "react";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

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
    <footer className="pt-16 pb-24 md:pt-20 md:pb-16 px-4 bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/3 rounded-full blur-[120px] hidden md:block pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-4 gap-10 md:gap-8 mb-10"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="inline-block">
              <Logo size="md" />
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
                { label: "Manutenção", href: "/manutencao" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 w-fit inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground text-sm tracking-wide">Informações</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Consultoria", href: "/diagnostico" },
                { label: "FAQ", href: "/faq" },
                { label: "Contato", href: "/contato" },
                { label: "Atendemos no Brasil", href: "/atendimento" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 w-fit inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground text-sm tracking-wide">Contato</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "https://wa.me/5511932197334", icon: MessageCircle, text: "+55 11 93219-7334", hoverColor: "hover:text-[hsl(142,70%,45%)]", external: true },
                { href: "mailto:contato.kuboweb@gmail.com", icon: Mail, text: "contato.kuboweb@gmail.com", hoverColor: "hover:text-primary", external: false },
                { href: "https://instagram.com/kuboweb_", icon: Instagram, text: "@kuboweb_", hoverColor: "hover:text-primary", external: true },
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

        <div className="h-px w-full bg-gradient-to-r from-transparent via-border/30 to-transparent mb-4" />
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground origin-left relative"
        >
          <p>© {new Date().getFullYear()} Kubo Web. Todos os direitos reservados.</p>
          <p>Feito com dedicação para negócios que querem crescer.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default memo(Footer);
