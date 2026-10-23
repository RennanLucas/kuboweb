import { memo, useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import LiveProjectFrame from "@/components/LiveProjectFrame";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20quero%20conversar%20sobre%20um%20projeto.";

const projects = [
  {
    id: "helena",
    title: "Helena Ávila",
    eyebrow: "Psicoterapia · projeto publicado",
    domain: "helenaavilapsi.com.br",
    url: "https://www.helenaavilapsi.com.br/",
    accent: "#b8c9be",
  },
  {
    id: "cristiano",
    title: "Cristiano Ávila",
    eyebrow: "Website profissional · projeto publicado",
    domain: "cristiano-avila-site.vercel.app",
    url: "https://cristiano-avila-site.vercel.app/",
    accent: "#78a7ff",
  },
] as const;

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 110, damping: 24 });
  const smy = useSpring(my, { stiffness: 110, damping: 24 });
  const rotateX = useTransform(smy, [-0.5, 0.5], [reduceMotion ? 0 : 2.2, reduceMotion ? 0 : -2.2]);
  const rotateY = useTransform(smx, [-0.5, 0.5], [reduceMotion ? 0 : -3.2, reduceMotion ? 0 : 3.2]);
  const phoneX = useTransform(smx, [-0.5, 0.5], [reduceMotion ? 0 : -10, reduceMotion ? 0 : 10]);
  const phoneY = useTransform(smy, [-0.5, 0.5], [reduceMotion ? 0 : -8, reduceMotion ? 0 : 8]);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % projects.length), 7600);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  const project = projects[active];
  const secondary = projects[(active + 1) % projects.length];

  return (
    <section className="relative isolate overflow-hidden bg-[#05080d] px-4 pb-20 pt-32 text-white md:pb-28 md:pt-40 lg:pb-36">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-470px] h-[900px] w-[1200px] -translate-x-1/2 rounded-full bg-[#315fff]/[0.18] blur-[200px]" />
        <div className="absolute right-[-14%] top-[28%] h-[560px] w-[560px] rounded-full bg-cyan-300/[0.07] blur-[170px]" />
        <div className="absolute inset-0 opacity-[0.075] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.14]" />
      </div>

      <div className="container mx-auto max-w-[1460px]">
        <div className="relative z-10 mx-auto max-w-[1120px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.1] bg-white/[0.035] px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/[0.48] backdrop-blur-xl"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#91b5ff]" />
            Digital studio · estratégia, design e código
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04, duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-7 max-w-[1180px] text-[3.9rem] font-heading font-semibold leading-[0.84] tracking-[-0.08em] sm:text-[5.6rem] md:text-[7.2rem] lg:text-[8.9rem] xl:text-[10rem]"
          >
            Design que muda
            <span className="block bg-gradient-to-r from-[#f8fbff] via-[#9fc1ff] to-[#78a7ff] bg-clip-text text-transparent">a percepção.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.55 }}
            className="mx-auto mt-7 max-w-[760px] text-[15px] leading-7 text-white/[0.48] md:text-lg md:leading-8"
          >
            Sites, landing pages e experiências digitais construídas para fazer sua empresa parecer tão forte quanto o trabalho que entrega.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.21, duration: 0.5 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-[54px] items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#07101f] shadow-[0_20px_65px_rgba(0,0,0,.26)] transition-all hover:-translate-y-0.5 hover:bg-[#edf3ff]"
            >
              <MessageCircle className="h-4 w-4" />
              Iniciar um projeto
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/portfolio"
              className="group inline-flex h-[54px] items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.035] px-7 text-sm font-semibold text-white/[0.76] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/[0.25] hover:bg-white/[0.07] hover:text-white"
            >
              Ver projetos reais
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-14 max-w-[1380px] md:mt-20 [perspective:1800px]"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            mx.set((event.clientX - rect.left) / rect.width - 0.5);
            my.set((event.clientY - rect.top) / rect.height - 0.5);
          }}
          onMouseLeave={() => {
            mx.set(0);
            my.set(0);
          }}
        >
          <div className="pointer-events-none absolute -inset-16 rounded-full bg-[#315fff]/[0.12] blur-[150px]" />

          <div className="absolute left-1/2 top-[-30px] z-20 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/[0.11] bg-[#0c1320]/90 p-1 shadow-[0_18px_55px_rgba(0,0,0,.28)] backdrop-blur-2xl">
            {projects.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-full px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] transition-all ${index === active ? "bg-white text-[#07101f]" : "text-white/[0.38] hover:text-white/[0.7]"}`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative z-10">
            <div className="overflow-hidden rounded-[30px] border border-white/[0.1] bg-[#0b111c] p-2 shadow-[0_55px_160px_rgba(0,0,0,.45)] md:rounded-[40px] md:p-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.985, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.99, y: -8 }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                >
                  <LiveProjectFrame
                    url={project.url}
                    title={project.title}
                    domain={project.domain}
                    eager
                    viewportClassName="min-h-[440px] sm:min-h-[520px] md:min-h-[650px] lg:min-h-[720px]"
                    className="rounded-[24px] md:rounded-[32px]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pointer-events-none absolute inset-x-[9%] -bottom-4 h-8 rounded-[50%] bg-black/[0.55] blur-2xl" />
          </motion.div>

          <motion.div
            style={{ x: phoneX, y: phoneY }}
            className="absolute -bottom-10 -left-2 z-30 hidden w-[210px] rotate-[-4deg] sm:block md:-left-6 md:w-[250px] lg:-left-12 lg:w-[285px]"
          >
            <div className="overflow-hidden rounded-[34px] border-[7px] border-[#0b1018] bg-[#0b1018] shadow-[0_35px_100px_rgba(0,0,0,.48)]">
              <div className="mx-auto my-2 h-1.5 w-14 rounded-full bg-white/[0.12]" />
              <LiveProjectFrame
                url={secondary.url}
                title={secondary.title}
                domain={secondary.domain}
                compact
                viewportClassName="min-h-[390px]"
                className="rounded-[26px] border-0 shadow-none"
              />
            </div>
          </motion.div>

          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="absolute -right-2 bottom-6 z-30 hidden max-w-[280px] rounded-[24px] border border-white/[0.11] bg-[#0d1727]/92 p-5 shadow-[0_28px_90px_rgba(0,0,0,.38)] backdrop-blur-2xl md:block lg:-right-8"
          >
            <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#91b5ff]">Live project</p>
            <p className="mt-2 text-lg font-heading font-semibold tracking-[-0.035em] text-white">{project.title}</p>
            <p className="mt-2 text-xs leading-5 text-white/[0.36]">Abra o site real. Sem case inventado, sem imagem genérica.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white/[0.72]">Abrir projeto <ArrowUpRight className="h-3.5 w-3.5" /></span>
          </motion.a>
        </motion.div>

        <div className="mt-16 grid gap-5 border-y border-white/[0.1] py-6 sm:grid-cols-3 md:mt-24">
          {[
            ["01", "Estratégia", "Mensagem e hierarquia antes do layout"],
            ["02", "Direção", "Visual próprio, não uma coleção de blocos"],
            ["03", "Execução", "Responsivo, SEO, rastreamento e publicação"],
          ].map(([number, label, text], index) => (
            <div key={label} className={index > 0 ? "sm:border-l sm:border-white/[0.1] sm:pl-6" : ""}>
              <div className="flex items-center gap-3"><span className="text-[9px] font-semibold text-[#8db6ff]">{number}</span><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/[0.3]">{label}</span></div>
              <p className="mt-2 text-xs leading-6 text-white/[0.46]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
