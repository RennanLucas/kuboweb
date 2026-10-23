import { Gauge, MessageCircle, PenTool, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: PenTool,
    number: "01",
    eyebrow: "Brand system",
    title: "Visual que posiciona",
    description:
      "Tipografia, ritmo, contraste e composição trabalhando juntos para a empresa parecer mais madura e confiável.",
  },
  {
    icon: Gauge,
    number: "02",
    eyebrow: "Performance",
    title: "Experiência sem atrito",
    description:
      "A navegação é pensada para funcionar rápido no celular e no desktop, sem depender de efeitos que atrapalham a leitura.",
  },
  {
    icon: MessageCircle,
    number: "03",
    eyebrow: "Conversion path",
    title: "Contato no momento certo",
    description:
      "A página conduz a pessoa até WhatsApp, formulário ou próxima etapa sem parecer insistente ou genérica.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-[#07101f] px-4 py-24 text-white md:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-blue-500/12 blur-[150px]" />
        <div className="absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/8 blur-[150px]" />
      </div>

      <div className="container relative mx-auto max-w-7xl">
        <div className="mb-16 grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-end md:mb-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#78a9ff]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/42">The Kubo standard</span>
            </div>
            <h2 className="max-w-4xl text-[2.9rem] font-heading font-semibold leading-[0.95] tracking-[-0.052em] sm:text-6xl md:text-7xl">
              Um site premium é um
              <span className="block text-[#78a9ff]">sistema de percepção.</span>
            </h2>
          </div>
          <p className="max-w-[430px] text-base leading-8 text-white/48 lg:justify-self-end md:text-lg">
            Cada decisão visual precisa ajudar o visitante a entender a marca, confiar nela e saber o que fazer em seguida.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-sm md:p-9"
          >
            <div className="mb-14 flex items-start justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/35">Interface quality check</span>
                <h3 className="mt-4 max-w-[420px] text-3xl font-heading font-semibold leading-tight tracking-[-0.04em] md:text-4xl">
                  Clareza antes de decoração.
                </h3>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#78a9ff] text-[#07101f]">
                <Sparkles className="h-5 w-5" />
              </span>
            </div>

            <div className="space-y-3">
              {["Mensagem principal", "Hierarquia visual", "Versão mobile", "Caminho até o contato"].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/8 text-[10px] font-semibold text-white/48">0{index + 1}</span>
                  <span className="text-sm font-medium text-white/78">{item}</span>
                  <span className="ml-auto rounded-full bg-emerald-400/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-emerald-300">Checked</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className={`rounded-[30px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm md:p-7 ${index === 2 ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">{benefit.number}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/8 text-[#8bb6ff]">
                    <benefit.icon className="h-4.5 w-4.5" />
                  </span>
                </div>
                <p className="mt-12 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#78a9ff]">{benefit.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-heading font-semibold tracking-[-0.035em] text-white md:text-3xl">{benefit.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/45 md:text-[15px]">{benefit.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
