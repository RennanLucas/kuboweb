import { memo, useState, useRef, useCallback, useEffect } from "react";
import { User, Sparkles, ArrowRight, RotateCcw, ShoppingCart, Globe, Target, Megaphone, Zap, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import botAvatar from "@/assets/bot-avatar.png";
import SEO from "@/components/SEO";

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

const whatsappBase = "https://wa.me/5511932197334?text=";

function getRecommendation(answers: Answers) {
  const { objetivo, vendeHoje, pagamentoOnline, orcamentoAnuncios, presencaOnline, segmento } = answers;

  if (objetivo === "vender" && pagamentoOnline === "sim") {
    return {
      type: "loja",
      title: "Loja Virtual Profissional",
      subtitle: "A solução ideal para vender online 24h",
      description: "Com uma loja virtual você vende para todo o Brasil, aceita Pix, cartão e boleto, e gerencia tudo pelo celular.",
      benefits: ["Catálogo de produtos ilimitado", "Pagamento integrado (Pix, cartão, boleto)", "Gestão de estoque e pedidos", "Otimizado para Google (SEO)", "Funciona 24 horas por dia"],
      investimento: "A partir de R$ 1.497",
      prazo: "7 a 15 dias úteis",
      whatsappMsg: `Olá! Sou ${answers.nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico no site e a recomendação foi Loja Virtual. Quero saber mais!`,
    };
  }

  if (objetivo === "leads") {
    return {
      type: "landing",
      title: "Landing Page de Alta Conversão",
      subtitle: "Transforme visitantes em clientes",
      description: "Uma página focada 100% em conversão, perfeita para campanhas. Design estratégico e integração direta com seu WhatsApp.",
      benefits: ["Design focado em conversão", "Formulário de captação inteligente", "Integração com WhatsApp", "Otimizada para Google Ads", "Carregamento ultra-rápido"],
      investimento: "A partir de R$ 697",
      prazo: "5 a 10 dias úteis",
      whatsappMsg: `Olá! Sou ${answers.nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico e quero criar uma Landing Page. Pode me ajudar?`,
    };
  }

  if ((objetivo === "escalar" || (objetivo === "vender" && vendeHoje === "sim")) && orcamentoAnuncios === "sim") {
    return {
      type: "anuncios",
      title: "Gestão de Google Ads",
      subtitle: "Apareça para quem está procurando agora",
      description: "Seu negócio aparece no topo das buscas exatamente quando o cliente procura pelo que você oferece.",
      benefits: ["Apareça no topo do Google", "Alcance clientes prontos para comprar", "Orçamento controlado por você", "Relatórios mensais detalhados", "Otimização contínua"],
      investimento: "A partir de R$ 497/mês + verba",
      prazo: "Setup em 3 a 5 dias úteis",
      whatsappMsg: `Olá! Sou ${answers.nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico e quero investir em Google Ads!`,
    };
  }

  if (objetivo === "marca" || presencaOnline === "nenhuma" || presencaOnline === "redes") {
    return {
      type: "site",
      title: "Site Institucional Premium",
      subtitle: "Sua vitrine digital profissional",
      description: "Um site moderno que transmite credibilidade. Seus clientes encontram você no Google e entram em contato facilmente.",
      benefits: ["Design moderno e responsivo", "Otimizado para Google (SEO)", "Integração com WhatsApp e redes", "Painel de gestão fácil", "Hospedagem e domínio inclusos"],
      investimento: "A partir de R$ 997",
      prazo: "7 a 15 dias úteis",
      whatsappMsg: `Olá! Sou ${answers.nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico e quero criar um Site Institucional!`,
    };
  }

  return {
    type: "combo",
    title: "Combo Estratégico Digital",
    subtitle: "Site + Landing Page para máximo resultado",
    description: "A combinação perfeita: site institucional para presença online e landing page focada em converter visitantes em clientes.",
    benefits: ["Site institucional completo", "Landing page de conversão", "Integração com WhatsApp", "SEO otimizado", "Suporte e manutenção"],
    investimento: "Consulte condições especiais",
    prazo: "10 a 20 dias úteis",
    whatsappMsg: `Olá! Sou ${answers.nome || "cliente"} do segmento de ${segmento || "negócios"}. Fiz o diagnóstico e quero um combo Site + Landing Page!`,
  };
}

const QUESTIONS: Record<string, string> = {
  welcome: "Olá! 👋 Sou o consultor digital da KuboWeb.\n\nVou fazer um diagnóstico rápido do seu negócio e recomendar a melhor solução digital para você.\n\n🕐 Leva menos de 1 minuto e é 100% gratuito.",
  nome: "Para começar, como posso te chamar?",
  segmento: "Qual é o segmento do seu negócio?",
  objetivo: "E qual seu principal objetivo agora?",
  presenca_online: "Como está sua presença online hoje?",
  vende_hoje: "Você já vende seus produtos ou serviços?",
  pagamento_online: "Precisa receber pagamentos online?",
  orcamento_anuncios: "Tem interesse em investir em anúncios no Google?",
  urgencia: "Qual sua urgência para começar?",
};

const STEP_FLOW: Step[] = ["welcome", "nome", "segmento", "objetivo", "presenca_online", "vende_hoje", "pagamento_online", "orcamento_anuncios", "urgencia", "resultado"];

const TypingIndicator = () => (
  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-3 px-2">
    <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
      <img src={botAvatar} alt="Bot" className="w-full h-full object-cover" />
    </div>
    <div className="flex items-center gap-1.5 bg-accent border border-border/30 rounded-2xl px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div key={i} className="w-2 h-2 rounded-full bg-primary/50" animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }} />
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
    <div className="px-6 py-3 bg-accent/50 border-b border-border/20">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs text-muted-foreground font-medium tracking-wide">
          {step === "resultado" ? "✅ Diagnóstico completo" : "📊 Diagnóstico em andamento"}
        </span>
        <span className="text-xs text-primary font-bold">{Math.round(progress)}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-border/50 overflow-hidden">
        <motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.5, ease: "easeOut" }} />
      </div>
    </div>
  );
};

