import { motion } from "framer-motion";
import { Check, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const features = [
  "Design profissional",
  "Responsivo (mobile)",
  "Otimizado para Google (SEO)",
  "Botão WhatsApp integrado",
  "Domínio personalizado",
  "Suporte pós-entrega",
  "Catálogo de produtos",
  "Carrinho de compras",
  "Integração de pagamento",
  "Painel administrativo",
];

const plans = [
  {
    name: "Anúncios",
    price: "R$ 280",
    popular: false,
    features: [true, false, true, true, false, false, false, false, false, false],
  },
  {
    name: "Site & Landing Page",
    price: "R$ 560",
    popular: true,
    features: [true, true, true, true, true, true, false, false, false, false],
  },
  {
    name: "Loja Virtual",
    price: "R$ 1.200",
    popular: false,
    features: [true, true, true, true, true, true, true, true, true, true],
  },
];

const maintenanceFeatures = [
  "Atualizações de conteúdo",
  "Correções e ajustes",
  "Backup mensal",
  "Suporte prioritário",
  "Monitoramento de uptime",
];

const PricingSection = () => {
  return (
    <section id="precos" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium text-sm uppercase tracking-wider"
          >
            Preços
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground"
          >
            Planos que cabem no seu bolso
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            Escolha o serviço ideal para o seu negócio e comece a vender mais online.
          </motion.p>
        </div>

        <Tabs defaultValue="servicos" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-10">
            <TabsTrigger value="servicos">Serviços</TabsTrigger>
            <TabsTrigger value="manutencao">Manutenção</TabsTrigger>
          </TabsList>

          <TabsContent value="servicos">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-border/50 bg-card">
                {/* Header com planos */}
                <div className="grid grid-cols-4 border-b border-border/50">
                  <div className="p-4 md:p-6 flex items-end">
                    <p className="text-sm text-muted-foreground">Recursos</p>
                  </div>
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={cn(
                        "p-4 md:p-6 text-center border-l border-border/50",
                        plan.popular && "bg-primary/5"
                      )}
                    >
                      {plan.popular && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          Popular
                        </span>
                      )}
                      <p className="font-heading font-bold text-foreground text-sm md:text-base mt-1">
                        {plan.name}
                      </p>
                      <p className="text-xl md:text-2xl font-bold text-foreground mt-1">
                        {plan.price}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Linhas de features */}
                {features.map((feature, i) => (
                  <div
                    key={feature}
                    className={cn(
                      "grid grid-cols-4 border-b border-border/30",
                      i % 2 === 0 && "bg-secondary/20"
                    )}
                  >
                    <div className="p-3 md:p-4 flex items-center">
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                    {plans.map((plan) => (
                      <div
                        key={plan.name}
                        className={cn(
                          "p-3 md:p-4 flex items-center justify-center border-l border-border/30",
                          plan.popular && "bg-primary/5"
                        )}
                      >
                        {plan.features[i] ? (
                          <Check className="w-4 h-4 text-primary" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground/40" />
                        )}
                      </div>
                    ))}
                  </div>
                ))}

                {/* CTAs */}
                <div className="grid grid-cols-4">
                  <div className="p-4 md:p-6" />
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={cn(
                        "p-4 md:p-6 border-l border-border/50",
                        plan.popular && "bg-primary/5"
                      )}
                    >
                      <Button
                        variant={plan.popular ? "default" : "outline"}
                        size="sm"
                        className="w-full text-xs"
                        asChild
                      >
                        <a href="https://wa.me/5511932197334" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-3 h-3 mr-1" />
                          Contratar
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="manutencao">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-border/50 bg-card max-w-lg mx-auto">
                <div className="p-6 text-center border-b border-border/50">
                  <p className="text-sm text-primary font-medium">Manutenção Mensal</p>
                  <p className="text-3xl font-bold text-foreground mt-2">R$ 70<span className="text-base font-normal text-muted-foreground">/mês</span></p>
                  <p className="text-sm text-muted-foreground mt-1">Mantenha seu site sempre atualizado</p>
                </div>
                {maintenanceFeatures.map((feature, i) => (
                  <div
                    key={feature}
                    className={cn(
                      "flex items-center gap-3 px-6 py-3 border-b border-border/30",
                      i % 2 === 0 && "bg-secondary/20"
                    )}
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
                <div className="p-6">
                  <Button className="w-full" asChild>
                    <a href="https://wa.me/5511932197334" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contratar Manutenção
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricingSection;