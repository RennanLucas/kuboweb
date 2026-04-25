import { useEffect } from "react";
import imgSites from "@/assets/services/sites-institucionais.webp";
import imgLandings from "@/assets/services/landing-pages.webp";

/**
 * Injects <link rel="preload" as="image"> for the LCP images of the homepage
 * (first two service cards, which appear right below the hero).
 * Uses the same Vite-hashed asset URLs as the components consuming them.
 */
const lcpImages = [imgSites, imgLandings];

const PreloadLcpImages = () => {
  useEffect(() => {
    const links: HTMLLinkElement[] = lcpImages.map((href, i) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = href;
      link.type = "image/webp";
      if (i === 0) link.fetchPriority = "high";
      document.head.appendChild(link);
      return link;
    });
    return () => {
      links.forEach((l) => l.parentNode?.removeChild(l));
    };
  }, []);

  return null;
};

export default PreloadLcpImages;
