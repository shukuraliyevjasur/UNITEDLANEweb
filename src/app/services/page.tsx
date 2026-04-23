'use client';

import React, { useState, useEffect } from 'react';
import {
    Truck,
    Clock,
    ShieldCheck,
    Zap,
    Route,
    Box,
    CheckCircle2,
    BarChart3,
    Navigation,
    Globe,
    ArrowRight
} from 'lucide-react';

export default function ServicesPage() {
    const [isLoaded, setIsLoaded] = useState(false);

    // Trigger animation on mount
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const services = [
        {
            icon: Truck,
            title: "Dry Van Truckload",
            description: "Our core competency. We operate a modern fleet of 53' air-ride dry vans, ensuring your general freight moves safely and securely nationwide.",
            features: ["Drop & Hook Capabilities", "Real-Time MacroPoint Tracking", "24/7 Dispatch Support"]
        },
        {
            icon: Zap,
            title: "Expedited Shipping",
            description: "When time is money, our team drivers keep your freight moving non-stop. We specialize in time-critical deliveries for automotive and JIT manufacturing.",
            features: ["Team Drivers Available", "Non-Stop Transit", "Guaranteed Delivery Windows"]
        },
        {
            icon: Route,
            title: "Dedicated Lanes",
            description: "Secure consistent capacity on your high-volume lanes. We build custom routing solutions that function like your own private fleet.",
            features: ["Fixed Pricing Models", "Guaranteed Capacity", "Driver Familiarity"]
        },
        {
            icon: Box,
            title: "Power Only",
            description: "Flexible power solutions for your pre-loaded trailers. Our drivers hook up and go, maximizing efficiency for your trailer pool.",
            features: ["Peak Season Support", "Trailer Repositioning", "Asset-Based Power"]
        },
        {
            icon: ShieldCheck,
            title: "High Value Cargo",
            description: "Enhanced security protocols for sensitive freight. We offer higher insurance limits and strict chain-of-custody procedures.",
            features: ["Door Sensors", "Dual Driver Teams", "Strict Vetting Process"]
        },
        {
            icon: BarChart3,
            title: "Drop Trailer Programs",
            description: "Optimize your dock operations with our drop trailer pools. Load on your schedule without detaining drivers.",
            features: ["Increased Dock Efficiency", "Reduced Detention Fees", "Flexible Loading Windows"]
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
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                        alt="Logistics Warehouse and Trucks"
                        className="w-full h-full object-cover opacity-90 scale-105 animate-in fade-in duration-[2s]" // Increased opacity and subtle scale
                    />
                    {/* Lighter Gradient: Only darkens the left side for text readability, keeping the image clear */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/40 to-transparent"></div>
                    {/* Bottom fade to seamless dark transition */}
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/80 border border-red-500/20 text-white text-xs font-bold uppercase tracking-widest mb-6 animate-in slide-in-from-left fade-in duration-700 shadow-lg shadow-red-900/20 backdrop-blur-sm">
                            <Route size={14} /> Logistics Solutions
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 animate-in slide-in-from-bottom fade-in duration-700 delay-100 drop-shadow-lg">
                            Shipment Solutions <br />
                            Built for <span className="relative inline-block whitespace-nowrap z-10 ml-2">
                                <span className="relative z-10 px-2">Business</span>
                                {/* Animated Skewed Red Highlight */}
                                <span
                                    className={`absolute bottom-2 left-0 h-[35%] bg-red-600 -skew-x-12 -z-10 opacity-90 transition-all duration-1000 ease-out origin-left ${isLoaded ? 'w-full' : 'w-0'}`}
                                ></span>
                            </span>
                        </h1>

                        <p className="text-xl text-slate-200 max-w-2xl leading-relaxed animate-in slide-in-from-bottom fade-in duration-700 delay-200 drop-shadow-md font-medium">
                            Tailored logistics services to keep your supply chain moving. Focused exclusively on reliable dry van transportation, we have the assets and the expertise to deliver.
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 animate-pulse delay-700 duration-1000">
                    <span className="text-xs font-bold uppercase tracking-widest text-shadow-sm">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </section>

            {/* =========================================
          2. SERVICES GRID (Floating Cards)
         ========================================= */}
            <section className="relative z-20 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        // Staggered delay for card entry
                        const delayClass = index === 0 ? 'delay-0' : index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : 'delay-500';

                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl p-8 shadow-xl border-t-4 border-red-600 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out group animate-in slide-in-from-bottom-8 fade-in fill-mode-backwards ${delayClass}`}
                            >
                                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 pt-4 border-t border-slate-100">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-700 uppercase tracking-wide group-hover:text-slate-900 transition-colors">
                                            <CheckCircle2 size={14} className="text-green-500 mt-0.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* =========================================
          3. ASSET-BASED ADVANTAGE (Replaces Placeholder)
         ========================================= */}
            <section className="relative py-24 bg-[#0f172a] border-t border-white/5 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] rounded-full animate-pulse duration-[4000ms]"></div>

                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left: Text Content */}
                        <div className="space-y-8 animate-in slide-in-from-left duration-700 delay-300 view-transition-name:slide-left">
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                                The Asset-Based <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Advantage.</span>
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                Unlike brokerage-heavy models, United Lane owns and operates its own fleet. This gives us—and you—greater control over your freight, pricing stability, and accountability.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4 group cursor-default">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 flex-shrink-0 group-hover:bg-red-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                        <Truck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">Capacity Guarantee</h4>
                                        <p className="text-slate-400 text-sm mt-1">When we commit to a lane, our trucks are there. No ghosting, no fall-offs.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 group cursor-default">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 flex-shrink-0 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Chain of Custody</h4>
                                        <p className="text-slate-400 text-sm mt-1">Your freight stays with our drivers, minimizing handling and risk of damage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Fleet Ops Graphic */}
                        <div className="relative animate-in slide-in-from-right duration-700 delay-500">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20 group">
                                {/* Tech UI Header */}
                                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-xs font-mono text-slate-500">FLEET_OPS_V2.0</div>
                                </div>

                                {/* Map/Fleet Visual */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-slate-400 uppercase tracking-widest font-bold">Total Fleet</div>
                                            <div className="text-4xl font-black text-white mt-1 group-hover:text-blue-400 transition-colors">70+</div>
                                        </div>
                                        <div className="h-12 w-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-900/50 group-hover:scale-110 transition-transform duration-300">
                                            <Navigation size={24} />
                                        </div>
                                    </div>

                                    {/* Animated Progress Bar */}
                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-[85%] bg-gradient-to-r from-red-600 to-red-400 rounded-full animate-[shimmer_2s_infinite] bg-[length:200%_100%]"></div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-2">
                                        <div className="bg-black/20 rounded-xl p-4 hover:bg-black/40 transition-colors">
                                            <div className="text-blue-400 mb-2"><Globe size={20} /></div>
                                            <div className="text-2xl font-bold text-white">48</div>
                                            <div className="text-xs text-slate-500 font-bold uppercase">States</div>
                                        </div>
                                        <div className="bg-black/20 rounded-xl p-4 hover:bg-black/40 transition-colors">
                                            <div className="text-green-400 mb-2"><CheckCircle2 size={20} /></div>
                                            <div className="text-2xl font-bold text-white">99%</div>
                                            <div className="text-xs text-slate-500 font-bold uppercase">On-Time</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Decorative Elements behind card */}
                            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-white/5 rounded-3xl border border-white/5"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================
          4. CTA SECTION
         ========================================= */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-black text-white mb-6">Ready to streamline your shipping?</h2>
                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                        Contact our logistics experts today for a quote or to discuss your dedicated lane needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-red-600/30">
                            Get a Free Quote <ArrowRight size={18} />
                        </a>
                        <a href="tel:+12342265821" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/10 backdrop-blur-sm hover:-translate-y-1">
                            Call Dispatch
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}