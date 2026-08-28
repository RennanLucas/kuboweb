import {
  Target,
  TrendingUp,
  Eye,
  Megaphone,
  UserCheck,
  Rocket,
  MapPin,
  ShoppingBag,
} from "lucide-react";
import ServicePageTemplate, { type ServicePageContent } from "@/components/ServicePageTemplate";
import heroImage from "@/assets/service-anuncios-new.jpg";

const content: ServicePageContent = {
  seo: {
    title: "Google Ads",
    description:
      "Gestão profissional de Google Ads em São Paulo. Apareça no topo do Google, atraia clientes qualificados e escale suas vendas com estratégia e dados.",
    path: "/servicos/anuncios",
  },
  hero: {
    badge: "Google Ads",
    title: "Google Ads com",
    highlight: "estratégia e retorno",
    subtitle:
      "Campanhas de tráfego pago no Google gerenciadas por especialistas — para colocar sua empresa na frente de clientes prontos para comprar, com resultados mensuráveis e escalabilidade real.",
    image: heroImage,
    imageAlt: "Dashboard de Google Ads com métricas de performance",
    whatsappHref:
      "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20servi%C3%A7o%20de%20An%C3%BAncios%20Google%20Ads.%20Pode%20me%20explicar%20como%20funciona%3F",
    quickFacts: [
      { label: "Investimento", value: "R$ 280" },
      { label: "Setup inicial", value: "3-5 dias" },
      { label: "Otimização", value: "Semanal" },
      { label: "Plataforma", value: "Google Ads" },
    ],
  },
  benefits: [
    {
      icon: Target,
      title: "Intenção de compra",
      text: "Alcance quem já está buscando ativamente pelo seu serviço no Google — o lead mais quente do mercado.",
    },
    {
      icon: Eye,
      title: "Topo do Google",
      text: "Sua empresa nas primeiras posições do Google desde o primeiro dia — sem esperar meses por SEO orgânico.",
    },
    {
      icon: TrendingUp,
      title: "ROI mensurável",
      text: "Cada real investido é rastreado. Você sabe exatamente quantos leads e vendas cada campanha gerou.",
    },
    {
      icon: Megaphone,
      title: "Orçamento sob controle",
      text: "Você define quanto quer investir por dia. Ajustamos e escalamos conforme os resultados aparecem.",
    },
  ],
  process: [
    {
      title: "Auditoria e estratégia",
      description:
        "Analisamos seu mercado, concorrentes e público. Mapeamos as palavras-chave estratégicas e definimos os tipos de campanha (Pesquisa, Display, YouTube, Performance Max).",
    },
    {
      title: "Estrutura da conta",
      description:
        "Configuramos a conta Google Ads, campanhas, grupos de anúncios, extensões e segmentações. Instalamos tags de conversão e integração com Google Analytics.",
    },
    {
      title: "Criação de anúncios",
      description:
        "Escrevemos títulos e descrições persuasivos, criamos variações para testes A/B e configuramos as extensões (sitelinks, chamadas, avaliações).",
    },
    {
      title: "Lançamento e monitoramento",
      description:
        "Colocamos as campanhas no ar com monitoramento diário nas duas primeiras semanas — ajustando lances, palavras negativas e horários.",
    },
    {
      title: "Otimização contínua",
      description:
        "Otimização semanal de lances, orçamentos, criativos e segmentações baseada em dados reais.",
    },
  ],
  deliverables: [
    {
      title: "Auditoria & Estratégia",
      items: [
        "Análise da conta atual (se existir)",
        "Análise de concorrentes",
        "Pesquisa profunda de palavras-chave",
        "Definição de tipos de campanha",
        "Planejamento de orçamento e metas",
      ],
    },
    {
      title: "Configuração técnica",
      items: [
        "Criação/reestruturação da conta",
        "Instalação de tag de conversão",
        "Integração com Google Analytics 4",
        "Configuração de públicos",
        "Extensões de anúncio completas",
      ],
    },
    {
      title: "Campanhas criadas",
      items: [
        "Campanhas de Pesquisa (busca)",
        "Campanhas de Display",
        "Campanhas de Performance Max",
        "Remarketing dinâmico",
        "Google Shopping (para e-commerce)",
      ],
    },
    {
      title: "Criativos & Copy",
      items: [
        "Múltiplas variações de anúncio",
        "Testes A/B contínuos",
        "Extensões (sitelinks, chamadas)",
        "Anúncios responsivos",
        "Criativos para Display (opcional)",
      ],
    },
    {
      title: "Gestão contínua",
      items: [
        "Otimização semanal de lances",
        "Ajuste de palavras negativas",
        "Testes de novos anúncios",
        "Reajuste de orçamentos",
        "Monitoramento de concorrentes",
      ],
    },
    {
      title: "Acompanhamento & Dados",
      items: [
        "Dashboard Kuboweb Analytics (30 dias grátis)",
        "Análise de ROI por campanha",
        "Recomendações estratégicas",
      ],
    },
  ],
  examples: [
    {
      icon: UserCheck,
      title: "Profissionais liberais",
      description:
        "Advogados, médicos, dentistas e consultores que precisam de agenda cheia rapidamente.",
    },
    {
      icon: Rocket,
      title: "Empresas em lançamento",
      description:
        "Novos produtos, serviços ou marcas que precisam de tração imediata no mercado.",
    },
    {
      icon: MapPin,
      title: "Negócios locais",
      description:
        "Restaurantes, clínicas e prestadores de serviço que querem dominar buscas na sua região.",
    },
    {
      icon: ShoppingBag,
      title: "E-commerces",
      description:
        "Lojas virtuais que precisam de tráfego qualificado com Google Shopping e Performance Max.",
    },
  ],
  faq: [
    {
      question: "Qual o orçamento mínimo de mídia para começar?",
      answer:
        "Recomendamos um mínimo de R$ 30/dia (R$ 900/mês) em mídia paga para gerar dados suficientes para otimização. Esse valor é pago diretamente ao Google, separado da nossa gestão.",
    },
    {
      question: "Quanto tempo até ver resultados?",
      answer:
        "As primeiras impressões e cliques aparecem em 24-48h. Leads qualificados costumam aparecer nas primeiras 2 semanas. O período de otimização e escala completa é de 60 a 90 dias.",
    },
    {
      question: "A conta do Google Ads fica no meu nome?",
      answer:
        "Sim. A conta é criada no seu nome/CNPJ e você tem acesso total como proprietário. Nós temos acesso de gerente. Se um dia você quiser sair, leva a conta inteira com histórico e dados.",
    },
    {
      question: "Qual a diferença entre setup e gestão mensal?",
      answer:
        "O setup é a configuração inicial (auditoria, estrutura, primeiras campanhas). A gestão mensal é a otimização contínua, testes e ajustes — indispensável para bons resultados.",
    },
    {
      question: "Vocês trabalham com quais tipos de campanha?",
      answer:
        "Google Ads em todas as suas modalidades: Pesquisa, Display, YouTube, Performance Max, Shopping e Remarketing. Focamos em Google porque é onde está a intenção de compra mais qualificada.",
    },
    {
      question: "Tem contrato de fidelidade?",
      answer:
        "Não. Trabalhamos com renovação mensal e transparência total. Você fica porque os resultados justificam.",
    },
  ],
  finalCta: {
    title: "Pronto para escalar suas vendas no Google?",
    description:
      "Faça uma análise gratuita da sua conta ou do seu mercado. Mostramos o potencial real do Google Ads para o seu negócio antes de qualquer contratação.",
    whatsappHref:
      "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20servi%C3%A7o%20de%20An%C3%BAncios%20Google%20Ads.%20Pode%20me%20explicar%20como%20funciona%3F",
  },
};

const Anuncios = () => <ServicePageTemplate content={content} />;

export default Anuncios;
