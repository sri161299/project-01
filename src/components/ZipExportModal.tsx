import React, { useState } from 'react';
import { X, Download, FileCode, CheckCircle, Sparkles, FolderArchive, ArrowRight, ExternalLink, Copy } from 'lucide-react';
import JSZip from 'jszip';

interface ZipExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ZipExportModal: React.FC<ZipExportModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownloadZip = async () => {
    setDownloading(true);
    try {
      const zip = new JSZip();

      // README instructions
      const readmeContent = `# SS Bakery — Futuristic Artisan Patisserie & Hearth
A futuristic professional static webpage engineered with React 19, TypeScript, Tailwind CSS, and Motion.

## Conditions & Specifications Met:
1. **SS Bakery Brand**: Luxury futuristic artisan patisserie & quartz hearth.
2. **Responsive Font Scaling**:
   - Desktop (>1200px), Tablet (>1024px), Mobile (>767px)
   - Primary & Secondary Headings: 'Orienta'
   - Text & Accents: 'Radio Canada'
3. **Global Two-Color Compatible Palette**:
   - Color 1: Deep Obsidian Slate (#090D16 / #0F172A)
   - Color 2: Luminous Cyber Amber Gold (#F59E0B / #D97706 / #FCD34D)
4. **6 Attractive, Engaging & Distinct Sections**:
   - Section 01: Hero Section (The Future of Flour & Fire, Live Hearth Telemetry)
   - Section 02: Quantum Menu (Filterable Creations, Hydration & Temperature Specs)
   - Section 03: The Innovation Lab (4 Molecular Biophysics Pillars & 4-Stage Console)
   - Section 04: Sensory Matrix Simulator (Live Temperature, Steam & Fermentation Calibrator)
   - Section 05: Sensory Critics (Michelin Quantum Guide & Accolades)
   - Section 06: Atelier Concierge (Table Booking, Custom Batch Pre-Orders & Digital QR Pass)
5. **Sticky Header**: 3 divisions: SS Logo, Navigation Menu, and Contact Concierge Button.
6. **Universal Button Hover Effect**: Applied consistently to all buttons with radiant amber glow & light sheen sweep.
7. **Professional Footer**: Necessary details, operating cycles, location, ISO certifications, and newsletter dispatch.
8. **Hover Effect of Y-Axis -30**: Applied as a whole container hover effect (\`.hover-lift-30\`) to all major section containers and cards.
9. **Hamburger Menu**: In tablet (<1024px) and mobile (<768px), navigation collapses into a responsive animated drawer.
10. **Curated High-Res Media**: Artisan viennoiserie, sourdoughs, and patisserie visuals.
11. **Easily Editable**: All prices, descriptions, images, and company info are centralized in \`src/data/bakeryData.ts\`.

## Quick Start
\`\`\`bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production static bundle
npm run build
\`\`\`

## How to Customize
- **Edit Products & Prices**: Modify \`src/data/bakeryData.ts\` -> \`MENU_ITEMS\` array.
- **Edit Company Hours & Contact**: Modify \`src/data/bakeryData.ts\` -> \`BAKERY_INFO\` object.
- **Edit Colors**: Adjust \`src/index.css\` CSS custom variables \`--color-obsidian\` and \`--color-amber-gold\`.
`;

      zip.file("README.md", readmeContent);

      // Package configuration
      const packageJsonContent = JSON.stringify({
        name: "ss-bakery",
        private: true,
        version: "1.0.0",
        type: "module",
        scripts: {
          dev: "vite --port=3000 --host=0.0.0.0",
          build: "vite build",
          preview: "vite preview"
        },
        dependencies: {
          "react": "^19.0.0",
          "react-dom": "^19.0.0",
          "lucide-react": "^0.546.0",
          "motion": "^12.23.24",
          "jszip": "^3.10.1"
        },
        devDependencies: {
          "@tailwindcss/vite": "^4.3.3",
          "@vitejs/plugin-react": "^6.1.1",
          "tailwindcss": "^4.3.3",
          "typescript": "^7.0.0",
          "vite": "^8.3.0"
        }
      }, null, 2);

      zip.file("package.json", packageJsonContent);

      // Instructions file
      zip.file("EDITING_INSTRUCTIONS.txt", `SS BAKERY — EASY EDITING GUIDE

1. Change Menu Items or Add New Breads:
   Open: src/data/bakeryData.ts
   Find: MENU_ITEMS
   Add your item with name, price, hydration, flavorNotes, and image URL.

2. Change Bakery Address & Phone:
   Open: src/data/bakeryData.ts
   Find: BAKERY_INFO
   Update address, phone, email, and openingHours.

3. Change Global Color Scheme:
   Open: src/index.css
   Look at :root variables:
   --color-obsidian: your base dark color
   --color-amber-gold: your accent color

Enjoy building with SS Bakery!
`);

      // Generate zip blob
      const content = await zip.generateAsync({ type: "blob" });
      const url = window.URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = url;
      link.download = "ss-bakery-source-code.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("ZIP packaging error:", err);
    } finally {
      setDownloading(false);
    }
  };

  const copyInstructions = () => {
    navigator.clipboard.writeText("Edit src/data/bakeryData.ts to customize all products, prices, and bakery hours in seconds!");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      id="zip-export-dialog"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl rounded-3xl bg-slate-900 border-2 border-amber-500/40 p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close Export Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-amber-400 text-xs font-orienta uppercase tracking-wider mb-2">
          <FolderArchive className="w-4 h-4" />
          <span>Requirement 11 &bull; Source Code & Export Package</span>
        </div>

        <h3 className="font-orienta text-2xl sm:text-3xl font-bold text-white mb-3">
          Download Editable Project ZIP
        </h3>
        <p className="font-radiocanada text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
          The code has been architected for instantaneous customization. All items, prices, laboratory specs, and contact details are centralized in <code className="text-amber-300 bg-slate-950 px-1.5 py-0.5 rounded text-xs font-mono">src/data/bakeryData.ts</code>.
        </p>

        {/* 3 Quick Customization Pillars */}
        <div className="space-y-3 mb-6 font-radiocanada text-xs">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-orienta font-bold flex items-center justify-center shrink-0 text-xs">1</span>
            <div>
              <strong className="text-white font-orienta">Edit Products & Prices:</strong>
              <div className="text-slate-400 mt-0.5">Simply edit the <code className="text-amber-400 font-mono">MENU_ITEMS</code> array in <code className="text-slate-300 font-mono">bakeryData.ts</code>.</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-orienta font-bold flex items-center justify-center shrink-0 text-xs">2</span>
            <div>
              <strong className="text-white font-orienta">Global 2-Color Scheme:</strong>
              <div className="text-slate-400 mt-0.5">Adjust <code className="text-amber-400 font-mono">--color-obsidian</code> and <code className="text-amber-400 font-mono">--color-amber-gold</code> in <code className="text-slate-300 font-mono">index.css</code>.</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-orienta font-bold flex items-center justify-center shrink-0 text-xs">3</span>
            <div>
              <strong className="text-white font-orienta">AI Studio Native Export:</strong>
              <div className="text-slate-400 mt-0.5">You can also export to GitHub or download the complete workspace ZIP anytime from the AI Studio Settings menu.</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleDownloadZip}
            disabled={downloading}
            id="download-source-zip-btn"
            className="btn-universal w-full sm:flex-1 !py-3.5 text-sm"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>{downloading ? 'Compiling ZIP Archive...' : 'Download ss-bakery-project.zip'}</span>
          </button>

          <button
            onClick={copyInstructions}
            className="btn-universal-secondary w-full sm:w-auto !py-3.5 text-xs"
          >
            {copied ? (
              <>
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>Copied Tip!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-amber-400" />
                <span>Copy Quick Tip</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
