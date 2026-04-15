import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
}

const SITE_URL = "https://www.kuboweb.com.br";
const SITE_NAME = "Kubo Web";
const OG_IMAGE = "https://www.kuboweb.com.br/og-image.png";

const SEO = ({ title, description, path = "/", noindex = false, jsonLd }: SEOProps) => {
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  // Build breadcrumb JSON-LD
  const breadcrumbItems = [
    { name: "Início", url: SITE_URL },
  ];
  if (path !== "/") {
    breadcrumbItems.push({ name: title, url });
  }
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1"} />
      <html lang="pt-BR" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Breadcrumb JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>

      {/* Custom JSON-LD */}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};

export default SEO;
