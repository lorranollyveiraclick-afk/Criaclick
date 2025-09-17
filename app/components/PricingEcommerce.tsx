"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ShoppingCart, Package, Store } from 'lucide-react';
import { useI18n } from '@/i18n';

const PricingEcommerce = () => {
  const { t } = useI18n();
  const plans = [
    {
      name: t('e1_name'),
      subtitle: t('e1_sub'),
      price: t('priceOnRequest'),
      description: t('e1_desc'),
      features: [
        t('e1_f1'),
        t('e1_f2'),
        t('e1_f3'),
        t('e1_f4'),
        t('e1_f5'),
        t('e1_f6')
      ],
      icon: ShoppingCart
    },
    {
      name: t('e2_name'),
      subtitle: t('e2_sub'),
      price: t('priceOnRequest'),
      description: t('e2_desc'),
      features: [
        t('e2_f1'),
        t('e2_f2'),
        t('e2_f3'),
        t('e2_f4'),
        t('e2_f5'),
        t('e2_f6'),
        t('e2_f7')
      ],
      icon: Package,
      popular: true
    },
    {
      name: t('e3_name'),
      subtitle: t('e3_sub'),
      price: t('priceOnRequest'),
      description: t('e3_desc'),
      features: [
        t('e3_f1'),
        t('e3_f2'),
        t('e3_f3'),
        t('e3_f4'),
        t('e3_f5'),
        t('e3_f6'),
        t('e3_f7')
      ],
      icon: Store
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(hsl(85 100% 50% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(85 100% 50% / 0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
      
      {/* Geometric Decorations */}
      <div className="absolute top-16 right-20 w-32 h-32 border border-primary/10 rotate-45"></div>
      <div className="absolute bottom-20 left-24 w-20 h-20 border border-primary/20 rounded-full"></div>
      <div className="absolute top-1/2 right-8 w-2 h-24 bg-primary/30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            {t('pricing_ecom_title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('pricing_ecom_sub')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative group transition-all duration-300 hover:scale-105 bg-card/20 backdrop-blur border rounded-2xl overflow-hidden ${
                  plan.popular 
                    ? 'border-primary shadow-glow' 
                    : 'border-primary/30 hover:border-primary/60'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-3 inset-x-0 z-10 flex justify-center">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs md:text-sm font-medium shadow-neon">
                      {t('recommended')}
                    </div>
                  </div>
                )}

                {/* Corner Elements */}
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/50 rounded-tr-lg"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary/50 rounded-bl-lg"></div>

                <CardHeader className="text-center pb-6 md:pb-8 relative pt-12">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/30 transition-colors border border-primary/30">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <CardTitle className="text-xl md:text-2xl mb-1">{plan.name}</CardTitle>
                  <div className="text-primary font-medium text-xs md:text-sm mb-2">{plan.subtitle}</div>
                  <CardDescription className="text-muted-foreground mb-4">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="space-y-1">
                    <div className="text-2xl md:text-3xl font-bold text-primary">
                      {plan.price}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {t('value_custom')}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full rounded-xl ${
                      plan.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon' 
                        : 'bg-transparent border border-primary/60 text-primary hover:bg-primary/10'
                    }`}
                    size="lg"
                  >
                    {t('iWant')}
                  </Button>
                </CardContent>

                {/* Geometric Decoration */}
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-primary/30 rotate-45 opacity-50"></div>
              </Card>
            );
          })}
        </div>

        {/* Features Highlight */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            {t('features_included_title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              t('e_included_1'),
              t('e_included_2'),
              t('e_included_3'),
              t('e_included_4'),
              t('e_included_5'),
              t('e_included_6'),
              t('e_included_7'),
              t('e_included_8')
            ].map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-card/20 backdrop-blur-sm rounded-lg border border-primary/30">
                <Check className="w-5 h-5 text-primary mr-3" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingEcommerce;