import React, { useState, useMemo } from 'react';
import { Sliders, Flame, Droplets, Clock, Sparkles, Wind, RefreshCw, Zap } from 'lucide-react';

export const SensoryMatrixSection: React.FC = () => {
  // Interactive Simulator State
  const [temp, setTemp] = useState<number>(245); // 180 to 260 °C
  const [steam, setSteam] = useState<number>(85); // 0 to 100 %
  const [fermentHours, setFermentHours] = useState<number>(72); // 12 to 72 hrs

  // Dynamic calculations
  const maillardIndex = useMemo(() => {
    // Higher temp and proper steam increases caramelization
    const score = Math.min(100, Math.round(((temp - 180) / 80) * 60 + (steam / 100) * 20 + (fermentHours / 72) * 20));
    return score;
  }, [temp, steam, fermentHours]);

  const crumbAeration = useMemo(() => {
    // Ferment hours and steam drive crumb openness
    const aeration = Math.min(99, Math.round((fermentHours / 72) * 60 + (steam / 100) * 30 + 9));
    return aeration;
  }, [fermentHours, steam]);

  const acousticCrustThickness = useMemo(() => {
    const mm = (0.5 + ((temp - 180) / 80) * 0.7).toFixed(2);
    return mm;
  }, [temp]);

  // Flavor notes calculated based on inputs
  const dynamicFlavorAromas = useMemo(() => {
    const notes: string[] = [];
    if (temp >= 240) notes.push("Torched Cocoa Husk", "Smoked Toffee Crust");
    else if (temp >= 210) notes.push("Golden Malted Wheat", "Caramelized Butter");
    else notes.push("Sweet Brioche Milk", "Delicate Floral Vanilla");

    if (fermentHours >= 48) notes.push("Complex Lactic Umami", "Aged Sourdough Tang");
    else notes.push("Fresh Yeast Creaminess", "Subtle Wheat Sweetness");

    if (steam >= 70) notes.push("Glazed Glass Fissures");
    return notes;
  }, [temp, fermentHours, steam]);

  // Presets
  const applyPreset = (presetTemp: number, presetSteam: number, presetFerment: number) => {
    setTemp(presetTemp);
    setSteam(presetSteam);
    setFermentHours(presetFerment);
  };

  return (
    <section id="matrix" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#090D16] via-slate-950 to-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-orienta mb-4 uppercase tracking-widest">
            <Sliders className="w-3.5 h-3.5" />
            <span>Section 04 &bull; Sensory Matrix Simulator</span>
          </div>
          <h2 className="font-orienta text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Hearth & Flavor Calibrator</span>
          </h2>
          <p className="font-radiocanada text-base sm:text-lg text-slate-300">
            Adjust the bake parameters in real-time to simulate how temperature, steam saturation, and fermentation synthesize aromatic compounds and crust architecture.
          </p>

          {/* Quick Presets with Universal Button Hover Effect */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <span className="text-xs font-radiocanada text-slate-400 mr-1">Calibrated Profiles:</span>
            <button
              onClick={() => applyPreset(245, 90, 72)}
              className="btn-universal-secondary !py-1.5 !px-3.5 !text-xs"
            >
              Obsidian Grand Cru (245°C / 72h)
            </button>
            <button
              onClick={() => applyPreset(215, 60, 48)}
              className="btn-universal-secondary !py-1.5 !px-3.5 !text-xs"
            >
              Quantum Croissant (215°C / 48h)
            </button>
            <button
              onClick={() => applyPreset(200, 40, 24)}
              className="btn-universal-secondary !py-1.5 !px-3.5 !text-xs"
            >
              Golden Milk Brioche (200°C / 24h)
            </button>
          </div>
        </div>

        {/* Condition 8: Main interactive simulator container with hover-lift-30 */}
        <div 
          id="sensory-matrix-container"
          className="rounded-3xl bg-slate-900/95 border border-amber-500/30 p-6 sm:p-10 hover-lift-30 shadow-2xl backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Slider 1: Temperature */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-amber-400" />
                    <span className="font-orienta font-bold text-white text-base">Hearth Radiant Temperature</span>
                  </div>
                  <span className="font-mono text-lg font-bold text-amber-400">{temp}°C</span>
                </div>
                <input
                  type="range"
                  min="180"
                  max="260"
                  value={temp}
                  onChange={(e) => setTemp(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>180°C (Soft Crumb)</span>
                  <span>220°C (Golden)</span>
                  <span>260°C (Dark Roasted)</span>
                </div>
              </div>

              {/* Slider 2: Steam Saturation */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-amber-400" />
                    <span className="font-orienta font-bold text-white text-base">Deck Steam Micro-Injection</span>
                  </div>
                  <span className="font-mono text-lg font-bold text-amber-400">{steam}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={steam}
                  onChange={(e) => setSteam(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>0% (Dry Matte)</span>
                  <span>50% (Standard Bloom)</span>
                  <span>100% (Glass Blistering)</span>
                </div>
              </div>

              {/* Slider 3: Fermentation Hours */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-400" />
                    <span className="font-orienta font-bold text-white text-base">Cryo Fermentation Window</span>
                  </div>
                  <span className="font-mono text-lg font-bold text-amber-400">{fermentHours} Hours</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="72"
                  step="6"
                  value={fermentHours}
                  onChange={(e) => setFermentHours(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>12h (Mild Sweet)</span>
                  <span>36h (Balanced)</span>
                  <span>72h (Deep Lactic Umami)</span>
                </div>
              </div>

            </div>

            {/* Right Display: Real-Time Dynamic Telemetry & Crust Visual */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-amber-500/30 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <span className="text-xs font-orienta text-amber-400 uppercase tracking-wider">
                    Simulated Bake Synthesis
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <RefreshCw className="w-3 h-3 animate-spin text-amber-400" /> LIVE
                  </span>
                </div>

                {/* Dynamic Crust Visualization Gradient */}
                <div className="relative h-28 rounded-xl overflow-hidden mb-6 border border-slate-800 flex items-end p-4 transition-all duration-300 shadow-inner"
                  style={{
                    background: `linear-gradient(135deg, 
                      ${temp > 240 ? '#2b1810' : temp > 215 ? '#78350f' : '#b45309'} 0%, 
                      ${temp > 240 ? '#451a03' : temp > 215 ? '#d97706' : '#f59e0b'} 50%, 
                      #090D16 100%)`
                  }}
                >
                  <div className="relative z-10 w-full flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-amber-300">CRUST SHELL SHIFT</div>
                      <div className="font-orienta font-bold text-white text-base">
                        {temp >= 240 ? 'Deep Obsidian Caramel' : temp >= 215 ? 'Solar Amber Glaze' : 'Pale Golden Bloom'}
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded bg-black/60 backdrop-blur-md text-xs font-mono text-amber-400 border border-amber-500/30">
                      {acousticCrustThickness} mm shell
                    </span>
                  </div>
                </div>

                {/* Telemetry Metric Bars */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-xs font-radiocanada text-slate-300 mb-1">
                      <span>Maillard Caramelization</span>
                      <span className="text-amber-400 font-bold">{maillardIndex}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
                        style={{ width: `${maillardIndex}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-radiocanada text-slate-300 mb-1">
                      <span>Honeycomb Crumb Aeration</span>
                      <span className="text-amber-400 font-bold">{crumbAeration}% Open</span>
                    </div>
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
                        style={{ width: `${crumbAeration}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Synthesized Flavor Compounds */}
                <div>
                  <div className="text-xs font-mono text-slate-400 mb-2">SYNTHESIZED AROMA MOLECULES:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {dynamicFlavorAromas.map((aroma, i) => (
                      <span
                        key={i}
                        className="text-xs font-radiocanada px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30"
                      >
                        {aroma}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Calculated for 1000g Heirloom Einkorn Loaf</span>
                <span className="text-amber-400 font-mono">SS-ALGO v4.2</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
