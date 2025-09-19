"use client";
import { Phone, Mail, MapPin, Instagram, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useI18n } from '@/i18n';

const Footer = () => {
  const { locale, setLocale, t } = useI18n();
  
  const solutionsLinks = [
    { label: t('solutions_sites_landing'), href: '/sites-landing-pages' },
    { label: t('solutions_lojas_virtuais'), href: '/lojas-virtuais' },
    { label: t('solutions_gestao_redes'), href: '/gestao-redes-sociais' }
  ];

  const institutionalLinks = [
    { label: t('footer_link_company'), href: '/empresa' },
    { label: t('footer_link_contact'), href: '#contato' },
    { label: t('footer_link_privacy'), href: '#privacidade' },
    { label: t('footer_link_terms'), href: '#termos' }
  ];

  return (
    <footer className="relative overflow-hidden border-t border-primary/30 bg-gradient-to-t from-card/20 to-background">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(hsl(85 100% 50% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(85 100% 50% / 0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
      
      {/* Geometric Decorations */}
      <div className="absolute top-16 right-20 w-20 h-20 border border-primary/20 rounded-full"></div>
      <div className="absolute bottom-10 left-16 w-12 h-12 border border-primary/10 rotate-45"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-primary mb-4">
              {t('footer_company_title')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              {t('footer_company_desc')}
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/criaclick" 
                className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center hover:bg-primary/30 hover:border-primary/50 transition-all group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} className="text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">{t('header_solutions')}</h4>
            <nav className="space-y-4">
              {solutionsLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Institutional Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">{t('footer_links')}</h4>
            <nav className="space-y-4">
              {institutionalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info + Language */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">{t('footer_contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>{t('footer_address_line1')}</div>
                  <div>{t('footer_address_line2')}</div>
                </div>
              </div>
              
              <a 
                href="mailto:contato@criaclick.com.br"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail size={20} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">contato@criaclick.com.br</span>
              </a>
              
              <a 
                href="https://wa.me/5598991754173"
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone size={20} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">+55 (98) 99175-4173</span>
              </a>

              {/* Language selector linked to i18n provider */}
              <div className="flex items-center space-x-2 pt-2">
                <Globe size={18} className="text-primary" />
                {['pt','en','es'].map((code) => (
                  <button
                    key={code}
                    onClick={() => setLocale(code as any)}
                    className={`px-2 py-1 text-xs rounded ${locale===code?'bg-primary text-primary-foreground':'text-muted-foreground hover:text-primary'}`}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              {t('footer_rights').replace('{year}', String(new Date().getFullYear()))}
            </div>
            <div className="text-sm text-muted-foreground flex items-center">
              {t('footer_built_by')}{' '}
              <span className="text-primary mx-1 animate-pulse">❤️</span>{' '}
              {t('footer_team')}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-primary/20 rotate-45 opacity-50"></div>
        <div className="absolute top-8 left-1/2 w-2 h-16 bg-primary/10"></div>
      </div>
    </footer>
  );
};

export default Footer;