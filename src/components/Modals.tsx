import React, { useState, useRef } from 'react';
import {
  X,
  Upload,
  Check,
  Copy,
  Sparkles,
  ArrowRight,
  Download,
  Wand2,
  Image as ImageIcon,
  Sliders,
  Server,
  Zap,
  ShieldAlert,
} from 'lucide-react';
import { GalleryItem, GenerationVariant, GeneratedImage } from '../types';
import { ProviderInfo } from '../services/imageService';

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEditImage: (prompt: string, imageBase64: string, mimeType?: string) => Promise<void>;
  onApplyPhotoPrompt?: (prompt: string) => void;
}

export const UploadModal: React.FC<UploadModalProps> = ({
  isOpen,
  onClose,
  onEditImage,
  onApplyPhotoPrompt,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState('image/png');
  const [editPrompt, setEditPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState('Cyberpunk Neon');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setMimeType(file.type || 'image/png');
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handlePresetSelect = (preset: string) => {
    setSelectedPreset(preset);
    if (preset === 'Cyberpunk Neon') {
      setEditPrompt('Transform into cyberpunk neo-Tokyo aesthetic with glowing violet neon reflections and cinematic rain');
    } else if (preset === 'Dark Fantasy') {
      setEditPrompt('Transform into a dark fantasy epic illustration with mystical glowing runes and ethereal fog');
    } else if (preset === 'Oil Painting') {
      setEditPrompt('Transform into an ornate classical Baroque oil painting with dramatic chiaroscuro lighting and rich brushwork');
    } else if (preset === 'Anime Studio') {
      setEditPrompt('Transform into high-end cinematic anime keyframe visual with vibrant skies and luminous cell shading');
    } else if (preset === 'Futuristic 3D Glass') {
      setEditPrompt('Transform into sleek iridescent glass and brushed titanium futuristic sculpture with octane lighting');
    }
  };

  const handleExecuteEdit = async () => {
    if (!previewUrl) return;
    const finalPrompt = editPrompt.trim() || `Transform image in ${selectedPreset} aesthetic with cinematic lighting and high detail`;
    
    setIsProcessing(true);
    try {
      await onEditImage(finalPrompt, previewUrl, mimeType);
      if (onApplyPhotoPrompt) {
        onApplyPhotoPrompt(finalPrompt);
      }
      onClose();
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#10122c] border border-[#7864ff]/40 rounded-3xl p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(85,69,255,0.25)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#8c8fa9] hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <Upload className="w-5 h-5 text-[#8c78ff]" />
          <h3 className="text-xl font-semibold text-white">Upload & Edit Image</h3>
        </div>
        <p className="text-xs text-[#8c8fa9] mb-4">
          Powered by gemini-3.1-flash-image-preview for direct multi-modal image-to-image editing.
        </p>

        {/* Drop zone */}
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`h-40 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-3 text-center cursor-pointer transition-all ${
            dragActive
              ? 'border-[#7568ff] bg-[#5545ff]/20'
              : 'border-[#7864ff]/30 bg-[#090b1e]/60 hover:border-[#7864ff]/60 hover:bg-[#151739]/60'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFile(e.target.files[0]);
              }
            }}
          />

          {previewUrl ? (
            <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-black/50">
              <img src={previewUrl} alt="Upload preview" className="max-h-full max-w-full object-contain" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-xs text-white opacity-0 hover:opacity-100 transition-opacity">
                Click or drop to replace image
              </div>
            </div>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-[#5545ff]/20 flex items-center justify-center text-[#a79cff] mb-2">
                <ImageIcon className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-white mb-0.5">
                Drag and drop your photo here, or <span className="text-[#8c78ff]">browse</span>
              </p>
              <p className="text-[11px] text-[#787a94]">Supports PNG, JPG, WEBP</p>
            </>
          )}
        </div>

        {/* Edit Prompt Instruction */}
        <div className="mt-4">
          <label className="block text-xs font-semibold text-[#8c8fa9] uppercase mb-1.5">
            Edit Instructions (Text Prompt)
          </label>
          <input
            type="text"
            value={editPrompt}
            onChange={(e) => setEditPrompt(e.target.value)}
            placeholder="e.g. Turn into cyberpunk neon, add futuristic armor..."
            className="w-full bg-[#08091a] border border-[#7864ff]/30 focus:border-[#7568ff] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-[#555873] outline-none"
          />
        </div>

        {/* Style presets */}
        <div className="mt-3">
          <label className="block text-[11px] font-semibold text-[#8c8fa9] uppercase mb-1.5">
            Or Pick Quick Style Preset
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {['Cyberpunk Neon', 'Dark Fantasy', 'Oil Painting', 'Anime Studio', 'Futuristic 3D Glass'].map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => handlePresetSelect(st)}
                className={`py-1.5 px-2 text-[11px] rounded-lg border transition-all text-center truncate ${
                  selectedPreset === st
                    ? 'bg-[#5545ff]/35 border-[#7568ff] text-white font-medium'
                    : 'bg-[#0a0c20]/60 border-white/10 text-[#8c8fa9] hover:text-white'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={handleExecuteEdit}
          disabled={!previewUrl || isProcessing}
          className={`w-full mt-5 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
            previewUrl && !isProcessing
              ? 'bg-gradient-to-r from-[#5545ff] to-[#7568ff] text-white shadow-[0_0_20px_rgba(85,69,255,0.5)] hover:scale-[1.01] cursor-pointer'
              : 'bg-white/10 text-white/40 cursor-not-allowed'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>{isProcessing ? 'Synthesizing with Gemini...' : 'Transform Image with Gemini 3.1 Flash'}</span>
        </button>
      </div>
    </div>
  );
};

interface AuthModalProps {
  isOpen: boolean;
  mode: 'login' | 'signup';
  onClose: () => void;
  onSwitchMode: (newMode: 'login' | 'signup') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  mode,
  onClose,
  onSwitchMode,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md bg-[#10122e] border border-[#7864ff]/40 rounded-3xl p-7 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(85,69,255,0.3)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-[#8c8fa9] hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#5545ff] to-[#8a7bff] flex items-center justify-center mx-auto mb-3 shadow-[0_0_15px_rgba(117,104,255,0.6)]">
            <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
          </div>
          <h3 className="font-serif-display text-2xl font-normal text-white">
            {mode === 'signup' ? 'Join 5M+ Creators' : 'Welcome Back'}
          </h3>
          <p className="text-xs text-[#8c8fa9] mt-1">
            {mode === 'signup'
              ? 'Get 100 free instant render credits'
              : 'Sign in to access your ArchAI library'}
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center text-sm text-[#a59bff] flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#5545ff]/20 flex items-center justify-center text-[#8c78ff]">
              <Check className="w-5 h-5" />
            </div>
            <span>Magic link dispatched to {email || 'your email'}!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#8c8fa9] uppercase mb-1.5">
                Work or Creator Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@studio.ai"
                className="w-full bg-[#08091a] border border-[#7864ff]/30 focus:border-[#7568ff] focus:ring-1 focus:ring-[#7568ff] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-[#555873] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#5545ff] to-[#7568ff] hover:from-[#6555ff] hover:to-[#867aff] shadow-[0_4px_20px_rgba(85,69,255,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{mode === 'signup' ? 'Create Free Account' : 'Sign In with Email'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="relative py-2 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <span className="relative bg-[#10122e] px-3 text-[11px] text-[#787a94] uppercase tracking-wider">
                Or continue with
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(true);
                  setTimeout(onClose, 1000);
                }}
                className="py-2.5 px-3 rounded-xl border border-white/10 hover:border-[#7864ff]/40 bg-white/5 hover:bg-white/10 text-xs font-medium text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Google</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(true);
                  setTimeout(onClose, 1000);
                }}
                className="py-2.5 px-3 rounded-xl border border-white/10 hover:border-[#7864ff]/40 bg-white/5 hover:bg-white/10 text-xs font-medium text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>GitHub</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => onSwitchMode(mode === 'login' ? 'signup' : 'login')}
                className="text-xs text-[#8c8fa9] hover:text-[#c4bdff] transition-colors"
              >
                {mode === 'login'
                  ? "Don't have an account? Sign up"
                  : 'Already have an account? Log in'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

interface LightboxModalProps {
  item: GalleryItem | GenerationVariant | GeneratedImage | null;
  onClose: () => void;
  onUsePrompt?: (prompt: string) => void;
  onEditInStudio?: (item: GalleryItem | GenerationVariant | GeneratedImage) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onUsePrompt,
  onEditInStudio,
}) => {
  const [copied, setCopied] = useState(false);

  if (!item) return null;

  const isGalleryItem = 'tag' in item && 'category' in item;
  const isGeneratedImage = 'createdAt' in item;
  
  let promptText = '';
  let title = 'ArchAI Visual';

  if (isGalleryItem) {
    promptText = (item as GalleryItem).prompt;
    title = (item as GalleryItem).title;
  } else if (isGeneratedImage) {
    promptText = (item as GeneratedImage).prompt;
    title = (item as GeneratedImage).isEdited ? 'Edited Image' : 'Generated Image';
  } else {
    promptText = 'Hyper-detailed cybernetic orchid blooming in zero-gravity space station, cinematic lighting, iridescent glass petals, octane raytraced 8K';
    title = (item as GenerationVariant).label;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    if (onUsePrompt) onUsePrompt(promptText);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = item.imageUrl;
    link.download = `archai-${title.toLowerCase().replace(/\s+/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0e25] border border-[#7864ff]/35 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(85,69,255,0.25)] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-[#8c8fa9] hover:text-white hover:bg-black/90 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview Side */}
        <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden relative">
          <img
            src={item.imageUrl}
            alt={title}
            className="w-full h-full max-h-[50vh] md:max-h-[80vh] object-contain"
          />
        </div>

        {/* Metadata Details Side */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#5545ff]/20 text-[#a79cff] border border-[#7568ff]/30">
                {isGalleryItem ? (item as GalleryItem).tag : 'Gemini Engine'}
              </span>
              <span className="text-xs font-mono text-[#8c8fa9]">
                {'aspectRatio' in item ? (item as any).aspectRatio : '1:1'}
              </span>
            </div>

            <h3 className="font-serif-display text-2xl font-normal text-white mb-4">
              {title}
            </h3>

            <div className="bg-[#060714] border border-[#7864ff]/20 rounded-2xl p-4 mb-6">
              <div className="text-[11px] font-semibold text-[#7568ff] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Prompt
              </div>
              <p className="text-xs text-[#d6d5ef] font-light leading-relaxed">
                "{promptText}"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs text-[#8c8fa9] font-mono mb-6">
              <div>
                <span className="block text-[10px] text-[#696b82] uppercase">Engine</span>
                <span className="text-white">gemini-3.1-flash</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#696b82] uppercase">Format</span>
                <span className="text-white">Lossless PNG</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2.5">
            {onEditInStudio && (
              <button
                onClick={() => {
                  onEditInStudio(item);
                  onClose();
                }}
                className="w-full py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#5545ff] to-[#7568ff] hover:shadow-[0_0_20px_rgba(85,69,255,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Wand2 className="w-4 h-4" />
                <span>Edit / Transform in Studio</span>
              </button>
            )}

            <button
              onClick={handleCopy}
              className="w-full py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#d6d5ef] hover:text-white bg-[#141635] hover:bg-[#1f224d] border border-[#7864ff]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Prompt Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Prompt</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="w-full py-2 rounded-xl text-xs font-medium text-[#8c8fa9] hover:text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Image</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  providerInfo: ProviderInfo | null;
  onSelectProvider: (providerId: string) => Promise<void>;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  providerInfo,
  onSelectProvider,
}) => {
  const [switching, setSwitching] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentActive = providerInfo?.activeProvider || 'pollinations';

  const handleSwitch = async (providerId: string) => {
    if (providerId === currentActive) return;
    try {
      setSwitching(true);
      setStatusMessage(null);
      await onSelectProvider(providerId);
      setStatusMessage(`Switched active provider to ${providerId}`);
      setTimeout(() => setStatusMessage(null), 3000);
    } catch (err: any) {
      setStatusMessage(err?.message || 'Failed to switch provider');
    } finally {
      setSwitching(false);
    }
  };

  const providers = [
    {
      id: 'pollinations',
      name: 'Pollinations.AI',
      badge: 'Default',
      description: 'Generative AI image generation with FLUX.1 Schnell',
      detail:
        'Powered by Pollinations.AI API using the FLUX.1 Schnell model. Authentication is managed securely on the server via POLLINATIONS_API_KEY.',
      statusLabel: providerInfo?.hasPollinationsKey
        ? 'POLLINATIONS_API_KEY configured'
        : 'POLLINATIONS_API_KEY not set (Authentication required)',
      isReady: Boolean(providerInfo?.hasPollinationsKey),
      icon: Sparkles,
    },
    {
      id: 'huggingface',
      name: 'Hugging Face',
      badge: 'Secondary',
      description: 'Hugging Face Inference API with FLUX.1-schnell',
      detail:
        'Uses the Hugging Face Inference API with FLUX.1-schnell. Requires HF_TOKEN configured on the server.',
      statusLabel: providerInfo?.hasHfToken
        ? 'HF_TOKEN configured'
        : 'HF_TOKEN not set',
      isReady: Boolean(providerInfo?.hasHfToken),
      icon: Zap,
    },
    {
      id: 'gemini',
      name: 'Google Gemini',
      badge: 'Paid Key Required',
      description: 'High-resolution generative & conversational image editing',
      detail:
        'Requires a paid Google Cloud project with Gemini billing enabled. Free-tier keys have 0 quota for image generation.',
      statusLabel: providerInfo?.hasGeminiKey
        ? 'Key present (Paid billing required)'
        : 'GEMINI_API_KEY not set',
      isReady: Boolean(providerInfo?.hasGeminiKey),
      icon: Sparkles,
    },
    {
      id: 'local',
      name: 'Local Synthesizer',
      badge: 'Instant / Offline',
      description: 'Algorithmic procedural cyberpunk visual synthesizer',
      detail:
        'Generates artistic vector and geometric visuals completely offline without external network or API key dependencies.',
      statusLabel: 'Always ready (No credentials needed)',
      isReady: true,
      icon: Server,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#0d0f26] border border-[#7864ff]/30 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(85,69,255,0.25)] text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#7864ff]/20 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#5545ff]/20 border border-[#7568ff]/40 flex items-center justify-center text-[#9f94ff]">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-base">Image Generation Engine</h3>
              <p className="text-xs text-[#8c8fa9]">Provider configuration & router settings</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#8c8fa9] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {statusMessage && (
          <div className="mb-4 p-3 rounded-xl bg-[#1b1c3a] border border-[#7568ff]/40 text-xs text-[#c4bdff] flex items-center gap-2 animate-fade-in">
            <Sparkles className="w-4 h-4 text-[#8c78ff] shrink-0" />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Provider List */}
        <div className="space-y-3 mb-6">
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#7568ff]">
            Active Image Provider
          </label>

          {providers.map((p) => {
            const isSelected = currentActive === p.id;
            const Icon = p.icon;

            return (
              <div
                key={p.id}
                onClick={() => !switching && handleSwitch(p.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#181a3e] border-[#7568ff] shadow-[0_0_20px_rgba(117,104,255,0.25)]'
                    : 'bg-[#101229]/70 border-[#7864ff]/20 hover:border-[#7864ff]/40 hover:bg-[#141635]'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#8c78ff]' : 'text-[#6c6e88]'}`} />
                    <span className="font-semibold text-sm text-white">{p.name}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#5545ff]/20 text-[#a59aff] border border-[#7568ff]/30">
                      {p.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isSelected && (
                      <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                        <Check className="w-3.5 h-3.5" />
                        Active
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-[#d6d5ef] font-medium mb-1">{p.description}</p>
                <p className="text-[11px] text-[#7d7f99] leading-relaxed mb-2">{p.detail}</p>
                <div className="flex items-center gap-1.5 text-[10px] font-mono">
                  <span className={`w-1.5 h-1.5 rounded-full ${p.isReady ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                  <span className={p.isReady ? 'text-emerald-300' : 'text-amber-300/80'}>{p.statusLabel}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice Info Box */}
        <div className="p-3.5 rounded-2xl bg-[#090b1c] border border-[#7864ff]/20 text-xs text-[#8c8fa9] space-y-1.5">
          <div className="font-medium text-[#c4bdff] flex items-center gap-1.5">
            <span>Authentication & Credit Notice</span>
          </div>
          <p className="text-[11px] leading-relaxed text-[#9d9cb8]">
            Hugging Face provides free monthly experimentation credits that reset periodically. API keys and tokens remain strictly on the server and are never exposed to browser clients.
          </p>
        </div>

        {/* Close Button */}
        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#5545ff] to-[#7568ff] hover:shadow-[0_0_15px_rgba(85,69,255,0.5)] transition-all cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};

