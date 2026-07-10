import { memo, useState, useRef, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MessageCircle, User, Sparkles, ArrowRight, X, RotateCcw, Zap, TrendingUp, ShoppingCart, Globe, Target, Megaphone, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
  isResult?: boolean;
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

const OPTIONS: Record<string, { label: string; emoji: string; value: string; desc?: string }[]> = {
  segmento: [
    { label: "Serviços", emoji: "🔧", value: "servicos", desc: "Consultoria, advocacia, saúde..." },
    { label: "Comércio", emoji: "🏪", value: "comercio", desc: "Loja física ou online" },
    { label: "Alimentação", emoji: "🍕", value: "alimentacao", desc: "Restaurante, delivery, doces..." },
    { label: "Outro", emoji: "💼", value: "outro", desc: "Outro tipo de negócio" },
  ],
  objetivo: [
    { label: "Vender online", emoji: "💰", value: "vender", desc: "Receber pedidos e pagamentos" },
    { label: "Captar clientes", emoji: "📩", value: "leads", desc: "Gerar contatos qualificados" },
    { label: "Fortalecer marca", emoji: "🏢", value: "marca", desc: "Presença e credibilidade" },
    { label: "Aumentar vendas", emoji: "📈", value: "escalar", desc: "Já vendo, quero crescer" },
  ],
  presenca_online: [
    { label: "Não tenho nada", emoji: "🆕", value: "nenhuma" },
    { label: "Só redes sociais", emoji: "📱", value: "redes" },
    { label: "Tenho site, mas está ruim", emoji: "😕", value: "site_ruim" },
    { label: "Tenho site bom", emoji: "✅", value: "site_bom" },
  ],
  vende_hoje: [
    { label: "Sim, mas quero mais", emoji: "📊", value: "sim" },
    { label: "Sim, presencialmente", emoji: "🏬", value: "presencial" },
    { label: "Ainda não vendo", emoji: "🚀", value: "nao" },
  ],
  pagamento_online: [
    { label: "Sim, preciso", emoji: "💳", value: "sim" },
    { label: "Não, só presencial", emoji: "🤝", value: "nao" },
  ],
  orcamento_anuncios: [
    { label: "Sim, quero investir", emoji: "📊", value: "sim" },
    { label: "Prefiro orgânico", emoji: "🌱", value: "nao" },
    { label: "Não sei ainda", emoji: "🤔", value: "talvez" },
  ],
  urgencia: [
    { label: "Urgente (dias)", emoji: "⚡", value: "urgente" },
    { label: "Em breve (semanas)", emoji: "📅", value: "breve" },
    { label: "Estou pesquisando", emoji: "🔍", value: "pesquisando" },
  ],
};

const RESULT_ICONS: Record<string, typeof Globe> = {
  loja: ShoppingCart,
  landing: Target,
  anuncios: Megaphone,
  site: Globe,
  combo: Zap,
};

function getRecommendation(answers: Answers) {
  const { objetivo, vendeHoje, pagamentoOnline, orcamentoAnuncios, presencaOnline, segmento, urgencia } = answers;

  // Loja Virtual
  if (objetivo === "vender" && pagamentoOnline === "sim") {
    return {
      type: "loja",
      title: "Loja Virtual Profissional",
      subtitle: "A solução ideal para vender online 24h",
      description: "Com uma loja virtual você vende para todo o Brasil, aceita Pix, cartão e boleto, e gerencia tudo pelo celular. Seus clientes compram a qualquer hora.",
      benefits: [
        "Catálogo de produtos ilimitado",
        "Pagamento integrado (Pix, cartão, boleto)",
        "Gestão de estoque e pedidos",
        "Otimizado para Google (SEO)",
        "Funciona 24 horas por dia",
      ],
      investimento: "A partir de R$ 1.497",
      prazo: "7 a 15 dias úteis",
      whatsappMsg: `Olá! Sou ${answers.nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico no site e a recomendação foi Loja Virtual. Quero saber mais!`,
    };
  }

  // Landing Page
  if (objetivo === "leads") {
    return {
      type: "landing",
      title: "Landing Page de Alta Conversão",
      subtitle: "Transforme visitantes em clientes",
      description: "Uma página focada 100% em conversão, perfeita para campanhas. Com design estratégico, formulário otimizado e integração direta com seu WhatsApp.",
      benefits: [
        "Design focado em conversão",
        "Formulário de captação inteligente",
        "Integração com WhatsApp",
        "Otimizada para Google Ads",
        "Carregamento ultra-rápido",
      ],
      investimento: "A partir de R$ 297",
      prazo: "5 a 10 dias úteis",
      whatsappMsg: `Olá! Sou ${answers.nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico no site e quero criar uma Landing Page para captar leads. Pode me ajudar?`,
    };
  }

  // Google Ads
  if ((objetivo === "escalar" || (objetivo === "vender" && vendeHoje === "sim")) && orcamentoAnuncios === "sim") {
    return {
      type: "anuncios",
      title: "Gestão de Google Ads",
      subtitle: "Apareça para quem está procurando agora",
      description: "Com Google Ads, seu negócio aparece no topo das buscas exatamente quando o cliente procura pelo que você oferece. Resultados mensuráveis desde o primeiro dia.",
      benefits: [
        "Apareça no topo do Google",
        "Alcance clientes prontos para comprar",
        "Orçamento controlado por você",
        "Relatórios mensais detalhados",
        "Otimização contínua de campanhas",
      ],
      investimento: "R$ 297 a R$ 997/mês",
      prazo: "Setup em 3 a 5 dias úteis",
      whatsappMsg: `Olá! Sou ${answers.nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico e quero investir em Google Ads. Pode me ajudar?`,
    };
  }

  // Site Institucional
  if (objetivo === "marca" || presencaOnline === "nenhuma" || presencaOnline === "redes") {
    return {
      type: "site",
      title: "Site Institucional Premium",
      subtitle: "Sua vitrine digital profissional",
      description: "Um site moderno que transmite credibilidade e profissionalismo. Seus clientes encontram você no Google, conhecem seus serviços e entram em contato facilmente.",
      benefits: [
        "Design moderno e responsivo",
        "Otimizado para Google (SEO)",
        "Integração com WhatsApp e redes sociais",
        "Painel de gestão fácil",
        "Hospedagem e domínio inclusos",
      ],
      investimento: "A partir de R$ 697",
      prazo: "7 a 15 dias úteis",
      whatsappMsg: `Olá! Sou ${answers.nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico e quero criar um Site Institucional. Pode me ajudar?`,
    };
  }

  // Combo
  return {
    type: "combo",
    title: "Combo Estratégico Digital",
    subtitle: "Site + Landing Page para máximo resultado",
    description: "A combinação perfeita: um site institucional para sua presença online e uma landing page focada em converter visitantes em clientes reais.",
    benefits: [
      "Site institucional completo",
      "Landing page de conversão",
      "Integração com WhatsApp",
      "SEO otimizado",
      "Suporte e manutenção",
    ],
    investimento: "Consulte condições especiais",
    prazo: "10 a 20 dias úteis",
    whatsappMsg: `Olá! Sou ${answers.nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico e quero um combo Site + Landing Page. Pode me ajudar?`,
  };
}

const QUESTIONS: Record<string, string> = {
  welcome:
    "Olá! 👋 Sou o consultor digital da KuboWeb.\n\nVou fazer um diagnóstico rápido do seu negócio e recomendar a melhor solução digital para você.\n\n🕐 Leva menos de 1 minuto e é 100% gratuito.",
  nome: "Para começar, como posso te chamar?",
  segmento: "Qual é o segmento do seu negócio?",
  objetivo: "E qual seu principal objetivo agora?",
  presenca_online: "Como está sua presença online hoje?",
  vende_hoje: "Você já vende seus produtos ou serviços?",
  pagamento_online: "Precisa receber pagamentos online?",
  orcamento_anuncios: "Tem interesse em investir em anúncios no Google?",
  urgencia: "Qual sua urgência para começar?",
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

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="flex items-center gap-2 px-4 py-3"
  >
    <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 bg-primary/10 border border-primary/20 flex items-center justify-center">
      <ClipboardCheck className="w-3.5 h-3.5 text-primary" />
    </div>
    <div className="flex items-center gap-1.5 bg-accent border border-border/30 rounded-2xl px-4 py-2.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-primary/50"
          animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
        />
      ))}
    </div>
  </motion.div>
);

