import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, Globe, ShoppingBag, Megaphone, FileText, CheckCircle2 } from "lucide-react";

const serviceTypes = [
  { id: "site", label: "Site para gerar autoridade", icon: Globe },
  { id: "loja", label: "Loja virtual para vender online", icon: ShoppingBag },
  { id: "landing", label: "Página focada em vendas", icon: FileText },
  { id: "anuncios", label: "Tráfego pago (Google Ads)", icon: Megaphone },
] as const;

type ServiceType = typeof serviceTypes[number]["id"];

const QuoteFormSection = () => {
  const [selected, setSelected] = useState<ServiceType | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = (name: string, service: string, details: string) => {
    const msg = `Olá! Sou ${encodeURIComponent(name)}, tenho interesse em ${encodeURIComponent(service)}.${details ? ` Detalhes: ${encodeURIComponent(details)}` : ""} Vim pelo formulário do site.`;
    return `https://wa.me/5511932197334?text=${msg}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = (fd.get("name") as string) || "";
    const details = (fd.get("details") as string) || "";
    const service = serviceTypes.find(s => s.id === selected)?.label || "serviços";

    window.open(whatsappUrl(name, service, details), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="orcamento" className="py-24 md:py-36 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-primary/4 rounded-full blur-[180px] hidden md:block" />

      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <p className="section-label justify-center">Orçamento Rápido</p>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="section-title"
          >
            O que você <span className="text-gradient-primary">precisa?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="section-subtitle"
          >
            Escolha o que faz sentido para o seu negócio e fale direto com a gente.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="card-premium p-6 md:p-8"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4 py-12 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-primary" />
                <p className="text-lg font-semibold text-foreground">Redirecionado para o WhatsApp!</p>
                <p className="text-sm text-muted-foreground">Aguardamos sua mensagem.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Service type selection */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground">O que você está buscando?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceTypes.map((s, i) => {
                      const Icon = s.icon;
                      const isSelected = selected === s.id;
                      return (
                        <motion.button
                          key={s.id}
                          type="button"
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setSelected(s.id)}
                          className={`group flex flex-col items-center gap-2 p-4 rounded-xl border text-center transition-all duration-300 ${
                            isSelected
                              ? "border-primary bg-primary/8 shadow-md shadow-primary/10 scale-[1.02]"
                              : "border-border/50 bg-card/50 hover:border-primary/40 hover:bg-primary/3 hover:shadow-sm"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isSelected
                              ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                              : "bg-muted/40 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className={`text-xs font-medium leading-tight transition-colors duration-200 ${isSelected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                            {s.label}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">Seu nome</label>
                  <Input id="name" name="name" placeholder="Como você gostaria de ser chamado?" required maxLength={100} className="h-12 text-sm" />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-semibold text-foreground">Conte um pouco sobre o projeto <span className="text-muted-foreground font-normal">(opcional)</span></label>
                  <Textarea id="details" name="details" placeholder="Ex: Tenho uma loja de roupas e quero vender online com entrega em SP..." rows={3} maxLength={500} className="text-sm" />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="whatsapp"
                  size="lg"
                  className="w-full shadow-lg shadow-whatsapp/20 hover:shadow-xl hover:shadow-whatsapp/30 hover:scale-[1.01] transition-all duration-300 h-14 text-sm sm:text-base font-bold whitespace-normal"
                  disabled={!selected}
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span className="hidden sm:inline">Quero mais clientes pelo WhatsApp</span>
                  <span className="sm:hidden">Falar pelo WhatsApp</span>
                  <Send className="w-4 h-4 ml-1 shrink-0" />
                </Button>

                <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center sm:justify-center gap-y-1.5 gap-x-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-success" />Resposta em até 2h</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-success" />Sem compromisso</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-success" />Atendimento humano</span>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(QuoteFormSection);
