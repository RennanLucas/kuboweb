import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig, motion } from "framer-motion";
import { useEffect, lazy, Suspense } from "react";
import Index from "./pages/Index";
import KuboPreloader from "@/components/ui/KuboPreloader";
import ScrollProgress from "@/components/ui/ScrollProgress";

const CursorGlow = lazy(() => import("./components/ui/CursorGlow"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Servicos = lazy(() => import("./pages/Servicos"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Diagnostico = lazy(() => import("./pages/Diagnostico"));
const Faq = lazy(() => import("./pages/Faq"));
const Contato = lazy(() => import("./pages/Contato"));
const SitesInstitucionais = lazy(() => import("./pages/SitesInstitucionais"));
const LandingPages = lazy(() => import("./pages/LandingPages"));
const LojaVirtual = lazy(() => import("./pages/LojaVirtual"));
const Anuncios = lazy(() => import("./pages/Anuncios"));
const Manutencao = lazy(() => import("./pages/Manutencao"));
const Atendimento = lazy(() => import("./pages/Atendimento"));
const CidadeLanding = lazy(() => import("./pages/CidadeLanding"));
const GuiaInvestimentoSite = lazy(() => import("./pages/GuiaInvestimentoSite"));
const NotFound = lazy(() => import("./pages/NotFound"));
import MiniKuboLoader from "@/components/ui/MiniKuboLoader";

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <MiniKuboLoader />
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Automatic tracking delegator for _kw events
const TrackingListener = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const text = (target.textContent || "").toLowerCase();
      const ariaLabel = (target.getAttribute("aria-label") || "").toLowerCase();

      if (
        href.includes("wa.me") ||
        href.includes("whatsapp") ||
        text.includes("whatsapp") ||
        ariaLabel.includes("whatsapp")
      ) {
        if (typeof window !== "undefined" && typeof window._kw === "function") {
          window._kw("whatsapp_click", "botao_whatsapp");
        }
      } else if (
        text.includes("orçamento") ||
        text.includes("orcamento") ||
        text.includes("simular") ||
        ariaLabel.includes("orçamento") ||
        ariaLabel.includes("orcamento")
      ) {
        if (typeof window !== "undefined" && typeof window._kw === "function") {
          window._kw("button_click", "cta_orcamento");
        }
      }
    };

    const handleSubmit = () => {
      if (typeof window !== "undefined" && typeof window._kw === "function") {
        window._kw("form_submit", "formulario_contato");
      }
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("submit", handleSubmit, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("submit", handleSubmit, true);
    };
  }, []);

  return null;
};

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <MotionConfig reducedMotion="user">
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <KuboPreloader />
            <ScrollProgress />
            <TrackingListener />
            <BrowserRouter>
              <ScrollToTop />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/sobre" element={<Sobre />} />
                  <Route path="/servicos" element={<Servicos />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/portfolio/:slug" element={<ProjectDetail />} />
                  <Route path="/diagnostico" element={<Diagnostico />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/contato" element={<Contato />} />
                  <Route path="/servicos/sites-institucionais" element={<SitesInstitucionais />} />
                  <Route path="/servicos/landing-pages" element={<LandingPages />} />
                  <Route path="/servicos/loja-virtual" element={<LojaVirtual />} />
                  <Route path="/servicos/anuncios" element={<Anuncios />} />
                  <Route path="/manutencao" element={<Manutencao />} />
                  <Route path="/atendimento" element={<Atendimento />} />
                  <Route path="/criacao-de-sites-:slug/*" element={<CidadeLanding />} />
                  <Route path="/criacao-de-sites-*" element={<CidadeLanding />} />
                  <Route path="/guia/investimento-site-profissional" element={<GuiaInvestimentoSite />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <Suspense fallback={null}>
                <CursorGlow />
              </Suspense>
            </BrowserRouter>
          </TooltipProvider>
        </MotionConfig>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
