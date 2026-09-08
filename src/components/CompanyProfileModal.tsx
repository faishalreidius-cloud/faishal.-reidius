import { useState } from 'react';
import { X, FileText, Download, CheckCircle2, Phone, Mail, MapPin, Printer, Shield, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES, PARTNER_BRANDS } from '../data/companyData';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: () => void;
}

export const CompanyProfileModal = ({
  isOpen,
  onClose,
  onNavigateToContact
}: CompanyProfileModalProps) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'brands' | 'technical' | 'contact'>('overview');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `REIDIUS SOLUTION - Company Profile
Tagline: ${COMPANY_INFO.tagline}
Core Philosophy: "${COMPANY_INFO.quote}"
Authorized Channel Partner: Siemens, Simplex, Bosch, MAS DAF, Virdi, Fipron, AP Sensing.
Office: ${COMPANY_INFO.address.full}
Phones: ${COMPANY_INFO.phones.map((p) => p.display).join(', ')}
Emails: ${COMPANY_INFO.emails.join(', ')}`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Top Header */}
        <div className="p-6 sm:p-8 bg-slate-900 text-white flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-500 text-slate-950 uppercase">
                Official Corporate Catalog
              </span>
              <span className="text-xs text-slate-400 font-mono">Doc Ref: RS-BD-2026</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <span>{COMPANY_INFO.name} Profile &amp; Specifications</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'overview'
                ? 'border-teal-600 text-teal-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Corporate Charter &amp; Pillars
          </button>
          <button
            onClick={() => setActiveTab('brands')}
            className={`py-3.5 px-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'brands'
                ? 'border-teal-600 text-teal-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            World-Class Brand Partners
          </button>
          <button
            onClick={() => setActiveTab('technical')}
            className={`py-3.5 px-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'technical'
                ? 'border-teal-600 text-teal-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Core Technical Systems
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`py-3.5 px-4 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'contact'
                ? 'border-teal-600 text-teal-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Official Contacts &amp; Desk
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Quote */}
              <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 space-y-2">
                <span className="text-xs font-bold uppercase text-teal-800 tracking-wider">
                  Our Philosophy
                </span>
                <p className="text-base sm:text-lg font-medium text-slate-900 italic">
                  &ldquo;{COMPANY_INFO.quote}&rdquo;
                </p>
              </div>

              {/* Establishment Narrative */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  About Reidius Solution
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Reidius Solution has been established with the mindset to fill up the present vacuum of supply of addressable Fire Detection &amp; Alarm, Gas based total flooding, Electrical Panel Suppression, Aerosol based suppression, Foam Based automatic suppression, Access Control, CCTV system, Fire Fighting System, Networking, Building Management System and LHS cable. Also we provide service &amp; commissioning support to associate partners.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Wherever you are, regardless of how remote or distant and no matter how exacting your requirements, we are capable enough to deliver ordered products in the given time span.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-teal-700 uppercase">Mission</span>
                  <p className="text-xs text-slate-600 leading-relaxed">{COMPANY_INFO.mission}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                  <span className="text-xs font-bold text-blue-700 uppercase">Vision</span>
                  <p className="text-xs text-slate-600 leading-relaxed">{COMPANY_INFO.vision}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'brands' && (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600">
                Reidius Solution is proud to serve as authorized channel and distribution partner for the world’s most trusted life safety names:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PARTNER_BRANDS.map((brand, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-extrabold text-slate-900">{brand.logoText}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                        {brand.role}
                      </span>
                    </div>
                    <div className="text-xs text-slate-700 font-medium">{brand.specialty}</div>
                    <div className="text-[11px] text-slate-400">Manufactured in {brand.origin}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600">
                Summary of equipment and systems supplied and commissioned by Reidius Solution:
              </p>
              <div className="grid grid-cols-1 gap-3">
                {SERVICES.map((s, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="font-bold text-slate-900 text-xs sm:text-sm">{s.title}</h5>
                      <div className="flex gap-1">
                        {s.certifications.slice(0, 3).map((c, ci) => (
                          <span key={ci} className="text-[10px] px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded font-semibold">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-600">{s.shortDesc}</p>
                    <div className="text-[11px] text-teal-700 font-semibold">
                      Brands: {s.brands.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Corporate Office
                  </div>
                  <div className="space-y-1 text-xs text-slate-700">
                    <div className="font-bold text-slate-900">{COMPANY_INFO.address.line1}</div>
                    <div>{COMPANY_INFO.address.line2}</div>
                    <div>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}</div>
                  </div>
                  <div className="pt-2 text-[11px] text-slate-500">
                    {COMPANY_INFO.workingHours}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Direct Communications
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">Direct Phones</span>
                      {COMPANY_INFO.phones.map((phone, i) => (
                        <div key={i} className="font-bold text-teal-700">
                          {phone.display}
                        </div>
                      ))}
                    </div>
                    <div className="pt-1">
                      <span className="text-slate-400 block text-[10px] uppercase">Official Emails</span>
                      {COMPANY_INFO.emails.map((email, i) => (
                        <div key={i} className="font-medium text-slate-700">
                          {email}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
            >
              {isCopied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <FileText className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'Summary Copied!' : 'Copy Summary'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onNavigateToContact();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            <span>Proceed to Official Inquiry Form</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
