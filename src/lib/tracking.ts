declare global {
  interface Window {
    _kw?: ((event: string, label: string) => void) & { q?: any[] };
  }
}

export const trackKW = (
  event: "whatsapp_click" | "form_submit" | "button_click" | string,
  label: string
) => {
  try {
    if (typeof window !== "undefined") {
      if (typeof window._kw === "function") {
        window._kw(event, label);
      } else {
        // Queue if tracker script hasn't loaded yet
        window._kw = window._kw || function () {
          (window._kw!.q = window._kw!.q || []).push(arguments);
        };
        window._kw(event, label);
      }
    }
  } catch (err) {
    console.warn("Tracking error:", err);
  }
};

export const trackWhatsAppClick = (label = "botao_whatsapp") => {
  trackKW("whatsapp_click", label);
};

export const trackFormSubmit = (label = "formulario_contato") => {
  trackKW("form_submit", label);
};

export const trackCtaClick = (label = "cta_orcamento") => {
  trackKW("button_click", label);
};
