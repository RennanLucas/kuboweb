import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Boxes, Code2, LayoutTemplate, Smartphone } from "lucide-react";
import { useRef } from "react";

const principles = [
  ["01", "Hierarchy", "Cada tela conduz o olhar antes de pedir uma ação."],
  ["02", "Depth", "Camadas, contraste e movimento criam presença sem virar ruído."],
  ["03", "Responsive", "A composição nasce para desktop e mobile ao mesmo tempo."],
  ["04", "Code", "A direção visual chega inteira até a versão publicada."],
];

const KuboSignatureSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 18]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-[#050a13] px-4 py-28 text-white md:py-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[8%] h-[620px] w-[620px] rounded-full bg-[#326cff]/15 blur-[180px]" />
        <div className="absolute bottom-[-20%] right-[-5%] h-[720px] w-[720px] rounded-full bg-[#8db6ff]/10 blur-[200px]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="container mx-auto max-w-[1380px]">
        <div className="grid gap-16 xl:grid-cols-[.88fr_1.12fr] xl:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8db6ff]">Kubo signature / visual system</p>
            <h2 className="mt-6 max-w-[760px] text-[3.5rem] font-heading font-semibold leading-[.86] tracking-[-0.075em] sm:text-7xl md:text-[6.6rem]">
              Uma marca precisa ter
              <span className="block text-white/[0.28]">uma forma de ser reconhecida.</span>
            </h2>
            <p className="mt-8 max-w-[620px] text-base leading-8 text-white/[0.46] md:text-lg">
              A assinatura Kubo combina escala editorial, produto real, contraste profundo e interfaces que parecem construídas para a marca — não escolhidas em uma biblioteca de templates.
            </p>
            <a href="#processo" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white/[0.72] transition-colors hover:text-white">
              Ver como construímos <ArrowDownRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative min-h-[620px] md:min-h-[760px]">
            <motion.div style={{ rotate, y }} className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 sm:h-[470px] sm:w-[470px] md:h-[560px] md:w-[560px]">
              <div className="absolute inset-[15%] rotate-45 rounded-[38px] border border-[#8db6ff]/35 bg-[#0b1628]/80 shadow-[0_0_120px_rgba(65,116,255,.16)] backdrop-blur-xl" />
              <div className="absolute inset-[26%] rotate-45 rounded-[28px] border border-white/[0.14] bg-[#8db6ff]/10 backdrop-blur-xl" />
              <div className="absolute inset-[38%] rotate-45 rounded-[20px] bg-[#8db6ff] shadow-[0_0_70px_rgba(120,167,255,.42)]" />
              <div className="absolute inset-0 rounded-full border border-white/[0.08]" />
              <div className="absolute inset-[8%] rounded-full border border-dashed border-white/[0.1]" />
            </motion.div>

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }} className="absolute left-0 top-[8%] w-[210px] rounded-[24px] border border-white/[0.1] bg-white/[0.055] p-5 shadow-2xl backdrop-blur-xl sm:w-[250px]">
              <LayoutTemplate className="h-5 w-5 text-[#8db6ff]" />
              <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/[0.3]">Composition</p>
              <p className="mt-2 text-lg font-semibold tracking-[-0.035em]">Hierarchy before decoration.</p>
            </motion.div>

            <motion.div animate={{ y: [0, 11, 0] }} transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }} className="absolute right-0 top-[18%] w-[190px] rounded-[24px] border border-white/[0.1] bg-[#0d1a2e]/90 p-5 shadow-2xl backdrop-blur-xl sm:w-[230px]">
              <Smartphone className="h-5 w-5 text-[#9ae7cc]" />
              <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/[0.3]">Mobile first</p>
              <div className="mt-3 h-24 rounded-[16px] border border-white/[0.08] bg-white/[0.04] p-3"><div className="h-2 w-2/3 rounded-full bg-white/[0.16]" /><div className="mt-2 h-2 w-1/2 rounded-full bg-[#8db6ff]/40" /><div className="mt-5 h-8 rounded-full bg-white" /></div>
            </motion.div>

            <motion.div animate={{ x: [0, 8, 0] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[8%] left-[4%] w-[220px] rounded-[24px] border border-white/[0.1] bg-[#eef2f8] p-5 text-[#07101f] shadow-2xl sm:w-[270px]">
              <Boxes className="h-5 w-5 text-[#2458d8]" />
              <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/[0.3]">System</p>
              <p className="mt-2 text-xl font-heading font-semibold leading-[1] tracking-[-0.045em]">Uma linguagem que continua em cada seção.</p>
            </motion.div>

            <motion.div animate={{ x: [0, -8, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[3%] right-[2%] w-[185px] rounded-[24px] border border-white/[0.1] bg-[#091321]/95 p-5 shadow-2xl sm:w-[225px]">
              <Code2 className="h-5 w-5 text-[#c7b8ff]" />
              <p className="mt-7 font-mono text-[9px] leading-5 text-white/[0.4]">design → responsive<br />motion → accessible<br />build → production</p>
            </motion.div>
          </div>
        </div>

        <div className="mt-20 grid border-y border-white/[0.1] md:grid-cols-4 md:mt-28">
          {principles.map(([number, title, text], index) => (
            <div key={number} className={`py-7 md:px-6 ${index > 0 ? "border-t border-white/[0.1] md:border-l md:border-t-0" : ""}`}>
              <p className="text-[9px] font-semibold text-[#8db6ff]">{number}</p>
              <p className="mt-5 text-lg font-semibold tracking-[-0.035em]">{title}</p>
              <p className="mt-2 text-xs leading-6 text-white/[0.36]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KuboSignatureSection;
