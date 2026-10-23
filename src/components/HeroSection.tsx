import { memo, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  MessageCircle,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20quero%20conversar%20sobre%20um%20projeto.";

const capabilities = ["Web design", "Landing pages", "E-commerce", "Google Ads", "UX", "Desenvolvimento"];

const BrowserChrome = ({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) => (
  <div
    className={`overflow-hidden border shadow-[0_42px_120px_rgba(0,0,0,.34)] ${
      tone === "dark" ? "border-white/[0.1] bg-[#0a1423]" : "border-black/[0.07] bg-[#f7f4ef]"
    }`}
  >
    <div className={`flex h-10 items-center gap-2 border-b px-4 ${tone === "dark" ? "border-white/[0.08]" : "border-black/[0.07]"}`}>
      <span className={`h-2 w-2 rounded-full ${tone === "dark" ? "bg-white/[0.16]" : "bg-black/[0.1]"}`} />
      <span className={`h-2 w-2 rounded-full ${tone === "dark" ? "bg-white/[0.16]" : "bg-black/[0.1]"}`} />
      <span className={`h-2 w-2 rounded-full ${tone === "dark" ? "bg-white/[0.16]" : "bg-black/[0.1]"}`} />
      <span className={`mx-auto h-5 w-[34%] rounded-full ${tone === "dark" ? "bg-white/[0.045]" : "bg-black/[0.035]"}`} />
    </div>
    {children}
  </div>
);

const HeroProjectStage = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [3.2, -3.2]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-4.2, 4.2]);
  const xBack = useTransform(mx, [-0.5, 0.5], [-10, 10]);
  const yBack = useTransform(my, [-0.5, 0.5], [-8, 8]);
  const xFront = useTransform(mx, [-0.5, 0.5], [8, -8]);
  const yFront = useTransform(my, [-0.5, 0.5], [6, -6]);

  return (
    <div
      className="relative mx-auto mt-14 max-w-[1240px] [perspective:1600px] md:mt-20"
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
      <div className="pointer-events-none absolute inset-x-[8%] bottom-[-12%] h-[34%] rounded-[50%] bg-[#4078ff]/[0.26] blur-[110px]" />

      <motion.div
        style={{ x: xBack, y: yBack }}
        className="absolute left-[3%] top-[10%] hidden w-[38%] -rotate-[5deg] opacity-70 lg:block"
      >
        <BrowserChrome tone="light">
          <div className="min-h-[380px] p-7 text-[#252c28]">
            <div className="flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.18em] text-black/[0.3]">
              <span>Helena Ávila</span>
              <span>Psicoterapia</span>
            </div>
            <p className="mt-16 max-w-[390px] font-serif text-[3.15rem] leading-[.94] tracking-[-0.05em]">
              Um espaço digital mais humano.
            </p>
            <p className="mt-5 max-w-[330px] text-xs leading-6 text-black/[0.45]">
              Conteúdo, presença e contato organizados com calma e clareza.
            </p>
            <div className="mt-8 h-10 w-32 rounded-full bg-[#586f64]" />
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[0, 1, 2].map((item) => (
                <div key={item} className="h-20 border border-black/[0.06] bg-white/[0.55]" />
              ))}
            </div>
          </div>
        </BrowserChrome>
      </motion.div>

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-10 mx-auto w-full max-w-[1000px]"
      >
        <BrowserChrome>
          <div className="relative min-h-[470px] overflow-hidden bg-[#08111f] p-6 sm:p-8 md:min-h-[560px] md:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-[10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[#356dff]/[0.2] blur-[150px]" />
            <div className="pointer-events-none absolute bottom-[-35%] left-[-10%] h-[440px] w-[440px] rounded-full bg-cyan-300/[0.08] blur-[140px]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:52px_52px]" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#78a7ff] shadow-[0_0_18px_rgba(120,167,255,.7)]" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/[0.38]">Selected work · Live</span>
                </div>
                <span className="hidden text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.24] sm:block">Strategy / Design / Code</span>
              </div>

              <div className="mt-16 grid gap-8 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8db6ff]">Cristiano Ávila · Professional website</p>
                  <h2 className="mt-5 max-w-[700px] text-[2.75rem] font-heading font-semibold leading-[.92] tracking-[-0.065em] text-white sm:text-6xl md:text-[4.8rem]">
                    Menos ruído.
                    <span className="block text-white/[0.38]">Mais presença.</span>
                  </h2>
                  <p className="mt-6 max-w-[520px] text-sm leading-7 text-white/[0.42] md:text-base">
                    Uma interface direta, responsiva e construída para apresentar o profissional com clareza antes do primeiro contato.
                  </p>
                </div>

                <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
                  {["Mensagem clara", "Mobile first", "Contato direto"].map((item) => (
                    <div key={item} className="flex items-center gap-3 border-t border-white/[0.1] py-3 text-xs text-white/[0.52]">
                      <Check className="h-3.5 w-3.5 text-[#8db6ff]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 flex flex-wrap items-end justify-between gap-5 border-t border-white/[0.1] pt-6">
                <a
                  href="https://cristiano-avila-site.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
                >
                  Abrir projeto real
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/[0.26]">Publicado · Responsivo</span>
              </div>
            </div>
          </div>
        </BrowserChrome>
      </motion.div>

      <motion.div
        style={{ x: xFront, y: yFront }}
        className="absolute -bottom-8 right-[4%] z-20 hidden w-[218px] rotate-[4deg] sm:block md:right-[7%] md:w-[244px]"
      >
        <div className="overflow-hidden rounded-[34px] border-[7px] border-[#101722] bg-[#101722] shadow-[0_34px_90px_rgba(0,0,0,.45)]">
          <div className="mx-auto mt-2 h-2 w-16 rounded-full bg-white/[0.1]" />
          <div className="mt-2 min-h-[318px] rounded-[25px] bg-[#f5f1eb] p-5 text-[#242b27]">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/[0.3]">Mobile review</p>
            <p className="mt-7 font-serif text-3xl leading-[.98] tracking-[-0.05em]">Helena Ávila</p>
            <div className="mt-5 h-2 w-[82%] rounded-full bg-black/[0.1]" />
            <div className="mt-2 h-2 w-[58%] rounded-full bg-black/[0.08]" />
            <div className="mt-6 aspect-[4/3] rounded-[20px] bg-[#d8ded8]" />
            <div className="mt-5 h-9 w-full rounded-full bg-[#586f64]" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute -left-2 top-[44%] z-30 hidden items-center gap-2 rounded-full border border-white/[0.1] bg-[#0b1525]/[0.88] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/[0.52] shadow-xl backdrop-blur-xl xl:flex"
      >
        <MousePointer2 className="h-3.5 w-3.5 text-[#8db6ff]" />
        Move para explorar
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#050a13] px-4 pb-24 pt-32 text-white md:pb-32 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-360px] h-[860px] w-[1100px] -translate-x-1/2 rounded-full bg-[#2e67ff]/[0.2] blur-[190px]" />
        <div className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.18]" />
      </div>

      <div className="container mx-auto max-w-[1380px]">
        <div className="mx-auto max-w-[1180px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-7 inline-flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.26em] text-white/[0.44] md:text-[10px]"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#8db6ff]" />
            Kubo Web · Digital Studio · Brasil
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto text-[3.1rem] font-heading font-semibold leading-[0.89] tracking-[-0.072em] sm:text-7xl md:text-[6.4rem] lg:text-[7.7rem] xl:text-[8.55rem]"
          >
            Sites de alto nível
            <span className="block bg-gradient-to-r from-[#8db6ff] via-[#d5e4ff] to-[#6b95ff] bg-[length:200%_100%] bg-clip-text text-transparent text-gradient-hero">
              para marcas sérias.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mx-auto mt-7 max-w-[760px] text-[15px] leading-7 text-white/[0.48] md:mt-8 md:text-lg md:leading-8"
          >
            Estratégia, direção de arte e desenvolvimento em uma experiência digital que faz sua empresa parecer tão profissional quanto o trabalho que entrega.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.48 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-[52px] min-w-[210px] items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#07101f] shadow-[0_20px_65px_rgba(0,0,0,.24)] transition-all hover:-translate-y-0.5 hover:bg-[#edf3ff]"
            >
              <MessageCircle className="h-4 w-4" />
              Iniciar um projeto
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/portfolio"
              className="group inline-flex h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.035] px-6 text-sm font-semibold text-white/[0.72] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-white/[0.25] hover:bg-white/[0.07] hover:text-white"
            >
              Ver projetos
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.34, duration: 0.55 }}
            className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/[0.24] md:mt-12"
          >
            <span>Estratégia</span><span className="h-1 w-1 rounded-full bg-[#78a7ff]" />
            <span>Design</span><span className="h-1 w-1 rounded-full bg-[#78a7ff]" />
            <span>Desenvolvimento</span><span className="h-1 w-1 rounded-full bg-[#78a7ff]" />
            <span>Publicação</span>
          </motion.div>
        </div>

        <HeroProjectStage />
      </div>

      <div className="mt-24 border-y border-white/[0.08] py-4 md:mt-32">
        <div className="overflow-hidden">
          <div className="animate-marquee-stats flex min-w-max items-center gap-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/[0.3] md:gap-10">
            {[...capabilities, ...capabilities].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-7 md:gap-10">
                {item}
                <span className="h-1 w-1 rounded-full bg-[#78a7ff]/[0.7]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
