import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  onStartCreating: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onStartCreating }) => {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Horizontal dark-purple gradient card with rounded corners */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#231b57]/90 via-[#141538]/95 to-[#0b0c22]/95 border border-[#8773ff]/40 p-8 sm:p-16 md:p-20 text-center shadow-[0_25px_60px_-10px_rgba(0,0,0,0.8),0_0_45px_rgba(85,69,255,0.3)]">
          
          {/* Subtle neon center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[radial-gradient(circle,rgba(117,104,255,0.35)_0%,transparent_70%)] blur-[70px] pointer-events-none" />

          {/* Glowing subtle light lines */}
          <div className="absolute -top-24 left-1/4 w-96 h-[1px] bg-gradient-to-r from-transparent via-[#7568ff]/40 to-transparent rotate-12 blur-[0.5px]" />
          <div className="absolute -bottom-24 right-1/4 w-96 h-[1px] bg-gradient-to-r from-transparent via-[#5545ff]/40 to-transparent -rotate-12 blur-[0.5px]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Headline */}
            <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.18] mb-5 tracking-tight">
              Your next great visual<br />
              <span className="text-[#ece8ff]">is one prompt away.</span>
            </h2>

            {/* Small supporting text */}
            <p className="text-sm sm:text-base md:text-lg text-[#c7c5ea] mb-9 font-light leading-relaxed">
              Join 5 million creators already using ArchAI to bring their ideas to life.
            </p>

            {/* Bright glowing pill button */}
            <div className="inline-block">
              <button
                onClick={onStartCreating}
                className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-[#5545ff] to-[#8578ff] border border-white/30 shadow-[0_0_35px_rgba(85,69,255,0.65),0_6px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_55px_rgba(117,104,255,0.9),0_8px_30px_rgba(0,0,0,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Start Creating</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Subtext info */}
            <div className="mt-5 text-xs text-[#8c8fa9]">
              <span>No credit card required</span>
              <span className="mx-2">•</span>
              <span>100 free credits on sign up</span>
              <span className="mx-2">•</span>
              <span>Commercial license included</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
