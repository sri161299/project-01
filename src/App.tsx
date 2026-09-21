/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { QuantumMenuSection } from './components/QuantumMenuSection';
import { LabSection } from './components/LabSection';
import { SensoryMatrixSection } from './components/SensoryMatrixSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ConciergeSection } from './components/ConciergeSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ZipExportModal } from './components/ZipExportModal';
import { MenuItem } from './types';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isZipModalOpen, setIsZipModalOpen] = useState(false);
  const [preselectedItem, setPreselectedItem] = useState<string | undefined>(undefined);

  const handleExploreClick = () => {
    const el = document.getElementById('creations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserveClick = () => {
    const el = document.getElementById('concierge');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectItemForReserve = (item: MenuItem) => {
    setPreselectedItem(item.name);
    handleReserveClick();
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-radiocanada selection:bg-amber-500 selection:text-slate-950">
      
      {/* Condition 5: Sticky Header with 3 Divisions (SS Logo, Navigation Menu, Contact Button) */}
      <Header 
        onOpenContactModal={() => setIsContactModalOpen(true)}
        onOpenZipModal={() => setIsZipModalOpen(true)}
      />

      {/* Main 6 Distinct Engaging Sections */}
      <main className="flex-grow">
        {/* Section 01: Hero Section */}
        <HeroSection 
          onExploreClick={handleExploreClick}
          onReserveClick={handleReserveClick}
        />

        {/* Section 02: Quantum Menu Creations */}
        <QuantumMenuSection 
          onSelectItemForReserve={handleSelectItemForReserve}
        />

        {/* Section 03: The Innovation Lab */}
        <LabSection />

        {/* Section 04: Interactive Sensory Hearth & Flavor Matrix */}
        <SensoryMatrixSection />

        {/* Section 05: Sensory Critics & Accolades */}
        <ReviewsSection />

        {/* Section 06: Concierge & Atelier Tasting Reservation */}
        <ConciergeSection 
          preselectedItemName={preselectedItem}
        />
      </main>

      {/* Condition 7: Professional Footer */}
      <Footer 
        onOpenZipModal={() => setIsZipModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Universal Interactive Modals */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Condition 11: Download Project ZIP & Instructions Modal */}
      <ZipExportModal 
        isOpen={isZipModalOpen}
        onClose={() => setIsZipModalOpen(false)}
      />

    </div>
  );
}
