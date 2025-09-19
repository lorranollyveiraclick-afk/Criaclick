"use client";
import VerticalSidebar from '@/components/VerticalSidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Lightbulb, 
  Heart, 
  Code, 
  Globe, 
  ShoppingCart, 
  TrendingUp,
  MapPin,
  MessageCircle
} from 'lucide-react';

export default function EmpresaPage() {
  const { t } = useI18n();

  const services = [
    {
      icon: Code,
      title: t('empresa_servico_sites'),
      description: t('empresa_servico_sites_desc')
    },
    {
      icon: Target,
      title: t('empresa_servico_landing'),
      description: t('empresa_servico_landing_desc')
    },
    {
      icon: ShoppingCart,
      title: t('empresa_servico_ecommerce'),
      description: t('empresa_servico_ecommerce_desc')
    },
    {
      icon: TrendingUp,
      title: t('empresa_servico_marketing'),
      description: t('empresa_servico_marketing_desc')
    }
  ];

  const values = [
    {
      icon: Target,
      title: t('empresa_valor_qualidade'),
      description: t('empresa_valor_qualidade_desc')
    },
    {
      icon: Lightbulb,
      title: t('empresa_valor_inovacao'),
      description: t('empresa_valor_inovacao_desc')
    },
    {
      icon: Heart,
      title: t('empresa_valor_parceria'),
      description: t('empresa_valor_parceria_desc')
    },
    {
      icon: TrendingUp,
      title: t('empresa_valor_resultados'),
      description: t('empresa_valor_resultados_desc')
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <VerticalSidebar />
      <main className="pt-28 md:pt-32">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background md:ml-12 lg:ml-16">
          {/* Grid Background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(hsl(85 100% 50% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(85 100% 50% / 0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />
          
          <div className="relative z-10 px-8 py-16">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-primary">
                    {t('empresa_hero_title')}
                  </h1>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-md italic">
                    {t('empresa_hero_quote')}
                  </p>
                </div>
              </div>

              {/* Right Content - Illustration */}
              <div className="relative">
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="border border-primary/50 rounded-2xl p-8 bg-card/20 backdrop-blur-sm shadow-glow">
                    
                    {/* Corner Elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg"></div>
                    
                    {/* Team Illustration */}
                    <div className="aspect-square bg-gradient-dark rounded-xl relative overflow-hidden">
                      
                      {/* Geometric Background */}
                      <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rounded-full animate-geometric-float"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-primary/20 rotate-45"></div>
                        <div className="absolute top-1/2 right-1/3 w-2 h-16 bg-primary/40"></div>
                        <div className="absolute bottom-1/3 left-1/2 w-16 h-2 bg-primary/40"></div>
                      </div>
                      
                      {/* Team Representation */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-64 relative">
                          <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-lg border border-primary/20 relative">
                            {/* Team members representation */}
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
                        <div className="text-xs text-muted-foreground">CriaClick Team</div>
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
          </div>

          {/* Geometric Decorations */}
          <div className="absolute top-20 right-20 w-64 h-64 border border-primary/10 rounded-full opacity-50"></div>
          <div className="absolute bottom-32 left-32 w-32 h-32 border border-primary/20 rotate-45"></div>
          <div className="absolute top-1/2 right-8 w-1 h-32 bg-primary/30"></div>
        </section>

        {/* Main Content */}
        <div className="md:ml-12 lg:ml-16">
          
          {/* Welcome Section */}
          <section className="px-8 py-16 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl font-bold text-primary">{t('empresa_bem_vindo')}</h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                  {t('empresa_bem_vindo_text')}
                </p>
              </div>
            </div>
          </section>

          {/* Who We Are Section */}
          <section className="px-8 py-16 bg-card/5">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary">{t('empresa_quem_somos')}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('empresa_quem_somos_text')}
                  </p>
                </div>
                <div className="relative">
                  <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">Equipe Especializada</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Profissionais experientes em desenvolvimento, design e marketing digital.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="px-8 py-16 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl font-bold text-primary">{t('empresa_servicos')}</h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                  {t('empresa_servicos_text')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="px-8 py-16 bg-card/5">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Target className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{t('empresa_missao')}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {t('empresa_missao_text')}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-primary">Nossa Visão</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser reconhecida como a principal agência digital da região, transformando negócios através de soluções tecnológicas inovadoras e estratégias de marketing digital eficazes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="px-8 py-16 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl font-bold text-primary">{t('empresa_valores')}</h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                  Os valores que norteiam nossa empresa e guiam cada projeto que desenvolvemos.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="px-8 py-16 bg-card/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl font-bold text-primary">{t('empresa_equipe')}</h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                  {t('empresa_equipe_text')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Desenvolvedores</h3>
                    <p className="text-muted-foreground text-sm">
                      Especialistas em tecnologias modernas e melhores práticas de desenvolvimento.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Designers</h3>
                    <p className="text-muted-foreground text-sm">
                      Criativos especializados em UX/UI e experiência do usuário.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Marketing</h3>
                    <p className="text-muted-foreground text-sm">
                      Estrategistas digitais focados em resultados e crescimento.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="px-8 py-16 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-primary">{t('empresa_contato')}</h2>
                  <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                    {t('empresa_contato_text')}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t('contactUs')}
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary/50 text-primary hover:bg-primary/10"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Nossa Localização
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  );
}
