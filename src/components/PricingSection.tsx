import { PricingCard } from "@/components/ui/dark-gradient-pricing";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const servicePlans = [
  {
    tier: "Anúncios",
    price: "R$ 280",
    bestFor: "Ideal para quem quer tráfego rápido",
    CTA: "Solicitar Orçamento",
    benefits: [
      { text: "Campanha Google Ads", checked: true },
      { text: "Configuração completa", checked: true },
      { text: "Segmentação de público", checked: true },
      { text: "Relatório de resultados", checked: true },
      { text: "Otimização mensal", checked: false },
      { text: "Gestão contínua", checked: false },
    ],
  },
  {
    tier: "Landing Page",
    price: "R$ 560",
    bestFor: "Página única focada em conversão",
    CTA: "Quero Minha Landing Page",
    benefits: [
      { text: "Design profissional", checked: true },
      { text: "Responsivo (mobile)", checked: true },
      { text: "Otimizado para Google (SEO)", checked: true },
      { text: "Botão WhatsApp integrado", checked: true },
      { text: "Formulário de contato", checked: true },
      { text: "Entrega rápida", checked: true },
    ],
  },
  {
    tier: "Site Profissional",
    price: "R$ 760",
    bestFor: "Presença online completa para seu negócio",
    CTA: "Quero Meu Site",
    popular: true,
    benefits: [
      { text: "Tudo da Landing Page", checked: true },
      { text: "Múltiplas páginas", checked: true },
      { text: "Domínio personalizado", checked: true },
      { text: "Blog integrado", checked: true },
      { text: "Painel administrativo", checked: true },
      { text: "Suporte pós-entrega", checked: true },
    ],
  },
  {
    tier: "Loja Virtual",
    price: "R$ 1.200",
    bestFor: "Para quem quer vender produtos online",
    CTA: "Criar Minha Loja",
    benefits: [
      { text: "Tudo do plano Site", checked: true },
      { text: "Catálogo de produtos", checked: true },
      { text: "Carrinho de compras", checked: true },
      { text: "Integração de pagamento", checked: true },
      { text: "Painel administrativo", checked: true },
      { text: "Gestão de estoque", checked: true },
    ],
  },
];

const PricingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  const goNext = () => setCurrentIndex((prev) => Math.min(prev + 1, servicePlans.length - 1));
  const goPrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

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
            {/* Desktop: grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicePlans.map((plan) => (
                <PricingCard key={plan.tier} {...plan} />
              ))}
            </div>

            {/* Mobile: carousel with arrows */}
            {isMobile && (
              <div className="md:hidden">
                <div className="relative">
                  <div className="overflow-hidden">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-2"
                    >
                      <PricingCard {...servicePlans[currentIndex]} />
                    </motion.div>
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={goPrev}
                      disabled={currentIndex === 0}
                      className="w-10 h-10 rounded-full border border-border/50 bg-card flex items-center justify-center text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                      {servicePlans.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentIndex(i)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === currentIndex ? "bg-primary w-6" : "bg-border"
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={goNext}
                      disabled={currentIndex === servicePlans.length - 1}
                      className="w-10 h-10 rounded-full border border-border/50 bg-card flex items-center justify-center text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="manutencao">
            <div className="max-w-md mx-auto">
              <PricingCard
                tier="Manutenção Mensal"
                price="R$ 70/mês"
                bestFor="Mantenha seu site sempre atualizado"
                CTA="Contratar Manutenção"
                benefits={[
                  { text: "Atualizações de conteúdo", checked: true },
                  { text: "Correções e ajustes", checked: true },
                  { text: "Backup mensal", checked: true },
                  { text: "Suporte prioritário", checked: true },
                  { text: "Monitoramento de uptime", checked: true },
                ]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricingSection;
