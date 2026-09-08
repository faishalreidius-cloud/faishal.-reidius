import { Shield, Award, CheckCircle2 } from 'lucide-react';
import { PARTNER_BRANDS, CERTIFICATIONS } from '../data/companyData';

export const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold tracking-wide uppercase border border-slate-200">
            Global Engineering Alliances
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Authorized Channel Partners of World-Class Brands
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Direct authorized procurement channel delivering genuine equipment, manufacturer warranties,
            and specialized technical certification across Bangladesh.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PARTNER_BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                    {brand.role}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {brand.origin}
                  </span>
                </div>

                <div className="pt-2">
                  <div className="text-2xl font-black tracking-tight text-slate-900 font-sans">
                    {brand.logoText}
                  </div>
                  <p className="text-xs font-semibold text-slate-600 mt-1">
                    {brand.specialty}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-teal-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Genuine Factory Warranty</span>
              </div>
            </div>
          ))}
        </div>

        {/* International Standards & Certifications Bar */}
        <div className="p-8 rounded-2xl bg-slate-900 text-white shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-400">
              <Award className="w-4 h-4" />
              Compliance Standards
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Compliant with International Fire &amp; Life Safety Norms
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              All systems supplied and integrated by Reidius Solution carry globally recognized certifications
              required for multinational audit standards (Accord, RSC, Alliance, NFPA, and BNBC).
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center flex flex-col items-center justify-center space-y-1.5 hover:bg-slate-750 transition-colors"
              >
                <Shield className="w-5 h-5 text-teal-400" />
                <div className="font-extrabold text-sm text-white">{cert.code}</div>
                <div className="text-[10px] text-slate-400 line-clamp-1">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
