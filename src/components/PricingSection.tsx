import { PricingCard } from "@/components/ui/dark-gradient-pricing";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PricingCard
                tier="Anúncios"
                price="R$ 280"
                bestFor="Ideal para quem quer tráfego rápido"
                CTA="Solicitar Orçamento"
                benefits={[
                  { text: "Campanha Google Ads", checked: true },
                  { text: "Configuração completa", checked: true },
                  { text: "Segmentação de público", checked: true },
                  { text: "Relatório de resultados", checked: true },
                  { text: "Otimização mensal", checked: false },
                  { text: "Gestão contínua", checked: false },
                ]}
              />
              <PricingCard
                tier="Landing Page"
                price="R$ 560"
                bestFor="Página única focada em conversão"
                CTA="Quero Minha Landing Page"
                benefits={[
                  { text: "Design profissional", checked: true },
                  { text: "Responsivo (mobile)", checked: true },
                  { text: "Otimizado para Google (SEO)", checked: true },
                  { text: "Botão WhatsApp integrado", checked: true },
                  { text: "Formulário de contato", checked: true },
                  { text: "Entrega rápida", checked: true },
                ]}
              />
              <PricingCard
                tier="Site Profissional"
                price="R$ 760"
                bestFor="Presença online completa para seu negócio"
                CTA="Quero Meu Site"
                popular
                benefits={[
                  { text: "Tudo da Landing Page", checked: true },
                  { text: "Múltiplas páginas", checked: true },
                  { text: "Domínio personalizado", checked: true },
                  { text: "Blog integrado", checked: true },
                  { text: "Painel administrativo", checked: true },
                  { text: "Suporte pós-entrega", checked: true },
                ]}
              />
              <PricingCard
                tier="Loja Virtual"
                price="R$ 1.200"
                bestFor="Para quem quer vender produtos online"
                CTA="Criar Minha Loja"
                benefits={[
                  { text: "Tudo do plano Site", checked: true },
                  { text: "Catálogo de produtos", checked: true },
                  { text: "Carrinho de compras", checked: true },
                  { text: "Integração de pagamento", checked: true },
                  { text: "Painel administrativo", checked: true },
                  { text: "Gestão de estoque", checked: true },
                ]}
              />
            </div>
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