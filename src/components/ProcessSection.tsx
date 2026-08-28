import { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Palette, 
  Code, 
  Rocket, 
  CheckCircle2, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    title: 'Briefing Estratégico',
    description: 'Conversamos sobre seu negócio, público-alvo, concorrentes e objetivos. Definimos juntos a estrutura ideal do seu projeto.',
    icon: MessageSquare,
    deliverables: ['Análise de concorrentes', 'Definição de objetivos', 'Estruturação do projeto']
  },
  {
    number: '02',
    title: 'Design & Prototipação',
    description: 'Criamos o design exclusivo do seu site com foco em conversão. Você aprova cada etapa antes de avançarmos.',
    icon: Palette,
    deliverables: ['Design de interface (UI)', 'Foco em experiência (UX)', 'Aprovação do layout']
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description: 'Transformamos o design aprovado em um site ultra rápido, responsivo e otimizado para SEO e Google Ads.',
    icon: Code,
    deliverables: ['Código otimizado e rápido', 'Totalmente responsivo', 'Pronto para SEO']
  },
  {
    number: '04',
    title: 'Publicação & Suporte',
    description: 'Colocamos seu site no ar com domínio, SSL e configuração completa. Suporte contínuo para qualquer dúvida.',
    icon: Rocket,
    deliverables: ['Configuração de domínio', 'Certificado de segurança SSL', 'Suporte contínuo']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const ProcessSection = memo(function ProcessSection() {
  const whatsappUrl = "https://wa.me/5511932197334?text=Olá%2C%20quero%20iniciar%20meu%20projeto%20de%20site.%20Pode%20me%20explicar%20os%20próximos%20passos%3F";

  return (
    <section id="processo" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="section-label">Como Funciona</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-6"
          >
            Do briefing ao site no ar em <span className="text-gradient-primary">4 passos</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subtitle"
          >
            Nossa equipe desenvolveu uma metodologia ágil e transparente para garantir que 
            seu projeto seja entregue no prazo e supere suas expectativas.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Desktop Connecting line */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-border/50 rounded-full overflow-hidden hidden md:block">
            <motion.div 
              initial={{ x: '-100%' }}
              whileInView={{ 
                x: ['-100%', '100%']
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6 relative z-10">
            {steps.map((step) => (
              <motion.div key={step.number} variants={itemVariants} className="relative group">
                <div className="flex flex-col h-full bg-card/60 backdrop-blur-xl border border-border/50 rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-glow shadow-xl">
                  
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shadow-inner">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-heading font-extrabold text-primary/80 bg-primary/10 px-3 py-1 rounded-xl border border-primary/20">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold mb-2.5 text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mb-5 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-2.5 mt-auto pt-3 border-t border-border/30">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="xl" 
            variant="whatsapp"
            className="w-full sm:w-auto shadow-glow group"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Iniciar Meu Projeto
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <span className="text-sm text-muted-foreground mt-4 sm:mt-0 sm:ml-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Atendimento online agora
          </span>
        </motion.div>
      </div>
    </section>
  );
});

export default ProcessSection;
