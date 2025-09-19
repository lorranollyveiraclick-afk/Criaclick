"use client";
import VerticalSidebar from '@/components/VerticalSidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  FileText, 
  Target, 
  Camera, 
  BarChart3, 
  Users, 
  Eye, 
  TrendingUp,
  Laptop,
  CheckCircle,
  Check,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Youtube
} from 'lucide-react';

export default function GestaoRedesSociaisPage() {
  const { t } = useI18n();

  const socialFeatures = [
    {
      icon: FileText,
      title: t('redes_criacao_publicacao'),
      description: t('redes_criacao_publicacao_desc')
    },
    {
      icon: Target,
      title: t('redes_gestao_anuncios'),
      description: t('redes_gestao_anuncios_desc')
    },
    {
      icon: Camera,
      title: t('redes_producao_conteudo'),
      description: t('redes_producao_conteudo_desc')
    },
    {
      icon: BarChart3,
      title: t('redes_estrategia_marketing'),
      description: t('redes_estrategia_marketing_desc')
    },
    {
      icon: TrendingUp,
      title: t('redes_analise_metricas'),
      description: t('redes_analise_metricas_desc')
    },
    {
      icon: Users,
      title: t('redes_engajamento_audiencia'),
      description: t('redes_engajamento_audiencia_desc')
    },
    {
      icon: Eye,
      title: t('redes_monitoramento_marca'),
      description: t('redes_monitoramento_marca_desc')
    },
    {
      icon: TrendingUp,
      title: t('redes_crescimento_seguidores'),
      description: t('redes_crescimento_seguidores_desc')
    }
  ];

  const whyChooseFeatures = [
    {
      icon: Laptop,
      title: t('redes_experiencia_especializada'),
      description: t('redes_experiencia_especializada_desc')
    },
    {
      icon: CheckCircle,
      title: t('redes_resultados_comprovados'),
      description: t('redes_resultados_comprovados_desc')
    },
    {
      icon: Target,
      title: t('redes_estrategia_personalizada'),
      description: t('redes_estrategia_personalizada_desc')
    },
    {
      icon: MessageCircle,
      title: t('redes_suporte_dedicado'),
      description: t('redes_suporte_dedicado_desc')
    }
  ];

  const plans = [
    {
      title: t('plan_redes_basico'),
      price: t('plan_redes_basico_price'),
      popular: false,
      features: t('plan_redes_basico_features')
    },
    {
      title: t('plan_redes_profissional'),
      price: t('plan_redes_profissional_price'),
      popular: true,
      features: t('plan_redes_profissional_features')
    },
    {
      title: t('plan_redes_premium'),
      price: t('plan_redes_premium_price'),
      popular: false,
      features: t('plan_redes_premium_features')
    }
  ];

  const socialPlatforms = [
    { icon: Instagram, name: "Instagram", color: "text-pink-500" },
    { icon: Facebook, name: "Facebook", color: "text-blue-600" },
    { icon: Twitter, name: "Twitter", color: "text-blue-400" },
    { icon: Youtube, name: "YouTube", color: "text-red-500" }
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
              
              {/* Left Content - Illustration */}
              <div className="relative">
                <div className="relative w-full max-w-lg mx-auto">
                  <div className="border border-primary/50 rounded-2xl p-8 bg-card/20 backdrop-blur-sm shadow-glow">
                    
                    {/* Corner Elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg"></div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg"></div>
                    
                    {/* Social Media Illustration */}
                    <div className="aspect-square bg-gradient-dark rounded-xl relative overflow-hidden">
                      
                      {/* Geometric Background */}
                      <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rounded-full animate-geometric-float"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-primary/20 rotate-45"></div>
                        <div className="absolute top-1/2 right-1/3 w-2 h-16 bg-primary/40"></div>
                        <div className="absolute bottom-1/3 left-1/2 w-16 h-2 bg-primary/40"></div>
                      </div>
                      
                      {/* Social Media Elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-64 relative">
                          <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-lg border border-primary/20 relative">
                            {/* Social media icons representation */}
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
                        <div className="text-xs text-muted-foreground">Social Media</div>
                      </div>
                    </div>
                    
                    {/* Dashed Lines */}
                    <div className="absolute -top-8 left-1/2 w-px h-16 border-l-2 border-dashed border-primary/50"></div>
                    <div className="absolute -bottom-8 right-1/3 w-px h-16 border-l-2 border-dashed border-primary/50"></div>
                    <div className="absolute top-1/2 -right-8 h-px w-16 border-t-2 border-dashed border-primary/50"></div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-primary">
                    {t('redes_hero_title')}
                  </h1>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                    Descubra como nossa equipe especializada em marketing digital transforma sua presença nas redes sociais.
                  </p>
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
          
          {/* Main Title Section */}
          <section className="px-8 py-16 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl font-bold text-primary">{t('redes_main_title')}</h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                  Transforme sua presença digital com nossa estratégia completa de gestão de redes sociais.
                </p>
              </div>
            </div>
          </section>

          {/* Social Media Features Section */}
          <section className="px-8 py-16 bg-card/5">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {socialFeatures.map((feature, index) => (
                  <Card key={index} className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Social Platforms Section */}
          <section className="px-8 py-16 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-3xl font-bold text-primary">Gerenciamos Todas as Principais Plataformas</h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                  Especialistas em cada rede social para maximizar seu alcance e engajamento.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {socialPlatforms.map((platform, index) => (
                  <Card key={index} className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <platform.icon className={`w-8 h-8 ${platform.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{platform.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Gestão completa e estratégias personalizadas.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="px-8 py-16 bg-card/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl font-bold text-primary">{t('redes_por_que_escolher')}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseFeatures.map((feature, index) => (
                  <Card key={index} className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Plans Section */}
          <section className="px-8 py-16 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-4xl font-bold text-primary">{t('redes_planos_title')}</h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                  {t('redes_planos_subtitle')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {plans.map((plan, index) => (
                  <Card key={index} className={`border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-glow transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-primary/50' : ''}`}>
                    {plan.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                        POPULAR
                      </Badge>
                    )}
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-primary mb-2">{plan.title}</h3>
                        <div className="text-3xl font-bold text-foreground">{plan.price}</div>
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        size="lg"
                      >
                        EU QUERO
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Start Today Section */}
          <section className="px-8 py-16 bg-card/5">
            <div className="max-w-7xl mx-auto text-center space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-primary">{t('redes_comece_hoje')}</h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                  {t('redes_comece_hoje_text')}
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="px-8 py-16 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-primary">{t('redes_entre_contato')}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {t('redes_entre_contato_text')}
                    </p>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon w-full sm:w-auto"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t('sites_whatsapp_cta')}
                  </Button>
                </div>

                {/* Right Content - Contact Form */}
                <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">{t('form_nome')}</label>
                        <Input 
                          type="text" 
                          placeholder={t('form_nome')}
                          className="border-primary/30 focus:border-primary"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">{t('form_email')}</label>
                        <Input 
                          type="email" 
                          placeholder={t('form_email')}
                          className="border-primary/30 focus:border-primary"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">{t('form_assunto')}</label>
                        <Input 
                          type="text" 
                          placeholder={t('form_assunto')}
                          className="border-primary/30 focus:border-primary"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">{t('form_mensagem')}</label>
                        <Textarea 
                          placeholder={t('form_mensagem')}
                          className="border-primary/30 focus:border-primary min-h-[120px]"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        {t('form_enviar')}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  );
}
