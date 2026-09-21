import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles, Download, Check, ShieldCheck } from 'lucide-react';
import { BAKERY_INFO, NAVIGATION_LINKS } from '../data/bakeryData';

interface FooterProps {
  onOpenZipModal: () => void;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenZipModal, onOpenContactModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#060910] border-t border-amber-500/20 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800/80">
          
          {/* Brand & Manifesto (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 text-slate-950 font-orienta font-bold text-lg flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                {BAKERY_INFO.monogram}
              </div>
              <div className="flex flex-col">
                <span className="font-orienta text-xl font-bold tracking-wider text-white">
                  SS BAKERY
                </span>
                <span className="text-[10px] tracking-widest uppercase font-radiocanada text-amber-400">
                  Precision Hearth &bull; Est. {BAKERY_INFO.founded}
                </span>
              </div>
            </div>

            <p className="font-radiocanada text-sm text-slate-400 leading-relaxed max-w-sm">
              Crafting tomorrow's artisan viennoiserie, heirloom sourdoughs, and molecular patisserie through 72-hour cryo-fermentation and penetrative infrared quartz hearths.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenZipModal}
                className="btn-universal-secondary !py-2 !px-3.5 !text-xs"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Project ZIP</span>
              </button>
              <button
                onClick={onOpenContactModal}
                className="btn-universal !py-2 !px-3.5 !text-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                <span>Contact Desk</span>
              </button>
            </div>
          </div>

          {/* Navigation Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="font-orienta text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-radiocanada">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hearth Hours & Location (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-orienta text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Hearth Cycles
            </h4>
            <div className="text-xs font-radiocanada space-y-2 text-slate-300">
              <div>
                <div className="text-amber-400 font-orienta font-semibold">Dawn Hearth Cycle:</div>
                <div className="text-slate-400">{BAKERY_INFO.openingHours.morning}</div>
              </div>
              <div>
                <div className="text-amber-400 font-orienta font-semibold">Twilight Patisserie:</div>
                <div className="text-slate-400">{BAKERY_INFO.openingHours.evening}</div>
              </div>
              <div>
                <div className="text-slate-500 font-orienta">Maintenance Reset:</div>
                <div className="text-slate-500">{BAKERY_INFO.openingHours.closed}</div>
              </div>
            </div>

            <div className="pt-2 text-xs font-radiocanada text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{BAKERY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{BAKERY_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Newsletter Dispatch with Universal Button (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="font-orienta text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Hearth Dispatch
            </h4>
            <p className="text-xs font-radiocanada text-slate-400 mb-3">
              Receive notifications when seasonal Grand Cru batches and rare heirloom grain allocations go live.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="comm@patron.future"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-xs font-radiocanada placeholder:text-slate-600"
                />
              </div>
              <button
                type="submit"
                id="newsletter-subscribe-btn"
                className="btn-universal w-full !py-2.5 !text-xs"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-slate-950" />
                    <span>Subscribed to Hearth Dispatch</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-slate-950" />
                    <span>Join Batch Ledger</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-radiocanada text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-500/60" />
            <span>&copy; {new Date().getFullYear()} {BAKERY_INFO.name}. All Rights Reserved. Bio-Gastronomy ISO-22000 Certified.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-amber-400 transition-colors font-orienta"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
