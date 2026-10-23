import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Helena Ávila Psicoterapeuta",
    category: "Brand presence · Website",
    description:
      "Uma presença digital mais calma, humana e profissional para transformar a primeira visita em confiança e contato.",
    url: "https://www.helenaavilapsi.com.br/",
    domain: "helenaavilapsi.com.br",
    accent: "bg-[#dfe8e1]",
    panel: "bg-[#f5f1eb]",
  },
  {
    number: "02",
    title: "Cristiano Ávila",
    category: "Professional website · UX",
    description:
      "Estrutura direta para serviços profissionais, com leitura rápida, experiência responsiva e caminho claro até o contato.",
    url: "https://cristiano-avila-site.vercel.app/",
    domain: "cristiano-avila-site.vercel.app",
    accent: "bg-[#dbe5f5]",
    panel: "bg-[#eef3fb]",
  },
];

const BrowserMockup = ({ project, index }: { project: (typeof projects)[number]; index: number }) => (
  <div className={`relative min-h-[410px] overflow-hidden rounded-[28px] ${project.panel} p-3 shadow-[0_30px_80px_rgba(15,23,42,.10)] md:min-h-[520px] md:p-4`}>
    <div className="h-full min-h-[386px] overflow-hidden rounded-[22px] border border-black/8 bg-white shadow-[0_22px_55px_rgba(15,23,42,.08)] md:min-h-[488px]">
      <div className="flex h-11 items-center gap-2 border-b border-black/8 bg-white px-4">
        <span className="h-2 w-2 rounded-full bg-black/12" />
        <span className="h-2 w-2 rounded-full bg-black/12" />
        <span className="h-2 w-2 rounded-full bg-black/12" />
        <div className="mx-auto max-w-[240px] flex-1 rounded-full bg-black/[0.035] px-4 py-1.5 text-center text-[9px] text-black/35">
          {project.domain}
        </div>
      </div>

      {index === 0 ? (
        <div className="grid min-h-[340px] grid-cols-[1.08fr_0.92fr] md:min-h-[445px]">
          <div className="flex flex-col justify-between p-6 md:p-10">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#77716c]">Psicoterapia · Santos/SP</span>
              <h3 className="mt-5 max-w-[310px] font-serif text-4xl leading-[0.98] tracking-[-0.04em] text-[#1d242c] md:text-[3.5rem]">
                Um espaço para se sentir acolhido.
              </h3>
              <p className="mt-5 max-w-[290px] text-xs leading-6 text-black/48 md:text-sm">
                Psicoterapia com escuta, presença e cuidado para quem busca compreender melhor sua história.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#1f2b25] px-4 py-2 text-[10px] font-semibold text-white">Agendar conversa</span>
              <span className="rounded-full border border-black/10 px-4 py-2 text-[10px] font-semibold text-black/55">Conhecer abordagem</span>
            </div>
          </div>
          <div className={`relative overflow-hidden ${project.accent}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_22%,rgba(255,255,255,.9),transparent_24%)]" />
            <div className="absolute -bottom-20 left-1/2 h-[390px] w-[260px] -translate-x-1/2 rounded-t-[140px] bg-[#f2e8df] shadow-[0_25px_70px_rgba(47,67,57,.18)]" />
            <div className="absolute left-1/2 top-[24%] h-24 w-24 -translate-x-1/2 rounded-full bg-[#bd886c] shadow-[0_0_0_18px_rgba(255,255,255,.22)]" />
          </div>
        </div>
      ) : (
        <div className="relative min-h-[340px] overflow-hidden bg-[#0e1828] p-6 text-white md:min-h-[445px] md:p-10">
          <div className="absolute right-[-10%] top-[-15%] h-[340px] w-[340px] rounded-full bg-blue-500/25 blur-[90px]" />
          <div className="absolute bottom-[-20%] left-[-8%] h-[300px] w-[300px] rounded-full bg-cyan-300/10 blur-[90px]" />
          <div className="relative z-10 flex h-full min-h-[292px] flex-col justify-between md:min-h-[365px]">
            <div>
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/42">Estratégia · Posicionamento · Web</span>
              <h3 className="mt-5 max-w-[410px] text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.045em] md:text-[3.8rem]">
                Presença profissional sem complicar a mensagem.
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 md:max-w-[380px]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-md">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">Experiência</p>
                <p className="mt-3 text-sm font-medium text-white/80">Responsiva e direta</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-md">
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">Objetivo</p>
                <p className="mt-3 text-sm font-medium text-white/80">Gerar confiança</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

const RealWorkSection = () => (
  <section className="relative overflow-hidden bg-[#f4f5f7] px-4 py-24 md:py-36">
    <div className="container mx-auto max-w-7xl">
      <div className="mb-16 grid gap-8 md:mb-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Selected work</span>
          </div>
          <h2 className="max-w-4xl text-[3rem] font-heading font-semibold leading-[0.94] tracking-[-0.055em] text-foreground sm:text-6xl md:text-7xl">
            Trabalho que parece
            <span className="block text-primary">marca grande.</span>
          </h2>
        </div>
        <div className="lg:justify-self-end lg:max-w-[420px]">
          <p className="text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            A gente não vende só “um site bonito”. A entrega combina posicionamento, hierarquia, experiência e desenvolvimento para elevar a percepção do negócio.
          </p>
          <Link to="/portfolio" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
            Explorar portfólio
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="space-y-20 md:space-y-28">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group block"
          >
            <div className={`grid gap-7 lg:grid-cols-[0.38fr_1.62fr] lg:gap-12 ${index % 2 === 1 ? "lg:grid-cols-[1.62fr_0.38fr]" : ""}`}>
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""} flex flex-col justify-between py-2`}>
                <div>
                  <div className="flex items-center justify-between border-t border-foreground/15 pt-4">
                    <span className="text-xs font-semibold text-muted-foreground">{project.number}</span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">{project.category}</p>
                  <h3 className="mt-4 text-3xl font-heading font-semibold leading-tight tracking-[-0.04em] text-foreground md:text-4xl">{project.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">{project.description}</p>
                </div>
                <p className="mt-8 text-xs text-muted-foreground">Abrir projeto ↗</p>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""} transition-transform duration-500 group-hover:-translate-y-1`}>
                <BrowserMockup project={project} index={index} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default memo(RealWorkSection);
