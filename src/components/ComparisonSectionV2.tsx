import { memo } from "react";
const rows=[
 ["Design","Composição genérica","Direção visual ligada ao posicionamento"],
 ["Velocidade","Depende do tema e plugins","Estrutura pensada para carregamento eficiente"],
 ["Mobile","Layout apenas reduzido","Experiência revisada para telas pequenas"],
 ["Conversão","CTA adicionado no fim","Jornada e ação principal definidas na estrutura"],
 ["Credibilidade","Informação sem hierarquia","Conteúdo e prova apresentados com contexto"],
 ["SEO","Configuração básica","Fundamentos técnicos e semânticos desde o projeto"],
 ["Experiência","Páginas isoladas","Sistema visual e navegação consistentes"]
];
const ComparisonSectionV2=()=> <section className="bg-[#f4f4f1] px-4 py-24 md:py-40"><div className="container mx-auto max-w-[1380px]"><div className="max-w-[930px]"><p className="text-[9px] font-semibold uppercase tracking-[.28em] text-[#2458d8]">Comparison / approach</p><h2 className="mt-5 text-[3.5rem] font-heading font-semibold leading-[.87] tracking-[-.075em] text-[#08111f] sm:text-7xl md:text-[6.3rem]">Um site não precisa<br/><span className="text-black/[.24]">só existir.</span></h2><p className="mt-7 max-w-[650px] text-base leading-8 text-black/[.45]">A diferença está menos na quantidade de efeitos e mais em como design, conteúdo e tecnologia trabalham juntos.</p></div><div className="mt-16 border-t border-black/[.11]"><div className="hidden grid-cols-[.22fr_.39fr_.39fr] border-b border-black/[.11] py-5 text-[8px] font-semibold uppercase tracking-[.18em] text-black/[.3] md:grid"><span>Critério</span><span>Site comum</span><span className="text-[#2458d8]">Abordagem Kubo</span></div>{rows.map(([a,b,c])=><div key={a} className="grid gap-3 border-b border-black/[.09] py-7 md:grid-cols-[.22fr_.39fr_.39fr] md:items-center"><p className="text-sm font-semibold text-[#08111f]">{a}</p><p className="text-sm leading-6 text-black/[.38]">{b}</p><p className="text-sm font-medium leading-6 text-[#08111f]/70">{c}</p></div>)}</div></div></section>;
export default memo(ComparisonSectionV2);
