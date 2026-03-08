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
  },
];
