import { ArrowUpRight, CheckCircle2, Code2, Compass, Layers3, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "Discovery",
    icon: Compass,
    title: "Entender antes de desenhar.",
    description: "Objetivo, público, oferta, referências e o próximo passo que o visitante precisa tomar.",
    detail: "Briefing · posicionamento · conteúdo",
  },
  {
    number: "02",
    label: "Direction",
    icon: Layers3,
    title: "Criar uma direção que sustenta a página inteira.",
    description: "Hierarquia, tipografia, contraste, grid e ritmo definidos como sistema para a interface não parecer montada por partes.",
    detail: "Wireframe · visual system · UX",
  },
  {
    number: "03",
    label: "Build",
    icon: Code2,
    title: "Transformar design em experiência real.",
    description: "A interface vira código responsivo, com revisão de estados, navegação, velocidade e experiência no mobile.",
    detail: "Frontend · responsivo · QA",
  },
  {
    number: "04",
    label: "Launch",
    icon: Rocket,
    title: "Publicar sem perder a qualidade do projeto.",
    description: "Domínio, SEO técnico, integrações, rastreamento e revisão final antes do site começar a receber tráfego.",
    detail: "Deploy · SEO · analytics",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="bg-[#f3f4f6] px-4 py-24 md:py-36">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Studio pipeline</span>
            </div>
            <h2 className="max-w-xl text-[3rem] font-heading font-semibold leading-[0.94] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-[4.5rem]">
              Processo com
              <span className="block text-primary">direção.</span>
            </h2>
            <p className="mt-6 max-w-[430px] text-base leading-8 text-muted-foreground md:text-lg">
              Os melhores sites parecem simples porque as decisões difíceis foram resolvidas antes. É isso que mantém o projeto coerente do briefing ao lançamento.
            </p>

            <div className="mt-9 hidden max-w-[430px] rounded-[26px] border border-border/70 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,.05)] md:block">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Project flow</span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-700">Live</span>
              </div>
              <div className="mt-5 grid grid-cols-4 gap-2">
                {steps.map((step, index) => (
                  <div key={step.number} className="text-center">
                    <div className={`mx-auto h-1.5 rounded-full ${index < 2 ? "bg-primary" : "bg-border"}`} />
                    <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{step.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.05, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={`group overflow-hidden rounded-[30px] border p-6 md:p-8 ${
                  index === 1
                    ? "border-[#0d1727] bg-[#0d1727] text-white shadow-[0_28px_80px_rgba(15,23,42,.16)]"
                    : "border-border/70 bg-white text-foreground shadow-[0_16px_50px_rgba(15,23,42,.04)]"
                }`}
              >
                <div className="grid gap-8 md:grid-cols-[0.34fr_0.66fr] md:items-stretch">
                  <div className={`flex min-h-[210px] flex-col justify-between rounded-[24px] p-5 ${index === 1 ? "bg-white/[0.055]" : "bg-[#f5f6f8]"}`}>
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${index === 1 ? "text-white/38" : "text-muted-foreground"}`}>
                        {step.number}
                      </span>
                      <span className={`flex h-10 w-10 items-center justify-center rounded-2xl ${index === 1 ? "bg-[#79a9ff] text-[#0d1727]" : "bg-primary/10 text-primary"}`}>
                        <step.icon className="h-4.5 w-4.5" />
                      </span>
                    </div>

                    <div>
                      <p className={`text-[9px] font-semibold uppercase tracking-[0.22em] ${index === 1 ? "text-[#8bb6ff]" : "text-primary"}`}>{step.label}</p>
                      <p className={`mt-3 text-xs leading-5 ${index === 1 ? "text-white/42" : "text-muted-foreground"}`}>{step.detail}</p>
                    </div>
                  </div>

                  <div className="flex min-h-[210px] flex-col justify-between py-1">
                    <div>
                      <h3 className="max-w-2xl text-2xl font-heading font-semibold leading-tight tracking-[-0.04em] md:text-4xl">
                        {step.title}
                      </h3>
                      <p className={`mt-5 max-w-2xl text-sm leading-7 md:text-base ${index === 1 ? "text-white/48" : "text-muted-foreground"}`}>
                        {step.description}
                      </p>
                    </div>

                    <div className={`mt-8 flex items-center justify-between border-t pt-4 ${index === 1 ? "border-white/10" : "border-border/70"}`}>
                      <span className={`flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] ${index === 1 ? "text-white/35" : "text-muted-foreground"}`}>
                        <CheckCircle2 className={`h-3.5 w-3.5 ${index === 1 ? "text-[#8bb6ff]" : "text-primary"}`} />
                        Etapa definida
                      </span>
                      <ArrowUpRight className={`h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${index === 1 ? "text-white/35" : "text-muted-foreground"}`} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
