'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

/**
 * Logo Component
 * Added space between UNITED and LANE for better readability.
 */
const Logo = () => (
    <div className="flex items-center gap-3 group cursor-pointer">
        {/* Crop Container */}
        <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white shadow-sm border border-slate-100 flex-shrink-0">
            <img
                src="/unllogo.jpg"
                alt="United Lane Logo"
                className="absolute w-[180%] max-w-none h-[180%] top-1/2 left-1/2 -translate-x-[52%] -translate-y-[45%] object-contain"
            />
        </div>

        <div className="flex flex-col justify-center h-10">
            <span className="text-lg font-black tracking-tighter text-white leading-none">
                UNITED <span className="text-red-600 font-extrabold">LANE</span>
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400 leading-none mt-0.5">
                LLC
            </span>
        </div>
    </div>
);

/**
 * Navbar Component
 */
export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState('');

    // Handle active link detection safely for the preview environment
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">

                        {/* 1. Logo Section */}
                        <div className="flex-shrink-0">
                            <a href="/">
                                <Logo />
                            </a>
                        </div>

                        {/* 2. Center Navigation (Desktop) - Pill Style Container */}
                        <div className="hidden md:flex items-center justify-center flex-1 px-8">
                            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 shadow-inner">
                                {navLinks.map((link) => {
                                    // Simple check for active state
                                    const isActive = currentPath === link.href;
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className={`
                        text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded-full transition-all duration-300
                        ${isActive
                                                    ? 'bg-red-600 text-white shadow-lg shadow-red-900/40 scale-105'
                                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                                }
                      `}
                                        >
                                            {link.name}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 3. Right CTA Button - Links to /careers */}
                        <div className="hidden md:flex items-center flex-shrink-0">
                            <a
                                href="/careers"
                                className="group bg-white text-[#0f172a] hover:bg-slate-200 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-95"
                            >
                                Join Our Team
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl animate-in slide-in-from-top duration-300 h-screen">
                        <div className="px-6 py-8 space-y-4 flex flex-col h-full pb-32">
                            {navLinks.map((link) => {
                                const isActive = currentPath === link.href;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`
                      block text-lg font-black uppercase tracking-wide px-6 py-4 rounded-2xl transition-all border
                      ${isActive
                                                ? 'bg-red-600/10 text-red-500 border-red-600/20'
                                                : 'text-slate-300 hover:text-white hover:bg-white/5 border-transparent'
                                            }
                    `}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                            <div className="mt-auto">
                                <a
                                    href="/careers"
                                    className="w-full bg-red-600 text-white py-4 rounded-2xl font-black uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-red-900/20"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Join Our Team <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}