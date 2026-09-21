import React, { useState } from 'react';
import { X, Phone, Mail, MapPin, Send, CheckCircle2, Sparkles, Clock } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Bespoke Culinary Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div 
      id="contact-concierge-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl rounded-3xl bg-slate-900 border border-amber-500/40 p-6 sm:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close Contact Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center mx-auto text-amber-400 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-orienta text-2xl font-bold text-white">
              Transmission Confirmed
            </h3>
            <p className="font-radiocanada text-sm text-slate-300 max-w-md mx-auto">
              Our Head Sommelier & Master Baker will review your request and connect with you via priority comms shortly.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-orienta uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Direct Concierge Desk</span>
            </div>
            <h3 className="font-orienta text-2xl sm:text-3xl font-bold text-white mb-2">
              Connect With SS Bakery
            </h3>
            <p className="font-radiocanada text-xs sm:text-sm text-slate-300 mb-6">
              For custom event catering, private hearth tastings, or wholesale bio-grain allocations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-orienta text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Master Chef Robert"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm font-radiocanada"
                  />
                </div>
                <div>
                  <label className="block text-xs font-orienta text-slate-300 mb-1">Encrypted Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="patron@domain.future"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm font-radiocanada"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-orienta text-slate-300 mb-1">Inquiry Subject</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm font-radiocanada"
                >
                  <option value="Bespoke Culinary Inquiry">Bespoke Culinary Inquiry</option>
                  <option value="Private Hearth Reservation">Private Hearth Reservation</option>
                  <option value="Executive Viennoiserie Catering">Executive Viennoiserie Catering</option>
                  <option value="Wholesale Ancient Grain Distribution">Wholesale Ancient Grain Distribution</option>
                  <option value="Media & Critic Inquiries">Media & Critic Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-orienta text-slate-300 mb-1">Transmission Message</label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Detail your requested date, guest count, or flavor profile specifications..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:outline-none text-white text-sm font-radiocanada"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="text-[11px] font-radiocanada text-slate-400 hidden sm:block">
                  Response SLA: <strong className="text-amber-400">Within 2 Hours</strong>
                </div>
                <button
                  type="submit"
                  className="btn-universal !py-3 !px-6 text-sm ml-auto"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Send Transmission</span>
                </button>
              </div>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-radiocanada">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                {BAKERY_INFO.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                {BAKERY_INFO.email}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
