import { useState, useEffect, FormEvent } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  MessageSquare,
  ShieldCheck,
  Building,
  HelpCircle
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

interface ContactSectionProps {
  initialService?: string;
  initialMessage?: string;
  initialFacility?: string;
}

export const ContactSection = ({
  initialService = '',
  initialMessage = '',
  initialFacility = ''
}: ContactSectionProps) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceCategory, setServiceCategory] = useState(initialService || 'Intelligent Addressable Fire Detection & Alarm');
  const [facilityType, setFacilityType] = useState(initialFacility || 'Industrial Factory / Garments');
  const [urgency, setUrgency] = useState<'standard' | 'urgent' | 'tender'>('standard');
  const [projectScope, setProjectScope] = useState(initialMessage || '');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  // Sync props if changed externally (e.g. from service modal or configurator)
  useEffect(() => {
    if (initialService) setServiceCategory(initialService);
  }, [initialService]);

  useEffect(() => {
    if (initialMessage) setProjectScope(initialMessage);
  }, [initialMessage]);

  useEffect(() => {
    if (initialFacility) setFacilityType(initialFacility);
  }, [initialFacility]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please provide your full name.';
    if (!companyName.trim()) errs.companyName = 'Please provide your company or institution name.';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errs.email = 'Please provide a valid corporate email.';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) errs.phone = 'Please provide a valid contact phone.';
    if (!projectScope.trim() || projectScope.trim().length < 10) {
      errs.projectScope = 'Please outline your project scope or equipment requirements (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate verified dispatch to Reidius Solution engineering desk
    setTimeout(() => {
      const randomTicket = `RS-INQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedTicket(randomTicket);
      setIsSubmitting(false);
    }, 800);
  };

  const handleCopyTicket = () => {
    if (submittedTicket) {
      navigator.clipboard.writeText(submittedTicket);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setSubmittedTicket(null);
    setFullName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setProjectScope('');
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase">
            Official Inquiry Desk
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Consult With Our Engineering Team
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Request official equipment quotation, technical submittal, hydraulic calculation,
            or schedule an on-site life safety assessment for your premises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details & Hotlines (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Corporate Office Card */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Headquarters
                </div>
                <h3 className="text-xl font-bold text-white mt-1">
                  Corporate &amp; Registered Office
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">{COMPANY_INFO.address.line1}</span>
                    <span>{COMPANY_INFO.address.line2}, {COMPANY_INFO.address.city}</span>
                    <span className="block text-slate-400 text-xs">{COMPANY_INFO.address.country}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 block uppercase font-medium">Direct Telephone</span>
                    {COMPANY_INFO.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.value}`}
                        className="block font-bold text-white hover:text-teal-300 transition-colors"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <Mail className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 block uppercase font-medium">Official Inquiries</span>
                    {COMPANY_INFO.emails.map((email, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${email}`}
                        className="block text-xs font-medium text-slate-200 hover:text-teal-300 transition-colors"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Working Hours</span>
                    <span>{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href="https://wa.me/8801633060214?text=Hello%20Reidius%20Solution,%20I%20would%20like%20to%20inquire%20about%20fire%20safety%20systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat Directly on WhatsApp
                </a>
              </div>
            </div>

            {/* Turnkey Assurance Card */}
            <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 space-y-3">
              <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
                <span>Procurement &amp; Turnkey Guarantee</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Reidius Solution provides full submittal packages including manufacturer test certificates,
                UL/FM listings, single-line diagrams, hydraulic calculation reports, and factory warranty cards.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form or Submission Receipt (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-md">
              {submittedTicket ? (
                /* Submission Success Receipt */
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Inquiry Dispatched Successfully
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong className="text-slate-900">{fullName}</strong> from{' '}
                      <strong className="text-slate-900">{companyName}</strong>. Our engineering
                      desk has received your requirements.
                    </p>
                  </div>

                  {/* Ticket Card */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                      <span>Assigned Reference Ticket</span>
                      <span className="font-mono text-teal-700 font-bold">{submittedTicket}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-slate-400 block">Service Selected</span>
                        <span className="font-semibold text-slate-800">{serviceCategory}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Facility Type</span>
                        <span className="font-semibold text-slate-800">{facilityType}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-slate-400 block text-xs">Project Summary</span>
                      <p className="text-xs text-slate-700 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100 mt-1 line-clamp-3">
                        {projectScope}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={handleCopyTicket}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isCopied ? 'Ticket Copied!' : 'Copy Reference Ticket'}</span>
                      </button>
                      <span className="text-[11px] text-emerald-600 font-medium">
                        Expected SLA: &lt; 2 Hours
                      </span>
                    </div>
                  </div>

                  {/* Fast Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/8801633060214?text=Hello%20Reidius,%20referring%20to%20inquiry%20ticket%20${submittedTicket}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-colors"
                    >
                      Follow Up on WhatsApp
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-1/2 py-3 px-4 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs text-center transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-slate-200 pb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      Project Specification &amp; Quote Request
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Please provide details regarding your required systems, timeline, and location.
                    </p>
                  </div>

                  {/* Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Engr. Tanvir Ahmed"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-red-400 focus:ring-red-300'
                            : 'border-slate-300 focus:border-teal-500 focus:ring-teal-500/20'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Company / Institution *
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Apex Industrial Garments Ltd."
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.companyName
                            ? 'border-red-400 focus:ring-red-300'
                            : 'border-slate-300 focus:border-teal-500 focus:ring-teal-500/20'
                        }`}
                      />
                      {errors.companyName && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.companyName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. engineering@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-300'
                            : 'border-slate-300 focus:border-teal-500 focus:ring-teal-500/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +880 1700-000000"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-red-400 focus:ring-red-300'
                            : 'border-slate-300 focus:border-teal-500 focus:ring-teal-500/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Core Service Selection & Facility Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Primary System Required
                      </label>
                      <select
                        value={serviceCategory}
                        onChange={(e) => setServiceCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 cursor-pointer"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Turnkey Fire & Safety Package">
                          Turnkey Full Fire &amp; Safety Package
                        </option>
                        <option value="Annual Maintenance Contract (AMC)">
                          Annual Maintenance Contract (AMC) &amp; Testing
                        </option>
                        <option value="Product Procurement Only">
                          Equipment / Spare Supply Only
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Facility Classification
                      </label>
                      <select
                        value={facilityType}
                        onChange={(e) => setFacilityType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 cursor-pointer"
                      >
                        <option value="Industrial Factory / Garments">Industrial Factory / Garments</option>
                        <option value="Pharmaceutical Cleanroom / Lab">Pharmaceutical Cleanroom / Lab</option>
                        <option value="Commercial High-Rise / Office">Commercial High-Rise / Office</option>
                        <option value="5-Star Hotel / Hospitality">5-Star Hotel / Hospitality</option>
                        <option value="Tier-3/4 Data Center">Tier-3/4 Data Center</option>
                        <option value="Hospital / Healthcare Campus">Hospital / Healthcare Campus</option>
                        <option value="Other Infrastructure">Other Infrastructure</option>
                      </select>
                    </div>
                  </div>

                  {/* Inquiry Urgency / Nature */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Inquiry Priority
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setUrgency('standard')}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          urgency === 'standard'
                            ? 'bg-teal-50 border-teal-600 text-teal-800'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        Standard Quotation
                      </button>
                      <button
                        type="button"
                        onClick={() => setUrgency('urgent')}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          urgency === 'urgent'
                            ? 'bg-amber-50 border-amber-600 text-amber-900'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        Urgent Site Inspection
                      </button>
                      <button
                        type="button"
                        onClick={() => setUrgency('tender')}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          urgency === 'tender'
                            ? 'bg-blue-50 border-blue-600 text-blue-900'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        Formal Tender Bid
                      </button>
                    </div>
                  </div>

                  {/* Scope Details / Textarea */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Project Requirements &amp; Scope Details *
                    </label>
                    <textarea
                      rows={4}
                      value={projectScope}
                      onChange={(e) => setProjectScope(e.target.value)}
                      placeholder="Specify your building area, existing panel make (Siemens/Simplex/etc.), target commissioning deadline, or specific equipment quantities..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.projectScope
                          ? 'border-red-400 focus:ring-red-300'
                          : 'border-slate-300 focus:border-teal-500 focus:ring-teal-500/20'
                      }`}
                    />
                    {errors.projectScope && (
                      <p className="text-[11px] text-red-500 mt-1">{errors.projectScope}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:bg-slate-400 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Dispatching to Technical Desk...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Engineering Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    Your details are securely received by Reidius Solution technical engineers under corporate non-disclosure protocols.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
