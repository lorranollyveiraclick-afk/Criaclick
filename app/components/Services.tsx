import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Target, ShoppingCart, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Sites para Empresas',
      description: 'Websites profissionais e responsivos que convertem visitantes em clientes.',
      features: ['Design Responsivo', 'SEO Otimizado', 'Carregamento Rápido']
    },
    {
      icon: Target,
      title: 'Landing Pages',
      description: 'Páginas de alta conversão focadas em capturar leads e gerar vendas.',
      features: ['Alta Conversão', 'A/B Testing', 'Integração CRM']
    },
    {
      icon: ShoppingCart,
      title: 'Lojas Virtuais',
      description: 'E-commerces completos com sistema de pagamento e gestão integrada.',
      features: ['Pagamentos Online', 'Gestão de Estoque', 'Multi-plataforma']
    },
    {
      icon: TrendingUp,
      title: 'Assessoria de Marketing',
      description: 'Estratégias digitais personalizadas para acelerar seu crescimento.',
      features: ['Marketing Digital', 'Redes Sociais', 'Análise de Dados']
    }
  ];

  return (
    <section id="solucoes" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Nossas <span className="bg-gradient-neon bg-clip-text text-transparent">Soluções</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A Criaclick possui um time de especialistas prontos para desenvolver o que você precisa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-neon transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="text-sm text-muted-foreground flex items-center justify-center"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;