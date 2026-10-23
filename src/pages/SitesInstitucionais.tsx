import { Briefcase, Building2, Code2, Globe, MessageCircle, Search, ShieldCheck, Smartphone } from "lucide-react";
import ServicePageTemplate, { type ServicePageContent } from "@/components/ServicePageTemplate";
import heroImage from "@/assets/service-sites-new.jpg";

const content: ServicePageContent = {
  seo: {
    title: "Sites Institucionais",
    description: "Criação de sites institucionais profissionais, responsivos e estruturados para apresentar sua empresa com clareza e credibilidade.",
    path: "/servicos/sites-institucionais",
  },
  hero: {
    badge: "Sites Institucionais",
    title: "Presença digital",
    highlight: "que representa sua empresa",
    subtitle: "Sites institucionais sob medida para organizar serviços, diferenciais e informações da empresa em uma experiência atual, responsiva e fácil de navegar.",
    image: heroImage,
    imageAlt: "Interface de um site institucional profissional",
    whatsappHref: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20quero%20criar%20um%20site%20institucional%20profissional.%20Pode%20me%20passar%20os%20pr%C3%B3ximos%20passos%3F",
    quickFacts: [],
  },
  benefits: [
    { icon: Globe, title: "Presença profissional", text: "Uma estrutura própria para apresentar a empresa, seus serviços e seus canais de contato sem depender apenas das redes sociais." },
    { icon: ShieldCheck, title: "Mais confiança", text: "Design, conteúdo e navegação organizados para transmitir uma imagem consistente desde o primeiro acesso." },
    { icon: Smartphone, title: "Experiência responsiva", text: "O projeto é pensado para funcionar de forma clara em celular, tablet e desktop." },
    { icon: Search, title: "Base técnica para busca", text: "Estrutura de páginas, títulos, metadados e sitemap preparados para facilitar a indexação pelos mecanismos de busca." },
  ],
  process: [
    { title: "Briefing e objetivo", description: "Entendemos o negócio, público, serviços, referências e qual ação o visitante deve tomar ao chegar no site." },
    { title: "Estrutura e conteúdo", description: "Organizamos páginas, hierarquia e mensagens para que a empresa seja entendida com rapidez e sem excesso de informação." },
    { title: "Direção visual", description: "Definimos uma linguagem visual coerente com a marca e aplicamos essa direção às páginas principais." },
    { title: "Desenvolvimento responsivo", description: "A interface é transformada em código, adaptada para diferentes telas e conectada aos canais de contato necessários." },
    { title: "Revisão e publicação", description: "Revisamos navegação, conteúdo e funcionamento antes de publicar no domínio definido para o projeto." },
  ],
  deliverables: [
    { title: "Estrutura", items: ["Arquitetura das páginas", "Home e páginas institucionais conforme escopo", "Seções para serviços e diferenciais", "Contato e chamadas para ação"] },
    { title: "Design & UX", items: ["Interface sob medida", "Versão mobile e desktop", "Hierarquia visual consistente", "Interações e animações quando fizerem sentido"] },
    { title: "SEO técnico", items: ["Títulos e descrições por página", "Sitemap e robots.txt", "Open Graph", "Estrutura semântica para indexação"] },
    { title: "Integrações", items: ["WhatsApp", "Formulários conforme necessidade", "Google Ads e tags quando contratados", "Analytics conforme a solução escolhida"] },
    { title: "Publicação", items: ["Configuração do domínio", "HTTPS", "Hospedagem definida para o projeto", "Testes antes da entrada no ar"] },
    { title: "Evolução", items: ["Orientações pós-publicação", "Ajustes previstos no escopo", "Manutenção opcional", "Novas páginas e integrações sob orçamento"] },
  ],
  examples: [
    { icon: Briefcase, title: "Empresas de serviços", description: "Para negócios que precisam explicar serviços, diferenciais e formas de contato com mais profundidade." },
    { icon: Building2, title: "Empresas locais", description: "Para operações que querem uma presença própria além de Instagram, Maps e marketplaces." },
    { icon: MessageCircle, title: "Profissionais", description: "Para profissionais que precisam reunir apresentação, abordagem, serviços e contato em um endereço próprio." },
    { icon: Code2, title: "Negócios em evolução", description: "Para empresas que já têm um site, mas precisam atualizar a experiência, a estrutura ou o posicionamento visual." },
  ],
  faq: [
    { question: "Quanto tempo leva para criar um site institucional?", answer: "O prazo depende do número de páginas, do conteúdo, das integrações e da velocidade das aprovações. O cronograma é definido junto com o escopo antes do início do projeto." },
    { question: "Vocês ajudam com textos e imagens?", answer: "Podemos organizar e adaptar o conteúdo do projeto e orientar a seleção de imagens. O que será produzido ou fornecido pela Kubo Web fica definido na proposta." },
    { question: "O site vai aparecer no Google?", answer: "O projeto pode ser entregue com uma base técnica adequada para indexação. Posicionamento em resultados de busca depende de concorrência, conteúdo, autoridade e estratégia contínua; não existe garantia de posição." },
    { question: "Consigo atualizar o site depois?", answer: "Sim. A forma de atualização depende da tecnologia escolhida. Alterações e novas páginas também podem ser feitas por meio de manutenção ou orçamento avulso." },
    { question: "A manutenção mensal é obrigatória?", answer: "Não. A manutenção é opcional e pode ser contratada quando o negócio precisar de atualizações, ajustes ou acompanhamento contínuo." },
  ],
  finalCta: {
    title: "Seu site precisa representar melhor a sua empresa?",
    description: "Conte como o negócio funciona e o que você quer melhorar. A Kubo Web avalia o escopo e organiza uma proposta adequada ao projeto.",
    whatsappHref: "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20quero%20criar%20um%20site%20institucional%20profissional.%20Pode%20me%20passar%20os%20pr%C3%B3ximos%20passos%3F",
  },
};

const SitesInstitucionais = () => <ServicePageTemplate content={content} />;

export default SitesInstitucionais;
