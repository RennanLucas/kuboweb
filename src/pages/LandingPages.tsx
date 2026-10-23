import { Calendar, FileText, MessageCircle, Megaphone, MousePointerClick, Rocket, Target, Users } from "lucide-react";
import ServicePageTemplate, { type ServicePageContent } from "@/components/ServicePageTemplate";
import heroImage from "@/assets/service-landing-new.jpg";

const content: ServicePageContent = {
  seo: {
    title: "Landing Pages",
    description: "Criação de landing pages profissionais para campanhas, ofertas, lançamentos e geração de contatos, com design responsivo e caminho claro até a ação.",
    path: "/servicos/landing-pages",
  },
  hero: {
    badge: "Landing Pages",
    title: "Uma página com",
    highlight: "um objetivo muito claro",
    subtitle: "Landing pages construídas para apresentar uma oferta sem distrações, organizar a mensagem e conduzir o visitante até WhatsApp, formulário, cadastro ou compra.",
    image: heroImage,
    imageAlt: "Landing page profissional em desktop e mobile",
    whatsappHref: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20quero%20criar%20uma%20Landing%20Page.%20Pode%20me%20explicar%20como%20funciona%3F",
    quickFacts: [],
  },
  benefits: [
    { icon: Target, title: "Mensagem focada", text: "A página é organizada em torno de uma oferta e de uma ação principal, reduzindo caminhos desnecessários." },
    { icon: MousePointerClick, title: "CTA claro", text: "Botões, formulários e WhatsApp entram em pontos coerentes com a leitura e o estágio da decisão." },
    { icon: FileText, title: "Conteúdo estruturado", text: "Headline, benefícios, objeções e detalhes da oferta são organizados para facilitar entendimento e comparação." },
    { icon: MessageCircle, title: "Integração com contato", text: "A página pode ser conectada ao WhatsApp, formulários e ferramentas de rastreamento conforme o projeto." },
  ],
  process: [
    { title: "Entender a oferta", description: "Definimos produto ou serviço, público, origem do tráfego e a ação que a página precisa incentivar." },
    { title: "Organizar a mensagem", description: "Estruturamos as seções em uma sequência que apresenta contexto, proposta, benefícios, detalhes e próximos passos." },
    { title: "Criar a interface", description: "Desenhamos a página com hierarquia forte, leitura fácil e adaptação para celular e desktop." },
    { title: "Desenvolver e integrar", description: "A interface vira código e recebe as integrações necessárias, como WhatsApp, formulário e tags de campanha." },
    { title: "Revisar e publicar", description: "Testamos o fluxo principal e publicamos a página no endereço definido para a campanha." },
  ],
  deliverables: [
    { title: "Estratégia da página", items: ["Definição do objetivo principal", "Organização da oferta", "Hierarquia das seções", "Mapeamento dos CTAs"] },
    { title: "Conteúdo", items: ["Headline e subtítulos", "Estrutura de benefícios", "Tratamento de dúvidas e objeções", "Microcopy de botões e formulários"] },
    { title: "Design & UX", items: ["Layout sob medida", "Versão mobile e desktop", "Hierarquia visual", "Interações quando fizerem sentido"] },
    { title: "Integrações", items: ["WhatsApp", "Formulário de contato ou cadastro", "Tags de conversão conforme campanha", "Analytics conforme a solução escolhida"] },
    { title: "Performance", items: ["Imagens otimizadas", "Carregamento responsivo", "Boas práticas técnicas", "Revisão em dispositivos diferentes"] },
    { title: "Publicação", items: ["Domínio ou subdomínio", "HTTPS", "Validação do fluxo principal", "Ajustes previstos no escopo"] },
  ],
  examples: [
    { icon: Megaphone, title: "Campanhas de Google Ads", description: "Uma página específica para receber o tráfego de uma oferta ou serviço anunciado." },
    { icon: Rocket, title: "Lançamentos", description: "Para apresentar um novo produto, serviço, lista de espera ou condição especial em uma página dedicada." },
    { icon: Calendar, title: "Eventos e inscrições", description: "Para workshops, webinars, eventos e outras ações que precisam centralizar informação e cadastro." },
    { icon: Users, title: "Captação de contatos", description: "Para operações B2B ou de serviços que querem receber pedidos de orçamento, diagnósticos ou agendamentos." },
  ],
  faq: [
    { question: "Qual é a diferença entre landing page e site institucional?", answer: "A landing page normalmente concentra uma oferta e uma ação em uma única página. O site institucional apresenta a empresa de forma mais ampla, com diferentes páginas e caminhos de navegação." },
    { question: "Preciso ter anúncios para usar uma landing page?", answer: "Não. Ela também pode ser usada em redes sociais, e-mail, QR Code, campanhas orgânicas ou links diretos. O melhor canal depende da estratégia do negócio." },
    { question: "Vocês configuram rastreamento?", answer: "Podemos configurar tags e eventos necessários para a campanha conforme as ferramentas escolhidas e o escopo contratado." },
    { question: "A landing page vem com hospedagem?", answer: "A publicação e a hospedagem são definidas no projeto. Podemos configurar o ambiente e o domínio conforme a solução escolhida." },
    { question: "Quanto tempo leva para ficar pronta?", answer: "O prazo depende do conteúdo, do tamanho da página, das integrações e das aprovações. O cronograma é definido antes do início do projeto." },
  ],
  finalCta: {
    title: "Sua campanha precisa de uma página mais clara?",
    description: "Envie a oferta, o objetivo e de onde virá o tráfego. A Kubo Web ajuda a definir a estrutura adequada antes de começar o desenvolvimento.",
    whatsappHref: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20quero%20criar%20uma%20Landing%20Page.%20Pode%20me%20explicar%20como%20funciona%3F",
  },
};

const LandingPages = () => <ServicePageTemplate content={content} />;

export default LandingPages;
