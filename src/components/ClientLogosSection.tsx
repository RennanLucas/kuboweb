import { memo } from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "Clínica Vitale", initials: "CV" },
  { name: "Studio Arquitetura", initials: "SA" },
  { name: "Fit Pro Academy", initials: "FP" },
  { name: "Dr. Sorriso", initials: "DS" },
  { name: "Lux Interiores", initials: "LI" },
  { name: "Nova Contábil", initials: "NC" },
  { name: "Tech Solutions", initials: "TS" },
  { name: "Bella Estética", initials: "BE" },
];

const ClientLogosSection = () => (
  <section className="py-16 md:py-20 px-4 relative overflow-hidden">
    <div className="container mx-auto max-w-6xl relative z-10">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="text-center text-sm text-muted-foreground mb-10 tracking-wide uppercase font-medium"
      >
        Empresas que confiam na KuboWeb
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
      >
        {clients.map((client, i) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-300 group"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs font-bold group-hover:bg-primary/15 transition-colors">
              {client.initials}
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
              {client.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default memo(ClientLogosSection);
