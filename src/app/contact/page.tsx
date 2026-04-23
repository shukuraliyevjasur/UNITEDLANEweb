'use client';

import React, { useState } from 'react';
import {
    Mail,
    MapPin,
    Phone,
    Clock,
    Send,
    Loader2,
    CheckCircle,
    MessageSquare,
    Globe,
    ArrowRight
} from "lucide-react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Exact location: 61 W AURORA RD SUITE C, Northfield, OH 44067
    const googleMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.244304856428!2d-81.5367616!3d41.3252575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88312066c07a92ad%3A0x1a4fc9fe2e!2s61%20W%20Aurora%20Rd%20Suite%20C%2C%20Northfield%2C%20OH%2044067!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            console.log('Payload ready for takeoff:', data);
            // Simulating network delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSuccess(true);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#0f172a] font-sans text-slate-100 selection:bg-red-500 selection:text-white">

            {/* =========================================
                1. HERO SECTION
               ========================================= */}
            <section className="relative min-h-[60vh] flex items-center pt-32 pb-24 overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="United Lane Office Headquarters"
                        className="w-full h-full object-cover opacity-60 scale-105 animate-in fade-in duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/90 border border-red-500/20 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm shadow-lg animate-in slide-in-from-left fade-in duration-700">
                            <MessageSquare size={14} /> We're Here To Help
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 drop-shadow-2xl animate-in slide-in-from-bottom fade-in duration-700 delay-100">
                            Get In <br />
                            <span className="relative inline-block whitespace-nowrap z-10 ml-2">
                                <span className="relative z-10 px-2">Touch</span>
                                <span className="absolute bottom-2 left-0 h-[35%] w-full bg-red-600 -skew-x-12 -z-10 opacity-90"></span>
                            </span>
                        </h1>

                        <p className="text-xl text-slate-200 max-w-2xl leading-relaxed font-medium drop-shadow-lg animate-in slide-in-from-bottom fade-in duration-700 delay-200">
                            Have a question about a shipment, a career, or our services? Our dispatch team is standing by 24/7.
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================
                2. CONTACT CONTENT (Grid)
               ========================================= */}
            <section className="relative z-20 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-32 -mt-20">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* LEFT COLUMN: Contact Info (Span 5) */}
                    <div className="lg:col-span-5 space-y-8 animate-in slide-in-from-bottom fade-in duration-700 delay-300">
                        {/* Info Card */}
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all">
                            <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center text-red-500 flex-shrink-0 border border-red-500/20">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Headquarters</h3>
                                        <p className="text-lg font-medium text-white leading-relaxed">
                                            61 W AURORA RD SUITE C<br />
                                            Northfield, OH 44067
                                        </p>
                                        <a href="https://maps.google.com/?q=61+W+AURORA+RD+SUITE+C+Northfield+OH+44067" target="_blank" rel="noopener noreferrer" className="text-red-400 text-sm font-bold mt-2 inline-flex items-center gap-1 hover:text-red-300 transition-colors">
                                            Get Directions <ArrowRight size={14} />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0 border border-blue-500/20">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</h3>
                                        <p className="text-lg font-medium text-white">
                                            <a href="tel:+12342265821" className="hover:text-red-400 transition-colors">
                                                +1 (234) 226-5821
                                            </a>
                                        </p>
                                        <p className="text-slate-500 text-sm mt-1">24/7 Dispatch Support</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 flex-shrink-0 border border-green-500/20">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email</h3>
                                        <p className="text-lg font-medium text-white">
                                            <a href="mailto:carrier@unitedlanellc.com" className="hover:text-red-400 transition-colors">
                                                carrier@unitedlanellc.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 flex-shrink-0 border border-purple-500/20">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Office Hours</h3>
                                        <p className="text-lg font-medium text-white">
                                            Mon - Fri: 8:00 AM - 6:00 PM EST
                                        </p>
                                        <p className="text-slate-500 text-sm mt-1">Dispatch available 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Functional Live Map Container */}
                        <div className="rounded-2xl h-80 w-full overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
                            <iframe
                                src={googleMapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="United Lane Office Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Contact Form (Span 7) */}
                    <div className="lg:col-span-7 animate-in slide-in-from-bottom fade-in duration-700 delay-500">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl h-full">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                                <p className="text-slate-400 mt-2">Fill out the form below and our team will get back to you within 24 hours.</p>
                            </div>

                            {isSuccess ? (
                                <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-6 animate-in fade-in zoom-in duration-500 bg-green-500/5 rounded-2xl border border-green-500/20 p-8">
                                    <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-2 border border-green-500/30 shadow-lg shadow-green-900/20">
                                        <CheckCircle size={48} />
                                    </div>
                                    <h3 className="text-3xl font-black text-white">Message Sent!</h3>
                                    <p className="text-slate-300 max-w-xs text-lg">
                                        Thank you for reaching out. A member of our team will contact you shortly.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-4 px-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/10"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="fullName"
                                                required
                                                className="w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-slate-600 focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                className="w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-slate-600 focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 outline-none transition-all"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-slate-600 focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 outline-none transition-all"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Subject</label>
                                        <div className="relative">
                                            <select
                                                id="subject"
                                                name="subject"
                                                className="w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-white focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 outline-none transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="General Inquiry" className="bg-[#0f172a]">General Inquiry</option>
                                                <option value="Request a Quote" className="bg-[#0f172a]">Request a Quote</option>
                                                <option value="Driver Application" className="bg-[#0f172a]">Driver Application Status</option>
                                                <option value="Billing" className="bg-[#0f172a]">Billing / Accounting</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                                <ArrowRight size={14} className="rotate-90" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-white placeholder:text-slate-600 focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 outline-none transition-all resize-none"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-1"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" /> Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} /> Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}