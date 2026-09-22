import React, { useState } from 'react';
import { Sparkles, Maximize2, Copy, Check } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';

interface GalleryShowcaseProps {
  onSelectPrompt: (prompt: string) => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const GalleryShowcase: React.FC<GalleryShowcaseProps> = ({
  onSelectPrompt,
  onOpenLightbox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', 'Portraits', 'Abstract', 'Action', '3D & Surreal'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleCopyPrompt = (e: React.MouseEvent, item: GalleryItem) => {
    e.stopPropagation();
    navigator.clipboard.writeText(item.prompt);
    setCopiedId(item.id);
    onSelectPrompt(item.prompt);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(117,104,255,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider text-[#a395ff] uppercase mb-3">
            ✦ Curated Artifacts
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.15] mb-5">
            Rendered With ArchAI
          </h2>
          <p className="text-base sm:text-lg text-[#c5c3e6] max-w-2xl mx-auto font-light leading-relaxed">
            Explore high-fidelity renders generated across dynamic styles, cinematic lighting, and custom latent models.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#5545ff] text-white shadow-[0_0_15px_rgba(85,69,255,0.5)]'
                    : 'bg-[#12142e]/60 text-[#a2a4c2] hover:text-white border border-[#7864ff]/20 hover:border-[#7864ff]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Staggered Grid Arrangement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[180px] gap-4 sm:gap-5">
          {filteredItems.map((item) => {
            // Apply varied dimensions as specified
            const spanClass =
              item.span === 'tall'
                ? 'sm:row-span-3'
                : item.span === 'wide'
                ? 'sm:col-span-2 sm:row-span-2'
                : 'sm:row-span-2';

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#7864ff]/20 hover:border-[#8c78ff]/70 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(85,69,255,0.35)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${spanClass}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />

                {/* Subtle permanent tag */}
                <div className="absolute top-3 left-3 bg-[#03040d]/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium text-[#d6d5ef] border border-white/10">
                  {item.tag}
                </div>

                {/* Hover Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#03040d]/95 via-[#03040d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
                  <span className="text-sm sm:text-base font-semibold text-white mb-1 drop-shadow">
                    {item.title}
                  </span>
                  <p className="text-xs text-[#c5c2ee] line-clamp-2 mb-3 font-light leading-relaxed">
                    "{item.prompt}"
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="text-[11px] font-mono text-[#a59bff]">Seed: #{item.seed}</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => handleCopyPrompt(e, item)}
                        title="Use this prompt"
                        className="px-2.5 py-1 rounded-lg bg-[#5545ff]/40 hover:bg-[#5545ff] text-white text-[11px] font-medium transition-colors flex items-center gap-1"
                      >
                        {copiedId === item.id ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>Loaded</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Remix</span>
                          </>
                        )}
                      </button>
                      <span className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20">
                        <Maximize2 className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
