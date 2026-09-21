import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Flame, Droplets, Clock, Activity, Award } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface HeroSectionProps {
  onExploreClick: () => void;
  onReserveClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onReserveClick }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 overflow-hidden">
      {/* Ambient background glow & cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-slate-800/40 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Status & Quantum Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 sm:mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-radiocanada backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span className="font-semibold tracking-wider uppercase font-orienta">Quantum Hearth Deck v4.2</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Live 245°C Cryo-Proof Active</span>
          </div>
        </div>

        {/* Hero Headline & Subtitle with Orienta & Radio Canada typography */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <h1 className="font-orienta text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">Flour & Fire</span>
          </h1>
          <p className="font-radiocanada text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            SS Bakery combines 72-hour bio-fermentation, 84% algorithmic hydration, and precision infrared quartz hearths to create the next evolution of artisan bread & patisserie.
          </p>

          {/* Action CTAs with Universal Button Hover Effect */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <button
              id="hero-explore-menu-btn"
              onClick={onExploreClick}
              className="btn-universal w-full sm:w-auto text-base !py-3.5 !px-8"
            >
              <span>Explore Quantum Menu</span>
              <ArrowRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              id="hero-reserve-table-btn"
              onClick={onReserveClick}
              className="btn-universal-secondary w-full sm:w-auto text-base !py-3.5 !px-8"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Reserve Atelier Tasting</span>
            </button>
          </div>
        </div>

        {/* Condition 8: Whole container hover effect with -translate-y-[30px] */}
        {/* Main Hero Futuristic Visual & Telemetry Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Visual Display Container with hover-lift-30 */}
          <div 
            id="hero-main-visual-container"
            className="lg:col-span-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-amber-500/30 p-4 sm:p-6 relative overflow-hidden group hover-lift-30 shadow-2xl backdrop-blur-xl"
          >
            {/* Ambient Corner Accents */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/15 blur-3xl rounded-full pointer-events-none"></div>
            
            {/* Visual Image with overlay details */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] w-full bg-slate-950 border border-amber-500/20">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1920&auto=format&fit=crop"
                alt="SS Bakery Futuristic Artisan Hearth Loaves"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-black/30"></div>
              
              {/* Floating Hologram Badges on Hero Image */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 bg-[#090D16]/90 border border-amber-500/40 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                  <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span className="text-xs font-orienta text-slate-200">
                    Quartz Hearth: <span className="text-amber-400 font-bold">245°C</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#090D16]/90 border border-amber-500/40 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-xs font-orienta text-slate-200">
                    Yeast Cell Activity: <span className="text-amber-400 font-bold">99.2%</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Container Caption & Tech Summary */}
            <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-orienta text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Hyper-Artisan Sourdough & Patisserie</span>
                  <span className="text-xs px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">BATCH #882</span>
                </h2>
                <p className="font-radiocanada text-sm text-slate-300 mt-1">
                  Engineered with 100% single-estate ancient Einkorn grain, wild natural yeast cultures, and infrared stone polymerization.
                </p>
              </div>
              <div className="flex items-center gap-4 shrink-0 text-right">
                <div className="px-4 py-2 rounded-xl bg-slate-900/80 border border-amber-500/20">
                  <div className="text-xs font-radiocanada text-slate-400">Crispness Metric</div>
                  <div className="text-lg font-orienta font-bold text-amber-400">0.82 mm shell</div>
                </div>
              </div>
            </div>
          </div>

          {/* Condition 8: Side Telemetry Container also with hover-lift-30 */}
          <div 
            id="hero-telemetry-container"
            className="lg:col-span-4 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-amber-500/30 p-6 flex flex-col justify-between hover-lift-30 shadow-2xl backdrop-blur-xl"
          >
            <div>
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <h3 className="font-orienta text-lg font-bold text-white">Live Bakery Telemetry</h3>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  REAL-TIME
                </span>
              </div>

              {/* Telemetry rows */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                      <Droplets className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-radiocanada text-slate-400">Dough Hydration</div>
                      <div className="text-sm font-orienta font-bold text-slate-100">84% Micro-Aerated</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-amber-400 font-mono">OPTIMAL</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-radiocanada text-slate-400">Cryo-Proof Cycle</div>
                      <div className="text-sm font-orienta font-bold text-slate-100">72 Hours @ 4.2°C</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-amber-400 font-mono">STAGE 4</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-radiocanada text-slate-400">Satisfaction Score</div>
                      <div className="text-sm font-orienta font-bold text-slate-100">{BAKERY_INFO.metrics.rating}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-amber-400 font-mono">VANGUARD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick schedule footnote */}
            <div className="mt-6 pt-4 border-t border-amber-500/20 text-xs font-radiocanada text-slate-400">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-slate-300">Next Fresh Hearth Release:</span>
                <span className="text-amber-400 font-bold">11:00 AM TODAY</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Pre-reserved batches enter warm holding chamber 15 minutes before pickup.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
