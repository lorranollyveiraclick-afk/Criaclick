import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                <Zap size={16} className="text-primary mr-2" />
                <span className="text-sm text-primary font-medium">Agência Digital Premium</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Não seja <span className="bg-gradient-neon bg-clip-text text-transparent">amador</span>,
                <br />registre seu domínio.
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Obtenha email profissional e construa sua presença digital com nossa expertise de mais de 5 anos no mercado.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon group"
              >
                Começar Agora
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/5"
              >
                Ver Portfólio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl"></div>
            <div className="absolute inset-4 bg-card border border-primary/20 rounded-2xl shadow-card backdrop-blur-sm">
              <div className="p-8 h-full flex flex-col justify-center space-y-6">
                {/* Mock Browser Window */}
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="text-primary" size={20} />
                    <span className="text-sm text-muted-foreground">www.suaempresa.com.br</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="text-primary" size={16} />
                  <span className="text-primary">SSL Certificado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;