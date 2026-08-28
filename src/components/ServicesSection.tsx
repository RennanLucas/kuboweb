import { memo } from "react";
import { FileText, Building2, ShoppingCart, Megaphone, MessageCircle, ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    id: "sites",
    icon: Building2,
    badge: "Mais Popular",
    badgeColor: "bg-primary text-primary-foreground",
    title: "Sites Institucionais",
    price: "R$ 760",
    priceSubtitle: "Investimento único • Sem mensalidade obrigatória",
    description:
      "Apresentação de máxima autoridade para sua empresa. Múltiplas páginas otimizadas para o topo do Google, transmitindo credibilidade instantânea para novos clientes.",
    features: [
      "Estrutura completa multi-páginas (Início, Quem Somos, Serviços, Contato)",
      "SEO técnico estruturado para busca orgânica no Google",
      "Design 100% sob medida com a identidade visual da sua marca",
      "Painel administrativo para você editar conteúdos facilmente",
      "Integração com WhatsApp, formulário e Google Maps",
    ],
    href: "/servicos/sites-institucionais",
    whatsappMsg: "Olá! Gostaria de criar um Site Institucional de R$ 760 para minha empresa. Pode me passar os próximos passos?",
    layout: "wide",
  },
  {
    id: "landing",
    icon: FileText,
    badge: "Alta Conversão",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
    title: "Landing Pages",
    price: "R$ 560",
    priceSubtitle: "Investimento único • Entrega rápida",
    description:
      "Página única desenhada estrategicamente para converter o tráfego de anúncios em leads e vendas diretas no WhatsApp.",
    features: [
      "Copywriting com gatilhos mentais persuasivos",
      "Carregamento ultra veloz (< 1s no PageSpeed)",
      "Otimizada para Google Ads, Meta Ads e TikTok",
      "Botões estratégicos de chamada para ação",
    ],
    href: "/servicos/landing-pages",
    whatsappMsg: "Olá! Quero criar uma Landing Page de Alta Conversão de R$ 560. Como podemos iniciar?",
    layout: "tall",
  },
  {
    id: "loja",
    icon: ShoppingCart,
    badge: "E-commerce",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
    title: "Loja Virtual Completa",
    price: "R$ 1.200",
    priceSubtitle: "Investimento único • Sistema escalável",
    description:
      "Venda seus produtos 24h por dia com catálogo inteligente, cálculo automático de frete e checkout seguro.",
    features: [
      "Catálogo de produtos com fotos, variações e categorias",
      "Checkout transparente integrado (Pix automático e Cartão)",
      "Cálculo automático de frete Correios/Melhor Envio",
      "Painel completo para gestão de pedidos e estoque",
    ],
    href: "/servicos/loja-virtual",
    whatsappMsg: "Olá! Tenho interesse em criar uma Loja Virtual de R$ 1.200. Pode me explicar como funciona?",
    layout: "tall",
  },
  {
    id: "anuncios",
    icon: Megaphone,
    badge: "Escala Imediata",
    badgeColor: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
    title: "Gestão de Anúncios Google Ads",
    price: "R$ 280",
    priceSubtitle: "Setup completo + Estratégia de campanha",
    description:
      "Coloque sua empresa na frente de clientes que estão pesquisando pelos seus serviços exatamente agora no Google.",
    features: [
      "Configuração e estruturação completa da conta e campanhas",
      "Pesquisa estratégica de palavras-chave com alta intenção de compra",
      "Instalação do Pixel e tags de conversão para mensuração exata",
      "Otimização contínua de anúncios para menor custo por lead",
    ],
    href: "/servicos/anuncios",
    whatsappMsg: "Olá! Quero contratar o serviço de Anúncios Google Ads de R$ 280 para atrair clientes imediatos.",
    layout: "wide",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-36 px-4 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-14 md:mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Nossas Soluções Digitais
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="section-title"
          >
            Soluções completas para <span className="text-gradient-hero">escalar suas vendas online</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle max-w-2xl"
          >
            Sem custos ocultos ou surpresas. Escolha a solução ideal para o momento da sua empresa e comece com suporte direto da nossa equipe.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isWide = service.layout === "wide";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className={`group rounded-3xl p-7 sm:p-9 bg-card/70 border border-border/50 hover:border-primary/40 transition-all duration-300 backdrop-blur-xl shadow-xl flex flex-col justify-between relative overflow-hidden ${
                  service.id === "sites" ? "ring-1 ring-primary/30 shadow-primary/5" : ""
                }`}
              >
                {/* Ambient Card Glow on Hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.03] group-hover:bg-primary/[0.08] rounded-full blur-3xl transition-colors duration-500 pointer-events-none" />

                <div>
                  {/* Top Row: Icon + Price Tag */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <span className={`inline-block text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full mb-1 ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                      <div className="text-2xl sm:text-3xl font-heading font-extrabold text-foreground">
                        {service.price}
                      </div>
                      <p className="text-[11px] text-muted-foreground">{service.priceSubtitle}</p>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center gap-3">
                  <Button variant="whatsapp" size="default" asChild className="w-full sm:w-auto shadow-md">
                    <a
                      href={`https://wa.me/5511932197334?text=${encodeURIComponent(service.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contratar via WhatsApp
                    </a>
                  </Button>

                  <Button variant="ghost" size="default" asChild className="w-full sm:w-auto text-xs text-muted-foreground hover:text-foreground">
                    <Link to={service.href} className="inline-flex items-center gap-1">
                      Ver detalhes do serviço
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-primary/10 via-card to-primary/10 border border-primary/20 text-center max-w-3xl mx-auto shadow-lg"
        >
          <p className="text-sm sm:text-base font-semibold text-foreground mb-2">
            Não tem certeza de qual formato é o ideal para o seu negócio?
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            Nossa equipe analisa seu segmento gratuitamente e indica a melhor estratégia.
          </p>
          <Button variant="whatsapp" size="lg" asChild className="shadow-glow-sm">
            <a
              href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20gratuita%20sobre%20qual%20formato%20de%20site%20%C3%A9%20melhor%20para%20o%20meu%20nicho."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Análise Gratuita no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);

