import { memo } from "react";
import { motion } from "framer-motion";
const rows=[
 ["01","Design personalizado","A direção visual nasce do posicionamento e do conteúdo do negócio — não de um tema reaproveitado."],
 ["02","Performance","Estrutura enxuta, carregamento eficiente e decisões que respeitam Core Web Vitals."],
 ["03","Responsividade completa","Tipografia, ordem, espaçamento e interação revistos para desktop, tablet e celular."],
 ["04","SEO técnico","Semântica, metadados, sitemap e fundamentos técnicos preparados para busca."],
 ["05","Conversão","WhatsApp, formulários e CTAs entram na arquitetura da página, não como remendo no final."],
 ["06","Pós-publicação","Manutenção e suporte disponíveis para o site continuar útil depois do lançamento."]
];
const DifferentialsSection=()=> <section className="bg-white px-4 py-24 md:py-40"><div className="container mx-auto max-w-[1380px]"><div className="grid gap-10 border-b border-black/[.1] pb-14 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><div><p className="text-[9px] font-semibold uppercase tracking-[.28em] text-[#2458d8]">Why Kubo / fundamentals</p><h2 className="mt-5 text-[3.4rem] font-heading font-semibold leading-[.87] tracking-[-.07em] text-[#08111f] sm:text-7xl md:text-[6.2rem]">Bonito é o começo.<br/><span className="text-black/[.24]">Precisa funcionar.</span></h2></div><p className="max-w-[500px] text-base leading-8 text-black/[.45] lg:justify-self-end">A percepção premium vem de decisões que o visitante vê — e de uma base técnica que ele sente na velocidade, clareza e facilidade de usar.</p></div><div>{rows.map((r,i)=><motion.div key={r[0]} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}} className="grid gap-4 border-b border-black/[.09] py-8 md:grid-cols-[.1fr_.34fr_.56fr] md:items-start md:py-10"><span className="text-[9px] font-semibold text-[#2458d8]">{r[0]}</span><h3 className="text-2xl font-heading font-semibold tracking-[-.04em] text-[#08111f] md:text-3xl">{r[1]}</h3><p className="max-w-[650px] text-sm leading-7 text-black/[.44]">{r[2]}</p></motion.div>)}</div></div></section>;
export default memo(DifferentialsSection);
