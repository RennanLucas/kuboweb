import { Navigate, useParams } from "react-router-dom";
import CasePresentation from "@/components/CasePresentation";
const cases = {
  "helena-avila": {
    number: "01",
    name: "Helena Ávila",
    category: "Psicoterapia · Site profissional",
    url: "https://www.helenaavilapsi.com.br/",
    domain: "helenaavilapsi.com.br",
    tone: "#dce6df",
    ink: "#25322b",
    objective:
      "Criar uma presença digital acolhedora, clara e profissional para apresentar o trabalho de psicoterapia e facilitar o contato.",
    direction:
      "Uma interface serena, com leitura confortável, hierarquia simples e uma direção visual compatível com o contexto de cuidado.",
    highlights: [
      "Estrutura responsiva",
      "Apresentação de serviços",
      "Contato direto",
      "SEO técnico e publicação",
    ],
  },
  "cristiano-avila": {
    number: "02",
    name: "Cristiano Ávila",
    category: "Profissional · Site responsivo",
    url: "https://cristiano-avila-site.vercel.app/",
    domain: "cristiano-avila-site.vercel.app",
    tone: "#dbe7ff",
    ink: "#07101f",
    objective:
      "Organizar uma apresentação profissional direta, moderna e fácil de navegar em diferentes tamanhos de tela.",
    direction:
      "Contraste mais técnico, blocos objetivos e uma composição que prioriza entendimento rápido e presença profissional.",
    highlights: [
      "Direção visual",
      "Desktop + mobile",
      "Navegação objetiva",
      "Deploy e revisão final",
    ],
  },
} as const;

const CaseStudy = () => {
  const { slug } = useParams();
  const item = slug ? cases[slug as keyof typeof cases] : undefined;
  if (!item || !slug) return <Navigate to="/portfolio" replace />;
  const nextSlug = slug === "helena-avila" ? "cristiano-avila" : "helena-avila";
  return (
    <CasePresentation
      item={item}
      slug={slug}
      next={{ name: cases[nextSlug].name, slug: nextSlug }}
    />
  );
};
export default CaseStudy;
