import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEO from "@/components/SEO";

const sections = [
  {
    title: "1. Dados que podem ser tratados",
    text: "A Kubo Web pode receber dados que você fornece voluntariamente ao entrar em contato, solicitar orçamento ou preencher formulários, como nome, telefone, e-mail, empresa e informações sobre o projeto. Também podem ser registrados dados técnicos de navegação, como dispositivo, navegador, páginas acessadas e eventos de interação.",
  },
  {
    title: "2. Para que usamos essas informações",
    text: "Os dados são usados para responder contatos, preparar propostas, prestar atendimento, entender o uso do site, melhorar a experiência e medir o desempenho de campanhas e ações de marketing.",
  },
  {
    title: "3. Serviços de terceiros",
    text: "O site pode utilizar serviços de hospedagem, mensuração e comunicação de terceiros, incluindo Vercel, Google, Supabase, WhatsApp e Instagram. Esses serviços podem tratar dados conforme as próprias políticas e configurações de privacidade.",
  },
  {
    title: "4. Cookies e tecnologias semelhantes",
    text: "Podem ser utilizados cookies, identificadores e scripts de medição para funcionamento, segurança, análise de desempenho e mensuração de campanhas. As opções disponíveis no navegador podem ser usadas para limitar ou excluir cookies.",
  },
  {
    title: "5. Compartilhamento",
    text: "A Kubo Web não comercializa dados pessoais. Informações podem ser compartilhadas com fornecedores necessários para operar o site, atender solicitações e medir campanhas, sempre dentro da finalidade correspondente.",
  },
  {
    title: "6. Segurança e retenção",
    text: "São adotadas medidas razoáveis para reduzir riscos de acesso não autorizado, perda ou uso indevido. Os dados são mantidos pelo período necessário para atendimento, obrigações aplicáveis e continuidade do relacionamento comercial.",
  },
  {
    title: "7. Seus direitos e contato",
    text: "Você pode solicitar informações, correção ou exclusão de dados relacionados ao seu contato com a Kubo Web. Para isso, envie uma mensagem para contato.kuboweb@gmail.com.",
  },
] as const;

const Privacidade = () => (
  <main className="min-h-screen bg-[#f7f7f4]">
    <SEO
      title="Política de Privacidade"
      description="Política de privacidade da Kubo Web: dados de contato, navegação, mensuração e direitos do usuário."
      path="/privacidade"
    />
    <Header />

    <section className="relative overflow-hidden bg-[#05070b] px-4 pb-14 pt-28 text-white md:pb-20 md:pt-40">
      <div className="pointer-events-none absolute -right-40 -top-36 h-[560px] w-[560px] rounded-full bg-[#2458d8]/15 blur-[170px]" />
      <div className="container relative mx-auto max-w-[1180px]">
        <p className="text-[9px] font-semibold uppercase tracking-[.26em] text-[#91b5ff]">Kubo Web · Privacidade</p>
        <h1 className="mt-4 max-w-[900px] text-[3rem] font-heading font-semibold leading-[.92] tracking-[-.065em] sm:text-[4.5rem] md:mt-5 md:text-[6rem]">
          Privacidade sem<br /><span className="text-white/[.28]">letra pequena.</span>
        </h1>
        <p className="mt-6 max-w-[690px] text-[14px] leading-7 text-white/[.5] md:text-base md:leading-8">
          Esta página explica, de forma objetiva, como informações podem ser tratadas quando você navega pelo site ou entra em contato com a Kubo Web.
        </p>
      </div>
    </section>

    <section className="px-4 py-14 md:py-24">
      <div className="container mx-auto max-w-[1180px]">
        <div className="border-t border-black/[.1]">
          {sections.map((section) => (
            <article key={section.title} className="grid gap-3 border-b border-black/[.09] py-7 md:grid-cols-[.34fr_.66fr] md:gap-10 md:py-9">
              <h2 className="text-[1.45rem] font-heading font-semibold tracking-[-.04em] text-[#08111f] md:text-2xl">{section.title}</h2>
              <p className="max-w-[720px] text-[13px] leading-6 text-black/[.5] md:text-[15px] md:leading-8">{section.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-[11px] leading-6 text-black/[.38]">Última atualização: outubro de 2026.</p>
      </div>
    </section>

    <Footer />
    <FloatingWhatsApp />
  </main>
);

export default Privacidade;
