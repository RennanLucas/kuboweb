import { memo } from "react";
import {
  FileText,
  Building2,
  ShoppingCart,
  Megaphone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe,
  Lock,
  Search,
  Check,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SpotlightCard from "@/components/ui/SpotlightCard";
import BorderBeam from "@/components/ui/BorderBeam";

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-28 md:py-40 px-4 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider"
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
            Sem mensalidades obrigatórias ou custos ocultos. Escolha a solução ideal para o momento da sua empresa e receba um projeto de nível internacional.
          </motion.p>
        </div>

        {/* Apple/Linear Style Interactive Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16 items-stretch">
          {/* 1. Sites Institucionais — Span 7 (Large Showcase) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 h-full"
          >
            <SpotlightCard className="p-7 sm:p-9 h-full flex flex-col justify-between border-2 border-primary/40 shadow-xl shadow-primary/5 relative">
              <BorderBeam size={280} duration={14} colorFrom="#38bdf8" colorTo="#3b82f6" />

              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shadow-inner">
                    <Building2 className="w-6 h-6" />
                  </div>

                  <div className="text-right">
                    <span className="inline-block text-[10px] font-extrabold uppercase px-3 py-1 rounded-full mb-1 bg-primary text-primary-foreground shadow-md shadow-primary/20 tracking-wider">
                      Mais Popular
                    </span>
                    <div className="text-3xl font-heading font-extrabold text-foreground">
                      R$ 760
                    </div>
                    <p className="text-[11px] text-muted-foreground">Investimento único • Sem mensalidade</p>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">
                  Sites Institucionais
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Apresentação de máxima autoridade para consolidar sua marca. Múltiplas páginas otimizadas para o topo do Google com design sob medida.
                </p>

                {/* Interactive Simulated Mini-Browser UI */}
                <div className="mb-6 p-4 rounded-2xl bg-background/80 border border-border/50 shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/30 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-primary font-bold">
                      <Globe className="w-3.5 h-3.5" />
                      <span>SEO Google 100/100</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold text-muted-foreground">
                    <div className="p-1.5 rounded-lg bg-primary/15 text-primary border border-primary/20">Início</div>
                    <div className="p-1.5 rounded-lg bg-secondary/40">Sobre Nós</div>
                    <div className="p-1.5 rounded-lg bg-secondary/40">Serviços</div>
                    <div className="p-1.5 rounded-lg bg-secondary/40">Contato</div>
                  </div>
                </div>

                {/* Features list */}
                <div className="grid sm:grid-cols-2 gap-2.5 mb-8 text-xs text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Estrutura multi-páginas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>SEO técnico Google Schema</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Painel administrativo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Integração WhatsApp & Maps</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center gap-3">
                <Button variant="whatsapp" size="default" asChild className="w-full sm:w-auto shadow-md font-bold">
                  <a
                    href="https://wa.me/5511932197334?text=Ol%C3%A1!%20Gostaria%20de%20criar%20um%20Site%20Institucional%20de%20R%24%20760%20para%20minha%20empresa.%20Pode%20me%20passar%20os%20pr%C3%B3ximos%20passos%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contratar via WhatsApp
                  </a>
                </Button>

                <Button variant="ghost" size="default" asChild className="w-full sm:w-auto text-xs text-muted-foreground hover:text-foreground">
                  <Link to="/servicos/sites-institucionais" className="inline-flex items-center gap-1">
                    Ver detalhes do serviço
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* 2. Landing Pages — Span 5 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 h-full"
          >
            <SpotlightCard className="p-7 sm:p-9 h-full flex flex-col justify-between border-border/50">
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <FileText className="w-6 h-6" />
                  </div>

                  <div className="text-right">
                    <span className="inline-block text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full mb-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Alta Conversão
                    </span>
                    <div className="text-3xl font-heading font-extrabold text-foreground">
                      R$ 560
                    </div>
                    <p className="text-[11px] text-muted-foreground">Investimento único • Rápido</p>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">
                  Landing Pages
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Página única desenhada estrategicamente para transformar tráfego de anúncios em leads diretos no WhatsApp.
                </p>

                {/* Conversion Funnel Simulation */}
                <div className="mb-6 p-4 rounded-2xl bg-background/80 border border-border/50 space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-muted-foreground">Funil de Conversão</span>
                    <span className="text-emerald-400 font-bold">12.8% Taxa de Lead</span>
                  </div>
                  <div className="w-full bg-secondary/60 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[82%] rounded-full shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                  </div>
                  <p className="text-[10px] text-muted-foreground">Otimizada para Google Ads, Meta Ads e TikTok</p>
                </div>

                <div className="space-y-2.5 mb-8 text-xs text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Copywriting com gatilhos mentais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Carregamento em 0.6s</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Botões de WhatsApp estratégicos</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center gap-3">
                <Button variant="whatsapp" size="default" asChild className="w-full sm:w-auto shadow-md font-bold">
                  <a
                    href="https://wa.me/5511932197334?text=Ol%C3%A1!%20Quero%20criar%20uma%20Landing%20Page%20de%20Alta%20Convers%C3%A3o%20de%20R%24%20560.%20Como%20podemos%20iniciar%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contratar Landing Page
                  </a>
                </Button>
                <Button variant="ghost" size="default" asChild className="w-full sm:w-auto text-xs text-muted-foreground hover:text-foreground">
                  <Link to="/servicos/landing-pages" className="inline-flex items-center gap-1">
                    Ver detalhes
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* 3. Loja Virtual Completa — Span 6 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 h-full"
          >
            <SpotlightCard className="p-7 sm:p-9 h-full flex flex-col justify-between border-border/50">
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <ShoppingCart className="w-6 h-6" />
                  </div>

                  <div className="text-right">
                    <span className="inline-block text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full mb-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      E-commerce 24h
                    </span>
                    <div className="text-3xl font-heading font-extrabold text-foreground">
                      R$ 1.200
                    </div>
                    <p className="text-[11px] text-muted-foreground">Investimento único • Sistema escalável</p>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">
                  Loja Virtual (E-commerce)
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Venda seus produtos automaticamente 24 horas por dia com catálogo inteligente, cálculo automático de frete e checkout transparente.
                </p>

                {/* Simulated Checkout Box */}
                <div className="mb-6 p-3.5 rounded-2xl bg-background/80 border border-border/50 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-indigo-400 font-bold">
                    <Zap className="w-4 h-4" />
                    <span>Checkout Pix & Cartão 1-Clique</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded-md font-bold">
                    Aprovado
                  </span>
                </div>

                <div className="space-y-2.5 mb-8 text-xs text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Catálogo com fotos, variações e categorias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Cálculo automático de frete (Correios/Melhor Envio)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Painel de gestão de pedidos e estoque</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center gap-3">
                <Button variant="whatsapp" size="default" asChild className="w-full sm:w-auto shadow-md font-bold">
                  <a
                    href="https://wa.me/5511932197334?text=Ol%C3%A1!%20Tenho%20interesse%20em%20criar%20uma%20Loja%20Virtual%20de%20R%24%201.200.%20Pode%20me%20explicar%20como%20funciona%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contratar Loja Virtual
                  </a>
                </Button>
                <Button variant="ghost" size="default" asChild className="w-full sm:w-auto text-xs text-muted-foreground hover:text-foreground">
                  <Link to="/servicos/loja-virtual" className="inline-flex items-center gap-1">
                    Ver detalhes
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* 4. Gestão de Anúncios Google Ads — Span 6 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 h-full"
          >
            <SpotlightCard className="p-7 sm:p-9 h-full flex flex-col justify-between border-border/50">
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Megaphone className="w-6 h-6" />
                  </div>

                  <div className="text-right">
                    <span className="inline-block text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full mb-1 bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Escala Imediata
                    </span>
                    <div className="text-3xl font-heading font-extrabold text-foreground">
                      R$ 280
                    </div>
                    <p className="text-[11px] text-muted-foreground">Setup completo + Estratégia</p>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-2">
                  Gestão de Anúncios Google Ads
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Coloque sua empresa na frente de clientes que estão pesquisando pelos seus serviços exatamente agora no Google.
                </p>

                {/* Simulated Google Search Ad */}
                <div className="mb-6 p-3.5 rounded-2xl bg-background/80 border border-border/50 text-left">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[9px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded">
                      Anúncio
                    </span>
                    <span className="text-[10px] text-muted-foreground truncate">https://www.seunegocio.com.br</span>
                  </div>
                  <p className="text-xs font-bold text-primary truncate">Sua Empresa no Topo das Buscas do Google</p>
                </div>

                <div className="space-y-2.5 mb-8 text-xs text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Configuração e estruturação de campanhas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Pesquisa de palavras-chave de alta conversão</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Instalação de Pixel e tags de rastreamento</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center gap-3">
                <Button variant="whatsapp" size="default" asChild className="w-full sm:w-auto shadow-md font-bold">
                  <a
                    href="https://wa.me/5511932197334?text=Ol%C3%A1!%20Quero%20contratar%20o%20servi%C3%A7o%20de%20An%C3%BAncios%20Google%20Ads%20de%20R%24%20280%20para%20atrair%20clientes%20imediatos."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contratar Anúncios
                  </a>
                </Button>
                <Button variant="ghost" size="default" asChild className="w-full sm:w-auto text-xs text-muted-foreground hover:text-foreground">
                  <Link to="/servicos/anuncios" className="inline-flex items-center gap-1">
                    Ver detalhes
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-primary/15 via-card to-primary/15 border border-primary/30 text-center max-w-3xl mx-auto shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <BorderBeam size={200} duration={10} colorFrom="#38bdf8" colorTo="#818cf8" />
          <p className="text-sm sm:text-base font-bold text-foreground mb-1.5">
            Não tem certeza de qual formato é o ideal para o seu negócio?
          </p>
          <p className="text-xs text-muted-foreground mb-5">
            Nossa equipe analisa seu segmento gratuitamente e indica a melhor estratégia em até 1 hora.
          </p>
          <Button variant="whatsapp" size="lg" asChild className="shadow-glow font-bold">
            <a
              href="https://wa.me/5511932197334?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20gratuita%20sobre%20qual%20formato%20de%20site%20%C3%A9%20melhor%20para%20o%20meu%20nicho."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orientação Gratuita no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);
