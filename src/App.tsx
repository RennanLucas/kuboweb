import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect, lazy, Suspense } from "react";
import Index from "./pages/StudioHome";

const Sobre = lazy(() => import("./pages/Sobre"));
const Servicos = lazy(() => import("./pages/Servicos"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
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

const queryClient = new QueryClient();
const PageLoader = () => <div className="flex min-h-screen items-center justify-center bg-[#07101f]" aria-label="Carregando página"><div className="relative h-10 w-10"><div className="absolute inset-0 rounded-[14px] border border-white/12" /><div className="absolute inset-[9px] rounded-full bg-[#79a9ff] animate-pulse" /></div></div>;

const ScrollToTop = () => { const { pathname } = useLocation(); useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "auto" }); }, [pathname]); return null; };

const TrackingListener = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a, button"); if (!target) return;
      const href = target.getAttribute("href") || ""; const text = (target.textContent || "").toLowerCase(); const ariaLabel = (target.getAttribute("aria-label") || "").toLowerCase();
      if (href.includes("wa.me") || href.includes("whatsapp") || text.includes("whatsapp") || ariaLabel.includes("whatsapp")) { if (typeof window !== "undefined" && typeof window._kw === "function") window._kw("whatsapp_click", "botao_whatsapp"); }
      else if (text.includes("orçamento") || text.includes("orcamento") || text.includes("simular") || ariaLabel.includes("orçamento") || ariaLabel.includes("orcamento")) { if (typeof window !== "undefined" && typeof window._kw === "function") window._kw("button_click", "cta_orcamento"); }
    };
    const handleSubmit = () => { if (typeof window !== "undefined" && typeof window._kw === "function") window._kw("form_submit", "formulario_contato"); };
    document.addEventListener("click", handleClick, true); document.addEventListener("submit", handleSubmit, true);
    return () => { document.removeEventListener("click", handleClick, true); document.removeEventListener("submit", handleSubmit, true); };
  }, []);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return <AnimatePresence mode="wait" initial={false}><motion.div key={location.pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}><Suspense fallback={<PageLoader />}><Routes location={location}>
    <Route path="/" element={<Index />} /><Route path="/sobre" element={<Sobre />} /><Route path="/servicos" element={<Servicos />} /><Route path="/portfolio" element={<Portfolio />} /><Route path="/portfolio/:slug" element={<CaseStudy />} /><Route path="/diagnostico" element={<Diagnostico />} /><Route path="/faq" element={<Faq />} /><Route path="/contato" element={<Contato />} /><Route path="/servicos/sites-institucionais" element={<SitesInstitucionais />} /><Route path="/servicos/landing-pages" element={<LandingPages />} /><Route path="/servicos/loja-virtual" element={<LojaVirtual />} /><Route path="/servicos/anuncios" element={<Anuncios />} /><Route path="/manutencao" element={<Manutencao />} /><Route path="/atendimento" element={<Atendimento />} /><Route path="/criacao-de-sites-:slug/*" element={<CidadeLanding />} /><Route path="/criacao-de-sites-*" element={<CidadeLanding />} /><Route path="/guia/investimento-site-profissional" element={<GuiaInvestimentoSite />} /><Route path="*" element={<NotFound />} />
  </Routes></Suspense></motion.div></AnimatePresence>;
};

const App = () => <HelmetProvider><QueryClientProvider client={queryClient}><MotionConfig reducedMotion="user"><TooltipProvider><Toaster /><Sonner /><TrackingListener /><BrowserRouter><ScrollToTop /><AnimatedRoutes /></BrowserRouter></TooltipProvider></MotionConfig></QueryClientProvider></HelmetProvider>;
export default App;
