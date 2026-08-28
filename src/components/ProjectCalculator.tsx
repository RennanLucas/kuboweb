import { useState, useMemo, memo } from "react";
import { MessageCircle, Calculator, Check, Sparkles, ArrowRight, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProjectOption {
  id: string;
  name: string;
  price: number;
  description: string;
  badge?: string;
}

interface AddonOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

const projectTypes: ProjectOption[] = [
  {
    id: "landing",
    name: "Landing Page",
    price: 560,
    description: "Página única de alta conversão, ideal para campanhas pagas e lançamentos.",
    badge: "Mais Rápido",
  },
  {
    id: "site",
    name: "Site Institucional",
    price: 760,
    description: "Múltiplas páginas para empresas consolidarem autoridade e presença no Google.",
    badge: "Mais Popular",
  },
  {
    id: "loja",
    name: "Loja Virtual (E-commerce)",
    price: 1200,
    description: "Catálogo completo com carrinho, checkout Pix/cartão e painel de estoque.",
    badge: "Mais Completo",
  },
  {
    id: "anuncios",
    name: "Campanha Google Ads",
    price: 280,
    description: "Configuração completa de tráfego pago para atrair clientes imediatos.",
  },
];

const availableAddons: AddonOption[] = [
  {
    id: "maintenance",
    name: "Manutenção Mensal (+ Suporte)",
    price: 70,
    description: "Backups, atualizações de segurança e alterações de conteúdo todo mês.",
  },
  {
    id: "seo_advanced",
    name: "Otimização de SEO Avançada",
    price: 180,
    description: "Pesquisa aprofundada de palavras-chave locais e marcação avançada no Google.",
  },
  {
    id: "copywriting",
    name: "Redação de Textos Persuasivos",
    price: 150,
    description: "Copywriting completo focado no seu nicho para dobrar a conversão.",
  },
  {
    id: "google_setup",
    name: "Setup Google Meu Negócio",
    price: 120,
    description: "Configuração e otimização da sua ficha no Google Maps para busca local.",
  },
];

const ProjectCalculator = () => {
  const [selectedType, setSelectedType] = useState<string>("site");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["maintenance"]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedProject = useMemo(
    () => projectTypes.find((p) => p.id === selectedType) || projectTypes[0],
    [selectedType]
  );

  const totalPrice = useMemo(() => {
    const base = selectedProject.price;
    const addonsTotal = selectedAddons.reduce((acc, addonId) => {
      const addon = availableAddons.find((a) => a.id === addonId);
      return acc + (addon ? addon.price : 0);
    }, 0);
    return base + addonsTotal;
  }, [selectedProject, selectedAddons]);

  const whatsappMessage = useMemo(() => {
    const addonsList = selectedAddons
      .map((id) => availableAddons.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text = `Olá, Kubo Web! Fiz uma simulação de projeto no site:
• Tipo: ${selectedProject.name} (R$ ${selectedProject.price})
${addonsList ? `• Adicionais: ${addonsList}\n` : ""}• Investimento Estimado: R$ ${totalPrice}

Gostaria de entender os próximos passos para darmos início!`;

    return `https://wa.me/5511932197334?text=${encodeURIComponent(text)}`;
  }, [selectedProject, selectedAddons, totalPrice]);

  return (
    <section id="simulador" className="py-24 md:py-36 px-4 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/20 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-14 md:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider"
          >
            <Calculator className="w-3.5 h-3.5" />
            Simulador de Investimento
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="section-title"
          >
            Personalize seu projeto e <span className="text-gradient-hero">veja o valor na hora</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle max-w-xl"
          >
            Transparência total. Escolha o formato ideal para o seu negócio e envie a proposta diretamente para nossa equipe.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls column */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Project Type Selection */}
            <div>
              <label className="text-xs font-bold text-primary uppercase tracking-wider block mb-3">
                1. Escolha o tipo de projeto:
              </label>
              <div className="grid sm:grid-cols-2 gap-3.5">
                {projectTypes.map((project) => {
                  const isSelected = selectedType === project.id;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setSelectedType(project.id)}
                      className={`relative text-left p-4 rounded-2xl border transition-all duration-200 ${
                        isSelected
                          ? "bg-card border-primary ring-2 ring-primary/20 shadow-md shadow-primary/10"
                          : "bg-card/50 border-border/40 hover:border-primary/30 hover:bg-card"
                      }`}
                    >
                      {project.badge && (
                        <span className="absolute -top-2.5 right-3 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                          {project.badge}
                        </span>
                      )}
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="font-heading font-bold text-foreground text-sm">{project.name}</h4>
                        <span className="text-primary font-heading font-extrabold text-sm">
                          R$ {project.price}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Optional Addons */}
            <div>
              <label className="text-xs font-bold text-primary uppercase tracking-wider block mb-3">
                2. Adicionais recomendados (opcional):
              </label>
              <div className="space-y-2.5">
                {availableAddons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full flex items-center justify-between p-3.5 rounded-2xl border transition-all text-left ${
                        isChecked
                          ? "bg-primary/5 border-primary/30 text-foreground"
                          : "bg-card/40 border-border/30 text-muted-foreground hover:bg-card/70 hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3 pr-4">
                        <div
                          className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isChecked ? "bg-primary text-primary-foreground" : "border border-border/60"
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground leading-snug">{addon.name}</p>
                          <p className="text-xs text-muted-foreground">{addon.description}</p>
                        </div>
                      </div>
                      <span className="text-xs font-heading font-bold text-primary shrink-0">
                        + R$ {addon.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result card column */}
          <div className="lg:col-span-5">
            <motion.div
              layout
              className="sticky top-28 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-card via-card to-primary/[0.04] border-2 border-primary/30 shadow-2xl shadow-primary/10 space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border/30">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Resumo do Projeto</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-success">
                  <Shield className="w-3.5 h-3.5" />
                  Garantia de 7 dias
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center text-foreground font-medium">
                  <span>{selectedProject.name}</span>
                  <span className="font-heading font-bold">R$ {selectedProject.price}</span>
                </div>

                {selectedAddons.map((id) => {
                  const addon = availableAddons.find((a) => a.id === id);
                  if (!addon) return null;
                  return (
                    <div key={id} className="flex justify-between items-center text-xs text-muted-foreground">
                      <span>+ {addon.name}</span>
                      <span className="font-medium text-foreground">R$ {addon.price}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-border/40 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-muted-foreground block">Investimento Total</span>
                  <span className="text-[10px] text-muted-foreground">Pagamento facilitado</span>
                </div>
                <div className="text-right">
                  <motion.span
                    key={totalPrice}
                    initial={{ scale: 1.15, color: "hsl(var(--primary))" }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl sm:text-4xl font-heading font-extrabold text-primary"
                  >
                    R$ {totalPrice}
                  </motion.span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Button variant="whatsapp" size="xl" asChild className="w-full shadow-glow">
                  <a href={whatsappMessage} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Iniciar com esta Configuração
                  </a>
                </Button>
                <p className="text-[11px] text-center text-muted-foreground">
                  Sem formulários demorados • Resposta direta pelo WhatsApp em até 1 hora
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ProjectCalculator);
