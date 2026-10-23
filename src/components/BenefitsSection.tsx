import {
  CheckCircle2,
  Code2,
  Globe2,
  LayoutGrid,
  MessageCircle,
  Palette,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

const stages = [
  {
    icon: LayoutGrid,
    number: "01",
    title: "Estrutura",
    description: "Organizamos páginas, seções, prioridades e caminho até o contato antes de pensar em efeito visual.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Direção visual",
    description: "Tipografia, cor, ritmo, imagens e componentes passam a funcionar como um sistema coerente para a marca.",
  },
  {
    icon: Smartphone,
    number: "03",
    title: "Responsividade",
    description: "A experiência é revisada para celular, tablet e desktop sem tratar o mobile como uma versão reduzida do projeto.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Desenvolvimento",
    description: "A interface vira código com foco em navegação clara, desempenho, acessibilidade e manutenção futura.",
  },
];

const reviewPoints = [
  {
    icon: MessageCircle,
    title: "Mensagem",
    description: "O visitante entende rapidamente o que a empresa faz, para quem e qual é o próximo passo.",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Texto, botões, espaçamentos e hierarquia continuam funcionando bem em telas menores.",
  },
  {
    icon: CheckCircle2,
    title: "Conversão",
    description: "CTAs e formas de contato aparecem nos pontos certos da jornada, sem pressionar ou poluir a página.",
  },
  {
    icon: Globe2,
    title: "Publicação",
    description: "Domínio, HTTPS, metadados, rastreamento e funcionamento são revisados antes da entrada no ar.",
  },
];

const BenefitsSection = () => {
  return (
    <section
      id="beneficios"
      className="relative overflow-hidden bg-[#050a13] px-4 py-24 text-white [content-visibility:auto] [contain-intrinsic-size:900px] md:py-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[8%] h-[420px] w-[420px] rounded-full bg-blue-600/12 blur-[150px]" />
        <div className="absolute right-[-10%] top-[20%] hidden h-[560px] w-[560px] rounded-full bg-cyan-400/8 blur-[180px] md:block" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="container relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-10 md:mb-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#79a9ff]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">Sistema de projeto</span>
            </div>
            <h2 className="max-w-5xl text-[2.8rem] font-heading font-semibold leading-[0.95] tracking-[-0.052em] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              Cada decisão precisa
              <span className="block text-[#79a9ff]">conversar com a próxima.</span>
            </h2>
          </div>
          <p className="max-w-[440px] text-base leading-8 text-white/48 lg:justify-self-end md:text-lg">
            Estrutura, direção visual, responsividade e desenvolvimento entram no mesmo processo para o site não parecer uma coleção de blocos desconectados.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-[30px] border border-white/10 bg-[#0a1220]/94 shadow-[0_40px_120px_rgba(0,0,0,.38)] backdrop-blur-xl md:rounded-[34px]"
        >
          <div className="flex items-center gap-3 border-b border-white/8 px-5 py-4 md:px-7">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
            </div>
            <span className="ml-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/34">Kubo Web · Project system</span>
            <span className="ml-auto hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-white/24 sm:block">Strategy / Design / Build</span>
          </div>

          <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="border-b border-white/8 p-5 sm:p-6 md:p-8 lg:border-b-0 lg:border-r lg:p-9">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/28">Fluxo principal</p>
                <h3 className="mt-2 max-w-xl text-2xl font-heading font-semibold tracking-[-0.04em] md:text-3xl">
                  Do briefing ao código sem perder a lógica do projeto.
                </h3>
              </div>

              <div className="mt-7 space-y-3">
                {stages.map((stage, index) => (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="grid grid-cols-[auto_1fr_auto] gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-4 sm:p-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-[#8bb6ff]">
                      <stage.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white/80">{stage.title}</p>
                      <p className="mt-1 text-[11px] leading-5 text-white/36">{stage.description}</p>
                    </div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/22">{stage.number}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden p-5 sm:p-6 md:p-8 lg:p-9">
              <div className="pointer-events-none absolute -right-20 -top-24 h-[360px] w-[360px] rounded-full bg-blue-500/18 blur-[110px]" />
              <div className="relative z-10">
                <div className="max-w-xl">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/28">O que é revisado</p>
                  <h3 className="mt-2 text-2xl font-heading font-semibold tracking-[-0.04em] md:text-3xl">
                    Um site precisa funcionar como experiência, não só como imagem.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/42 md:text-base">
                    Antes de publicar, a revisão olha para compreensão, navegação, contato e consistência entre diferentes telas.
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {reviewPoints.map((point, index) => (
                    <motion.div
                      key={point.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.12 + index * 0.05, duration: 0.4 }}
                      className="rounded-[22px] border border-white/9 bg-white/[0.035] p-5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#79a9ff]/10 text-[#8bb6ff] ring-1 ring-[#79a9ff]/15">
                        <point.icon className="h-4 w-4" />
                      </div>
                      <h4 className="mt-5 text-base font-heading font-semibold text-white/82">{point.title}</h4>
                      <p className="mt-2 text-xs leading-6 text-white/36">{point.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 rounded-[22px] border border-[#79a9ff]/18 bg-[#79a9ff]/8 p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9cc2ff]">Princípio</p>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">
                    Movimento, animação e efeitos entram quando ajudam a leitura e a percepção da marca — não para esconder uma estrutura fraca.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
