import imgAdvocacia from "@/assets/portfolio/advocacia.jpg";
import imgClinica from "@/assets/portfolio/clinica.jpg";
import imgModa from "@/assets/portfolio/moda.jpg";
import imgFinanceira from "@/assets/portfolio/financeira.jpg";
import imgConstrutora from "@/assets/portfolio/construtora.jpg";
import imgCurso from "@/assets/portfolio/curso.jpg";

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
    slug: "moreira-associados-advocacia",
    title: "Moreira & Associados Advocacia",
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
        author: "Dr. Ricardo Moreira",
        role: "Sócio-fundador, Moreira & Associados",
      },
    },
  },
  {
    slug: "clinica-sorriso-perfeito",
    title: "Clínica Sorriso Perfeito",
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
        author: "Dra. Carolina Mendes",
        role: "Diretora clínica, Sorriso Perfeito",
      },
    },
  },
  {
    slug: "stella-rose-moda-feminina",
    title: "Stella Rose — Moda Feminina",
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
        author: "Juliana Costa",
        role: "Fundadora, Stella Rose",
      },
    },
  },
  {
    slug: "vertex-capital-consultoria",
    title: "Vertex Capital — Consultoria",
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
        author: "Fernando Alves",
        role: "CEO, Vertex Capital",
      },
    },
  },
  {
    slug: "mrk-engenharia-construcoes",
    title: "MRK Engenharia & Construções",
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
        author: "Eng. Marcos Kikuchi",
        role: "Diretor, MRK Engenharia",
      },
    },
  },
  {
    slug: "academia-curso-ia",
    title: "AcademIA — Curso de IA",
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
        author: "Prof. André Lima",
        role: "Fundador, AcademIA",
      },
    },
  },
];
