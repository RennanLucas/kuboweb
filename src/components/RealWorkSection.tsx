import { memo } from "react";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Helena Ávila Psicoterapeuta",
    category: "Psicoterapia · Website",
    description:
      "Presença digital construída para transmitir acolhimento, profissionalismo e facilitar o caminho até o contato.",
    url: "https://www.helenaavilapsi.com.br/",
    domain: "helenaavilapsi.com.br",
    services: ["Direção visual", "Site responsivo", "Conteúdo e contato"],
  },
  {
    number: "02",
    title: "Cristiano Ávila",
    category: "Professional · Website",
    description:
      "Estrutura direta para apresentar serviços profissionais com leitura rápida, boa experiência mobile e contato sem fricção.",
    url: "https://cristiano-avila-site.vercel.app/",
    domain: "cristiano-avila-site.vercel.app",
    services: ["Arquitetura de conteúdo", "UX responsiva", "Publicação"],
  },
] as const;

const HelenaPreview = () => (
  <div className="relative min-h-[390px] overflow-hidden rounded-[28px] bg-[#e8e0d7] p-4 shadow-[0_35px_90px_rgba(15,23,42,.12)] sm:p-5 md:min-h-[500px] md:p-7">
    <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/75 blur-[90px]" />
    <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#c4d6cb] blur-[90px]" />

    <div className="relative h-full min-h-[350px] overflow-hidden rounded-[22px] border border-black/7 bg-[#f8f5f0] shadow-[0_20px_50px_rgba(39,45,42,.10)] md:min-h-[446px]">
      <div className="flex items-center gap-2 border-b border-black/7 px-4 py-3 sm:px-5">
        <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-black/10" /><span className="h-2 w-2 rounded-full bg-black/10" /><span className="h-2 w-2 rounded-full bg-black/10" /></div>
        <span className="mx-auto hidden rounded-full bg-black/[0.035] px-5 py-1.5 text-[8px] font-medium text-black/30 sm:block">helenaavilapsi.com.br</span>
        <span className="h-5 w-5 rounded-full bg-[#597367]/12" />
      </div>

      <div className="grid min-h-[306px] md:min-h-[398px] lg:grid-cols-[1.04fr_.96fr]">
        <div className="flex flex-col justify-between p-6 sm:p-7 md:p-9">
          <div>
            <div className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#597367]/58">
              <span className="h-px w-7 bg-[#597367]/45" /> Psicoterapia
            </div>
            <p className="mt-7 max-w-[420px] font-serif text-[2.35rem] leading-[.98] tracking-[-0.045em] text-[#2a302c] sm:text-5xl md:text-[3.55rem]">
              Presença digital com mais acolhimento e clareza.
            </p>
            <div className="mt-6 h-2.5 w-[78%] rounded-full bg-[#2a302c]/8" />
            <div className="mt-2.5 h-2.5 w-[56%] rounded-full bg-[#2a302c]/8" />
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="h-10 w-32 rounded-full bg-[#526c60]" />
            <div className="h-10 w-10 rounded-full border border-[#526c60]/18" />
          </div>
        </div>

        <div className="relative hidden overflow-hidden bg-[#d9d2c9] lg:block">
          <div className="absolute inset-x-[14%] bottom-[-8%] top-[10%] rounded-t-[120px] bg-[#c7d1c7]" />
          <div className="absolute left-[24%] top-[20%] h-[58%] w-[52%] rounded-[48%_48%_35%_35%] bg-[#9aa99e] shadow-[0_35px_70px_rgba(50,63,55,.18)]" />
          <div className="absolute left-[37%] top-[27%] h-24 w-24 rounded-full bg-[#e5d2c2]" />
          <div className="absolute bottom-[14%] left-[18%] right-[18%] h-20 rounded-[32px] bg-white/24 backdrop-blur-xl" />
        </div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.16, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="absolute bottom-4 right-4 hidden w-[160px] rounded-[24px] border border-white/50 bg-[#f8f5f0]/95 p-3 shadow-[0_22px_55px_rgba(42,48,44,.16)] backdrop-blur-xl sm:block md:bottom-6 md:right-6 md:w-[190px]"
    >
      <div className="mx-auto h-1.5 w-12 rounded-full bg-black/8" />
      <div className="mt-4 rounded-[16px] bg-[#e7dfd5] p-4">
        <div className="h-2 w-12 rounded-full bg-[#526c60]/22" />
        <div className="mt-3 h-4 w-[85%] rounded-md bg-[#2a302c]/80" />
        <div className="mt-2 h-4 w-[62%] rounded-md bg-[#2a302c]/80" />
        <div className="mt-4 h-8 w-20 rounded-full bg-[#526c60]" />
      </div>
    </motion.div>
  </div>
);

