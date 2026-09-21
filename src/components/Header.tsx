import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight, Sparkles, Download } from 'lucide-react';
import { BAKERY_INFO, NAVIGATION_LINKS } from '../data/bakeryData';

interface HeaderProps {
  onOpenContactModal: () => void;
  onOpenZipModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContactModal, onOpenZipModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAVIGATION_LINKS.map(link => link.id);
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    // Condition 5: Sticky Header with 3 Divisions: Logo SS, Navigation Menu, and Contact Button
    <header 
      id="main-header"
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#090D16]/95 backdrop-blur-xl border-amber-500/25 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3' 
          : 'bg-[#090D16]/80 backdrop-blur-md border-amber-500/15 py-4'
      }`}
      style={{ position: 'sticky', top: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* DIVISION 1: Logo "SS" & Futuristic Brand Title */}
          <div className="flex items-center gap-3 shrink-0">
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="group flex items-center gap-3 focus:outline-none"
              id="header-logo-link"
            >
              <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 text-slate-950 font-orienta font-extrabold text-xl tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.5)] border border-amber-300/40 group-hover:scale-105 transition-transform duration-300">
                <span className="relative z-10">{BAKERY_INFO.monogram}</span>
                <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-orienta text-lg sm:text-xl font-bold tracking-widest text-slate-100 group-hover:text-amber-400 transition-colors">
                    SS BAKERY
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                </div>
                <span className="text-[10px] tracking-widest uppercase font-radiocanada text-amber-400/80 -mt-0.5">
                  Quantum Hearth &bull; Est. 2026
                </span>
              </div>
            </a>
          </div>

          {/* DIVISION 2: Navigation Menu (Desktop >= 1024px) */}
          <nav 
            id="desktop-navigation" 
            className="hidden lg:flex items-center gap-1.5 xl:gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-amber-500/20 backdrop-blur-md"
          >
            {NAVIGATION_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-orienta transition-all duration-300 relative ${
                    isActive
                      ? 'text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 font-semibold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                      : 'text-slate-300 hover:text-amber-300 hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* DIVISION 3: Contact & Action Button (Universal Button Hover Effect) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Download/Export Code Zip Button */}
            <button
              id="header-zip-export-btn"
              onClick={onOpenZipModal}
              title="Download Editable Source Code ZIP"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-orienta text-amber-400 bg-slate-900/80 border border-amber-500/30 hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-300"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Project ZIP</span>
            </button>

            {/* Condition 5: Contact Button with universal hovering effect */}
            <button
              id="header-contact-btn"
              onClick={onOpenContactModal}
              className="btn-universal text-xs sm:text-sm !py-2.5 !px-4 sm:!px-5"
            >
              <Phone className="w-3.5 h-3.5 text-slate-950" />
              <span>Contact Concierge</span>
            </button>

            {/* Condition 9: Hamburger menu toggle for Tab (<1024px) and Mobile (<768px) */}
            <button
              id="mobile-hamburger-toggle"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2.5 rounded-xl bg-slate-900/80 border border-amber-500/30 text-amber-400 hover:text-amber-300 hover:border-amber-400 focus:outline-none transition-colors"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-amber-400 animate-in spin-in-90 duration-200" />
              ) : (
                <Menu className="w-6 h-6 text-amber-400 animate-in spin-in-0 duration-200" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Condition 9: Mobile & Tablet Slide-down Hamburger Drawer */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="lg:hidden w-full bg-[#090D16]/98 border-b border-amber-500/30 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl transition-all duration-300"
        >
          <div className="flex flex-col space-y-2 py-2">
            <div className="px-3 py-1.5 text-xs uppercase tracking-widest text-amber-400/70 font-orienta border-b border-slate-800/80 mb-1">
              Navigation Menu
            </div>
            {NAVIGATION_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-orienta transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                      : 'text-slate-200 hover:bg-slate-800/70 hover:text-amber-300'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-400/60'}`} />
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-radiocanada">
              <span>Status: <strong className="text-amber-400 font-normal">Hearth Ready (245°C)</strong></span>
              <span>{BAKERY_INFO.phone}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenZipModal();
                }}
                className="btn-universal-secondary !py-2.5 !text-xs w-full"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get Source ZIP</span>
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="btn-universal !py-2.5 !text-xs w-full"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Contact Desk</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
