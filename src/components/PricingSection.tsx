import { PricingCard } from "@/components/ui/dark-gradient-pricing";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const servicePlans = [
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
];

const PricingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const isMobile = useIsMobile();

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => Math.min(prev + 1, servicePlans.length - 1));
  };
  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
  };

  return (
    <section id="precos" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label justify-center"
          >
            Preços
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Planos que cabem no seu bolso
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Escolha o serviço ideal para o seu negócio e comece a vender mais online.
          </motion.p>
        </div>

        <Tabs defaultValue="servicos" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <TabsList className="grid w-full max-w-sm mx-auto grid-cols-2 mb-12 bg-secondary/50 backdrop-blur-sm p-1">
              <TabsTrigger value="servicos" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
                Serviços
              </TabsTrigger>
              <TabsTrigger value="manutencao" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
                Manutenção
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="servicos">
            {/* Desktop: grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicePlans.map((plan, i) => (
                <PricingCard key={plan.tier} {...plan} index={i} />
              ))}
            </div>

            {/* Mobile: animated carousel */}
            {isMobile && (
              <div className="md:hidden">
                <div className="relative">
                  <div className="overflow-hidden min-h-[420px]">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="px-1"
                      >
                        <PricingCard {...servicePlans[currentIndex]} index={0} />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={goPrev}
                      disabled={currentIndex === 0}
                      className="w-11 h-11 rounded-full border border-border/50 bg-card flex items-center justify-center text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:border-primary/50 hover:shadow-glow-sm"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>

                    {/* Dots */}
                    <div className="flex items-center gap-2.5">
                      {servicePlans.map((_, i) => (
                        <motion.button
                          key={i}
                          onClick={() => {
                            setDirection(i > currentIndex ? 1 : -1);
                            setCurrentIndex(i);
                          }}
                          className={`rounded-full transition-all duration-300 ${
                            i === currentIndex
                              ? "bg-primary w-7 h-2.5"
                              : "bg-border hover:bg-muted-foreground w-2.5 h-2.5"
                          }`}
                          whileTap={{ scale: 0.8 }}
                        />
                      ))}
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={goNext}
                      disabled={currentIndex === servicePlans.length - 1}
                      className="w-11 h-11 rounded-full border border-border/50 bg-card flex items-center justify-center text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:border-primary/50 hover:shadow-glow-sm"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="manutencao">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-md mx-auto"
            >
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
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PricingSection;
