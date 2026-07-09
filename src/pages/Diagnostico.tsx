import { memo, useState, useRef, useCallback, useEffect, useMemo } from "react";
import { ArrowRight, ArrowLeft, RotateCcw, MessageCircle, Check, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import logoKuboweb from "@/assets/logo-kuboweb-new.webp";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

type Step =
  | "welcome"
  | "nome"
  | "segmento"
  | "objetivo"
  | "presenca_online"
  | "vende_hoje"
  | "pagamento_online"
  | "orcamento_anuncios"
  | "urgencia"
  | "resultado";

type Answers = {
  nome?: string;
  segmento?: string;
  objetivo?: string;
  presencaOnline?: string;
  vendeHoje?: string;
  pagamentoOnline?: string;
  orcamentoAnuncios?: string;
  urgencia?: string;
};

type Option = { label: string; value: string; desc?: string };

const OPTIONS: Record<string, Option[]> = {
  segmento: [
    { label: "Serviços", value: "servicos", desc: "Consultoria, advocacia, saúde, educação" },
    { label: "Comércio", value: "comercio", desc: "Loja física, varejo ou atacado" },
    { label: "Alimentação", value: "alimentacao", desc: "Restaurante, delivery, doces e bebidas" },
    { label: "Outro segmento", value: "outro", desc: "Indústria, tecnologia, entretenimento" },
  ],
  objetivo: [
    { label: "Vender online", value: "vender", desc: "Receber pedidos e pagamentos pela internet" },
    { label: "Captar clientes", value: "leads", desc: "Gerar contatos qualificados para venda" },
    { label: "Fortalecer marca", value: "marca", desc: "Credibilidade, presença e posicionamento" },
    { label: "Aumentar vendas", value: "escalar", desc: "Já vendo e quero escalar resultados" },
  ],
  presenca_online: [
    { label: "Não tenho presença digital", value: "nenhuma", desc: "Estou começando do zero" },
    { label: "Apenas redes sociais", value: "redes", desc: "Instagram, Facebook ou TikTok" },
    { label: "Tenho site, mas precisa melhorar", value: "site_ruim", desc: "Desatualizado, lento ou sem conversão" },
    { label: "Tenho site e quero escalar", value: "site_bom", desc: "Boa base, buscando crescimento" },
  ],
  vende_hoje: [
    { label: "Sim, vendo online", value: "sim", desc: "Quero aumentar o faturamento digital" },
    { label: "Sim, apenas presencial", value: "presencial", desc: "Quero levar o negócio para a internet" },
    { label: "Ainda não vendo", value: "nao", desc: "Estou estruturando minha oferta" },
  ],
  pagamento_online: [
    { label: "Sim, preciso receber online", value: "sim", desc: "Pix, cartão e boleto integrados" },
    { label: "Não, atendo presencialmente", value: "nao", desc: "Meu modelo não exige pagamento online" },
  ],
  orcamento_anuncios: [
    { label: "Quero investir em anúncios", value: "sim", desc: "Google Ads com gestão profissional" },
    { label: "Prefiro crescimento orgânico", value: "nao", desc: "SEO e conteúdo sem investimento em ads" },
    { label: "Ainda não decidi", value: "talvez", desc: "Quero entender melhor as opções" },
  ],
  urgencia: [
    { label: "Urgente", value: "urgente", desc: "Preciso começar nos próximos dias" },
    { label: "Em breve", value: "breve", desc: "Nos próximos 30 dias" },
    { label: "Estou pesquisando", value: "pesquisando", desc: "Ainda avaliando o melhor caminho" },
  ],
};

const QUESTION_META: Record<
  Exclude<Step, "welcome" | "resultado">,
  { category: string; question: string }
> = {
  nome: {
    category: "Identificação",
    question: "Para começar, como podemos te chamar?",
  },
  segmento: {
    category: "Segmento",
    question: "Qual é o segmento do seu negócio?",
  },
  objetivo: {
    category: "Objetivo de Negócio",
    question: "Qual seu principal objetivo digital agora?",
  },
  presenca_online: {
    category: "Presença Digital",
    question: "Como está sua presença online hoje?",
  },
  vende_hoje: {
    category: "Modelo de Venda",
    question: "Como está a venda dos seus produtos ou serviços?",
  },
  pagamento_online: {
    category: "Pagamento",
    question: "Precisa receber pagamentos pela internet?",
  },
  orcamento_anuncios: {
    category: "Aquisição",
    question: "Tem interesse em investir em anúncios no Google?",
  },
  urgencia: {
    category: "Cronograma",
    question: "Qual sua urgência para começar?",
  },
};

const STEP_FLOW: Step[] = [
  "welcome",
  "nome",
  "segmento",
  "objetivo",
  "presenca_online",
  "vende_hoje",
  "pagamento_online",
  "orcamento_anuncios",
  "urgencia",
  "resultado",
];

const whatsappBase = "https://wa.me/5511932197334?text=";

function getRecommendation(answers: Answers) {
  const { objetivo, vendeHoje, pagamentoOnline, orcamentoAnuncios, presencaOnline, segmento, nome } = answers;

  if (objetivo === "vender" && pagamentoOnline === "sim") {
    return {
      type: "loja",
      title: "Loja Virtual Profissional",
      subtitle: "Estrutura completa para vender online 24h",
      description:
        "Uma loja virtual otimizada para converter visitantes em clientes. Pagamento integrado, gestão de pedidos e escalabilidade para todo o Brasil.",
      benefits: [
        "Catálogo de produtos ilimitado",
        "Pagamento integrado: Pix, cartão e boleto",
        "Gestão de estoque e pedidos",
        "Otimização para Google (SEO)",
        "Operação automática 24 horas por dia",
      ],
      investimento: "A partir de R$ 1.497",
      prazo: "7 a 15 dias úteis",
      whatsappMsg: `Olá! Sou ${nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico no site e a recomendação foi Loja Virtual. Quero saber mais.`,
    };
  }

  if (objetivo === "leads") {
    return {
      type: "landing",
      title: "Landing Page de Alta Conversão",
      subtitle: "Página focada em transformar visitantes em leads",
      description:
        "Design estratégico, mensagem clara e integração direta com seu WhatsApp. Ideal para campanhas e captura qualificada.",
      benefits: [
        "Design direcionado à conversão",
        "Formulário inteligente e integração com WhatsApp",
        "Copywriting persuasivo",
        "Otimizada para Google Ads",
        "Carregamento ultra-rápido",
      ],
      investimento: "A partir de R$ 297",
      prazo: "5 a 10 dias úteis",
      whatsappMsg: `Olá! Sou ${nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico e quero criar uma Landing Page. Pode me ajudar?`,
    };
  }

  if ((objetivo === "escalar" || (objetivo === "vender" && vendeHoje === "sim")) && orcamentoAnuncios === "sim") {
    return {
      type: "anuncios",
      title: "Gestão de Google Ads",
      subtitle: "Apareça para quem está procurando agora",
      description:
        "Campanhas estruturadas para colocar seu negócio no topo das buscas no momento exato da decisão de compra.",
      benefits: [
        "Posicionamento no topo do Google",
        "Alcance de clientes com intenção de compra",
        "Controle total do orçamento investido",
        "Relatórios mensais detalhados",
        "Otimização contínua de campanhas",
      ],
      investimento: "R$ 297 a R$ 997/mês",
      prazo: "Setup em 3 a 5 dias úteis",
      whatsappMsg: `Olá! Sou ${nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico e quero investir em Google Ads.`,
    };
  }

  if (objetivo === "marca" || presencaOnline === "nenhuma" || presencaOnline === "redes") {
    return {
      type: "site",
      title: "Site Institucional Premium",
      subtitle: "Vitrine digital que transmite credibilidade",
      description:
        "Um site moderno, responsivo e otimizado para o Google. Seus clientes encontram você facilmente e entram em contato sem fricção.",
      benefits: [
        "Design moderno e responsivo",
        "Otimização para Google (SEO)",
        "Integração com WhatsApp e redes sociais",
        "Painel de gestão intuitivo",
        "Hospedagem e domínio inclusos",
      ],
      investimento: "A partir de R$ 697",
      prazo: "7 a 15 dias úteis",
      whatsappMsg: `Olá! Sou ${nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico e quero criar um Site Institucional.`,
    };
  }

  return {
    type: "combo",
    title: "Combo Estratégico Digital",
    subtitle: "Site + Landing Page para máximo resultado",
    description:
      "A combinação ideal: presença institucional para autoridade e landing page focada em converter visitantes em clientes.",
    benefits: [
      "Site institucional completo",
      "Landing page de alta conversão",
      "Integração com WhatsApp",
      "SEO otimizado",
      "Suporte técnico contínuo",
    ],
    investimento: "Consulte condições especiais",
    prazo: "10 a 20 dias úteis",
    whatsappMsg: `Olá! Sou ${nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico e quero o combo Site + Landing Page.`,
  };
}

const ResultCard = memo(({ recommendation }: { recommendation: ReturnType<typeof getRecommendation> }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="space-y-3">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
          Recomendação Personalizada
        </span>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          {recommendation.title}
        </h3>
        <p className="text-primary font-medium">{recommendation.subtitle}</p>
        <p className="text-muted-foreground leading-relaxed">{recommendation.description}</p>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold text-foreground uppercase tracking-wider">O que está incluso</p>
        <div className="grid gap-2">
          {recommendation.benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 text-primary" />
              </div>
              <span className="text-sm text-foreground/80">{b}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/40">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Investimento</p>
          <p className="text-lg font-bold text-primary">{recommendation.investimento}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Prazo estimado</p>
          <p className="text-sm font-semibold text-foreground">{recommendation.prazo}</p>
        </div>
      </div>

      <Button variant="whatsapp" size="xl" asChild className="w-full shadow-glow-sm">
        <a
          href={`${whatsappBase}${encodeURIComponent(recommendation.whatsappMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="w-5 h-5" />
          Falar com um consultor no WhatsApp
        </a>
      </Button>
    </motion.div>
  );
});
ResultCard.displayName = "ResultCard";

const Diagnostico = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<Step>("welcome");
  const [answers, setAnswers] = useState<Answers>({});
  const [nameInput, setNameInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [started, setStarted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addBotMessage = useCallback((text: string, onDone?: () => void) => {
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: Date.now(), text, sender: "bot" }]);
      onDone?.();
    }, 400 + Math.random() * 300);
  }, []);

  useEffect(() => {
    if (!started) {
      setStarted(true);
      setTimeout(() => addBotMessage("welcome"), 300);
    }
  }, [started, addBotMessage]);

  const getSmartNextStep = (current: Step, currentAnswers: Answers): Step => {
    const idx = STEP_FLOW.indexOf(current);
    let next = STEP_FLOW[idx + 1] || "resultado";
    if (next === "presenca_online" && currentAnswers.objetivo === "vender") next = "vende_hoje";
    if (next === "vende_hoje" && (currentAnswers.objetivo === "leads" || currentAnswers.objetivo === "marca"))
      next = "orcamento_anuncios";
    if (next === "pagamento_online" && (currentAnswers.objetivo === "leads" || currentAnswers.objetivo === "marca"))
      next = "orcamento_anuncios";
    if (next === "orcamento_anuncios" && currentAnswers.objetivo === "marca") next = "urgencia";
    return next;
  };

  const visibleSteps = useMemo(() => {
    const base: Exclude<Step, "welcome" | "resultado">[] = ["nome", "segmento", "objetivo"];
    if (answers.objetivo !== "vender") base.push("presenca_online");
    if (answers.objetivo === "vender" || answers.objetivo === "escalar") {
      base.push("vende_hoje", "pagamento_online");
    }
    if (answers.objetivo !== "marca") base.push("orcamento_anuncios");
    base.push("urgencia");
    return base;
  }, [answers]);

  const currentStepNumber = useMemo(() => {
    if (currentStep === "welcome") return 0;
    if (currentStep === "resultado") return visibleSteps.length;
    return visibleSteps.indexOf(currentStep) + 1;
  }, [currentStep, visibleSteps]);

  const totalSteps = visibleSteps.length;
  const progress = totalSteps > 0 ? (currentStepNumber / totalSteps) * 100 : 0;

  const handleOptionClick = (optionLabel: string, optionValue: string) => {
    setMessages((prev) => [...prev, { id: Date.now(), text: optionLabel, sender: "user" }]);
    const newAnswers = { ...answers };
    if (currentStep === "segmento") newAnswers.segmento = optionValue;
    if (currentStep === "objetivo") newAnswers.objetivo = optionValue;
    if (currentStep === "presenca_online") newAnswers.presencaOnline = optionValue;
    if (currentStep === "vende_hoje") newAnswers.vendeHoje = optionValue;
    if (currentStep === "pagamento_online") newAnswers.pagamentoOnline = optionValue;
    if (currentStep === "orcamento_anuncios") newAnswers.orcamentoAnuncios = optionValue;
    if (currentStep === "urgencia") newAnswers.urgencia = optionValue;
    setAnswers(newAnswers);
    const next = getSmartNextStep(currentStep, newAnswers);
    setCurrentStep(next);
    if (next === "resultado") {
      setShowResult(true);
    }
  };

  const handleStartClick = () => {
    setMessages((prev) => [...prev, { id: Date.now(), text: "Iniciar diagnóstico", sender: "user" }]);
    setCurrentStep("nome");
    setTimeout(() => inputRef.current?.focus(), 200);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    const name = nameInput.trim();
    setMessages((prev) => [...prev, { id: Date.now(), text: name, sender: "user" }]);
    setAnswers((prev) => ({ ...prev, nome: name }));
    setNameInput("");
    setCurrentStep("segmento");
  };

  const handleRestart = () => {
    setMessages([]);
    setAnswers({});
    setCurrentStep("welcome");
    setShowResult(false);
    setNameInput("");
    setStarted(false);
    setTimeout(() => setStarted(true), 50);
  };

  const handleBack = () => {
    const idx = STEP_FLOW.indexOf(currentStep);
    if (idx <= 1) return;
    let prev = STEP_FLOW[idx - 1];
    // Skip steps that would not have been shown based on current answers
    if (prev === "orcamento_anuncios" && answers.objetivo === "marca") prev = "objetivo";
    if (prev === "pagamento_online" && (answers.objetivo === "leads" || answers.objetivo === "marca")) prev = "objetivo";
    if (prev === "vende_hoje" && (answers.objetivo === "leads" || answers.objetivo === "marca")) prev = "objetivo";
    if (prev === "presenca_online" && answers.objetivo === "vender") prev = "objetivo";
    setCurrentStep(prev);
  };

  const canGoBack = currentStep !== "welcome" && currentStep !== "nome" && currentStep !== "resultado";

  const recommendation = currentStep === "resultado" ? getRecommendation(answers) : null;
  const currentOptions = !["welcome", "nome", "resultado"].includes(currentStep)
    ? OPTIONS[currentStep as keyof typeof OPTIONS]
    : null;

  const meta = currentStep !== "welcome" && currentStep !== "resultado" ? QUESTION_META[currentStep] : null;

  return (
    <main className="min-h-screen bg-background bg-gradient-mesh bg-noise">
      <SEO
        title="Consultoria Digital | Diagnóstico Gratuito"
        description="Diagnóstico estratégico gratuito da KuboWeb. Descubra a solução digital ideal para escalar seu negócio."
        path="/diagnostico"
      />
      <Header />

      <section className="pt-28 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border/50 bg-card shadow-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-12 min-h-[640px]">
              {/* Sidebar */}
              <div className="lg:col-span-4 bg-foreground text-background p-8 lg:p-10 flex flex-col justify-between">
                <div className="space-y-8">
                  <div>
                    <img
                      src={logoKuboweb}
                      alt="KuboWeb"
                      className="h-10 w-auto brightness-0 invert opacity-90"
                    />
                  </div>

                  <div className="space-y-4">
                    <h1
                      className="text-3xl lg:text-4xl font-semibold leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Diagnóstico de Estratégia Digital
                    </h1>
                    <p className="text-background/60 text-sm leading-relaxed">
                      Uma análise técnica conduzida para identificar gargalos de conversão e
                      oportunidades de escala no seu modelo atual.
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mt-10 lg:mt-0">
                  {currentStep !== "welcome" && currentStep !== "resultado" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-background/50">
                        <span>Progresso</span>
                        <span>
                          {currentStepNumber} / {totalSteps}
                        </span>
                      </div>
                      <div className="h-1.5 bg-background/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === "resultado" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-background/50">
                        <span>Status</span>
                        <span>Concluído</span>
                      </div>
                      <div className="h-1.5 bg-background/10 rounded-full overflow-hidden">
                        <div className="h-full w-full rounded-full bg-success" />
                      </div>
                    </div>
                  )}

                  <p className="text-[10px] uppercase tracking-[0.2em] text-background/40 font-semibold">
                    Consultoria Executiva KuboWeb
                  </p>
                </div>
              </div>

              {/* Main content */}
              <div className="lg:col-span-8 p-8 lg:p-12 flex flex-col justify-center bg-card">
                <AnimatePresence mode="wait">
                  {currentStep === "welcome" && (
                    <motion.div
                      key="welcome"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="max-w-xl mx-auto w-full space-y-8 text-center"
                    >
                      <div className="space-y-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                          Diagnóstico gratuito
                        </span>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                          Descubra a solução ideal para o seu negócio
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                          Responda a algumas perguntas rápidas e receba uma recomendação
                          estratégica personalizada para crescer online.
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-4 text-left">
                        {[
                          { label: "Rápido", desc: "Menos de 2 minutos" },
                          { label: "Gratuito", desc: "Sem compromisso" },
                          { label: "Personalizado", desc: "Para o seu cenário" },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="p-4 rounded-xl border border-border/40 bg-background/50"
                          >
                            <p className="text-sm font-semibold text-foreground">{item.label}</p>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </div>
                        ))}
                      </div>

                      <Button onClick={handleStartClick} size="xl" className="w-full sm:w-auto shadow-glow-sm">
                        Iniciar Diagnóstico
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  )}

                  {currentStep === "nome" && (
                    <motion.div
                      key="nome"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="max-w-xl mx-auto w-full space-y-8"
                    >
                      <div className="space-y-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                          {QUESTION_META.nome.category}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                          {QUESTION_META.nome.question}
                        </h2>
                      </div>

                      <form onSubmit={handleNameSubmit} className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-1">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            ref={inputRef}
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                            placeholder="Digite seu nome"
                            className="w-full h-14 pl-11 pr-4 rounded-xl bg-background border border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                          />
                        </div>
                        <Button type="submit" size="lg" className="h-14 px-8">
                          Continuar
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </form>
                    </motion.div>
                  )}

                  {currentOptions && meta && (
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="max-w-2xl mx-auto w-full space-y-6"
                    >
                      <div className="space-y-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                          {meta.category}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                          {meta.question}
                        </h2>
                      </div>

                      <div className="grid gap-3">
                        {currentOptions.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => handleOptionClick(opt.label, opt.value)}
                            className="group flex items-center justify-between w-full p-5 rounded-xl border border-border/60 bg-background hover:border-primary/50 hover:bg-primary/[0.03] transition-all duration-200 text-left"
                          >
                            <div>
                              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {opt.label}
                              </p>
                              {opt.desc && <p className="text-sm text-muted-foreground mt-0.5">{opt.desc}</p>}
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-border group-hover:border-primary flex items-center justify-center shrink-0 ml-4 transition-colors">
                              <div className="w-2.5 h-2.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === "resultado" && recommendation && (
                    <motion.div
                      key="resultado"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className="max-w-2xl mx-auto w-full"
                    >
                      <ResultCard recommendation={recommendation} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Footer actions */}
                <div className="max-w-2xl mx-auto w-full mt-10 pt-6 border-t border-border/30 flex items-center justify-between">
                  <button
                    onClick={handleRestart}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Recomeçar
                  </button>

                  {canGoBack && (
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Voltar
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Diagnostico;
