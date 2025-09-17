"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Target, ShoppingCart, TrendingUp } from 'lucide-react';
import { useI18n } from '@/i18n';

const FuturisticServices = () => {
  const { t } = useI18n();
  const services = [
    {
      icon: Monitor,
      title: t('svc_sites_title'),
      description: t('svc_sites_desc'),
      features: [t('svc_sites_f1'), t('svc_sites_f2'), t('svc_sites_f3')]
    },
    {
      icon: Target,
      title: t('svc_landing_title'),
      description: t('svc_landing_desc'),
      features: [t('svc_landing_f1'), t('svc_landing_f2'), t('svc_landing_f3')]
    },
    {
      icon: ShoppingCart,
      title: t('svc_store_title'),
      description: t('svc_store_desc'),
      features: [t('svc_store_f1'), t('svc_store_f2'), t('svc_store_f3')]
    },
    {
      icon: TrendingUp,
      title: t('svc_marketing_title'),
      description: t('svc_marketing_desc'),
      features: [t('svc_marketing_f1'), t('svc_marketing_f2'), t('svc_marketing_f3')]
    }
  ];

  return (
    <section className="py-16 md:py-20 relative md:ml-12 lg:ml-16 overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(hsl(85 100% 50% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(85 100% 50% / 0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-primary">{t('services_our')}</span>{' '}
            <span className="text-foreground">{t('services_solutions')}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            {t('services_intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group relative bg-card/20 backdrop-blur border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-glow rounded-2xl overflow-hidden"
              >
                {/* Corner Elements */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-primary/50"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-primary/50"></div>
                
                <CardHeader className="text-center relative pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors border border-primary/30">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-sm sm:text-base text-muted-foreground">
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
                
                {/* Geometric Decoration */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-2 border-primary/20 rotate-45 opacity-50"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FuturisticServices;