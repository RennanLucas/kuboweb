import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { componentTagger } from "lovable-tagger";

const SITE_URL = "https://www.kuboweb.com.br";

type SeoRoute = {
  path: string;
  title: string;
  description: string;
};

const staticSeoRoutes: SeoRoute[] = [
  {
    path: "/sobre",
    title: "Sobre a Kubo Web | Kubo Web",
    description: "Conheça a Kubo Web e a forma como criamos sites, landing pages, lojas virtuais e projetos digitais para negócios no Brasil.",
  },
  {
    path: "/servicos",
    title: "Serviços | Kubo Web",
    description: "Sites institucionais, landing pages, lojas virtuais e Google Ads com estrutura clara, design responsivo e atendimento direto.",
  },
  {
    path: "/portfolio",
    title: "Portfólio | Kubo Web",
    description: "Veja projetos publicados pela Kubo Web e acesse os sites reais para conhecer o trabalho.",
  },
  {
    path: "/diagnostico",
    title: "Diagnóstico de Projeto | Kubo Web",
    description: "Responda algumas perguntas sobre seu negócio e organize as informações iniciais para um projeto digital com a Kubo Web.",
  },
  {
    path: "/faq",
    title: "Perguntas Frequentes | Kubo Web",
    description: "Dúvidas sobre criação de sites, preços, prazos, SEO, publicação e manutenção na Kubo Web.",
  },
  {
    path: "/contato",
    title: "Contato | Kubo Web",
    description: "Fale com a Kubo Web sobre criação de sites, landing pages, lojas virtuais, Google Ads e manutenção.",
  },
  {
    path: "/servicos/sites-institucionais",
    title: "Sites Institucionais | Kubo Web",
    description: "Criação de sites institucionais profissionais, responsivos e estruturados para apresentar sua empresa com clareza e credibilidade.",
  },
  {
    path: "/servicos/landing-pages",
    title: "Landing Pages | Kubo Web",
    description: "Criação de landing pages profissionais para campanhas, ofertas, lançamentos e geração de contatos, com design responsivo e caminho claro até a ação.",
  },
  {
    path: "/servicos/loja-virtual",
    title: "Lojas Virtuais | Kubo Web",
    description: "Criação de lojas virtuais com catálogo, experiência responsiva e integrações definidas conforme a operação do negócio.",
  },
  {
    path: "/servicos/anuncios",
    title: "Google Ads | Kubo Web",
    description: "Gestão de Google Ads com campanhas estruturadas conforme objetivo, mercado, página de destino e orçamento do negócio.",
  },
  {
    path: "/manutencao",
    title: "Manutenção de Sites | Kubo Web",
    description: "Manutenção de sites para atualizações, ajustes e acompanhamento contínuo, com escopo definido conforme a necessidade do projeto.",
  },
  {
    path: "/atendimento",
    title: "Criação de Sites no Brasil | Kubo Web",
    description: "Atendimento online para criação de sites, landing pages, lojas virtuais e projetos digitais em diferentes cidades do Brasil.",
  },
  {
    path: "/guia/investimento-site-profissional",
    title: "Quanto investir em um site profissional? | Kubo Web",
    description: "Entenda o que influencia o investimento em um site profissional e como escopo, conteúdo, design, integrações e manutenção afetam o projeto.",
  },
];

const escapeAttribute = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const replaceMeta = (html: string, selector: "name" | "property", key: string, value: string) => {
  const pattern = new RegExp(`<meta\\s+${selector}="${key}"\\s+content="[^"]*"\\s*\\/>`, "m");
  return html.replace(pattern, `<meta ${selector}="${key}" content="${escapeAttribute(value)}" />`);
};

const withRouteSeo = (sourceHtml: string, route: SeoRoute) => {
  const url = `${SITE_URL}${route.path}`;
  let html = sourceHtml.replace(/<title>[\s\S]*?<\/title>/, `<title>${route.title}</title>`);

  html = replaceMeta(html, "name", "description", route.description);
  html = replaceMeta(html, "property", "og:url", url);
  html = replaceMeta(html, "property", "og:title", route.title);
  html = replaceMeta(html, "property", "og:description", route.description);
  html = replaceMeta(html, "property", "og:image:alt", route.title);
  html = replaceMeta(html, "name", "twitter:title", route.title);
  html = replaceMeta(html, "name", "twitter:description", route.description);
  html = replaceMeta(html, "name", "twitter:image:alt", route.title);

  html = html.replace(
    /<link rel="alternate" hreflang="pt-BR" href="[^"]*" \/>/,
    `<link rel="alternate" hreflang="pt-BR" href="${url}" />`,
  );
  html = html.replace(
    /<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/,
    `<link rel="alternate" hreflang="x-default" href="${url}" />`,
  );
  html = html.replace(
    "    <!-- Canonical is set per-route via src/components/SEO.tsx -->",
    `    <link rel="canonical" href="${url}" />\n\n    <!-- Canonical is also refreshed client-side via src/components/SEO.tsx -->`,
  );

  return html;
};

const routeSeoHtmlPlugin = (): Plugin => ({
  name: "route-seo-html",
  apply: "build",
  closeBundle() {
    const distDir = path.resolve(__dirname, "dist");
    const baseHtml = readFileSync(path.join(distDir, "index.html"), "utf8");
    const cidadesSrc = readFileSync(path.resolve(__dirname, "src/data/cidades.ts"), "utf8");

    const cityRoutes: SeoRoute[] = Array.from(
      cidadesSrc.matchAll(/\{\s*slug:\s*"([^"]+)",\s*nome:\s*"([^"]+)",\s*estado:\s*"[^"]+",\s*uf:\s*"([^"]+)"/g),
    ).map((match) => {
      const [, slug, nome, uf] = match;
      return {
        path: `/criacao-de-sites-${slug}`,
        title: `Criação de Sites em ${nome} ${uf} | Kubo Web`,
        description: `Criação de sites profissionais, landing pages, lojas virtuais e Google Ads para negócios de ${nome}/${uf}, com atendimento online.`,
      };
    });

    for (const route of [...staticSeoRoutes, ...cityRoutes]) {
      const routeDir = path.join(distDir, route.path.replace(/^\//, ""));
      mkdirSync(routeDir, { recursive: true });
      writeFileSync(path.join(routeDir, "index.html"), withRouteSeo(baseHtml, route), "utf8");
    }

    console.log(`route SEO HTML written (${staticSeoRoutes.length + cityRoutes.length} routes)`);
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), routeSeoHtmlPlugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-router": ["react-router-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-radix": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-tabs",
            "@radix-ui/react-tooltip",
          ],
        },
      },
    },
  },
}));
