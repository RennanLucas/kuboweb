import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import BrandMark from "@/components/BrandMark";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  return (
    <main className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#07101f] px-4 py-24 text-white">
      <SEO
        title="Página não encontrada"
        description="A página que você procura não existe. Volte à página inicial da Kubo Web."
        path={location.pathname}
        noindex
      />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-320px] h-[760px] w-[980px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>

      <div className="container mx-auto max-w-5xl text-center">
        <div className="flex justify-center">
          <BrandMark inverse compact />
        </div>

        <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8eb8ff]">Kubo Web · 404</p>
        <div className="mt-6 text-[7rem] font-heading font-semibold leading-[0.78] tracking-[-0.08em] text-white/[0.06] sm:text-[10rem] md:text-[13rem]">
          404
        </div>
        <h1 className="mx-auto -mt-2 max-w-4xl text-[2.75rem] font-heading font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl">
          Essa página não faz parte do projeto.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/48 md:text-lg">
          O endereço pode ter mudado ou não existir. Volte para a página inicial ou abra os projetos publicados da Kubo Web.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#07101f] transition-transform hover:-translate-y-0.5"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-6 text-sm font-semibold text-white/78 transition-all hover:-translate-y-0.5 hover:border-white/28 hover:text-white"
          >
            Ver portfólio
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
