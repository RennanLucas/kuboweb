import { memo, useState, useCallback } from "react";
import { PricingCard } from "@/components/ui/dark-gradient-pricing";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";

const servicePlans = [
  {
    tier: "Landing Page",
    price: "R$ 560",
    bestFor: "Página única de alta conversão para campanhas e anúncios",
    CTA: "Falar no WhatsApp",
    href: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20quero%20criar%20minha%20Landing%20Page%20de%20R%24%20560.%20Pode%20me%20explicar%20como%20funciona%20e%20como%20come%C3%A7amos%3F",
    popular: false,
    benefits: [
      { text: "Design exclusivo de alta conversão", checked: true },
      { text: "100% Responsivo (Mobile First)", checked: true },
      { text: "Otimizado para PageSpeed 95+", checked: true },
      { text: "Botões de WhatsApp estratégicos", checked: true },
      { text: "Formulário de captura de leads", checked: true },
      { text: "Entrega rápida em até 10 dias", checked: true },
    ],
  },
  {
    tier: "Site Institucional",
    price: "R$ 760",
    bestFor: "Presença e autoridade máxima no Google",
    CTA: "Falar no WhatsApp",
    href: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20quero%20criar%20um%20Site%20Institucional%20de%20R%24%20760.%20Pode%20me%20passar%20os%20pr%C3%B3ximos%20passos%3F",
    popular: true,
    benefits: [
      { text: "Tudo incluído da Landing Page", checked: true },
      { text: "Estrutura completa multi-páginas", checked: true },
      { text: "SEO estruturado para busca no Google", checked: true },
      { text: "Painel administrativo intuitivo", checked: true },
      { text: "Integração Maps, WhatsApp e e-mail", checked: true },
      { text: "Suporte prioritário pós-entrega", checked: true },
    ],
  },
  {
    tier: "Loja Virtual",
    price: "R$ 1.200",
    bestFor: "Para vender produtos 24h por dia com catálogo e checkout",
    CTA: "Falar no WhatsApp",
    href: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20Loja%20Virtual%20de%20R%24%201200%20que%20vi%20no%20site.%20Quero%20saber%20prazo%20e%20como%20come%C3%A7ar.",
    popular: false,
    benefits: [
      { text: "Catálogo completo de produtos", checked: true },
      { text: "Carrinho de compras inteligente", checked: true },
      { text: "Checkout transparente Pix e Cartão", checked: true },
      { text: "Cálculo automático de frete", checked: true },
      { text: "Painel de gestão de pedidos", checked: true },
      { text: "Gestão e controle de estoque", checked: true },
    ],
  },
  {
    tier: "Gestão de Anúncios",
    price: "R$ 280",
    bestFor: "Tráfego qualificado e clientes imediatos no Google Ads",
    CTA: "Falar no WhatsApp",
    href: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20servi%C3%A7o%20de%20An%C3%BAncios%20Google%20Ads%20de%20R%24%20280.%20Pode%20me%20explicar%20como%20funciona%3F",
    popular: false,
    benefits: [
      { text: "Configuração de conta e campanhas", checked: true },
      { text: "Pesquisa de palavras-chave de compra", checked: true },
      { text: "Segmentação geográfica precisa", checked: true },
      { text: "Instalação de tags de conversão", checked: true },
      { text: "Relatório de desempenho e leads", checked: true },
      { text: "Orientação estratégica inclusa", checked: true },
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

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && currentIndex < servicePlans.length - 1) {
      goNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      goPrev();
    }
  };

  return (
    <section id="precos" className="py-28 md:py-40 px-4 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-12 md:mb-20 space-y-4">
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
            Invista no crescimento do seu negócio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Valores transparentes, sem surpresas. Escolha o plano ideal e comece a vender mais.
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
              <div
                className="relative overflow-hidden touch-pan-y"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
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
