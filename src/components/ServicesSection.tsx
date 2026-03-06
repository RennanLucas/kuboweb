import { Globe, FileText, Building2, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites",
    description: "Sites completos com design profissional, responsivos e otimizados para buscas.",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description: "Páginas de alta conversão para capturar leads e vender seus serviços.",
  },
  {
    icon: Building2,
    title: "Sites para Empresas",
    description: "Presença digital completa com múltiplas páginas e gestão de conteúdo.",
  },
  {
    icon: MapPin,
    title: "Negócios Locais",
    description: "Sites otimizados para atrair clientes da sua região pelo Google.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14 md:mb-20 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-label justify-center"
          >
            Serviços
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="section-title"
          >
            Soluções para cada necessidade
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="section-subtitle"
          >
            Do simples ao completo, criamos a solução ideal para o seu negócio.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="card-premium flex flex-col p-7 md:p-8 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              
              <h3 className="text-lg font-heading font-semibold mb-2.5 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {service.description}
              </p>

              <a
                href={`https://wa.me/5511932197334?text=${encodeURIComponent(`Olá, vim pelo site da KuboWeb e tenho interesse no serviço de ${service.title}. Pode me explicar como funciona?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-5"
              >
                Saiba mais
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
