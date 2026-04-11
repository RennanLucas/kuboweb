import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, Globe, ShoppingBag, Megaphone, FileText, CheckCircle2 } from "lucide-react";

const serviceTypes = [
  { id: "site", label: "Site Institucional", icon: Globe },
  { id: "loja", label: "Loja Virtual", icon: ShoppingBag },
  { id: "landing", label: "Landing Page", icon: FileText },
  { id: "anuncios", label: "Google Ads", icon: Megaphone },
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
            Solicite seu <span className="text-gradient-primary">orçamento</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="section-subtitle"
          >
            Selecione o serviço, preencha seus dados e fale direto no WhatsApp.
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
                  <label className="text-sm font-medium text-foreground">Tipo de serviço</label>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceTypes.map(s => {
                      const Icon = s.icon;
                      const isSelected = selected === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelected(s.id)}
                          className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                            isSelected
                              ? "border-primary/50 bg-primary/5 shadow-glow-sm"
                              : "border-border/50 bg-card/50 hover:border-primary/30"
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                          <span className={`text-sm font-medium ${isSelected ? "text-foreground" : "text-muted-foreground"}`}>
                            {s.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Seu nome</label>
                  <Input id="name" name="name" placeholder="Como podemos te chamar?" required maxLength={100} />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-medium text-foreground">Conte um pouco sobre o projeto <span className="text-muted-foreground">(opcional)</span></label>
                  <Textarea id="details" name="details" placeholder="Ex: Preciso de um site para minha clínica com agendamento online..." rows={3} maxLength={500} />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="whatsapp"
                  size="lg"
                  className="w-full shadow-glow-sm"
                  disabled={!selected}
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar pelo WhatsApp
                  <Send className="w-4 h-4 ml-1" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Atendimento humanizado · Resposta em até 2h · Sem compromisso
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(QuoteFormSection);
