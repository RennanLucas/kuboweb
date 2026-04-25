import { useEffect, useState } from "react";

/**
 * Returns true when the page footer is intersecting the viewport.
 * Used to hide floating widgets (WhatsApp, Chatbot) so they don't
 * cover the footer content.
 */
export const useFooterVisible = (offset = 80) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: `0px 0px -${offset}px 0px`, threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [offset]);

  return visible;
};
