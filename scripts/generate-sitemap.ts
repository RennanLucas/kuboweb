// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";
import { cidades } from "../src/data/cidades";

const BASE_URL = "https://www.kuboweb.com.br";
const today = new Date().toISOString().split("T")[0];

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/sobre", changefreq: "monthly", priority: "0.8" },
  { path: "/servicos", changefreq: "monthly", priority: "0.9" },
  { path: "/portfolio", changefreq: "weekly", priority: "0.8" },
  { path: "/diagnostico", changefreq: "monthly", priority: "0.8" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/contato", changefreq: "monthly", priority: "0.7" },
  { path: "/manutencao", changefreq: "monthly", priority: "0.7" },
  { path: "/atendimento", changefreq: "monthly", priority: "0.9" },
  { path: "/servicos/sites-institucionais", changefreq: "monthly", priority: "0.7" },
  { path: "/servicos/landing-pages", changefreq: "monthly", priority: "0.7" },
  { path: "/servicos/loja-virtual", changefreq: "monthly", priority: "0.7" },
  { path: "/servicos/anuncios", changefreq: "monthly", priority: "0.7" },
];

const portfolioSlugs = [
  "escritorio-advocacia",
  "clinica-odontologica",
  "loja-moda-feminina",
  "consultoria-financeira",
  "construtora-engenharia",
  "curso-online-tecnologia",
  "restaurante-gastronomia",
  "imobiliaria-premium",
  "academia-fitness",
  "petshop-ecommerce",
];

const cidadeEntries: SitemapEntry[] = cidades.map((c) => ({
  path: `/criacao-de-sites-${c.slug}`,
  changefreq: "monthly",
  priority: "0.6",
}));

const portfolioEntries: SitemapEntry[] = portfolioSlugs.map((slug) => ({
  path: `/portfolio/${slug}`,
  changefreq: "monthly",
  priority: "0.6",
}));

const entries = [...staticEntries, ...cidadeEntries, ...portfolioEntries];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
