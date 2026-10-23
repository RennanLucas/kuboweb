import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO from "@/components/SEO";

const screenshot = (url: string, width: number) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;

const cases = {
  "helena-avila": {
    number: "01",
    name: "Helena Ávila",
    category: "Psicoterapia · Site profissional",
    url: "https://www.helenaavilapsi.com.br/",
    domain: "helenaavilapsi.com.br",
    tone: "#dce6df",
    ink: "#25322b",
    objective: "Criar uma presença digital acolhedora, clara e profissional para apresentar o trabalho de psicoterapia e facilitar o contato.",
    direction: "Uma interface serena, com leitura confortável, hierarquia simples e uma direção visual compatível com o contexto de cuidado.",
    highlights: ["Estrutura responsiva", "Apresentação de serviços", "Contato direto", "SEO técnico e publicação"],
  },
  "cristiano-avila": {
    number: "02",
    name: "Cristiano Ávila",
    category: "Profissional · Site responsivo",
    url: "https://cristiano-avila-site.vercel.app/",
    domain: "cristiano-avila-site.vercel.app",
    tone: "#dbe7ff",
    ink: "#07101f",
    objective: "Organizar uma apresentação profissional direta, moderna e fácil de navegar em diferentes tamanhos de tela.",
    direction: "Contraste mais técnico, blocos objetivos e uma composição que prioriza entendimento rápido e presença profissional.",
    highlights: ["Direção visual", "Desktop + mobile", "Navegação objetiva", "Deploy e revisão final"],
  },
} as const;

const CaseStudy = () => {
  const { slug } = useParams();
  const item = slug ? cases[slug as keyof typeof cases] : undefined;
  if (!item) return <Navigate to="/portfolio" replace />;

  return (
    <main className="min-h-screen bg-[#f3f4f6] text-[#07101f]">
      <SEO title={`${item.name} | Case Kubo Web`} description={`Case real da Kubo Web: ${item.name}. Conheça a direção, a experiência responsiva e abra o projeto publicado.`} path={`/portfolio/${slug}`} />
      <Header />

      <section className="relative overflow-hidden bg-[#050a13] px-4 pb-24 pt-36 text-white md:pb-36 md:pt-44">
        <div className="pointer-events-none absolute left-[8%] top-[-25%] h-[700px] w-[700px] rounded-full bg-[#326cff]/20 blur-[190px]" />
        <div className="container relative mx-auto max-w-[1380px]">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-xs font-semibold text-white/[0.46] transition-colors hover:text-white"><ArrowLeft className="h-4 w-4" /> Voltar ao portfólio</Link>
          <div className="mt-14 grid gap-12 xl:grid-cols-[.82fr_1.18fr] xl:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8db6ff]">Case {item.number} · Live project</p>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mt-6 text-[4rem] font-heading font-semibold leading-[.86] tracking-[-0.075em] sm:text-7xl md:text-[7.5rem]">{item.name}</motion.h1>
              <p className="mt-7 max-w-[590px] text-base leading-8 text-white/[0.46] md:text-lg">{item.category}. Um projeto real que pode ser aberto, navegado e conferido.</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex h-[54px] items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#07101f] transition-transform hover:-translate-y-0.5">Abrir site publicado <ArrowUpRight className="h-4 w-4" /></a>
            </div>
            <div className="relative overflow-hidden rounded-[34px] border border-white/[0.1] bg-white/[0.05] p-3 shadow-[0_45px_130px_rgba(0,0,0,.42)] md:p-5">
              <div className="mb-3 flex items-center justify-between px-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/[0.3]"><span>{item.domain}</span><ExternalLink className="h-3.5 w-3.5" /></div>
              <div className="aspect-[16/10] overflow-hidden rounded-[24px] bg-white"><img src={screenshot(item.url, 1600)} alt={`Site publicado de ${item.name}`} className="h-full w-full object-cover object-top" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:py-36">
        <div className="container mx-auto max-w-[1380px]">
          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#2458d8]">Context / Direction</p><h2 className="mt-5 text-5xl font-heading font-semibold leading-[.92] tracking-[-0.06em] md:text-7xl">Do objetivo até a tela publicada.</h2></div>
            <div className="grid gap-px overflow-hidden rounded-[32px] border border-black/[0.07] bg-black/[0.07] md:grid-cols-2">
              <div className="bg-white p-7 md:p-9"><p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/[0.3]">Objetivo</p><p className="mt-7 text-xl font-medium leading-8 tracking-[-0.025em]">{item.objective}</p></div>
              <div className="bg-[#07101f] p-7 text-white md:p-9"><p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/[0.3]">Direção</p><p className="mt-7 text-xl font-medium leading-8 tracking-[-0.025em] text-white/[0.78]">{item.direction}</p></div>
            </div>
          </div>

          <div className="mt-20 grid gap-7 lg:grid-cols-[1.18fr_.82fr]">
            <div className="overflow-hidden rounded-[36px] border border-black/[0.07] bg-white p-3 shadow-[0_30px_90px_rgba(8,17,31,.08)] md:p-5"><div className="aspect-[16/10] overflow-hidden rounded-[26px] bg-[#e8eaed]"><img src={screenshot(item.url, 1600)} alt={`${item.name} em desktop`} className="h-full w-full object-cover object-top" /></div></div>
            <div className="grid gap-7">
              <div className="rounded-[36px] p-8 md:p-10" style={{ backgroundColor: item.tone, color: item.ink }}><p className="text-[9px] font-semibold uppercase tracking-[0.2em] opacity-40">Entregue no projeto</p><div className="mt-8 space-y-4">{item.highlights.map((x) => <div key={x} className="flex items-center gap-3 border-b border-current/10 pb-4 text-sm font-semibold"><Check className="h-4 w-4 opacity-55" />{x}</div>)}</div></div>
              <div className="mx-auto w-[56%] min-w-[220px] overflow-hidden rounded-[38px] border-[8px] border-[#07101f] bg-white shadow-[0_30px_80px_rgba(8,17,31,.18)]"><div className="aspect-[9/18] overflow-hidden"><img src={screenshot(item.url, 520)} alt={`${item.name} em mobile`} className="h-full w-full object-cover object-top" /></div></div>
            </div>
          </div>
        </div>
      </section>

      <CTASection /><Footer /><FloatingWhatsApp />
    </main>
  );
};

export default CaseStudy;
