import { motion } from "framer-motion";

const logos = [
  "Clínicas", "Escritórios", "Consultórios", "Lojas", "Salões", "Estúdios"
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 border-y border-border/20">
      <div className="container mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 md:mb-10"
        >
          Empresas que confiam na KuboWeb
        </motion.p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="px-5 py-2.5 rounded-xl border border-border/30 bg-card/30 text-muted-foreground text-sm font-medium hover:border-primary/20 hover:text-foreground transition-all duration-300"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
