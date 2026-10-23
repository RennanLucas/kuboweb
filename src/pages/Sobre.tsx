import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { ArrowDownRight, Code2, LayoutTemplate, MessageCircle, Target } from "lucide-react";

const principles = [
  {
    icon: Target,
    index: "01",
    label: "Direction",
    title: "Começar pelo objetivo",
    text: "Antes da interface, definimos o que o visitante precisa entender e qual ação faz sentido para o negócio.",
  },
  {
    icon: LayoutTemplate,
    index: "02",
    label: "Design",
    title: "Criar percepção de valor",
    text: "Tipografia, hierarquia, contraste e ritmo trabalham juntos para a marca parecer clara, atual e profissional.",
  },
  {
    icon: Code2,
    index: "03",
    label: "Build",
    title: "Transformar em produto real",
    text: "O design vira um site responsivo, testado no celular e no desktop e preparado para ser publicado de verdade.",
  },
  {
    icon: MessageCircle,
    index: "04",
    label: "Partnership",
    title: "Manter contato direto",
    text: "A comunicação fica simples: decisões, ajustes e próximos passos são tratados de forma objetiva durante o projeto.",
  },
];

const Sobre = () => (
  <main className="min-h-screen bg-background">
    <SEO
      title="Sobre a Kubo Web"
      description="Conheça a Kubo Web, estúdio digital de criação de sites, landing pages, lojas virtuais e experiências web sob medida."
      path="/sobre"
    />
    <Header />

    <section className="relative isolate overflow-hidden bg-[#07101f] px-4 pb-20 pt-36 text-white md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[620px] w-[620px] rounded-full bg-blue-600/18 blur-[180px]" />
        <div className="absolute -right-48 top-[-120px] h-[720px] w-[720px] rounded-full bg-cyan-400/8 blur-[220px]" />
        <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#78a9ff]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/42">About Kubo · Digital Studio</span>
            </div>
            <h1 className="max-w-5xl text-[3.25rem] font-heading font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.6rem]">
              Não fazemos site para
              <span className="block text-[#78a9ff]">preencher espaço.</span>
            </h1>
          </div>

          <div className="lg:justify-self-end lg:max-w-[440px]">
            <p className="text-base leading-8 text-white/52 md:text-lg">
              A Kubo Web é um estúdio digital focado em transformar posicionamento, conteúdo e tecnologia em uma presença online que represente melhor o nível do negócio.
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/32">
              Estratégia · Design · Desenvolvimento
              <ArrowDownRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#f4f5f7] px-4 py-24 md:py-36">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">How we think</p>
            <h2 className="mt-5 max-w-xl text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-6xl">
              O visual é importante. A lógica por trás dele também.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">
              Um projeto forte precisa conectar mensagem, percepção, experiência e tecnologia. Por isso, cada etapa existe para resolver um problema real — não para adicionar efeito por efeito.
            </p>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-border/70 bg-white shadow-[0_30px_90px_rgba(15,23,42,.06)]">
            {principles.map(({ icon: Icon, index, label, title, text }, i) => (
              <article
                key={title}
                className={`grid gap-6 p-7 md:grid-cols-[0.18fr_0.82fr] md:p-9 ${i !== principles.length - 1 ? "border-b border-border/70" : ""}`}
              >
                <div className="flex items-start justify-between md:block">
                  <span className="text-xs font-semibold text-muted-foreground">{index}</span>
                  <span className="mt-0 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/8 text-primary md:mt-7">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                </div>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-primary">{label}</p>
                  <h3 className="mt-3 text-2xl font-heading font-semibold tracking-[-0.035em] text-foreground md:text-3xl">{title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-[15px]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 py-24 md:py-36">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[34px] bg-[#07101f] p-8 text-white md:p-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#78a9ff]">What we build</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
              Sites, landing pages e lojas virtuais que parecem parte da marca — não um template comprado.
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/48">
              Quando o projeto pede aquisição de tráfego, a Kubo Web também trabalha com estrutura de Google Ads conectada ao site e ao caminho de contato.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href="https://www.helenaavilapsi.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[30px] border border-border/70 bg-[#f4f1eb] p-7 transition-transform hover:-translate-y-1"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Live project · 01</p>
              <h3 className="mt-12 text-2xl font-heading font-semibold tracking-[-0.035em] text-foreground">Helena Ávila Psicoterapeuta</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">Projeto publicado e disponível para navegar.</p>
            </a>
            <a
              href="https://cristiano-avila-site.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[30px] border border-border/70 bg-[#eaf0fa] p-7 transition-transform hover:-translate-y-1"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Live project · 02</p>
              <h3 className="mt-12 text-2xl font-heading font-semibold tracking-[-0.035em] text-foreground">Cristiano Ávila</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">Site profissional responsivo publicado.</p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
    <FloatingWhatsApp />
  </main>
);

export default Sobre;
