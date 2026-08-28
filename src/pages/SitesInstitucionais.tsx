import {
  Globe,
  Users,
  BarChart3,
  Shield,
  Search,
  Palette,
  Code2,
  Rocket,
  Briefcase,
  Scale,
  Stethoscope,
  GraduationCap,
} from "lucide-react";
import ServicePageTemplate, { type ServicePageContent } from "@/components/ServicePageTemplate";
import heroImage from "@/assets/service-sites-new.jpg";

const content: ServicePageContent = {
  seo: {
    title: "Sites Institucionais",
    description:
      "Criação de sites institucionais profissionais em São Paulo. Design moderno, SEO otimizado, responsivo e focado em credibilidade para sua empresa.",
    path: "/servicos/sites-institucionais",
  },
  hero: {
    badge: "Sites Institucionais",
    title: "Presença digital",
    highlight: "que transmite autoridade",
    subtitle:
      "Sites institucionais desenhados sob medida para fortalecer sua marca, transmitir credibilidade e transformar visitantes em clientes qualificados — com performance de ponta e SEO estratégico.",
    image: heroImage,
    imageAlt: "Site institucional profissional em laptop com dashboard e gráficos",
    whatsappHref:
      "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20quero%20criar%20um%20site%20institucional%20profissional.%20Pode%20me%20passar%20os%20pr%C3%B3ximos%20passos%3F",
    quickFacts: [
      { label: "Investimento", value: "R$ 760" },
      { label: "Prazo médio", value: "7-15 dias" },
      { label: "Páginas", value: "Múltiplas" },
      { label: "Performance", value: "95+ PSI" },
    ],
  },
  benefits: [
    {
      icon: Globe,
      title: "Presença 24/7",
      text: "Sua empresa disponível todos os dias, o dia inteiro, para novos clientes te encontrarem no Google.",
    },
    {
      icon: Users,
      title: "Autoridade de marca",
      text: "Design profissional que transmite confiança já no primeiro contato — o cartão de visita moderno.",
    },
    {
      icon: BarChart3,
      title: "SEO estratégico",
      text: "Estrutura otimizada para o Google indexar suas páginas e ranquear pelas palavras que geram clientes.",
    },
    {
      icon: Shield,
      title: "Performance real",
      text: "Carregamento ultra-rápido, arquitetura moderna e responsividade em qualquer dispositivo.",
    },
  ],
  process: [
    {
      title: "Briefing estratégico",
      description:
        "Entendemos seu negócio, público-alvo, diferenciais e objetivos. Mapeamos a estrutura ideal do seu site e definimos as palavras-chave estratégicas.",
    },
    {
      title: "Design personalizado",
      description:
        "Criamos a identidade visual das páginas com foco em conversão e credibilidade. Você aprova cada tela antes de irmos para o desenvolvimento.",
    },
    {
      title: "Desenvolvimento premium",
      description:
        "Codificamos com tecnologias modernas (React, Vite, Tailwind) priorizando velocidade, segurança e SEO técnico desde a fundação.",
    },
    {
      title: "Testes e SEO on-page",
      description:
        "Rodamos testes em todos os dispositivos, otimizamos meta tags, structured data, imagens e velocidade — garantindo nota 90+ no PageSpeed.",
    },
    {
      title: "Publicação, entrega e otimização",
      description:
        "Publicamos no seu domínio, configuramos Google Search Console, Kuboweb Analytics (30 dias grátis) e entregamos o site pronto para uso.",
    },
  ],
  deliverables: [
    {
      title: "Design & UX",
      items: [
        "Layout personalizado e exclusivo",
        "Identidade visual consistente",
        "Design responsivo (mobile, tablet, desktop)",
        "Micro-interações e animações sutis",
        "Componentes acessíveis (WCAG AA)",
      ],
    },
    {
      title: "Estrutura & Páginas",
      items: [
        "Home institucional",
        "Página de serviços detalhada",
        "Sobre a empresa (história, missão, valores)",
        "Contato com formulário + WhatsApp",
        "Blog opcional (SEO de conteúdo)",
      ],
    },
    {
      title: "SEO & Performance",
      items: [
        "SEO on-page completo",
        "Sitemap.xml e robots.txt",
        "Structured data (Schema.org)",
        "Meta tags e Open Graph",
        "Otimização de imagens (WebP)",
      ],
    },
    {
      title: "Tecnologia",
      items: [
        "Hospedagem premium inclusa",
        "Certificado SSL (HTTPS)",
        "Domínio personalizado configurado",
        "Backup automático",
      ],
    },
  {
      title: "Integrações",
      items: [
        "WhatsApp Business flutuante",
        "Kuboweb Analytics (30 dias grátis)",
        "Google Ads",
        "Newsletter e captura de leads",
        "Google Search Console",
        "Redes sociais integradas",
      ],
    },
    {
      title: "Suporte pós-entrega",
      items: [
        "Suporte técnico via WhatsApp",
        "Orientações para edição de conteúdo",
        "Planos de manutenção opcionais",
        "Ajustes futuros via plano de manutenção",
      ],
    },
  ],
  examples: [
    {
      icon: Scale,
      title: "Escritórios de advocacia",
      description:
        "Transmita seriedade e autoridade jurídica com um site que reflete a solidez do seu escritório.",
    },
    {
      icon: Stethoscope,
      title: "Clínicas e consultórios",
      description:
        "Atraia pacientes qualificados com um site que passa confiança e facilita o agendamento.",
    },
    {
      icon: Briefcase,
      title: "Empresas de serviços",
      description:
        "Apresente seus diferenciais, cases e equipe com uma vitrine digital verdadeiramente profissional.",
    },
    {
      icon: GraduationCap,
      title: "Consultores e coaches",
      description:
        "Fortaleça sua marca pessoal e converta seguidores em clientes com autoridade digital.",
    },
  ],
  faq: [
    {
      question: "Quanto tempo leva para criar um site institucional?",
      answer:
        "Em média, entregamos em 15 dias úteis a partir da aprovação do briefing e recebimento dos conteúdos. Projetos maiores podem levar até 30 dias.",
    },
    {
      question: "Vocês criam os textos e escolhem as imagens?",
      answer:
        "Sim. Oferecemos copywriting profissional focado em conversão e banco de imagens premium. Se você já tem conteúdo, adaptamos com nossa direção editorial.",
    },
    {
      question: "O site vai aparecer no Google?",
      answer:
        "Sim. Todos os nossos sites são entregues com SEO técnico completo. Para aparecer nas primeiras posições em buscas competitivas, recomendamos combinar com o serviço de gestão de Google Ads ou SEO de conteúdo contínuo.",
    },
    {
      question: "Consigo editar o conteúdo depois?",
      answer:
        "Sim. Realizamos ajustes e atualizações de conteúdo conforme a demanda, com planos de manutenção opcionais para você manter o site sempre atualizado.",
    },
    {
      question: "Tem manutenção mensal obrigatória?",
      answer:
        "Não é obrigatória. Oferecemos planos de manutenção opcionais (a partir de R$ 49/mês) para atualizações, monitoramento e ajustes contínuos.",
    },
  ],
  finalCta: {
    title: "Pronto para elevar sua presença digital?",
    description:
      "Vamos conversar sobre o seu projeto. Fazemos uma análise gratuita da sua presença atual e apresentamos uma proposta sob medida em até 48h.",
    whatsappHref:
      "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20quero%20criar%20um%20site%20institucional%20profissional.%20Pode%20me%20passar%20os%20pr%C3%B3ximos%20passos%3F",
  },
};

const SitesInstitucionais = () => <ServicePageTemplate content={content} />;

export default SitesInstitucionais;
