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
          {/* Connecting line */}
          <div className="absolute top-[40px] left-[32px] md:top-1/2 md:left-0 md:-translate-y-1/2 md:w-full h-[calc(100%-80px)] md:h-1 bg-border/50 rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: '-100%', y: '-100%' }}
              whileInView={{ 
                x: ['-100%', '100%'],
                y: ['-100%', '100%']
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-full md:w-1/3 h-1/3 md:h-full bg-gradient-to-b md:bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 hidden md:block"
            />
             <motion.div 
              initial={{ y: '-100%' }}
              whileInView={{ 
                y: ['-100%', '100%']
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-primary to-transparent opacity-50 md:hidden"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10 pl-[72px] md:pl-0">
            {steps.map((step, index) => (
              <motion.div key={step.number} variants={itemVariants} className="relative group">
                <div className="flex flex-col h-full bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-glow hover:-translate-y-1">
                  
                  {/* Step Number & Icon */}
                  <div className="absolute left-[-72px] md:relative md:left-0 top-0 md:-top-12 flex flex-col items-center md:items-start md:mb-12">
                    <div className="w-16 h-16 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center relative shadow-lg group-hover:border-primary/50 transition-colors duration-300">
                      <div className="absolute inset-0 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <step.icon className="w-6 h-6 text-primary relative z-10" />
                    </div>
                  </div>

                  <span className="text-6xl font-black text-foreground/5 md:absolute md:top-4 md:right-4 leading-none select-none tracking-tighter">
                    {step.number}
                  </span>
                  
                  <div className="md:mt-4">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <ul className="space-y-3 mt-auto">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
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
