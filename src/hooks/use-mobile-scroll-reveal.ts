import { useEffect, useRef } from "react";

/**
 * Adds 'revealed' class to elements with 'mobile-reveal' class
 * when they enter the viewport on mobile devices.
 */
export function useMobileScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on mobile
    if (window.matchMedia("(min-width: 768px)").matches) return;

    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".mobile-reveal");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