const ResultCard = memo(({ recommendation }: { recommendation: ReturnType<typeof getRecommendation> }) => {
  const Icon = RESULT_ICONS[recommendation.type] || Globe;

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-4">
      <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/8 via-primary/3 to-transparent p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">{recommendation.title}</p>
            <p className="text-sm text-primary font-medium">{recommendation.subtitle}</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">{recommendation.description}</p>

        <div className="space-y-2">
          <p className="text-xs font-semibold text-foreground uppercase tracking-wider">O que está incluso:</p>
          {recommendation.benefits.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-sm text-foreground/80">{b}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/30">
          <div>
            <p className="text-xs text-muted-foreground">Investimento</p>
            <p className="text-lg font-bold text-primary">{recommendation.investimento}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Prazo</p>
            <p className="text-sm font-semibold text-foreground">{recommendation.prazo}</p>
          </div>
        </div>

        <Button variant="whatsapp" size="xl" asChild className="w-full shadow-glow-sm mt-2">
          <a href={`${whatsappBase}${encodeURIComponent(recommendation.whatsappMsg)}`} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp agora
          </a>
        </Button>
      </div>
    </motion.div>
  );
});
ResultCard.displayName = "ResultCard";

const ChatMessage = memo(({ message }: { message: Message }) => {
  const isBot = message.sender === "bot";

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className={cn("flex gap-3", isBot ? "justify-start" : "justify-end")}>
      {isBot && (
        <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 mt-0.5">
          <img src={botAvatar} alt="Bot" className="w-full h-full object-cover" />
        </div>
      )}
      <div className={cn("max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line", isBot ? "bg-accent border border-border/30 text-foreground rounded-tl-md" : "bg-primary text-primary-foreground rounded-tr-md")}>
        {message.text}
      </div>
      {!isBot && (
        <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
          <User className="w-4 h-4 text-primary" />
        </div>
      )}
    </motion.div>
  );
});
ChatMessage.displayName = "ChatMessage";

