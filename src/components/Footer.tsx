import { Shield, Phone, Mail, MapPin, ArrowUp, FileText } from 'lucide-react';
import { COMPANY_INFO, SERVICES, PARTNER_BRANDS } from '../data/companyData';

interface FooterProps {
  onOpenBrochure: () => void;
  onOpenPlanner: () => void;
}

export const Footer = ({ onOpenBrochure, onOpenPlanner }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          {/* Company Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 20C10 14.4772 14.4772 10 20 10C24.4183 10 28.1633 12.8596 29.4721 16.8506C28.2323 15.6987 26.5768 15 24.75 15C20.4698 15 17 18.4698 17 22.75C17 25.108 18.0504 27.2208 19.7143 28.6479C14.2494 27.5684 10 24.2384 10 20Z"
                    fill="#0D9488"
                  />
                  <circle cx="25" cy="24" r="6.5" fill="#EF4444" />
                  <circle cx="25" cy="24" r="2.5" fill="#FFFFFF" />
                </svg>
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white font-sans">
                  REIDIUS{' '}
                </span>
                <span className="font-semibold text-xl tracking-wider text-teal-400 font-sans">
                  SOLUTION
                </span>
              </div>
            </div>

            <p className="text-xs text-teal-400 font-semibold tracking-wide uppercase">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Authorized channel partner delivering turnkey life safety engineering, addressable
              fire detection, gas total flooding, NFPA fire pumps, and biometric access control
              systems across Bangladesh and South Asia.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-teal-400" />
                Corporate Brochure
              </button>
              <button
                onClick={onOpenPlanner}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition-colors cursor-pointer"
              >
                <Shield className="w-3.5 h-3.5 text-teal-400" />
                System Estimator
              </button>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  Core Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-teal-400 transition-colors">
                  Featured Portfolio
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-teal-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-teal-400 transition-colors">
                  Channel Partners
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-teal-400 transition-colors">
                  Client Endorsements
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-400 transition-colors">
                  Technical FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition-colors">
                  Inquiry Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Core Systems (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Engineering Systems
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.id} className="hover:text-slate-200 line-clamp-1">
                  • {s.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Corporate Office
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  {COMPANY_INFO.phones.map((p, idx) => (
                    <div key={idx} className="font-semibold text-slate-200">
                      {p.display}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Mail className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  {COMPANY_INFO.emails.map((e, idx) => (
                    <div key={idx} className="text-slate-300">
                      {e}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Partner Logos Strip in Footer */}
        <div className="py-6 border-b border-slate-900/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Authorized OEM &amp; Channel Alliances:
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {PARTNER_BRANDS.filter(b => b.logoUrl).map((brand, idx) => (
              <div
                key={idx}
                className="h-8 px-2.5 py-1 bg-white rounded flex items-center justify-center shadow-sm opacity-85 hover:opacity-100 transition-opacity"
                title={`${brand.name} - ${brand.role}`}
              >
                <img
                  src={brand.logoUrl}
                  alt={`${brand.name} Logo`}
                  className="max-h-5 max-w-[75px] w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved. Compliant with NFPA, UL, EN54 &amp; BNBC Standards.
          </div>

          <div className="flex items-center gap-4">
            <span>Sincerity &amp; Integrity</span>
            <span>•</span>
            <span>Made for Industrial &amp; Commercial Excellence</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
