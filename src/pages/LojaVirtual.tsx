import { Boxes, CreditCard, Package, Search, Shirt, ShoppingCart, Store, Smartphone } from "lucide-react";
import ServicePageTemplate, { type ServicePageContent } from "@/components/ServicePageTemplate";
import heroImage from "@/assets/service-loja-new.jpg";

const content: ServicePageContent = {
  seo: {
    title: "Loja Virtual",
    description: "Criação de lojas virtuais com catálogo, carrinho, pagamento e estrutura responsiva definida de acordo com a operação do negócio.",
    path: "/servicos/loja-virtual",
  },
  hero: {
    badge: "E-commerce",
    title: "Uma loja virtual",
    highlight: "pensada para sua operação",
    subtitle: "Projetos de e-commerce com catálogo, navegação, carrinho, checkout e integrações definidos conforme produtos, logística, pagamento e rotina do negócio.",
    image: heroImage,
    imageAlt: "Interface de uma loja virtual profissional",
    whatsappHref: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20uma%20Loja%20Virtual.%20Pode%20me%20explicar%20como%20funciona%3F",
    quickFacts: [],
  },
  benefits: [
    { icon: ShoppingCart, title: "Jornada de compra", text: "Organização de catálogo, produto, carrinho e checkout para que a compra seja simples de entender." },
    { icon: CreditCard, title: "Pagamento", text: "Integrações de pagamento são definidas de acordo com a plataforma e os meios que o negócio precisa oferecer." },
    { icon: Package, title: "Operação", text: "Estoque, pedidos, frete e outras rotinas podem ser conectados conforme a solução escolhida." },
    { icon: Smartphone, title: "Experiência responsiva", text: "A loja é estruturada para funcionar de forma clara em celular e desktop, onde boa parte das compras acontece." },
  ],
  process: [
    { title: "Entender a operação", description: "Mapeamos produtos, categorias, variações, formas de pagamento, logística e o que a equipe precisa administrar depois do lançamento." },
    { title: "Escolher a solução", description: "Definimos a plataforma e as integrações de acordo com escopo, orçamento, volume de produtos e necessidades de gestão." },
    { title: "Desenhar a experiência", description: "Organizamos vitrine, navegação, páginas de produto, carrinho e checkout com uma interface coerente com a marca." },
    { title: "Configurar e integrar", description: "Montamos a loja e conectamos os recursos previstos no escopo, como pagamento, frete, domínio e rastreamento." },
    { title: "Testar e publicar", description: "Revisamos o fluxo de compra e os pontos críticos antes da loja entrar no ar." },
  ],
  deliverables: [
    { title: "Catálogo", items: ["Categorias e coleções", "Páginas de produto", "Variações quando suportadas", "Busca e filtros conforme plataforma"] },
    { title: "Carrinho & Checkout", items: ["Carrinho de compras", "Fluxo de checkout", "Cupons quando suportados", "Configuração de frete conforme solução"] },
    { title: "Pagamento", items: ["Gateway definido no projeto", "Pix e cartão conforme provedor", "HTTPS", "Configuração de ambiente de pagamento"] },
    { title: "Gestão", items: ["Painel da plataforma escolhida", "Pedidos", "Produtos e estoque conforme solução", "Clientes e promoções quando disponíveis"] },
    { title: "Integrações", items: ["Frete conforme necessidade", "WhatsApp", "Analytics e tags", "Integrações fiscais ou operacionais sob avaliação"] },
    { title: "Publicação", items: ["Domínio", "Configuração da loja", "Testes de compra", "Orientações para operação"] },
  ],
  examples: [
    { icon: Shirt, title: "Moda e acessórios", description: "Para catálogos com variações de tamanho, cor, modelo e coleções." },
    { icon: Boxes, title: "Marcas de produto", description: "Para negócios que precisam organizar um catálogo próprio e vender diretamente ao consumidor." },
    { icon: Store, title: "Comércios locais", description: "Para lojas físicas que querem adicionar um canal de venda online à operação." },
    { icon: Search, title: "Catálogos especializados", description: "Para negócios com muitos itens ou categorias que precisam de busca, filtro e organização clara." },
  ],
  faq: [
    { question: "Qual plataforma vocês usam?", answer: "A escolha depende da operação. Podemos avaliar plataformas prontas ou soluções mais customizadas de acordo com catálogo, integrações, orçamento e necessidade de gestão." },
    { question: "Vocês cadastram os produtos?", answer: "O volume de cadastro incluído é definido na proposta. Também podemos estruturar a loja para que o próprio negócio continue cadastrando produtos depois." },
    { question: "Quais formas de pagamento podem ser usadas?", answer: "Isso depende do gateway e da plataforma escolhidos. Pix e cartão são opções comuns, mas a configuração final é definida durante o projeto." },
    { question: "É possível integrar frete e sistemas externos?", answer: "Em muitos casos, sim. A viabilidade depende da plataforma e das APIs ou integrações oferecidas pelos serviços externos." },
    { question: "Existe taxa por venda?", answer: "A Kubo Web não define as taxas cobradas por plataformas ou gateways. Custos de transação, mensalidades e tarifas de terceiros são apresentados pelos respectivos fornecedores." },
  ],
  finalCta: {
    title: "Quer estruturar uma loja virtual para o seu negócio?",
    description: "Envie informações sobre os produtos, formas de pagamento e logística. A Kubo Web avalia a operação e propõe uma estrutura compatível com o projeto.",
    whatsappHref: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20uma%20Loja%20Virtual.%20Pode%20me%20explicar%20como%20funciona%3F",
  },
};

const LojaVirtual = () => <ServicePageTemplate content={content} />;

export default LojaVirtual;
