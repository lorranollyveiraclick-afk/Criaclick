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
  Mail,
  Phone,
  MessageCircle,
  Clock
} from 'lucide-react';

export default function FaleConoscoPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <VerticalSidebar />
      <main className="pt-28 md:pt-32">
        
        {/* Main Content */}
        <div className="md:ml-12 lg:ml-16">
          
          {/* Contact Page Content */}
          <section className="px-8 py-16 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                
                {/* Left Section - Contact Form */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">{t('contact_title')}</h1>
                    <div className="w-24 h-1 bg-primary rounded-full"></div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {t('contact_subtitle')}
                    </p>
                  </div>
                  
                  {/* Contact Form */}
                  <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                    <CardContent className="p-8">
                      <form className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">
                            {t('form_nome_label')}
                          </label>
                          <Input 
                            type="text" 
                            placeholder={t('form_nome_placeholder')}
                            className="border-primary/30 focus:border-primary bg-background"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">
                            {t('form_email_label')}
                          </label>
                          <Input 
                            type="email" 
                            placeholder={t('form_email_placeholder')}
                            className="border-primary/30 focus:border-primary bg-background"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">
                            {t('form_assunto_label')}
                          </label>
                          <Input 
                            type="text" 
                            placeholder={t('form_assunto_placeholder')}
                            className="border-primary/30 focus:border-primary bg-background"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">
                            {t('form_mensagem_label')}
                          </label>
                          <Textarea 
                            placeholder={t('form_mensagem_placeholder')}
                            className="border-primary/30 focus:border-primary min-h-[120px] bg-background"
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon"
                        >
                          {t('form_enviar_button')}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Section - Contact Channels */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">{t('contact_channels_title')}</h2>
                    <div className="w-24 h-1 bg-primary rounded-full"></div>
                  </div>
                  
                  {/* Contact Channels */}
                  <div className="space-y-6">
                    
                    {/* Email Service */}
                    <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-glow transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {t('contact_email_service')}
                            </h3>
                            <p className="text-primary font-medium mb-1">
                              {t('contact_email_address')}
                            </p>
                            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                              <Clock className="w-4 h-4" />
                              <span>{t('contact_email_hours')}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Phone Service */}
                    <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-glow transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {t('contact_phone_service')}
                            </h3>
                            <p className="text-primary font-medium mb-1">
                              {t('contact_phone_number')}
                            </p>
                            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                              <Clock className="w-4 h-4" />
                              <span>{t('contact_phone_hours')}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* WhatsApp Service */}
                    <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent hover:shadow-glow transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="w-6 h-6 text-green-500" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {t('contact_whatsapp_service')}
                            </h3>
                            <p className="text-green-500 font-medium mb-1">
                              {t('contact_whatsapp_number')}
                            </p>
                            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                              <Clock className="w-4 h-4" />
                              <span>{t('contact_whatsapp_hours')}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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
