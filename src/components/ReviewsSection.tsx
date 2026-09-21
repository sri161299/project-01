import React from 'react';
import { Star, Award, CheckCircle, Quote, Sparkles } from 'lucide-react';
import { REVIEWS, BAKERY_INFO } from '../data/bakeryData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-[#090D16]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-orienta mb-4 uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Section 05 &bull; Sensory Critics & Accolades</span>
          </div>
          <h2 className="font-orienta text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Critiques From the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Culinary Vanguard</span>
          </h2>
          <p className="font-radiocanada text-base sm:text-lg text-slate-300">
            Celebrated by Michelin-starred directors, bio-gastronomy researchers, and discerning epicures around the globe.
          </p>

          {/* Overall Score Badge */}
          <div className="mt-6 inline-flex items-center gap-4 px-5 py-2.5 rounded-2xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-md">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-orienta font-bold text-white text-sm">
              {BAKERY_INFO.metrics.rating} Consensus Rating
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-xs font-radiocanada text-amber-400">
              {BAKERY_INFO.metrics.batchesBaked} Batches Evaluated
            </span>
          </div>
        </div>

        {/* Condition 8: Reviews Cards with whole container hover effect -translate-y-[30px] */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-amber-500/25 p-7 sm:p-8 flex flex-col justify-between hover-lift-30 shadow-xl backdrop-blur-md relative group"
            >
              <div>
                {/* Header of review card */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={review.avatarUrl}
                      alt={review.criticName}
                      referrerPolicy="no-referrer"
                      className="w-13 h-13 rounded-2xl object-cover border border-amber-500/40 group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h3 className="font-orienta text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {review.criticName}
                      </h3>
                      <div className="text-xs font-radiocanada text-slate-400">
                        {review.role} &bull; <strong className="text-slate-300 font-medium">{review.publication}</strong>
                      </div>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-orienta text-amber-400 font-semibold tracking-wider uppercase shrink-0">
                    {review.awardBadge}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-radiocanada text-slate-200 text-sm sm:text-base leading-relaxed mb-6 italic relative">
                  "{review.quote}"
                </p>
              </div>

              {/* Bottom Verdict */}
              <div className="pt-4 border-t border-slate-800/90 flex items-center justify-between">
                <div className="text-xs font-orienta text-amber-400 font-semibold">
                  Official Verdict: <span className="text-slate-300 font-normal">{review.verdict}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                  <CheckCircle className="w-3 h-3 text-amber-400" />
                  <span>VERIFIED</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sensory Accreditation Badges */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="font-orienta font-bold text-white text-sm">Michelin Quantum 2026</div>
            <div className="text-xs font-radiocanada text-slate-400 mt-0.5">Three Stellar Stars</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="font-orienta font-bold text-white text-sm">World Bread Guild</div>
            <div className="text-xs font-radiocanada text-slate-400 mt-0.5">Golden Sheaf Trophy</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="font-orienta font-bold text-white text-sm">Biodynamic Organic</div>
            <div className="text-xs font-radiocanada text-slate-400 mt-0.5">100% Ancient Terroir</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="font-orienta font-bold text-white text-sm">Nordic Ferment Lab</div>
            <div className="text-xs font-radiocanada text-slate-400 mt-0.5">Biome Digestive Honor</div>
          </div>
        </div>

      </div>
    </section>
  );
};
