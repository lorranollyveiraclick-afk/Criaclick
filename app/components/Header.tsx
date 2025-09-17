"use client";
import React, { useEffect, useState } from 'react';
import { useI18n } from '@/i18n';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { t } = useI18n();
  const navItems = [
    { label: t('header_home'), href: '#home' },
    { label: t('header_company'), href: '#empresa' },
    { label: t('header_solutions'), href: '#solucoes' },
    { label: t('header_portfolio'), href: '#portfolio' },
    { label: t('header_contact'), href: '#contato' },
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
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
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
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="py-3 px-4 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      {item.label}
                    </a>
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