const Diagnostico = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<Step>("welcome");
  const [answers, setAnswers] = useState<Answers>({});
  const [isTyping, setIsTyping] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [started, setStarted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
    }, 600 + Math.random() * 400);
  }, []);

  useEffect(() => {
    if (!started) {
      setStarted(true);
      setTimeout(() => addBotMessage(QUESTIONS.welcome), 500);
    }
  }, [started, addBotMessage]);

  const getSmartNextStep = (current: Step, currentAnswers: Answers): Step => {
    const idx = STEP_FLOW.indexOf(current);
    let next = STEP_FLOW[idx + 1] || "resultado";
    if (next === "presenca_online" && currentAnswers.objetivo === "vender") next = "vende_hoje";
    if (next === "vende_hoje" && (currentAnswers.objetivo === "leads" || currentAnswers.objetivo === "marca")) next = "orcamento_anuncios";
    if (next === "pagamento_online" && (currentAnswers.objetivo === "leads" || currentAnswers.objetivo === "marca")) next = "orcamento_anuncios";
    if (next === "orcamento_anuncios" && currentAnswers.objetivo === "marca") next = "urgencia";
    return next;
  };

  const handleOptionClick = (optionLabel: string, optionValue: string) => {
    setMessages((prev) => [...prev, { id: Date.now(), text: optionLabel, sender: "user" }]);
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
      addBotMessage(`Perfeito, ${newAnswers.nome || ""}! 🎯\n\nAnalisei suas respostas e tenho a recomendação ideal para o seu negócio:`, () => setShowResult(true));
    } else {
      addBotMessage(QUESTIONS[next]);
    }
  };

  const handleStartClick = () => {
    setMessages((prev) => [...prev, { id: Date.now(), text: "Vamos lá! 🚀", sender: "user" }]);
    scrollToBottom();
    setCurrentStep("nome");
    addBotMessage(QUESTIONS.nome, () => setTimeout(() => inputRef.current?.focus(), 200));
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

  return (
    <main className="min-h-screen bg-background bg-gradient-mesh bg-noise">
      <Header />
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Page header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              Diagnóstico Digital Gratuito
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight">
              Descubra a solução ideal para o seu negócio
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              Responda algumas perguntas rápidas e nosso consultor digital vai recomendar a melhor estratégia para você crescer online.
            </p>
          </motion.div>

          {/* Chat container */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-2xl border border-border/50 bg-card shadow-xl overflow-hidden">
            {/* Chat header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/30 bg-card">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/20">
                    <img src={botAvatar} alt="Bot" className="w-full h-full object-cover" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-whatsapp border-2 border-card" />
                </div>
                <div>
                  <p className="text-base font-bold text-foreground tracking-tight">Consultor KuboWeb</p>
                  <p className="text-xs text-muted-foreground">Online agora • Diagnóstico gratuito</p>
                </div>
              </div>
              {currentStep !== "welcome" && (
                <button onClick={handleRestart} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-secondary/50">
                  <RotateCcw className="w-3.5 h-3.5" />
                  Recomeçar
                </button>
              )}
            </div>

            <ProgressBar step={currentStep} />

            {/* Messages area */}
            <div ref={scrollRef} className="h-[420px] md:h-[480px] overflow-y-auto scroll-smooth p-6 space-y-4">
              <AnimatePresence>
                {messages.map((msg) => (
                  <ChatMessage key={msg.id} message={msg} />
                ))}
              </AnimatePresence>
              <AnimatePresence>{isTyping && <TypingIndicator />}</AnimatePresence>

              {showResult && recommendation && <ResultCard recommendation={recommendation} />}
            </div>

            {/* Input area */}
            <div className="border-t border-border/30 bg-card px-6 py-4">
              {currentStep === "welcome" && !isTyping && messages.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  <Button onClick={handleStartClick} size="xl" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-sm">
                    <Sparkles className="w-5 h-5" />
                    Iniciar Diagnóstico Gratuito
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              )}

              {currentStep === "nome" && !isTyping && (
                <motion.form initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleNameSubmit} className="flex gap-2">
                  <input
                    ref={inputRef}
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="Digite seu nome..."
                    className="flex-1 bg-background border border-border/50 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40"
                  />
                  <Button type="submit" size="lg" className="rounded-xl px-5">
                    <Send className="w-4 h-4" />
                  </Button>
                </motion.form>
              )}

              {currentOptions && !isTyping && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleOptionClick(`${opt.emoji} ${opt.label}`, opt.value)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border/40 bg-background hover:border-primary/40 hover:bg-primary/5 transition-all text-left group"
                    >
                      <span className="text-lg">{opt.emoji}</span>
                      <div>
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{opt.label}</p>
                        {opt.desc && <p className="text-xs text-muted-foreground">{opt.desc}</p>}
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}

              {currentStep === "resultado" && showResult && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2">
                  <Button onClick={handleRestart} variant="outline" size="lg" className="flex-1 rounded-xl">
                    <RotateCcw className="w-4 h-4" />
                    Refazer diagnóstico
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Diagnostico;