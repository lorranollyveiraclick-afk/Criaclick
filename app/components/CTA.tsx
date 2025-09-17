import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <Sparkles size={20} className="text-primary mr-2" />
            <span className="text-primary font-medium">Transforme Sua Presença Digital</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Estamos a um <span className="bg-gradient-neon bg-clip-text text-transparent">click</span>
            <br />do seu sucesso
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Nosso foco é criar sua identidade digital usando nossa experiência e criatividade 
            para impulsionar seu crescimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon group px-8 py-6 text-lg"
            >
              Entre em Contato
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Respondemos em até 2 horas</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Suporte Técnico</div>
            </div>
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">SSL</div>
              <div className="text-sm text-muted-foreground">Certificado Gratuito</div>
            </div>
            <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">SEO</div>
              <div className="text-sm text-muted-foreground">Otimização Inclusa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;