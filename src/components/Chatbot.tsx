import { memo, useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, Send, Bot, User, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

type Step =
  | "welcome"
  | "objetivo"
  | "vende_hoje"
  | "pagamento_online"
  | "orcamento_anuncios"
  | "resultado";

type Answers = {
  objetivo?: string;
  vendeHoje?: string;
  pagamentoOnline?: string;
  orcamentoAnuncios?: string;
};

const OPTIONS: Record<string, { label: string; value: string }[]> = {
  objetivo: [
    { label: "💰 Vender produtos/serviços", value: "vender" },
    { label: "📩 Captar leads e contatos", value: "leads" },
    { label: "🏢 Divulgar minha marca", value: "marca" },
  ],
  vende_hoje: [
    { label: "✅ Sim, já vendo", value: "sim" },
    { label: "❌ Ainda não", value: "nao" },
  ],
  pagamento_online: [
    { label: "💳 Sim, preciso", value: "sim" },
    { label: "🚫 Não preciso", value: "nao" },
  ],
  orcamento_anuncios: [
    { label: "📊 Sim, tenho orçamento", value: "sim" },
    { label: "💡 Quero começar orgânico", value: "nao" },
  ],
};

function getRecommendation(answers: Answers) {
  const { objetivo, vendeHoje, pagamentoOnline, orcamentoAnuncios } = answers;

  if (objetivo === "vender" && pagamentoOnline === "sim") {
    return {
      title: "🛒 Loja Virtual",
      description:
        "Como você quer vender e precisa receber pagamentos online, uma loja virtual é a melhor opção. Ela funciona 24h, aceita cartão, Pix e boleto, e você gerencia tudo pelo celular.",
      nextSteps: [
        "Escolher os produtos para começar",
        "Definir meios de pagamento",
        "Configurar frete e entrega",
      ],
      whatsappMsg:
        "Olá, fiz o diagnóstico no site e quero criar minha Loja Virtual. Pode me ajudar?",
    };
  }

  if (objetivo === "leads") {
    return {
      title: "🎯 Landing Page",
      description:
        "Para captar leads, uma landing page focada em conversão é o ideal. Página única, objetiva, com formulário e chamada para ação — perfeita para campanhas.",
      nextSteps: [
        "Definir a oferta principal",
        "Criar um formulário de captação",
        "Integrar com WhatsApp ou e-mail",
      ],
      whatsappMsg:
        "Olá, fiz o diagnóstico no site e quero criar uma Landing Page para captar leads. Pode me ajudar?",
    };
  }

  if (objetivo === "vender" && orcamentoAnuncios === "sim") {
    return {
      title: "📢 Tráfego Pago (Anúncios)",
      description:
        "Você já vende e tem orçamento — anúncios no Google e redes sociais vão acelerar seus resultados. É a forma mais rápida de alcançar clientes prontos para comprar.",
      nextSteps: [
        "Definir público-alvo",
        "Criar anúncios atrativos",
        "Acompanhar métricas e otimizar",
      ],
      whatsappMsg:
        "Olá, fiz o diagnóstico no site e quero investir em Anúncios/Tráfego Pago. Pode me ajudar?",
    };
  }

  if (objetivo === "marca") {
    return {
      title: "🌐 Site Institucional",
      description:
        "Para divulgar sua marca e passar credibilidade, um site institucional profissional é essencial. Ele mostra quem você é, seus serviços e como te encontrar.",
      nextSteps: [
        "Definir identidade visual",
        "Criar páginas principais (sobre, serviços, contato)",
        "Otimizar para Google (SEO)",
      ],
      whatsappMsg:
        "Olá, fiz o diagnóstico no site e quero criar um Site Institucional. Pode me ajudar?",
    };
  }

  // Default: site institucional + landing page combo
  return {
    title: "🌐 Site Institucional + Landing Page",
    description:
      "Com base nas suas respostas, recomendo começar com um site institucional para sua presença online e uma landing page para converter visitantes em clientes.",
    nextSteps: [
      "Criar seu site profissional",
      "Montar uma landing page de conversão",
      "Integrar com WhatsApp para atendimento",
    ],
    whatsappMsg:
      "Olá, fiz o diagnóstico no site e quero criar meu projeto digital. Pode me ajudar?",
  };
}

const QUESTIONS: Record<string, string> = {
  welcome:
    "👋 Olá! Sou o consultor digital da KuboWeb. Vou te ajudar a descobrir a melhor solução para o seu negócio. Leva menos de 1 minuto!\n\nVamos começar?",
  objetivo: "Qual é o seu objetivo principal hoje?",
  vende_hoje: "Você já vende seus produtos ou serviços hoje?",
  pagamento_online: "Você precisa receber pagamentos online (cartão, Pix)?",
  orcamento_anuncios: "Você tem orçamento disponível para investir em anúncios?",
};

const STEP_FLOW: Step[] = [
  "welcome",
  "objetivo",
  "vende_hoje",
  "pagamento_online",
  "orcamento_anuncios",
  "resultado",
];

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="flex items-center gap-2 px-4 py-3"
  >
    <div className="flex items-center gap-1.5 bg-secondary/50 rounded-2xl px-4 py-2.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-muted-foreground/50"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
        />
      ))}
    </div>
  </motion.div>
);

const ChatMessage = memo(
  ({ message, isLast }: { message: Message; isLast: boolean }) => {
    const isBot = message.sender === "bot";

    return (
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn("flex gap-2.5 px-4", isBot ? "justify-start" : "justify-end")}
      >
        {isBot && (
          <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0 mt-1">
            <Bot className="w-4 h-4 text-primary" />
          </div>
        )}
        <div
          className={cn(
            "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line",
            isBot
              ? "bg-secondary/40 border border-border/50 text-foreground"
              : "bg-primary text-primary-foreground"
          )}
        >
          {message.text}
        </div>
        {!isBot && (
          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-1">
            <User className="w-4 h-4 text-primary" />
          </div>
        )}
      </motion.div>
    );
  }
);

