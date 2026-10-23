// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
import { writeFileSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const cidadesSrc = readFileSync(resolve("src/data/cidades.ts"), "utf8");
const cidadeSlugs = Array.from(cidadesSrc.matchAll(/slug:\s*"([a-z0-9-]+)"/g)).map((m) => m[1]);

const BASE_URL = "https://www.kuboweb.com.br";
const today = new Date().toISOString().split("T")[0];

const staticEntries = [
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

const cidadeEntries = cidadeSlugs.map((slug) => ({
  path: `/criacao-de-sites-${slug}`,
  changefreq: "monthly",
  priority: "0.6",
}));

const entries = [...staticEntries, ...cidadeEntries];

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...entries.map((entry) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${entry.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
      entry.priority ? `    <priority>${entry.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);
