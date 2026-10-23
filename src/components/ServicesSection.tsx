import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const services=[
 {number:"01",title:"Sites institucionais",description:"Presença digital para apresentar empresa, serviços, diferenciais e contato com mais autoridade.",detail:"Positioning · UX · Responsive · SEO",href:"/servicos/sites-institucionais"},
 {number:"02",title:"Landing pages",description:"Páginas com narrativa de oferta, prova, objeções e CTA organizados para facilitar a decisão.",detail:"Offer · Campaign · CTA · Performance",href:"/servicos/landing-pages"},
 {number:"03",title:"Lojas virtuais",description:"E-commerce com navegação clara, produto bem apresentado e experiência consistente no mobile.",detail:"Catalog · Checkout · Integrations · Mobile",href:"/servicos/loja-virtual"},
 {number:"04",title:"Google Ads",description:"Campanhas conectadas à página certa para manter a mensagem coerente da busca até o contato.",detail:"Search · Segmentation · Conversion",href:"/servicos/anuncios"}
];
const ServicesSection=()=> <section id="servicos" className="bg-[#f7f7f4] px-4 py-24 md:py-40"><div className="container mx-auto max-w-[1380px]">
 <div className="grid gap-10 border-b border-black/[.11] pb-14 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="text-[9px] font-semibold uppercase tracking-[.3em] text-[#2458d8]">Capabilities / 04</p><h2 className="mt-5 text-[3.5rem] font-heading font-semibold leading-[.86] tracking-[-.075em] text-[#08111f] sm:text-7xl md:text-[6.7rem]">Built around<br/><span className="text-black/[.23]">the objective.</span></h2></div><p className="max-w-[470px] text-base leading-8 text-black/[.44] lg:justify-self-end">O formato vem depois da estratégia. Cada projeto começa entendendo o que o negócio precisa comunicar, provar e converter.</p></div>
 <div>{services.map((s,i)=><motion.div key={s.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} transition={{delay:i*.04}}><Link to={s.href} className="group grid gap-5 border-b border-black/[.1] py-9 md:grid-cols-[.09fr_.4fr_.4fr_.11fr] md:items-center md:py-11"><span className="text-[9px] font-semibold text-black/[.28]">{s.number}</span><h3 className="text-3xl font-heading font-semibold tracking-[-.055em] text-[#08111f] md:text-5xl">{s.title}</h3><div><p className="max-w-[480px] text-sm leading-7 text-black/[.43]">{s.description}</p><p className="mt-3 text-[8px] font-semibold uppercase tracking-[.17em] text-black/[.27]">{s.detail}</p></div><ArrowUpRight className="h-6 w-6 text-black/[.3] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:justify-self-end"/></Link></motion.div>)}</div>
 </div></section>;
export default memo(ServicesSection);
