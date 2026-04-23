'use client';

import React, { useState, useEffect } from 'react';
import {
    Truck,
    DollarSign,
    Heart,
    CheckCircle2,
    ArrowRight,
    Shield,
    Briefcase
} from 'lucide-react';

export default function CareersPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const benefits = [
        {
            icon: DollarSign,
            title: "Industry Leading Pay",
            description: "Start at top market rates. Our drivers earn more because they drive the best lanes with consistent miles."
        },
        {
            icon: Truck,
            title: "Outstanding Equipment",
            description: "Drive late-model Cascadia & VNL trucks specced for safety, efficiency, and driver comfort. Replaced every 3 years."
        },
        {
            icon: Heart,
            title: "Respect & Honesty",
            description: "We treat our drivers with total respect and transparency. You are a name, not a truck number. Your feedback drives our decisions."
        }
    ];

    const perks = [
        { title: "Competitive Pay & Bonuses", desc: "Top-tier CPM with performance incentives." },
        { title: "Full Health Benefits", desc: "Medical, Dental, and Vision coverage for you and your family." },
        { title: "401(k) Match", desc: "We invest in your future with a generous company match." },
        { title: "New Equipment", desc: "Drive 2024+ Cascadia & VNL models. Safety & comfort first." },
        { title: "Flexible Home Time", desc: "We respect your time off. Schedules that fit your life." },
        { title: "Paid Orientation", desc: "Get paid from day one. We value your time." }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#0f172a] font-sans text-slate-100 selection:bg-red-500 selection:text-white">

            {/* =========================================
          1. HERO SECTION
         ========================================= */}
            <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    {/* Swapped to a brighter, proven image URL */}
                    <img
                        src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=2072&auto=format&fit=crop"
                        alt="Truck Driver Life"
                        className="w-full h-full object-cover opacity-100"
                    />
                    {/* Lighter Gradient: Reduced opacity to allow image visibility while keeping text readable */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-[#0f172a]/40 to-transparent"></div>
                    {/* Seamless Bottom Fade */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/90 border border-red-500/20 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm shadow-lg animate-in slide-in-from-left fade-in duration-700">
                            <Briefcase size={14} /> Now Hiring Class A CDL Drivers
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 drop-shadow-2xl animate-in slide-in-from-bottom fade-in duration-700 delay-100">
                            Drive With <br />
                            <span className="relative inline-block whitespace-nowrap z-10 ml-2">
                                <span className="relative z-10 px-2">Purpose</span>
                                <span className="absolute bottom-2 left-0 h-[35%] w-full bg-red-600 -skew-x-12 -z-10 opacity-90"></span>
                            </span>
                        </h1>

                        <p className="text-xl text-slate-200 max-w-2xl leading-relaxed font-medium drop-shadow-lg animate-in slide-in-from-bottom fade-in duration-700 delay-200">
                            Join an elite team of professional drivers who are changing the trucking industry. High pay, new trucks, and a culture that puts you first.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-8 animate-in slide-in-from-bottom fade-in duration-700 delay-300">
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-[0_4px_20px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_25px_rgba(220,38,38,0.6)] hover:-translate-y-1 flex items-center gap-2"
                            >
                                Apply Now <ArrowRight size={18} />
                            </a>
                            <a
                                href="#perks"
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/10 backdrop-blur-sm hover:-translate-y-1"
                            >
                                View Benefits
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 animate-pulse delay-700 duration-1000">
                    <span className="text-xs font-bold uppercase tracking-widest text-shadow-sm">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </section>

            {/* =========================================
          2. KEY BENEFITS (White Cards)
         ========================================= */}
            {/* Increased scroll margin to 60 (approx 240px) to ensure perfect alignment below header */}
            <section id="benefits" className="relative z-20 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-24 scroll-mt-60">
                <div className="grid md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-red-600 hover:-translate-y-2 transition-transform duration-300 ease-out group"
                            >
                                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* =========================================
          3. PERKS & FLEET (Split Section)
         ========================================= */}
            <section id="perks" className="relative py-24 bg-[#0f172a] border-t border-white/5 overflow-hidden scroll-mt-32">
                {/* Background Glow */}
                <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-red-600/10 blur-[120px] rounded-full"></div>

                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Perks List */}
                        <div className="space-y-8 animate-in slide-in-from-left duration-700 delay-300">
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                                Drive for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">United Lane.</span>
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                Join a team that respects your time and values your service. We provide the tools you need to succeed and the pay you deserve.
                            </p>

                            <div className="space-y-4">
                                {perks.map((perk, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 flex-shrink-0 mt-1">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm">{perk.title}</h4>
                                            <p className="text-slate-500 text-xs mt-0.5">{perk.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Apply Now links to Contact */}
                            <a href="/contact" className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                                Apply Now <ArrowRight size={18} />
                            </a>
                        </div>

                        {/* Right: Modern Fleet Graphic */}
                        <div className="relative animate-in slide-in-from-right duration-700 delay-500">
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                                <img
                                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
                                    alt="United Lane Modern Fleet"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-40"></div>

                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/30 group-hover:bg-red-600 transition-colors duration-300 shadow-lg">
                                        <Truck size={40} className="text-white" />
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-2 drop-shadow-lg">Modern Fleet</h3>
                                    <p className="text-white text-sm max-w-xs font-bold drop-shadow-md">2024+ Cascadia & VNL models equipped with APUs, fridges, and inverters.</p>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-[#1e293b] p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 animate-bounce delay-1000 z-20">
                                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold shadow-red-900/50 shadow-md">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Safety Bonus</div>
                                    <div className="text-sm font-bold text-white">Available Quarterly</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================
          4. CTA / BOTTOM
         ========================================= */}
            <section className="py-24 relative overflow-hidden border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-black text-white mb-6">Ready to Drive With Purpose?</h2>
                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                        Join a carrier that delivers on every promise. Apply today and become part of the United Lane family.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {/* Start Application links to Contact */}
                        <a href="/contact" className="px-8 py-4 bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold rounded-xl transition-all border border-white/20 shadow-lg flex items-center justify-center gap-2 hover:-translate-y-1">
                            Start Application <ArrowRight size={18} />
                        </a>
                        {/* Speak to Recruiter calls number */}
                        <a href="tel:+12342265821" className="px-8 py-4 bg-white text-[#0f172a] font-bold rounded-xl transition-all shadow-lg hover:bg-slate-200 flex items-center justify-center gap-2 hover:-translate-y-1">
                            Speak to Recruiter
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}