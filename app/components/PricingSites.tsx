"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown } from 'lucide-react';
import { useI18n } from '@/i18n';

const PricingSites = () => {
  const { t } = useI18n();
  const plans = [
    {
      name: t('plan_basic'),
      price: 'R$ 97',
      period: '/mês',
      description: t('plan_basic_desc'),
      features: [
        t('feat_responsive'),
        t('feat_5pages'),
        t('feat_ssl'),
        t('feat_social'),
        t('feat_form'),
        t('feat_support_email')
      ],
      popular: false,
      icon: Star
    },
    {
      name: t('plan_prof'),
      price: 'R$ 147',
      period: '/mês',
      description: t('plan_prof_desc'),
      features: [
        'Tudo do plano básico',
        t('feat_15pages'),
        t('feat_blog'),
        t('feat_seo_adv'),
        t('feat_ga'),
        t('feat_chat'),
        t('feat_priority_support')
      ],
      popular: true,
      icon: Crown
    },
    {
      name: t('plan_premium'),
      price: t('priceOnRequest'),
      period: '',
      description: t('plan_premium_desc'),
      features: [
        t('feat_unlimited_pages'),
        t('feat_custom_design'),
        t('feat_custom_features'),
        t('feat_integrations'),
        t('feat_dedicated_support'),
        t('feat_strategy')
      ],
      popular: false,
      icon: Crown
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
      <div className="absolute top-20 right-32 w-24 h-24 border border-primary/20 rounded-full"></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 border border-primary/10 rotate-45"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            {t('pricing_sites_title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('pricing_sites_sub')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
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
                      {t('mostPopular')}
                    </div>
                  </div>
                )}

                {/* Corner Elements */}
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary/50 rounded-tr-lg"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary/50 rounded-bl-lg"></div>

                <CardHeader className="text-center pt-12 pb-6 md:pb-8 relative">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <CardTitle className="text-xl md:text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="space-y-1">
                    <div className="text-3xl md:text-4xl font-bold text-primary">
                      {plan.price}
                      <span className="text-lg text-muted-foreground font-normal">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm md:text-base">{feature}</span>
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
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-2 border-primary/30 rotate-45 opacity-50"></div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-4">
            {t('plans_include_title')}
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Check className="w-4 h-4 text-primary mr-2" />
              {t('no_setup_fee')}
            </span>
            <span className="flex items-center">
              <Check className="w-4 h-4 text-primary mr-2" />
              {t('cancel_anytime')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSites;