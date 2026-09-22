import React, { useState } from 'react';
import { Mic, ArrowUp, Plus, Sparkles, Upload, Check } from 'lucide-react';
import { EXPLORE_IDEAS } from '../data/mockData';
import { IdeaThumb } from '../types';

interface HeroSectionProps {
  onGenerate: (promptText: string) => void;
  onOpenUpload: () => void;
  activePrompt: string;
  setActivePrompt: (prompt: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onGenerate,
  onOpenUpload,
  activePrompt,
  setActivePrompt,
}) => {
  const [activeTab, setActiveTab] = useState<'image' | 'video' | 'illustration' | '3d'>('image');
  const [isListening, setIsListening] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState(false);

  const tabs: { id: 'image' | 'video' | 'illustration' | '3d'; label: string }[] = [
    { id: 'image', label: 'Create an image' },
    { id: 'video', label: 'Create Video' },
    { id: 'illustration', label: 'Illustration' },
    { id: '3d', label: '3D Images' },
  ];

  const handleSelectIdea = (idea: IdeaThumb) => {
    setActivePrompt(idea.prompt);
    // Visual flash
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 1200);
  };

  const handleTabChange = (tabId: 'image' | 'video' | 'illustration' | '3d') => {
    setActiveTab(tabId);
    if (tabId === 'video') {
      setActivePrompt('Cinematic hyperlapse through neon rain-drenched neo-Tokyo street with reflective puddles, 60fps drone sweep');
    } else if (tabId === 'illustration') {
      setActivePrompt('Detailed vector botanical illustration of bioluminescent flora in violet and midnight blue with gold foil lineart');
    } else if (tabId === '3d') {
      setActivePrompt('Polished 3D glass isometric architectural pavilion suspended inside crystalline planetary sphere, Octane render 8K');
    } else {
      setActivePrompt('Cinematic editorial portrait in glowing neon violet lighting, hyper-realistic, 8k');
    }
  };

  const handleMicClick = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      setActivePrompt('A surreal mechanical butterfly forged from obsidian glass and violet plasma wings hovering in void');
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activePrompt.trim()) {
      onGenerate(activePrompt);
    }
  };

  return (
    <section id="home" className="relative pt-32 sm:pt-40 pb-20 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Small Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1a4a]/60 border border-[#7864ff]/30 text-xs sm:text-sm font-medium text-[#d6d5ef] mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(85,69,255,0.2)]">
          <span className="text-[#a79cff] text-sm">✦</span>
          <span>Smart AI Image Generator</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.12] tracking-tight text-white max-w-4xl mx-auto mb-6 drop-shadow-[0_0_35px_rgba(117,104,255,0.25)]">
          Turn Ideas into Stunning<br />
          <em className="italic font-light text-[#ece8ff]">Visuals In a Second</em>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#c7c6e6] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Transform simple text prompts into stunning visuals in seconds with powerful AI built for creators.
        </p>

        {/* AI Prompt Interface Card (~75% width) */}
        <div id="demo" className="w-full max-w-4xl mx-auto mb-7">
          <div className="relative bg-[#12142e]/70 backdrop-blur-2xl border border-[#7864ff]/25 hover:border-[#8c78ff]/50 rounded-3xl p-5 sm:p-7 text-left shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_35px_-5px_rgba(85,69,255,0.25)] transition-all duration-300">
            
            {/* Top Label */}
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-xs sm:text-sm font-medium text-[#9a9bb8] tracking-wide">
                What do you want to create today?
              </span>
              {copiedNotification && (
                <span className="inline-flex items-center gap-1 text-xs text-[#a59bff] bg-[#5545ff]/20 px-2 py-0.5 rounded-md animate-fade-in">
                  <Check className="w-3 h-3" /> Prompt loaded
                </span>
              )}
            </div>

            {/* Prompt Input Box */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex items-center gap-2 sm:gap-3 bg-[#0a0b1c]/85 border border-[#7864ff]/25 focus-within:border-[#7568ff] focus-within:shadow-[0_0_20px_rgba(85,69,255,0.35)] rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 transition-all">
                <span className="text-[#7568ff] font-bold text-lg select-none pl-1">+</span>
                <input
                  type="text"
                  value={activePrompt}
                  onChange={(e) => setActivePrompt(e.target.value)}
                  placeholder="Create image: Cyberpunk goddess adorned in luminescent orchids, 8k cinematic..."
                  className="flex-1 bg-transparent border-none outline-none text-white text-sm sm:text-base placeholder:text-[#6a6d88] focus:ring-0"
                />

                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={handleMicClick}
                    title="Voice prompt"
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isListening
                        ? 'bg-[#7568ff] text-white animate-pulse'
                        : 'text-[#8b8ea8] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Mic className="w-4 h-4" />
                  </button>

                  <button
                    type="submit"
                    title="Generate image"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#5545ff] to-[#8072ff] hover:from-[#6555ff] hover:to-[#9183ff] text-white flex items-center justify-center shadow-[0_0_18px_rgba(85,69,255,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <ArrowUp className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </form>

            {/* Explore Ideas Subheading */}
            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8b8ea8] mb-3">
              Explore Ideas
            </div>

            {/* Horizontal Row of Thumbnail Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              
              {/* Card 1: Upload a photo */}
              <button
                type="button"
                onClick={onOpenUpload}
                className="group h-24 rounded-xl border border-dashed border-[#7864ff]/40 hover:border-[#8c78ff] bg-[#141632]/50 hover:bg-[#201d4d]/60 flex flex-col items-center justify-center gap-1.5 p-2 transition-all cursor-pointer text-center"
              >
                <div className="w-7 h-7 rounded-full bg-[#5545ff]/20 flex items-center justify-center text-[#a79cff] group-hover:scale-110 group-hover:bg-[#5545ff]/35 transition-all">
                  <Plus className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-medium text-[#d6d5ef] leading-tight">
                  Upload<br />a photo
                </span>
              </button>

              {/* 5 Idea Thumbnail Cards */}
              {EXPLORE_IDEAS.map((idea) => (
                <div
                  key={idea.id}
                  onClick={() => handleSelectIdea(idea)}
                  className="group relative h-24 rounded-xl overflow-hidden border border-white/10 hover:border-[#7568ff] shadow-sm hover:shadow-[0_0_15px_rgba(117,104,255,0.4)] cursor-pointer transition-all duration-200 hover:-translate-y-1"
                >
                  <img
                    src={idea.imageUrl}
                    alt={idea.title}
                    className="w-full h-full object-cover brightness-85 group-hover:brightness-105 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03040d]/90 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[11px] font-medium text-white truncate w-full drop-shadow">
                      {idea.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Small Pill Buttons Below Card */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#5545ff]/25 border border-[#7568ff] text-white shadow-[0_0_15px_rgba(85,69,255,0.3)]'
                  : 'bg-[#121430]/70 border border-[#7864ff]/20 text-[#c8c7e6] hover:border-[#7864ff]/40 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
