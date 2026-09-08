import { BadgePercent, Clock, Layers, Wrench, Quote, Shield, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, CORE_PILLARS } from '../data/companyData';

export const WhyChooseUs = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-emerald-600" />;
      case 'ClockCheck':
      case 'Clock':
        return <Clock className="w-6 h-6 text-blue-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-teal-600" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-amber-600" />;
      default:
        return <Shield className="w-6 h-6 text-teal-600" />;
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case 'emerald':
        return 'hover:border-emerald-500/50';
      case 'blue':
        return 'hover:border-blue-500/50';
      case 'teal':
        return 'hover:border-teal-500/50';
      case 'amber':
        return 'hover:border-amber-500/50';
      default:
        return 'hover:border-slate-400';
    }
  };

  return (
    <section id="why-us" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Callout Banner straight from page 2 of Company Profile */}
        <div className="relative mb-16 p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Quote className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-medium text-slate-800 italic leading-relaxed">
                &ldquo;{COMPANY_INFO.quote}&rdquo;
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-sm font-semibold text-teal-700">
                <span>The Core Operating Philosophy</span>
                <span>•</span>
                <span className="text-slate-600 font-normal">Reidius Solution Management Charter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase">
            Engineering Excellence &amp; Value
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Enterprise Clients Choose Reidius Solution
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Filling the supply vacuum with authentic certified components, transparent pricing,
            and seasoned multi-brand engineering support across Bangladesh.
          </p>
        </div>

        {/* Four Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className={`p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between ${getBorderColor(
                pillar.color
              )}`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                  {getIcon(pillar.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Verified Guarantee</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision Dual Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              Our Corporate Mission
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Empowering Partners with Certainty &amp; Profitability
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">{COMPANY_INFO.mission}</p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Our Industry Vision
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Zero-Hazard Infrastructure Across South Asia
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">{COMPANY_INFO.vision}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
