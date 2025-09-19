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
  Laptop, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';

export default function PortfolioSitesPage() {
  const { t } = useI18n();

  const portfolioItems = [
    {
      title: t('portfolio_vida_capixaba'),
      description: t('portfolio_vida_capixaba_desc'),
      category: 'news'
    },
    {
      title: t('portfolio_agatha_joias'),
      description: t('portfolio_agatha_joias_desc'),
      category: 'ecommerce'
    },
    {
      title: t('portfolio_dominando_financas'),
      description: t('portfolio_dominando_financas_desc'),
      category: 'landing'
    },
    {
      title: t('portfolio_portifor'),
      description: t('portfolio_portifor_desc'),
      category: 'institutional'
    },
    {
      title: t('portfolio_elegance_vision'),
      description: t('portfolio_elegance_vision_desc'),
      category: 'ecommerce'
    },
    {
      title: t('portfolio_conquista_marmore'),
      description: t('portfolio_conquista_marmore_desc'),
      category: 'institutional'
    },
    {
      title: t('portfolio_wimagran'),
      description: t('portfolio_wimagran_desc'),
      category: 'institutional'
    },
    {
      title: t('portfolio_granfort_export'),
      description: t('portfolio_granfort_export_desc'),
      category: 'institutional'
    },
    {
      title: t('portfolio_gustavo_mairink'),
      description: t('portfolio_gustavo_mairink_desc'),
      category: 'landing'
    },
    {
      title: t('portfolio_aquila_stone'),
      description: t('portfolio_aquila_stone_desc'),
      category: 'institutional'
    },
    {
      title: t('portfolio_gramobras'),
      description: t('portfolio_gramobras_desc'),
      category: 'institutional'
    },
    {
      title: t('portfolio_imarcal'),
      description: t('portfolio_imarcal_desc'),
      category: 'institutional'
    },
    {
      title: t('portfolio_stone_machine'),
      description: t('portfolio_stone_machine_desc'),
      category: 'institutional'
    },
    {
      title: t('portfolio_dorico'),
      description: t('portfolio_dorico_desc'),
      category: 'institutional'
    },
    {
      title: t('portfolio_cordeiro_rep'),
      description: t('portfolio_cordeiro_rep_desc'),
      category: 'institutional'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'news':
        return 'bg-blue-500';
      case 'ecommerce':
        return 'bg-green-500';
      case 'landing':
        return 'bg-purple-500';
      case 'institutional':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const renderWebsiteMockup = (item: any) => {
    switch (item.category) {
      case 'news':
        return (
          <div className="aspect-video bg-white rounded-md overflow-hidden border border-gray-200">
            {/* Website Header */}
            <div className="bg-primary text-white p-3 text-center">
              <div className="text-sm font-bold">VIDA CAPIXABA NEWS</div>
            </div>
            
            {/* Navigation */}
            <div className="bg-gray-100 px-4 py-2 flex space-x-4 text-xs">
              <span className="text-gray-600">Início</span>
              <span className="text-gray-600">Política</span>
              <span className="text-gray-600">Esportes</span>
              <span className="text-gray-600">Cultura</span>
            </div>
            
            {/* News Articles */}
            <div className="p-3 space-y-2">
              {/* Article 1 */}
              <div className="flex space-x-2">
                <div className="w-12 h-8 bg-gray-300 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-800 leading-tight">Título da notícia principal...</div>
                  <div className="text-xs text-gray-500 mt-1">Há 2 horas</div>
                </div>
              </div>
              
              {/* Article 2 */}
              <div className="flex space-x-2">
                <div className="w-12 h-8 bg-gray-300 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-800 leading-tight">Segunda notícia importante...</div>
                  <div className="text-xs text-gray-500 mt-1">Há 4 horas</div>
                </div>
              </div>
              
              {/* Article 3 */}
              <div className="flex space-x-2">
                <div className="w-12 h-8 bg-gray-300 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-800 leading-tight">Terceira notícia do dia...</div>
                  <div className="text-xs text-gray-500 mt-1">Há 6 horas</div>
                </div>
              </div>
              
              {/* More content indicator */}
              <div className="text-center py-2">
                <div className="text-xs text-gray-400">...</div>
              </div>
            </div>
          </div>
        );

      case 'ecommerce':
        return (
          <div className="aspect-video bg-white rounded-md overflow-hidden border border-gray-200">
            {/* Website Header */}
            <div className="bg-green-600 text-white p-2 text-center">
              <div className="text-xs font-bold">AGATHA JOIAS</div>
            </div>
            
            {/* Navigation */}
            <div className="bg-gray-100 px-3 py-1 flex space-x-3 text-xs">
              <span className="text-gray-600">Produtos</span>
              <span className="text-gray-600">Categorias</span>
              <span className="text-gray-600">Carrinho</span>
            </div>
            
            {/* Products Grid */}
            <div className="p-2 grid grid-cols-2 gap-2">
              {/* Product 1 */}
              <div className="bg-gray-100 rounded p-1">
                <div className="w-full h-8 bg-gray-300 rounded mb-1"></div>
                <div className="text-xs font-medium">Anel Prata</div>
                <div className="text-xs text-green-600 font-bold">R$ 89,90</div>
              </div>
              
              {/* Product 2 */}
              <div className="bg-gray-100 rounded p-1">
                <div className="w-full h-8 bg-gray-300 rounded mb-1"></div>
                <div className="text-xs font-medium">Colar Ouro</div>
                <div className="text-xs text-green-600 font-bold">R$ 199,90</div>
              </div>
              
              {/* Product 3 */}
              <div className="bg-gray-100 rounded p-1">
                <div className="w-full h-8 bg-gray-300 rounded mb-1"></div>
                <div className="text-xs font-medium">Pulseira</div>
                <div className="text-xs text-green-600 font-bold">R$ 129,90</div>
              </div>
              
              {/* Product 4 */}
              <div className="bg-gray-100 rounded p-1">
                <div className="w-full h-8 bg-gray-300 rounded mb-1"></div>
                <div className="text-xs font-medium">Brincos</div>
                <div className="text-xs text-green-600 font-bold">R$ 79,90</div>
              </div>
            </div>
          </div>
        );

      case 'landing':
        return (
          <div className="aspect-video bg-white rounded-md overflow-hidden border border-gray-200">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-3 text-center">
              <div className="text-sm font-bold mb-1">DOMINANDO AS FINANÇAS</div>
              <div className="text-xs">Transforme sua vida financeira</div>
            </div>
            
            {/* CTA Section */}
            <div className="p-3 space-y-2">
              <div className="bg-purple-100 rounded p-2 text-center">
                <div className="text-xs font-bold text-purple-800">Quero me inscrever!</div>
              </div>
              
              {/* Features */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="text-xs text-gray-700">Controle total</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="text-xs text-gray-700">Relatórios detalhados</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="text-xs text-gray-700">Suporte 24/7</div>
                </div>
              </div>
              
              {/* Form */}
              <div className="space-y-1">
                <div className="w-full h-4 bg-gray-200 rounded"></div>
                <div className="w-full h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        );

      case 'institutional':
        return (
          <div className="aspect-video bg-white rounded-md overflow-hidden border border-gray-200">
            {/* Website Header */}
            <div className="bg-orange-600 text-white p-2 text-center">
              <div className="text-xs font-bold">{item.title.toUpperCase()}</div>
            </div>
            
            {/* Navigation */}
            <div className="bg-gray-100 px-3 py-1 flex space-x-3 text-xs">
              <span className="text-gray-600">Início</span>
              <span className="text-gray-600">Sobre</span>
              <span className="text-gray-600">Serviços</span>
              <span className="text-gray-600">Contato</span>
            </div>
            
            {/* Content */}
            <div className="p-3 space-y-2">
              {/* Hero Image */}
              <div className="w-full h-8 bg-gray-300 rounded"></div>
              
              {/* Content Blocks */}
              <div className="space-y-1">
                <div className="text-xs font-bold text-gray-800">Nossa Empresa</div>
                <div className="text-xs text-gray-600 leading-tight">Tradição e qualidade em cada projeto...</div>
              </div>
              
              {/* Services */}
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-gray-100 rounded p-1 text-center">
                  <div className="text-xs font-medium">Serviço 1</div>
                </div>
                <div className="bg-gray-100 rounded p-1 text-center">
                  <div className="text-xs font-medium">Serviço 2</div>
                </div>
              </div>
              
              {/* Contact */}
              <div className="text-center">
                <div className="text-xs text-orange-600 font-bold">Entre em contato</div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-md flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 bg-primary/30 rounded-lg mx-auto mb-2"></div>
              <div className="text-xs text-gray-600">Website Preview</div>
            </div>
          </div>
        );
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
                <h1 className="text-4xl md:text-5xl font-bold text-primary">{t('portfolio_sites_title')}</h1>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                  {t('portfolio_sites_subtitle')}
                </p>
              </div>
            </div>
          </section>

          {/* Portfolio Grid Section */}
          <section className="px-8 py-16 bg-card/5">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioItems.map((item, index) => (
                  <Card key={index} className="group border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-glow transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      {/* Laptop Mockup with Geometric Elements */}
                      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-t-lg overflow-hidden">
                        
                        {/* Geometric Elements Around Laptop */}
                        {/* Top-left Atom */}
                        <div className="absolute -top-2 -left-2 w-12 h-12">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-gray-600 rounded-full opacity-30"></div>
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-primary"></div>
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                        </div>
                        
                        {/* Top-right Geometric Shapes */}
                        <div className="absolute -top-1 -right-1 w-8 h-8">
                          <div className="absolute top-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-primary"></div>
                          <div className="absolute top-2 right-2 w-4 h-2 bg-primary/70 rounded-sm"></div>
                          <div className="absolute top-4 left-0 w-6 h-0.5 bg-gray-600"></div>
                          <div className="absolute top-6 left-2 w-4 h-0.5 bg-gray-600"></div>
                          <div className="absolute top-8 left-4 w-2 h-0.5 bg-gray-600"></div>
                        </div>
                        
                        {/* Bottom-left Large Geometric Shape */}
                        <div className="absolute -bottom-4 -left-4 w-16 h-16">
                          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[16px] border-t-primary transform rotate-12"></div>
                          <div className="absolute bottom-2 left-2 w-6 h-3 bg-primary/80 rounded-sm"></div>
                          <div className="absolute bottom-4 left-4 w-4 h-2 bg-primary/60 rounded-sm"></div>
                        </div>
                        
                        {/* Bottom-middle Sparkle */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                          <div className="relative w-6 h-6 bg-primary rounded-full">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-white"></div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-white"></div>
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-0.5 bg-white"></div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-0.5 bg-white"></div>
                          </div>
                        </div>
                        
                        {/* Bottom-right Small Atom */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-gray-600 rounded-full opacity-30"></div>
                        </div>
                        
                        {/* Laptop Screen */}
                        <div className="relative bg-white rounded-lg p-4 shadow-inner z-10">
                          {renderWebsiteMockup(item)}
                        </div>
                        
                        {/* Laptop Base */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg z-10"></div>
                        
                        {/* Category Badge */}
                        <div className={`absolute top-4 left-4 w-3 h-3 ${getCategoryColor(item.category)} rounded-full z-20`}></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                        
                        {/* Category Indicator */}
                        <div className="mt-4 flex items-center space-x-2">
                          <div className={`w-2 h-2 ${getCategoryColor(item.category)} rounded-full`}></div>
                          <span className="text-xs text-muted-foreground capitalize">
                            {item.category === 'news' ? 'Portal de Notícias' :
                             item.category === 'ecommerce' ? 'Loja Virtual' :
                             item.category === 'landing' ? 'Landing Page' :
                             'Site Institucional'}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
