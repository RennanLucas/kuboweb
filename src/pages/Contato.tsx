import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/5511932197334?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Kubo%20Web%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 11 93219-7334",
    detail: "Conte o que você precisa e qual é o objetivo do projeto.",
    href: whatsappUrl,
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato.kuboweb@gmail.com",
    detail: "Bom para briefings, referências e informações mais detalhadas.",
    href: "mailto:contato.kuboweb@gmail.com",
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@kuboweb_oficial",
    detail: "Acompanhe a identidade e os trabalhos publicados pela Kubo Web.",
    href: "https://www.instagram.com/kuboweb_oficial/",
    external: true,
  },
];

const Contato = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Contato"
        description="Fale com a Kubo Web pelo WhatsApp, e-mail ou Instagram para conversar sobre seu site, landing page, loja virtual ou projeto digital."
        path="/contato"
      />
      <Header />

      <section className="relative isolate overflow-hidden bg-[#07101f] px-4 pb-20 pt-36 text-white md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-44 top-0 h-[620px] w-[620px] rounded-full bg-blue-600/18 blur-[180px]" />
          <div className="absolute -right-44 top-[-120px] h-[700px] w-[700px] rounded-full bg-cyan-400/8 blur-[220px]" />
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#78a9ff]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/42">Start a project</span>
              </div>
              <h1 className="max-w-5xl text-[3.25rem] font-heading font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[5.6rem]">
                Vamos conversar sobre
                <span className="block text-[#78a9ff]">o próximo projeto.</span>
              </h1>
            </div>
            <p className="max-w-[430px] text-base leading-8 text-white/52 lg:justify-self-end md:text-lg">
              Você pode chamar direto no WhatsApp ou enviar um briefing por e-mail. A primeira conversa serve para entender escopo, objetivo e o que realmente precisa ser construído.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f5f7] px-4 py-24 md:py-36">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-[34px] bg-[#2458d8] p-8 text-white shadow-[0_30px_90px_rgba(36,88,216,.18)] transition-transform hover:-translate-y-1 md:p-11"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-[70px]" />
              <div className="relative flex min-h-[420px] flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/58">Direct channel</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#2458d8]">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
                <div>
                  <MessageCircle className="h-8 w-8 text-white/72" />
                  <h2 className="mt-6 max-w-xl text-4xl font-heading font-semibold leading-[0.98] tracking-[-0.05em] md:text-5xl">
                    Comece pelo WhatsApp.
                  </h2>
                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/68 md:text-base">
                    Envie uma mensagem com o tipo de projeto, sua empresa e o que você quer melhorar. A conversa começa por aí.
                  </p>
                  <p className="mt-8 text-sm font-semibold">+55 11 93219-7334</p>
                </div>
              </div>
            </a>

            <div className="grid gap-5">
              {channels.slice(1).map(({ icon: Icon, label, value, detail, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group rounded-[30px] border border-border/70 bg-white p-7 transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_25px_70px_rgba(15,23,42,.06)] md:p-9"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="mt-10 text-[9px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
                  <h3 className="mt-3 break-all text-xl font-heading font-semibold tracking-[-0.03em] text-foreground md:text-2xl">{value}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{detail}</p>
                </a>
              ))}

              <div className="rounded-[30px] border border-border/70 bg-[#07101f] p-7 text-white md:p-9">
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#78a9ff]">Atendimento</p>
                <h3 className="mt-3 text-2xl font-heading font-semibold tracking-[-0.035em]">Online em todo o Brasil.</h3>
                <p className="mt-4 text-sm leading-7 text-white/48">
                  Reuniões, briefing, aprovação e acompanhamento podem ser feitos de forma remota, sem depender de uma localização física.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Contato;
