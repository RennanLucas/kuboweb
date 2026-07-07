import {
  ShoppingCart,
  CreditCard,
  Package,
  BarChart3,
  Shirt,
  Palette,
  Store,
  Boxes,
} from "lucide-react";
import ServicePageTemplate, { type ServicePageContent } from "@/components/ServicePageTemplate";
import heroImage from "@/assets/service-loja.webp";

const content: ServicePageContent = {
  seo: {
    title: "Loja Virtual",
    description:
      "Criação de e-commerce completo em São Paulo. Pagamento online, gestão de estoque, checkout otimizado e design premium para vender 24h por dia.",
    path: "/servicos/loja-virtual",
  },
  hero: {
    badge: "E-commerce",
    title: "Loja virtual completa",
    highlight: "para escalar suas vendas",
    subtitle:
      "E-commerce profissional com catálogo, carrinho, pagamento integrado e painel administrativo — desenhado para converter visitantes em compradores 24 horas por dia.",
    image: heroImage,
    imageAlt: "Loja virtual com carrinho, produtos e pagamento",
    whatsappHref:
      "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20Loja%20Virtual.%20Pode%20me%20explicar%20como%20funciona%3F",
    quickFacts: [
      { label: "Prazo médio", value: "30 dias" },
      { label: "Formas de pagamento", value: "Pix, cartão, boleto" },
      { label: "Produtos", value: "Ilimitados" },
    ],
  },
  benefits: [
    {
      icon: ShoppingCart,
      title: "Venda 24/7",
      text: "Sua loja aberta todos os dias, o dia inteiro, sem depender de horário comercial ou vendedor.",
    },
    {
      icon: CreditCard,
      title: "Pagamento integrado",
      text: "Pix, cartão de crédito e boleto com as principais gateways (Stripe, Mercado Pago, PagSeguro).",
    },
    {
      icon: Package,
      title: "Gestão completa",
      text: "Painel para produtos, pedidos, estoque, clientes e cupons — tudo em um só lugar.",
    },
    {
      icon: BarChart3,
      title: "Escalável",
      text: "Arquitetura preparada para crescer com você, do primeiro pedido aos milhares por mês.",
    },
  ],
  process: [
    {
      title: "Planejamento estratégico",
      description:
        "Analisamos seus produtos, categorias, público e concorrência. Definimos a arquitetura da loja, formas de pagamento e integrações logísticas.",
    },
    {
      title: "Design da loja",
      description:
        "Criamos o layout da vitrine, páginas de produto, carrinho e checkout com foco em conversão e experiência de compra premium.",
    },
    {
      title: "Desenvolvimento e integrações",
      description:
        "Codificamos com tecnologias modernas, integramos gateway de pagamento, frete (Correios/Melhor Envio) e emissão de nota fiscal.",
    },
    {
      title: "Cadastro e conteúdo",
      description:
        "Configuramos categorias, cadastramos os primeiros produtos, fotos, descrições, variações (cor, tamanho) e políticas da loja.",
    },
    {
      title: "Testes e lançamento",
      description:
        "Testamos todo o fluxo de compra (do carrinho ao pagamento). Publicamos, configuramos analytics de e-commerce e treinamos você para gerenciar.",
    },
  ],
  deliverables: [
    {
      title: "Vitrine & Produtos",
      items: [
        "Home com destaques e novidades",
        "Página de produto otimizada",
        "Variações (cor, tamanho, modelo)",
        "Busca inteligente e filtros",
        "Categorias e coleções ilimitadas",
      ],
    },
    {
      title: "Carrinho & Checkout",
      items: [
        "Carrinho lateral flutuante",
        "Checkout em uma página (1-step)",
        "Cálculo de frete automático",
        "Cupons de desconto",
        "Recuperação de carrinho abandonado",
      ],
    },
    {
      title: "Pagamento",
      items: [
        "Pix com QR Code",
        "Cartão de crédito (parcelamento)",
        "Boleto bancário",
        "Gateway seguro (SSL + PCI)",
        "Múltiplos gateways suportados",
      ],
    },
    {
      title: "Painel administrativo",
      items: [
        "Gestão de produtos e estoque",
        "Gestão de pedidos e status",
        "Cadastro de clientes",
        "Cupons e promoções",
        "Relatórios de vendas",
      ],
    },
    {
      title: "Logística & Fiscal",
      items: [
        "Integração Correios / Melhor Envio",
        "Etiquetas de envio automatizadas",
        "Cálculo de frete em tempo real",
        "Integração com emissor de NF-e (opcional)",
        "Notificações de rastreamento",
      ],
    },
    {
      title: "Marketing & SEO",
      items: [
        "SEO de produtos e categorias",
        "Google Analytics 4 (e-commerce)",
        "Meta Pixel e Google Ads",
        "Integração WhatsApp",
        "Newsletter e cupons por email",
      ],
    },
  ],
  examples: [
    {
      icon: Shirt,
      title: "Moda e acessórios",
      description:
        "Lojas de roupas, calçados e acessórios com variações de cor, tamanho e modelo.",
    },
    {
      icon: Palette,
      title: "Artesanato e autorais",
      description:
        "Artesãos, ceramistas e criadores que querem uma vitrine premium para produtos únicos.",
    },
    {
      icon: Store,
      title: "Comércios locais",
      description:
        "Lojas físicas expandindo para o digital e ampliando alcance para novos estados.",
    },
    {
      icon: Boxes,
      title: "Marcas em lançamento",
      description:
        "Empreendedores lançando produtos próprios (D2C) com identidade forte e presença digital robusta.",
    },
  ],
  faq: [
    {
      question: "Qual plataforma vocês usam?",
      answer:
        "Analisamos seu caso e recomendamos entre plataformas robustas como Shopify, WooCommerce ou soluções customizadas em Next.js. Todas com painel administrativo simples de usar.",
    },
    {
      question: "Vocês cadastram os produtos?",
      answer:
        "Cadastramos os 20 primeiros produtos incluso no projeto (com fotos otimizadas e descrições). Os demais você pode cadastrar facilmente pelo painel ou contratar como serviço adicional.",
    },
    {
      question: "Quais formas de pagamento a loja aceita?",
      answer:
        "Pix (com QR Code instantâneo), cartão de crédito com parcelamento em até 12x e boleto bancário. Integramos com Mercado Pago, PagSeguro, Stripe ou o gateway de sua preferência.",
    },
    {
      question: "E a nota fiscal?",
      answer:
        "Integramos com emissores automáticos de NF-e (Bling, Tiny, Omie). Assim, a nota é emitida automaticamente a cada venda aprovada.",
    },
    {
      question: "Consigo integrar com Correios e transportadoras?",
      answer:
        "Sim. Integração nativa com Correios e Melhor Envio (que agrega várias transportadoras). O cálculo de frete acontece em tempo real no carrinho.",
    },
    {
      question: "Tem taxa por venda?",
      answer:
        "Não cobramos taxa por venda. Você paga apenas a mensalidade da plataforma escolhida e as taxas do gateway de pagamento (padrão do mercado).",
    },
  ],
  finalCta: {
    title: "Pronto para começar a vender online?",
    description:
      "Vamos entender seu produto e propor a estrutura ideal para você começar a vender com profissionalismo e escalar sem dor de cabeça.",
    whatsappHref:
      "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20Loja%20Virtual.%20Pode%20me%20explicar%20como%20funciona%3F",
  },
};

const LojaVirtual = () => <ServicePageTemplate content={content} />;

export default LojaVirtual;
