"use client";
import React, { useEffect, useState } from 'react';
import { useI18n } from '@/i18n';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { t } = useI18n();
  
  const solutionsItems = [
    { label: t('solutions_sites_landing'), href: '/sites-landing-pages' },
    { label: t('solutions_lojas_virtuais'), href: '/lojas-virtuais' },
    { label: t('solutions_gestao_redes'), href: '/gestao-redes-sociais' },
  ];

  const portfolioItems = [
    { label: t('portfolio_sites'), href: '/portfolio-sites' },
    { label: t('portfolio_render_3d'), href: '/portfolio-render-3d' },
  ];

  const navItems = [
    { label: t('header_home'), href: '/' },
    { label: t('header_company'), href: '/empresa' },
    { label: t('header_solutions'), href: '#solucoes', hasDropdown: true, dropdownItems: solutionsItems },
    { label: t('header_portfolio'), href: '#portfolio', hasDropdown: true, dropdownItems: portfolioItems },
    { label: t('header_contact'), href: '/fale-conosco' },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        {/* Floating shell */}
        <div className="rounded-2xl border border-primary/20 bg-background/70 backdrop-blur shadow-glow/30 shadow-sm relative">
          <div className="px-4 md:px-6 h-14 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-neon bg-clip-text text-transparent">
                Criaclick
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <div 
                        className="relative"
                        onMouseEnter={() => {
                          if (item.label === t('header_solutions')) {
                            setIsSolutionsOpen(true);
                          } else if (item.label === t('header_portfolio')) {
                            setIsPortfolioOpen(true);
                          }
                        }}
                        onMouseLeave={() => {
                          if (item.label === t('header_solutions')) {
                            setIsSolutionsOpen(false);
                          } else if (item.label === t('header_portfolio')) {
                            setIsPortfolioOpen(false);
                          }
                        }}
                      >
                        <button className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center space-x-1 relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                          <span>{item.label}</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {((item.label === t('header_solutions') && isSolutionsOpen) || (item.label === t('header_portfolio') && isPortfolioOpen)) && (
                          <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-primary/20 rounded-xl shadow-lg backdrop-blur-sm z-50">
                            <div className="py-2">
                              {item.dropdownItems?.map((dropdownItem, index) => (
                                <a
                                  key={index}
                                  href={dropdownItem.href}
                                  className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                                >
                                  {dropdownItem.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Extended hover area to keep dropdown open */}
                      {((item.label === t('header_solutions') && isSolutionsOpen) || (item.label === t('header_portfolio') && isPortfolioOpen)) && (
                        <div 
                          className="absolute -inset-4 -bottom-8 bg-transparent"
                          onMouseEnter={() => {
                            if (item.label === t('header_solutions')) {
                              setIsSolutionsOpen(true);
                            } else if (item.label === t('header_portfolio')) {
                              setIsPortfolioOpen(true);
                            }
                          }}
                          onMouseLeave={() => {
                            if (item.label === t('header_solutions')) {
                              setIsSolutionsOpen(false);
                            } else if (item.label === t('header_portfolio')) {
                              setIsPortfolioOpen(false);
                            }
                          }}
                        />
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors font-medium relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary/40 rounded-lg transition-colors"
              aria-label="Abrir menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation - overlay + painel flutuante fixo (somente no cliente) */}
          {mounted && isMenuOpen && (
            <>
              <div 
                className="fixed inset-0 z-[60] bg-neutral-900/70" 
                onClick={() => setIsMenuOpen(false)}
              />
              <nav className="fixed z-[61] left-4 right-4 top-20 rounded-2xl border border-primary/20 bg-neutral-900/95 backdrop-blur-lg shadow-lg">
                <div className="flex flex-col py-2">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      {item.hasDropdown ? (
                        <div>
                          <div className="py-3 px-4 text-muted-foreground font-medium border-b border-primary/10">
                            {item.label}
                          </div>
                          <div className="pl-4">
                            {item.dropdownItems?.map((dropdownItem, index) => (
                              <a
                                key={index}
                                href={dropdownItem.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block py-2 px-4 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                              >
                                {dropdownItem.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="py-3 px-4 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                          {item.label}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;