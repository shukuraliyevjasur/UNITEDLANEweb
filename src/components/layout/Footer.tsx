import React from 'react';
import { Phone, Mail, Truck, Users, ShieldCheck, Code } from 'lucide-react';

const Logo = () => (
    <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-white shadow-sm border border-slate-100 flex-shrink-0">
            <img
                src="/unllogo.jpg"
                alt="United Lane Logo"
                className="absolute w-[180%] max-w-none h-[180%] top-1/2 left-1/2 -translate-x-[52%] -translate-y-[45%] object-contain"
            />
        </div>
        <div className="flex flex-col justify-center h-12">
            <span className="text-xl font-black tracking-tighter text-white leading-none">
                UNITED<span className="text-red-600 font-extrabold">LANE</span> <span className="text-sm font-bold text-slate-400 ml-0.5">LLC</span>
            </span>
        </div>
    </div>
);

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0f172a] text-white pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <a href="/">
                            <Logo />
                        </a>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Excellence in Northfield logistics. We provide reliable, safe, and efficient transportation solutions across the country.
                        </p>
                    </div>

                    {/* Column 2: Navigation */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-4 uppercase tracking-tighter">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="/services" className="hover:text-white transition-colors">Our Services</a></li>
                            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="/privacy" className="hover:text-white transition-colors flex items-center gap-2"><ShieldCheck size={14} /> Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-4 uppercase tracking-tighter">Get In Touch</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-red-500 mt-1 flex-shrink-0" />
                                <a href="tel:+12342265821" className="hover:text-white transition-colors">+1 (234) 226-5821</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-red-500 mt-1 flex-shrink-0" />
                                <a href="mailto:carrier@unitedlanellc.com" className="hover:text-white transition-colors break-all">carrier@unitedlanellc.com</a>
                            </li>
                            <li className="flex items-start gap-3 leading-relaxed">
                                <Truck size={18} className="text-red-500 mt-1 flex-shrink-0" />
                                <span>61 W AURORA RD SUITE C<br />Northfield, OH 44067</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: CTA */}
                    <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                        <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Users size={20} className="text-red-500" />
                            Want to Drive?
                        </h4>
                        <p className="text-slate-400 text-sm mb-6">
                            Join one of the fastest growing fleets in Ohio. Excellent pay and home time.
                        </p>
                        <a href="/careers" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg text-sm uppercase flex items-center justify-center">
                            Apply Today
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <p>© {currentYear} United Lane LLC. Northfield, OH.</p>

                        {/* Developer Credit */}
                        <a
                            href="https://t.me/projectJndS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/30 rounded-full hover:bg-black/50 transition-colors border border-white/5 group"
                        >
                            <span className="text-slate-500 group-hover:text-slate-300">BUILT BY</span>
                            <span className="text-red-500 group-hover:text-red-400">Project J & S</span>
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="/privacy" className="hover:text-white transition-colors">Privacy & Terms</a>
                        <span className="text-slate-600">MC-940725</span>
                        <span className="text-slate-600">USDOT 2820758</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}