ChatMessage.displayName = "ChatMessage";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<Step>("welcome");
  const [answers, setAnswers] = useState<Answers>({});
  const [isTyping, setIsTyping] = useState(false);
  const [msgId, setMsgId] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextId = useCallback(() => {
    setMsgId((p) => p + 1);
    return msgId + 1;
  }, [msgId]);

  const scrollToBottom = () => {
    setTimeout(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, 100);
  };

  const addBotMessage = useCallback(
    (text: string) => {
      setIsTyping(true);
      scrollToBottom();
      setTimeout(() => {
        setIsTyping(false);
        const id = Date.now();
        setMessages((prev) => [...prev, { id, text, sender: "bot" }]);
        scrollToBottom();
      }, 800 + Math.random() * 600);
    },
    []
  );

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setTimeout(() => addBotMessage(QUESTIONS.welcome), 400);
    }
  };

  const getNextStep = (current: Step): Step => {
    const idx = STEP_FLOW.indexOf(current);
    return STEP_FLOW[idx + 1] || "resultado";
  };

  const handleOptionClick = (optionLabel: string, optionValue: string) => {
    // Add user message
    const userMsg: Message = { id: Date.now(), text: optionLabel, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    scrollToBottom();

    // Store answer
    const newAnswers = { ...answers };
    if (currentStep === "objetivo") newAnswers.objetivo = optionValue;
    if (currentStep === "vende_hoje") newAnswers.vendeHoje = optionValue;
    if (currentStep === "pagamento_online") newAnswers.pagamentoOnline = optionValue;
    if (currentStep === "orcamento_anuncios") newAnswers.orcamentoAnuncios = optionValue;
    setAnswers(newAnswers);

    // Skip irrelevant questions
    let next = getNextStep(currentStep);

    // If objetivo is "leads" or "marca", skip payment/ads questions
    if (newAnswers.objetivo === "leads" && (next === "vende_hoje" || next === "pagamento_online" || next === "orcamento_anuncios")) {
      next = "resultado";
    }
    if (newAnswers.objetivo === "marca" && (next === "pagamento_online" || next === "orcamento_anuncios")) {
      next = "resultado";
    }

    setCurrentStep(next);

    if (next === "resultado") {
      const rec = getRecommendation(newAnswers);
      addBotMessage(
        `✨ Diagnóstico completo!\n\nMinha recomendação para você:\n\n${rec.title}\n\n${rec.description}\n\n📋 Próximos passos:\n${rec.nextSteps.map((s, i) => `${i + 1}. ${s}`).join("\n")}\n\nClique no botão abaixo para falar comigo no WhatsApp e começar seu projeto! 👇`
      );
    } else {
      addBotMessage(QUESTIONS[next]);
    }
  };

  const handleStartClick = () => {
    const userMsg: Message = { id: Date.now(), text: "Vamos começar! 🚀", sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    scrollToBottom();
    setCurrentStep("objetivo");
    addBotMessage(QUESTIONS.objetivo);
  };

  const handleRestart = () => {
    setMessages([]);
    setAnswers({});
    setCurrentStep("welcome");
    setTimeout(() => addBotMessage(QUESTIONS.welcome), 400);
  };

  const recommendation = currentStep === "resultado" ? getRecommendation(answers) : null;
  const currentOptions = currentStep !== "welcome" && currentStep !== "resultado" ? OPTIONS[currentStep] : null;

  return (
    <>
      {/* Chat toggle button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={handleOpen}
            className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Abrir consultor digital"
          >
            <Sparkles className="w-6 h-6" />
          </motion.button>
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
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[520px] max-h-[70vh] rounded-2xl border border-border/60 bg-card shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 bg-gradient-to-r from-primary/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Consultor KuboWeb</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-whatsapp inline-block" />
                    Online agora
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground text-lg px-2 transition-colors"
                aria-label="Fechar chat"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto py-4 space-y-3">
              <AnimatePresence mode="popLayout">
                {messages.map((msg, i) => (
                  <ChatMessage key={msg.id} message={msg} isLast={i === messages.length - 1} />
                ))}
              </AnimatePresence>
              <AnimatePresence>{isTyping && <TypingIndicator />}</AnimatePresence>
            </div>

            {/* Actions */}
            <div className="border-t border-border/40 p-3 space-y-2">
              {currentStep === "welcome" && !isTyping && messages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button onClick={handleStartClick} className="w-full gap-2" size="lg">
                    Começar diagnóstico
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              )}

              {currentOptions && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  {currentOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleOptionClick(opt.label, opt.value)}
                      className="w-full text-left px-4 py-2.5 rounded-xl border border-border/60 bg-secondary/30 hover:bg-primary/10 hover:border-primary/40 text-sm text-foreground transition-all duration-200"
                    >
                      {opt.label}
                    </button>
                  ))}
                </motion.div>
              )}

              {currentStep === "resultado" && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <Button variant="whatsapp" size="lg" asChild className="w-full gap-2">
                    <a
                      href={`https://wa.me/5511932197334?text=${encodeURIComponent(recommendation?.whatsappMsg || "Olá, quero criar meu projeto")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Falar no WhatsApp agora
                    </a>
                  </Button>
                  <button
                    onClick={handleRestart}
                    className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    🔄 Refazer diagnóstico
                  </button>
                </motion.div>
              )}

              {messages.length === 0 && (
                <p className="text-xs text-center text-muted-foreground">
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
