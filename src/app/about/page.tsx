'use client';

import React, { useState, useEffect } from 'react';
import {
    ShieldCheck,
    Users,
    Flag,
    MapPin,
    Target,
    Heart,
    ArrowRight,
    Truck
} from 'lucide-react';
export default function AboutPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const values = [
        {
            icon: ShieldCheck,
            title: "Safety First",
            description: "We never compromise on safety. From our maintenance protocols to our hiring standards, protecting our drivers and the motoring public is our obsession."
        },
        {
            icon: Users,
            title: "Driver-Centric",
            description: "We are an asset-based carrier, which means we are nothing without our drivers. We treat them with the respect, pay, and equipment they deserve."
        },
        {
            icon: Flag,
            title: "American Pride",
            description: "We are proud to serve the nation's supply chain. We operate with the integrity and work ethic that built this country."
        },
        {
            icon: Target,
            title: "Precision Execution",
            description: "We don't make excuses. We deliver on time, communicate proactively, and execute with military-grade precision."
        },
        {
            icon: Heart,
            title: "Integrity",
            description: "Honest communication with shippers and drivers. No hidden fees, no false promises, just transparent logistics."
        },
        {
            icon: Truck,
            title: "Asset Reliability",
            description: "We own the trucks. We control the maintenance. We guarantee the capacity. That's the United Lane difference."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#0f172a] font-sans text-slate-100 selection:bg-red-500 selection:text-white">

            {/* =========================================
          1. HERO SECTION
         ========================================= */}
            <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop"
                        alt="United Lane Truck on the Road"
                        className="w-full h-full object-cover opacity-60 scale-105 animate-in fade-in duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-transparent"></div>
                    {/* Seamless Bottom Fade - Increased height for smoother blend */}
                    <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6 animate-in slide-in-from-left fade-in duration-700">
                            <Flag size={14} /> Established & Trusted
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 animate-in slide-in-from-bottom fade-in duration-700 delay-100">
                            Driven by <br />
                            <span className="relative inline-block whitespace-nowrap z-10 ml-2">
                                <span className="relative z-10 px-2">Commitment</span>
                                {/* Animated Skewed Red Highlight */}
                                <span
                                    className={`absolute bottom-2 left-0 h-[35%] bg-red-600 -skew-x-12 -z-10 opacity-90 transition-all duration-1000 ease-out origin-left ${isLoaded ? 'w-full' : 'w-0'}`}
                                ></span>
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed animate-in slide-in-from-bottom fade-in duration-700 delay-200 font-medium">
                            We aren't just moving freight; we're moving the economy forward. Learn about the values that drive United Lane and the team that keeps us rolling.
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-pulse delay-700 duration-1000">
                    <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
                </div>
            </section>

            {/* =========================================
          2. OUR STORY (Split Section)
         ========================================= */}
            <section className="relative py-24 bg-[#0f172a]">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Text Content */}
                        <div className="space-y-8 animate-in slide-in-from-left duration-700 delay-300">
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                                More Than Just A <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Trucking Company.</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                                <p>
                                    United Lane was founded on a simple principle: to provide honest, reliable, and American-made logistics solutions. In an industry often plagued by uncertainty, we set out to be the constant our partners could rely on.
                                </p>
                                <p>
                                    We started in Northfield, OH with a single truck and a vision. Today, we operate a growing fleet of 70+ power units, serving shippers across 48 states. But despite our growth, we haven't lost our small-carrier soul.
                                </p>
                                <p className="text-white font-bold border-l-4 border-red-600 pl-4">
                                    "We believe that when you own the assets, you control the quality. That's why we stay asset-based."
                                </p>
                            </div>
                        </div>

                        {/* Image/Visual */}
                        <div className="relative animate-in slide-in-from-right duration-700 delay-500">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                                <div className="absolute inset-0 bg-red-600/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop"
                                    alt="United Lane Fleet"
                                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                />
                            </div>
                            {/* Floating Stat Card */}
                            <div className="absolute -bottom-8 -left-8 bg-[#0f172a] p-6 rounded-2xl border border-white/10 shadow-xl hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">HQ Location</div>
                                        <div className="text-xl font-bold text-white">Northfield, OH</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================
          3. CORE VALUES (White Cards Grid)
         ========================================= */}
            <section className="py-32 bg-[#0f172a] relative">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-4">Our Foundation</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                            The Values That Drive Us
                        </h3>
                        <p className="text-lg text-slate-400">
                            Every mile we drive is powered by a set of core beliefs that define who we are as a company and as people.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-red-600 group hover:-translate-y-2 transition-all duration-300">
                                    <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                        <Icon size={28} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                                    <p className="text-slate-500 leading-relaxed text-sm">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================
          4. CTA / JOIN TEAM
         ========================================= */}
            <section className="py-24 relative overflow-hidden border-t border-white/5">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 transform translate-x-1/4"></div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-black text-white mb-6">Want to be part of our story?</h2>
                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                        We are always looking for professional drivers and logistics experts who share our values.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/careers" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 hover:-translate-y-1">
                            View Open Positions <ArrowRight size={18} />
                        </a>
                        <a href="/contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10 backdrop-blur-sm hover:-translate-y-1">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}