import React, { useState, useEffect } from 'react';
import {
    Menu,
    X,
    Phone,
    Mail,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    ArrowRight,
    Truck,
    Users
} from 'lucide-react';

/**
 * Cropped Logo Component
 * Uses the provided unllogo.jpg but crops out the "Join Us" badge 
 * and outer circle using CSS offsets.
 */
const Logo = ({ light = false }: { light?: boolean }) => (
    <div className="flex items-center gap-3 group cursor-pointer">
        <div className="relative w-12 h-12 overflow-hidden rounded-lg bg-white shadow-sm border border-slate-100 flex-shrink-0">
            <img
                src="/unllogo.jpg"
                alt="United Lane Logo"
                className="absolute w-[180%] max-w-none h-[180%] top-1/2 left-1/2 -translate-x-[52%] -translate-y-[45%] object-contain"
                onError={(e: any) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-red-600 flex items-center justify-center text-white font-bold text-xs text-center">UL</div>';
                }}
            />
        </div>

        <div className="flex flex-col leading-none">
            <span className={`text-xl font-black tracking-tighter ${light ? 'text-white' : 'text-[#0f172a]'}`}>
                UNITED<span className="text-red-600 font-extrabold">LANE</span>
            </span>
            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${light ? 'text-slate-400' : 'text-slate-500'}`}>
                Logistics Excellence
            </span>
        </div>
    </div>
);

/**
 * Navbar Component
 */
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-6'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-slate-600 hover:text-red-600 transition-colors uppercase tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-[#0f172a] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-600 transition-all shadow-lg active:scale-95">
                            Join Our Team
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-[#0f172a] hover:bg-slate-100 rounded-lg">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl animate-in slide-in-from-top duration-300">
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-lg font-bold text-slate-800 hover:text-red-600 px-4 py-2 rounded-lg hover:bg-slate-50 transition-all"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="w-full bg-red-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                            Join Our Team <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

/**
 * Footer Component
 */
const Footer = () => (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6">
                    <Logo light />
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                        Excellence in Northfield logistics. We provide reliable, safe, and efficient transportation solutions across the country.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                            <Twitter size={18} />
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-4 uppercase tracking-tighter">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><a href="#" className="hover:text-white transition-colors">Shipment Tracking</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Service Area</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Safety Records</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Partner With Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-4 uppercase tracking-tighter">Get In Touch</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li className="flex items-start gap-3">
                            <Phone size={18} className="text-red-500 mt-1 flex-shrink-0" />
                            <span>+1 (234) 226-5821</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail size={18} className="text-red-500 mt-1 flex-shrink-0" />
                            <span>carrier@unitedlanellc.com</span>
                        </li>
                        <li className="flex items-start gap-3 leading-relaxed">
                            <Truck size={18} className="text-red-500 mt-1 flex-shrink-0" />
                            <span>61 W AURORA RD SUITE C<br />Northfield, OH 44067</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50">
                    <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Users size={20} className="text-red-500" />
                        Want to Drive?
                    </h4>
                    <p className="text-slate-400 text-sm mb-6">Join one of the fastest growing fleets in Ohio. Excellent pay and home time.</p>
                    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg text-sm uppercase active:scale-95">
                        Apply Today
                    </button>
                </div>
            </div>
            <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                <p>© {new Date().getFullYear()} United Lane LLC. Northfield, OH.</p>
                <div className="flex gap-6 text-center">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <span className="text-slate-600">MC #123456</span>
                    <span className="text-slate-600">DOT #987654</span>
                </div>
            </div>
        </div>
    </footer>
);

/**
 * MainLayout Component
 */
export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-red-100 selection:text-red-900 bg-white">
            {/* Integrated Navigation Bar */}
            <Navbar />

            {/* Main content area where pages are injected */}
            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Integrated Footer */}
            <Footer />
        </div>
    );
}