'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Clock,
  MapPin,
  Truck,
  BarChart3,
  MessageSquare,
  Users,
  Route,
  Package,
  Navigation,
  Phone,
  CheckCircle2,
  Loader2
} from 'lucide-react';

export default function HomePage() {
  // State for the tracking request form
  const [trackingRequest, setTrackingRequest] = useState({ id: '', email: '' });
  const [requestStatus, setRequestStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleTrackingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingRequest.id || !trackingRequest.email) return;

    setRequestStatus('loading');

    // Simulate API call/Network delay
    setTimeout(() => {
      setRequestStatus('success');
      // Optional: Reset after a few seconds or keep the success message visible
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] font-sans text-slate-100 selection:bg-red-500 selection:text-white">

      {/* =========================================
          1. HERO SECTION (Cinematic & Interactive)
         ========================================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-32 overflow-hidden bg-[#0f172a]">

        {/* Background Image & Dynamic Overlay */}
        <div className="absolute inset-0 z-0 select-none">
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
            alt="Truck on highway at dusk"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Revised Overlay: Lighter touch to let the image show through more ("starts later") */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-transparent"></div>

          {/* Bottom Fade: Seamless blend into the dark content below (no white cut) */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
        </div>

        {/* Padding px-8 is perfect for mobile readability */}
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* LEFT: Main Messaging (Span 7 cols) */}
            <div className="lg:col-span-7 space-y-8 animate-in slide-in-from-left duration-700">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-red-400 text-xs sm:text-sm font-bold backdrop-blur-md shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                </span>
                Asset-Based Carrier • Northfield, OH
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                Moving America <br />
                With{' '}
                <span className="relative inline-block whitespace-nowrap z-10 ml-2">
                  <span className="relative z-10 px-2 text-white">Pride & Precision</span>
                  {/* Skewed Red Highlight */}
                  <span className="absolute bottom-2 left-0 w-full h-[35%] bg-red-600 -skew-x-12 -z-10 opacity-90"></span>
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed font-medium">
                We aren't just a broker. We own the trucks, hire the drivers, and manage the freight. Experience the reliability of a true asset-based partner.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="/contact"
                  className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_4px_20px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_25px_rgba(220,38,38,0.6)] flex items-center justify-center gap-2 transform hover:-translate-y-1"
                >
                  Get a Freight Quote
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/careers"
                  className="px-8 py-4 rounded-xl font-bold text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <Users size={20} />
                  Drive for United Lane
                </a>
              </div>
            </div>

            {/* RIGHT: Logistics Hub Widget (Span 5 cols) */}
            <div className="lg:col-span-5 mt-10 lg:mt-0 animate-in slide-in-from-right duration-700 delay-200">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-all">
                {/* Glow Effect */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-red-600/30 rounded-full blur-[80px]"></div>

                <div className="relative z-10 space-y-6">

                  {/* --- QUICK TRACK / REQUEST UPDATE --- */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <h3 className="text-white text-lg font-bold flex items-center gap-2">
                        <Navigation className="text-red-500" size={20} />
                        Quick Track
                      </h3>
                      <p className="text-slate-400 text-xs">Request a status update instantly</p>
                    </div>
                    {/* Status Dot */}
                    <div className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </div>
                  </div>

                  {/* FORM or SUCCESS MESSAGE */}
                  {requestStatus === 'success' ? (
                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center space-y-3 animate-in fade-in zoom-in duration-300">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto shadow-lg shadow-green-500/20">
                        <CheckCircle2 size={24} />
                      </div>
                      <h4 className="text-white font-bold text-lg">Request Received</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Our tracking team will check on <span className="text-white font-mono font-bold">{trackingRequest.id}</span> and email an update to <span className="text-white font-bold">{trackingRequest.email}</span> shortly.
                      </p>
                      <button
                        onClick={() => {
                          setRequestStatus('idle');
                          setTrackingRequest({ id: '', email: '' });
                        }}
                        className="text-xs text-green-400 font-bold hover:text-green-300 mt-2 underline"
                      >
                        Track another shipment
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleTrackingSubmit} className="space-y-3">
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-slate-400 font-bold tracking-wider ml-1">Load # / PRO #</label>
                        <div className="bg-black/20 rounded-xl px-4 py-3 border border-white/10 focus-within:border-red-500/50 focus-within:bg-black/40 transition-all flex items-center gap-3">
                          <Search size={18} className="text-slate-500" />
                          <input
                            type="text"
                            placeholder="Enter Load ID..."
                            className="bg-transparent w-full text-white placeholder:text-slate-600 outline-none text-sm font-medium"
                            value={trackingRequest.id}
                            onChange={(e) => setTrackingRequest({ ...trackingRequest, id: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] uppercase text-slate-400 font-bold tracking-wider ml-1">Your Email</label>
                        <div className="bg-black/20 rounded-xl px-4 py-3 border border-white/10 focus-within:border-red-500/50 focus-within:bg-black/40 transition-all flex items-center gap-3">
                          <Users size={18} className="text-slate-500" />
                          <input
                            type="email"
                            placeholder="name@company.com"
                            className="bg-transparent w-full text-white placeholder:text-slate-600 outline-none text-sm font-medium"
                            value={trackingRequest.email}
                            onChange={(e) => setTrackingRequest({ ...trackingRequest, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={requestStatus === 'loading'}
                        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 mt-2"
                      >
                        {requestStatus === 'loading' ? (
                          <><Loader2 size={18} className="animate-spin" /> Sending Request...</>
                        ) : (
                          <>Get Status Update <ArrowRight size={18} /></>
                        )}
                      </button>
                    </form>
                  )}

                  {/* --- FLEET STATUS & DISPATCH --- */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center">
                        <div className="text-2xl font-black text-white">70+</div>
                        <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Power Units</div>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center">
                        <div className="text-2xl font-black text-white">48</div>
                        <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">States</div>
                      </div>
                    </div>

                    {/* Dispatch Contact - Secondary Option */}
                    <div className="flex items-center justify-between px-2">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Phone size={14} className="text-red-500" />
                        <span className="text-xs font-medium">Prefer to call?</span>
                      </div>
                      <a href="tel:+12342265821" className="text-white hover:text-red-400 text-xs font-bold transition-colors">
                        +1 (234) 226-5821
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          2. SERVICE CARDS (White on Dark)
          High contrast against the dark background for impact
         ========================================= */}
      <section className="relative z-20 bg-[#0f172a] pt-12 pb-20 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-red-600 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Truck size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Dry Van Transport</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              53' trailers ready for drop-and-hook or live loads. Secure, weather-proof, and tracked 24/7.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-slate-800 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-800 mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors">
              <Route size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Dedicated Lanes</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Consistent capacity on your most critical routes. We build custom solutions to keep your supply chain moving.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-red-600 hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Expedited Team</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Non-stop delivery for time-critical freight. Team drivers ensure your load never stops moving.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          3. "WHY CHOOSE US" (Dark Glass Theme)
          Blends seamlessly with the background using dark glass cards
         ========================================= */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-4 border border-red-500/20">
              <ShieldCheck size={14} /> The United Lane Standard
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Why Companies Choose <span className="text-red-600">United Lane</span>
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              In a market full of brokers, we bring the stability of asset-based capacity. When we say we'll pick it up, we pick it up.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "On-Time Performance",
                desc: "Industry-leading delivery rates backed by real data. We respect your schedule."
              },
              {
                icon: ShieldCheck,
                title: "Safety-First Culture",
                desc: "Top CSA scores and a team committed to protecting your cargo and the motoring public."
              },
              {
                icon: MapPin,
                title: "Live GPS Visibility",
                desc: "Real-time macro-point tracking updates throughout every shipment."
              },
              {
                icon: BarChart3,
                title: "Asset-Based Capacity",
                desc: "Our own fleet of 70+ trucks means consistent capacity when the market tightens."
              },
              {
                icon: MessageSquare,
                title: "Proactive Comms",
                desc: "Updates before you ask. We keep you informed so you can manage your supply chain."
              },
              {
                icon: Package,
                title: "Drop Trailer Programs",
                desc: "Flexible drop-and-hook solutions to keep your dock moving efficiently."
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-red-600 transition-colors duration-300">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{feature.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
          4. SPLIT CTA (Seamless Bottom)
         ========================================= */}
      <section className="relative py-32 bg-[#0f172a] overflow-hidden border-t border-white/5">

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 transform translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-white/5 -skew-x-12 transform -translate-x-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10 pt-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Freight Message */}
            <div className="space-y-8 animate-in slide-in-from-left duration-700 delay-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest">
                <Package size={14} /> For Shippers
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Freight that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Performs.</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                Experience the difference of an asset-based carrier that puts precision first. Real trucks, real drivers, real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="px-8 py-4 bg-white text-[#0f172a] font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-lg">
                  Request a Quote <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Right: Careers Message */}
            <div className="relative lg:pl-16 lg:border-l border-white/10 space-y-8 animate-in slide-in-from-right duration-700 delay-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                <Users size={14} /> For Drivers
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Careers that <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Grow.</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-md leading-relaxed">
                Join a fleet that respects your time. 70+ units, dedicated lanes, and top-tier pay. You're a name, not a number.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/careers" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20 flex items-center justify-center gap-2">
                  Apply Now <ArrowRight size={18} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}