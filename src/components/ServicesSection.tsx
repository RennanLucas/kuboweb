import { FileText, Building2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Landing Pages",
    description: "Páginas de alta conversão para capturar leads e vender serviços. Ideal para campanhas de marketing.",
    features: ["Foco em conversão", "Integração WhatsApp", "Design persuasivo"],
  },
  {
    icon: Building2,
    title: "Sites Institucionais",
    description: "Presença digital completa para sua empresa. Múltiplas páginas com informações sobre seu negócio.",
    features: ["Várias páginas", "SEO otimizado", "Gestão de conteúdo"],
  },
  {
    icon: Globe,
    title: "Web Apps Simples",
    description: "Portais e sistemas web personalizados para necessidades específicas do seu negócio.",
    features: ["Funcionalidades custom", "Painel admin", "Escalável"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-medium text-sm uppercase tracking-wider">
            Serviços
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Soluções para cada necessidade
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Do simples ao completo, criamos a solução ideal para o seu negócio crescer online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-premium flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="whatsapp" size="lg" asChild>
            <a href="https://wa.me/5511932197334" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Solicitar orçamento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;