"use client";
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Upload, Menu } from 'lucide-react';
import { useI18n } from '@/i18n';

const FuturisticHero = () => {
  const { t } = useI18n();
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-dark md:ml-12 lg:ml-16">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(hsl(85 100% 50% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(85 100% 50% / 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
      
      {/* Top Navigation removed as requested */}

      {/* Main Content */}
      <div className="relative z-10 px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-none">
                <span className="text-primary">{t('hero_digital')}</span>{' '}
                <span className="text-foreground">{t('hero_agencyIs')}</span><br />
                <span className="text-primary">{t('hero_theTrend')}</span><br />
                <span className="text-foreground">{t('hero_today')}</span>
              </h1>
              
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
                {t('hero_paragraph')}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon animate-pulse-glow"
              >
                {t('exploreNow')}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                {t('subscribe')}
              </Button>
            </div>
          </div>

          {/* Right Content - Geometric Art */}
          <div className="relative">
            {/* Neon Frame */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Outer Frame */}
              <div className="border border-primary/50 rounded-2xl p-8 bg-card/20 backdrop-blur-sm shadow-glow">
                
                {/* Corner Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg"></div>
                
                {/* Current Auction Badge */}
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground px-4 py-1 rounded-lg text-sm font-medium">
                  Current Auction
                </div>
                
                {/* 3D Element Container */}
                <div className="aspect-square bg-gradient-dark rounded-xl relative overflow-hidden">
                  
                  {/* Geometric Background */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rounded-full animate-geometric-float"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-primary/20 rotate-45"></div>
                    <div className="absolute top-1/2 right-1/3 w-2 h-16 bg-primary/40"></div>
                    <div className="absolute bottom-1/3 left-1/2 w-16 h-2 bg-primary/40"></div>
                  </div>
                  
                  {/* Central 3D Object Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-64 relative">
                      {/* Mock 3D Statue */}
                      <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-lg border border-primary/20 relative">
                        <div className="absolute top-4 left-4 w-8 h-8 bg-primary/40 rounded-full"></div>
                        <div className="absolute bottom-8 right-6 w-12 h-12 bg-primary/20 rounded-lg rotate-12"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-20 bg-primary/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                  
                  {/* Stats Badge */}
                  <div className="absolute bottom-4 right-4 bg-card/80 backdrop-blur border border-primary/30 rounded-lg p-3">
                    <div className="text-xs text-muted-foreground">ID: 145-789</div>
                  </div>
                </div>
                
                {/* Dashed Lines */}
                <div className="absolute -top-8 left-1/2 w-px h-16 border-l-2 border-dashed border-primary/50"></div>
                <div className="absolute -bottom-8 right-1/3 w-px h-16 border-l-2 border-dashed border-primary/50"></div>
                <div className="absolute top-1/2 -right-8 h-px w-16 border-t-2 border-dashed border-primary/50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Temporarily Hidden */}
        {/* 
            <div className="max-w-7xl mx-auto mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-card/20 backdrop-blur border border-primary/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">95k+</div>
                  <div className="text-sm text-muted-foreground">{t('hero_artworks')}</div>
            </div>
            <div className="bg-card/20 backdrop-blur border border-primary/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">35k+</div>
                  <div className="text-sm text-muted-foreground">{t('hero_artists')}</div>
            </div>
            <div className="bg-card/20 backdrop-blur border border-primary/30 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">45k+</div>
                  <div className="text-sm text-muted-foreground">{t('hero_auctions')}</div>
            </div>
          </div>
        </div>
        */}
      </div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-primary/10 rounded-full opacity-50"></div>
      <div className="absolute bottom-32 left-32 w-32 h-32 border border-primary/20 rotate-45"></div>
      <div className="absolute top-1/2 right-8 w-1 h-32 bg-primary/30"></div>
    </div>
  );
};

export default FuturisticHero;