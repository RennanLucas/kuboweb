export interface Cidade {
  slug: string;
  nome: string;
  estado: string;
  uf: string;
  regiao: string;
  contexto: string;
}

export const cidades: Cidade[] = [
  { slug: "sao-paulo", nome: "São Paulo", estado: "São Paulo", uf: "SP", regiao: "Sudeste", contexto: "maior centro econômico do Brasil, com forte concorrência digital e consumidores exigentes" },
  { slug: "rio-de-janeiro", nome: "Rio de Janeiro", estado: "Rio de Janeiro", uf: "RJ", regiao: "Sudeste", contexto: "polo de turismo, serviços e comércio que exige presença digital de alto impacto visual" },
  { slug: "belo-horizonte", nome: "Belo Horizonte", estado: "Minas Gerais", uf: "MG", regiao: "Sudeste", contexto: "capital mineira em crescimento acelerado nos setores de tecnologia, serviços e indústria" },
  { slug: "brasilia", nome: "Brasília", estado: "Distrito Federal", uf: "DF", regiao: "Centro-Oeste", contexto: "centro político e administrativo do país, com público qualificado e alto poder de compra" },
  { slug: "salvador", nome: "Salvador", estado: "Bahia", uf: "BA", regiao: "Nordeste", contexto: "principal economia do Nordeste, com forte presença em turismo, comércio e serviços" },
  { slug: "fortaleza", nome: "Fortaleza", estado: "Ceará", uf: "CE", regiao: "Nordeste", contexto: "polo turístico e industrial em expansão, com mercado digital cada vez mais ativo" },
  { slug: "curitiba", nome: "Curitiba", estado: "Paraná", uf: "PR", regiao: "Sul", contexto: "referência em planejamento urbano e inovação, com público que valoriza design e qualidade" },
  { slug: "porto-alegre", nome: "Porto Alegre", estado: "Rio Grande do Sul", uf: "RS", regiao: "Sul", contexto: "centro econômico do Sul, com forte presença de indústrias, agronegócio e serviços" },
  { slug: "recife", nome: "Recife", estado: "Pernambuco", uf: "PE", regiao: "Nordeste", contexto: "polo de tecnologia do Nordeste (Porto Digital) com mercado em rápida transformação" },
  { slug: "manaus", nome: "Manaus", estado: "Amazonas", uf: "AM", regiao: "Norte", contexto: "principal centro industrial e comercial do Norte, com Zona Franca e mercado em expansão" },
  { slug: "belem", nome: "Belém", estado: "Pará", uf: "PA", regiao: "Norte", contexto: "capital paraense em destaque crescente, com setores de turismo, comércio e serviços em alta" },
  { slug: "goiania", nome: "Goiânia", estado: "Goiás", uf: "GO", regiao: "Centro-Oeste", contexto: "centro do agronegócio e dos serviços no Centro-Oeste, com mercado digital em expansão" },
  { slug: "campo-grande", nome: "Campo Grande", estado: "Mato Grosso do Sul", uf: "MS", regiao: "Centro-Oeste", contexto: "porta de entrada do agronegócio sul-mato-grossense, com forte demanda por presença digital" },
  { slug: "cuiaba", nome: "Cuiabá", estado: "Mato Grosso", uf: "MT", regiao: "Centro-Oeste", contexto: "capital do agronegócio, com economia aquecida e empresários investindo em digital" },
  { slug: "florianopolis", nome: "Florianópolis", estado: "Santa Catarina", uf: "SC", regiao: "Sul", contexto: "polo de tecnologia e turismo do Sul, com público exigente e alta concorrência online" },
  { slug: "vitoria", nome: "Vitória", estado: "Espírito Santo", uf: "ES", regiao: "Sudeste", contexto: "capital capixaba com economia diversificada em logística, comércio e serviços" },
  { slug: "natal", nome: "Natal", estado: "Rio Grande do Norte", uf: "RN", regiao: "Nordeste", contexto: "destino turístico nacional com forte demanda por sites profissionais no setor de serviços" },
  { slug: "joao-pessoa", nome: "João Pessoa", estado: "Paraíba", uf: "PB", regiao: "Nordeste", contexto: "capital paraibana em crescimento, com mercado local promissor para negócios digitais" },
  { slug: "maceio", nome: "Maceió", estado: "Alagoas", uf: "AL", regiao: "Nordeste", contexto: "polo turístico do Nordeste com setor de serviços em expansão e demanda crescente por sites" },
  { slug: "aracaju", nome: "Aracaju", estado: "Sergipe", uf: "SE", regiao: "Nordeste", contexto: "capital sergipana com qualidade de vida elevada e mercado digital em desenvolvimento" },
  { slug: "teresina", nome: "Teresina", estado: "Piauí", uf: "PI", regiao: "Nordeste", contexto: "centro econômico do Piauí, com setor de comércio e serviços em forte crescimento" },
  { slug: "sao-luis", nome: "São Luís", estado: "Maranhão", uf: "MA", regiao: "Nordeste", contexto: "capital maranhense com economia em expansão e demanda por presença digital profissional" },
  { slug: "palmas", nome: "Palmas", estado: "Tocantins", uf: "TO", regiao: "Norte", contexto: "capital mais jovem do Brasil, com mercado digital nascente e oportunidades únicas" },
  { slug: "porto-velho", nome: "Porto Velho", estado: "Rondônia", uf: "RO", regiao: "Norte", contexto: "polo logístico e comercial do Norte, com empresários buscando se destacar online" },
  { slug: "rio-branco", nome: "Rio Branco", estado: "Acre", uf: "AC", regiao: "Norte", contexto: "capital acreana com mercado local em desenvolvimento e necessidade de presença digital" },
  { slug: "boa-vista", nome: "Boa Vista", estado: "Roraima", uf: "RR", regiao: "Norte", contexto: "capital de Roraima com comércio e serviços em crescimento e mercado digital pouco explorado" },
  { slug: "macapa", nome: "Macapá", estado: "Amapá", uf: "AP", regiao: "Norte", contexto: "capital amapaense com setor de comércio e serviços em expansão e baixa concorrência digital" },
  { slug: "campinas", nome: "Campinas", estado: "São Paulo", uf: "SP", regiao: "Sudeste", contexto: "polo de tecnologia e inovação do interior paulista, com forte presença de empresas de alto padrão" },
  { slug: "santos", nome: "Santos", estado: "São Paulo", uf: "SP", regiao: "Sudeste", contexto: "principal porto da América Latina, com economia diversificada em logística, turismo e serviços" },
  { slug: "niteroi", nome: "Niterói", estado: "Rio de Janeiro", uf: "RJ", regiao: "Sudeste", contexto: "cidade vizinha ao Rio com alto poder de compra e mercado de serviços em forte expansão" },
  { slug: "joinville", nome: "Joinville", estado: "Santa Catarina", uf: "SC", regiao: "Sul", contexto: "maior cidade catarinense e polo industrial e tecnológico do Sul do Brasil" },
  { slug: "ribeirao-preto", nome: "Ribeirão Preto", estado: "São Paulo", uf: "SP", regiao: "Sudeste", contexto: "capital do agronegócio paulista, com economia aquecida e empresários investindo em digital" },
];

export const getCidadeBySlug = (slug: string): Cidade | undefined =>
  cidades.find((c) => c.slug === slug);
