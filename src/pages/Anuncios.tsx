import { BarChart3, Eye, MapPin, Megaphone, Search, ShoppingBag, Target, UserCheck } from "lucide-react";
import ServicePageTemplate, { type ServicePageContent } from "@/components/ServicePageTemplate";
import heroImage from "@/assets/service-anuncios-new.jpg";

const content: ServicePageContent = {
  seo: {
    title: "Google Ads",
    description: "Estruturação e gestão de Google Ads com pesquisa de palavras-chave, anúncios, conversões e acompanhamento orientado por dados.",
    path: "/servicos/anuncios",
  },
  hero: {
    badge: "Google Ads",
    title: "Google Ads com",
    highlight: "estrutura e acompanhamento",
    subtitle: "Campanhas organizadas para conectar buscas relevantes ao seu site ou WhatsApp, com configuração de conversões e ajustes baseados nos dados disponíveis.",
    image: heroImage,
    imageAlt: "Interface de campanha de Google Ads",
    whatsappHref: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20servi%C3%A7o%20de%20Google%20Ads.%20Pode%20me%20explicar%20como%20funciona%3F",
    quickFacts: [],
  },
  benefits: [
    { icon: Search, title: "Demanda de pesquisa", text: "Campanhas de pesquisa podem alcançar pessoas que estão buscando termos relacionados ao seu serviço ou produto." },
    { icon: Target, title: "Segmentação", text: "Palavras-chave, localização, horários e outros critérios são organizados de acordo com o objetivo e o mercado." },
    { icon: BarChart3, title: "Dados de campanha", text: "Cliques, custos e conversões configuradas ajudam a orientar decisões e identificar o que precisa ser ajustado." },
    { icon: Megaphone, title: "Controle de orçamento", text: "O investimento de mídia é definido na própria plataforma e pode ser ajustado de acordo com a estratégia e os resultados observados." },
  ],
  process: [
    { title: "Diagnóstico", description: "Analisamos oferta, site ou landing page, região atendida, concorrência e o objetivo que será medido na campanha." },
    { title: "Pesquisa e estrutura", description: "Organizamos palavras-chave, grupos de anúncios, segmentação e exclusões necessárias para a campanha inicial." },
    { title: "Conversões e anúncios", description: "Configuramos eventos compatíveis com o projeto e criamos anúncios alinhados à busca e à página de destino." },
    { title: "Publicação", description: "A campanha é ativada após a revisão das configurações, do orçamento e dos destinos dos anúncios." },
    { title: "Acompanhamento", description: "Os dados são revisados para ajustar termos de pesquisa, negativas, anúncios, lances e orçamento quando necessário." },
  ],
  deliverables: [
    { title: "Estratégia", items: ["Análise da oferta", "Pesquisa de palavras-chave", "Organização de campanhas", "Definição das conversões importantes"] },
    { title: "Configuração", items: ["Campanhas e grupos de anúncios", "Segmentação", "Extensões e recursos aplicáveis", "Tags de conversão conforme o projeto"] },
    { title: "Anúncios", items: ["Títulos e descrições", "Variações para aprendizado", "Revisão de destinos", "Ajustes de mensagem conforme dados"] },
    { title: "Qualidade do tráfego", items: ["Análise de termos de pesquisa", "Palavras negativas", "Ajustes de localização", "Revisão de horários quando relevante"] },
    { title: "Acompanhamento", items: ["Revisão de orçamento", "Ajustes de lances conforme estratégia", "Leitura de conversões", "Recomendações para página de destino"] },
    { title: "Transparência", items: ["Conta vinculada ao negócio", "Acesso aos dados da campanha", "Investimento de mídia pago à plataforma", "Escopo de gestão definido em proposta"] },
  ],
  examples: [
    { icon: UserCheck, title: "Serviços profissionais", description: "Para negócios que recebem contatos, agendamentos ou pedidos de orçamento por site e WhatsApp." },
    { icon: MapPin, title: "Negócios locais", description: "Para operações que atendem regiões específicas e querem aparecer em buscas relacionadas ao serviço." },
    { icon: ShoppingBag, title: "E-commerce", description: "Para lojas que precisam avaliar campanhas de produtos, pesquisa ou outras soluções disponíveis no Google Ads." },
    { icon: Eye, title: "Marcas com oferta definida", description: "Para negócios que já têm uma página de destino e querem testar aquisição de tráfego de forma mensurável." },
  ],
  faq: [
    { question: "Existe um orçamento mínimo de mídia?", answer: "O valor adequado depende do mercado, região, volume de busca e custo estimado por clique. Antes de começar, avaliamos se o orçamento disponível é compatível com o objetivo da campanha." },
    { question: "Em quanto tempo aparecem resultados?", answer: "Impressões e cliques podem aparecer após a aprovação e ativação dos anúncios, mas geração de contatos e vendas varia por mercado, oferta, orçamento, página e concorrência. Não existe prazo garantido de resultado." },
    { question: "A conta do Google Ads fica no meu nome?", answer: "A recomendação é que a conta e a forma de pagamento pertençam ao próprio negócio, com acesso de gestão concedido à Kubo Web quando necessário." },
    { question: "O investimento no Google está incluso na gestão?", answer: "Não. O orçamento de mídia é cobrado pelo Google Ads. O serviço da Kubo Web corresponde à configuração, gestão e acompanhamento definidos na proposta." },
    { question: "Quais tipos de campanha podem ser usados?", answer: "A escolha depende do negócio e da disponibilidade dos recursos na conta. Pesquisa costuma ser uma opção importante para demanda ativa, e outras modalidades podem ser avaliadas quando fizerem sentido." },
    { question: "Google Ads garante vendas?", answer: "Não. A plataforma pode gerar tráfego e oportunidades mensuráveis, mas vendas dependem também da oferta, preço, atendimento, página, concorrência e outros fatores fora da campanha." },
  ],
  finalCta: {
    title: "Quer avaliar se Google Ads faz sentido para o seu negócio?",
    description: "Envie seu serviço, região atendida, página atual e objetivo. A Kubo Web avalia a estrutura necessária para começar com mais clareza.",
    whatsappHref: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20servi%C3%A7o%20de%20Google%20Ads.%20Pode%20me%20explicar%20como%20funciona%3F",
  },
};

const Anuncios = () => <ServicePageTemplate content={content} />;

export default Anuncios;
