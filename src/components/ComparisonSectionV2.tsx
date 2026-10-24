import { memo } from "react";

const rows = [
  ["Design", "Composição genérica", "Direção visual ligada ao posicionamento"],
  ["Hierarquia", "Tudo disputa atenção", "Conteúdo organizado por prioridade e decisão"],
  ["Mobile", "Desktop apenas reduzido", "Experiência pensada para telas pequenas"],
  ["Velocidade", "Peso cresce sem critério", "Estrutura pensada para carregamento eficiente"],
  ["SEO", "Configuração básica", "Fundamentos técnicos e semânticos desde o projeto"],
  ["Conversão", "CTA colocado no fim", "Jornada e ação principal definidas na estrutura"],
  ["Credibilidade", "Informação solta", "Conteúdo e prova apresentados com contexto"],
  ["UX", "Páginas isoladas", "Navegação e sistema visual consistentes"],
] as const;

const ComparisonSectionV2 = () => (
  <section className="bg-[#f4f4f1] px-4 py-16 md:py-28 lg:py-40">
    <div className="container mx-auto max-w-[1380px]">
      <div className="max-w-[930px]">
        <p className="text-[9px] font-semibold uppercase tracking-[.25em] text-[#2458d8]">Site comum × site estratégico</p>
        <h2 className="mt-4 text-[2.75rem] font-heading font-semibold leading-[.92] tracking-[-.065em] text-[#08111f] sm:text-[4rem] md:mt-5 md:text-[5.3rem] lg:text-[6.3rem] lg:leading-[.87]">
          Um site não deveria<br /><span className="text-black/[.24]">ser apenas bonito.</span>
        </h2>
        <p className="mt-5 max-w-[690px] text-[14px] leading-7 text-black/[.48] md:mt-7 md:text-base md:leading-8">
          Ele precisa comunicar valor, transmitir confiança e facilitar a decisão do cliente. Design, conteúdo e tecnologia precisam trabalhar juntos.
        </p>
      </div>

      <div className="mt-10 border-t border-black/[.11] md:mt-16">
        <div className="hidden grid-cols-[.22fr_.39fr_.39fr] border-b border-black/[.11] py-5 text-[8px] font-semibold uppercase tracking-[.18em] text-black/[.3] md:grid">
          <span>Critério</span><span>Site comum</span><span className="text-[#2458d8]">Site estratégico</span>
        </div>

        {rows.map(([criterion, common, strategic], index) => (
          <div key={criterion} className="grid grid-cols-[32px_1fr] gap-x-3 gap-y-2 border-b border-black/[.09] py-5 md:grid-cols-[.22fr_.39fr_.39fr] md:items-center md:gap-3 md:py-7">
            <span className="pt-1 font-mono text-[8px] text-[#2458d8] md:hidden">{String(index + 1).padStart(2, "0")}</span>
            <p className="text-[13px] font-semibold text-[#08111f] md:text-sm">{criterion}</p>
            <p className="col-start-2 text-[12px] leading-5 text-black/[.4] md:col-auto md:text-sm md:leading-6"><span className="mr-2 text-[7px] font-semibold uppercase tracking-[.12em] text-black/[.25] md:hidden">Comum</span>{common}</p>
            <p className="col-start-2 text-[12px] font-medium leading-5 text-[#08111f]/72 md:col-auto md:text-sm md:leading-6"><span className="mr-2 text-[7px] font-semibold uppercase tracking-[.12em] text-[#2458d8] md:hidden">Kubo</span>{strategic}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default memo(ComparisonSectionV2);
