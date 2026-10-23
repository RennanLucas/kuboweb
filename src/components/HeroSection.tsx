import { memo } from "react";
import { ArrowDownRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20quero%20iniciar%20um%20projeto.";

const capabilities = ["Web Design", "Desenvolvimento", "Landing Pages", "E-commerce", "Google Ads", "Estratégia Digital"];

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-[900px] overflow-hidden bg-[#07101f] px-4 pb-0 pt-32 text-white md:pt-40 lg:min-h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-12 h-[620px] w-[620px] rounded-full bg-blue-600/20 blur-[170px]" />
        <div className="absolute -right-40 top-0 h-[760px] w-[760px] rounded-full bg-cyan-400/10 blur-[220px]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <div className="container mx-auto max-w-7xl px-0 md:px-2">
        <div className="grid items-center gap-14 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-24">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-blue-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/55">
                Kubo Web · Digital Studio · Brasil
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.58 }}
              className="max-w-[820px] text-[3.3rem] font-heading font-semibold leading-[0.93] tracking-[-0.06em] sm:text-6xl md:text-[5rem] lg:text-[5.25rem] xl:text-[5.8rem]"
            >
              Sites que fazem sua empresa parecer uma
              <span className="block text-[#78a9ff]">grande marca.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.5 }}
              className="mt-7 max-w-xl text-[15px] leading-7 text-white/58 md:text-lg md:leading-8"
            >
              Estratégia, design e desenvolvimento em uma presença digital com mais autoridade, mais clareza e um caminho melhor até o contato comercial.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="xl" className="rounded-full bg-white px-7 text-[#07101f] shadow-[0_18px_50px_rgba(0,0,0,.25)] hover:bg-white/90">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Iniciar um projeto
                </a>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="rounded-full border-white/18 bg-white/[0.04] px-7 text-white hover:border-white/35 hover:bg-white/[0.08] hover:text-white"
              >
                <Link to="/portfolio">
                  Ver trabalhos
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.55 }}
              className="mt-11 grid max-w-xl grid-cols-2 gap-6 border-t border-white/10 pt-6 sm:grid-cols-3"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">Foco</p>
                <p className="mt-2 text-sm font-medium text-white/80">Marca + Conversão</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">Entrega</p>
                <p className="mt-2 text-sm font-medium text-white/80">Design + Código</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">Atendimento</p>
                <p className="mt-2 text-sm font-medium text-white/80">Direto no WhatsApp</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 1.2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[610px] lg:mr-0"
          >
            <div className="absolute -inset-12 -z-10 rounded-full bg-blue-500/10 blur-[90px]" />

            <a
              href="https://www.helenaavilapsi.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[32px] border border-white/14 bg-white/[0.07] p-3 shadow-[0_35px_100px_rgba(0,0,0,.48)] backdrop-blur-xl"
            >
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#f5f3ef] text-[#17202c]">
                <div className="flex items-center gap-3 border-b border-black/8 bg-white/70 px-4 py-3 backdrop-blur-sm">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-black/15" />
                    <span className="h-2 w-2 rounded-full bg-black/15" />
                    <span className="h-2 w-2 rounded-full bg-black/15" />
                  </div>
                  <div className="mx-auto rounded-full bg-black/[0.045] px-4 py-1.5 text-[10px] text-black/45">helenaavilapsi.com.br</div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-black/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>

                <div className="grid min-h-[430px] grid-cols-1 md:grid-cols-[1.05fr_0.95fr]">
                  <div className="flex flex-col justify-between p-7 md:p-9">
                    <div>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#706c65]">Projeto publicado · Psicoterapia</span>
                      <h2 className="mt-5 max-w-[300px] font-serif text-[2.45rem] leading-[0.96] tracking-[-0.035em] text-[#18202a] md:text-[3rem]">
                        Presença digital com calma, clareza e confiança.
                      </h2>
                    </div>
                    <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-5">
                      <div>
                        <p className="text-xs font-semibold">Helena Ávila</p>
                        <p className="mt-1 text-[10px] text-black/45">Website · UX · Desenvolvimento</p>
                      </div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18202a] text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  <div className="relative min-h-[300px] overflow-hidden bg-[#c6d4cc] md:min-h-full">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_28%,rgba(255,255,255,.8),transparent_26%),linear-gradient(145deg,#dfe8e1,#9db3a8)]" />
                    <div className="absolute -bottom-12 left-1/2 h-[330px] w-[220px] -translate-x-1/2 rounded-t-[120px] bg-[#f4eee8] shadow-[0_30px_80px_rgba(44,66,57,.25)]" />
                    <div className="absolute left-1/2 top-20 h-24 w-24 -translate-x-1/2 rounded-full bg-[#c08b6b] shadow-[0_0_0_18px_rgba(255,255,255,.18)]" />
                    <div className="absolute bottom-7 right-6 rounded-full border border-white/60 bg-white/55 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#52635b] backdrop-blur-md">Live project</div>
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://cristiano-avila-site.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute -bottom-9 -left-2 hidden w-[270px] rounded-[24px] border border-white/15 bg-[#0f1b2d]/95 p-4 shadow-[0_24px_70px_rgba(0,0,0,.45)] backdrop-blur-xl md:block lg:-left-14"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/38">02 · Projeto publicado</span>
                <ArrowUpRight className="h-4 w-4 text-white/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-8 text-xl font-heading font-semibold tracking-[-0.025em] text-white">Cristiano Ávila</p>
              <p className="mt-2 text-xs leading-relaxed text-white/45">Site profissional com estrutura objetiva e experiência responsiva.</p>
            </a>

            <div className="absolute -right-2 top-10 hidden rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45 backdrop-blur-xl md:block lg:-right-10">
              Selected work / 2026
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative -mx-4 border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto flex max-w-[1500px] items-center overflow-hidden py-4">
          <div className="flex min-w-max items-center gap-5 px-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/42 md:gap-8 md:text-[11px]">
            {capabilities.map((item) => (
              <span key={item} className="flex items-center gap-5 md:gap-8">
                {item}
                <span className="h-1 w-1 rounded-full bg-blue-400/80" />
              </span>
            ))}
            <span className="flex items-center gap-2 text-white/65">
              Construído para marcas que querem crescer
              <ArrowDownRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
