import { memo, useState, useCallback } from "react";
import { PricingCard } from "@/components/ui/dark-gradient-pricing";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";

const servicePlans = [
  {
    tier: "Site Profissional",
    price: "R$ 760",
    bestFor: "Presença online completa para seu negócio",
    CTA: "Quero Meu Site",
    href: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20quero%20criar%20um%20site%20profissional.%20Meu%20nicho%20%C3%A9%20_____%20e%20quero%20come%C3%A7ar%20o%20quanto%20antes.%20Pode%20me%20passar%20os%20pr%C3%B3ximos%20passos%3F",
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
    tier: "Landing Page",
    price: "R$ 560",
    bestFor: "Página única focada em conversão",
    CTA: "Quero Minha Landing Page",
    href: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20quero%20criar%20minha%20Landing%20Page%20de%20R%24%20560.%20Pode%20me%20explicar%20como%20funciona%20e%20como%20come%C3%A7amos%3F",
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
    tier: "Loja Virtual",
    price: "R$ 1.200",
    bestFor: "Para quem quer vender produtos online",
    CTA: "Criar Minha Loja",
    href: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20Loja%20Virtual%20de%20R%24%201200%20que%20vi%20no%20site.%20Quero%20saber%20prazo%2C%20forma%20de%20pagamento%20e%20o%20que%20preciso%20enviar%20para%20come%C3%A7ar.",
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
    href: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20servi%C3%A7o%20de%20An%C3%BAncios%20Google%20Ads%20de%20R%24%20280.%20Pode%20me%20explicar%20como%20funciona%20e%20quando%20podemos%20iniciar%3F",
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

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, servicePlans.length - 1));
  }, []);
  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  return (
    <section id="precos" className="py-24 md:py-36 px-4 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-10 md:mb-16 space-y-4">
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
            <TabsList className="grid w-full max-w-xs sm:max-w-sm mx-auto grid-cols-2 mb-8 md:mb-12 bg-secondary/50 backdrop-blur-sm p-1">
              <TabsTrigger value="servicos" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
                Serviços
              </TabsTrigger>
              <TabsTrigger value="manutencao" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
                Manutenção
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="servicos">
            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {servicePlans.map((plan, i) => (
                <PricingCard key={plan.tier} {...plan} index={i} />
              ))}
            </div>

            {/* Mobile carousel */}
            <div className="md:hidden">
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-out will-change-transform"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {servicePlans.map((plan) => (
                    <div key={plan.tier} className="w-full shrink-0 px-1">
                      <PricingCard {...plan} index={0} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 px-1">
                <button
                  onClick={goPrev}
                  disabled={currentIndex === 0}
                  className="w-10 h-10 rounded-full border border-border/50 bg-card flex items-center justify-center text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:border-primary/50"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                  {servicePlans.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Plano ${i + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? "bg-primary w-6 h-2.5"
                          : "bg-border hover:bg-muted-foreground w-2.5 h-2.5"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={goNext}
                  disabled={currentIndex === servicePlans.length - 1}
                  className="w-10 h-10 rounded-full border border-border/50 bg-card flex items-center justify-center text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:border-primary/50"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
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
                href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20quero%20contratar%20a%20Manuten%C3%A7%C3%A3o%20Mensal%20de%20R%24%2070.%20Pode%20me%20explicar%20como%20funciona%20e%20como%20ativamos%3F"
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

export default memo(PricingSection);
