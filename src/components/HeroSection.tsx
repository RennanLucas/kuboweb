import { memo } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20quero%20iniciar%20um%20projeto.";

const capabilities = [
  "Web Design",
  "Desenvolvimento",
  "Landing Pages",
  "E-commerce",
  "Google Ads",
  "Estratégia Digital",
];

const proofPoints = [
  { label: "Projetos", value: "Publicados e verificáveis" },
  { label: "Experiência", value: "Responsiva por padrão" },
  { label: "Contato", value: "Direto pelo WhatsApp" },
];

const workflow = [
  { icon: Layers3, title: "Direção visual", copy: "Posicionamento, hierarquia e sistema visual." },
  { icon: Smartphone, title: "Mobile review", copy: "Decisões pensadas para a tela que mais converte." },
  { icon: Code2, title: "Development", copy: "Implementação enxuta, responsiva e pronta para publicar." },
];

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#050a13] px-4 pb-0 pt-28 text-white md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-320px] h-[760px] w-[980px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />
        <div className="absolute right-[-260px] top-[18%] hidden h-[620px] w-[620px] rounded-full bg-cyan-400/8 blur-[190px] md:block" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#79a9ff] shadow-[0_0_18px_rgba(121,169,255,.8)]" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/50 sm:text-[10px] sm:tracking-[0.26em]">
              Kubo Web · Digital Studio · Brasil
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.03, duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-[1180px] text-[2.8rem] font-heading font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-[5.7rem] md:leading-[0.9] lg:text-[6.8rem] xl:text-[7.35rem]"
          >
            Sites que fazem sua marca
            <span className="block text-[#79a9ff]">parecer maior.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.48 }}
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-white/52 md:mt-7 md:text-lg md:leading-8"
          >
            Estratégia, direção de arte e desenvolvimento para negócios que querem uma presença digital mais clara, profissional e atual.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.48 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:mt-9"
          >
            <Button
              asChild
              size="xl"
              className="rounded-full bg-white px-7 text-[#050a13] shadow-[0_20px_60px_rgba(0,0,0,.3)] hover:bg-white/90"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Iniciar um projeto
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="rounded-full border-white/16 bg-white/[0.035] px-7 text-white hover:border-white/35 hover:bg-white/[0.08] hover:text-white"
            >
              <Link to="/portfolio">
                Explorar trabalhos
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.24, duration: 0.5 }}
            className="mx-auto mt-10 grid max-w-3xl gap-3 border-t border-white/10 pt-6 sm:grid-cols-3 sm:gap-0 md:mt-12"
          >
            {proofPoints.map((item, index) => (
              <div
                key={item.label}
                className={`px-3 py-2 ${index > 0 ? "sm:border-l sm:border-white/10" : ""}`}
              >
                <dt className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/28">{item.label}</dt>
                <dd className="mt-1.5 text-xs font-medium text-white/72 sm:text-sm">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-12 max-w-7xl md:mt-18"
        >
          <div className="absolute -inset-12 -z-10 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="overflow-hidden rounded-t-[28px] border border-b-0 border-white/11 bg-[#0a1220]/96 shadow-[0_35px_100px_rgba(0,0,0,.42)] backdrop-blur-2xl md:rounded-t-[34px]">
            <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3.5 sm:px-5 md:px-7 md:py-4">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/12 md:h-2.5 md:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-white/12 md:h-2.5 md:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-white/12 md:h-2.5 md:w-2.5" />
              </div>
              <span className="ml-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/32">Studio board</span>
              <span className="ml-auto hidden text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25 sm:block">
                Design / Build / Launch
              </span>
            </div>

            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="border-b border-white/8 p-5 sm:p-6 md:p-8 lg:border-b-0 lg:border-r">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/28">Como trabalhamos</p>
                    <h2 className="mt-2 text-2xl font-heading font-semibold tracking-[-0.04em] md:text-3xl">Estrutura antes do efeito.</h2>
                  </div>
                  <span className="hidden rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/38 sm:inline-flex">
                    2026
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                  {workflow.map((item, index) => (
                    <div
                      key={item.title}
                      className={`rounded-2xl border p-4 ${index === 0 ? "border-[#79a9ff]/25 bg-[#79a9ff]/10" : "border-white/8 bg-white/[0.025]"}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${index === 0 ? "bg-[#79a9ff] text-[#061020]" : "bg-white/[0.05] text-white/45"}`}>
                          <item.icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-xs font-medium text-white/78">{item.title}</p>
                          <p className="mt-1 text-[10px] leading-4 text-white/34">{item.copy}</p>
                        </div>
                        {index === 0 && <CheckCircle2 className="ml-auto hidden h-4 w-4 text-[#9cc2ff] lg:block" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden bg-[#0d1727] p-5 sm:p-6 md:p-8">
                <div className="absolute right-[-18%] top-[-28%] h-[390px] w-[390px] rounded-full bg-blue-500/20 blur-[120px]" />
                <div className="absolute bottom-[-35%] left-[-15%] h-[330px] w-[330px] rounded-full bg-cyan-300/8 blur-[110px]" />

                <div className="relative z-10 rounded-[24px] border border-white/10 bg-white/[0.035] p-5 sm:p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-5">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/28">Projetos ao vivo</p>
                      <h3 className="mt-2 text-2xl font-heading font-semibold tracking-[-0.04em] md:text-3xl">Abra e confira o trabalho real.</h3>
                    </div>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white/62 transition-colors hover:text-white"
                    >
                      Ver portfólio
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <a
                      href="https://www.helenaavilapsi.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl border border-white/10 bg-[#f0ebe5] p-5 text-[#1d242c] transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">Psicoterapia · Website</span>
                        <ArrowUpRight className="h-4 w-4 text-black/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <p className="mt-8 font-serif text-2xl font-semibold leading-tight tracking-[-0.035em]">Helena Ávila</p>
                      <p className="mt-2 text-xs leading-5 text-black/48">Site publicado para presença profissional, conteúdo e contato.</p>
                      <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40">helenaavilapsi.com.br</p>
                    </a>

                    <a
                      href="https://cristiano-avila-site.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl border border-white/10 bg-[#132138] p-5 text-white transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">Professional · Website</span>
                        <ArrowUpRight className="h-4 w-4 text-white/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <p className="mt-8 text-2xl font-heading font-semibold leading-tight tracking-[-0.035em]">Cristiano Ávila</p>
                      <p className="mt-2 text-xs leading-5 text-white/48">Estrutura direta para apresentar serviços e conduzir ao contato.</p>
                      <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">cristiano-avila-site.vercel.app</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative -mx-4 border-y border-white/9 bg-white/[0.018]">
        <div className="mx-auto flex max-w-[1600px] items-center overflow-hidden py-4">
          <div className="flex min-w-max items-center gap-5 px-5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/34 md:gap-8 md:text-[11px] md:tracking-[0.24em]">
            {[...capabilities, ...capabilities].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-5 md:gap-8">
                {item}
                <span className="h-1 w-1 rounded-full bg-[#79a9ff]/80" />
              </span>
            ))}
            <span className="flex items-center gap-2 text-white/60">
              Built for ambitious brands
              <ArrowDownRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
