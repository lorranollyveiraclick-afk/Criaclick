"use client";
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { useI18n } from '@/i18n';

const FuturisticCTA = () => {
  const { t } = useI18n();
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

      {/* Geometric Background Elements */}
      <div className="absolute top-10 right-20 w-32 h-32 border border-primary/10 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 border border-primary/20 rotate-45"></div>
      <div className="absolute top-1/2 right-10 w-1 h-20 bg-primary/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Container */}
          <div className="relative bg-card/20 backdrop-blur border border-primary/30 rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden shadow-glow">
            {/* Corner Decorations */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-primary rounded-tl-2xl"></div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-primary rounded-br-2xl"></div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/20 border border-primary/40 rounded-full">
                  <Zap size={20} className="text-primary mr-2" />
                  <span className="text-primary font-medium">{t('cta_badge')}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  {t('cta_title_l1')} <br />
                  <span className="text-primary">{t('cta_title_click')}</span> {t('cta_title_l2')} <br />
                  <span className="text-primary">{t('cta_title_success')}</span>
                </h2>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t('cta_paragraph')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon group px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg animate-pulse-glow"
                  >
                    {t('contactUs')}
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Right Visual Element */}
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto relative">
                  {/* Central Frame */}
                  <div className="absolute inset-4 border border-primary/40 rounded-2xl bg-gradient-dark">
                    {/* Geometric Patterns */}
                    <div className="absolute inset-0 p-8">
                      {/* Circuit-like patterns */}
                      <div className="relative w-full h-full">
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/60"></div>
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/60"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/60"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/60"></div>
                        {/* Center Cross */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-20 h-2 bg-primary/60 mb-4"></div>
                          <div className="w-2 h-20 bg-primary/60 mx-auto"></div>
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                        <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-primary rounded-full animate-ping"></div>
                        <div className="absolute bottom-1/4 left-3/4 w-3 h-3 bg-primary rotate-45"></div>
                      </div>
                    </div>
                  </div>
                  {/* Outer Decorative Elements */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-primary/40 rotate-45"></div>
                  <div className="absolute -bottom-4 right-1/3 w-2 h-16 bg-primary/40"></div>
                  <div className="absolute top-1/3 -right-4 w-16 h-2 bg-primary/40"></div>
                  {/* Dashed Lines */}
                  <div className="absolute top-8 -left-8 w-16 h-px border-t-2 border-dashed border-primary/50"></div>
                  <div className="absolute bottom-8 -right-8 w-16 h-px border-t-2 border-dashed border-primary/50"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid Below */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 mt-10 md:mt-12 text-center">
            <div className="text-center p-6 bg-card/20 backdrop-blur-sm rounded-xl border border-primary/20">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24h</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t('cta_feat_support')}</div>
            </div>
            <div className="text-center p-6 bg-card/20 backdrop-blur-sm rounded-xl border border-primary/20">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">SSL</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t('cta_feat_ssl')}</div>
            </div>
            <div className="text-center p-6 bg-card/20 backdrop-blur-sm rounded-xl border border-primary/20">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">SEO</div>
              <div className="text-xs md:text-sm text-muted-foreground">{t('cta_feat_seo')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticCTA;