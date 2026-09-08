import { Shield, Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { PARTNER_BRANDS, CERTIFICATIONS } from '../data/companyData';

export const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-slate-50/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold tracking-wide uppercase border border-teal-200">
            Global Engineering Alliances
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Authorized Channel Partners of World-Class Brands
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Direct authorized procurement channel delivering genuine equipment, manufacturer warranties,
            and certified technical commissioning across Bangladesh and South Asia.
          </p>
        </div>

        {/* Brand Logo Highlight Strip */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Official Manufacturer &amp; Channel Partner Logos
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
            {PARTNER_BRANDS.filter(b => b.logoUrl).map((brand, idx) => (
              <div
                key={idx}
                className="w-full h-20 px-4 py-2 flex items-center justify-center rounded-xl bg-slate-50/80 hover:bg-white border border-slate-150 hover:border-slate-300 hover:shadow-md transition-all duration-200 group"
                title={`${brand.name} - ${brand.role}`}
              >
                <img
                  src={brand.logoUrl}
                  alt={`${brand.name} Logo`}
                  className="max-h-12 max-w-[130px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Brands Grid with Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PARTNER_BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Logo Banner & Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                    {brand.role}
                  </span>
                  <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    {brand.origin}
                  </span>
                </div>

                {/* Official Brand Logo Box */}
                <div className="h-16 flex items-center justify-start px-3 py-2 bg-slate-50/60 rounded-xl border border-slate-100">
                  {brand.logoUrl ? (
                    <img
                      src={brand.logoUrl}
                      alt={`${brand.name} Official Logo`}
                      className="max-h-11 max-w-[170px] object-contain object-left"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-2xl font-black tracking-tight text-slate-900 font-sans">
                      {brand.logoText}
                    </div>
                  )}
                </div>

                {/* Brand Details */}
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {brand.specialty}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Genuine Factory Warranty</span>
                </div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">OEM Certified</span>
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

