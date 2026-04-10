import imgAdvocacia from "@/assets/portfolio/advocacia.jpg";
import imgClinica from "@/assets/portfolio/clinica.jpg";
import imgModa from "@/assets/portfolio/moda.jpg";
import imgFinanceira from "@/assets/portfolio/financeira.jpg";
import imgConstrutora from "@/assets/portfolio/construtora.jpg";
import imgCurso from "@/assets/portfolio/curso.jpg";
import imgRestaurante from "@/assets/portfolio/restaurante.jpg";
import imgImobiliaria from "@/assets/portfolio/imobiliaria.jpg";
import imgAcademia from "@/assets/portfolio/academia.jpg";
import imgPetshop from "@/assets/portfolio/petshop.jpg";

export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  result: string;
  details?: {
    challenge: string;
    solution: string;
    features: string[];
    testimonial?: { text: string; author: string; role: string };
  };
}

export const projects: Project[] = [
  {
    slug: "escritorio-advocacia",
    title: "Escritório de Advocacia — São Paulo",
    category: "Site Institucional",
    image: imgAdvocacia,
    description:
      "Desenvolvemos um site institucional completo para o escritório, com páginas dedicadas a cada área de atuação, perfis detalhados da equipe jurídica, blog com artigos especializados e formulário de contato integrado ao WhatsApp para captação direta de leads.",
    tags: ["Responsivo", "SEO Otimizado", "Blog", "WhatsApp"],
    result: "+180% de contatos orgânicos em 3 meses",
    details: {
      challenge:
        "O escritório dependia exclusivamente de indicações presenciais e não possuía presença digital. A concorrência local já ocupava as primeiras posições no Google, dificultando a captação de novos clientes.",
      solution:
        "Criamos um site institucional com arquitetura de conteúdo voltada para SEO jurídico, páginas otimizadas para cada área de atuação e um blog com publicações estratégicas. O formulário de contato integrado ao WhatsApp reduziu o tempo de resposta ao potencial cliente.",
      features: [
        "Páginas dedicadas por área de atuação (trabalhista, cível, empresarial)",
        "Blog jurídico com artigos otimizados para SEO",
        "Perfis detalhados de cada advogado da equipe",
        "Formulário de contato integrado ao WhatsApp Business",
        "Design responsivo e acessível em todos os dispositivos",
        "Certificado SSL e conformidade com LGPD",
      ],
      testimonial: {
        text: "Antes do site, nosso escritório recebia em média 5 contatos por mês via internet. Hoje são mais de 30, e a qualidade dos leads melhorou significativamente.",
        author: "Sócio-fundador",
        role: "Escritório de Advocacia, São Paulo",
      },
    },
  },
  {
    slug: "clinica-odontologica",
    title: "Clínica Odontológica — SP",
    category: "Site Institucional",
    image: imgClinica,
    description:
      "Criamos uma presença digital estratégica para a clínica, incluindo galeria de casos clínicos, perfis profissionais da equipe, sistema de agendamento online e integração com Google Maps — facilitando a jornada do paciente do primeiro acesso à consulta.",
    tags: ["Agendamento Online", "Galeria", "Google Maps"],
    result: "+95 agendamentos/mês via site",
    details: {
      challenge:
        "A clínica dependia exclusivamente de indicações boca a boca e não tinha presença digital. Os pacientes não conseguiam encontrar informações sobre tratamentos, equipe ou agendar consultas online.",
      solution:
        "Desenvolvemos um site institucional com foco em credibilidade médica, incluindo galeria de casos clínicos com antes/depois, perfis detalhados de cada profissional, sistema de agendamento integrado e otimização para buscas locais no Google.",
      features: [
        "Galeria de casos clínicos com antes e depois",
        "Perfis profissionais detalhados da equipe",
        "Sistema de agendamento online integrado",
        "Integração com Google Maps e Google Meu Negócio",
        "Design responsivo otimizado para mobile",
        "SEO local para aparecer nas buscas da região",
      ],
      testimonial: {
        text: "Em 3 meses, minha agenda lotou. O site transmite a credibilidade que eu precisava para atrair pacientes novos.",
        author: "Diretora clínica",
        role: "Clínica Odontológica, São Paulo",
      },
    },
  },
  {
    slug: "loja-moda-feminina",
    title: "Loja de Moda Feminina — E-commerce",
    category: "E-commerce",
    image: imgModa,
    description:
      "Estruturamos uma operação de e-commerce robusta com catálogo de mais de 500 produtos, filtros inteligentes por categoria, carrinho otimizado para conversão, checkout com Pix e cartão, além de painel administrativo completo para gestão autônoma da loja.",
    tags: ["E-commerce", "Pix", "Painel Admin", "Catálogo"],
    result: "R$ 47 mil em vendas no primeiro mês",
    details: {
      challenge:
        "A marca vendia apenas pelo Instagram e WhatsApp, perdendo vendas pela falta de catálogo organizado, checkout profissional e gestão de estoque. O processo manual limitava o crescimento.",
      solution:
        "Criamos uma loja virtual completa com catálogo de 500+ produtos, filtros inteligentes, checkout integrado com Pix e cartão de crédito, e um painel administrativo para a dona gerenciar tudo sozinha — estoque, pedidos, promoções e relatórios.",
      features: [
        "Catálogo com 500+ produtos e filtros por categoria",
        "Checkout otimizado com Pix e cartão de crédito",
        "Painel administrativo completo para gestão autônoma",
        "Carrinho inteligente com recuperação de abandono",
        "Design responsivo com foco em conversão mobile",
        "Integração com transportadoras para cálculo de frete",
      ],
      testimonial: {
        text: "A loja virtual profissional fez toda a diferença. Os clientes confiam mais e compram sem medo. Faturamos R$ 47 mil no primeiro mês.",
        author: "Fundadora",
        role: "Loja de Moda Feminina",
      },
    },
  },
  {
    slug: "consultoria-financeira",
    title: "Consultoria Financeira — Landing Page",
    category: "Landing Page",
    image: imgFinanceira,
    description:
      "Projetamos uma landing page focada em conversão para a consultoria, com calculadora de investimentos interativa, depoimentos em vídeo de clientes reais e fluxo de agendamento direto — reduzindo etapas entre o interesse e o contato comercial.",
    tags: ["Alta Conversão", "Calculadora", "Vídeo"],
    result: "Taxa de conversão de 12,3%",
    details: {
      challenge:
        "A consultoria financeira tinha dificuldade em converter visitantes em leads. O site antigo era genérico, sem elementos de prova social e sem um funil claro de conversão.",
      solution:
        "Desenvolvemos uma landing page estratégica com calculadora de investimentos interativa que engaja o visitante, depoimentos em vídeo para gerar confiança e um fluxo de agendamento direto que elimina etapas desnecessárias.",
      features: [
        "Calculadora de investimentos interativa",
        "Depoimentos em vídeo de clientes reais",
        "Fluxo de agendamento direto sem fricção",
        "Design premium que transmite confiança",
        "Otimização A/B para máxima conversão",
        "Integração com CRM para gestão de leads",
      ],
      testimonial: {
        text: "A landing page com calculadora de investimentos foi um diferencial. Os clientes já chegam prontos para contratar.",
        author: "CEO",
        role: "Consultoria Financeira",
      },
    },
  },
  {
    slug: "construtora-engenharia",
    title: "Construtora & Engenharia — SP",
    category: "Site Institucional",
    image: imgConstrutora,
    description:
      "Entregamos um site institucional que reflete a solidez da marca, com portfólio de obras em galeria interativa, linha do tempo corporativa, seção de certificações e formulário de solicitação de orçamento — conectando a empresa a novos projetos de forma contínua.",
    tags: ["Portfólio", "Galeria", "Orçamento Online"],
    result: "+60% de solicitações de orçamento",
    details: {
      challenge:
        "A construtora não tinha presença digital e perdia licitações e projetos para concorrentes que apareciam no Google. A credibilidade da empresa não era refletida online.",
      solution:
        "Criamos um site institucional robusto com galeria interativa de obras, linha do tempo corporativa mostrando a trajetória da empresa, seção de certificações e um formulário inteligente de solicitação de orçamento.",
      features: [
        "Galeria interativa de obras realizadas",
        "Linha do tempo corporativa com marcos da empresa",
        "Seção de certificações e prêmios",
        "Formulário de solicitação de orçamento integrado",
        "Portfólio categorizado por tipo de obra",
        "Otimização SEO para buscas regionais",
      ],
      testimonial: {
        text: "O site trouxe uma visibilidade que não tínhamos. Recebemos 60% mais pedidos de orçamento e fechamos projetos maiores.",
        author: "Diretor",
        role: "Construtora & Engenharia, São Paulo",
      },
    },
  },
  {
    slug: "curso-online-tecnologia",
    title: "Curso Online de Tecnologia — Infoproduto",
    category: "Landing Page",
    image: imgCurso,
    description:
      "Desenvolvemos uma página de vendas de alto desempenho para o lançamento do curso, com vídeo de apresentação, grade curricular detalhada, prova social com depoimentos de alunos e checkout integrado — tudo pensado para maximizar matrículas desde o primeiro dia.",
    tags: ["Vendas", "Vídeo", "Checkout", "Depoimentos"],
    result: "+320 matrículas na primeira semana",
    details: {
      challenge:
        "O curso de IA estava sendo lançado do zero, sem audiência prévia e sem página de vendas. A divulgação era feita apenas nas redes sociais, com baixa taxa de conversão.",
      solution:
        "Criamos uma página de vendas de alta performance com vídeo de apresentação, grade curricular detalhada, depoimentos de alunos beta-testers, contador de urgência e checkout integrado sem redirecionamento.",
      features: [
        "Vídeo de apresentação do curso na hero",
        "Grade curricular detalhada e interativa",
        "Depoimentos de alunos com fotos e resultados",
        "Checkout integrado sem redirecionamento externo",
        "Contador de urgência para criar escassez",
        "Garantia de 7 dias com destaque visual",
      ],
      testimonial: {
        text: "A página de vendas converteu muito acima da média. Foram 320 matrículas na primeira semana. O checkout integrado eliminou toda a fricção.",
        author: "Fundador",
        role: "Curso Online de Tecnologia",
      },
    },
  },
  {
    slug: "restaurante-gastronomia",
    title: "Restaurante Gastronômico — RJ",
    category: "Site Institucional",
    image: imgRestaurante,
    description:
      "Criamos um site elegante para o restaurante com cardápio digital interativo, sistema de reservas online, galeria de pratos com fotografia profissional e integração com Google Maps e avaliações — elevando a experiência digital à altura da gastronomia.",
    tags: ["Cardápio Digital", "Reservas Online", "Galeria", "Responsivo"],
    result: "+140% de reservas online em 2 meses",
    details: {
      challenge:
        "O restaurante dependia exclusivamente de ligações telefônicas para reservas e não tinha presença digital além das redes sociais. Perdia clientes que buscavam opções no Google.",
      solution:
        "Desenvolvemos um site institucional premium com cardápio digital categorizado, sistema de reservas integrado, galeria de pratos com fotos profissionais e otimização para buscas locais.",
      features: [
        "Cardápio digital interativo com categorias e preços",
        "Sistema de reservas online com confirmação automática",
        "Galeria de pratos com fotografia profissional",
        "Integração com Google Maps e Google Meu Negócio",
        "Design responsivo com foco em experiência mobile",
        "SEO local para aparecer nas buscas da região",
      ],
      testimonial: {
        text: "As reservas online triplicaram e os clientes elogiam o cardápio digital. O site elevou a percepção da marca.",
        author: "Chef proprietário",
        role: "Restaurante Gastronômico, Rio de Janeiro",
      },
    },
  },
  {
    slug: "imobiliaria-premium",
    title: "Imobiliária Premium — SP",
    category: "Site Institucional",
    image: imgImobiliaria,
    description:
      "Desenvolvemos uma plataforma imobiliária completa com busca avançada por filtros, páginas detalhadas para cada imóvel com tour virtual, calculadora de financiamento e integração com CRM para gestão de leads qualificados.",
    tags: ["Busca Avançada", "Tour Virtual", "CRM", "Financiamento"],
    result: "+85 leads qualificados/mês",
    details: {
      challenge:
        "A imobiliária utilizava apenas portais terceiros para anunciar imóveis, pagando comissões altas e sem construir marca própria. Não tinha um canal digital independente para captar clientes.",
      solution:
        "Criamos um site próprio com sistema de busca avançada, páginas individuais para cada imóvel com galeria e tour virtual, calculadora de financiamento e integração com CRM para acompanhamento de leads.",
      features: [
        "Busca avançada com filtros por localização, preço e tipo",
        "Páginas individuais com galeria e tour virtual",
        "Calculadora de financiamento integrada",
        "Integração com CRM para gestão de leads",
        "Design premium que transmite confiança",
        "Painel administrativo para gestão de imóveis",
      ],
      testimonial: {
        text: "Saímos da dependência dos portais e hoje geramos nossos próprios leads. O site profissional fez toda a diferença na captação.",
        author: "Diretor comercial",
        role: "Imobiliária Premium, São Paulo",
      },
    },
  },
  {
    slug: "academia-fitness",
    title: "Academia & Fitness — Landing Page",
    category: "Landing Page",
    image: imgAcademia,
    description:
      "Projetamos uma landing page de alta conversão para captação de novos alunos, com planos de matrícula interativos, grade de horários das aulas, depoimentos de alunos e formulário de agendamento de aula experimental gratuita.",
    tags: ["Alta Conversão", "Planos", "Agendamento", "Depoimentos"],
    result: "+210 matrículas em 45 dias",
    details: {
      challenge:
        "A academia enfrentava alta concorrência na região e dependia de panfletagem e indicações para captar novos alunos. Não tinha presença digital efetiva.",
      solution:
        "Desenvolvemos uma landing page focada em conversão com planos de matrícula comparativos, grade de horários interativa, depoimentos reais de alunos e um formulário de agendamento de aula experimental.",
      features: [
        "Planos de matrícula com comparação interativa",
        "Grade de horários das aulas por modalidade",
        "Depoimentos de alunos com fotos e resultados",
        "Formulário de aula experimental gratuita",
        "Contador de vagas para criar urgência",
        "Design energético e motivacional",
      ],
      testimonial: {
        text: "A landing page foi um divisor de águas. Em 45 dias, conseguimos 210 novas matrículas. O formulário de aula grátis converte muito.",
        author: "Proprietário",
        role: "Academia & Fitness",
      },
    },
  },
  {
    slug: "petshop-ecommerce",
    title: "Pet Shop Online — E-commerce",
    category: "E-commerce",
    image: imgPetshop,
    description:
      "Estruturamos uma loja virtual completa para o pet shop com catálogo de produtos por categoria e animal, sistema de assinatura mensal para ração, checkout otimizado e painel administrativo para gestão autônoma de estoque e pedidos.",
    tags: ["E-commerce", "Assinatura", "Catálogo", "Pix"],
    result: "R$ 63 mil em vendas no 2º mês",
    details: {
      challenge:
        "O pet shop tinha apenas loja física e perdia vendas para concorrentes online. Clientes pediam opção de compra pela internet e entrega, mas não havia canal digital.",
      solution:
        "Criamos um e-commerce completo com catálogo categorizado por tipo de animal, sistema de assinatura mensal para ração e produtos recorrentes, checkout com Pix e cartão, e painel para gestão autônoma.",
      features: [
        "Catálogo categorizado por tipo de animal e produto",
        "Sistema de assinatura mensal para ração e acessórios",
        "Checkout otimizado com Pix e cartão de crédito",
        "Painel administrativo para gestão de estoque",
        "Carrinho inteligente com sugestões de produtos",
        "Integração com transportadoras para cálculo de frete",
      ],
      testimonial: {
        text: "A loja online abriu um canal de vendas que não existia. O sistema de assinatura fidelizou clientes e já faturamos R$ 63 mil no segundo mês.",
        author: "Fundadora",
        role: "Pet Shop Online",
      },
    },
  },
];
