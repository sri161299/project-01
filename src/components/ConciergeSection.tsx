import React, { useState } from 'react';
import { Calendar, Clock, Users, Sparkles, CheckCircle2, Shield, QrCode, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { BAKERY_INFO, MENU_ITEMS } from '../data/bakeryData';

interface ConciergeSectionProps {
  preselectedItemName?: string;
}

export const ConciergeSection: React.FC<ConciergeSectionProps> = ({ preselectedItemName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-09-22');
  const [timeSlot, setTimeSlot] = useState('09:00 - Dawn Hearth Tasting');
  const [guests, setGuests] = useState(2);
  const [experienceType, setExperienceType] = useState('Atelier Bread & Pastry Flight ($45/guest)');
  const [selectedItems, setSelectedItems] = useState<string[]>(preselectedItemName ? [preselectedItemName] : ['Hyper-Laminated Quantum Croissant']);
  const [submittedPass, setSubmittedPass] = useState<any | null>(null);

  const timeSlots = [
    '07:30 - Dawn Infrared Hearth Release',
    '09:00 - Dawn Hearth Tasting Flight',
    '12:30 - Noon Bio-Sourdough Pairing',
    '18:00 - Twilight Patisserie & Tea Matrix',
    '20:00 - Late-Evening Molecular Salon'
  ];

  const experiences = [
    { label: 'Atelier Bread & Pastry Flight', price: 45, desc: '5-course guided sensory tasting with fresh cold-pressed butter & botanical teas.' },
    { label: 'Grand Cru Baker Counter Tasting', price: 85, desc: 'Direct seat at the 245°C quartz hearth with Master Baker commentary & wine pairings.' },
    { label: 'Express Batch Pickup Holding Vault', price: 20, desc: 'Pre-packaged temperature-controlled thermal box ready for zero-wait retrieval.' }
  ];

  const handleItemToggle = (itemName: string) => {
    if (selectedItems.includes(itemName)) {
      setSelectedItems(selectedItems.filter(i => i !== itemName));
    } else {
      setSelectedItems([...selectedItems, itemName]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reservationCode = `SS-${Math.floor(100000 + Math.random() * 900000)}`;
    const passData = {
      code: reservationCode,
      name: name || 'Valued Patron',
      email: email || 'patron@domain.future',
      phone: phone || '+1 (555) 019-2834',
      date,
      timeSlot,
      guests,
      experienceType,
      selectedItems,
      timestamp: new Date().toLocaleString()
    };
    setSubmittedPass(passData);
  };

  return (
    <section id="concierge" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#090D16] via-slate-950 to-[#090D16]">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-orienta mb-4 uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 06 &bull; Atelier Reservations & Pre-Order</span>
          </div>
          <h2 className="font-orienta text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Reserve Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Sensory Encounter</span>
          </h2>
          <p className="font-radiocanada text-base sm:text-lg text-slate-300">
            Due to our 72-hour cryo-ferment cycles, daily hearth yields are strictly numbered. Reserve an atelier tasting table or pre-schedule your fresh warm batch.
          </p>
        </div>

        {/* Condition 8: Concierge Matrix Container with hover-lift-30 effect */}
        <div 
          id="concierge-booking-container"
          className="rounded-3xl bg-slate-900/90 border border-amber-500/30 p-6 sm:p-10 hover-lift-30 shadow-2xl backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Interactive Reservation Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-orienta text-xl font-bold text-white">Guest Information</h3>
                <p className="text-xs font-radiocanada text-slate-400">Your digital batch access code will be dispatched immediately.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-orienta text-slate-300 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Cassandra Vance"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm font-radiocanada"
                  />
                </div>
                <div>
                  <label className="block text-xs font-orienta text-slate-300 mb-1.5">Digital Comm / Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.future"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm font-radiocanada"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-orienta text-slate-300 mb-1.5">Direct Line</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm font-radiocanada"
                  />
                </div>
                <div>
                  <label className="block text-xs font-orienta text-slate-300 mb-1.5">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm font-radiocanada"
                  />
                </div>
                <div>
                  <label className="block text-xs font-orienta text-slate-300 mb-1.5">Guest Count</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 4, 6].map(num => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => setGuests(num)}
                        className={`flex-1 py-3 rounded-xl text-xs font-orienta transition-all ${
                          guests === num
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Time Window Selection */}
              <div>
                <label className="block text-xs font-orienta text-slate-300 mb-2">Select Hearth Release Cycle</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {timeSlots.map((slot, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setTimeSlot(slot)}
                      className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-radiocanada border transition-all ${
                        timeSlot === slot
                          ? 'bg-amber-500/15 border-amber-400 text-amber-300 font-medium'
                          : 'bg-slate-950 border-slate-800/80 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Batch items inclusion */}
              <div>
                <label className="block text-xs font-orienta text-slate-300 mb-2">Include Fresh Warm Loaf or Pastry</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {MENU_ITEMS.slice(0, 4).map((item) => {
                    const isChecked = selectedItems.includes(item.name);
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleItemToggle(item.name)}
                        className={`cursor-pointer p-3 rounded-xl border flex items-center justify-between text-xs transition-all ${
                          isChecked
                            ? 'bg-amber-500/10 border-amber-400/80 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <span className="font-orienta truncate mr-2">{item.name}</span>
                        <span className="text-amber-400 shrink-0 font-mono">${item.price.toFixed(2)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Universal Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  id="concierge-submit-btn"
                  className="btn-universal w-full !py-4 text-base"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Generate Encrypted Hearth Pass</span>
                </button>
              </div>

            </form>

            {/* Right: Atelier Coordinates & Hospitality Protocols */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-950 border border-amber-500/20">
              
              <div>
                <div className="flex items-center gap-2 text-amber-400 font-orienta text-sm font-bold uppercase tracking-wider mb-4">
                  <Shield className="w-4 h-4" />
                  <span>SS Atelier Protocols</span>
                </div>

                <div className="space-y-4 text-sm font-radiocanada text-slate-300">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-orienta text-white font-bold">Physical Sanctuary</div>
                      <div className="text-xs text-slate-400">{BAKERY_INFO.address}</div>
                      <div className="text-[11px] font-mono text-amber-400/80 mt-0.5">{BAKERY_INFO.coordinates}</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-orienta text-white font-bold">Hearth Cycles</div>
                      <div className="text-xs text-slate-400">{BAKERY_INFO.openingHours.morning}</div>
                      <div className="text-xs text-slate-400">{BAKERY_INFO.openingHours.evening}</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-orienta text-white font-bold">Encrypted Communication</div>
                      <div className="text-xs text-slate-400">{BAKERY_INFO.phone}</div>
                      <div className="text-xs text-slate-400">{BAKERY_INFO.email}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-800">
                <div className="text-xs font-orienta text-amber-400 uppercase tracking-widest mb-1">
                  Thermal Holding Vault Assurance
                </div>
                <p className="text-xs font-radiocanada text-slate-400 leading-relaxed">
                  Every reserved creation is placed inside our humidity-regulated nitrogen resting chamber at precisely 52°C so you experience peak oven bloom upon arrival.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Pass Confirmation Hologram Modal */}
      {submittedPass && (
        <div 
          id="reservation-pass-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setSubmittedPass(null)}
        >
          <div 
            className="w-full max-w-md rounded-3xl bg-slate-900 border-2 border-amber-500/60 p-6 sm:p-8 shadow-[0_0_50px_rgba(245,158,11,0.3)] relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400 flex items-center justify-center mx-auto mb-4 text-amber-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-xs font-mono text-amber-400 tracking-widest uppercase mb-1">
              HEARTH PASS AUTHENTICATED
            </div>
            <h3 className="font-orienta text-2xl font-bold text-white mb-2">
              Welcome to SS Bakery
            </h3>
            <p className="text-xs font-radiocanada text-slate-300 mb-6">
              Your table and thermal oven allocation are locked in the master ledger.
            </p>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-6 text-left space-y-2 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Pass ID:</span>
                <span className="text-amber-400 font-bold">{submittedPass.code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Patron:</span>
                <span className="text-white">{submittedPass.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Cycle:</span>
                <span className="text-amber-300">{submittedPass.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date & Guests:</span>
                <span className="text-white">{submittedPass.date} ({submittedPass.guests} Guests)</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="p-3 bg-white rounded-xl text-black inline-flex">
                <QrCode className="w-14 h-14" />
              </div>
            </div>

            <button
              onClick={() => setSubmittedPass(null)}
              className="btn-universal w-full !py-3 text-sm"
            >
              <span>Done & Close Pass</span>
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
