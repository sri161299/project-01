import React, { useState } from 'react';
import { Sparkles, ThermometerSnowflake, Flame, Wheat, Droplets, ArrowRight, CheckCircle2, Cpu } from 'lucide-react';
import { LAB_PILLARS } from '../data/bakeryData';

export const LabSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const processStages = [
    {
      stage: "Stage 01",
      name: "Cold-Cycle Cryo Milling",
      temp: "4.2°C",
      duration: "0 - 12 Hours",
      summary: "Heritage Einkorn & Khorasan grains are stone-ground under cold-air vortex to preserve intact lipids, antioxidants, and native enzymes.",
      stat: "100% Intact Germ"
    },
    {
      stage: "Stage 02",
      name: "Algorithmic Hydro-Knead",
      temp: "18.5°C",
      duration: "12 - 24 Hours",
      summary: "Water is oxygen-micro-bubbled and calculated by barometric sensors to achieve an ultra-fluid 84% dough matrix without tearing gluten bonds.",
      stat: "84% Hydro Index"
    },
    {
      stage: "Stage 03",
      name: "72h Lactic Acid Ferment",
      temp: "4.0°C",
      duration: "24 - 72 Hours",
      summary: "In deep refrigerated vault chambers, wild yeast cultures digest complex sugars into aromatic lactates, creating sublime digestive tolerance.",
      stat: "99.4% Digestion Score"
    },
    {
      stage: "Stage 04",
      name: "Infrared Quartz Polymerization",
      temp: "245°C",
      duration: "34 Minutes",
      summary: "Instantaneous thermal radiation triggers instant steam vault expansion, fusing a wafer-thin 0.8mm caramelized crust with an airy custard interior.",
      stat: "0.82mm Glassy Crust"
    }
  ];

  return (
    <section id="lab" className="py-24 relative overflow-hidden bg-[#090D16]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-orienta mb-4 uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Section 03 &bull; The Innovation Lab</span>
          </div>
          <h2 className="font-orienta text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Where Ancient Genetics Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Molecular Physics</span>
          </h2>
          <p className="font-radiocanada text-base sm:text-lg text-slate-300">
            We discarded conventional commercial additives in favor of fundamental biophysics: precision barometric monitoring, 72-hour cold retarders, and infrared hearths.
          </p>
        </div>

        {/* Condition 8: 4 Technology Pillars as cards with hover-lift-30 effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {LAB_PILLARS.map((pillar, idx) => {
            const getIcon = () => {
              switch (pillar.id) {
                case 'cryo': return <ThermometerSnowflake className="w-6 h-6 text-amber-400" />;
                case 'infrared': return <Flame className="w-6 h-6 text-amber-400" />;
                case 'grains': return <Wheat className="w-6 h-6 text-amber-400" />;
                case 'hydration': return <Droplets className="w-6 h-6 text-amber-400" />;
                default: return <Sparkles className="w-6 h-6 text-amber-400" />;
              }
            };

            return (
              <div
                key={pillar.id}
                id={`lab-pillar-${pillar.id}`}
                className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-amber-500/20 p-6 flex flex-col justify-between hover-lift-30 shadow-xl backdrop-blur-md group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getIcon()}
                    </div>
                    <span className="text-xs font-mono text-slate-500 group-hover:text-amber-400 transition-colors">
                      0{idx + 1} // SYS
                    </span>
                  </div>

                  <div className="text-xs font-mono text-amber-400 mb-1 font-semibold">
                    {pillar.metric}
                  </div>
                  <h3 className="font-orienta text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-radiocanada text-slate-400 mb-3 italic">
                    {pillar.subtitle}
                  </div>

                  <p className="font-radiocanada text-sm text-slate-300 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                  {pillar.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs font-radiocanada text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Condition 8: Interactive 4-Stage Molecular Transformation Console with hover-lift-30 */}
        <div 
          id="lab-interactive-console"
          className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/35 p-6 sm:p-8 hover-lift-30 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
            <div>
              <span className="text-xs font-orienta text-amber-400 uppercase tracking-widest">
                Interactive Transformation Sequence
              </span>
              <h3 className="font-orienta text-2xl sm:text-3xl font-bold text-white mt-1">
                From Ancient Seed to Crystalline Hearth Crust
              </h3>
            </div>
            
            {/* Step Selection Buttons with Universal Button Hover Effect */}
            <div className="flex flex-wrap gap-2">
              {processStages.map((st, i) => (
                <button
                  key={i}
                  id={`process-step-btn-${i}`}
                  onClick={() => setActiveStep(i)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-orienta transition-all duration-300 cursor-pointer ${
                    activeStep === i
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-amber-500/40 hover:text-white'
                  }`}
                >
                  {st.stage}
                </button>
              ))}
            </div>
          </div>

          {/* Active Stage Deep Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded-md mb-3 border border-amber-500/20">
                <span>{processStages[activeStep].stage}</span>
                <span>&bull;</span>
                <span>Window: {processStages[activeStep].duration}</span>
              </div>
              <h4 className="font-orienta text-2xl sm:text-3xl font-bold text-white mb-3">
                {processStages[activeStep].name}
              </h4>
              <p className="font-radiocanada text-base text-slate-300 leading-relaxed mb-6">
                {processStages[activeStep].summary}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] font-radiocanada text-slate-400">Target Temp</div>
                  <div className="font-orienta text-lg font-bold text-amber-400">{processStages[activeStep].temp}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] font-radiocanada text-slate-400">Duration Cycle</div>
                  <div className="font-orienta text-lg font-bold text-white">{processStages[activeStep].duration}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 col-span-2 sm:col-span-1">
                  <div className="text-[11px] font-radiocanada text-slate-400">Physical Outcome</div>
                  <div className="font-orienta text-lg font-bold text-amber-300">{processStages[activeStep].stat}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-video lg:aspect-square bg-slate-950 border border-amber-500/30 flex items-center justify-center p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop"
                alt="SS Bakery Master Baker Kitchen"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-35 filter contrast-125"
              />
              <div className="relative z-10 p-6 rounded-2xl bg-[#090D16]/90 border border-amber-500/40 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-3">
                  <Flame className="w-5 h-5 animate-pulse" />
                </div>
                <div className="text-xs font-mono text-amber-400 mb-1">ACOUSTIC CRUST TEST</div>
                <div className="font-orienta text-lg font-bold text-white mb-2">92 Decibel Resonant Crunch</div>
                <p className="text-xs font-radiocanada text-slate-300">
                  Each finished loaf is sonic-tested for micro-fissure reverberation before passing quality release.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
