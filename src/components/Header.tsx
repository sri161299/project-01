import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight, Sliders, Zap } from 'lucide-react';

interface HeaderProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
  onOpenSettings?: () => void;
  activeProvider?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuth, onOpenSettings, activeProvider = 'huggingface' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <div className="w-full max-w-4xl bg-[#0c0e22]/80 backdrop-blur-xl border border-[#7864ff]/25 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.7),0_0_20px_-8px_rgba(117,104,255,0.4)] transition-all duration-300 hover:border-[#8c78ff]/50 pointer-events-auto flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group text-decoration-none">
          <div className="relative w-7 h-7 rounded-full bg-gradient-to-tr from-[#5545ff] to-[#8a7bff] flex items-center justify-center shadow-[0_0_14px_rgba(117,104,255,0.5)] transition-transform duration-300 group-hover:scale-105">
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
            <span className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-25" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-white group-hover:text-[#d6d5ef] transition-colors">
            Arch<span className="text-[#8c78ff]">AI</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          <a
            href="#home"
            className="text-sm font-medium text-[#d6d5ef] hover:text-white transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-[#d6d5ef] hover:text-white transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-sm font-medium text-[#d6d5ef] hover:text-white transition-colors duration-200"
          >
            Demo
          </a>
          <a
            href="#gallery"
            className="text-sm font-medium text-[#d6d5ef] hover:text-white transition-colors duration-200"
          >
            Gallery
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-[#d6d5ef] hover:text-white transition-colors duration-200"
          >
            Pricing
          </a>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium text-[#c4bdff] bg-[#121430] hover:bg-[#1c1f48] border border-[#7864ff]/30 transition-colors cursor-pointer"
              title="Image Generation Provider Settings"
            >
              <Sliders className="w-3.5 h-3.5 text-[#8c78ff]" />
              <span className="hidden sm:inline capitalize font-mono text-[11px]">{activeProvider}</span>
            </button>
          )}

          <button
            onClick={() => onOpenAuth('login')}
            className="hidden sm:inline-block text-sm font-medium text-[#d6d5ef] hover:text-white transition-colors px-2 py-1 cursor-pointer"
          >
            Login
          </button>
          
          <button
            onClick={() => onOpenAuth('signup')}
            className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-4.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-full text-white bg-gradient-to-r from-[#5545ff] to-[#7568ff] border border-white/20 shadow-[0_4px_18px_rgba(85,69,255,0.45)] hover:shadow-[0_6px_25px_rgba(117,104,255,0.65)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer active:scale-95"
          >
            <span>Sign Up</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#d6d5ef] hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-[#0a0c20]/95 backdrop-blur-2xl border border-[#7864ff]/30 rounded-2xl p-5 shadow-2xl pointer-events-auto flex flex-col gap-4 text-center">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm text-[#d6d5ef] hover:text-white"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm text-[#d6d5ef] hover:text-white"
          >
            Features
          </a>
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm text-[#d6d5ef] hover:text-white"
          >
            Demo
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm text-[#d6d5ef] hover:text-white"
          >
            Gallery
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-sm text-[#d6d5ef] hover:text-white"
          >
            Pricing
          </a>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="py-2 text-sm text-[#d6d5ef] hover:text-white"
            >
              Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('signup');
              }}
              className="py-2.5 text-sm font-semibold rounded-full text-white bg-gradient-to-r from-[#5545ff] to-[#7568ff]"
            >
              Sign Up →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
