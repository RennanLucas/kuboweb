import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle, RotateCcw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const questions = [
  {
    id: "presence",
    label: "Presença atual",
    question: "Como seu negócio aparece na internet hoje?",
    options: [
      { value: "none", label: "Ainda não tenho site", detail: "Uso redes sociais, indicação ou estou começando." },
      { value: "old", label: "Tenho um site, mas está antigo", detail: "A imagem ou a experiência já não representam o negócio." },
      { value: "good", label: "Já tenho um site funcionando bem", detail: "Quero melhorar aquisição, campanhas ou uma parte específica." },
    ],
  },
  {
    id: "goal",
    label: "Objetivo",
    question: "Qual é o principal objetivo agora?",
    options: [
      { value: "brand", label: "Apresentar melhor a empresa", detail: "Quero mais clareza, credibilidade e uma presença própria." },
      { value: "leads", label: "Receber mais contatos", detail: "Quero levar pessoas até WhatsApp, formulário ou agendamento." },
      { value: "sell", label: "Vender produtos online", detail: "Preciso de catálogo, carrinho e uma estrutura de compra." },
      { value: "traffic", label: "Atrair tráfego com Google Ads", detail: "Já tenho uma oferta e quero avaliar campanhas de pesquisa." },
    ],
  },
  {
    id: "campaign",
    label: "Campanha",
    question: "Você precisa de uma página específica para uma oferta ou campanha?",
    options: [
      { value: "yes", label: "Sim", detail: "Uma página focada em uma ação principal faria sentido." },
      { value: "no", label: "Não", detail: "Preciso apresentar o negócio de forma mais ampla." },
      { value: "unsure", label: "Ainda não sei", detail: "Quero entender qual formato é mais adequado." },
    ],
  },
  {
    id: "payment",
    label: "Venda online",
    question: "O cliente precisa pagar diretamente pelo site?",
    options: [
      { value: "yes", label: "Sim", detail: "Preciso de checkout e meios de pagamento." },
      { value: "no", label: "Não", detail: "O contato ou fechamento acontece por outro canal." },
    ],
  },
  {
    id: "priority",
    label: "Prioridade",
    question: "O que mais pesa na decisão do projeto?",
    options: [
      { value: "image", label: "Posicionamento e imagem", detail: "Quero que a empresa pareça mais profissional." },
      { value: "contact", label: "Gerar contatos", detail: "Quero tornar o caminho até o atendimento mais claro." },
      { value: "operation", label: "Operação de venda", detail: "Preciso estruturar catálogo, pagamento e gestão." },
      { value: "acquisition", label: "Aquisição de tráfego", detail: "Quero testar demanda e campanhas de Google Ads." },
    ],
  },
] as const;

type AnswerMap = Record<string, string>;

type Recommendation = {
  title: string;
  eyebrow: string;
  description: string;
  price: string;
  href: string;
  whatsapp: string;
  points: string[];
};

const getRecommendation = (answers: AnswerMap): Recommendation => {
  const goal = answers.goal;
  const payment = answers.payment;
  const campaign = answers.campaign;
  const priority = answers.priority;
  const presence = answers.presence;

  if (goal === "sell" || payment === "yes" || priority === "operation") {
    return {
      title: "Loja Virtual",
      eyebrow: "Recomendação principal",
      description: "Seu cenário pede uma estrutura de e-commerce. O próximo passo é mapear catálogo, pagamento, logística e a rotina que você precisa administrar depois da publicação.",
      price: "Sob orçamento",
      href: "/servicos/loja-virtual",
      whatsapp: "Olá, fiz o diagnóstico da Kubo Web e a recomendação foi Loja Virtual. Quero conversar sobre meu catálogo, pagamento e operação.",
      points: ["Catálogo e páginas de produto", "Carrinho e checkout", "Pagamento e frete conforme a solução", "Painel e integrações definidos no escopo"],
    };
  }

  if (goal === "traffic" || priority === "acquisition") {
    return {
      title: "Google Ads",
      eyebrow: "Recomendação principal",
      description: "Seu objetivo está mais ligado à aquisição. Vale avaliar a oferta, a página de destino e a demanda de busca antes de definir campanha e orçamento de mídia.",
      price: "Sob orçamento",
      href: "/servicos/anuncios",
      whatsapp: "Olá, fiz o diagnóstico da Kubo Web e a recomendação foi Google Ads. Quero avaliar se campanhas fazem sentido para meu negócio.",
      points: ["Pesquisa de demanda e palavras-chave", "Estrutura de campanha", "Conversões e destinos", "Acompanhamento e ajustes"],
    };
  }

  if (goal === "leads" || campaign === "yes" || priority === "contact") {
    return {
      title: "Landing Page",
      eyebrow: "Recomendação principal",
      description: "Uma página focada pode ser a melhor forma de apresentar uma oferta e conduzir o visitante até WhatsApp, formulário ou outra ação principal.",
      price: "A partir de R$ 697",
      href: "/servicos/landing-pages",
      whatsapp: "Olá, fiz o diagnóstico da Kubo Web e a recomendação foi Landing Page. Quero conversar sobre minha oferta e objetivo.",
      points: ["Mensagem e oferta organizadas", "CTA principal", "Design responsivo", "Integrações conforme campanha"],
    };
  }

  return {
    title: "Site Institucional",
    eyebrow: "Recomendação principal",
    description: presence === "old"
      ? "Seu site atual parece ser o principal ponto a evoluir. Um novo site institucional pode atualizar posicionamento, estrutura, conteúdo e experiência mobile."
      : "Seu cenário pede uma presença mais completa para apresentar empresa, serviços, diferenciais e contato em um endereço próprio.",
    price: "A partir de R$ 1.497",
    href: "/servicos/sites-institucionais",
    whatsapp: "Olá, fiz o diagnóstico da Kubo Web e a recomendação foi Site Institucional. Quero conversar sobre meu projeto.",
    points: ["Estrutura de páginas", "Design sob medida", "Versão mobile e desktop", "Base técnica para indexação e contato"],
  };
};

