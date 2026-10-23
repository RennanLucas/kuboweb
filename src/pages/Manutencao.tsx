import { Check, MessageCircle, RefreshCw, ShieldCheck, Wrench, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20manuten%C3%A7%C3%A3o%20mensal%20da%20Kubo%20Web.%20Pode%20me%20explicar%20como%20funciona%3F";

const areas = [
  { icon: RefreshCw, title: "Conteúdo", text: "Pequenas atualizações de textos, imagens e informações podem entrar no plano conforme o escopo contratado." },
  { icon: Wrench, title: "Ajustes técnicos", text: "Correções e manutenção de componentes existentes são avaliadas dentro dos limites definidos para o plano." },
  { icon: ShieldCheck, title: "Cuidados operacionais", text: "Backup, atualizações e outras rotinas dependem da tecnologia e da infraestrutura usada pelo site." },
  { icon: Zap, title: "Evolução contínua", text: "Quando uma mudança exige nova página, integração ou recurso maior, ela pode ser orçada separadamente." },
];

const commonScope = [
  "Pequenas alterações de conteúdo conforme o plano",
  "Suporte por WhatsApp para demandas do site",
  "Revisão de problemas reportados",
  "Atualizações técnicas compatíveis com a solução",
  "Orientação sobre domínio, hospedagem e integrações",
  "Orçamento separado para mudanças estruturais",
];

const faqs = [
  { q: "O que está incluso na manutenção?", a: "O plano começa em R$ 70/mês e o escopo é definido conforme o site e a tecnologia usada. Antes da contratação, fica claro o que entra como atualização recorrente e o que será tratado como projeto adicional." },
  { q: "Posso contratar manutenção para um site que não foi feito pela Kubo Web?", a: "É possível avaliar. Primeiro precisamos entender a tecnologia, hospedagem, acessos e estado atual do projeto para confirmar se conseguimos assumir a manutenção." },
  { q: "Mudanças grandes estão incluídas?", a: "Normalmente não. Novas páginas, redesigns, integrações e funcionalidades maiores são avaliados e orçados separadamente para não misturar manutenção recorrente com desenvolvimento de projeto." },
  { q: "Existe garantia de que o site nunca vai sair do ar?", a: "Não. Disponibilidade depende também de hospedagem, domínio, provedores e serviços externos. Quando houver um problema dentro do escopo de manutenção, a Kubo Web investiga e orienta a correção adequada." },
];

const Manutencao = () => (
  <main className="min-h-screen bg-background">
    <SEO
      title="Manutenção de Sites"
      description="Manutenção de sites a partir de R$ 70/mês para atualizações, ajustes e acompanhamento técnico conforme o projeto."
      path="/manutencao"
    />
    <Header />

    <section className="relative isolate overflow-hidden bg-[#07101f] px-4 pb-24 pt-36 text-white md:pb-32 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-44 top-0 h-[660px] w-[660px] rounded-full bg-blue-600/18 blur-[190px]" />
        <div className="absolute -right-48 top-[-140px] h-[740px] w-[740px] rounded-full bg-cyan-400/8 blur-[230px]" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#78a9ff]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/42">Care plan · Maintenance</span>
            </div>
            <h1 className="max-w-5xl text-[3.2rem] font-heading font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              Seu site continua
              <span className="block text-[#78a9ff]">evoluindo depois do launch.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/52 md:text-lg">
              Manutenção para pequenas atualizações, ajustes e acompanhamento técnico sem transformar cada mudança em um novo projeto completo.
            </p>
          </div>

          <div className="rounded-[34px] border border-white/12 bg-white/[0.055] p-7 backdrop-blur-xl md:p-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">Plano de entrada</p>
            <div className="mt-5 flex items-end gap-2">
              <span className="text-sm text-white/42">R$</span>
              <span className="text-6xl font-heading font-semibold tracking-[-0.06em]">70</span>
              <span className="pb-2 text-sm text-white/42">/mês</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/45">A partir deste valor. O escopo final depende do site, tecnologia e volume de alterações necessárias.</p>
            <Button asChild size="xl" className="mt-7 w-full rounded-full bg-white text-[#07101f] hover:bg-white/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> Avaliar manutenção
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#f4f5f7] px-4 py-24 md:py-36">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">O que a manutenção resolve</p>
            <h2 className="mt-5 max-w-4xl text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-6xl">Mudanças pequenas sem perder o controle técnico.</h2>
          </div>
          <p className="max-w-[430px] text-base leading-8 text-muted-foreground lg:justify-self-end">O plano é ajustado ao tipo de projeto. Sites diferentes exigem rotinas diferentes — por isso o escopo é confirmado antes da contratação.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {areas.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="rounded-[28px] border border-border/70 bg-white p-6 md:p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary"><Icon className="h-5 w-5" /></span>
                <span className="text-[10px] font-semibold text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-12 text-xl font-heading font-semibold tracking-[-0.03em] text-foreground">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 py-24 md:py-36">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">Escopo comum</p>
            <h2 className="mt-5 text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] text-foreground md:text-6xl">O que normalmente entra.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {commonScope.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-[22px] border border-border/70 bg-white p-5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span>
                <span className="text-sm leading-6 text-foreground/72">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#f4f5f7] px-4 py-24 md:py-32">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">FAQ</p>
          <h2 className="mt-5 text-4xl font-heading font-semibold tracking-[-0.045em] text-foreground md:text-5xl">Antes de contratar.</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.q} value={`item-${index}`} className="rounded-2xl border border-border/70 bg-white px-5 md:px-6">
              <AccordionTrigger className="py-5 text-left font-heading font-semibold text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="pb-5 leading-7 text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    <section className="px-4 py-24 md:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="rounded-[38px] bg-[#2458d8] p-8 text-white md:p-12 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/55">Next step</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">Primeiro precisamos entender o site.</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/66">Envie o endereço do site e diga quais alterações você costuma precisar. A Kubo Web avalia se o plano de manutenção é adequado ao projeto.</p>
            </div>
            <Button asChild size="xl" className="rounded-full bg-white px-7 text-[#2458d8] hover:bg-white/90">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> Falar no WhatsApp</a>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <FloatingWhatsApp />
  </main>
);

export default Manutencao;
