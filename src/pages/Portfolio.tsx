import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import RealWorkSection from "@/components/RealWorkSection";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";

const screenshot = (url: string) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=900`;
const projects = [
  { slug: "helena-avila", number: "01", name: "Helena Ávila", domain: "helenaavilapsi.com.br", url: "https://www.helenaavilapsi.com.br/", description: "Psicoterapia · presença digital acolhedora e objetiva.", light: true },
  { slug: "cristiano-avila", number: "02", name: "Cristiano Ávila", domain: "cristiano-avila-site.vercel.app", url: "https://cristiano-avila-site.vercel.app/", description: "Interface direta, responsiva e construída para apresentar o profissional com clareza.", light: false },
];

const Portfolio = () => (
  <main className="min-h-screen bg-background">
    <SEO title="Portfólio" description="Conheça projetos publicados pela Kubo Web, explore os cases e abra os sites reais." path="/portfolio" />
    <Header />
    <section className="relative isolate overflow-hidden bg-[#050a13] px-4 pb-24 pt-36 text-white md:pb-32 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10"><div className="absolute left-[5%] top-[-320px] h-[780px] w-[780px] rounded-full bg-[#326cff]/20 blur-[190px]" /><div className="absolute right-[-12%] top-[14%] h-[620px] w-[620px] rounded-full bg-[#8db6ff]/[0.08] blur-[190px]" /></div>
      <div className="container mx-auto max-w-[1380px]">
        <div className="max-w-[1050px]"><div className="inline-flex items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8db6ff]"><Sparkles className="h-3.5 w-3.5" />Selected work · Real case studies</div><motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} className="mt-6 text-[3.6rem] font-heading font-semibold leading-[.86] tracking-[-0.075em] sm:text-7xl md:text-[7.4rem]">Trabalho real.<span className="block text-white/[0.3]">Agora com contexto.</span></motion.h1><p className="mt-8 max-w-[700px] text-base leading-8 text-white/[0.47] md:text-lg">Além de abrir o site publicado, você pode entrar no case e entender objetivo, direção, experiência responsiva e o que foi entregue.</p><a href="#cases" className="mt-10 inline-flex h-[52px] items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-6 text-sm font-semibold text-white/[0.72]">Explorar cases <ArrowDownRight className="h-4 w-4" /></a></div>

        <div id="cases" className="mt-20 grid gap-5 lg:grid-cols-2 md:mt-28">
          {projects.map((p, index) => <motion.div key={p.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className={`group overflow-hidden rounded-[34px] border border-white/[0.1] ${p.light ? "bg-[#e8ede9] text-[#26302b]" : "bg-[#0b1525] text-white"}`}>
            <Link to={`/portfolio/${p.slug}`} className="block p-4 md:p-5"><div className={`flex items-center justify-between px-2 pb-4 text-[8px] font-semibold uppercase tracking-[0.18em] ${p.light ? "text-black/[0.32]" : "text-white/[0.3]"}`}><span>{p.number} · Case study</span><span>Explore ↗</span></div><div className="aspect-[16/10] overflow-hidden rounded-[25px] bg-white"><img src={screenshot(p.url)} alt={`Projeto ${p.name}`} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]" /></div><div className="flex items-end justify-between gap-6 px-2 pb-2 pt-7"><div><h2 className="text-3xl font-heading font-semibold tracking-[-0.05em]">{p.name}</h2><p className={`mt-2 max-w-[440px] text-xs leading-6 ${p.light ? "text-black/[0.45]" : "text-white/[0.4]"}`}>{p.description}</p><p className={`mt-4 text-[8px] font-semibold uppercase tracking-[0.16em] ${p.light ? "text-black/[0.3]" : "text-white/[0.25]"}`}>{p.domain}</p></div><span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${p.light ? "bg-[#26302b] text-white" : "bg-white text-[#07101f]"}`}><ArrowUpRight className="h-4 w-4" /></span></div></Link>
          </motion.div>)}
        </div>
        <div className="mt-16 grid border-y border-white/[0.1] sm:grid-cols-3">{["Projetos publicados", "Cases navegáveis", "Desktop + mobile"].map((x,i)=><div key={x} className={`flex items-center gap-4 py-5 sm:px-5 ${i>0?"sm:border-l sm:border-white/[0.1]":""}`}><span className="text-[9px] font-semibold text-[#8db6ff]">0{i+1}</span><span className="text-xs font-medium text-white/[0.48]">{x}</span></div>)}</div>
      </div>
    </section>
    <div id="projetos"><RealWorkSection /></div><CTASection /><Footer /><FloatingWhatsApp />
  </main>
);
export default Portfolio;
