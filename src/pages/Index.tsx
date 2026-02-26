import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import BenefitsSection from "@/components/BenefitsSection";
import AudienceSection from "@/components/AudienceSection";
import SocialProofSection from "@/components/SocialProofSection";
import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Building2, ShoppingCart, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

const quickServices = [
  { icon: FileText, title: "Landing Pages", desc: "Páginas de alta conversão" },
  { icon: Building2, title: "Sites Institucionais", desc: "Presença digital completa" },
  { icon: ShoppingCart, title: "Loja Virtual", desc: "Venda online profissional" },
  { icon: Megaphone, title: "Anúncios", desc: "Tráfego pago qualificado" },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <StatsSection />

      {/* Quick Services Preview */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-medium text-sm uppercase tracking-wider"
            >
              Nossos Serviços
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground"
            >
              Soluções para cada necessidade
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {quickServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-premium text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline group"
            >
              Ver todos os serviços
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <BenefitsSection />
      <SocialProofSection />
      <AudienceSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
