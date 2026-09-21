import React, { useState } from 'react';
import { Sparkles, Eye, Plus, Check, SlidersHorizontal, Flame, Droplets, Info } from 'lucide-react';
import { MENU_ITEMS } from '../data/bakeryData';
import { MenuItem } from '../types';

interface QuantumMenuSectionProps {
  onSelectItemForReserve: (item: MenuItem) => void;
}

export const QuantumMenuSection: React.FC<QuantumMenuSectionProps> = ({ onSelectItemForReserve }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItemModal, setActiveItemModal] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'viennoiserie', label: 'Viennoiserie' },
    { id: 'sourdough', label: 'Bio-Sourdoughs' },
    { id: 'patisserie', label: 'Molecular Patisserie' },
    { id: 'savory', label: 'Savory Reserve' },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="creations" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#090D16] via-slate-950 to-[#090D16]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-orienta mb-4 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 02 &bull; Quantum Creations</span>
          </div>
          <h2 className="font-orienta text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Next-Gen Patisserie & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Heirloom Breads</span>
          </h2>
          <p className="font-radiocanada text-base sm:text-lg text-slate-300">
            Each batch is precision-calculated for cellular crumb expansion, slow-lactic acid complexity, and multi-tier sensory crunch.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                id={`filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-orienta transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.35)] scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-amber-300 hover:bg-slate-800 border border-amber-500/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Condition 8: Grid with Whole Container hover effect translateY(-30px) via .hover-lift-30 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredItems.map(item => (
            <div
              key={item.id}
              id={`product-card-${item.id}`}
              className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-amber-500/25 p-5 flex flex-col justify-between hover-lift-30 shadow-xl backdrop-blur-sm group"
            >
              <div>
                {/* Product Image Container */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-950 border border-slate-800">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20"></div>

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#090D16]/90 border border-amber-500/50 text-[11px] font-orienta font-bold text-amber-400 tracking-wider uppercase backdrop-blur-md shadow-md">
                      {item.badge}
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-orienta font-extrabold text-sm shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                    ${item.price.toFixed(2)}
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="mb-2">
                  <h3 className="font-orienta text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                  <div className="text-xs font-radiocanada text-amber-400/90 font-medium mt-0.5">
                    {item.tagline}
                  </div>
                </div>

                <p className="font-radiocanada text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Technical Specs: Hydration & Temperature */}
                <div className="grid grid-cols-2 gap-2 py-3 border-t border-b border-slate-800/80 text-xs font-radiocanada text-slate-300 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Hydration: <strong className="text-white font-medium">{item.hydration}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{item.temperature}</span>
                  </div>
                </div>

                {/* Flavor Notes Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {item.flavorNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-radiocanada px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons with Universal Hover Effect */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  id={`inspect-${item.id}`}
                  onClick={() => setActiveItemModal(item)}
                  className="btn-universal-secondary !py-2.5 !px-3 !text-xs w-full"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Spec</span>
                </button>
                <button
                  id={`reserve-item-${item.id}`}
                  onClick={() => onSelectItemForReserve(item)}
                  className="btn-universal !py-2.5 !px-3 !text-xs w-full"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Batch</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Product Spec Detail Modal */}
      {activeItemModal && (
        <div 
          id="item-spec-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveItemModal(null)}
        >
          <div 
            className="w-full max-w-lg rounded-3xl bg-slate-900 border border-amber-500/40 p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-orienta text-amber-400 tracking-wider uppercase">
                  Batch Inspection &bull; {activeItemModal.category}
                </span>
                <h3 className="font-orienta text-2xl font-bold text-white mt-1">
                  {activeItemModal.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveItemModal(null)}
                className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden mb-5 bg-black">
              <img 
                src={activeItemModal.imageUrl} 
                alt={activeItemModal.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="font-radiocanada text-sm text-slate-300 mb-5 leading-relaxed">
              {activeItemModal.description}
            </p>

            <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 text-center mb-6">
              <div>
                <div className="text-[11px] text-slate-400 font-radiocanada">Fermentation</div>
                <div className="text-sm font-orienta font-bold text-amber-400">{activeItemModal.fermentHours} Hours</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-radiocanada">Hydration</div>
                <div className="text-sm font-orienta font-bold text-amber-400">{activeItemModal.hydration}</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-radiocanada">Hearth Profile</div>
                <div className="text-sm font-orienta font-bold text-amber-400 truncate">{activeItemModal.temperature}</div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="font-orienta text-2xl font-bold text-white">
                ${activeItemModal.price.toFixed(2)}
              </div>
              <button
                onClick={() => {
                  onSelectItemForReserve(activeItemModal);
                  setActiveItemModal(null);
                }}
                className="btn-universal !py-3 !px-6 text-sm"
              >
                <span>Reserve in Atelier Batch</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
