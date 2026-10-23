import { memo } from "react";
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Code2, Layers3, MessageCircle, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20quero%20iniciar%20um%20projeto.";

const capabilities = ["Web Design", "Desenvolvimento", "Landing Pages", "E-commerce", "Google Ads", "Estratégia Digital"];

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#050a13] px-4 pb-0 pt-32 text-white md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-280px] h-[760px] w-[980px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />
        <div className="absolute right-[-260px] top-[18%] h-[620px] w-[620px] rounded-full bg-cyan-400/8 blur-[190px]" />
        <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#79a9ff] shadow-[0_0_18px_rgba(121,169,255,.8)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/50">Kubo Web · Digital Studio · Brasil</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04, duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-[1180px] text-[3.45rem] font-heading font-semibold leading-[0.9] tracking-[-0.065em] sm:text-7xl md:text-[5.8rem] lg:text-[7rem] xl:text-[7.55rem]"
          >
            Sites que fazem sua marca
            <span className="block text-[#79a9ff]">parecer maior.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-white/50 md:text-lg md:leading-8"
          >
            Estratégia, direção de arte e desenvolvimento para negócios que não querem mais parecer “só mais um site”.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="xl" className="rounded-full bg-white px-7 text-[#050a13] shadow-[0_20px_60px_rgba(0,0,0,.3)] hover:bg-white/90">
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-14 max-w-7xl md:mt-20"
        >
          <div className="absolute -inset-16 -z-10 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="overflow-hidden rounded-t-[34px] border border-b-0 border-white/11 bg-[#0a1220]/96 shadow-[0_45px_130px_rgba(0,0,0,.48)] backdrop-blur-2xl">
            <div className="flex items-center gap-3 border-b border-white/8 px-5 py-4 md:px-7">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
              </div>
              <div className="ml-2 flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/42">Studio live</span>
              </div>
              <span className="ml-auto hidden text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25 md:block">Design / Build / Launch</span>
            </div>

            <div className="grid lg:grid-cols-[0.62fr_1.38fr]">
              <div className="border-b border-white/8 p-6 md:p-8 lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/28">Project board</p>
                    <h2 className="mt-2 text-2xl font-heading font-semibold tracking-[-0.04em] md:text-3xl">Kubo Studio</h2>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/38">2026</span>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    { icon: Layers3, title: "Direção visual", state: "Active", active: true },
                    { icon: Smartphone, title: "Mobile review", state: "Ready" },
                    { icon: Code2, title: "Development", state: "Next" },
                  ].map((item) => (
                    <div key={item.title} className={`flex items-center gap-3 rounded-2xl border px-4 py-4 ${item.active ? "border-[#79a9ff]/25 bg-[#79a9ff]/10" : "border-white/8 bg-white/[0.025]"}`}>
                      <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.active ? "bg-[#79a9ff] text-[#061020]" : "bg-white/[0.05] text-white/45"}`}>
                        <item.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-medium text-white/75">{item.title}</p>
                        <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/28">{item.state}</p>
                      </div>
                      {item.active && <CheckCircle2 className="ml-auto h-4 w-4 text-[#9cc2ff]" />}
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/8 pt-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/24">Selected work</p>
                  <div className="mt-4 space-y-3">
                    <a href="https://www.helenaavilapsi.com.br/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between text-sm text-white/58 transition-colors hover:text-white">
                      Helena Ávila
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                    <a href="https://cristiano-avila-site.vercel.app/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between text-sm text-white/58 transition-colors hover:text-white">
                      Cristiano Ávila
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden bg-[#0d1727] p-4 sm:p-6 md:p-8">
                <div className="absolute right-[-12%] top-[-20%] h-[420px] w-[420px] rounded-full bg-blue-500/24 blur-[120px]" />
                <div className="absolute bottom-[-28%] left-[-10%] h-[360px] w-[360px] rounded-full bg-cyan-300/8 blur-[110px]" />

                <div className="relative z-10 overflow-hidden rounded-[26px] border border-white/10 bg-[#f4f2ed] shadow-[0_30px_80px_rgba(0,0,0,.28)]">
                  <div className="flex items-center gap-2 border-b border-black/8 bg-white/80 px-4 py-3 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-black/12" />
                    <span className="h-2 w-2 rounded-full bg-black/12" />
                    <span className="h-2 w-2 rounded-full bg-black/12" />
                    <div className="mx-auto rounded-full bg-black/[0.035] px-5 py-1.5 text-[9px] text-black/35">live-project.kuboweb.com.br</div>
                  </div>

                  <div className="grid min-h-[470px] md:grid-cols-[1.05fr_0.95fr]">
                    <div className="flex flex-col justify-between p-7 text-[#18212c] md:p-10">
                      <div>
                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/35">Strategy · Design · Code</span>
                        <h3 className="mt-5 max-w-[430px] text-[2.7rem] font-heading font-semibold leading-[0.94] tracking-[-0.055em] md:text-[4rem]">
                          Uma presença digital que parece construída para liderar.
                        </h3>
                        <p className="mt-5 max-w-[380px] text-xs leading-6 text-black/48 md:text-sm">
                          Hierarquia forte, interface responsiva e um caminho claro até o próximo passo comercial.
                        </p>
                      </div>
                      <div className="mt-10 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#18212c] px-4 py-2 text-[10px] font-semibold text-white">Projeto premium</span>
                        <span className="rounded-full border border-black/10 px-4 py-2 text-[10px] font-semibold text-black/50">Responsive system</span>
                      </div>
                    </div>

                    <div className="relative min-h-[330px] overflow-hidden bg-[#dce5f2] md:min-h-full">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_22%,rgba(255,255,255,.95),transparent_25%),linear-gradient(150deg,#eef3fa,#b7cae2)]" />
                      <div className="absolute left-[13%] top-[17%] h-[66%] w-[70%] rotate-[-5deg] rounded-[28px] border border-white/70 bg-white/62 p-4 shadow-[0_35px_70px_rgba(34,61,98,.18)] backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/30">Interface system</span>
                          <span className="h-2 w-2 rounded-full bg-blue-500" />
                        </div>
                        <div className="mt-6 h-3 w-16 rounded-full bg-blue-500/18" />
                        <div className="mt-4 h-7 w-4/5 rounded-lg bg-[#1b2940]" />
                        <div className="mt-3 h-2.5 w-full rounded-full bg-black/8" />
                        <div className="mt-2 h-2.5 w-3/4 rounded-full bg-black/8" />
                        <div className="mt-8 grid grid-cols-2 gap-3">
                          <div className="h-24 rounded-2xl bg-[#f2e9df]" />
                          <div className="h-24 rounded-2xl bg-[#d7e6df]" />
                        </div>
                      </div>
                      <div className="absolute bottom-[7%] right-[7%] rounded-2xl border border-white/70 bg-[#0e1a2b]/92 px-4 py-3 text-white shadow-xl backdrop-blur-xl">
                        <p className="text-[8px] uppercase tracking-[0.18em] text-white/35">Status</p>
                        <p className="mt-1 text-[10px] font-medium text-white/80">Interface approved</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative -mx-4 border-y border-white/9 bg-white/[0.018]">
        <div className="mx-auto flex max-w-[1600px] items-center overflow-hidden py-4">
          <div className="flex min-w-max items-center gap-5 px-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/36 md:gap-8 md:text-[11px]">
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
