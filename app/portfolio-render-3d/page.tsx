"use client";
import VerticalSidebar from '@/components/VerticalSidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useI18n } from '@/i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageCircle,
  Eye,
  Maximize2
} from 'lucide-react';

export default function PortfolioRender3DPage() {
  const { t } = useI18n();

  const renderItems = [
    {
      id: 'render-1',
      title: 'Interior Moderno com Pedras Naturais',
      description: 'Ambiente sofisticado com aplicação de pedras naturais',
      category: 'interior',
      image: '/bdedsr.webp',
      aspectRatio: 'tall'
    },
    {
      id: 'render-2',
      title: 'Design de Banheiro Luxuoso',
      description: 'Banheiro moderno com acabamentos em mármore',
      category: 'bathroom',
      image: '/bdf.webp',
      aspectRatio: 'wide'
    },
    {
      id: 'render-3',
      title: 'Quarto Elegante',
      description: 'Quarto com design minimalista e materiais nobres',
      category: 'interior',
      image: '/bedr.webp',
      aspectRatio: 'tall'
    },
    {
      id: 'render-4',
      title: 'Sala de Estar Contemporânea',
      description: 'Ambiente de convívio com elementos naturais',
      category: 'interior',
      image: '/bedsr.webp',
      aspectRatio: 'wide'
    },
    {
      id: 'render-5',
      title: 'Fachada Arquitetônica',
      description: 'Design exterior com pedras naturais',
      category: 'exterior',
      image: '/bg.webp',
      aspectRatio: 'square'
    },
    {
      id: 'render-6',
      title: 'Jardim Zen',
      description: 'Espaço externo com elementos naturais',
      category: 'exterior',
      image: '/bg2.webp',
      aspectRatio: 'wide'
    },
    {
      id: 'render-7',
      title: 'Sala de Jantar',
      description: 'Ambiente de jantar com mesa de mármore',
      category: 'interior',
      image: '/bjdf.webp',
      aspectRatio: 'tall'
    },
    {
      id: 'render-8',
      title: 'Cozinha Moderna',
      description: 'Cozinha com ilha central em granito',
      category: 'kitchen',
      image: '/gr-3.webp',
      aspectRatio: 'wide'
    },
    {
      id: 'render-9',
      title: 'Granito Clássico',
      description: 'Aplicação de granito em bancadas',
      category: 'material',
      image: '/GR.webp',
      aspectRatio: 'square'
    },
    {
      id: 'render-10',
      title: 'Mármore Branco',
      description: 'Mármore branco com veios naturais',
      category: 'material',
      image: '/gr1.webp',
      aspectRatio: 'tall'
    },
    {
      id: 'render-11',
      title: 'Granito Escuro',
      description: 'Granito preto com acabamento polido',
      category: 'material',
      image: '/GRS2.webp',
      aspectRatio: 'square'
    },
    {
      id: 'render-12',
      title: 'Pedra Natural Texturizada',
      description: 'Pedra com textura natural e irregular',
      category: 'material',
      image: '/GRSsS2.webp',
      aspectRatio: 'wide'
    },
    {
      id: 'render-13',
      title: 'Granito Cinza',
      description: 'Granito em tons de cinza',
      category: 'material',
      image: '/GRT-2.webp',
      aspectRatio: 'tall'
    },
    {
      id: 'render-14',
      title: 'Mármore Travertino',
      description: 'Mármore travertino com textura característica',
      category: 'material',
      image: '/grt.webp',
      aspectRatio: 'square'
    },
    {
      id: 'render-15',
      title: 'Mármore Bege',
      description: 'Mármore em tons bege e dourado',
      category: 'material',
      image: '/MB.webp',
      aspectRatio: 'tall'
    },
    {
      id: 'render-16',
      title: 'Mármore Exótico',
      description: 'Mármore com veios exóticos e coloridos',
      category: 'material',
      image: '/mbe.webp',
      aspectRatio: 'wide'
    },
    {
      id: 'render-17',
      title: 'Mármore Branco Premium',
      description: 'Mármore branco de alta qualidade',
      category: 'material',
      image: '/mbfe-819x1024.webp',
      aspectRatio: 'tall'
    },
    {
      id: 'render-18',
      title: 'Pedra Himalaia',
      description: 'Pedra do Himalaia com sal rosa',
      category: 'material',
      image: '/pmh-819x1024.webp',
      aspectRatio: 'tall'
    },
    {
      id: 'render-19',
      title: 'Pedra Natural Rustica',
      description: 'Pedra com acabamento rústico',
      category: 'material',
      image: '/pt-683x1024.webp',
      aspectRatio: 'tall'
    },
    {
      id: 'render-20',
      title: 'Design Arquitetônico',
      description: 'Projeto arquitetônico com pedras naturais',
      category: 'architectural',
      image: '/untitled.webp',
      aspectRatio: 'wide'
    },
    {
      id: 'render-21',
      title: 'Interior Minimalista',
      description: 'Design minimalista com materiais naturais',
      category: 'interior',
      image: '/19-819x1024.webp',
      aspectRatio: 'tall'
    },
    {
      id: 'render-22',
      title: 'Ambiente Corporativo',
      description: 'Escritório com acabamentos em pedra',
      category: 'commercial',
      image: '/21-819x1024.webp',
      aspectRatio: 'tall'
    }
  ];

  const getAspectRatioClasses = (aspectRatio: string) => {
    switch (aspectRatio) {
      case 'tall':
        return 'aspect-[3/4]';
      case 'wide':
        return 'aspect-[4/3]';
      case 'square':
        return 'aspect-square';
      default:
        return 'aspect-[3/4]';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'interior':
        return 'bg-blue-500';
      case 'bathroom':
        return 'bg-purple-500';
      case 'exterior':
        return 'bg-green-500';
      case 'kitchen':
        return 'bg-red-500';
      case 'material':
        return 'bg-orange-500';
      case 'architectural':
        return 'bg-pink-500';
      case 'commercial':
        return 'bg-indigo-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'interior':
        return 'Interiores';
      case 'bathroom':
        return 'Banheiros';
      case 'exterior':
        return 'Exteriores';
      case 'kitchen':
        return 'Cozinhas';
      case 'material':
        return 'Materiais';
      case 'architectural':
        return 'Arquitetônico';
      case 'commercial':
        return 'Comercial';
      default:
        return 'Geral';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <VerticalSidebar />
      <main className="pt-28 md:pt-32">
        
        {/* Main Content */}
        <div className="md:ml-12 lg:ml-16">
          
          {/* Portfolio Header Section */}
          <section className="px-8 py-16 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-6 mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-primary">{t('portfolio_render_title')}</h1>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                  {t('portfolio_render_subtitle')}
                </p>
              </div>
            </div>
          </section>

          {/* Portfolio Grid Section - Pexels Style */}
          <section className="px-8 py-16 bg-card/5">
            <div className="max-w-7xl mx-auto">
              <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                {renderItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="group break-inside-avoid cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                      {/* Real Image */}
                      <div className={`relative ${getAspectRatioClasses(item.aspectRatio)} overflow-hidden`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        
                        
                        {/* View Icon */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <div className="w-8 h-8 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Eye className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        
                        {/* Expand Icon */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <div className="w-8 h-8 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Maximize2 className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-white/90 text-xs leading-tight line-clamp-2">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-white/80 text-xs">
                              {getCategoryName(item.category)}
                            </span>
                            <span className="text-white/60 text-xs">
                              3D Render
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
                    <h2 className="text-4xl font-bold text-primary">{t('portfolio_entre_contato')}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {t('portfolio_entre_contato_text')}
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
