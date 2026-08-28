import { memo } from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Sparkles, Smartphone, Search, Database, Code, Globe, Lock, Cpu } from "lucide-react";

const techItems = [
  { icon: Zap, name: "PageSpeed 99", desc: "Ultra Velocidade" },
  { icon: Search, name: "SEO Google Top 10", desc: "Indexação Imediata" },
  { icon: Shield, name: "Certificado SSL 256-bit", desc: "Segurança Total" },
  { icon: Smartphone, name: "Mobile First", desc: "100% Responsivo" },
  { icon: Globe, name: "Google Ads Ready", desc: "Pixel & Rastreamento" },
  { icon: Lock, name: "Conformidade LGPD", desc: "Privacidade Garantida" },
  { icon: Code, name: "Next-Gen React & Vite", desc: "Arquitetura Moderna" },
  { icon: Cpu, name: "Cloudflare CDN", desc: "Servidores Globais" },
];

const TechStackMarquee = () => {
  return (
    <section className="py-12 bg-background border-y border-border/30 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee gap-6 whitespace-nowrap">
        {[...techItems, ...techItems].map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-card/60 border border-border/40 backdrop-blur-sm shrink-0 hover:border-primary/30 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <item.icon className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="font-heading font-bold text-xs text-foreground">{item.name}</p>
              <p className="text-[10px] text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(TechStackMarquee);
