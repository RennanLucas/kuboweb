import { memo } from "react";
const items=[
 ["01","Rápidos e responsivos","Estrutura leve e experiência consistente entre desktop e mobile."],
 ["02","Mobile-first","Decisões de layout pensadas para telas pequenas, não apenas reduzidas."],
 ["03","Projeto personalizado","Estrutura e direção visual definidas conforme negócio, público e objetivo."],
 ["04","Suporte próximo","Contato direto durante desenvolvimento, revisão e publicação."]
];
const TrustStrip=()=> <section aria-label="Princípios de entrega" className="bg-white px-4"><div className="container mx-auto grid max-w-[1380px] border-y border-black/[.09] md:grid-cols-4">{items.map(([n,t,d],i)=><div key={n} className={`py-7 md:px-6 md:py-8 ${i?"border-t border-black/[.08] md:border-l md:border-t-0":""}`}><div className="flex items-center gap-3"><span className="text-[8px] font-semibold text-[#2458d8]">{n}</span><p className="text-sm font-semibold tracking-[-.02em] text-[#08111f]">{t}</p></div><p className="mt-3 max-w-[270px] text-xs leading-6 text-black/[.42]">{d}</p></div>)}</div></section>;
export default memo(TrustStrip);
