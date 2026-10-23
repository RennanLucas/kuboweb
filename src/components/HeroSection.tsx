import { memo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LiveProjectFrame from "@/components/LiveProjectFrame";

const whatsappUrl = "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20quero%20conversar%20sobre%20um%20projeto.";
const projects = [
  { title: "Helena Ávila", domain: "helenaavilapsi.com.br", url: "https://www.helenaavilapsi.com.br/", label: "Psicoterapia · website" },
  { title: "Cristiano Ávila", domain: "cristiano-avila-site.vercel.app", url: "https://cristiano-avila-site.vercel.app/", label: "Professional · website" },
] as const;

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const project = projects[active];
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#05070b] px-4 pb-16 pt-32 text-white md:pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-[12%] -top-[22%] h-[920px] w-[920px] rounded-full bg-[#2f65ff]/[0.16] blur-[210px]" />
        <div className="absolute bottom-[-28%] left-[-15%] h-[700px] w-[700px] rounded-full bg-[#7dd7ff]/[0.06] blur-[190px]" />
        <div className="absolute inset-0 opacity-[.055] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:96px_96px]" />
      </div>
      <div className="container mx-auto max-w-[1460px]">
        <div className="grid min-h-[calc(100vh-10rem)] gap-14 xl:grid-cols-[.84fr_1.16fr] xl:items-center">
          <div className="relative z-20">
            <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="text-[9px] font-semibold uppercase tracking-[.32em] text-[#91b5ff]">Independent digital studio · Brazil</motion.p>
            <motion.h1 initial={{opacity:0,y:26}} animate={{opacity:1,y:0}} transition={{delay:.05,duration:.7}} className="mt-7 max-w-[760px] text-[4.25rem] font-heading font-semibold leading-[.8] tracking-[-.085em] sm:text-[6rem] lg:text-[8.1rem] xl:text-[8.8rem]">
              Digital<br/><span className="text-white/[.28]">presence,</span><br/>directed.
            </motion.h1>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.18}} className="mt-9 grid max-w-[650px] gap-7 border-t border-white/[.12] pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-[480px] text-[15px] leading-7 text-white/[.48]">Sites e landing pages com estratégia, direção visual e desenvolvimento. Para negócios que não querem parecer mais um template.</p>
              <span className="hidden text-right text-[8px] font-semibold uppercase leading-5 tracking-[.2em] text-white/[.24] sm:block">Strategy<br/>Design<br/>Development</span>
            </motion.div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex h-[54px] items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#07101f] transition-transform hover:-translate-y-0.5"><MessageCircle className="h-4 w-4"/>Iniciar projeto<ArrowUpRight className="h-4 w-4"/></a>
              <Link to="/portfolio" className="inline-flex h-[54px] items-center gap-2 rounded-full border border-white/[.14] px-6 text-sm font-semibold text-white/[.68] hover:text-white">Selected work <ArrowDownRight className="h-4 w-4"/></Link>
            </div>
          </div>

          <motion.div initial={{opacity:0,x:36}} animate={{opacity:1,x:0}} transition={{delay:.12,duration:.85}} className="relative min-h-[590px] md:min-h-[760px]">
            <div className="absolute inset-x-0 top-[3%] z-10 flex justify-end gap-2 pr-2">
              {projects.map((p,i)=><button key={p.title} onClick={()=>setActive(i)} className={`rounded-full border px-3.5 py-2 text-[8px] font-semibold uppercase tracking-[.16em] backdrop-blur-xl transition-all ${active===i?"border-white bg-white text-[#07101f]":"border-white/[.12] bg-black/[.2] text-white/[.42]"}`}>0{i+1}</button>)}
            </div>
            <div className="absolute left-[2%] right-[-12%] top-[8%] overflow-hidden rounded-[38px] border border-white/[.1] bg-[#0b111b] p-2 shadow-[0_70px_180px_rgba(0,0,0,.48)] md:p-3">
              <LiveProjectFrame key={project.url} url={project.url} title={project.title} domain={project.domain} eager viewportClassName="min-h-[510px] md:min-h-[650px]" className="rounded-[30px]" />
            </div>
            <div className="absolute bottom-[2%] left-[-5%] z-20 w-[210px] rotate-[-5deg] overflow-hidden rounded-[34px] border-[7px] border-[#0b0f16] bg-[#0b0f16] shadow-[0_45px_110px_rgba(0,0,0,.5)] sm:w-[250px] md:w-[285px]">
              <div className="mx-auto my-2 h-1.5 w-12 rounded-full bg-white/[.12]"/><LiveProjectFrame url={project.url} title={project.title} domain={project.domain} compact viewportClassName="min-h-[390px]" className="rounded-[25px] border-0 shadow-none"/>
            </div>
            <div className="absolute bottom-[5%] right-[0] z-30 max-w-[260px] border-l border-white/[.14] pl-5">
              <p className="text-[8px] font-semibold uppercase tracking-[.2em] text-[#91b5ff]">Selected work / 0{active+1}</p><p className="mt-2 text-2xl font-heading font-semibold tracking-[-.045em]">{project.title}</p><p className="mt-2 text-xs text-white/[.36]">{project.label}</p><a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white/[.7]">View live <ArrowUpRight className="h-3.5 w-3.5"/></a>
            </div>
          </motion.div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-white/[.1] pt-5 text-[8px] font-semibold uppercase tracking-[.2em] text-white/[.25]"><span>Kubo Web® / Digital experiences</span><span className="hidden sm:block">Scroll to explore ↓</span></div>
      </div>
    </section>
  );
};
export default memo(HeroSection);
