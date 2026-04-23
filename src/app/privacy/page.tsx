'use client';

import React from 'react';
import { Shield, Lock, FileText, ArrowLeft, MessageSquare, Mail } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#0f172a] font-sans text-slate-300 selection:bg-red-500 selection:text-white">

            {/* Header */}
            <section className="pt-32 pb-12 px-6 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
                <a href="/" className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 mb-8 font-bold text-sm uppercase tracking-wider transition-colors">
                    <ArrowLeft size={16} /> Back to Home
                </a>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Privacy Policy & Terms</h1>
                <p className="text-lg text-slate-400">
                    Transparency is part of our business. Here is how we handle your data and protect your privacy.
                </p>
            </section>

            {/* Content */}
            <section className="px-6 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full pb-24">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 space-y-12">

                    {/* Section 1 */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Shield className="text-red-500" size={24} /> 1. Information We Collect
                        </h2>
                        <p className="mb-4 text-slate-300">We collect information to provide you with a better experience while using our services. The types of information we collect include:</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-400">
                            <li><strong>Personal Information:</strong> When you fill out forms or interact with the Site, you may provide personal details such as Name, Email address, and Phone number.</li>
                            <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies, web beacons, and similar tracking technologies to enhance your experience. These help us understand user behavior, preferences, and improve our services. You can manage cookies through your browser settings.</li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <FileText className="text-blue-500" size={24} /> 2. How We Use Your Information
                        </h2>
                        <p className="mb-4 text-slate-300">We use the information we collect for the following purposes:</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-400">
                            <li><strong>Provide Services:</strong> To offer trucking services, process orders, provide quotes, and facilitate customer support.</li>
                            <li><strong>Improve User Experience:</strong> To analyze usage patterns, improve the Site, and enhance user experience.</li>
                            <li><strong>Communication:</strong> To send updates, promotions, and important information regarding our services.</li>
                            <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations or to respond to legal requests.</li>
                        </ul>
                    </div>

                    {/* Section 3 - SMS Terms */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <MessageSquare className="text-green-500" size={24} /> 3. SMS Terms & Conditions
                        </h2>

                        <div className="bg-white/5 rounded-xl p-6 border border-white/5 space-y-4 text-sm text-slate-300">
                            <p><strong>SMS Consent Communication:</strong> The phone numbers collected during the SMS consent process will not be shared with third parties for marketing purposes.</p>

                            <p><strong>Types of SMS Communications:</strong> If you have consented to receive conversational text messages from UNITED LANE LLC, you may receive conversational SMS messages related to follow-up messages, updates related to transportation services, and messages from brokers.</p>

                            <p><strong>Message Frequency:</strong> Message frequency may vary depending on the type of communication and your engagement. You might receive 5-10 messages a day regarding your request.</p>

                            <p><strong>Potential Fees:</strong> Standard message and data rates may apply, depending on your carrier’s pricing plan. These fees may differ if the message is sent domestically or internationally.</p>

                            <p><strong>Opt-In Method:</strong> You may opt in to receive conversational SMS messages from UNITED LANE LLC by submitting a form on our website.</p>

                            <p><strong>Opt-Out Method:</strong> You can opt out of receiving SMS messages at any time. To do so, simply reply "STOP" to any SMS you receive. Alternatively, you can contact us directly to request removal from our messaging list.</p>

                            <p><strong>Help:</strong> If you are experiencing any issues, you can reply with the keyword HELP. Or, you can get help directly from us at (234) 226-5821.</p>

                            <p><strong>Additional Options:</strong> If you do not wish to receive SMS messages, you can choose not to check the SMS consent box on our forms.</p>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">4. Your Rights and Choices</h2>
                        <p className="mb-4 text-slate-300">As a user, you have the following rights concerning your personal data:</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-400">
                            <li><strong>Access:</strong> You can request to view the personal information we have collected about you.</li>
                            <li><strong>Correction:</strong> You can update or correct inaccurate or incomplete information.</li>
                            <li><strong>Deletion:</strong> You can request the deletion of your personal data, subject to legal or contractual obligations.</li>
                            <li><strong>Opt-Out:</strong> You can opt out of receiving marketing communications from us by clicking the "unsubscribe" link in our emails or contacting us directly.</li>
                            <li><strong>Cookies Management:</strong> You can manage or disable cookies through your browser settings.</li>
                        </ul>
                        <p className="mt-4 text-slate-400">If you wish to exercise any of these rights, please contact us at <a href="mailto:safety@unitedlanellc.com" className="text-red-400 hover:text-white transition-colors">safety@unitedlanellc.com</a>.</p>
                    </div>

                    {/* Section 5 & 6 */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-xl font-bold text-white mb-3">5. Children’s Privacy</h2>
                            <p className="text-slate-400 text-sm">Our services are not intended for children under the age of 13, and we do not knowingly collect or solicit personal information from children. If we learn that we have collected personal information from a child under 13, we will take steps to delete that information as quickly as possible.</p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white mb-3">6. Third-Party Links</h2>
                            <p className="text-slate-400 text-sm">Our Site may contain links to external websites that are not operated by us. We are not responsible for the content, privacy practices, or policies of these third-party sites. We encourage you to review the privacy policies of any external sites you visit.</p>
                        </div>
                    </div>

                    {/* Section 7 */}
                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">7. Changes to This Privacy Policy</h2>
                        <p className="text-slate-400">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Effective Date." We encourage you to periodically review this policy to stay informed about how we are protecting your information.</p>
                    </div>

                    {/* Contact */}
                    <div className="pt-8 border-t border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Mail className="text-red-500" /> 8. Contact Us
                        </h2>
                        <p className="text-slate-400">
                            If you have any questions about this Privacy Policy, the data we collect, or how we use your information, please contact us at:<br />
                            <a href="mailto:safety@unitedlanellc.com" className="text-red-500 font-bold hover:text-red-400 text-lg transition-colors mt-2 inline-block">safety@unitedlanellc.com</a>
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
}