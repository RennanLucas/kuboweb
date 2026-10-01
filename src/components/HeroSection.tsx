import { memo, useState, type FormEvent } from "react";
import { MessageCircle, ArrowRight, ArrowDown, CheckCircle2, Star, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5511932197334";
const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20KuboWeb%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.%20Pode%20me%20ajudar%3F";

const projectTypes = ["Site institucional", "Landing page", "Loja virtual", "Google Ads"];

const stats = [
  { value: "150+", label: "empresas atendidas" },
  { value: "5.0", label: "avaliação média" },
  { value: "<24h", label: "tempo de resposta" },
];

const guarantees = [
  { icon: ShieldCheck, text: "Orçamento sem compromisso" },
  { icon: Clock, text: "Resposta em até 24h úteis" },
];

type GtagWindow = Window & { gtagSendEvent?: (url: string) => boolean };

const openWhatsApp = (url: string) => {
  const w = window as GtagWindow;
  if (typeof w.gtagSendEvent === "function") w.gtagSendEvent(url);
  else window.open(url, "_blank", "noopener,noreferrer");
};

const LeadForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState(projectTypes[0]);

  const formatPhone = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 11);
    if (d.length <= 2) return d;
    if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Sou ${name.trim()} e quero um orçamento de *${type}*. Meu WhatsApp: ${phone}. Vim pelo site da KuboWeb.`;
    openWhatsApp(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
  };

  const field =
    "w-full h-12 rounded-lg border border-border bg-background px-4 text-[15px] text-foreground placeholder:text-muted-foreground/70 transition-colors focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10";

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="relative w-full rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.35)]"
      aria-label="Solicitar orçamento"
    >
      <div className="absolute -top-3 left-6 sm:left-8 rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-primary-foreground">
        Orçamento grátis
      </div>

      <h2 className="text-xl sm:text-2xl font-heading font-bold leading-tight text-foreground">
        Receba uma proposta para o seu projeto
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">Preencha em 20 segundos. Respondemos direto no seu WhatsApp.</p>

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-foreground">Seu nome</span>
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex.: Ana Souza" autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-foreground">WhatsApp</span>
          <input
            required
            type="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            placeholder="(11) 90000-0000"
            autoComplete="tel"
            pattern="\(\d{2}\) \d{4,5}-\d{4}"
            className={field}
          />
        </label>
        <fieldset>
          <legend className="mb-2 block text-xs font-semibold text-foreground">O que você precisa?</legend>
          <div className="grid grid-cols-2 gap-2">
            {projectTypes.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                aria-pressed={type === t}
                className={`h-11 rounded-lg border px-3 text-[13px] font-medium transition-all ${
                  type === t
                    ? "border-primary bg-primary/[0.06] text-primary"
                    : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <Button type="submit" size="lg" className="group mt-6 h-13 w-full rounded-lg py-4 text-[15px] font-semibold">
        Quero meu orçamento grátis
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>

      <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:justify-between">
        {guarantees.map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon className="h-3.5 w-3.5 text-success" />
            {text}
          </li>
        ))}
      </ul>
    </motion.form>
  );
};

const HeroSection = () => {
  const scrollToServicos = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden px-5 pt-24 pb-16 md:px-6 md:pt-32 md:pb-24 lg:pt-36">
      {/* Grid de fundo sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div aria-hidden className="absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-xs"
          >
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
              ))}
            </span>
            Nota 5.0 de mais de 150 clientes
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-[2.4rem] leading-[1.04] sm:text-5xl lg:text-[4rem] font-heading font-extrabold tracking-[-0.035em] text-foreground"
          >
            Sites profissionais que transformam visitas em{" "}
            <span className="relative whitespace-nowrap text-primary">
              clientes
              <svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-2 left-0 w-full text-primary/30" preserveAspectRatio="none">
                <path d="M2 9 C 80 2, 220 2, 298 8" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Criamos sites institucionais, landing pages e lojas virtuais rápidos, bonitos e pensados para gerar contatos — com atendimento direto pelo WhatsApp do início ao fim.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button variant="whatsapp" size="lg" asChild className="h-12 px-6">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToServicos} className="h-12 px-6">
              Ver serviços
              <ArrowDown className="h-4 w-4" />
            </Button>
          </motion.div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-border border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.label} className="px-4 first:pl-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">{s.value}</dd>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 hidden flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground md:flex">
            {["Design exclusivo", "SEO para o Google", "100% responsivo"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-success" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div id="orcamento" className="scroll-mt-28">
          <LeadForm />
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
