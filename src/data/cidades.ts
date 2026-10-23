export interface Cidade {
  slug: string;
  nome: string;
  estado: string;
  uf: string;
  regiao: "Sudeste" | "Sul" | "Centro-Oeste" | "Nordeste" | "Norte";
}

export const cidades: Cidade[] = [
  { slug: "sao-paulo", nome: "São Paulo", estado: "São Paulo", uf: "SP", regiao: "Sudeste" },
  { slug: "rio-de-janeiro", nome: "Rio de Janeiro", estado: "Rio de Janeiro", uf: "RJ", regiao: "Sudeste" },
  { slug: "belo-horizonte", nome: "Belo Horizonte", estado: "Minas Gerais", uf: "MG", regiao: "Sudeste" },
  { slug: "brasilia", nome: "Brasília", estado: "Distrito Federal", uf: "DF", regiao: "Centro-Oeste" },
  { slug: "salvador", nome: "Salvador", estado: "Bahia", uf: "BA", regiao: "Nordeste" },
  { slug: "fortaleza", nome: "Fortaleza", estado: "Ceará", uf: "CE", regiao: "Nordeste" },
  { slug: "curitiba", nome: "Curitiba", estado: "Paraná", uf: "PR", regiao: "Sul" },
  { slug: "porto-alegre", nome: "Porto Alegre", estado: "Rio Grande do Sul", uf: "RS", regiao: "Sul" },
  { slug: "recife", nome: "Recife", estado: "Pernambuco", uf: "PE", regiao: "Nordeste" },
  { slug: "manaus", nome: "Manaus", estado: "Amazonas", uf: "AM", regiao: "Norte" },
  { slug: "belem", nome: "Belém", estado: "Pará", uf: "PA", regiao: "Norte" },
  { slug: "goiania", nome: "Goiânia", estado: "Goiás", uf: "GO", regiao: "Centro-Oeste" },
  { slug: "campo-grande", nome: "Campo Grande", estado: "Mato Grosso do Sul", uf: "MS", regiao: "Centro-Oeste" },
  { slug: "cuiaba", nome: "Cuiabá", estado: "Mato Grosso", uf: "MT", regiao: "Centro-Oeste" },
  { slug: "florianopolis", nome: "Florianópolis", estado: "Santa Catarina", uf: "SC", regiao: "Sul" },
  { slug: "vitoria", nome: "Vitória", estado: "Espírito Santo", uf: "ES", regiao: "Sudeste" },
  { slug: "natal", nome: "Natal", estado: "Rio Grande do Norte", uf: "RN", regiao: "Nordeste" },
  { slug: "joao-pessoa", nome: "João Pessoa", estado: "Paraíba", uf: "PB", regiao: "Nordeste" },
  { slug: "maceio", nome: "Maceió", estado: "Alagoas", uf: "AL", regiao: "Nordeste" },
  { slug: "aracaju", nome: "Aracaju", estado: "Sergipe", uf: "SE", regiao: "Nordeste" },
  { slug: "teresina", nome: "Teresina", estado: "Piauí", uf: "PI", regiao: "Nordeste" },
  { slug: "sao-luis", nome: "São Luís", estado: "Maranhão", uf: "MA", regiao: "Nordeste" },
  { slug: "palmas", nome: "Palmas", estado: "Tocantins", uf: "TO", regiao: "Norte" },
  { slug: "porto-velho", nome: "Porto Velho", estado: "Rondônia", uf: "RO", regiao: "Norte" },
  { slug: "rio-branco", nome: "Rio Branco", estado: "Acre", uf: "AC", regiao: "Norte" },
  { slug: "boa-vista", nome: "Boa Vista", estado: "Roraima", uf: "RR", regiao: "Norte" },
  { slug: "macapa", nome: "Macapá", estado: "Amapá", uf: "AP", regiao: "Norte" },
  { slug: "campinas", nome: "Campinas", estado: "São Paulo", uf: "SP", regiao: "Sudeste" },
  { slug: "santos", nome: "Santos", estado: "São Paulo", uf: "SP", regiao: "Sudeste" },
  { slug: "niteroi", nome: "Niterói", estado: "Rio de Janeiro", uf: "RJ", regiao: "Sudeste" },
  { slug: "joinville", nome: "Joinville", estado: "Santa Catarina", uf: "SC", regiao: "Sul" },
  { slug: "ribeirao-preto", nome: "Ribeirão Preto", estado: "São Paulo", uf: "SP", regiao: "Sudeste" },
  { slug: "sorocaba", nome: "Sorocaba", estado: "São Paulo", uf: "SP", regiao: "Sudeste" },
  { slug: "uberlandia", nome: "Uberlândia", estado: "Minas Gerais", uf: "MG", regiao: "Sudeste" },
  { slug: "caxias-do-sul", nome: "Caxias do Sul", estado: "Rio Grande do Sul", uf: "RS", regiao: "Sul" },
  { slug: "londrina", nome: "Londrina", estado: "Paraná", uf: "PR", regiao: "Sul" },
  { slug: "maringa", nome: "Maringá", estado: "Paraná", uf: "PR", regiao: "Sul" },
  { slug: "sao-jose-dos-campos", nome: "São José dos Campos", estado: "São Paulo", uf: "SP", regiao: "Sudeste" },
  { slug: "feira-de-santana", nome: "Feira de Santana", estado: "Bahia", uf: "BA", regiao: "Nordeste" },
  { slug: "vila-velha", nome: "Vila Velha", estado: "Espírito Santo", uf: "ES", regiao: "Sudeste" },
];

export const getCidadeBySlug = (slug: string): Cidade | undefined =>
  cidades.find((cidade) => cidade.slug === slug);
