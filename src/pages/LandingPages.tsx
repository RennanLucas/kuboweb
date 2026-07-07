import {
  Target,
  Zap,
  TrendingUp,
  MessageCircle,
  Megaphone,
  Rocket,
  Calendar,
  ShoppingBag,
  Users,
} from "lucide-react";
import ServicePageTemplate, { type ServicePageContent } from "@/components/ServicePageTemplate";
import heroImage from "@/assets/service-landing.webp";

const content: ServicePageContent = {
  seo: {
    title: "Landing Pages",
    description:
      "Landing pages de alta conversão em São Paulo. Design persuasivo, copywriting estratégico e integração com WhatsApp para transformar visitantes em clientes.",
    path: "/servicos/landing-pages",
  },
  hero: {
    badge: "Landing Pages",
    title: "Páginas focadas",
    highlight: "100% em conversão",
    subtitle:
      "Landing pages projetadas com copywriting persuasivo, gatilhos comprovados e design otimizado para transformar cliques em campanhas pagas em leads e vendas reais.",
    image: heroImage,
    imageAlt: "Landing page de alta conversão em desktop e mobile",
    whatsappHref:
      "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20quero%20criar%20minha%20Landing%20Page.%20Pode%20me%20explicar%20como%20funciona%3F",
    quickFacts: [
      { label: "Prazo médio", value: "7 dias" },
      { label: "Conversão típica", value: "8-15%" },
      { label: "Testes A/B", value: "Inclusos" },
    ],
  },
  benefits: [
    {
      icon: Target,
      title: "Foco absoluto",
      text: "Uma única ação, sem distrações. Cada elemento existe para levar o visitante à conversão.",
    },
    {
      icon: Zap,
      title: "Velocidade extrema",
      text: "Carregamento em menos de 2s no mobile — essencial para não perder leads em campanhas pagas.",
    },
    {
      icon: TrendingUp,
      title: "Copy estratégica",
      text: "Textos persuasivos baseados em gatilhos mentais e frameworks comprovados (AIDA, PAS, StoryBrand).",
    },
    {
      icon: MessageCircle,
      title: "Conversão direta",
      text: "WhatsApp, formulários otimizados e pixel de conversão configurados desde o primeiro dia.",
    },
  ],
  process: [
    {
      title: "Estratégia e persona",
      description:
        "Mapeamos o público-alvo, dores, objeções e desejos. Definimos a promessa central e a estrutura persuasiva ideal para sua oferta.",
    },
    {
      title: "Copywriting persuasivo",
      description:
        "Escrevemos headlines, subtítulos, provas sociais, CTAs e microcopy usando frameworks comprovados de conversão.",
    },
    {
      title: "Design de conversão",
      description:
        "Layout otimizado com hierarquia visual clara, gatilhos visuais e CTAs estrategicamente posicionados ao longo da página.",
    },
    {
      title: "Desenvolvimento otimizado",
      description:
        "Código enxuto, imagens otimizadas e carregamento assíncrono. Meta de PageSpeed 95+ no mobile para não queimar seu orçamento de mídia.",
    },
    {
      title: "Rastreamento e testes A/B",
      description:
        "Configuramos Google Analytics, Pixel do Meta e Google Ads. Preparamos variações para testes A/B contínuos após o lançamento.",
    },
  ],
  deliverables: [
    {
      title: "Estratégia & Copy",
      items: [
        "Análise de persona e concorrência",
        "Headline principal + variações A/B",
        "Copywriting de todas as seções",
        "Definição de gatilhos mentais",
        "Objeções mapeadas e respondidas",
      ],
    },
    {
      title: "Design & UX",
      items: [
        "Design premium e responsivo",
        "Hero de alto impacto",
        "Seção de benefícios visual",
        "Provas sociais e depoimentos",
        "CTAs otimizados em múltiplos pontos",
      ],
    },
    {
      title: "Performance",
      items: [
        "Carregamento sub 2s no mobile",
        "PageSpeed 95+ (mobile e desktop)",
        "Imagens otimizadas (WebP + lazy)",
        "Core Web Vitals aprovados",
        "SEO técnico on-page",
      ],
    },
    {
      title: "Integrações",
      items: [
        "WhatsApp Business com mensagem pronta",
        "Formulário com integração ao seu CRM",
        "Google Analytics 4",
        "Google Ads (tag de conversão)",
        "Meta Pixel (opcional)",
      ],
    },
    {
      title: "Otimização contínua",
      items: [
        "2 variações A/B na entrega",
        "Heatmap configurado",
        "Análise dos primeiros 30 dias",
        "Sugestões de melhoria",
        "Ajustes de copy pós-lançamento",
      ],
    },
    {
      title: "Suporte",
      items: [
        "Suporte via WhatsApp",
        "Documentação da estrutura",
        "Orientações para edição de conteúdo",
        "Hospedagem premium inclusa",
        "Ajustes futuros via plano de manutenção",
      ],
    },
  ],
  examples: [
    {
      icon: Megaphone,
      title: "Campanhas de Google Ads",
      description:
        "Página de destino dedicada para maximizar o ROI de cada real investido em mídia paga.",
    },
    {
      icon: Rocket,
      title: "Lançamento de produtos",
      description:
        "Estrutura persuasiva para gerar expectativa e converter no dia do lançamento.",
    },
    {
      icon: Calendar,
      title: "Captação para eventos",
      description:
        "Cursos, workshops, webinars — landing pages otimizadas para inscrições qualificadas.",
    },
    {
      icon: Users,
      title: "Geração de leads B2B",
      description:
        "Iscas digitais, agendamentos de demo e formulários que qualificam antes do vendedor entrar em contato.",
    },
  ],
  faq: [
    {
      question: "Qual é a diferença entre landing page e site institucional?",
      answer:
        "A landing page tem um único objetivo (converter em lead ou venda) e uma única página, sem menu de navegação. O site institucional apresenta toda a empresa com várias páginas.",
    },
    {
      question: "Preciso ter Google Ads rodando para ter uma landing page?",
      answer:
        "Não. Mas ela funciona muito melhor com tráfego pago (Google Ads, Meta Ads, Email Marketing). Se você só quer presença orgânica, um site institucional pode ser mais indicado.",
    },
    {
      question: "Vocês fazem os testes A/B após a entrega?",
      answer:
        "Sim. Entregamos com 2 variações prontas para teste e acompanhamos os primeiros 30 dias sugerindo otimizações baseadas em dados reais.",
    },
    {
      question: "A landing page vem com hospedagem?",
      answer:
        "Sim. Hospedagem premium, domínio configurado, SSL e CDN global inclusos no projeto.",
    },
    {
      question: "Quanto tempo até estar no ar?",
      answer:
        "Em média 7 dias úteis após a aprovação do briefing e recebimento dos conteúdos base (logo, imagens, oferta).",
    },
  ],
  finalCta: {
    title: "Pronto para transformar cliques em clientes?",
    description:
      "Faça sua próxima campanha pagar-se a si mesma. Vamos analisar sua oferta e propor a estrutura ideal para maximizar sua conversão.",
    whatsappHref:
      "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20quero%20criar%20minha%20Landing%20Page.%20Pode%20me%20explicar%20como%20funciona%3F",
  },
};

const LandingPages = () => <ServicePageTemplate content={content} />;

export default LandingPages;