const ProgressBar = ({ step }: { step: Step }) => {
  const steps = STEP_FLOW.filter((s): s is Exclude<Step, "welcome" | "resultado"> => s !== "welcome" && s !== "resultado");
  const currentIdx = steps.indexOf(step as typeof steps[number]);
  const progress = step === "resultado" ? 100 : step === "welcome" ? 0 : ((currentIdx + 1) / steps.length) * 100;

  if (step === "welcome") return null;

  return (
    <div className="px-4 py-1.5 bg-accent/50">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">
          {step === "resultado" ? "Diagnóstico completo" : "Diagnóstico em andamento"}
        </span>
        <span className="text-[10px] text-primary font-semibold">{Math.round(progress)}%</span>
      </div>
      <div className="h-1 rounded-full bg-border/50 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const ResultCard = memo(({ recommendation, nome }: { recommendation: ReturnType<typeof getRecommendation>; nome?: string }) => {
  const Icon = RESULT_ICONS[recommendation.type] || Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="mx-4 mt-2"
    >
      <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-4 space-y-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">{recommendation.title}</p>
            <p className="text-xs text-primary font-medium">{recommendation.subtitle}</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">{recommendation.description}</p>

        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold text-foreground uppercase tracking-wider">O que está incluso:</p>
          {recommendation.benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="flex items-center gap-2"
            >
              <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
              <span className="text-xs text-foreground/80">{b}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border/30">
          <div>
            <p className="text-[10px] text-muted-foreground">Investimento</p>
            <p className="text-sm font-bold text-primary">{recommendation.investimento}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-muted-foreground">Prazo</p>
            <p className="text-xs font-semibold text-foreground">{recommendation.prazo}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
ResultCard.displayName = "ResultCard";

const ChatMessage = memo(({ message }: { message: Message }) => {
  const isBot = message.sender === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn("flex gap-2 px-4", isBot ? "justify-start" : "justify-end")}
    >
      {isBot && (
        <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 mt-0.5 bg-primary/10 border border-primary/20 flex items-center justify-center">
          <ClipboardCheck className="w-3.5 h-3.5 text-primary" />
        </div>
      )}
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-line",
          isBot
            ? "bg-accent border border-border/30 text-foreground rounded-tl-md"
            : "bg-primary text-primary-foreground rounded-tr-md"
        )}
      >
        {message.text}
      </div>
      {!isBot && (
        <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
          <User className="w-3.5 h-3.5 text-primary" />
        </div>
      )}
    </motion.div>
  );
});
ChatMessage.displayName = "ChatMessage";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<Step>("welcome");
  const [answers, setAnswers] = useState<Answers>({});
  const [isTyping, setIsTyping] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToBottom = () => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, 100);
  };

  const addBotMessage = useCallback((text: string, onDone?: () => void) => {
    setIsTyping(true);
    scrollToBottom();
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { id: Date.now(), text, sender: "bot" }]);
      scrollToBottom();
      onDone?.();
    }, 300 + Math.random() * 200);
  }, []);

  const handleOpen = () => {
    if (location.pathname === "/diagnostico") {
      const element = document.getElementById("diagnostico-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/diagnostico");
    }
  };

  const getSmartNextStep = (current: Step, currentAnswers: Answers): Step => {
    const idx = STEP_FLOW.indexOf(current);
    let next = STEP_FLOW[idx + 1] || "resultado";

    // Skip logic based on answers
    if (next === "presenca_online" && currentAnswers.objetivo === "vender") {
      next = "vende_hoje";
    }
    if (next === "vende_hoje" && (currentAnswers.objetivo === "leads" || currentAnswers.objetivo === "marca")) {
      next = "orcamento_anuncios";
    }
    if (next === "pagamento_online" && (currentAnswers.objetivo === "leads" || currentAnswers.objetivo === "marca")) {
      next = "orcamento_anuncios";
    }
    if (next === "orcamento_anuncios" && currentAnswers.objetivo === "marca") {
      next = "urgencia";
    }

    return next;
  };

  const handleOptionClick = (optionLabel: string, optionValue: string) => {
    const userMsg: Message = { id: Date.now(), text: optionLabel, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    scrollToBottom();

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
      addBotMessage(
        `Perfeito, ${newAnswers.nome || ""}! 🎯\n\nAnalisei suas respostas e tenho a recomendação ideal para o seu negócio:`,
        () => setShowResult(true)
      );
    } else {
      addBotMessage(QUESTIONS[next]);
    }
  };

  const handleStartClick = () => {
    setMessages((prev) => [...prev, { id: Date.now(), text: "Vamos lá! 🚀", sender: "user" }]);
    scrollToBottom();
    setCurrentStep("nome");
    addBotMessage(QUESTIONS.nome, () => {
      setTimeout(() => inputRef.current?.focus(), 200);
    });
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    const name = nameInput.trim();
    setMessages((prev) => [...prev, { id: Date.now(), text: name, sender: "user" }]);
    setAnswers((prev) => ({ ...prev, nome: name }));
    setNameInput("");
    scrollToBottom();
    setCurrentStep("segmento");
    addBotMessage(`Prazer, ${name}! 😊\n\n${QUESTIONS.segmento}`);
  };

  const handleRestart = () => {
    setMessages([]);
    setAnswers({});
    setCurrentStep("welcome");
    setShowResult(false);
    setNameInput("");
    setTimeout(() => addBotMessage(QUESTIONS.welcome), 300);
  };

  const recommendation = currentStep === "resultado" ? getRecommendation(answers) : null;
  const currentOptions = !["welcome", "nome", "resultado"].includes(currentStep) ? OPTIONS[currentStep as keyof typeof OPTIONS] : null;

  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-hide tooltip after 8 seconds, re-show every 30s
  useEffect(() => {
    if (isOpen) return;
    if (showTooltip) {
      const hide = setTimeout(() => setShowTooltip(false), 8000);
      return () => clearTimeout(hide);
    } else {
      const show = setTimeout(() => setShowTooltip(true), 45000);
      return () => clearTimeout(show);
    }
  }, [isOpen, showTooltip]);

  return (
    <>
      {/* Toggle button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 left-4 sm:left-6 z-50 flex items-end gap-2"
          >
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: -10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -10, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border border-border/40 rounded-xl rounded-bl-sm px-3 py-2.5 shadow-lg cursor-pointer max-w-[170px] order-2"
                  onClick={handleOpen}
                >
                  <p className="text-[11px] font-semibold text-foreground">🚀 Consultoria grátis</p>
                  <p className="text-[10px] text-primary font-medium mt-0.5">2 min →</p>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button
              onClick={handleOpen}
              className="w-14 h-14 rounded-full overflow-hidden shadow-lg flex items-center justify-center shrink-0 border-2 border-primary/30 bg-white relative group cursor-pointer"
              aria-label="Abrir consultor digital"
              animate={{
                scale: [1, 1.06, 1],
                rotate: [0, -3, 3, -2, 0],
              }}
              transition={{
                scale: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 },
              }}
              whileHover={{
                scale: 1.18,
                rotate: [0, -8, 8, -4, 0],
                transition: { rotate: { duration: 0.5 }, scale: { duration: 0.2 } },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/15"
                animate={{ scale: [1, 1.6, 1.8], opacity: [0.5, 0.2, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/10"
                animate={{ scale: [1, 1.4, 1.6], opacity: [0.4, 0.15, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut", delay: 0.4 }}
              />
              <div className="relative z-10 w-full h-full flex items-center justify-center bg-card rounded-full">
                <ClipboardCheck className="w-6 h-6 text-primary" />
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 left-4 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[560px] max-h-[75vh] rounded-2xl border border-border/30 bg-card shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-border/30 bg-card">
              <div className="flex items-center gap-3">
              <div className="relative">
                <motion.div
                  className="w-10 h-10 rounded-full overflow-hidden border border-primary/20 bg-primary/10 flex items-center justify-center"
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <ClipboardCheck className="w-5 h-5 text-primary" />
                </motion.div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-success border-2 border-card" />
              </div>
                <div>
                  <p className="text-sm font-bold text-foreground tracking-tight">Consultor KuboWeb</p>
                  <p className="text-[11px] text-muted-foreground">Consultoria digital gratuita</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
                aria-label="Fechar chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Progress bar */}
            <ProgressBar step={currentStep} />

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto py-3 space-y-2.5">
              <AnimatePresence mode="popLayout">
                {messages.map((msg) => (
                  <ChatMessage key={msg.id} message={msg} />
                ))}
              </AnimatePresence>
              <AnimatePresence>{isTyping && <TypingIndicator />}</AnimatePresence>

              {/* Result card inline */}
              {showResult && recommendation && (
                <ResultCard recommendation={recommendation} nome={answers.nome} />
              )}
            </div>

            {/* Actions */}
            <div className="border-t border-border/30 p-3 space-y-2 bg-card">
              {currentStep === "welcome" && !isTyping && messages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button onClick={handleStartClick} className="w-full gap-2 font-bold" size="lg">
                    <Zap className="w-4 h-4" />
                    Começar diagnóstico gratuito
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground mt-1.5">
                    🔒 Sem compromisso · Resultado instantâneo
                  </p>
                </motion.div>
              )}

              {currentStep === "nome" && !isTyping && (
                <motion.form
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  onSubmit={handleNameSubmit}
                  className="flex gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Digite seu nome..."
                    className="flex-1 h-10 rounded-xl border border-border/40 bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all"
                    autoFocus
                  />
                  <Button type="submit" size="icon" disabled={!nameInput.trim()} className="h-10 w-10 rounded-xl shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.form>
              )}

              {currentOptions && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="grid grid-cols-2 gap-1.5"
                >
                  {currentOptions.map((opt, i) => (
                    <motion.button
                      key={opt.value}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      onClick={() => handleOptionClick(`${opt.emoji} ${opt.label}`, opt.value)}
                      className="text-left px-3 py-2.5 rounded-xl border border-border/30 bg-background hover:bg-accent hover:border-primary/25 transition-all duration-200 group"
                    >
                      <span className="text-base">{opt.emoji}</span>
                      <p className="text-xs font-semibold text-foreground mt-0.5 group-hover:text-primary transition-colors">{opt.label}</p>
                      {opt.desc && (
                        <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{opt.desc}</p>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {currentStep === "resultado" && showResult && !isTyping && recommendation && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <Button variant="whatsapp" size="lg" asChild className="w-full gap-2 font-bold">
                    <a
                      href={`https://wa.me/5511932197334?text=${encodeURIComponent(recommendation.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Falar com especialista agora
                    </a>
                  </Button>
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] text-muted-foreground">⚡ Resposta em até 5 minutos</p>
                    <button
                      onClick={handleRestart}
                      className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Refazer
                    </button>
                  </div>
                </motion.div>
              )}

              {messages.length === 0 && (
                <p className="text-[10px] text-center text-muted-foreground py-2">
                  Descubra a melhor solução digital para seu negócio
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Chatbot);