const Diagnostico = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const done = step >= questions.length;
  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

  const select = (value: string) => {
    const question = questions[step];
    setAnswers((current) => ({ ...current, [question.id]: value }));
    setStep((current) => current + 1);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
  };

  const current = !done ? questions[step] : null;
  const progress = Math.round((Math.min(step, questions.length) / questions.length) * 100);

  return (
    <main className="min-h-screen bg-[#07101f] text-white">
      <SEO
        title="Diagnóstico Digital"
        description="Responda algumas perguntas sobre seu negócio e veja qual serviço da Kubo Web pode fazer mais sentido para o seu cenário."
        path="/diagnostico"
      />
      <Header />

      <section className="relative isolate min-h-[calc(100vh-1px)] overflow-hidden px-4 pb-20 pt-32 md:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-48 top-0 h-[700px] w-[700px] rounded-full bg-blue-600/18 blur-[190px]" />
          <div className="absolute -right-48 top-[-120px] h-[760px] w-[760px] rounded-full bg-cyan-400/8 blur-[230px]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#78a9ff]">Kubo Fit Check</p>
              <p className="mt-2 text-sm text-white/42">Diagnóstico orientativo · sem promessa automática de resultado</p>
            </div>
            {!done && <span className="text-xs font-semibold text-white/42">{step + 1}/{questions.length}</span>}
          </div>

          <div className="mb-8 h-1 overflow-hidden rounded-full bg-white/8">
            <div className="h-full rounded-full bg-[#78a9ff] transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>

          {!done && current ? (
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
              <div className="rounded-[30px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-sm md:p-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/32">{current.label}</p>
                <h1 className="mt-5 text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] md:text-5xl">{current.question}</h1>
                <p className="mt-6 text-sm leading-7 text-white/45">Escolha a opção mais próxima do seu cenário atual. O resultado serve como ponto de partida para a conversa, não como orçamento automático.</p>
                {step > 0 && (
                  <button onClick={() => setStep((value) => Math.max(0, value - 1))} className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition-colors hover:text-white">
                    <ArrowLeft className="h-4 w-4" /> Voltar
                  </button>
                )}
              </div>

              <div className="grid gap-3">
                {current.options.map((option, index) => (
                  <button
                    key={option.value}
                    onClick={() => select(option.value)}
                    className="group flex min-h-[112px] items-center gap-5 rounded-[26px] border border-white/10 bg-white/[0.045] p-5 text-left transition-all hover:-translate-y-0.5 hover:border-[#78a9ff]/40 hover:bg-white/[0.07] md:p-6"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-white/38">0{index + 1}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-lg font-heading font-semibold tracking-[-0.025em] text-white">{option.label}</span>
                      <span className="mt-1.5 block text-sm leading-6 text-white/42">{option.detail}</span>
                    </span>
                    <ArrowRight className="h-5 w-5 shrink-0 text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-[#78a9ff]" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[34px] bg-white p-8 text-[#07101f] md:p-11">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#2458d8]">{recommendation.eyebrow}</p>
                <h1 className="mt-5 text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">{recommendation.title}</h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#07101f]/58">{recommendation.description}</p>

                <div className="mt-8 rounded-[24px] bg-[#f4f5f7] p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#07101f]/38">Investimento de referência</p>
                  <p className="mt-2 text-2xl font-heading font-semibold tracking-[-0.035em]">{recommendation.price}</p>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {recommendation.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-6 text-[#07101f]/65">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2458d8]/10 text-[#2458d8]"><Check className="h-3 w-3" /></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between rounded-[34px] border border-white/10 bg-white/[0.045] p-8 md:p-10">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/32">Próximo passo</p>
                  <h2 className="mt-5 text-3xl font-heading font-semibold leading-tight tracking-[-0.04em]">Validar a recomendação com o contexto real do negócio.</h2>
                  <p className="mt-5 text-sm leading-7 text-white/45">Escopo, tecnologia, integrações, prazo e valor final só devem ser definidos depois de entender o projeto com mais detalhe.</p>
                </div>

                <div className="mt-10 space-y-3">
                  <Button asChild size="xl" className="w-full rounded-full bg-white text-[#07101f] hover:bg-white/90">
                    <a href={`https://wa.me/5511932197334?text=${encodeURIComponent(recommendation.whatsapp)}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="w-full rounded-full border-white/15 bg-transparent text-white hover:bg-white/8 hover:text-white">
                    <Link to={recommendation.href}>Ver detalhes do serviço</Link>
                  </Button>
                  <button onClick={restart} className="flex w-full items-center justify-center gap-2 py-3 text-sm font-semibold text-white/45 transition-colors hover:text-white">
                    <RotateCcw className="h-4 w-4" /> Refazer diagnóstico
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Diagnostico;