const CristianoPreview = () => (
  <div className="relative min-h-[390px] overflow-hidden rounded-[28px] bg-[#0f1c30] p-4 shadow-[0_35px_90px_rgba(15,23,42,.18)] sm:p-5 md:min-h-[500px] md:p-7">
    <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-blue-500/25 blur-[100px]" />
    <div className="pointer-events-none absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full bg-cyan-300/10 blur-[90px]" />

    <div className="relative h-full min-h-[350px] overflow-hidden rounded-[22px] border border-white/9 bg-[#0b1423] shadow-[0_24px_70px_rgba(0,0,0,.28)] md:min-h-[446px]">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3 sm:px-5">
        <div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-white/12" /><span className="h-2 w-2 rounded-full bg-white/12" /><span className="h-2 w-2 rounded-full bg-white/12" /></div>
        <span className="mx-auto hidden rounded-full bg-white/[0.04] px-5 py-1.5 text-[8px] font-medium text-white/28 sm:block">cristiano-avila-site.vercel.app</span>
        <span className="h-5 w-5 rounded-full bg-[#79a9ff]/15" />
      </div>

      <div className="grid min-h-[306px] md:min-h-[398px] lg:grid-cols-[1.15fr_.85fr]">
        <div className="flex flex-col justify-between p-6 sm:p-7 md:p-9">
          <div>
            <div className="flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8db6ff]/55">
              <span className="h-px w-7 bg-[#8db6ff]/45" /> Professional website
            </div>
            <p className="mt-7 max-w-[470px] text-[2.35rem] font-heading font-semibold leading-[.96] tracking-[-0.055em] text-white sm:text-5xl md:text-[3.7rem]">
              Uma mensagem profissional sem excesso de ruído.
            </p>
            <div className="mt-6 h-2.5 w-[76%] rounded-full bg-white/8" />
            <div className="mt-2.5 h-2.5 w-[52%] rounded-full bg-white/8" />
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="h-10 w-32 rounded-full bg-[#79a9ff]" />
            <div className="h-10 w-24 rounded-full border border-white/10" />
          </div>
        </div>

        <div className="relative hidden border-l border-white/7 bg-[#101d31] lg:block">
          <div className="absolute left-[15%] right-[15%] top-[13%] rounded-[28px] border border-white/9 bg-white/[0.035] p-5">
            <div className="flex items-center justify-between">
              <div className="h-8 w-8 rounded-xl bg-[#79a9ff]/15" />
              <div className="h-2 w-16 rounded-full bg-white/9" />
            </div>
            <div className="mt-8 h-3 w-20 rounded-full bg-[#79a9ff]/18" />
            <div className="mt-4 h-5 w-[88%] rounded-lg bg-white/80" />
            <div className="mt-2 h-5 w-[62%] rounded-lg bg-white/80" />
            <div className="mt-6 grid grid-cols-2 gap-2">
              <div className="h-20 rounded-2xl bg-white/[0.045]" />
              <div className="h-20 rounded-2xl bg-white/[0.045]" />
            </div>
          </div>
          <div className="absolute bottom-[10%] left-[28%] right-[8%] h-24 rounded-[26px] border border-[#79a9ff]/16 bg-[#79a9ff]/8 backdrop-blur-xl" />
        </div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.16, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="absolute bottom-4 right-4 hidden w-[160px] rounded-[24px] border border-white/10 bg-[#13233b]/94 p-3 shadow-[0_24px_60px_rgba(0,0,0,.32)] backdrop-blur-xl sm:block md:bottom-6 md:right-6 md:w-[190px]"
    >
      <div className="mx-auto h-1.5 w-12 rounded-full bg-white/8" />
      <div className="mt-4 rounded-[16px] bg-[#0c1727] p-4">
        <div className="h-2 w-14 rounded-full bg-[#79a9ff]/18" />
        <div className="mt-3 h-4 w-[88%] rounded-md bg-white/72" />
        <div className="mt-2 h-4 w-[58%] rounded-md bg-white/72" />
        <div className="mt-4 h-8 w-20 rounded-full bg-[#79a9ff]" />
      </div>
    </motion.div>
  </div>
);

const ProjectBoard = ({ index }: { index: number }) => (index === 0 ? <HelenaPreview /> : <CristianoPreview />);

const RealWorkSection = () => (
  <section className="relative overflow-hidden bg-[#f4f5f7] px-4 py-24 [content-visibility:auto] [contain-intrinsic-size:980px] md:py-36">
    <div className="container mx-auto max-w-7xl">
      <div className="mb-16 grid gap-8 md:mb-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Selected work</span>
          </div>
          <h2 className="max-w-4xl text-[2.75rem] font-heading font-semibold leading-[0.96] tracking-[-0.05em] text-foreground sm:text-6xl md:text-7xl">
            Trabalho real.
            <span className="block text-primary">Abra e confira.</span>
          </h2>
        </div>
        <div className="lg:justify-self-end lg:max-w-[430px]">
          <p className="text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            Dois projetos publicados, apresentados com previews editoriais para você entender a direção visual antes de abrir o site real.
          </p>
          <Link
            to="/portfolio"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
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
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group block"
          >
            <div
              className={`grid gap-7 lg:grid-cols-[0.4fr_1.6fr] lg:gap-12 ${
                index % 2 === 1 ? "lg:grid-cols-[1.6fr_0.4fr]" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""} flex flex-col justify-between py-2`}>
                <div>
                  <div className="flex items-center justify-between border-t border-foreground/15 pt-4">
                    <span className="text-xs font-semibold text-muted-foreground">{project.number}</span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">{project.category}</p>
                  <h3 className="mt-4 text-3xl font-heading font-semibold leading-tight tracking-[-0.04em] text-foreground md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">{project.description}</p>

                  <ul className="mt-6 space-y-2.5">
                    {project.services.map((service) => (
                      <li key={service} className="flex items-center gap-2 text-xs font-medium text-foreground/62">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-foreground/55">
                  Abrir projeto publicado
                  <ExternalLink className="h-3.5 w-3.5" />
                </div>
              </div>

              <motion.div
                className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                whileHover={{ y: -7, scale: 1.004 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectBoard index={index} />
              </motion.div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default memo(RealWorkSection);
